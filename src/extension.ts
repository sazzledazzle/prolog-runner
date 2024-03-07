import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('prolog-runner.run', () => {
        const terminal = vscode.window.activeTerminal || vscode.window.createTerminal(`Prolog Run`);
        const file = vscode.window.activeTextEditor?.document.fileName;
        if (file) {
            terminal.sendText(`swipl -q -f "${file}" -t halt.`);
            terminal.show();
        } else {
            vscode.window.showErrorMessage('No active Prolog file.');
        }
    });

    context.subscriptions.push(disposable);
}
export function deactivate() {}
