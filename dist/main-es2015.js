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

module.exports = "<div class=\"rxjs-chat\" [ngClass]=\"{'has-background-black': (isDark | async)}\">\n  <ng-container *ngIf=\"isLogin | async; else login\">\n    <div class=\"container\" >\n      <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\" [ngClass]=\"{'is-black': (isDark | async)}\">\n        <div class=\"navbar-brand\">\n          <p class=\"navbar-item\">\n            RXJS-CHAT\n          </p>\n\n          <a\n            (click)=\"toggleMenu()\"\n            role=\"button\"\n            class=\"navbar-burger burger\"\n            aria-label=\"menu\"\n            aria-expanded=\"false\"\n            data-target=\"navbarBasicExample\"\n          >\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n          </a>\n        </div>\n\n        <div\n          id=\"navbarBasicExample\"\n          class=\"navbar-menu\"\n          [ngClass]=\"{ 'is-active': activeMenu, 'is-black': isDark | async }\"\n        >\n          <div class=\"navbar-end\">\n            <div class=\"navbar-item\">\n              <div class=\"buttons\">\n                <a\n                  class=\"button is-primary\"\n                  routerLink=\"/chat\"\n                  routerLinkActive=\"active\"\n                >\n                  chat\n                  <span *ngIf=\"(count | async) != 0\" class=\"notifNotRead\">{{count | async}}</span>\n                </a>\n                <a\n                  class=\"button is-light\"\n                  routerLink=\"/settings\"\n                  routerLinkActive=\"active\"\n                >\n                  settings\n                </a>\n                <a class=\"button is-light\" (click)=\"disconnect()\">\n                  disconnect\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <section\n      class=\"hero is-light is-fullheight-with-navbar\"\n      [ngClass]=\"{ 'is-dark': isDark | async }\"\n    >\n      <div class=\"hero-body\">\n        <div class=\"container\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </section>\n  </ng-container>\n  <ng-template #login>\n    <section class=\"hero is-light is-fullheight\">\n      <div class=\"hero-body\">\n        <div class=\"container\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </section>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ol id=\"boxScroll\" class=\"boxMessages\" (scroll)=\"onScroll($event)\">\n    <ng-container *ngFor=\"let message of messages | async\">\n      <li\n        *ngIf=\"message?.description\"\n        [ngClass]=\"{ 'is-right': (usernameStore | async) === message.name }\"\n      >\n        <div class=\"meta\">\n          <small\n            ><ng-container *ngIf=\"(usernameStore | async) !== message.name\"\n              >{{ message.name }} - </ng-container\n            >{{ formatDateAMPM(message.date) | async }}\n            </small\n          >\n        </div>\n        <div\n          class=\"description\"\n          [ngClass]=\"{\n            'is-primary': (usernameStore | async) === message.name,\n            'is-black': isDark | async\n          }\"\n        >\n          <div [innerHTML]=\"message?.description | linkify\"></div>\n          <ng-container *ngIf=\"isEmbedVideo(message?.description)\">\n            <div [innerHTML]=\"embedVideo(message?.description)\"></div>\n          </ng-container>\n        </div>\n      </li>\n    </ng-container>\n  </ol>\n</div>\n<div class=\"barActionMessage\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column is-11\">\n        <div class=\"field has-addons\">\n          <div class=\"control\">\n            <emoji-mart (emojiClick)=\"addEmoji($event)\" [ngClass]=\"{'is-close': !openSmiley}\" [style]=\"{ position: 'absolute', bottom: '40px', left: '0px' }\"></emoji-mart>\n            <button class=\"button\" type=\"button\" (click)=\"toggleSmiley()\">\n              <i class=\"far fa-smile\"></i>\n            </button>\n          </div>\n          <div class=\"control is-expanded\" [ngClass]=\"{ 'is-loading': isLoading }\">\n            \n            <input\n              class=\"input\"\n              type=\"text\"\n              [formControl]=\"message\"\n              (keydown.enter)=\"sendMessage($event)\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"column is-1\">\n        <button class=\"button is-primary is-fullwidth\" (click)=\"sendMessage()\">\n          Send\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"ChatSignin\">\n    <h1 class=\"title\">RXJS-Chat</h1>\n    <div class=\"columns\">\n        <div class=\"column is-6\">\n        <div class=\"field\">\n            <label class=\"label\">Please enter your name</label>\n            <div class=\"control is-expanded has-icons-left\">\n            <input class=\"input is-medium\" type=\"text\" placeholder=\"Enter your name and hit ENTER\"  [formControl]=\"username\"/>\n            <span class=\"icon is-medium is-left\">\n                <i class=\"fas fa-user\"></i>\n            </span>\n            </div>\n            <p class=\"help is-danger\"></p>\n        </div>\n        <div class=\"field\">\n            <div class=\"control\">\n            <button class=\"button is-medium is-primary\" (click)=\"sendUsername()\">\n                Join chat\n            </button>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"settings\" [ngClass]=\"{'is-dark': (isDark | async)}\">\n  <div class=\"field\">\n    <label class=\"label\">Username</label>\n    <div class=\"control has-icons-left has-icons-right\">\n      <input\n        class=\"input\"\n        type=\"text\"\n        placeholder=\"Text input\"\n        formControlName=\"username\"\n      />\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <label class=\"label\">Interface Color</label>\n    <div class=\"control radioBox\">\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(false, 'themeDark') }\"\n      >\n        <input type=\"radio\" formControlName=\"themeDark\" [value]=\"false\" />\n        light\n      </label>\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(true, 'themeDark') }\"\n      >\n        <input type=\"radio\" formControlName=\"themeDark\" [value]=\"true\" />\n        dark\n      </label>\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <label class=\"label\">Clock Display</label>\n    <div class=\"control radioBox\">\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(false, 'clock12hour') }\"\n      >\n        <input type=\"radio\" formControlName=\"clock12hour\" [value]=\"false\" />\n        24 Hours\n      </label>\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(true, 'clock12hour') }\"\n      >\n        <input type=\"radio\" formControlName=\"clock12hour\" [value]=\"true\" />\n        12 Hours\n      </label>\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <label class=\"label\">Shorcut ( CTRL + ENTER )</label>\n    <div class=\"control radioBox\">\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(false, 'shortcutEnter') }\"\n      >\n        <input type=\"radio\" formControlName=\"shortcutEnter\" [value]=\"false\" />\n        No\n      </label>\n      <label\n        class=\"radio\"\n        [ngClass]=\"{ 'is-active': isActive(true, 'shortcutEnter') }\"\n      >\n        <input type=\"radio\" formControlName=\"shortcutEnter\" [value]=\"true\" />\n        Yes\n      </label>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouteList, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouteList", function() { return appRouteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _isExistName_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isExistName.guard */ "./src/app/isExistName.guard.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");







const appRouteList = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [
            _isExistName_guard__WEBPACK_IMPORTED_MODULE_5__["IsExistName"]
        ]
    },
    {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
        canActivate: [
            _isExistName_guard__WEBPACK_IMPORTED_MODULE_5__["IsExistName"]
        ]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
        canActivate: [
            _isExistName_guard__WEBPACK_IMPORTED_MODULE_5__["IsExistName"]
        ]
    },
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRouteList)
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar {\n  width: 100%;\n}\n\n.notifNotRead {\n  border-radius: 50%;\n  color: black;\n  background-color: white;\n  border: 1px solid gray;\n  width: 1.5em;\n  height: 1.5em;\n  font-size: 0.8em;\n  position: absolute;\n  right: -0.5em;\n  top: -0.5em;\n}\n\n.hero.is-fullheight-with-navbar .hero-body {\n  align-items: normal;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar-menu.is-active {\n    position: absolute;\n    width: 100%;\n  }\n\n  .navbar-menu.is-black {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29pc2xvbmdhdHRlL0RvY3VtZW50cy9wcm9qZWN0L3J4anMtY2hhdC9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDR0Y7O0VEREE7SUFDRSx5QkFBQTtJQUNBLFlBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2Lm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZOb3RSZWFke1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgZm9udC1zaXplOi44ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0uNWVtO1xuICB0b3A6IC0uNWVtO1xufVxuLmhlcm8uaXMtZnVsbGhlaWdodC13aXRoLW5hdmJhciAuaGVyby1ib2R5IHtcbiAgYWxpZ24taXRlbXM6IG5vcm1hbDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAubmF2YmFyLW1lbnUuaXMtYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5hdmJhci1tZW51LmlzLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwibmF2Lm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZOb3RSZWFkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0wLjVlbTtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi5oZXJvLmlzLWZ1bGxoZWlnaHQtd2l0aC1uYXZiYXIgLmhlcm8tYm9keSB7XG4gIGFsaWduLWl0ZW1zOiBub3JtYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAubmF2YmFyLW1lbnUuaXMtYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmF2YmFyLW1lbnUuaXMtYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59Il19 */"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/ngrx/selectors/chat.selector */ "./src/app/shared/ngrx/selectors/chat.selector.ts");
/* harmony import */ var _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/ngrx/actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AppComponent = class AppComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this._activeMenu = false;
        this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_4__["Start"]());
    }
    ngOnInit() { }
    get isLogin() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_3__["isLogin"]);
    }
    get activeMenu() {
        return this._activeMenu;
    }
    set activeMenu(value) {
        this._activeMenu = value;
    }
    get count() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_3__["count"]);
    }
    toggleMenu() {
        this.activeMenu = !this.activeMenu;
    }
    get isDark() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_3__["getConfig"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(config => config.themeDark));
    }
    disconnect() {
        this.store
            .select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_3__["getConfig"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(config => {
            this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_4__["UpdateConfig"](Object.assign({}, config, { username: "" })));
        });
        this.router.navigate(["/login"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-linkifyjs */ "./node_modules/ngx-linkifyjs/esm2015/ngx-linkifyjs.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _shared_ngrx_effects_chat_effect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/ngrx/effects/chat.effect */ "./src/app/shared/ngrx/effects/chat.effect.ts");
/* harmony import */ var _shared_ngrx_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/ngrx/reducers/chat.reducers */ "./src/app/shared/ngrx/reducers/chat.reducers.ts");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm2015/ctrl-ngx-emoji-mart.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                positionClass: "toast-top-center"
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ ChatReducer: _shared_ngrx_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_19__["ChatReducer"] }),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_shared_ngrx_effects_chat_effect__WEBPACK_IMPORTED_MODULE_18__["ChatEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production // Restrict extension to log-only mode
            }),
            ngx_linkifyjs__WEBPACK_IMPORTED_MODULE_10__["NgxLinkifyjsModule"].forRoot(),
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_20__["EmbedVideo"].forRoot(),
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_21__["PickerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxMessages {\n  /* Flexbox-specific styles */\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  /* General styling */\n  font: 16px/1.3 sans-serif;\n  height: calc(100vh - 220px);\n  list-style-type: none;\n  margin: 0 auto;\n  padding: 8px;\n  overflow: auto;\n  width: 100%;\n}\n\n/* Default styles for chat bubbles */\n\n.boxMessages li div {\n  margin: 8px;\n}\n\n.boxMessages li .meta {\n  font-size: 0.8em;\n}\n\n.boxMessages li .description {\n  background: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  margin: 5px 0;\n}\n\n.boxMessages li .description div a {\n  background: white;\n  color: black;\n}\n\n.boxMessages li .description.is-black {\n  background-color: black;\n  color: white;\n}\n\n.boxMessages li .description.is-primary {\n  color: white;\n  background: #9C0201;\n}\n\n/* Styles specific to our chat bubbles */\n\n.boxMessages li.ours {\n  align-self: flex-end;\n  /* Stick to the right side, please! */\n  margin: 2px 0 2px 8px;\n}\n\n.barActionMessage {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 24px;\n}\n\n.is-right {\n  align-self: flex-end;\n  text-align: right;\n}\n\nemoji-mart.is-close {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29pc2xvbmdhdHRlL0RvY3VtZW50cy9wcm9qZWN0L3J4anMtY2hhdC9jbGllbnQvc3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBSjs7QURLRSxvQ0FBQTs7QUFHRTtFQUNFLFdBQUE7QUNKTjs7QURNSTtFQUNFLGdCQUFBO0FDSk47O0FETUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSk47O0FES007RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNIUjs7QURPTTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0xSOztBRE9NO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDTFY7O0FEVUUsd0NBQUE7O0FBQ0E7RUFDRSxvQkFBQTtFQUFzQixxQ0FBQTtFQUN0QixxQkFBQTtBQ05KOztBRFNFO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNOTjs7QURTRTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUNOTjs7QURVSTtFQUNFLGFBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hNZXNzYWdlcyB7XG4gICAgLyogRmxleGJveC1zcGVjaWZpYyBzdHlsZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIFxuICAgIC8qIEdlbmVyYWwgc3R5bGluZyAqL1xuICAgIGZvbnQ6IDE2cHgvMS4zIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjIwcHgpO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBcbiAgfVxuICBcbiAgLyogRGVmYXVsdCBzdHlsZXMgZm9yIGNoYXQgYnViYmxlcyAqL1xuXG4gIC5ib3hNZXNzYWdlcyBsaSB7XG4gICAgZGl2e1xuICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuICAgIC5tZXRhe1xuICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOjhweCAxMnB4O1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIGRpdiBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAmLmlzLWJsYWNre1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgJi5pcy1wcmltYXJ5e1xuICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5QzAyMDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBTdHlsZXMgc3BlY2lmaWMgdG8gb3VyIGNoYXQgYnViYmxlcyAqL1xuICAuYm94TWVzc2FnZXMgbGkub3VycyB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IC8qIFN0aWNrIHRvIHRoZSByaWdodCBzaWRlLCBwbGVhc2UhICovXG4gICAgbWFyZ2luOiAycHggMCAycHggOHB4O1xuICB9XG5cbiAgLmJhckFjdGlvbk1lc3NhZ2V7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG5cbiAgLmlzLXJpZ2h0e1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIGVtb2ppLW1hcnR7XG4gICAgJi5pcy1jbG9zZXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4iLCIuYm94TWVzc2FnZXMge1xuICAvKiBGbGV4Ym94LXNwZWNpZmljIHN0eWxlcyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLyogR2VuZXJhbCBzdHlsaW5nICovXG4gIGZvbnQ6IDE2cHgvMS4zIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIyMHB4KTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIERlZmF1bHQgc3R5bGVzIGZvciBjaGF0IGJ1YmJsZXMgKi9cbi5ib3hNZXNzYWdlcyBsaSBkaXYge1xuICBtYXJnaW46IDhweDtcbn1cbi5ib3hNZXNzYWdlcyBsaSAubWV0YSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uYm94TWVzc2FnZXMgbGkgLmRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uYm94TWVzc2FnZXMgbGkgLmRlc2NyaXB0aW9uIGRpdiBhIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ib3hNZXNzYWdlcyBsaSAuZGVzY3JpcHRpb24uaXMtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJveE1lc3NhZ2VzIGxpIC5kZXNjcmlwdGlvbi5pcy1wcmltYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjOUMwMjAxO1xufVxuXG4vKiBTdHlsZXMgc3BlY2lmaWMgdG8gb3VyIGNoYXQgYnViYmxlcyAqL1xuLmJveE1lc3NhZ2VzIGxpLm91cnMge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgLyogU3RpY2sgdG8gdGhlIHJpZ2h0IHNpZGUsIHBsZWFzZSEgKi9cbiAgbWFyZ2luOiAycHggMCAycHggOHB4O1xufVxuXG4uYmFyQWN0aW9uTWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmlzLXJpZ2h0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5lbW9qaS1tYXJ0LmlzLWNsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ngrx/actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var _shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ngrx/selectors/chat.selector */ "./src/app/shared/ngrx/selectors/chat.selector.ts");










let ChatComponent = 
/**
 * A class representing a chat component
 * @class  ChatComponent
 */
class ChatComponent {
    constructor(store, action$, embedService) {
        this.store = store;
        this.action$ = action$;
        this.embedService = embedService;
        this.subscription = [];
        this.isLoading = false;
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.regexYoutube = new RegExp("^(https?://)?(www.)?(youtube.com|youtu.?be)/.+$");
        this.firstInitMessages = false;
        this.openSmiley = false;
    }
    ngOnInit() {
        this.boxScroll = document.getElementById("boxScroll");
        this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].ADD_MESSAGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => (this.isLoading = true)));
        this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].ADD_MESSAGE_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => (this.isLoading = false)));
    }
    onScroll($event) {
        this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__["UpdateMessage"]());
    }
    get messages() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["messages"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((messages) => {
            const completeForeach = () => {
                if (!this.firstInitMessages) {
                    setTimeout(() => {
                        this.boxScroll.scrollTop = this.boxScroll.scrollHeight;
                    });
                    this.firstInitMessages = !this.firstInitMessages;
                    this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__["UpdateMessage"]());
                }
            };
            messages.forEach((element, index, array) => {
                if ((index + 1) === messages.length) {
                    completeForeach();
                }
            });
        }));
    }
    sendMessage($event = null) {
        const send = () => {
            const usernameStoreSubscription = this.usernameStore.subscribe(name => {
                this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_8__["AddMessage"]({
                    name: name,
                    description: this.message.value
                }));
            });
            this.message.setValue("");
            this.subscription.push(usernameStoreSubscription);
        };
        if ($event != null) {
            const getConfigSubscription = this.store
                .select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["getConfig"])
                .subscribe(config => {
                if (config.shortcutEnter) {
                    send();
                }
            });
            this.subscription.push(getConfigSubscription);
        }
        else {
            send();
        }
    }
    addEmoji($event) {
        this.message.setValue(this.message.value + ' ' + $event.emoji.native);
    }
    get usernameStore() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["username"]);
    }
    get isDark() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["getConfig"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.themeDark));
    }
    get isShorcut() {
        return this.store
            .select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["getConfig"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => config.shortcutEnter));
    }
    isEmbedVideo(texte) {
        return this.regexYoutube.test(texte);
    }
    embedVideo(texte) {
        return this.embedService.embed(texte, { image: "thumbnail_medium" });
    }
    toggleSmiley() {
        this.openSmiley = !this.openSmiley;
    }
    formatDateAMPM(date) {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_9__["getConfig"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(config => {
            if (config.clock12hour) {
                return date_fns__WEBPACK_IMPORTED_MODULE_5__["format"](date, "hh:mm");
            }
            else {
                return date_fns__WEBPACK_IMPORTED_MODULE_5__["format"](date, "HH:mm");
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.forEach(subscription => subscription.unsubscribe());
    }
};
ChatComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideoService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-chat",
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
    })
    /**
     * A class representing a chat component
     * @class  ChatComponent
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
        ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideoService"]])
], ChatComponent);



/***/ }),

/***/ "./src/app/isExistName.guard.ts":
/*!**************************************!*\
  !*** ./src/app/isExistName.guard.ts ***!
  \**************************************/
/*! exports provided: IsExistName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsExistName", function() { return IsExistName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/ngrx/actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var _shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/ngrx/selectors/chat.selector */ "./src/app/shared/ngrx/selectors/chat.selector.ts");








let IsExistName = class IsExistName {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.store
                .select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_7__["isLoadConfig"])
                .subscribe(isLoad => {
                if (!isLoad) {
                    this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_6__["Load"]());
                }
            });
        }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_7__["isLogin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(isLogin => {
            if (isLogin) {
                if (state.url === "/login") {
                    this.router.navigate(["/chat"]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
                }
            }
            else {
                if (state.url === "/login") {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
                }
                else {
                    this.router.navigate(["/login"]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
                }
            }
        }));
    }
};
IsExistName.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsExistName = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IsExistName);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_ngrx_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ngrx/reducers/chat.reducers */ "./src/app/shared/ngrx/reducers/chat.reducers.ts");
/* harmony import */ var _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ngrx/actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ngrx/selectors/chat.selector */ "./src/app/shared/ngrx/selectors/chat.selector.ts");








let LoginComponent = 
/**
 * A class representing a Login component
 * @class  LoginComponent
 */
class LoginComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.subscription = [];
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    ngOnInit() {
        const selectConfig = this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_7__["getConfig"]).subscribe(config => {
            if (config.username != '') {
                this.router.navigate(['/']);
            }
        });
        this.subscription.push(selectConfig);
    }
    sendUsername() {
        if (this.username.valid) {
            const value = Object.assign({}, _shared_ngrx_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_4__["initialState"].config, { username: this.username.value });
            this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["UpdateConfig"](value));
            this.router.navigate(['/']);
        }
    }
    ngOnDestroy() {
        this.subscription.forEach(subscription => subscription.unsubscribe());
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
    /**
     * A class representing a Login component
     * @class  LoginComponent
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radioBox {\n  display: flex;\n}\n.radioBox label {\n  flex: 1;\n  padding: calc(0.375em - 1px) 2.25em;\n  border-radius: 4px;\n  box-shadow: inset 0 -1px 2px rgba(10, 10, 10, 0.1);\n  text-align: center;\n  background: white;\n}\n.radioBox label.is-active {\n  background: #9C0201;\n  color: white;\n}\n.radioBox input {\n  display: none;\n}\n.is-dark label {\n  color: white;\n}\n.is-dark .radioBox label {\n  color: black;\n}\n.is-dark .radioBox label.is-active {\n  background: #9C0201;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29pc2xvbmdhdHRlL0RvY3VtZW50cy9wcm9qZWN0L3J4anMtY2hhdC9jbGllbnQvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0daO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURHSTtFQUNJLFlBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvQm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGFiZWx7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoMC4zNzVlbSAtIDFweCkgMi4yNWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAmLmlzLWFjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5QzAyMDE7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uaXMtZGFya3tcbiAgICBsYWJlbHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAucmFkaW9Cb3ggbGFiZWx7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgJi5pcy1hY3RpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOUMwMjAxO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIucmFkaW9Cb3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJhZGlvQm94IGxhYmVsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogY2FsYygwLjM3NWVtIC0gMXB4KSAyLjI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDJweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucmFkaW9Cb3ggbGFiZWwuaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzlDMDIwMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJhZGlvQm94IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlzLWRhcmsgbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG4uaXMtZGFyayAucmFkaW9Cb3ggbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG4uaXMtZGFyayAucmFkaW9Cb3ggbGFiZWwuaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzlDMDIwMTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ngrx/selectors/chat.selector */ "./src/app/shared/ngrx/selectors/chat.selector.ts");
/* harmony import */ var _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ngrx/actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let SettingsComponent = 
/**
 * A class representing a Setting component
 * @class  SettingsComponent
 */
class SettingsComponent {
    constructor(store) {
        this.store = store;
        this.subscription = [];
        this.settings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { updateOn: "blur", validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required }),
            themeDark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            clock12hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            shortcutEnter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    }
    ngOnInit() {
        const getConfigSubscription = this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_4__["getConfig"]).subscribe((config) => {
            this.settings.setValue(config, { emitEvent: false });
        });
        const settingsChangeSubscription = this.settings.valueChanges.subscribe((value) => {
            const configState = {
                username: value.username,
                themeDark: value.themeDark,
                clock12hour: value.clock12hour,
                shortcutEnter: value.shortcutEnter
            };
            this.store.dispatch(new _shared_ngrx_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["UpdateConfig"](configState));
        });
        this.subscription.push(getConfigSubscription, settingsChangeSubscription);
    }
    isActive(value, nameFormControl) {
        return this.settings.get(nameFormControl).value == value;
    }
    get isDark() {
        return this.store.select(_shared_ngrx_selectors_chat_selector__WEBPACK_IMPORTED_MODULE_4__["getConfig"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(config => config.themeDark));
    }
    ngOnDestroy() {
        this.subscription.forEach(subscription => subscription.unsubscribe());
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
    })
    /**
     * A class representing a Setting component
     * @class  SettingsComponent
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/shared/ngrx/actions/chat.action.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/ngrx/actions/chat.action.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes, Start, StartSuccess, Load, LoadSuccess, AddMessage, AddMessageSuccess, UpdateMessage, UpdateConfig, UpdateConfigSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Start", function() { return Start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartSuccess", function() { return StartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessage", function() { return AddMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageSuccess", function() { return AddMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMessage", function() { return UpdateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConfig", function() { return UpdateConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConfigSuccess", function() { return UpdateConfigSuccess; });
/**
 * All the constants to define our actions
 */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["START_APP"] = "START_APP";
    ActionTypes["START_APP_SUCCESS"] = "START_APP_SUCCESS";
    ActionTypes["LOAD_CONFIG"] = "LOAD_CONFIG";
    ActionTypes["LOAD_CONFIG_SUCCESS"] = "LOAD_CONFIG_SUCCESS";
    ActionTypes["ADD_MESSAGE"] = "ADD_MESSAGE";
    ActionTypes["ADD_MESSAGE_SUCCESS"] = "ADD_MESSAGE_SUCCESS";
    ActionTypes["UPDATE_MESSAGE"] = "UPDATE_MESSAGE";
    ActionTypes["UPDATE_CONFIG"] = "UPDATE_CONFIG";
    ActionTypes["UPDATE_CONFIG_SUCCESS"] = "UPDATE_CONFIG_SUCCESS";
})(ActionTypes || (ActionTypes = {}));
/**
 * Implementation of all actions that we are handle
 */
/**
 * A class - Action Start
 * @class  Start
 */
class Start {
    /**
     * Create a Action Start.
     */
    constructor() {
        this.type = ActionTypes.START_APP;
    }
}
/**
 * A class - Action StartSuccess
 * @class  StartSuccess
 */
class StartSuccess {
    /**
     * Create a Action Start.
     * @param {messages} Message[] - The Array of Message.
     */
    constructor(messages) {
        this.messages = messages;
        this.type = ActionTypes.START_APP_SUCCESS;
    }
}
StartSuccess.ctorParameters = () => [
    { type: Array }
];
/**
 * A class - Action Load
 * @class  Load
 */
class Load {
    /**
     * Create a Action Load.
     */
    constructor() {
        this.type = ActionTypes.LOAD_CONFIG;
    }
}
class LoadSuccess {
    constructor(state) {
        this.state = state;
        this.type = ActionTypes.LOAD_CONFIG_SUCCESS;
    }
}
LoadSuccess.ctorParameters = () => [
    { type: undefined }
];
class AddMessage {
    constructor(message) {
        this.message = message;
        this.type = ActionTypes.ADD_MESSAGE;
    }
}
AddMessage.ctorParameters = () => [
    { type: undefined }
];
class AddMessageSuccess {
    constructor(message) {
        this.message = message;
        this.type = ActionTypes.ADD_MESSAGE_SUCCESS;
    }
}
AddMessageSuccess.ctorParameters = () => [
    { type: undefined }
];
class UpdateMessage {
    constructor() {
        this.type = ActionTypes.UPDATE_MESSAGE;
    }
}
class UpdateConfig {
    constructor(config) {
        this.config = config;
        this.type = ActionTypes.UPDATE_CONFIG;
    }
}
UpdateConfig.ctorParameters = () => [
    { type: undefined }
];
class UpdateConfigSuccess {
    constructor(config) {
        this.config = config;
        this.type = ActionTypes.UPDATE_CONFIG_SUCCESS;
    }
}
UpdateConfigSuccess.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/ngrx/effects/chat.effect.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/ngrx/effects/chat.effect.ts ***!
  \****************************************************/
/*! exports provided: ChatEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEffects", function() { return ChatEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");
/* harmony import */ var _reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/chat.reducers */ "./src/app/shared/ngrx/reducers/chat.reducers.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_sessionstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sessionstorage.service */ "./src/app/shared/services/sessionstorage.service.ts");
/* harmony import */ var _services_app_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.chat.service */ "./src/app/shared/services/app.chat.service.ts");










let ChatEffects = class ChatEffects {
    constructor(lsStorage, toastr, actions, chatService) {
        this.lsStorage = lsStorage;
        this.toastr = toastr;
        this.actions = actions;
        this.chatService = chatService;
        this.$start = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].START_APP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.chatService.getAllMessage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((messages) => {
            return new _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["StartSuccess"](messages);
        }));
        this.$LoadConfig = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LOAD_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(messages => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.lsStorage.getConfig())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((lsConfig) => {
            if (lsConfig) {
                return new _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["LoadSuccess"](lsConfig);
            }
            else {
                this.lsStorage.setConfig(_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_6__["initialState"].config);
                return new _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["LoadSuccess"](_reducers_chat_reducers__WEBPACK_IMPORTED_MODULE_6__["initialState"].config);
            }
        }));
        this.$addMessage = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_MESSAGE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            this.chatService.sendMessage(data.message);
        }));
        this.$receiveMessage = this.chatService.getNewMessage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return new _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["AddMessageSuccess"](data);
        }));
        this.$config = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE_CONFIG), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => {
            let configChange = [];
            const getConfig = this.lsStorage.getConfig();
            const newConfig = Object.assign({}, getConfig, action.config);
            this.lsStorage.setConfig(newConfig);
            for (var property in getConfig) {
                if (getConfig[property] != newConfig[property]) {
                    configChange.push(property);
                }
            }
            const toastrMessange = () => {
                this.toastr.success(`Success Change`, `Update Settings - ${configChange.join(",")}`, { timeOut: 3000 });
            };
            if (configChange[0] === 'username' && newConfig.username != "") {
                toastrMessange();
            }
            else if (configChange[0] !== 'username') {
                toastrMessange();
            }
            return new _actions_chat_action__WEBPACK_IMPORTED_MODULE_5__["UpdateConfigSuccess"](newConfig);
        }));
    }
};
ChatEffects.ctorParameters = () => [
    { type: _services_sessionstorage_service__WEBPACK_IMPORTED_MODULE_8__["SessionstorageService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_app_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatEffects.prototype, "$start", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatEffects.prototype, "$LoadConfig", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatEffects.prototype, "$addMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatEffects.prototype, "$receiveMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatEffects.prototype, "$config", void 0);
ChatEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sessionstorage_service__WEBPACK_IMPORTED_MODULE_8__["SessionstorageService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _services_app_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]])
], ChatEffects);



/***/ }),

/***/ "./src/app/shared/ngrx/reducers/chat.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ngrx/reducers/chat.reducers.ts ***!
  \*******************************************************/
/*! exports provided: initialState, ChatReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReducer", function() { return ChatReducer; });
/* harmony import */ var _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chat.action */ "./src/app/shared/ngrx/actions/chat.action.ts");

const initialState = {
    isLoadConfig: false,
    config: {
        username: "",
        themeDark: false,
        clock12hour: false,
        shortcutEnter: false
    },
    messages: [],
    countNotRead: 0
};
function ChatReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOAD_CONFIG_SUCCESS:
            return Object.assign({}, state, { config: action.state, isLoadConfig: true });
        case _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].START_APP_SUCCESS:
            return Object.assign({}, state, { messages: action.messages.map(message => {
                    message.read = false;
                    return message;
                }) });
        case _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ADD_MESSAGE_SUCCESS:
            action.message.read = false;
            return Object.assign({}, state, { messages: [...state.messages, action.message], countNotRead: [...state.messages, action.message].filter(message => message.read === false).length });
        case _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_MESSAGE:
            const newStates = state.messages.map(message => {
                message.read = true;
                return message;
            });
            return Object.assign({}, state, { messages: newStates, countNotRead: newStates.filter(message => message.read == false).length });
        case _actions_chat_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].UPDATE_CONFIG_SUCCESS:
            return Object.assign({}, state, { config: action.config });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/ngrx/selectors/chat.selector.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/ngrx/selectors/chat.selector.ts ***!
  \********************************************************/
/*! exports provided: getChatState, getConfig, isLogin, isLoadConfig, username, messages, count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChatState", function() { return getChatState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLogin", function() { return isLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadConfig", function() { return isLoadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "username", function() { return username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getChatState = state => state.ChatReducer;
const getConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.config ? state.config : null);
const isLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.config && state.config.username && state.config.username != "" ? true : false);
const isLoadConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.isLoadConfig);
const username = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.config && state.config.username ? state.config.username : undefined);
const messages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.messages ? state.messages : []);
const count = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChatState, state => state && state.countNotRead ? state.countNotRead : 0);


/***/ }),

/***/ "./src/app/shared/services/app.chat.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app.chat.service.ts ***!
  \*****************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





let ChatService = class ChatService {
    constructor() {
        this.url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].urlServer;
        this._socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    get socket() {
        return this._socket;
    }
    sendMessage(message) {
        this.socket.emit('message', message);
    }
    getNewMessage() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.socket.on('message', (message) => {
                observer.next(message);
            });
        });
    }
    getAllMessage() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            this.socket.on('messages', (messages) => {
                observer.next(messages);
            });
        });
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatService);



/***/ }),

/***/ "./src/app/shared/services/sessionstorage.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sessionstorage.service.ts ***!
  \***********************************************************/
/*! exports provided: SessionstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionstorageService", function() { return SessionstorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



let SessionstorageService = class SessionstorageService {
    constructor() {
    }
    getConfig() {
        return JSON.parse(sessionStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nLocalstorage));
    }
    setConfig(newConfig) {
        sessionStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nLocalstorage, JSON.stringify(newConfig));
    }
};
SessionstorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SessionstorageService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    nLocalstorage: 'ngrx-chat_chat_config',
    urlServer: 'http://localhost:3000'
};


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
    production: false,
    nLocalstorage: 'ngrx-chat_chat_config',
    urlServer: 'http://localhost:3000'
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

module.exports = __webpack_require__(/*! /Users/francoislongatte/Documents/project/rxjs-chat/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map