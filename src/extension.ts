import * as vscode from 'vscode';
import { commands } from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const goToFile = vscode.commands.registerCommand('gotosource.goToFile', async () => {
		const editor = vscode.window.activeTextEditor;
		let cursorPosition = editor?.selection.start;
		let wordRange = cursorPosition ? editor?.document.getWordRangeAtPosition(cursorPosition) : undefined;
		let highlighted = editor?.document.getText(wordRange);

		await commands.executeCommand('workbench.action.findInFiles', {
			"query": `[\\s](${highlighted})`,
			"isRegex": true,
			"triggerSearch": true,
			"focusResults": true,
			"filesToExclude": '*.d.ts',
			"filesToInclude": '*.ts',
			"useExcludeSettingsAndIgnoreFiles": true,
		  });
      setTimeout(async function(){
        await commands.executeCommand('search.action.focusNextSearchResult');
    }, 500);
	});

	const searchFile = vscode.commands.registerCommand('gotosource.searchFile', async () => {
		const editor = vscode.window.activeTextEditor;
		let cursorPosition = editor?.selection.start;
		let wordRange = cursorPosition ? editor?.document.getWordRangeAtPosition(cursorPosition) : undefined;
		let highlighted = editor?.document.getText(wordRange);

		await commands.executeCommand('workbench.action.findInFiles',  {
			"query": highlighted,   
			"filesToExclude": '*.d.ts',
			"filesToInclude": '*.ts',
			"useExcludeSettingsAndIgnoreFiles": true,           
		  });
	});


	context.subscriptions.push(goToFile);
	context.subscriptions.push(searchFile);
}

export function deactivate() {}
