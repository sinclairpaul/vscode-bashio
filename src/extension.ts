'use strict';

import * as vscode from 'vscode';
import * as data from './data.json'

const topmethods = data.map(m => {
	return (m.method);
	});

export function activate(context: vscode.ExtensionContext) {

	let bashioprov = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const commitCharacterCompletion = new vscode.CompletionItem('bashio:');
			commitCharacterCompletion.commitCharacters = [':'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `:` to get `bashio::`');


			// return all completion items as array
			return [
				commitCharacterCompletion
			];
		}
	});
	
	const firstlevel = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::')) {
					return undefined;
				}

				return topmethods.map(method => {
					return new vscode.CompletionItem(method, vscode.CompletionItemKind.Method);
					});

			}
		},
		':' // triggered whenever a ':' is being typed
	);


	const secondlevel = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
		
				//console.log (topmethods)
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!endsWithAny(
					(topmethods),linePrefix,".")) {
					return undefined;
				}
				var newprefix = linePrefix.slice(8,-1)
				const filtereddata = data.filter(submethods => submethods.method === newprefix);
				return (filtereddata[0].submethods).map(submethod => {
					return new vscode.CompletionItem(submethod, vscode.CompletionItemKind.Method);
					});
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(bashioprov, firstlevel, secondlevel);
}

function endsWithAny(suffixes, string, delim) {
    for (let suffix of suffixes) {
        if(string.endsWith(suffix + delim))
            return true;
    }
    return false;
}
