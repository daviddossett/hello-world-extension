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
    context.subscriptions.push(hello, goodbye);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map