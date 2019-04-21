'use strict';

import * as vscode from 'vscode';
import * as data from './data.json'

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
				return [
					new vscode.CompletionItem("api", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("cache", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("color", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("config", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("const", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("debug", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("exit", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("fs", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("hardware", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("hassos", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("homeassistant", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("host", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("info", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("jq", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("log", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("net", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("pwned", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("repositories", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("secrets", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("supervisor", vscode.CompletionItemKind.Method),
					new vscode.CompletionItem("var", vscode.CompletionItemKind.Method),
				]
			}
		},
		':' // triggered whenever a ':' is being typed
	);

	const apidetails = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::api.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('hassio()', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	const cachedetails = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::cache.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('exists()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('get()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('set()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('flush()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('flush_all()', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const colordetails = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::color.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('reset()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('default()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('black()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('red()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('green()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('yellow()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('blue()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('magenta()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('cyan()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.default()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.black()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.red()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.green()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.yellow()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.blue()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.magenta()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.cyan()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('bg.white()', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const configdetails = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::config.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('exists()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('has_value()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('is_empty()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('equals()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('true()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('false()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('is_safe_password()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('require()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest.true()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest.false()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('require.username()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest.username)', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('require.password()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest.password()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('require.safe_password()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('suggest.safe_password()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('require.ssl()', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const logdetails = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('bashio::log.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('info()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('debug()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('trace()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('red()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('green()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('yellow()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('blue()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('magenta()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('cyan()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('log()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('notice()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warning()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error()', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('fatal()', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(bashioprov, firstlevel, apidetails, logdetails, cachedetails, colordetails, configdetails);
}

