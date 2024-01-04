"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpetjavascript"] = self["webpackChunkpetjavascript"] || []).push([["src_projectPlanner_app_Tooltip_js"],{

/***/ "./src/projectPlanner/app/Component.js":
/*!*********************************************!*\
  !*** ./src/projectPlanner/app/Component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n\tconstructor(hostElementId, insertBefore = false) {\r\n\t\tif (hostElementId) {\r\n\t\t\tthis.hostElementId = document.getElementById(hostElementId);\r\n\t\t} else {\r\n\t\t\tthis.hostElementId = document.body;\r\n\t\t}\r\n\t\tthis.insertBefore = insertBefore;\r\n\t}\r\n\r\n\thide() {\r\n\t\tif (this.element) {\r\n\t\t\tthis.element.remove();\r\n\t\t}\r\n\t}\r\n\r\n\tshow() {\r\n\t\tthis.hostElementId.insertAdjacentElement(\r\n\t\t\tthis.insertBefore ? 'beforeend' : 'beforeend',\r\n\t\t\tthis.element\r\n\t\t);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/app/Component.js?");

/***/ }),

/***/ "./src/projectPlanner/app/Tooltip.js":
/*!*******************************************!*\
  !*** ./src/projectPlanner/app/Tooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tooltip: () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/projectPlanner/app/Component.js\");\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n\tconstructor(projectItem, closeNotifierFunction, tooltipText, hostElementId) {\r\n\t\tsuper(hostElementId, true);\r\n\t\tthis.projectItem = projectItem;\r\n\t\tthis.closeNotifier = closeNotifierFunction;\r\n\t\tthis.tooltipText = tooltipText;\r\n\t\tthis.create(projectItem);\r\n\t}\r\n\r\n\tcloseTooltip() {\r\n\t\tthis.hide();\r\n\t\tthis.closeNotifier();\r\n\t}\r\n\r\n\tcreate(projectItem) {\r\n\t\tconst tooltipEl = document.createElement('div');\r\n\t\ttooltipEl.classList.add('card', 'tooltip');\r\n\t\tconst tooltipTemplate = document.getElementById('tooltip');\r\n\t\tconst tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n\t\ttooltipBody.querySelector('h2').textContent =\r\n\t\t\tprojectItem.querySelector('h2').innerText;\r\n\t\ttooltipBody.querySelector('p').textContent = this.tooltipText;\r\n\t\ttooltipEl.append(tooltipBody);\r\n\r\n\t\tconst hostElPosLeft = this.hostElementId.offsetLeft;\r\n\t\tconst hostElPosTop = this.hostElementId.offsetTop;\r\n\t\tconst hostElHigh = this.hostElementId.clientHeight;\r\n\t\tconst parentElScrolling = this.hostElementId.parentElement.scrollTop;\r\n\r\n\t\tconst xAxis = hostElPosLeft + 20;\r\n\t\tconst yAxis = hostElPosTop + hostElHigh - parentElScrolling - 10;\r\n\r\n\t\ttooltipEl.style.position = 'absolute';\r\n\t\ttooltipEl.style.left = xAxis + 'px';\r\n\t\ttooltipEl.style.top = yAxis + 'px';\r\n\r\n\t\ttooltipEl.addEventListener('click', this.closeTooltip.bind(this));\r\n\t\tthis.element = tooltipEl;\r\n\t\tdocument.body.append(tooltipEl);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://petjavascript/./src/projectPlanner/app/Tooltip.js?");

/***/ })

}]);