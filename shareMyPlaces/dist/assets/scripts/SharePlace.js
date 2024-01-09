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

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(this.modalTemplateEl.content, true);
      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');
      const contentElement = document.importNode(this.contentTemplateEl.content, true);
      this.modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
      document.body.insertAdjacentElement('afterbegin', this.modalElement);
    } else {
      alert(this.fallbackText);
      return;
    }
  }
  hide() {
    document.body.removeChild(this.modalElement);
    document.body.removeChild(this.backdropElement);
    this.modalElement = null;
    this.backdropElement = null;
  }
}

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddressFromCoordinates: () => (/* binding */ getAddressFromCoordinates),
/* harmony export */   getCoordinatesFromAddress: () => (/* binding */ getCoordinatesFromAddress)
/* harmony export */ });
const GOOGLE_API_KEY = 'AIzaSyA1h9JrfQaGO6jKbaBrwBPaamqwYRbyibA';
async function getAddressFromCoordinates(coordinates) {
  return await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_API_KEY}`).then(response => {
    return response.data.results[0].formatted_address;
  }).catch(error => {
    throw new Error(error);
  });
}
async function getCoordinatesFromAddress(address) {
  const urlAddress = encodeURI(address);
  return await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`).then(response => {
    return response.data.results[0].geometry.location;
  }).catch(error => {
    throw new Error(error);
  });
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
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ "./src/UI/Modal.js");
/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ "./src/UI/Map.js");
/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ "./src/Utility/Location.js");



class PlaceFinder {
  constructor() {
    const addressForm = document.getElementById('address-form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareLinkInputEl = document.getElementById('share-link');
    this.shareBtn = document.getElementById('share-btn');
    this.shareBtn.addEventListener('click', this.sharePlaceHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
  }
  sharePlaceHandler() {
    if (!navigator.clipboard) {
      this.shareLinkInputEl.select();
      return;
    }
    navigator.clipboard.writeText(this.shareLinkInputEl.value).then(() => {
      console.log('Copied to clipboard!');
    }).catch(error => {
      this.shareLinkInputEl.select();
      throw new Error(error);
    });
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);
    }
    this.shareBtn.disabled = false;
    this.shareLinkInputEl.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');
      return;
    }
    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Getting location...');
    modal.show();
    navigator.geolocation.getCurrentPosition(async successResult => {
      // create a separate class for that ?
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude
      };
      const address = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getAddressFromCoordinates)(coordinates);
      modal.hide();
      this.selectPlace(coordinates, address);
    }, error => {
      modal.hide();
      throw new Error(error);
    });
  }
  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('#address').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address - please try again!');
      return;
    }
    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Getting location...');
    modal.show();
    const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesFromAddress)(address);
    try {
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}
new PlaceFinder();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS8uL3NyYy9VSS9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1wbGFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvU2hhcmVQbGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWFwIHtcclxuXHRjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xyXG5cdFx0dGhpcy5yZW5kZXIoY29vcmRpbmF0ZXMpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVuZGVyKGNvb3JkaW5hdGVzKSB7XHJcblx0XHRpZiAoIWdvb2dsZSkge1xyXG5cdFx0XHRhbGVydCgnQ291bGQgbm90IGxvYWQgR29vZ2xlIE1hcHMgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgeyBNYXAgfSA9IGF3YWl0IGdvb2dsZS5tYXBzLmltcG9ydExpYnJhcnkoJ21hcHMnKTtcclxuXHJcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG5cdFx0XHRjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG5cdFx0XHR6b29tOiAxNSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0XHRwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcblx0XHRcdG1hcDogbWFwLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcblx0Y29uc3RydWN0b3IoY29udGVudElkLCBmYWxsYmFja1RleHQpIHtcclxuXHRcdHRoaXMuZmFsbGJhY2tUZXh0ID0gZmFsbGJhY2tUZXh0O1xyXG5cdFx0dGhpcy5jb250ZW50VGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XHJcblx0XHR0aGlzLm1vZGFsVGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC10ZW1wbGF0ZScpO1xyXG5cdH1cclxuXHJcblx0c2hvdygpIHtcclxuXHRcdGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xyXG5cdFx0XHRjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuXHRcdFx0XHR0aGlzLm1vZGFsVGVtcGxhdGVFbC5jb250ZW50LFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5tb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5cdFx0XHR0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcblx0XHRcdGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5tb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCB0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5tb2RhbEVsZW1lbnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxlcnQodGhpcy5mYWxsYmFja1RleHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsRWxlbWVudCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuXHRcdHRoaXMubW9kYWxFbGVtZW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcclxuXHR9XHJcbn1cclxuIiwiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnQUl6YVN5QTFoOUpyZlFhR082aktiYUJyd0JQYWFtcXdZUmJ5aWJBJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRyZXNzRnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XHJcblx0cmV0dXJuIGF3YWl0IGF4aW9zXHJcblx0XHQuZ2V0KFxyXG5cdFx0XHRgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtjb29yZGluYXRlcy5sYXR9LCR7Y29vcmRpbmF0ZXMubG5nfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gXHJcblx0XHQpXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVycm9yID0+IHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuXHRcdH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNGcm9tQWRkcmVzcyhhZGRyZXNzKSB7XHJcblx0Y29uc3QgdXJsQWRkcmVzcyA9IGVuY29kZVVSSShhZGRyZXNzKTtcclxuXHRyZXR1cm4gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQoXHJcblx0XHRcdGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHt1cmxBZGRyZXNzfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gXHJcblx0XHQpXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVycm9yID0+IHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuXHRcdH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5pbXBvcnQge1xyXG5cdGdldENvb3JkaW5hdGVzRnJvbUFkZHJlc3MsXHJcblx0Z2V0QWRkcmVzc0Zyb21Db29yZGluYXRlcyxcclxufSBmcm9tICcuL1V0aWxpdHkvTG9jYXRpb24nO1xyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1mb3JtJyk7XHJcblx0XHRjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuXHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcblx0XHR0aGlzLnNoYXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlLWJ0bicpO1xyXG5cclxuXHRcdHRoaXMuc2hhcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNoYXJlUGxhY2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG5cdFx0YWRkcmVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcblx0XHRsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGVVc2VySGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHNoYXJlUGxhY2VIYW5kbGVyKCkge1xyXG5cdFx0aWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcblx0XHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbC5zZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZFxyXG5cdFx0XHQud3JpdGVUZXh0KHRoaXMuc2hhcmVMaW5rSW5wdXRFbC52YWx1ZSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDb3BpZWQgdG8gY2xpcGJvYXJkIScpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbC5zZWxlY3QoKTtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcblx0XHRpZiAodGhpcy5tYXApIHtcclxuXHRcdFx0dGhpcy5tYXAucmVuZGVyKGNvb3JkaW5hdGVzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubWFwID0gbmV3IE1hcChjb29yZGluYXRlcyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYXJlQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnNoYXJlTGlua0lucHV0RWwudmFsdWUgPSBgJHtcclxuXHRcdFx0bG9jYXRpb24ub3JpZ2luXHJcblx0XHR9L215LXBsYWNlP2FkZHJlc3M9JHtlbmNvZGVVUkkoYWRkcmVzcyl9JmxhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG5nPSR7XHJcblx0XHRcdGNvb3JkaW5hdGVzLmxuZ1xyXG5cdFx0fWA7XHJcblx0fVxyXG5cclxuXHRsb2NhdGVVc2VySGFuZGxlcigpIHtcclxuXHRcdGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcblx0XHRcdGFsZXJ0KFxyXG5cdFx0XHRcdCdMb2NhdGlvbiBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyIC0gcGxlYXNlIHVzZSBhIG1vcmUgbW9kZXJuIGJyb3dzZXIgb3IgbWFudWFsbHkgZW50ZXIgYW4gYWRkcmVzcy4nXHJcblx0XHRcdCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLCAnR2V0dGluZyBsb2NhdGlvbi4uLicpO1xyXG5cdFx0bW9kYWwuc2hvdygpO1xyXG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuXHRcdFx0YXN5bmMgc3VjY2Vzc1Jlc3VsdCA9PiB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIGEgc2VwYXJhdGUgY2xhc3MgZm9yIHRoYXQgP1xyXG5cdFx0XHRcdGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG5cdFx0XHRcdFx0bGF0OiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldEFkZHJlc3NGcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xyXG5cdFx0XHRcdG1vZGFsLmhpZGUoKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdG1vZGFsLmhpZGUoKTtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZEFkZHJlc3NIYW5kbGVyKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgYWRkcmVzcyA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcycpLnZhbHVlO1xyXG5cdFx0aWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRhbGVydCgnSW52YWxpZCBhZGRyZXNzIC0gcGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdHZXR0aW5nIGxvY2F0aW9uLi4uJyk7XHJcblx0XHRtb2RhbC5zaG93KCk7XHJcblx0XHRjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0bW9kYWwuaGlkZSgpO1xyXG5cdH1cclxufVxyXG5cclxubmV3IFBsYWNlRmluZGVyKCk7XHJcbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImNvb3JkaW5hdGVzIiwicmVuZGVyIiwiZ29vZ2xlIiwiYWxlcnQiLCJtYXBzIiwiaW1wb3J0TGlicmFyeSIsIm1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJ6b29tIiwiTWFya2VyIiwicG9zaXRpb24iLCJNb2RhbCIsImNvbnRlbnRJZCIsImZhbGxiYWNrVGV4dCIsImNvbnRlbnRUZW1wbGF0ZUVsIiwibW9kYWxUZW1wbGF0ZUVsIiwic2hvdyIsImNyZWF0ZUVsZW1lbnQiLCJtb2RhbEVsZW1lbnRzIiwiaW1wb3J0Tm9kZSIsImNvbnRlbnQiLCJtb2RhbEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmFja2Ryb3BFbGVtZW50IiwiY29udGVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJoaWRlIiwicmVtb3ZlQ2hpbGQiLCJHT09HTEVfQVBJX0tFWSIsImdldEFkZHJlc3NGcm9tQ29vcmRpbmF0ZXMiLCJheGlvcyIsImdldCIsImxhdCIsImxuZyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJyZXN1bHRzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiLCJnZXRDb29yZGluYXRlc0Zyb21BZGRyZXNzIiwiYWRkcmVzcyIsInVybEFkZHJlc3MiLCJlbmNvZGVVUkkiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiUGxhY2VGaW5kZXIiLCJhZGRyZXNzRm9ybSIsImxvY2F0ZVVzZXJCdG4iLCJzaGFyZUxpbmtJbnB1dEVsIiwic2hhcmVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwic2hhcmVQbGFjZUhhbmRsZXIiLCJiaW5kIiwiZmluZEFkZHJlc3NIYW5kbGVyIiwibG9jYXRlVXNlckhhbmRsZXIiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJzZWxlY3QiLCJ3cml0ZVRleHQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RQbGFjZSIsImRpc2FibGVkIiwib3JpZ2luIiwiZ2VvbG9jYXRpb24iLCJtb2RhbCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2Nlc3NSZXN1bHQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=