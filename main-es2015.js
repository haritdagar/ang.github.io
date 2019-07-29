(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div >\n <!-- <h1>\n    Welcome to {{ title }}!\n  </h1> \n  </div>\n  <app-ifelsecomp></app-ifelsecomp>\n  <h1>Switch Case</h1>\n  <app-switchdemo></app-switchdemo>\n  <h1>\n    Loops\n  </h1>\n  <app-loops></app-loops>\n  <app-stuform></app-stuform>\n<h1>Model Driven Form</h1>\n<app-empform></app-empform>\n<h1>model driven form group</h1>\n<app-frmgroup></app-frmgroup>\n-->\n\n\n<app-postsystem-practiceusingarray></app-postsystem-practiceusingarray>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"mainform\" >\n        <ng-content *ngIf='i==0; then p else e'></ng-content>\n        <ng-template #p>\n<form [formGroup]=\"myform\" (submit)=\"post()\">\n    <table cellspacing = \"10\" cellpadding=\"10\">\n        <tr>\n            <td class=\"formtext\">Post Title</td>\n        </tr>\n        <tr>\n            <td><input class=\"input\" type=\"text\" formControlName='title'></td>\n        </tr>\n        <tr>\n            <td class=\"formtext\">Post Content</td>\n        </tr>\n        <tr>\n            <td><textarea class=\"input\" formControlName='content' style=\"min-height: 100px\"></textarea></td>\n        </tr>\n        <tr>\n            \n            <td><button type=\"button\" (click)=\"post()\" class=\"button\">Submit</button></td>\n        </tr>\n        <tr>\n            <td><button type=\"button\" (click)=\"edit()\" class=\"button\" >Edit Post</button></td>\n        </tr>\n    </table>\n</form>\n</ng-template>\n<ng-template #e>\n        <form [formGroup]=\"myedit\" (submit)=\"editpost()\">\n                <table cellspacing = \"10\" cellpadding=\"10\">\n                        <tr>\n                                <td class=\"formtext\">Post Number</td>\n                            </tr>\n                            <tr>\n                                <td><input class=\"input\" type=\"text\" formControlName='index'></td>\n                            </tr>\n                    <tr>\n                        <td class=\"formtext\">Post Content</td>\n                    </tr>\n                    <tr>\n                        <td><textarea class=\"input\" formControlName='content' style=\"min-height: 100px\"></textarea></td>\n                    </tr>\n                    <tr>\n                        \n                        <td><button type=\"button\" (click)=\"editpost()\" class=\"button\">Submit</button></td>\n                        \n                    </tr>\n                    <tr>\n                            <td><button type=\"button\" (click)=\"edit()\" class=\"button\" >Add New Post</button></td>\n                    </tr>\n                </table>\n            </form>\n</ng-template>\n    </div>\n<ng-container *ngFor='let val of array; index as i ' >\n    <div class=\"innerbox\">\n    <div class=\"title\">Post # {{i+1}} : {{val.title}}</div>\n    <div class=\"content\">{{val.content}}</div>        \n    </div>\n</ng-container>\n\n</body>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myangular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _postsystem_practiceusingarray_postsystem_practiceusingarray_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postsystem-practiceusingarray/postsystem-practiceusingarray.component */ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _postsystem_practiceusingarray_postsystem_practiceusingarray_component__WEBPACK_IMPORTED_MODULE_7__["PostsystemPracticeusingarrayComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_6__["MyserviceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let MyserviceService = class MyserviceService {
    constructor() {
        this.name = "pala";
        this.myfrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.data = [];
    }
    submitform() {
        console.log(this.myfrm.value);
        this.data.push(this.myfrm.value);
        console.log(this.data);
    }
};
MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyserviceService);



/***/ }),

/***/ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title{\r\n    border-bottom: 1px solid black;\r\n    padding: 1px;\r\n    \r\n    background:white;\r\n    padding: 15px;\r\n    min-height: 40px;\r\n    font-size: 38px;\r\n    font-style: bold;\r\n    \r\n}\r\n.content{    \r\n    background: white;    \r\n    padding: 15px;\r\n    font-size: 20px;\r\n    min-height: 100px;\r\n    \r\n}\r\n.input{\r\n    width: 400px;\r\n    height: 30px;\r\n    -webkit-transition: width 0.5s;\r\n    transition: width 0.5s;\r\n}\r\n.input:hover{\r\n    box-shadow: 0px 3px 20px 0px rgba(67,67,209,1);\r\n   width: 420px;\r\n    \r\n}\r\n.mainform{\r\n    margin-top: 200px;\r\n    margin: auto;\r\n    border: 1px solid black;\r\n    background: white;\r\n    width: 29%;\r\n    padding: 20px;\r\n    height: 440px;\r\nbox-shadow: -1px 0px 26px -6px rgba(0,0,0,0.75);\r\n}\r\n.button{\r\n    width: 407px;\r\n    height: 30px;\r\n    -webkit-transition: width 0.5s,height 0.5s;\r\n    transition: width 0.5s,height 0.5s;\r\n    border: none;\r\n    \r\n}\r\n.innerbox{    \r\n    margin: auto;\r\n    background:whitesmoke;\r\n    padding: none;\r\n    margin-top: 50px;\r\n    width: 50%;\r\nbox-shadow: -1px 0px 26px -6px rgba(0,0,0,0.75);\r\n-webkit-transition: width 0.5s;\r\ntransition: width 0.5s;\r\n}\r\n.formtext{\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    color:#5b5b5b;\r\n}\r\n.button:hover{\r\n    width: 420px;\r\n    height: 40px;\r\n    background-color: #abb4ac;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHN5c3RlbS1wcmFjdGljZXVzaW5nYXJyYXkvcG9zdHN5c3RlbS1wcmFjdGljZXVzaW5nYXJyYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBc0I7SUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4Q0FBOEM7R0FDL0MsWUFBWTs7QUFFZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUdqQiwrQ0FBK0M7QUFDL0M7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQWtDO0lBQWxDLGtDQUFrQztJQUNsQyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFHZCwrQ0FBK0M7QUFDL0MsOEJBQXNCO0FBQXRCLHNCQUFzQjtBQUN0QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzeXN0ZW0tcHJhY3RpY2V1c2luZ2FycmF5L3Bvc3RzeXN0ZW0tcHJhY3RpY2V1c2luZ2FycmF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgXHJcbn1cclxuLmNvbnRlbnR7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7ICAgIFxyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbn1cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcclxufVxyXG4uaW5wdXQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMHB4IHJnYmEoNjcsNjcsMjA5LDEpO1xyXG4gICB3aWR0aDogNDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLm1haW5mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI5JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogLTFweCAwcHggMjZweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIHdpZHRoOiA0MDdweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsaGVpZ2h0IDAuNXM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uaW5uZXJib3h7ICAgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogLTFweCAwcHggMjZweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbnRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbn1cclxuXHJcbi5mb3JtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IzViNWI1YjtcclxufVxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjRhYztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostsystemPracticeusingarrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsystemPracticeusingarrayComponent", function() { return PostsystemPracticeusingarrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PostsystemPracticeusingarrayComponent = class PostsystemPracticeusingarrayComponent {
    constructor() {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.myedit = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            index: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.array = [];
        this.i = 0;
    }
    editpost() {
        this.array[this.myedit.value.index - 1].content = this.myedit.value.content;
    }
    post() {
        console.log(this.myform.value);
        this.array.push(this.myform.value);
        /* this.array[1] = this.myform.value;*/
        console.log("ARRAY" + this.array);
        // this.array[0].content="asshole";
        console.log(this.array[0].content);
    }
    edit() {
        if (this.i == 0) {
            this.i = 1;
        }
        else {
            this.i = 0;
        }
    }
    ngOnInit() {
    }
};
PostsystemPracticeusingarrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postsystem-practiceusingarray',
        template: __webpack_require__(/*! raw-loader!./postsystem-practiceusingarray.component.html */ "./node_modules/raw-loader/index.js!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html"),
        styles: [__webpack_require__(/*! ./postsystem-practiceusingarray.component.css */ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css")]
    })
], PostsystemPracticeusingarrayComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Harit\Desktop\node\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map