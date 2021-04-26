import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let hello = vscode.commands.registerCommand('hello-world.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VS Code!');
	});

	let goodbye = vscode.commands.registerCommand('hello-world.goodbyeWorld', () => {
		vscode.window.showInformationMessage('Goodbye!');
	});

	let commentCurrentLine = vscode.commands.registerCommand('hello-world.commentCurrentLine', () => {
		vscode.commands.executeCommand('editor.action.addCommentLine');
	})

	context.subscriptions.push(hello, goodbye, commentCurrentLine);
}

export function deactivate() {}
