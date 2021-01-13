/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/blocks.js":
/*!*******************************!*\
  !*** ./src/classes/blocks.js ***!
  \*******************************/
/*! exports provided: CarouselItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CarouselItem\", function() { return CarouselItem; });\nclass Block {\r\n    constructor(labelColor, labelTextSize, label, labelTriangleColor,\r\n                image, newPrice, oldPrice) {\r\n        this.labelColor = labelColor\r\n        this.labelTextSize = labelTextSize\r\n        this.label = label\r\n        this.labelTriangleColor = labelTriangleColor\r\n\r\n        this.image = image\r\n        this.newPrice = newPrice\r\n        this.oldPrice = oldPrice\r\n    }\r\n\r\n    toHTML() {\r\n        throw new Error('Метод toHTML должен быть реализован')\r\n    }\r\n}\r\n\r\nclass CarouselItem extends Block{\r\n    constructor(labelColor, labelTextSize, label, labelTriangleColor,\r\n                image, newPrice, oldPrice) {\r\n        super(labelColor, labelTextSize, label, labelTriangleColor,\r\n            image, newPrice, oldPrice)\r\n    }\r\n\r\n    toHTML() {\r\n        const html =\r\n            `\r\n            <div class=\"item\">\r\n                <div class=\"label ${this.labelColor}\">\r\n                    <p class=\"${this.labelTextSize}\">${this.label}</p>\r\n                    <div class=\"triangle ${this.labelTriangleColor}\"></div>\r\n                </div>\r\n                <div class=\"item-img-frame\">\r\n                    <img src=\"src/img/${this.image}\" alt=\"\">\r\n                </div>\r\n                <h1 class=\"clickable\">IP телефон Siemens Gigaset C530A IP</h1>\r\n                <div class=\"price\">\r\n                    <p>Цена:</p>\r\n                    <p class=\"new-price\">${this.newPrice}</p>\r\n                    <p class=\"old-price\">${this.oldPrice}</p>\r\n                </div>\r\n                <div class=\"buttons\">\r\n                    <button class=\"to-buy\"><i class=\"fas fa-shopping-cart\"></i>КУПИТЬ</button>\r\n                    <a href=\"#\" class=\"clickable\">Подробнее</a>\r\n                </div>\r\n            </div>\r\n           `\r\n        return html\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/blocks.js?");

/***/ }),

/***/ "./src/classes/site.js":
/*!*****************************!*\
  !*** ./src/classes/site.js ***!
  \*****************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Site\", function() { return Site; });\nclass Site {\r\n    constructor(selector) {\r\n        this.$el = document.querySelector(selector)\r\n    }\r\n\r\n    render(model) {\r\n        this.$el.innerHTML = '' // очитска шаблона\r\n        model.forEach(block => {\r\n            this.$el.insertAdjacentHTML('beforeend', block.toHTML())\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/site.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/site */ \"./src/classes/site.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\r\n\r\n\r\nconst site = new _classes_site__WEBPACK_IMPORTED_MODULE_0__[\"Site\"]('#site')\r\nsite.render(_model__WEBPACK_IMPORTED_MODULE_1__[\"model\"])\r\n\r\nconst site2 = new _classes_site__WEBPACK_IMPORTED_MODULE_0__[\"Site\"]('#site2')\r\nsite2.render(_model__WEBPACK_IMPORTED_MODULE_1__[\"model2\"])\r\n\r\nconst site3 = new _classes_site__WEBPACK_IMPORTED_MODULE_0__[\"Site\"]('#site3')\r\nsite3.render(_model__WEBPACK_IMPORTED_MODULE_1__[\"model3\"])\r\n\r\n\r\n$(document).ready(function(){\r\n    $(\".owl-carousel\").owlCarousel();\r\n});\r\n\r\n$('.owl-slider').owlCarousel({\r\n    items: 1,\r\n    loop: true,\r\n\r\n    nav: true,\r\n    smartSpeed: 900,\r\n    navText: [\r\n        \"<i class='fa fa-chevron-left'></i>\",\r\n        \"<i class='fa fa-chevron-right'></i>\"\r\n    ],\r\n\r\n    touchDrag: false,\r\n    mouseDrag: false,\r\n\r\n    autoplay:true,\r\n    autoplayTimeout: 5000,\r\n    autoplayHoverPause: true\r\n})\r\n\r\n$('.owl-items').owlCarousel({\r\n    loop  : true,\r\n    nav: true,\r\n    smartSpeed: 900,\r\n    navText: [\r\n        \"<i class='fa fa-chevron-left'></i>\",\r\n        \"<i class='fa fa-chevron-right'></i>\"\r\n    ],\r\n\r\n    responsive: {\r\n        0: {\r\n            items: 1,\r\n        },\r\n        500: {\r\n            items: 2,\r\n        },\r\n        750: {\r\n            items: 3,\r\n        },\r\n        980: {\r\n            items: 4,\r\n        }\r\n    }\r\n})\r\n// $( \".owl-prev\").html('<i class=\"fa fa-chevron-left\"></i>');\r\n// $( \".owl-next\").html('<i class=\"fa fa-chevron-right\"></i>');\r\n\r\n$('.owl-brands').owlCarousel({\r\n    loop  : true,\r\n    navText: [\r\n        \"<i class='fa fa-chevron-left'></i>\",\r\n        \"<i class='fa fa-chevron-right'></i>\"\r\n    ],\r\n    smartSpeed: 900,\r\n\r\n    responsive: {\r\n        750: {\r\n            items: 5,\r\n            nav: true,\r\n        },\r\n        980: {\r\n            items: 7,\r\n            nav: true,\r\n        },\r\n        1140: {\r\n            items: 9,\r\n            touchDrag: false,\r\n            mouseDrag: false\r\n        }\r\n    }\r\n})\r\n\r\n$('.owl-numbers').owlCarousel({\r\n    loop  : true,\r\n    navText: [\r\n        \"<i class='fa fa-chevron-left'></i>\",\r\n        \"<i class='fa fa-chevron-right'></i>\"\r\n    ],\r\n    smartSpeed: 900,\r\n\r\n    responsive: {\r\n        750: {\r\n            items: 4,\r\n            nav: true,\r\n\r\n        },\r\n        980: {\r\n            items: 6,\r\n            touchDrag: false,\r\n            mouseDrag: false\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: model, model2, model3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model2\", function() { return model2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model3\", function() { return model3; });\n/* harmony import */ var _classes_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/blocks */ \"./src/classes/blocks.js\");\n\r\n\r\nconst model = [\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'new-bg',\r\n        'new',\r\n        'NEW',\r\n        'new-triangle-bg',\r\n        'product1.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'new-bg',\r\n        'new',\r\n        'NEW',\r\n        'new-triangle-bg',\r\n        'product2.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'new-bg',\r\n        'new',\r\n        'NEW',\r\n        'new-triangle-bg',\r\n        'product3.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'new-bg',\r\n        'new',\r\n        'NEW',\r\n        'new-triangle-bg',\r\n        'product4.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'new-bg',\r\n        'new',\r\n        'NEW',\r\n        'new-triangle-bg',\r\n        'product1.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    )\r\n]\r\n\r\nconst model2 = [\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'thumb-bg',\r\n        'thumb',\r\n        '<i class=\"far fa-thumbs-up\"></i>',\r\n        'thumb-triangle-bg',\r\n        'product2.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'thumb-bg',\r\n        'thumb',\r\n        '<i class=\"far fa-thumbs-up\"></i>',\r\n        'thumb-triangle-bg',\r\n        'product3.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'thumb-bg',\r\n        'thumb',\r\n        '<i class=\"far fa-thumbs-up\"></i>',\r\n        'thumb-triangle-bg',\r\n        'product4.png',\r\n        '12 300 р. ',\r\n        ''\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'thumb-bg',\r\n        'thumb',\r\n        '<i class=\"far fa-thumbs-up\"></i>',\r\n        'thumb-triangle-bg',\r\n        'product1.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'thumb-bg',\r\n        'thumb',\r\n        '<i class=\"far fa-thumbs-up\"></i>',\r\n        'thumb-triangle-bg',\r\n        'product2.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    )\r\n]\r\n\r\nconst model3 = [\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'percent-bg',\r\n        'percent',\r\n        '%',\r\n        'percent-triangle-bg',\r\n        'product3.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'percent-bg',\r\n        'percent',\r\n        '%',\r\n        'percent-triangle-bg',\r\n        'product4.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'percent-bg',\r\n        'percent',\r\n        '%',\r\n        'percent-triangle-bg',\r\n        'product1.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'percent-bg',\r\n        'percent',\r\n        '%',\r\n        'percent-triangle-bg',\r\n        'product2.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    ),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_0__[\"CarouselItem\"] (\r\n        'percent-bg',\r\n        'percent',\r\n        '%',\r\n        'percent-triangle-bg',\r\n        'product3.png',\r\n        '12 300 р. ',\r\n        '15 500 р.'\r\n    )\r\n]\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ })

/******/ });