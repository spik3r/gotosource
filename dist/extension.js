/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const vscode_1 = __webpack_require__(1);
// import {fs} from 'fs';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
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
        const willOpen = await vscode_1.commands.executeCommand('editor.action.goToTypeDefinition', {
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
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map