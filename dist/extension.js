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
const vscode = __webpack_require__(1);
const vscode_1 = __webpack_require__(1);
function activate(context) {
    const goToFile = vscode.commands.registerCommand('gotosource.goToFile', async () => {
        const editor = vscode.window.activeTextEditor;
        let cursorPosition = editor?.selection.start;
        let wordRange = cursorPosition ? editor?.document.getWordRangeAtPosition(cursorPosition) : undefined;
        let highlighted = editor?.document.getText(wordRange);
        await vscode_1.commands.executeCommand('editor.action.goToTypeDefinition', {
            "query": `[\\s](${highlighted})`,
            "isRegexp": true,
            "triggerSearch": true,
            "focusResults": true,
            "filesToExclude": '*.d.ts',
            "filesToInclude": '*.ts',
            "useExcludeSettingsAndIgnoreFiles": true,
        });
    });
    const searchFile = vscode.commands.registerCommand('gotosource.searchFile', async () => {
        const editor = vscode.window.activeTextEditor;
        let cursorPosition = editor?.selection.start;
        let wordRange = cursorPosition ? editor?.document.getWordRangeAtPosition(cursorPosition) : undefined;
        let highlighted = editor?.document.getText(wordRange);
        await vscode_1.commands.executeCommand('workbench.action.findInFiles', {
            "query": `[\\s](${highlighted})`,
            "isRegexp": true,
            // "query": highlighted,   
            "triggerSearch": true,
            "focusResults": true,
            "filesToExclude": '*.d.ts',
            "filesToInclude": '*.ts',
            "useExcludeSettingsAndIgnoreFiles": true,
        });
    });
    context.subscriptions.push(goToFile);
    context.subscriptions.push(searchFile);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map