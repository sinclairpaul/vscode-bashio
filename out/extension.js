'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const data = require("./data.json");
const topmethods = data.map(m => {
    return (m.method);
});
function activate(context) {
    let bashioprov = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position, token, context) {
            const commitCharacterCompletion = new vscode.CompletionItem('bashio:');
            commitCharacterCompletion.commitCharacters = [':'];
            commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `:` to get `bashio::`');
            // return all completion items as array
            return [
                commitCharacterCompletion
            ];
        }
    });
    const firstlevel = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
            let linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('bashio::')) {
                return undefined;
            }
            return topmethods.map(method => {
                return new vscode.CompletionItem(method, vscode.CompletionItemKind.Method);
            });
        }
    }, ':' // triggered whenever a ':' is being typed
    );
    const secondlevel = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
            //console.log (topmethods)
            let linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!endsWithAny((topmethods), linePrefix, ".")) {
                return undefined;
            }
            var newprefix = linePrefix.slice(8, -1);
            const filtereddata = data.filter(submethods => submethods.method === newprefix);
            return (filtereddata[0].submethods).map(submethod => {
                return new vscode.CompletionItem(submethod, vscode.CompletionItemKind.Method);
            });
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(bashioprov, firstlevel, secondlevel);
}
exports.activate = activate;
function endsWithAny(suffixes, string, delim) {
    for (let suffix of suffixes) {
        if (string.endsWith(suffix + delim))
            return true;
    }
    return false;
}
//# sourceMappingURL=extension.js.map