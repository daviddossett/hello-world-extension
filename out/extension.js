"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let hello = vscode.commands.registerCommand('hello-world.helloWorld', () => {
        vscode.window.showInformationMessage('Hello VS Code!');
    });
    let goodbye = vscode.commands.registerCommand('hello-world.goodbyeWorld', () => {
        vscode.window.showInformationMessage('Goodbye!');
    });
    let commentCurrentLine = vscode.commands.registerCommand('hello-world.commentCurrentLine', () => {
        vscode.commands.executeCommand('editor.action.addCommentLine');
    });
    let openDialog = vscode.commands.registerCommand('hello-world.openDialog', () => {
        vscode.window.showOpenDialog();
    });
    context.subscriptions.push(hello, goodbye, commentCurrentLine, openDialog);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map