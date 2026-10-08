$targetDir = "c:\Users\augus\OneDrive\Documents\04 Moi\Travail perso\Projets informatique\Apprendre\Quizz app"
Push-Location $targetDir
try {
    git add .
    git commit -m "feat: structure modulaire des cours par matiere, ajout de C4, Bash, PowerShell et masquage initial des dossiers"
    Write-Host "Committed in $targetDir"
} catch {
    Write-Host "Commit note: $_"
} finally {
    Pop-Location
}
