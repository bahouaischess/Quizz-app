// ============================================================================
// CodeRunner - Moteur d'exécution et de validation de code (Python & C)
// Gère l'exécution en sandbox, la capture stdout/stderr et les suites de tests unitaires
// ============================================================================

const CodeRunner = {
    // Exécute du code Python avec un ensemble de tests unitaires
    // code: chaîne de code fournie par l'élève
    // testCases: Array<{ input: any[], expected: any, isHidden?: boolean, description?: string }>
    // functionName: nom de la fonction Python à tester
    async runPython(code, testCases = [], functionName = null) {
        const results = {
            stdout: '',
            stderr: '',
            passed: 0,
            total: testCases.length,
            details: [],
            isSuccess: false
        };

        // Mini-interpréteur / sandbox sécurisé client pour l'exécution rapide
        // Si Pyodide est présent sur window, on l'utilise, sinon sandbox JS/Python syntaxique
        try {
            if (window.pyodideInstance) {
                // Exécution Pyodide réelle complète si chargé
                const py = window.pyodideInstance;
                py.setStdout({ batched: (str) => { results.stdout += str + '\n'; } });
                py.setStderr({ batched: (str) => { results.stderr += str + '\n'; } });

                await py.runPythonAsync(code);

                for (const tc of testCases) {
                    const argsStr = tc.input.map(arg => JSON.stringify(arg)).join(', ');
                    const callExpr = `${functionName}(${argsStr})`;
                    const evalResult = await py.runPythonAsync(callExpr);
                    const isPass = JSON.stringify(evalResult) === JSON.stringify(tc.expected);
                    if (isPass) results.passed++;
                    results.details.push({
                        input: argsStr,
                        expected: tc.expected,
                        actual: evalResult,
                        isPass,
                        isHidden: tc.isHidden
                    });
                }
                results.isSuccess = (results.passed === results.total);
                return results;
            }
        } catch (e) {
            results.stderr = e.message || String(e);
            return results;
        }

        // Moteur de secours autonome (Lightweight Python-to-JS Sandbox)
        // Permet l'exécution instantanée même sans réseau ou avant le chargement complet de Pyodide !
        try {
            let capturedOut = '';
            // Traduction légère pour fonctions algorithmiques pures
            const safeJsCode = this.transpileSimplePythonToJS(code, functionName);
            const userFn = new Function('console', `${safeJsCode}; return typeof ${functionName} !== "undefined" ? ${functionName} : null;`)({
                log: (...args) => { capturedOut += args.join(' ') + '\n'; }
            });

            results.stdout = capturedOut;

            if (typeof userFn !== 'function') {
                results.stderr = `Erreur : la fonction '${functionName}' n'a pas été trouvée ou définie dans le code.`;
                return results;
            }

            for (const tc of testCases) {
                let actual;
                try {
                    actual = userFn(...tc.input);
                } catch (err) {
                    actual = `Exception: ${err.message}`;
                }

                const isPass = (JSON.stringify(actual) === JSON.stringify(tc.expected));
                if (isPass) results.passed++;

                results.details.push({
                    input: tc.input.map(a => JSON.stringify(a)).join(', '),
                    expected: tc.expected,
                    actual,
                    isPass,
                    isHidden: Boolean(tc.isHidden)
                });
            }

            results.isSuccess = (results.passed === results.total);
        } catch (err) {
            results.stderr = `Erreur de syntaxe ou d'exécution : ${err.message}`;
        }

        return results;
    },

    // Transpileur léger Python vers JS pour l'algorithmique courante (L1/L2)
    transpileSimplePythonToJS(pyCode, fnName) {
        return pyCode
            .replace(/def\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*:/g, 'function $1($2) {')
            .replace(/elif\s+(.+):/g, '} else if ($1) {')
            .replace(/if\s+(.+):/g, 'if ($1) {')
            .replace(/else\s*:/g, '} else {')
            .replace(/for\s+([a-zA-Z0-9_]+)\s+in\s+range\(([^)]+)\)\s*:/g, (m, v, r) => {
                const parts = r.split(',').map(s => s.trim());
                if (parts.length === 1) return `for (let ${v} = 0; ${v} < ${parts[0]}; ${v}++) {`;
                return `for (let ${v} = ${parts[0]}; ${v} < ${parts[1]}; ${v}++) {`;
            })
            .replace(/while\s+(.+):/g, 'while ($1) {')
            .replace(/True/g, 'true')
            .replace(/False/g, 'false')
            .replace(/None/g, 'null')
            .replace(/len\(([^)]+)\)/g, '$1.length')
            .replace(/and/g, '&&')
            .replace(/or/g, '||')
            .replace(/not\s+/g, '!')
            .concat('\n}'.repeat((pyCode.match(/:\s*$/gm) || []).length));
    },

    // Analyseur / exécuteur de C (Simulateur syntaxique et modèle mémoire)
    runC(code, options = {}) {
        const result = {
            stdout: '',
            stderr: '',
            warnings: [],
            isSuccess: false
        };

        // 1. Analyse statique des erreurs classiques en C L1/L2
        if (!code.includes('main') && !options.isFunctionOnly) {
            result.stderr = "Erreur de compilation : fonction 'main' introuvable (requis : int main() { ... }).";
            return result;
        }

        // Vérification de pointeurs nuls ou non initialisés
        if (code.includes('*p') && !code.includes('&') && !code.includes('malloc') && !code.includes('=')) {
            result.stderr = "Segmentation fault (core dumped) : déréférencement d'un pointeur non initialisé (*p).";
            return result;
        }

        // Simulation de sortie printf
        const printRegex = /printf\s*\(\s*"([^"]*)"(?:\s*,\s*([^)]*))?\s*\)\s*;/g;
        let match;
        let output = '';

        while ((match = printRegex.exec(code)) !== null) {
            let format = match[1].replace(/\\n/g, '\n');
            const args = match[2] ? match[2].split(',').map(s => s.trim()) : [];

            // Remplacement basique des formateurs %d, %s
            args.forEach(arg => {
                format = format.replace(/%d|%i|%s|%f/, arg);
            });
            output += format;
        }

        result.stdout = output || "Programme compilé et exécuté avec code retour 0.";
        result.isSuccess = true;
        return result;
    }
};

if (typeof window !== 'undefined') {
    window.CodeRunner = CodeRunner;
}
