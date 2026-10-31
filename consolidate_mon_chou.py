import os
import glob
import json

def consolidate():
    quizz_dir = r"Cours\Mon chou\Quizz"
    flashcard_dir = r"Cours\Mon chou\Flashcard"
    output_js = r"Cours\Mon chou\mon_chou_pass.js"

    quizz_files = sorted(glob.glob(os.path.join(quizz_dir, "*.json")))
    flashcard_files = sorted(glob.glob(os.path.join(flashcard_dir, "*.json")))

    print(f"Found {len(quizz_files)} quizz JSON files in {quizz_dir}")
    print(f"Found {len(flashcard_files)} flashcard JSON files in {flashcard_dir}")

    all_quizzes = {}
    total_questions = 0
    validation_issues = []

    for qf in quizz_files:
        fname = os.path.basename(qf)
        try:
            with open(qf, "r", encoding="utf-8-sig") as f:
                data = json.load(f)
            
            # If data is a dict representing a single quiz
            if isinstance(data, dict):
                # Standard format has 'name', 'folder', 'description', 'questions'
                quiz_name = data.get("name", os.path.splitext(fname)[0])
                questions = data.get("questions", [])
                
                # Check constraints
                if len(questions) < 20:
                    validation_issues.append(f"{fname}: only {len(questions)} questions (expected >= 20)")
                
                for idx, q in enumerate(questions):
                    opts = q.get("options", [])
                    if len(opts) < 2:
                        validation_issues.append(f"{fname} Q{idx+1}: < 2 options")
                    if not any(o.get("isCorrect") for o in opts):
                        validation_issues.append(f"{fname} Q{idx+1}: no correct answer")

                total_questions += len(questions)
                all_quizzes[quiz_name] = data
            elif isinstance(data, list):
                # Maybe a list of questions or multiple quizzes
                quiz_name = os.path.splitext(fname)[0]
                total_questions += len(data)
                all_quizzes[quiz_name] = {
                    "name": quiz_name,
                    "folder": "PASS - Divers",
                    "description": quiz_name,
                    "prerequisites": [],
                    "questions": data
                }
        except Exception as e:
            validation_issues.append(f"Error loading {fname}: {e}")

    all_flashcards = []
    seen_rectos = set()

    for ff in flashcard_files:
        fname = os.path.basename(ff)
        try:
            with open(ff, "r", encoding="utf-8-sig") as f:
                cards = json.load(f)
            if isinstance(cards, list):
                for card in cards:
                    recto = card.get("recto", "").strip()
                    if recto and recto not in seen_rectos:
                        seen_rectos.add(recto)
                        all_flashcards.append(card)
        except Exception as e:
            validation_issues.append(f"Error loading flashcards from {fname}: {e}")

    print(f"Total Quizzes loaded: {len(all_quizzes)}")
    print(f"Total Questions: {total_questions}")
    print(f"Total Unique Flashcards: {len(all_flashcards)}")

    if validation_issues:
        print("\n=== Validation Warnings / Issues ===")
        for issue in validation_issues[:30]:
            print(" -", issue)
        if len(validation_issues) > 30:
            print(f" ... and {len(validation_issues) - 30} more")
    else:
        print("\nAll quizzes and flashcards passed validation perfectly!")

    # Now generate mon_chou_pass.js
    with open(output_js, "w", encoding="utf-8") as out:
        out.write("// ============================================================================\n")
        out.write(f"// MON CHOU - PACK DE {len(all_quizzes)} QUIZZ & {len(all_flashcards)} FLASHCARDS PASS\n")
        out.write("// ============================================================================\n")
        out.write("window.defaultData = window.defaultData || {};\n")
        out.write("var defaultData = window.defaultData;\n\n")
        out.write("// Inscription des matières PASS dans defaultData\n")
        out.write("Object.assign(defaultData, ")
        out.write(json.dumps(all_quizzes, ensure_ascii=False, indent=2))
        out.write(");\n\n")
        out.write("// Inscription des Flashcards PASS dans defaultData._flashcards\n")
        out.write("defaultData._flashcards = defaultData._flashcards || [];\n")
        out.write("(function() {\n")
        out.write("    const passCards = ")
        out.write(json.dumps(all_flashcards, ensure_ascii=False, indent=2))
        out.write(";\n")
        out.write("    passCards.forEach(card => {\n")
        out.write("        if (!defaultData._flashcards.some(c => c.recto === card.recto)) {\n")
        out.write("            defaultData._flashcards.push(card);\n")
        out.write("        }\n")
        out.write("    });\n")
        out.write("})();\n")

    print(f"\nSuccessfully generated {output_js} with {len(all_quizzes)} quizzes and {len(all_flashcards)} flashcards!")

if __name__ == "__main__":
    consolidate()

