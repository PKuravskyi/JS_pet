/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Map: () => (/* binding */ Map)
/* harmony export */ });
class Map {
  constructor(coordinates) {
    this.render(coordinates);
  }
  async render(coordinates) {
    if (!google) {
      alert('Could not load Google Maps - please try again later!');
      return;
    }
    const {
      Map
    } = await google.maps.importLibrary('maps');
    const map = new Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 15
    });
    new google.maps.Marker({
      position: coordinates,
      map: map
    });
  }
}

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/MyPlace.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ "./src/UI/Map.js");

class MyPlace {
  constructor(coordinates, address) {
    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__.Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}
const url = new URL(location.href);
const queryParams = url.searchParams;
const coordinates = {
  lat: +queryParams.get('lat'),
  lng: +queryParams.get('lng')
};
const address = queryParams.get('address');
new MyPlace(coordinates, address);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlQbGFjZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEdBQUcsQ0FBQztFQUNoQkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxDQUFDRCxXQUFXLENBQUM7RUFDekI7RUFFQSxNQUFNQyxNQUFNQSxDQUFDRCxXQUFXLEVBQUU7SUFDekIsSUFBSSxDQUFDRSxNQUFNLEVBQUU7TUFDWkMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDO01BQzdEO0lBQ0Q7SUFFQSxNQUFNO01BQUVMO0lBQUksQ0FBQyxHQUFHLE1BQU1JLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBRXZELE1BQU1DLEdBQUcsR0FBRyxJQUFJUixHQUFHLENBQUNTLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO01BQ25EQyxNQUFNLEVBQUVULFdBQVc7TUFDbkJVLElBQUksRUFBRTtJQUNQLENBQUMsQ0FBQztJQUVGLElBQUlSLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDTyxNQUFNLENBQUM7TUFDdEJDLFFBQVEsRUFBRVosV0FBVztNQUNyQk0sR0FBRyxFQUFFQTtJQUNOLENBQUMsQ0FBQztFQUNIO0FBQ0Q7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitCO0FBRS9CLE1BQU1PLE9BQU8sQ0FBQztFQUNiZCxXQUFXQSxDQUFDQyxXQUFXLEVBQUVjLE9BQU8sRUFBRTtJQUNqQyxJQUFJaEIsd0NBQUcsQ0FBQ0UsV0FBVyxDQUFDO0lBQ3BCLE1BQU1lLGFBQWEsR0FBR1IsUUFBUSxDQUFDUyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ3pERCxhQUFhLENBQUNFLFdBQVcsR0FBR0gsT0FBTztFQUNwQztBQUNEO0FBRUEsTUFBTUksR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUM7QUFDbEMsTUFBTUMsV0FBVyxHQUFHSixHQUFHLENBQUNLLFlBQVk7QUFDcEMsTUFBTXZCLFdBQVcsR0FBRztFQUNuQndCLEdBQUcsRUFBRSxDQUFDRixXQUFXLENBQUNHLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDNUJDLEdBQUcsRUFBRSxDQUFDSixXQUFXLENBQUNHLEdBQUcsQ0FBQyxLQUFLO0FBQzVCLENBQUM7QUFDRCxNQUFNWCxPQUFPLEdBQUdRLFdBQVcsQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUUxQyxJQUFJWixPQUFPLENBQUNiLFdBQVcsRUFBRWMsT0FBTyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VSS9NYXAuanMiLCJ3ZWJwYWNrOi8vbXktcGxhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktcGxhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktcGxhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9NeVBsYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG5cdGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzKSB7XHJcblx0XHR0aGlzLnJlbmRlcihjb29yZGluYXRlcyk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuXHRcdGlmICghZ29vZ2xlKSB7XHJcblx0XHRcdGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBHb29nbGUgTWFwcyAtIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IE1hcCB9ID0gYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeSgnbWFwcycpO1xyXG5cclxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcblx0XHRcdGNlbnRlcjogY29vcmRpbmF0ZXMsXHJcblx0XHRcdHpvb206IDE1LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRcdHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuXHRcdFx0bWFwOiBtYXAsXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICcuL1VJL01hcCc7XHJcblxyXG5jbGFzcyBNeVBsYWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihjb29yZGluYXRlcywgYWRkcmVzcykge1xyXG5cdFx0bmV3IE1hcChjb29yZGluYXRlcyk7XHJcblx0XHRjb25zdCBoZWFkZXJUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XHJcblx0XHRoZWFkZXJUaXRsZUVsLnRleHRDb250ZW50ID0gYWRkcmVzcztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcbmNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcclxuY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcblx0bGF0OiArcXVlcnlQYXJhbXMuZ2V0KCdsYXQnKSxcclxuXHRsbmc6ICtxdWVyeVBhcmFtcy5nZXQoJ2xuZycpLFxyXG59O1xyXG5jb25zdCBhZGRyZXNzID0gcXVlcnlQYXJhbXMuZ2V0KCdhZGRyZXNzJyk7XHJcblxyXG5uZXcgTXlQbGFjZShjb29yZGluYXRlcywgYWRkcmVzcyk7XHJcbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImNvb3JkaW5hdGVzIiwicmVuZGVyIiwiZ29vZ2xlIiwiYWxlcnQiLCJtYXBzIiwiaW1wb3J0TGlicmFyeSIsIm1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJ6b29tIiwiTWFya2VyIiwicG9zaXRpb24iLCJNeVBsYWNlIiwiYWRkcmVzcyIsImhlYWRlclRpdGxlRWwiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlYXJjaFBhcmFtcyIsImxhdCIsImdldCIsImxuZyJdLCJzb3VyY2VSb290IjoiIn0=