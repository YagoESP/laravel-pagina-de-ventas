/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/front/desktop/accordion.js":
/*!*************************************************!*\
  !*** ./resources/js/front/desktop/accordion.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAccordion": () => (/* binding */ renderAccordion)
/* harmony export */ });
var renderAccordion = function renderAccordion() {
  var faqs = document.querySelectorAll(".faq-item");
  document.addEventListener("faqs", function (event) {
    renderAccordion();
  });

  if (faqs) {
    faqs.forEach(function (faq, i) {
      faq.addEventListener("click", function () {
        var contents = document.querySelectorAll(".faq-item-content");
        contents[i].classList.toggle("active");
        var arrow = document.querySelectorAll(".item");
        arrow[i].classList.toggle("active");
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/cart.js":
/*!********************************************!*\
  !*** ./resources/js/front/desktop/cart.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCart": () => (/* binding */ renderCart)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderCart = function renderCart() {
  var mainContainer = document.querySelector("main");
  var cartBuyButton = document.querySelector(".buy-button-cart");
  var plusMinusButtons = document.querySelectorAll('.plus-minus-button');
  document.addEventListener("carts", function (event) {
    renderCart();
  });

  if (cartBuyButton) {
    cartBuyButton.addEventListener("click", function (event) {
      event.preventDefault();
      var url = cartBuyButton.dataset.url;

      var sendCart = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(url, {
                    headers: {
                      'X-Requested-With': 'XMLHttpRequest'
                    },
                    method: 'GET'
                  }).then(function (response) {
                    if (!response.ok) throw response;
                    return response.json();
                  }).then(function (json) {
                    mainContainer.innerHTML = json.content;
                    document.dispatchEvent(new CustomEvent('checkout'));
                  });

                case 2:
                  response = _context.sent;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function sendCart() {
          return _ref.apply(this, arguments);
        };
      }();

      sendCart();
    });
  }

  if (plusMinusButtons) {
    plusMinusButtons.forEach(function (plusMinusButton) {
      plusMinusButton.addEventListener("click", function (event) {
        event.preventDefault();
        var url = plusMinusButton.dataset.url;

        var sendProduct = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch(url, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                      },
                      method: 'GET'
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent('cart'));
                    });

                  case 2:
                    response = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function sendProduct() {
            return _ref2.apply(this, arguments);
          };
        }();

        sendProduct();
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/fingerprint.js":
/*!***************************************************!*\
  !*** ./resources/js/front/desktop/fingerprint.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFingerprint": () => (/* binding */ renderFingerprint)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clientjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clientjs */ "./node_modules/clientjs/dist/client.base.min.js");
/* harmony import */ var clientjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clientjs__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var renderFingerprint = function renderFingerprint() {
  if (localStorage.getItem('fp') == null) {
    var client = new clientjs__WEBPACK_IMPORTED_MODULE_1__.ClientJS();
    var data = new FormData();
    data.append('fingerprint', client.getFingerprint());
    data.append('browser', client.getBrowser());
    data.append('browser_version', client.getBrowserVersion());
    data.append('os', client.getOS());
    data.append('os_version', client.getOSVersion());
    data.append('resolution', client.getCurrentResolution());

    var sendPostRequest = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('/fingerprint', {
                  headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                  },
                  method: 'POST',
                  body: data
                }).then(function (response) {
                  if (!response.ok) throw response;
                  return response.json();
                }).then(function (json) {
                  localStorage.setItem('fp', json.fingerprint);
                })["catch"](function (error) {
                  if (error.status == '500') {
                    console.log(error);
                  }

                  ;
                });

              case 2:
                response = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function sendPostRequest() {
        return _ref.apply(this, arguments);
      };
    }();

    sendPostRequest();
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/form.js":
/*!********************************************!*\
  !*** ./resources/js/front/desktop/form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderForm": () => (/* binding */ renderForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderForm = function renderForm() {
  var mainContainer = document.querySelector("main");
  var storeButton = document.querySelector('.store-button');
  var forms = document.querySelectorAll('.front-form');
  document.addEventListener("contact", function (event) {
    renderForm();
  });

  if (storeButton) {
    storeButton.addEventListener("click", function (event) {
      event.preventDefault();
      forms.forEach(function (form) {
        /*
            En las siguientes líneas se obtiene el valor del formulario a través de un objeto FormData
            y se captura la url que usaremos para enviar los datos al servidor.
        */
        var data = new FormData(form);
        var url = form.action;

        var _iterator = _createForOfIteratorHelper(data.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pair = _step.value;
            console.log(pair[0] + ', ' + pair[1]);
          }
          /*	
              En el siguiente valor estamos capturando los datos del ckeditor y se los añadimos a los datos
              del formData. 
          */

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (ckeditors != 'null') {
          Object.entries(ckeditors).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            data.append(key, value.getData());
          });
        }
        /*
            A continuación vamos a hacer una llamada de tipo POST mediante fetch, esta vez vamos a 
            añadir en los headers el token que nos ha dado Laravel el cual va a prevenir que se puedan 
            hacer ataques de tipos cross-site scripting.
        */


        var sendPostRequest = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url, {
                      headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                      },
                      method: 'POST',
                      body: data
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent('contact'));
                    })["catch"](function (error) {
                      // document.dispatchEvent(new CustomEvent('stopWait'));
                      if (error.status == '422') {
                        error.json().then(function (jsonError) {
                          var errors = jsonError.errors;
                          var errorMessage = '';
                          Object.keys(errors).forEach(function (key) {
                            errorMessage += '<li>' + errors[key] + '</li>';
                          });
                          document.dispatchEvent(new CustomEvent('message', {
                            detail: {
                              message: errorMessage,
                              type: 'error'
                            }
                          }));
                        });
                      }

                      if (error.status == '500') {
                        console.log(error);
                      }

                      ;
                    });

                  case 2:
                    response = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function sendPostRequest() {
            return _ref3.apply(this, arguments);
          };
        }();

        sendPostRequest();
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/menu.js":
/*!********************************************!*\
  !*** ./resources/js/front/desktop/menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderMenu = function renderMenu() {
  var viewButtons = document.querySelectorAll(".view-button-menu");
  var mainContainer = document.querySelector("main");

  if (viewButtons) {
    viewButtons.forEach(function (viewButton) {
      viewButton.addEventListener("click", function (event) {
        var url = viewButton.dataset.url;
        var section = viewButton.dataset.section;
        var currentSection = document.querySelector('.page-section').id;
        sessionStorage.setItem('lastSection', currentSection);

        var sendMenu = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                      },
                      method: 'GET'
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      window.history.pushState('', '', url);
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent(section));
                    })["catch"](function (error) {
                      if (error.status == '500') {
                        console.log(error);
                      }
                    });

                  case 2:
                    response = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function sendMenu() {
            return _ref.apply(this, arguments);
          };
        }();

        sendMenu();
      });
    });
  }

  window.addEventListener('popstate', function (event) {
    var url = window.location.href;

    var sendIndexRequest = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(url, {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  },
                  method: 'GET'
                }).then(function (response) {
                  if (!response.ok) throw response;
                  return response.json();
                }).then(function (json) {
                  mainContainer.innerHTML = json.content;
                  document.dispatchEvent(new CustomEvent('loadSection', {
                    detail: {
                      section: sessionStorage.getItem('lastSection')
                    }
                  }));
                  var currentSection = document.querySelector('.page-section').id;
                  sessionStorage.setItem('lastSection', currentSection);
                })["catch"](function (error) {
                  if (error.status == '500') {
                    console.log(error);
                  }
                });

              case 2:
                response = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function sendIndexRequest() {
        return _ref2.apply(this, arguments);
      };
    }();

    sendIndexRequest();
  });
};

/***/ }),

/***/ "./resources/js/front/desktop/message.js":
/*!***********************************************!*\
  !*** ./resources/js/front/desktop/message.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMessage": () => (/* binding */ renderMessage)
/* harmony export */ });
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.js */ "./resources/js/front/desktop/notifications.js");

var renderMessage = function renderMessage() {
  var addButton = document.querySelector(".save");

  if (addButton) {
    addButton.addEventListener("click", function () {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Enviado correctamente',
          type: 'success'
        }
      }));
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/notification.js":
/*!****************************************************!*\
  !*** ./resources/js/front/desktop/notification.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNotification": () => (/* binding */ renderNotification)
/* harmony export */ });
var renderNotification = function renderNotification() {
  var addButton = document.querySelector(".add-to-cart-button");

  if (addButton) {
    addButton.addEventListener("click", function () {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Enviado correctamente',
          type: 'success'
        }
      }));
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/notifications.js":
/*!*****************************************************!*\
  !*** ./resources/js/front/desktop/notifications.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNotifications": () => (/* binding */ renderNotifications)
/* harmony export */ });
var renderNotifications = function renderNotifications() {
  document.addEventListener("message", function (event) {
    var notification = document.querySelector(".notification");
    var notificationText = document.getElementById("notification-text");
    notificationText.innerHTML = event.detail.text;
    notification.classList.add(event.detail.type);
    setTimeout(function () {
      notification.classList.remove(event.detail.type);
    }, 5000);
  });
};

/***/ }),

/***/ "./resources/js/front/desktop/plus-minus-button.js":
/*!*********************************************************!*\
  !*** ./resources/js/front/desktop/plus-minus-button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlusMinusButton": () => (/* binding */ renderPlusMinusButton)
/* harmony export */ });
var renderPlusMinusButton = function renderPlusMinusButton() {
  var adds = document.querySelectorAll(".add");
  var substracts = document.querySelectorAll(".subtract");
  document.addEventListener("product", function (event) {
    renderPlusMinusButton();
  });
  adds.forEach(function (add) {
    add.addEventListener("click", function (event) {
      event.preventDefault();
      var show = add.closest('.amount').querySelector('.show');
      show.value = parseInt(show.value) + 1;
    });
  });
  substracts.forEach(function (substract) {
    substract.addEventListener("click", function (event) {
      event.preventDefault();
      var show = substract.closest('.amount').querySelector('.show');

      if (show.value > 1) {
        show.value = parseInt(show.value) - 1;
      }
    });
  });
};

/***/ }),

/***/ "./resources/js/front/desktop/products.js":
/*!************************************************!*\
  !*** ./resources/js/front/desktop/products.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProducts": () => (/* binding */ renderProducts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderProducts = function renderProducts() {
  var viewButtons = document.querySelectorAll(".view-button");
  var productCategories = document.querySelectorAll(".category");
  var productFilter = document.querySelector(".product-filter");
  var buyButton = document.querySelector('.buy-button');
  var forms = document.querySelectorAll('.front-form-product');
  var mainContainer = document.querySelector("main");
  document.addEventListener("products", function (event) {
    renderProducts();
  });

  if (viewButtons) {
    viewButtons.forEach(function (viewButton) {
      viewButton.addEventListener("click", function () {
        var url = viewButton.dataset.url;

        var sendProduct = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                      },
                      method: 'GET'
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent('product'));
                    });

                  case 2:
                    response = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function sendProduct() {
            return _ref.apply(this, arguments);
          };
        }();

        sendProduct();
      });
    });
  }

  if (buyButton) {
    buyButton.addEventListener("click", function (event) {
      event.preventDefault();
      forms.forEach(function (form) {
        var data = new FormData(form);
        var url = form.action;

        var _iterator = _createForOfIteratorHelper(data.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pair = _step.value;
            console.log(pair[0] + ', ' + pair[1]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var sendPostRequest = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch(url, {
                      headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                      },
                      method: 'POST',
                      body: data
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent('cart'));
                    })["catch"](function (error) {
                      if (error.status == '500') {
                        console.log(error);
                      }

                      ;
                    });

                  case 2:
                    response = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function sendPostRequest() {
            return _ref2.apply(this, arguments);
          };
        }();

        sendPostRequest();
      });
    });
  }

  if (productCategories) {
    productCategories.forEach(function (productCategory) {
      productCategory.addEventListener("click", function () {
        var url = productCategory.dataset.url;
        console;

        var sendCreateRequest = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    document.dispatchEvent(new CustomEvent('startWait'));
                    _context3.next = 3;
                    return fetch(url, {
                      headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                      },
                      method: 'GET'
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                      document.dispatchEvent(new CustomEvent('loadSection', {
                        detail: {
                          section: 'products'
                        }
                      }));
                    })["catch"](function (error) {
                      if (error.status == '500') {
                        console.log(error);
                      }

                      ;
                    });

                  case 3:
                    response = _context3.sent;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function sendCreateRequest() {
            return _ref3.apply(this, arguments);
          };
        }();

        sendCreateRequest();
      });
    });
  }

  ;

  if (productFilter) {
    productFilter.addEventListener("change", function () {
      var url = productFilter.value;

      var sendFilterRequest = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  document.dispatchEvent(new CustomEvent('startWait'));
                  _context4.next = 3;
                  return fetch(url, {
                    headers: {
                      'X-Requested-With': 'XMLHttpRequest'
                    },
                    method: 'GET'
                  }).then(function (response) {
                    if (!response.ok) throw response;
                    return response.json();
                  }).then(function (json) {
                    mainContainer.innerHTML = json.content;
                    document.dispatchEvent(new CustomEvent('loadSection', {
                      detail: {
                        section: 'products'
                      }
                    }));
                  })["catch"](function (error) {
                    if (error.status == '500') {
                      console.log(error);
                    }

                    ;
                  });

                case 3:
                  response = _context4.sent;

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function sendFilterRequest() {
          return _ref4.apply(this, arguments);
        };
      }();

      sendFilterRequest();
    });
  }

  ;
};

/***/ }),

/***/ "./resources/js/front/desktop/purchase-button.js":
/*!*******************************************************!*\
  !*** ./resources/js/front/desktop/purchase-button.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPurchaseButton": () => (/* binding */ renderPurchaseButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderPurchaseButton = function renderPurchaseButton() {
  var mainContainer = document.querySelector("main");
  var purchaseButton = document.querySelector('.purchase-button');
  var forms = document.querySelectorAll('.front-form-checkout');
  document.addEventListener("checkout", function (event) {
    renderPurchaseButton();
  });

  if (purchaseButton) {
    purchaseButton.addEventListener("click", function (event) {
      event.preventDefault();
      forms.forEach(function (form) {
        var data = new FormData(form);
        var url = form.action;
        console.log(form);

        var _iterator = _createForOfIteratorHelper(data.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pair = _step.value;
            console.log(pair[0] + ', ' + pair[1]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var sendSellRequest = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url, {
                      headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                      },
                      method: 'POST',
                      body: data
                    }).then(function (response) {
                      if (!response.ok) throw response;
                      return response.json();
                    }).then(function (json) {
                      mainContainer.innerHTML = json.content;
                    })["catch"](function (error) {
                      if (error.status == '500') {
                        console.log(error);
                      }

                      ;
                    });

                  case 2:
                    response = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function sendSellRequest() {
            return _ref.apply(this, arguments);
          };
        }();

        sendSellRequest();
      });
    });
  }
};

/***/ }),

/***/ "./resources/js/front/desktop/tabs.js":
/*!********************************************!*\
  !*** ./resources/js/front/desktop/tabs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTabs": () => (/* binding */ renderTabs)
/* harmony export */ });
var renderTabs = function renderTabs() {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".content");
  document.addEventListener("product", function (event) {
    renderTabs();
  });

  if (tabs) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (tab, i) {
          contents[i].classList.remove("active");
          tab.classList.remove("active");
        });
        contents[i].classList.add("active");
        tab.classList.add("active");
      });
    });
  }
};

/***/ }),

/***/ "./node_modules/clientjs/dist/client.base.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/clientjs/dist/client.base.min.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,i){if(true)module.exports=i();else { var n, t; }}(this,(function(){return function(e){var i={};function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)t.d(n,o,function(i){return e[i]}.bind(null,o));return n},t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=0)}([function(e,i,t){"use strict";var n,o,r=t(1)(),a=t(3),s=t(4),l=t(6),u=function(){var e=new s;return n=e.getResult(),o=new l,this};u.prototype={getSoftwareVersion:function(){return"0.1.11"},getBrowserData:function(){return n},getFingerprint:function(){var e="|",i=n.ua,t=this.getScreenPrint(),o=this.getPlugins(),r=this.getFonts(),s=this.isLocalStorage(),l=this.isSessionStorage(),u=this.getTimeZone(),c=this.getLanguage(),d=this.getSystemLanguage(),b=this.isCookie(),m=this.getCanvasPrint();return a(i+e+t+e+o+e+r+e+s+e+l+e+u+e+c+e+d+e+b+e+m,256)},getCustomFingerprint:function(){for(var e="|",i="",t=0;t<arguments.length;t++)i+=arguments[t]+e;return a(i,256)},getUserAgent:function(){return n.ua},getUserAgentLowerCase:function(){return n.ua.toLowerCase()},getBrowser:function(){return n.browser.name},getBrowserVersion:function(){return n.browser.version},getBrowserMajorVersion:function(){return n.browser.major},isIE:function(){return/IE/i.test(n.browser.name)},isChrome:function(){return/Chrome/i.test(n.browser.name)},isFirefox:function(){return/Firefox/i.test(n.browser.name)},isSafari:function(){return/Safari/i.test(n.browser.name)},isMobileSafari:function(){return/Mobile\sSafari/i.test(n.browser.name)},isOpera:function(){return/Opera/i.test(n.browser.name)},getEngine:function(){return n.engine.name},getEngineVersion:function(){return n.engine.version},getOS:function(){return n.os.name},getOSVersion:function(){return n.os.version},isWindows:function(){return/Windows/i.test(n.os.name)},isMac:function(){return/Mac/i.test(n.os.name)},isLinux:function(){return/Linux/i.test(n.os.name)},isUbuntu:function(){return/Ubuntu/i.test(n.os.name)},isSolaris:function(){return/Solaris/i.test(n.os.name)},getDevice:function(){return n.device.model},getDeviceType:function(){return n.device.type},getDeviceVendor:function(){return n.device.vendor},getCPU:function(){return n.cpu.architecture},isMobile:function(){var e=n.ua||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},isMobileMajor:function(){return this.isMobileAndroid()||this.isMobileBlackBerry()||this.isMobileIOS()||this.isMobileOpera()||this.isMobileWindows()},isMobileAndroid:function(){return!!n.ua.match(/Android/i)},isMobileOpera:function(){return!!n.ua.match(/Opera Mini/i)},isMobileWindows:function(){return!!n.ua.match(/IEMobile/i)},isMobileBlackBerry:function(){return!!n.ua.match(/BlackBerry/i)},isMobileIOS:function(){return!!n.ua.match(/iPhone|iPad|iPod/i)},isIphone:function(){return!!n.ua.match(/iPhone/i)},isIpad:function(){return!!n.ua.match(/iPad/i)},isIpod:function(){return!!n.ua.match(/iPod/i)},getScreenPrint:function(){return"Current Resolution: "+this.getCurrentResolution()+", Available Resolution: "+this.getAvailableResolution()+", Color Depth: "+this.getColorDepth()+", Device XDPI: "+this.getDeviceXDPI()+", Device YDPI: "+this.getDeviceYDPI()},getColorDepth:function(){return screen.colorDepth},getCurrentResolution:function(){return screen.width+"x"+screen.height},getAvailableResolution:function(){return screen.availWidth+"x"+screen.availHeight},getDeviceXDPI:function(){return screen.deviceXDPI},getDeviceYDPI:function(){return screen.deviceYDPI},getPlugins:function(){for(var e="",i=0;i<navigator.plugins.length;i++)i==navigator.plugins.length-1?e+=navigator.plugins[i].name:e+=navigator.plugins[i].name+", ";return e},isJava:function(){return navigator.javaEnabled()},getJavaVersion:function(){throw new Error("Please use client.java.js or client.js if you need this functionality!")},isFlash:function(){return!!navigator.plugins["Shockwave Flash"]},getFlashVersion:function(){throw new Error("Please use client.flash.js or client.js if you need this functionality!")},isSilverlight:function(){return!!navigator.plugins["Silverlight Plug-In"]},getSilverlightVersion:function(){return this.isSilverlight()?navigator.plugins["Silverlight Plug-In"].description:""},isMimeTypes:function(){return!(!navigator.mimeTypes||!navigator.mimeTypes.length)},getMimeTypes:function(){var e="";if(navigator.mimeTypes)for(var i=0;i<navigator.mimeTypes.length;i++)i==navigator.mimeTypes.length-1?e+=navigator.mimeTypes[i].description:e+=navigator.mimeTypes[i].description+", ";return e},isFont:function(e){return o.detect(e)},getFonts:function(){for(var e=["Abadi MT Condensed Light","Adobe Fangsong Std","Adobe Hebrew","Adobe Ming Std","Agency FB","Aharoni","Andalus","Angsana New","AngsanaUPC","Aparajita","Arab","Arabic Transparent","Arabic Typesetting","Arial Baltic","Arial Black","Arial CE","Arial CYR","Arial Greek","Arial TUR","Arial","Batang","BatangChe","Bauhaus 93","Bell MT","Bitstream Vera Serif","Bodoni MT","Bookman Old Style","Braggadocio","Broadway","Browallia New","BrowalliaUPC","Calibri Light","Calibri","Californian FB","Cambria Math","Cambria","Candara","Castellar","Casual","Centaur","Century Gothic","Chalkduster","Colonna MT","Comic Sans MS","Consolas","Constantia","Copperplate Gothic Light","Corbel","Cordia New","CordiaUPC","Courier New Baltic","Courier New CE","Courier New CYR","Courier New Greek","Courier New TUR","Courier New","DFKai-SB","DaunPenh","David","DejaVu LGC Sans Mono","Desdemona","DilleniaUPC","DokChampa","Dotum","DotumChe","Ebrima","Engravers MT","Eras Bold ITC","Estrangelo Edessa","EucrosiaUPC","Euphemia","Eurostile","FangSong","Forte","FrankRuehl","Franklin Gothic Heavy","Franklin Gothic Medium","FreesiaUPC","French Script MT","Gabriola","Gautami","Georgia","Gigi","Gisha","Goudy Old Style","Gulim","GulimChe","GungSeo","Gungsuh","GungsuhChe","Haettenschweiler","Harrington","Hei S","HeiT","Heisei Kaku Gothic","Hiragino Sans GB","Impact","Informal Roman","IrisUPC","Iskoola Pota","JasmineUPC","KacstOne","KaiTi","Kalinga","Kartika","Khmer UI","Kino MT","KodchiangUPC","Kokila","Kozuka Gothic Pr6N","Lao UI","Latha","Leelawadee","Levenim MT","LilyUPC","Lohit Gujarati","Loma","Lucida Bright","Lucida Console","Lucida Fax","Lucida Sans Unicode","MS Gothic","MS Mincho","MS PGothic","MS PMincho","MS Reference Sans Serif","MS UI Gothic","MV Boli","Magneto","Malgun Gothic","Mangal","Marlett","Matura MT Script Capitals","Meiryo UI","Meiryo","Menlo","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU-ExtB","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","Miriam Fixed","Miriam","Mongolian Baiti","MoolBoran","NSimSun","Narkisim","News Gothic MT","Niagara Solid","Nyala","PMingLiU","PMingLiU-ExtB","Palace Script MT","Palatino Linotype","Papyrus","Perpetua","Plantagenet Cherokee","Playbill","Prelude Bold","Prelude Condensed Bold","Prelude Condensed Medium","Prelude Medium","PreludeCompressedWGL Black","PreludeCompressedWGL Bold","PreludeCompressedWGL Light","PreludeCompressedWGL Medium","PreludeCondensedWGL Black","PreludeCondensedWGL Bold","PreludeCondensedWGL Light","PreludeCondensedWGL Medium","PreludeWGL Black","PreludeWGL Bold","PreludeWGL Light","PreludeWGL Medium","Raavi","Rachana","Rockwell","Rod","Sakkal Majalla","Sawasdee","Script MT Bold","Segoe Print","Segoe Script","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Segoe UI","Shonar Bangla","Showcard Gothic","Shruti","SimHei","SimSun","SimSun-ExtB","Simplified Arabic Fixed","Simplified Arabic","Snap ITC","Sylfaen","Symbol","Tahoma","Times New Roman Baltic","Times New Roman CE","Times New Roman CYR","Times New Roman Greek","Times New Roman TUR","Times New Roman","TlwgMono","Traditional Arabic","Trebuchet MS","Tunga","Tw Cen MT Condensed Extra Bold","Ubuntu","Umpush","Univers","Utopia","Utsaah","Vani","Verdana","Vijaya","Vladimir Script","Vrinda","Webdings","Wide Latin","Wingdings"],i="",t=0;t<e.length;t++)o.detect(e[t])&&(i+=t==e.length-1?e[t]:e[t]+", ");return i},isLocalStorage:function(){try{return!!r.localStorage}catch(e){return!0}},isSessionStorage:function(){try{return!!r.sessionStorage}catch(e){return!0}},isCookie:function(){return navigator.cookieEnabled},getTimeZone:function(){var e,i;return e=new Date,(i=String(-e.getTimezoneOffset()/60))<0?"-"+("0"+(i*=-1)).slice(-2):"+"+("0"+i).slice(-2)},getLanguage:function(){return navigator.language},getSystemLanguage:function(){return navigator.systemLanguage||window.navigator.language},isCanvas:function(){var e=document.createElement("canvas");try{return!(!e.getContext||!e.getContext("2d"))}catch(i){return!1}},getCanvasPrint:function(){var e,i=document.createElement("canvas");try{e=i.getContext("2d")}catch(n){return""}var t="ClientJS,org <canvas> 1.0";return e.textBaseline="top",e.font="14px 'Arial'",e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText(t,2,15),e.fillStyle="rgba(102, 204, 0, 0.7)",e.fillText(t,4,17),i.toDataURL()}},i.ClientJS=u},function(e,i,t){"use strict";var n=t(2);e.exports=function(){return"object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Math===Math&&__webpack_require__.g.Array===Array?__webpack_require__.g:n}},function(e,i,t){"use strict";"undefined"!=typeof self?e.exports=self:"undefined"!=typeof window?e.exports=window:e.exports=Function("return this")()},function(e,i,t){e.exports=function(e,i){var t,n,o,r,a,s,l,u;for(t=3&e.length,n=e.length-t,o=i,a=3432918353,s=461845907,u=0;u<n;)l=255&e.charCodeAt(u)|(255&e.charCodeAt(++u))<<8|(255&e.charCodeAt(++u))<<16|(255&e.charCodeAt(++u))<<24,++u,o=27492+(65535&(r=5*(65535&(o=(o^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295)<<13|o>>>19))+((5*(o>>>16)&65535)<<16)&4294967295))+((58964+(r>>>16)&65535)<<16);switch(l=0,t){case 3:l^=(255&e.charCodeAt(u+2))<<16;case 2:l^=(255&e.charCodeAt(u+1))<<8;case 1:o^=l=(65535&(l=(l=(65535&(l^=255&e.charCodeAt(u)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295}return o^=e.length,o=2246822507*(65535&(o^=o>>>16))+((2246822507*(o>>>16)&65535)<<16)&4294967295,o=3266489909*(65535&(o^=o>>>13))+((3266489909*(o>>>16)&65535)<<16)&4294967295,(o^=o>>>16)>>>0}},function(e,i,t){var n;!function(o,r){"use strict";var a="function",s="undefined",l="object",u="string",c="model",d="name",b="type",m="vendor",w="version",g="architecture",p="console",f="mobile",h="tablet",v="smarttv",y="wearable",x="embedded",k="Amazon",S="Apple",C="ASUS",M="BlackBerry",P="Firefox",T="Google",B="Huawei",A="LG",L="Microsoft",U="Motorola",E="Opera",G="Samsung",N="Sony",j="Xiaomi",_="Zebra",R="Facebook",D=function(e){var i={};for(var t in e)i[e[t].toUpperCase()]=e[t];return i},I=function(e,i){return typeof e===u&&-1!==O(i).indexOf(O(e))},O=function(e){return e.toLowerCase()},z=function(e,i){if(typeof e===u)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},F=function(e,i){for(var t,n,o,s,u,c,d=0;d<i.length&&!u;){var b=i[d],m=i[d+1];for(t=n=0;t<b.length&&!u;)if(u=b[t++].exec(e))for(o=0;o<m.length;o++)c=u[++n],typeof(s=m[o])===l&&s.length>0?2==s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3==s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):r:this[s[0]]=c?s[1].call(this,c,s[2]):r:4==s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):r):this[s]=c||r;d+=2}},q=function(e,i){for(var t in i)if(typeof i[t]===l&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(I(i[t][n],e))return"?"===t?r:t}else if(I(i[t],e))return"?"===t?r:t;return e},W={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},V={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,w],[/opios[\/ ]+([\w\.]+)/i],[w,[d,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[w,[d,E]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[d,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[w,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure Browser"],w],[/\bfocus\/([\w\.]+)/i],[w,[d,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[w,[d,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[d,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[w,[d,P]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 Browser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,R],w],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[d,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,"Chrome WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,w],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[w,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[w,q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[d,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,O]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",O]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,O]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[m,G],[b,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[m,G],[b,f]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[m,S],[b,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[m,S],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[m,B],[b,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[m,B],[b,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[m,j],[b,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[m,j],[b,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[c,[m,"OPPO"],[b,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[m,"Vivo"],[b,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[m,"Realme"],[b,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[m,U],[b,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[m,U],[b,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[m,A],[b,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[m,A],[b,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[m,"Lenovo"],[b,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[m,"Nokia"],[b,f]],[/(pixel c)\b/i],[c,[m,T],[b,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[m,T],[b,f]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,N],[b,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[m,N],[b,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[m,"OnePlus"],[b,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[m,k],[b,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[m,k],[b,f]],[/(playbook);[-\w\),; ]+(rim)/i],[c,m,[b,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[m,M],[b,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[m,C],[b,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[m,C],[b,f]],[/(nexus 9)/i],[c,[m,"HTC"],[b,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[m,[c,/_/g," "],[b,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[m,"Acer"],[b,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[m,"Meizu"],[b,f]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[m,"Sharp"],[b,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,c,[b,f]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,c,[b,h]],[/(surface duo)/i],[c,[m,L],[b,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[m,"Fairphone"],[b,f]],[/(u304aa)/i],[c,[m,"AT&T"],[b,f]],[/\bsie-(\w*)/i],[c,[m,"Siemens"],[b,f]],[/\b(rct\w+) b/i],[c,[m,"RCA"],[b,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[m,"Dell"],[b,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[m,"Verizon"],[b,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[m,"Barnes & Noble"],[b,h]],[/\b(tm\d{3}\w+) b/i],[c,[m,"NuVision"],[b,h]],[/\b(k88) b/i],[c,[m,"ZTE"],[b,h]],[/\b(nx\d{3}j) b/i],[c,[m,"ZTE"],[b,f]],[/\b(gen\d{3}) b.+49h/i],[c,[m,"Swiss"],[b,f]],[/\b(zur\d{3}) b/i],[c,[m,"Swiss"],[b,h]],[/\b((zeki)?tb.*\b) b/i],[c,[m,"Zeki"],[b,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],c,[b,h]],[/\b(ns-?\w{0,9}) b/i],[c,[m,"Insignia"],[b,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[m,"NextBook"],[b,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],c,[b,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],c,[b,f]],[/\b(ph-1) /i],[c,[m,"Essential"],[b,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[m,"Envizen"],[b,h]],[/\b(trio[-\w\. ]+) b/i],[c,[m,"MachSpeed"],[b,h]],[/\btu_(1491) b/i],[c,[m,"Rotor"],[b,h]],[/(shield[\w ]+) b/i],[c,[m,"Nvidia"],[b,h]],[/(sprint) (\w+)/i],[m,c,[b,f]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,L],[b,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[m,_],[b,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[m,_],[b,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,c,[b,p]],[/droid.+; (shield) bui/i],[c,[m,"Nvidia"],[b,p]],[/(playstation [345portablevi]+)/i],[c,[m,N],[b,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[m,L],[b,p]],[/smart-tv.+(samsung)/i],[m,[b,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,G],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,A],[b,v]],[/(apple) ?tv/i],[m,[c,"Apple TV"],[b,v]],[/crkey/i],[[c,"Chromecast"],[m,T],[b,v]],[/droid.+aft(\w)( bui|\))/i],[c,[m,k],[b,v]],[/\(dtv[\);].+(aquos)/i],[c,[m,"Sharp"],[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[m,z],[c,z],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/((pebble))app/i],[m,c,[b,y]],[/droid.+; (glass) \d/i],[c,[m,T],[b,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[m,_],[b,y]],[/(quest( 2)?)/i],[c,[m,R],[b,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[b,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[b,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,f]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[w,q,W]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[w,q,W]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[w,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,w],[/\(bb(10);/i],[w,[d,M]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[d,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[d,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],w],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,w],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,w]]},H=function(e,i){if(typeof e===l&&(i=e,e=r),!(this instanceof H))return new H(e,i).getResult();var t=e||(typeof o!==s&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),n=i?function(e,i){var t={};for(var n in e)i[n]&&i[n].length%2==0?t[n]=i[n].concat(e[n]):t[n]=e[n];return t}(V,i):V;return this.getBrowser=function(){var e,i={};return i.name=r,i.version=r,F.call(i,t,n.browser),i.major=typeof(e=i.version)===u?e.replace(/[^\d\.]/g,"").split(".")[0]:r,i},this.getCPU=function(){var e={};return e.architecture=r,F.call(e,t,n.cpu),e},this.getDevice=function(){var e={};return e.vendor=r,e.model=r,e.type=r,F.call(e,t,n.device),e},this.getEngine=function(){var e={};return e.name=r,e.version=r,F.call(e,t,n.engine),e},this.getOS=function(){var e={};return e.name=r,e.version=r,F.call(e,t,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=typeof e===u&&e.length>255?z(e,255):e,this},this.setUA(t),this};H.VERSION="0.7.30",H.BROWSER=D([d,w,"major"]),H.CPU=D([g]),H.DEVICE=D([c,m,b,p,f,v,h,y,x]),H.ENGINE=H.OS=D([d,w]),typeof i!==s?(typeof e!==s&&e.exports&&(i=e.exports=H),i.UAParser=H):t(5)?(n=function(){return H}.call(i,t,i,e))===r||(e.exports=n):typeof o!==s&&(o.UAParser=H);var K=typeof o!==s&&(o.jQuery||o.Zepto);if(K&&!K.ua){var Y=new H;K.ua=Y.getResult(),K.ua.get=function(){return Y.getUA()},K.ua.set=function(e){Y.setUA(e);var i=Y.getResult();for(var t in i)K.ua[t]=i[t]}}}("object"==typeof window?window:this)},function(e,i){(function(i){e.exports=i}).call(this,{})},function(e,i){e.exports=function(){var e=["monospace","sans-serif","serif"],i=document.getElementsByTagName("body")[0],t=document.createElement("span");t.style.fontSize="72px",t.innerHTML="mmmmmmmmmmlli";var n={},o={};for(var r in e)t.style.fontFamily=e[r],i.appendChild(t),n[e[r]]=t.offsetWidth,o[e[r]]=t.offsetHeight,i.removeChild(t);this.detect=function(r){var a=!1;for(var s in e){t.style.fontFamily=r+","+e[s],i.appendChild(t);var l=t.offsetWidth!=n[e[s]]||t.offsetHeight!=o[e[s]];i.removeChild(t),a=a||l}return a}}}])}));
//# sourceMappingURL=client.base.min.js.map

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./resources/js/front/desktop/app.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ "./resources/js/front/desktop/tabs.js");
/* harmony import */ var _plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-minus-button.js */ "./resources/js/front/desktop/plus-minus-button.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./resources/js/front/desktop/form.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.js */ "./resources/js/front/desktop/notifications.js");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion.js */ "./resources/js/front/desktop/accordion.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.js */ "./resources/js/front/desktop/message.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.js */ "./resources/js/front/desktop/products.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.js */ "./resources/js/front/desktop/menu.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart.js */ "./resources/js/front/desktop/cart.js");
/* harmony import */ var _notification_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification.js */ "./resources/js/front/desktop/notification.js");
/* harmony import */ var _purchase_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./purchase-button.js */ "./resources/js/front/desktop/purchase-button.js");
/* harmony import */ var _fingerprint_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fingerprint.js */ "./resources/js/front/desktop/fingerprint.js");












(0,_fingerprint_js__WEBPACK_IMPORTED_MODULE_11__.renderFingerprint)();
(0,_purchase_button_js__WEBPACK_IMPORTED_MODULE_10__.renderPurchaseButton)();
(0,_notification_js__WEBPACK_IMPORTED_MODULE_9__.renderNotification)();
(0,_cart_js__WEBPACK_IMPORTED_MODULE_8__.renderCart)();
(0,_menu_js__WEBPACK_IMPORTED_MODULE_7__.renderMenu)();
(0,_message_js__WEBPACK_IMPORTED_MODULE_5__.renderMessage)();
(0,_accordion_js__WEBPACK_IMPORTED_MODULE_4__.renderAccordion)();
(0,_notifications_js__WEBPACK_IMPORTED_MODULE_3__.renderNotifications)();
(0,_products_js__WEBPACK_IMPORTED_MODULE_6__.renderProducts)();
(0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.renderTabs)();
(0,_plus_minus_button_js__WEBPACK_IMPORTED_MODULE_1__.renderPlusMinusButton)();
(0,_form_js__WEBPACK_IMPORTED_MODULE_2__.renderForm)();
})();

/******/ })()
;