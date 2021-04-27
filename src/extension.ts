import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let hello = vscode.commands.registerCommand("hello-world.helloWorld", () => {
    vscode.window.showInformationMessage("Hello VS Code!");
  });

  let goodbye = vscode.commands.registerCommand("hello-world.goodbyeWorld", () => {
    vscode.window.showInformationMessage("Goodbye!");
  });

  let commentCurrentLine = vscode.commands.registerCommand("hello-world.commentCurrentLine", () => {
    vscode.commands.executeCommand("editor.action.addCommentLine");
  });

  let openDialog = vscode.commands.registerCommand("hello-world.openDialog", () => {
    vscode.window.showOpenDialog();
  });

  let setStatus = vscode.commands.registerCommand("hello-world.setStatus", () => {
    vscode.window.setStatusBarMessage(
      "This is really long text that will probably eventually overflow if it goes on long enough!!!"
    );
  });

  context.subscriptions.push(hello, goodbye, commentCurrentLine, openDialog, setStatus);
}

export function deactivate() {}
