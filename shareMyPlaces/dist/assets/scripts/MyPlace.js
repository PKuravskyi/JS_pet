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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
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
const locationId = queryParams.get('location');
if (locationId) {
  fetch('http://localhost:3002/location/' + locationId).then(response => {
    if (!response.ok) {
      throw new Error('Could not find location!');
    }
    return response.json();
  }).then(data => {
    new MyPlace(data.coordinates, data.address);
  }).catch(err => {
    alert(err.message);
  });
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
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
      alert('Copied to clipboard!');
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
    fetch('http://localhost:3002/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      const locationId = data.locationId;
      this.shareBtn.disabled = false;
      this.shareLinkInputEl.value = `${location.origin}/my-place?location=${locationId}`;
    }).catch(err => {
      throw new Error(err.message);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFDWixNQUFNbEIsV0FBVyxHQUFHLE1BQU04Qyw0RUFBeUIsQ0FBQ0MsT0FBTyxDQUFDO0lBQzVELElBQUk7TUFDSCxJQUFJLENBQUNrQyxXQUFXLENBQUNqRixXQUFXLEVBQUUrQyxPQUFPLENBQUM7SUFDdkMsQ0FBQyxDQUFDLE9BQU9ILEtBQUssRUFBRTtNQUNmekMsS0FBSyxDQUFDeUMsS0FBSyxDQUFDcUIsT0FBTyxDQUFDO0lBQ3JCO0lBQ0F3QixLQUFLLENBQUMzRCxJQUFJLENBQUMsQ0FBQztFQUNiO0FBQ0Q7QUFFQSxJQUFJb0MsV0FBVyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBsYWNlLy4vc3JjL1VJL01hcC5qcyIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VSS9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1wbGFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXBsYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvTXlQbGFjZS5qcyIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9TaGFyZVBsYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG5cdGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzKSB7XHJcblx0XHR0aGlzLnJlbmRlcihjb29yZGluYXRlcyk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuXHRcdGlmICghZ29vZ2xlKSB7XHJcblx0XHRcdGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBHb29nbGUgTWFwcyAtIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IE1hcCB9ID0gYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeSgnbWFwcycpO1xyXG5cclxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcblx0XHRcdGNlbnRlcjogY29vcmRpbmF0ZXMsXHJcblx0XHRcdHpvb206IDE1LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRcdHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuXHRcdFx0bWFwOiBtYXAsXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuXHRjb25zdHJ1Y3Rvcihjb250ZW50SWQsIGZhbGxiYWNrVGV4dCkge1xyXG5cdFx0dGhpcy5mYWxsYmFja1RleHQgPSBmYWxsYmFja1RleHQ7XHJcblx0XHR0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcclxuXHRcdHRoaXMubW9kYWxUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRlbXBsYXRlJyk7XHJcblx0fVxyXG5cclxuXHRzaG93KCkge1xyXG5cdFx0aWYgKCdjb250ZW50JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKSB7XHJcblx0XHRcdGNvbnN0IG1vZGFsRWxlbWVudHMgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxyXG5cdFx0XHRcdHRoaXMubW9kYWxUZW1wbGF0ZUVsLmNvbnRlbnQsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLm1vZGFsRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblx0XHRcdHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbW9kYWxFbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuXHRcdFx0Y29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxyXG5cdFx0XHRcdHRoaXMuY29udGVudFRlbXBsYXRlRWwuY29udGVudCxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLm1vZGFsRWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCB0aGlzLm1vZGFsRWxlbWVudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGVydCh0aGlzLmZhbGxiYWNrVGV4dCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGUoKSB7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxFbGVtZW50KTtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG5cdFx0dGhpcy5tb2RhbEVsZW1lbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJjb25zdCBHT09HTEVfQVBJX0tFWSA9ICdBSXphU3lBMWg5SnJmUWFHTzZqS2JhQnJ3QlBhYW1xd1lSYnlpYkEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkZHJlc3NGcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcclxuXHRyZXR1cm4gYXdhaXQgYXhpb3NcclxuXHRcdC5nZXQoXHJcblx0XHRcdGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke2Nvb3JkaW5hdGVzLmxhdH0sJHtjb29yZGluYXRlcy5sbmd9JmtleT0ke0dPT0dMRV9BUElfS0VZfWBcclxuXHRcdClcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlc0Zyb21BZGRyZXNzKGFkZHJlc3MpIHtcclxuXHRjb25zdCB1cmxBZGRyZXNzID0gZW5jb2RlVVJJKGFkZHJlc3MpO1xyXG5cdHJldHVybiBhd2FpdCBheGlvc1xyXG5cdFx0LmdldChcclxuXHRcdFx0YGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0ke3VybEFkZHJlc3N9JmtleT0ke0dPT0dMRV9BUElfS0VZfWBcclxuXHRcdClcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0fSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICcuL1VJL01hcCc7XHJcblxyXG5jbGFzcyBNeVBsYWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihjb29yZGluYXRlcywgYWRkcmVzcykge1xyXG5cdFx0bmV3IE1hcChjb29yZGluYXRlcyk7XHJcblx0XHRjb25zdCBoZWFkZXJUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XHJcblx0XHRoZWFkZXJUaXRsZUVsLnRleHRDb250ZW50ID0gYWRkcmVzcztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcbmNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcclxuY29uc3QgbG9jYXRpb25JZCA9IHF1ZXJ5UGFyYW1zLmdldCgnbG9jYXRpb24nKTtcclxuXHJcbmlmIChsb2NhdGlvbklkKSB7XHJcblx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9sb2NhdGlvbi8nICsgbG9jYXRpb25JZClcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgbG9jYXRpb24hJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0bmV3IE15UGxhY2UoZGF0YS5jb29yZGluYXRlcywgZGF0YS5hZGRyZXNzKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0YWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5pbXBvcnQge1xyXG5cdGdldENvb3JkaW5hdGVzRnJvbUFkZHJlc3MsXHJcblx0Z2V0QWRkcmVzc0Zyb21Db29yZGluYXRlcyxcclxufSBmcm9tICcuL1V0aWxpdHkvTG9jYXRpb24nO1xyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Y29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1mb3JtJyk7XHJcblx0XHRjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuXHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcblx0XHR0aGlzLnNoYXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlLWJ0bicpO1xyXG5cclxuXHRcdHRoaXMuc2hhcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNoYXJlUGxhY2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG5cdFx0YWRkcmVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcblx0XHRsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGVVc2VySGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHNoYXJlUGxhY2VIYW5kbGVyKCkge1xyXG5cdFx0aWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcblx0XHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbC5zZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZFxyXG5cdFx0XHQud3JpdGVUZXh0KHRoaXMuc2hhcmVMaW5rSW5wdXRFbC52YWx1ZSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGFsZXJ0KCdDb3BpZWQgdG8gY2xpcGJvYXJkIScpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hhcmVMaW5rSW5wdXRFbC5zZWxlY3QoKTtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcblx0XHRpZiAodGhpcy5tYXApIHtcclxuXHRcdFx0dGhpcy5tYXAucmVuZGVyKGNvb3JkaW5hdGVzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubWFwID0gbmV3IE1hcChjb29yZGluYXRlcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hZGQtbG9jYXRpb24nLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0YWRkcmVzczogYWRkcmVzcyxcclxuXHRcdFx0XHRsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcclxuXHRcdFx0XHRsbmc6IGNvb3JkaW5hdGVzLmxuZyxcclxuXHRcdFx0fSksXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uSWQgPSBkYXRhLmxvY2F0aW9uSWQ7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2hhcmVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnNoYXJlTGlua0lucHV0RWwudmFsdWUgPSBgJHtsb2NhdGlvbi5vcmlnaW59L215LXBsYWNlP2xvY2F0aW9uPSR7bG9jYXRpb25JZH1gO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG5cdFx0aWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuXHRcdFx0YWxlcnQoXHJcblx0XHRcdFx0J0xvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIgLSBwbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gYnJvd3NlciBvciBtYW51YWxseSBlbnRlciBhbiBhZGRyZXNzLidcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdHZXR0aW5nIGxvY2F0aW9uLi4uJyk7XHJcblx0XHRtb2RhbC5zaG93KCk7XHJcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG5cdFx0XHRhc3luYyBzdWNjZXNzUmVzdWx0ID0+IHtcclxuXHRcdFx0XHQvLyBjcmVhdGUgYSBzZXBhcmF0ZSBjbGFzcyBmb3IgdGhhdCA/XHJcblx0XHRcdFx0Y29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcblx0XHRcdFx0XHRsYXQ6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0bG5nOiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sb25naXR1ZGUsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21Db29yZGluYXRlcyhjb29yZGluYXRlcyk7XHJcblx0XHRcdFx0bW9kYWwuaGlkZSgpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMsIGFkZHJlc3MpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0bW9kYWwuaGlkZSgpO1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmaW5kQWRkcmVzc0hhbmRsZXIoZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBhZGRyZXNzID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzJykudmFsdWU7XHJcblx0XHRpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcy50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGFsZXJ0KCdJbnZhbGlkIGFkZHJlc3MgLSBwbGVhc2UgdHJ5IGFnYWluIScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgnbG9hZGluZy1tb2RhbC1jb250ZW50JywgJ0dldHRpbmcgbG9jYXRpb24uLi4nKTtcclxuXHRcdG1vZGFsLnNob3coKTtcclxuXHRcdGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXNGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMsIGFkZHJlc3MpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0YWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcblx0XHR9XHJcblx0XHRtb2RhbC5oaWRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5uZXcgUGxhY2VGaW5kZXIoKTtcclxuIl0sIm5hbWVzIjpbIk1hcCIsImNvbnN0cnVjdG9yIiwiY29vcmRpbmF0ZXMiLCJyZW5kZXIiLCJnb29nbGUiLCJhbGVydCIsIm1hcHMiLCJpbXBvcnRMaWJyYXJ5IiwibWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJNYXJrZXIiLCJwb3NpdGlvbiIsIk1vZGFsIiwiY29udGVudElkIiwiZmFsbGJhY2tUZXh0IiwiY29udGVudFRlbXBsYXRlRWwiLCJtb2RhbFRlbXBsYXRlRWwiLCJzaG93IiwiY3JlYXRlRWxlbWVudCIsIm1vZGFsRWxlbWVudHMiLCJpbXBvcnROb2RlIiwiY29udGVudCIsIm1vZGFsRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZHJvcEVsZW1lbnQiLCJjb250ZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImhpZGUiLCJyZW1vdmVDaGlsZCIsIkdPT0dMRV9BUElfS0VZIiwiZ2V0QWRkcmVzc0Zyb21Db29yZGluYXRlcyIsImF4aW9zIiwiZ2V0IiwibGF0IiwibG5nIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciIsImdldENvb3JkaW5hdGVzRnJvbUFkZHJlc3MiLCJhZGRyZXNzIiwidXJsQWRkcmVzcyIsImVuY29kZVVSSSIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJNeVBsYWNlIiwiaGVhZGVyVGl0bGVFbCIsInRleHRDb250ZW50IiwidXJsIiwiVVJMIiwiaHJlZiIsInF1ZXJ5UGFyYW1zIiwic2VhcmNoUGFyYW1zIiwibG9jYXRpb25JZCIsImZldGNoIiwib2siLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsIlBsYWNlRmluZGVyIiwiYWRkcmVzc0Zvcm0iLCJsb2NhdGVVc2VyQnRuIiwic2hhcmVMaW5rSW5wdXRFbCIsInNoYXJlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNoYXJlUGxhY2VIYW5kbGVyIiwiYmluZCIsImZpbmRBZGRyZXNzSGFuZGxlciIsImxvY2F0ZVVzZXJIYW5kbGVyIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwic2VsZWN0Iiwid3JpdGVUZXh0IiwidmFsdWUiLCJzZWxlY3RQbGFjZSIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGlzYWJsZWQiLCJvcmlnaW4iLCJnZW9sb2NhdGlvbiIsIm1vZGFsIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc1Jlc3VsdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9