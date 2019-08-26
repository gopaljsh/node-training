(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/page-not-found.component */ "./src/app/pagenotfound/page-not-found.component.ts");








var routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'todo', component: _post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '**', component: _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper {\n  padding: 50px;\n  background: #fff;\n  min-height: 100vh;\n  position: relative;\n  transition: all 0.5s ease;\n}\n\n@media screen and (max-width: 768px) {\n  .content-wrapper {\n    margin-left: 0;\n    margin-top: 50px;\n    padding-bottom: 85px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtHQUN0QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODVweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-post-create></app-post-create>\n<div class=\"content-wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent.prototype.listenEvent = function (data) {
        this.menuOpen = data;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-bootstrap.module */ "./src/app/ngx-bootstrap.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _post_post_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.module */ "./src/app/post/post.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagenotfound/page-not-found.component */ "./src/app/pagenotfound/page-not-found.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _pagenotfound_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _post_post_module__WEBPACK_IMPORTED_MODULE_12__["PostModule"],
                _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getStatus();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceComponent", function() { return AuthServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user/';
var AuthServiceComponent = /** @class */ (function () {
    function AuthServiceComponent(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authServiceListner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthServiceComponent.prototype.getToken = function () {
        return this.token;
    };
    AuthServiceComponent.prototype.getStatus = function () {
        return this.isAuthenticated;
    };
    AuthServiceComponent.prototype.getUserId = function () {
        return this.userId;
    };
    AuthServiceComponent.prototype.getUserFlag = function () {
        return localStorage.getItem('userFlag');
    };
    AuthServiceComponent.prototype.getAuthStatus = function () {
        return this.authServiceListner.asObservable();
    };
    AuthServiceComponent.prototype.createUser = function (email, password) {
        var authData = {
            email: email,
            password: password
        };
        this.http.post(BACKEND_URL + 'signup', authData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthServiceComponent.prototype.loginUser = function (email, password) {
        var _this = this;
        var authData = {
            email: email,
            password: password
        };
        this.http.post(BACKEND_URL + 'login', authData)
            .subscribe(function (response) {
            console.log(response);
            var token = response.token;
            _this.token = token;
            if (token) {
                var expirationIn = response.expirationIn;
                _this.tokenTimer = setTimeout(function () {
                    _this.logoutUser();
                }, expirationIn * 1000);
                _this.userId = response.userId;
                _this.userFlag = response.roleFlag;
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expirationIn * 1000);
                _this.saveAuthData(token, expirationDate, _this.userId, _this.userFlag);
                _this.isAuthenticated = true;
                _this.authServiceListner.next(true);
                _this.router.navigate(['/todo']);
            }
        });
    };
    AuthServiceComponent.prototype.logoutUser = function () {
        this.token = null;
        this.isAuthenticated = false;
        clearTimeout(this.tokenTimer);
        this.authServiceListner.next(false);
        this.userId = null;
        this.clearAuthData();
        this.router.navigate(['/']);
    };
    AuthServiceComponent.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authServiceListner.next(true);
        }
    };
    AuthServiceComponent.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.logoutTimer = setTimeout(function () {
            _this.logoutUser();
        }, duration * 1000);
    };
    AuthServiceComponent.prototype.saveAuthData = function (token, expirationDate, userId, userFlag) {
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('userFlag', userFlag);
    };
    AuthServiceComponent.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFlag');
    };
    AuthServiceComponent.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expirationDate');
        var userId = localStorage.getItem('userId');
        var userFlag = localStorage.getItem('userFlag');
        if (!token && !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            userFlag: userFlag
        };
    };
    AuthServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthServiceComponent);
    return AuthServiceComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\n<div class=\"container mt-5\" *ngIf=\"!isLoading\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n              <h5 class=\"card-title\">User login</h5>\n              <p class=\"card-text\"><input type=\"email\" name=\"email\" ngModel #emailInput=\"ngModel\" class=\"form-control\" placeholder=\"Email\" required email /></p>\n              <p class=\"card-text\"><input type=\"password\" name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"form-control\" placeholder=\"Password\" required /></p>\n              <button type=\"submit\" class=\"card-link btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.loginUser(form.value.email, form.value.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span>\n<div class=\"container mt-5\" *ngIf=\"!isLoading\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\">\n              <h5 class=\"card-title\">User login</h5>\n              <p class=\"card-text\"><input type=\"email\" name=\"email\" ngModel #emailInput=\"ngModel\" class=\"form-control\" placeholder=\"Email\" required email /></p>\n              <p class=\"card-text\"><input type=\"password\" name=\"password\" ngModel #passwordInput=\"ngModel\" class=\"form-control\" placeholder=\"Password\" required /></p>\n              <button type=\"submit\" class=\"card-link\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignUpComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");







var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, modalService) {
        this.authService = authService;
        this.modalService = modalService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorMsg = 'A unknown error occured';
            if (error) {
                errorMsg = error.error.message;
            }
            var initialState = {
                list: [
                    errorMsg
                ]
            };
            _this.bsModalRef = _this.modalService.show(_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], { initialState: initialState });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceComponent"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-list {\n  padding-left: 0;\n  list-style-type: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <ul *ngIf=\"list.length\" class=\"message-list\">\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.title = 'Error';
        this.list = [];
    }
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-nav {\n    background: #e6e7e7;\n    width: 100%;\n    top: 0;\n    height: auto;\n    box-shadow: -4px 0 3px rgba(0,0,0,0.5);\n    z-index: 1;\n    transition: all 0.3s ease;\n}\n\n.main-nav ul {\n    list-style-type: none;\n}\n\n.main-nav ul li {\n    display: inline-block;\n}\n\n.main-nav ul li:last-child {\n    display: none;\n}\n\n.main-nav ul li a {\n    display: block;\n    text-align: center;\n    color: #93989c;\n    font-size: 13px;\n    cursor: pointer;\n}\n\n.main-nav ul li a.active {\n    color: black;\n}\n\n.main-nav ul li a:hover {\n    color: #515050;\n    text-decoration: none;\n}\n\n.main-nav ul li a .nav-icon {\n    display: block;\n    font-size: 25px;\n\n}\n\n@media screen and (max-width:768px) {\n    .main-nav {\n        left: 0;\n        width: 100%;\n        top: auto;\n        height: auto;\n        bottom: 0;\n    }\n    .main-nav > ul {\n        padding: 10px 0;\n        margin-bottom: 0;\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-around;\n    }\n    .main-nav > ul > li {\n        margin-bottom: 0;\n    }\n\n    .main-nav > ul > li:last-child {\n        display: block;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsWUFBWTtRQUNaLFVBQVU7UUFDVixhQUFhO1FBQ2IsVUFBVTtLQUNiO0lBQ0Q7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsOEJBQThCO0tBQ2pDO0lBQ0Q7UUFDSSxpQkFBaUI7S0FDcEI7O0lBRUQ7UUFDSSxlQUFlO0tBQ2xCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1uYXYge1xuICAgIGJhY2tncm91bmQ6ICNlNmU3ZTc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAtNHB4IDAgM3B4IHJnYmEoMCwwLDAsMC41KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5tYWluLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubWFpbi1uYXYgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1haW4tbmF2IHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYWluLW5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5Mzk4OWM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4tbmF2IHVsIGxpIGEuYWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWluLW5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzUxNTA1MDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYWluLW5hdiB1bCBsaSBhIC5uYXYtaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAubWFpbi1uYXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgLm1haW4tbmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC5tYWluLW5hdiA+IHVsID4gbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5tYWluLW5hdiA+IHVsID4gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- As a link -->\n<!-- <nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">MyMessages</a>\n  <div class=\"mr-right\">\n    <a class=\"navbar-item\" routerLink=\"/\" routerLinkActive=\"active\" *ngIf=\"userisAuthenticated\">List</a> &nbsp;\n    <a class=\"navbar-item\" routerLink=\"/create\" routerLinkActive=\"active\" *ngIf=\"userisAuthenticated\">Create</a> &nbsp;\n    <a class=\"navbar-item\" routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!userisAuthenticated\">Login</a> &nbsp;\n    <a class=\"navbar-item\" routerLink=\"/signup\" routerLinkActive=\"active\" *ngIf=\"!userisAuthenticated\">Signup</a>\n    <button class=\"navbar-item\" (click)=\"onLogout()\" *ngIf=\"userisAuthenticated\">Logout</button>\n  </div>\n</nav> -->\n<div *ngIf=\"userisAuthenticated\">\n<div class=\"container-fluid main-nav\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-right\">\n      <div class=\"btn btn-dark btn-sm my-1\" (click)=\"onLogout()\"><i class=\"fas fa-sign-in-alt\"></i></div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userisAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userisAuthenticated = this.authService.getStatus();
        this.userAuthSubscription = this.authService.getAuthStatus()
            .subscribe(function (isAuthenticated) {
            _this.userisAuthenticated = isAuthenticated;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userAuthSubscription.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceComponent"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ngx-bootstrap.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ngx-bootstrap.module.ts ***!
  \*****************************************/
/*! exports provided: NgxBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var NgxBootstrapModule = /** @class */ (function () {
    function NgxBootstrapModule() {
    }
    NgxBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
            ]
        })
    ], NgxBootstrapModule);
    return NgxBootstrapModule;
}());



/***/ }),

/***/ "./src/app/pagenotfound/page-not-found.component.html":
/*!************************************************************!*\
  !*** ./src/app/pagenotfound/page-not-found.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h1>Page not found</h1>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pagenotfound/page-not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/page-not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pagenotfound/page-not-found.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/post/post-create/post-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ImageHiddenInput {\n  visibility: hidden;\n}\n.image-preview {\n  width: 100%;\n  display: block;\n}\n.image-preview > img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkltYWdlSGlkZGVuSW5wdXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW1hZ2UtcHJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbWFnZS1wcmV2aWV3ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span> -->\n<div class=\"container mt-4\" *ngIf=\"userisAuthenticated\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <form (submit)=\"onAddPost()\" [formGroup]=\"form\" class=\"row\">\n            <div class=\"col-sm-10\">\n              <p class=\"card-text\"><input type=\"text\" class=\"form-control\" formControlName=\"task\" placeholder=\"Write your task\" /></p>\n            </div>\n            <div class=\"col-sm-2\">\n              <button type=\"submit\" class=\"btn btn-info card-link\" [disabled]=\"form.invalid\">Save task</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post-create/post-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/post-create/post-create.component.ts ***!
  \***********************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post/post.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");






var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postService, route, authService) {
        this.postService = postService;
        this.route = route;
        this.authService = authService;
        this.userisAuthenticated = false;
        this.isLoading = false;
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'task': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)] }),
        });
        this.userisAuthenticated = this.authService.getStatus();
        this.userAuthSubscription = this.authService.getAuthStatus()
            .subscribe(function (isAuthenticated) {
            _this.userisAuthenticated = isAuthenticated;
        });
        // this.route.paramMap.subscribe((paramMap: ParamMap) => {
        //   if (paramMap.has('postId')) {
        //     this.mode = 'edit';
        //     this.postId = paramMap.get('postId');
        //     this.isLoading = true;
        //     this.postService.getPost(this.postId)
        //       .subscribe((postData) => {
        //         this.isLoading = false;
        //         this.post = {
        //           id: postData._id,
        //           task: postData.title,
        //           creator: postData.creator
        //         };
        //         this.form.setValue({
        //           'task': this.post.task,
        //         });
        //       });
        //   } else {
        //     this.mode = 'create';
        //     this.postId = null;
        //   }
        // });
    };
    PostCreateComponent.prototype.onAddPost = function () {
        this.isLoading = true;
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value.task);
        this.postService.addPost(this.form.value.task);
        this.form.reset();
    };
    PostCreateComponent.prototype.ngOnDestroy = function () {
        this.userAuthSubscription.unsubscribe();
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/post/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/post/post-create/post-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostServiceComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceComponent"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/post/post-list/post-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  background: #333;\n  color: white\n}\n\n.custom-card .card-body{\n  padding: .5rem;\n}\n\n.custom-card h6 {\n  margin-bottom:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZVxufVxuXG4uY3VzdG9tLWNhcmQgLmNhcmQtYm9keXtcbiAgcGFkZGluZzogLjVyZW07XG59XG5cbi5jdXN0b20tY2FyZCBoNiB7XG4gIG1hcmdpbi1ib3R0b206MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post/post-list/post-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span class=\"spinner\" *ngIf=\"isLoading\"><img src=\"../assets/images/35.gif\" /></span> -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 mt-3\" *ngFor=\"let post of posts\">\n      <div class=\"card custom-card\">\n        <div class=\"card-body d-flex justify-content-between align-items-center\">\n          <h6 class=\"card-title\">{{ post.task }}</h6>\n          <!-- <a class=\"btn btn-primary\" [routerLink]=\"['/edit', post.id]\" *ngIf=\"userIsAuthenticated && userId === post.creator\">Edit</a>&nbsp;-->\n          <button class=\"btn btn-danger btn-sm\" (click)=\"onDelete(post.id)\"><i class=\"far fa-trash-alt\"></i></button> \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post-list/post-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/post-list/post-list.component.ts ***!
  \*******************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post/post.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var PostListComponent = /** @class */ (function () {
    function PostListComponent(PostService, authService) {
        this.PostService = PostService;
        this.authService = authService;
        this.posts = [];
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        this.userFlag = this.authService.getUserFlag();
        this.PostService.getPosts();
        this.postsSub = this.PostService.getPostUpdateListener()
            .subscribe(function (postData) {
            if (_this.userFlag == "true") {
                _this.posts = postData.posts;
            }
            else {
                _this.posts = postData.posts.filter(function (p) { return p.creator == _this.userId; });
            }
            //this.isLoading = false;
        });
        this.userIsAuthenticated = this.authService.getStatus();
        this.authStatusSub = this.authService.getAuthStatus()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.PostService.deletePost(postId)
            .subscribe(function () {
            _this.PostService.getPosts();
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/post/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/post/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostServiceComponent"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceComponent"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-create/post-create.component */ "./src/app/post/post-create/post-create.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post/post-list/post-list.component.ts");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ngx-bootstrap.module */ "./src/app/ngx-bootstrap.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");









var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"]
            ],
            exports: [
                _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_7__["NgxBootstrapModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"]
            ]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "./src/app/post/post.service.ts":
/*!**************************************!*\
  !*** ./src/app/post/post.service.ts ***!
  \**************************************/
/*! exports provided: PostServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServiceComponent", function() { return PostServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/posts/';
var PostServiceComponent = /** @class */ (function () {
    function PostServiceComponent(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PostServiceComponent.prototype.getPosts = function () {
        var _this = this;
        this.http.get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return { posts: postData.posts.map(function (post) {
                    return {
                        task: post.task,
                        id: post._id,
                        creator: post.creator
                    };
                }) };
        }))
            .subscribe(function (transformedData) {
            _this.posts = transformedData.posts;
            _this.postUpdated.next({ posts: _this.posts.slice() });
        });
    };
    PostServiceComponent.prototype.getPostUpdateListener = function () {
        return this.postUpdated.asObservable();
    };
    PostServiceComponent.prototype.getPost = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    PostServiceComponent.prototype.addPost = function (task) {
        var _this = this;
        var postData = {
            'task': task,
        };
        this.http.post(BACKEND_URL, postData)
            .subscribe(function (response) {
            _this.getPosts();
        });
    };
    PostServiceComponent.prototype.updatedPost = function (id, task) {
        var _this = this;
        var postData;
        postData = {
            id: id,
            task: task,
            creator: null
        };
        this.http.put(BACKEND_URL + id, postData)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
        });
    };
    PostServiceComponent.prototype.deletePost = function (postId) {
        return this.http.delete(BACKEND_URL + postId);
    };
    PostServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PostServiceComponent);
    return PostServiceComponent;
}());



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
var environment = {
    production: false,
    apiUrl: 'http://to-do.herokuapp.com/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularjs\angular-practice\node-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map