webpackJsonpac__name_([4],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildBarrelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`ChildBarrel` component loaded asynchronously');
var ChildBarrelComponent = (function () {
    function ChildBarrelComponent() {
    }
    ChildBarrelComponent.prototype.ngOnInit = function () {
        console.log('hello `ChildBarrel` component');
    };
    return ChildBarrelComponent;
}());
ChildBarrelComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'child-barrel',
        template: "\n    <h1>Hello from Child Barrel</h1>    \n  ",
    })
], ChildBarrelComponent);



/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildBarrelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_barrel_routes__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__child_barrel_component__ = __webpack_require__(625);







console.log('`ChildBarrel` bundle loaded asynchronously');
var ChildBarrelModule = (function () {
    function ChildBarrelModule() {
    }
    return ChildBarrelModule;
}());
ChildBarrelModule.routes = __WEBPACK_IMPORTED_MODULE_5__child_barrel_routes__["a" /* routes */];
ChildBarrelModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            /**
             * Components / Directives/ Pipes
             */
            __WEBPACK_IMPORTED_MODULE_6__child_barrel_component__["a" /* ChildBarrelComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__child_barrel_routes__["a" /* routes */]),
        ],
    })
], ChildBarrelModule);



/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__child_barrel_component__ = __webpack_require__(625);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__child_barrel_component__["a" /* ChildBarrelComponent */], pathMatch: 'full' },
];


/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__child_barrel_module__ = __webpack_require__(629);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ChildBarrelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__child_barrel_module__["a"]; });



/***/ })

});
//# sourceMappingURL=4.chunk.js.map