// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { commands } from 'vscode';
// import {fs} from 'fs';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "gotosource" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('gotosource.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from goToSource!');
	// });
	
	let goToFile = vscode.commands.registerCommand('gotosource.goToFile', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Going To File...');
		// console.log(__dirname);
		// console.log(process.cwd());
		// const activeTextEditor = vscode.window.activeTextEditor;
		// // const theMethod = activeTextEditor?.selection.active;

		const editor = vscode.window.activeTextEditor;
		let cursorPosition = editor?.selection.start;
		let wordRange = cursorPosition ? editor?.document.getWordRangeAtPosition(cursorPosition) : undefined;
		let highlighted = editor?.document.getText(wordRange);

		console.log('theMethod', highlighted);

		//-kinda working
		// const somethingUseful = await commands.executeCommand('workbench.action.findInFiles',  {
		// 	"query": `[\\s](${highlighted})`,   
		// 	"isRegexp": true,
		// 	// "query": highlighted,   
		// 	"triggerSearch": true,         
		// 	"focusResults": true,
		// 	"filesToExclude": '*.d.ts',
		// 	"filesToInclude": '*.ts',
		// 	"useExcludeSettingsAndIgnoreFiles": true,           
		//   });

		// const somethingUseful = await commands.executeCommand('workbench.action.findInFiles', highlighted);
		// const somethingUseful = await commands.executeCommand('search.action.openEditor', highlighted);

		//-kinda working
		// const willOpen = await commands.executeCommand('search.action.openEditor', {
		// 	"query": `[\\s](${highlighted})`,   
		// 	"isRegexp": true,   
		// 	"triggerSearch": true,          
		// 	"focusResults": true,
		// 	"filesToExclude": '*.d.ts',
		// 	"filesToInclude": '*.ts',
		// 	"useExcludeSettingsAndIgnoreFiles": true,           
		//   });

		const willOpen = await commands.executeCommand('editor.action.goToTypeDefinition', {
			"query": `[\\s](${highlighted})`,   
			"isRegexp": true,   
			"triggerSearch": true,          
			"focusResults": true,
			"filesToExclude": '*.d.ts',
			"filesToInclude": '*.ts',
			"useExcludeSettingsAndIgnoreFiles": true,           
		  });


		console.log('willOpen', willOpen);

		// vscode.workspace.findFiles(process.cwd() + '**/SomethingUseful.ts', process.cwd() + '**/SomethingUseful.d.ts', 1).then(
		// 	// all good
		// 	(result: vscode.Uri[]) => {
		// 		console.log('result', result);
		// 		vscode.workspace.openTextDocument(result[0]);
		// 		// vscode.workspace.openTextDocument(result[0]);
		// 		// vscode.commands.executeCommand('edit.findAndReplace');
		// 	},
		// 	// rejected
		// 	(reason: any) => {
		// 		// output error
		// 		console.log('reason', reason);
		// 		vscode.window.showErrorMessage(reason);
		// 	});
	
		// Display a message box to the user
		// vscode.window.showInformationMessage('Successfully created a new App!');

		// const filePath = vscode.window.activeTextEditor?.document.fileName;
		// const fileUri = vscode.window.activeTextEditor?.document.uri;
		// let uri = Uri.file(process.cwd() + '/src/test/suite');
		// let file = Uri.file(process.cwd() + '/src/randomFiles/AConsumerOfSomethingUseful.ts');
		// // let file = Uri.file(process.cwd() + '/src/test/suite/extension.test.ts');
		// console.log(uri);
		// // let toFolder = await commands.executeCommand('vscode.openFolder', uri);
		// let toFile = await commands.executeCommand('vscode.open', file);
		// let toFile = await commands.executeCommand('vscode.open', file);


	});


	// context.subscriptions.push(disposable);
	context.subscriptions.push(goToFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
