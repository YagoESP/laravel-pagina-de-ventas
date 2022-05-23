/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/admin/mobile/accordion.js":
/*!************************************************!*\
  !*** ./resources/js/admin/mobile/accordion.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAccordion": () => (/* binding */ renderAccordion)
/* harmony export */ });
var renderAccordion = function renderAccordion() {
  var faqs = document.querySelectorAll(".question");

  if (faqs) {
    faqs.forEach(function (faq, i) {
      faq.addEventListener("click", function () {
        var contents = document.querySelectorAll(".content");
        contents[i].classList.toggle("active");
        var arrow = document.querySelectorAll(".item");
        arrow[i].classList.toggle("active");
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/admin/mobile/menu-button.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/mobile/menu-button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenuButton": () => (/* binding */ renderMenuButton)
/* harmony export */ });
var renderMenuButton = function renderMenuButton() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.getElementById("hamburger-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }
};

/***/ }),

/***/ "./resources/js/admin/mobile/notifications.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/mobile/notifications.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNotifications": () => (/* binding */ renderNotifications)
/* harmony export */ });
var renderNotifications = function renderNotifications() {};

/***/ }),

/***/ "./resources/js/admin/mobile/plus-minus-button.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/mobile/plus-minus-button.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlusMinusButton": () => (/* binding */ renderPlusMinusButton)
/* harmony export */ });
var renderPlusMinusButton = function renderPlusMinusButton() {
  var adds = document.querySelectorAll(".add");
  var substracts = document.querySelectorAll(".subtract");

  if (adds) {
    adds.forEach(function (add) {
      add.addEventListener("click", function () {
        var show = add.closest('.amount').querySelector('.show');
        show.value = parseInt(show.value) + 1;
      });
    });
  }

  if (substracts) {
    substracts.forEach(function (substract) {
      substract.addEventListener("click", function () {
        var show = substract.closest('.amount').querySelector('.show');

        if (show.value > 1) {
          show.value = parseInt(show.value) - 1;
        }
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/admin/mobile/select.js":
/*!*********************************************!*\
  !*** ./resources/js/admin/mobile/select.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSelect": () => (/* binding */ renderSelect)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderSelect = function renderSelect() {
  var infoproducts = document.querySelector('.informations-product');

  if (infoproducts) {
    infoproducts.addEventListener("change", function () {
      var infoRelated = document.querySelectorAll('.information-related');

      _toConsumableArray(infoRelated).forEach(function (div) {
        if (infoproducts.value === div.dataset.related) {
          div.classList.add('active');
        } else {
          div.classList.remove('active');
        }
      });
    }); // [...infoproducts.options].forEach(infoproduct =>{
    //     console.log(infoproduct);
    //     infoproduct.addEventListener("click", () => {
    //         let infoRelated = document.querySelector('.information-related');
    //         console.log(infoRelated);
    //         console.log(infoRelated.dataset.related);
    //         // if(infoproduct.value === infoRelated.dataset.related){
    //         //     infoRelated.classList.add('active');
    //         // }else{
    //         //     infoRelated.classList.remove('active');
    //         // }
    //     });
    // })
  }
};

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
/*!******************************************!*\
  !*** ./resources/js/admin/mobile/app.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./resources/js/admin/mobile/select.js");
/* harmony import */ var _plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-minus-button.js */ "./resources/js/admin/mobile/plus-minus-button.js");
/* harmony import */ var _menu_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-button.js */ "./resources/js/admin/mobile/menu-button.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.js */ "./resources/js/admin/mobile/notifications.js");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion.js */ "./resources/js/admin/mobile/accordion.js");





(0,_accordion_js__WEBPACK_IMPORTED_MODULE_4__.renderAccordion)();
(0,_notifications_js__WEBPACK_IMPORTED_MODULE_3__.renderNotifications)();
(0,_select_js__WEBPACK_IMPORTED_MODULE_0__.renderSelect)();
(0,_plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__.renderPlusMinusButton)();
(0,_menu_button_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuButton)();
})();

/******/ })()
;