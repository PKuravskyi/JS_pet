/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projectPlanner/App.js":
/*!***********************************!*\
  !*** ./src/projectPlanner/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ProjectList.js */ \"./src/projectPlanner/app/ProjectList.js\");\n\r\n\r\nclass App {\r\n\tstatic init() {\r\n\t\tconst activeProjectsList = new _app_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsList('active');\r\n\t\tconst finishedProjectsList = new _app_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsList('finished');\r\n\t\tactiveProjectsList.setSwitchProjectHandler(\r\n\t\t\tfinishedProjectsList.addProject.bind(finishedProjectsList)\r\n\t\t);\r\n\t\tfinishedProjectsList.setSwitchProjectHandler(\r\n\t\t\tactiveProjectsList.addProject.bind(activeProjectsList)\r\n\t\t);\r\n\t}\r\n}\r\n\r\nApp.init();\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/App.js?");

/***/ }),

/***/ "./src/projectPlanner/app/ProjectItem.js":
/*!***********************************************!*\
  !*** ./src/projectPlanner/app/ProjectItem.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/DOMHelper.js */ \"./src/projectPlanner/utility/DOMHelper.js\");\n\r\n\r\nclass ProjectItem {\r\n\thasActiveTooltip = false;\r\n\r\n\tconstructor(id, updateProjectListsFunction, projectStatus) {\r\n\t\tthis.id = id;\r\n\t\tthis.updateProjectListsHandler = updateProjectListsFunction;\r\n\t\tthis.projectStatus = projectStatus;\r\n\t\tthis.connectMoreInfoButton();\r\n\t\tthis.connectSwithButton(projectStatus);\r\n\t\tthis.connectDrag();\r\n\t}\r\n\r\n\tshowMoreInfoHandler(projectItem) {\r\n\t\tif (this.hasActiveTooltip) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tconst projectEl = document.getElementById(this.id);\r\n\t\tconst tooltipText = projectEl.dataset.extraInfo;\r\n\t\t__webpack_require__.e(/*! import() */ \"src_projectPlanner_app_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/projectPlanner/app/Tooltip.js\")).then(module => {\r\n\t\t\tconst tooltip = new module.Tooltip(\r\n\t\t\t\tprojectItem,\r\n\t\t\t\t() => (this.hasActiveTooltip = false),\r\n\t\t\t\ttooltipText,\r\n\t\t\t\tthis.id\r\n\t\t\t);\r\n\t\t\ttooltip.show();\r\n\t\t\tthis.hasActiveTooltip = true;\r\n\t\t});\r\n\t}\r\n\r\n\tconnectDrag() {\r\n\t\tconst item = document.getElementById(this.id);\r\n\t\titem.addEventListener('dragstart', event => {\r\n\t\t\tevent.dataTransfer.setData('text/plain', this.id);\r\n\t\t\tevent.dataTransfer.effectAllowed = 'move';\r\n\t\t});\r\n\t}\r\n\r\n\tconnectMoreInfoButton() {\r\n\t\tconst projectItemEl = document.getElementById(this.id);\r\n\t\tconst moreInfoBtn = projectItemEl.querySelector('button:first-of-type');\r\n\t\tmoreInfoBtn.addEventListener(\r\n\t\t\t'click',\r\n\t\t\tthis.showMoreInfoHandler.bind(this, projectItemEl)\r\n\t\t);\r\n\t}\r\n\r\n\tconnectSwithButton(projectStatus) {\r\n\t\tconst projectItemEl = document.getElementById(this.id);\r\n\t\tlet switchStatusBtn = projectItemEl.querySelector('button:last-of-type');\r\n\t\tswitchStatusBtn = _utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListener(switchStatusBtn);\r\n\t\tswitchStatusBtn.textContent =\r\n\t\t\tprojectStatus === 'active' ? 'Finish' : 'Activate';\r\n\t\tswitchStatusBtn.addEventListener(\r\n\t\t\t'click',\r\n\t\t\tthis.updateProjectListsHandler.bind(null, this.id)\r\n\t\t);\r\n\t}\r\n\r\n\tupdate(updateProjectListsFunction, projectStatus) {\r\n\t\tthis.updateProjectListsHandler = updateProjectListsFunction;\r\n\t\tthis.connectSwithButton(projectStatus);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/app/ProjectItem.js?");

/***/ }),

/***/ "./src/projectPlanner/app/ProjectList.js":
/*!***********************************************!*\
  !*** ./src/projectPlanner/app/ProjectList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsList: () => (/* binding */ ProjectsList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/projectPlanner/app/ProjectItem.js\");\n/* harmony import */ var _utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/DOMHelper.js */ \"./src/projectPlanner/utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProjectsList {\r\n\tprojects = [];\r\n\r\n\tconstructor(projectStatus) {\r\n\t\tthis.projectStatus = projectStatus;\r\n\t\tconst projectItems = document.querySelectorAll(\r\n\t\t\t`#${projectStatus}-projects li`\r\n\t\t);\r\n\t\tfor (const projectItem of projectItems) {\r\n\t\t\tthis.projects.push(\r\n\t\t\t\tnew _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(\r\n\t\t\t\t\tprojectItem.id,\r\n\t\t\t\t\tthis.switchProject.bind(this),\r\n\t\t\t\t\tthis.projectStatus\r\n\t\t\t\t)\r\n\t\t\t);\r\n\t\t}\r\n\t\tthis.connectDroppable();\r\n\t}\r\n\r\n\tconnectDroppable() {\r\n\t\tconst list = document.querySelector(`#${this.projectStatus}-projects ul`);\r\n\r\n\t\tlist.addEventListener('dragenter', event => {\r\n\t\t\tif (event.dataTransfer.types[0] === 'text/plain') {\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t}\r\n\t\t\tlist.parentElement.classList.add('droppable');\r\n\t\t});\r\n\r\n\t\tlist.addEventListener('dragover', event => {\r\n\t\t\tif (event.dataTransfer.types[0] === 'text/plain') {\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlist.addEventListener('dragleave', event => {\r\n\t\t\tif (\r\n\t\t\t\tevent.relatedTarget.closest(`#${this.projectStatus}-projects ul`) !==\r\n\t\t\t\tlist\r\n\t\t\t) {\r\n\t\t\t\tlist.parentElement.classList.remove('droppable');\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tlist.addEventListener('drop', event => {\r\n\t\t\tconst projectID = event.dataTransfer.getData('text/plain');\r\n\t\t\tif (this.projects.find(p => p.id === projectID)) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tdocument\r\n\t\t\t\t.getElementById(projectID)\r\n\t\t\t\t.querySelector('button:last-of-type')\r\n\t\t\t\t.click();\r\n\t\t\tlist.parentElement.classList.remove('droppable');\r\n\t\t});\r\n\t}\r\n\r\n\tsetSwitchProjectHandler(switcHandlerFunction) {\r\n\t\tthis.switchHandler = switcHandlerFunction;\r\n\t}\r\n\r\n\taddProject(project) {\r\n\t\tthis.projects.push(project);\r\n\t\t_utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.projectStatus}-projects ul`);\r\n\t\tproject.update(this.switchProject.bind(this), this.projectStatus);\r\n\t}\r\n\r\n\tswitchProject(projectId) {\r\n\t\tthis.switchHandler(this.projects.find(project => project.id === projectId));\r\n\t\tthis.projects = this.projects.filter(project => project.id !== projectId);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/app/ProjectList.js?");

/***/ }),

/***/ "./src/projectPlanner/utility/DOMHelper.js":
/*!*************************************************!*\
  !*** ./src/projectPlanner/utility/DOMHelper.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\r\n\tstatic clearEventListener(element) {\r\n\t\tconst clonedEl = element.cloneNode(true);\r\n\t\telement.replaceWith(clonedEl);\r\n\t\treturn clonedEl;\r\n\t}\r\n\r\n\tstatic moveElement(elementId, newDestinationSelector) {\r\n\t\tconst element = document.getElementById(elementId);\r\n\t\tconst destinationEl = document.querySelector(newDestinationSelector);\r\n\t\tdestinationEl.append(element);\r\n\t\telement.scrollIntoView({ behavior: 'instant' });\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/utility/DOMHelper.js?");

/***/ })

/******/ 	});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "01beac06eda5680ae6e3" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "petjavascript:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpetjavascript"] = self["webpackChunkpetjavascript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projectPlanner/App.js");
/******/ 	
/******/ })()
;