import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let hello = vscode.commands.registerCommand('hello-world.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VS Code!');
	});

	let goodbye = vscode.commands.registerCommand('hello-world.goodbyeWorld', () => {
		vscode.window.showInformationMessage('Goodbye!');
	});

	context.subscriptions.push(hello, goodbye);
}

// this method is called when your extension is deactivated
export function deactivate() {}
