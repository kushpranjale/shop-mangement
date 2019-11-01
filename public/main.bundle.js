webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>hello</mat-card>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_your_staff_your_staff_component__ = __webpack_require__("./src/app/staff/your-staff/your-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_staff_information_staff_information_component__ = __webpack_require__("./src/app/staff/staff-information/staff-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_staff_salary_staff_salary_component__ = __webpack_require__("./src/app/staff/staff-salary/staff-salary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_add_staff_add_staff_component__ = __webpack_require__("./src/app/staff/add-staff/add-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_login_page_login_page_component__ = __webpack_require__("./src/app/auth/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_nav_side_nav_component__ = __webpack_require__("./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_signup_page_signup_page_component__ = __webpack_require__("./src/app/auth/signup-page/signup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stock_your_stock_your_stock_component__ = __webpack_require__("./src/app/stock/your-stock/your-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_category_category_component__ = __webpack_require__("./src/app/stock/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stock_add_stock_add_stock_component__ = __webpack_require__("./src/app/stock/add-stock/add-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__auth_login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_8__auth_signup_page_signup_page_component__["a" /* SignupPageComponent */]
    },
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_13__about_us_about_us_component__["a" /* AboutUsComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_7__side_nav_side_nav_component__["a" /* SideNavComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            },
            {
                path: 'yourstaff',
                component: __WEBPACK_IMPORTED_MODULE_2__staff_your_staff_your_staff_component__["a" /* YourStaffComponent */],
            },
            {
                path: 'staff-information',
                component: __WEBPACK_IMPORTED_MODULE_3__staff_staff_information_staff_information_component__["a" /* StaffInformationComponent */]
            },
            {
                path: 'staff-salary',
                component: __WEBPACK_IMPORTED_MODULE_4__staff_staff_salary_staff_salary_component__["a" /* StaffSalaryComponent */]
            },
            {
                path: 'add-staff',
                component: __WEBPACK_IMPORTED_MODULE_5__staff_add_staff_add_staff_component__["a" /* AddStaffComponent */]
            },
            {
                path: 'add-staff/:staffId',
                component: __WEBPACK_IMPORTED_MODULE_5__staff_add_staff_add_staff_component__["a" /* AddStaffComponent */],
            },
            {
                path: 'yourStock',
                component: __WEBPACK_IMPORTED_MODULE_10__stock_your_stock_your_stock_component__["a" /* YourStockComponent */],
            },
            {
                path: 'yourCategory',
                component: __WEBPACK_IMPORTED_MODULE_11__stock_category_category_component__["a" /* CategoryComponent */],
            },
            {
                path: 'addStock',
                component: __WEBPACK_IMPORTED_MODULE_12__stock_add_stock_add_stock_component__["a" /* AddStockComponent */],
            },
            {
                path: 'addStock/:stockId',
                component: __WEBPACK_IMPORTED_MODULE_12__stock_add_stock_add_stock_component__["a" /* AddStockComponent */],
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_nav_side_nav_component__ = __webpack_require__("./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tool_bar_tool_bar_component__ = __webpack_require__("./src/app/tool-bar/tool-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_angular_material_module__ = __webpack_require__("./src/app/shared/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_your_staff_your_staff_component__ = __webpack_require__("./src/app/staff/your-staff/your-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_staff_information_staff_information_component__ = __webpack_require__("./src/app/staff/staff-information/staff-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__staff_staff_salary_staff_salary_component__ = __webpack_require__("./src/app/staff/staff-salary/staff-salary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__staff_add_staff_add_staff_component__ = __webpack_require__("./src/app/staff/add-staff/add-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__staff_staff_service__ = __webpack_require__("./src/app/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stock_your_stock_your_stock_component__ = __webpack_require__("./src/app/stock/your-stock/your-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_login_page_login_page_component__ = __webpack_require__("./src/app/auth/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_signup_page_signup_page_component__ = __webpack_require__("./src/app/auth/signup-page/signup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_auth_interceptor__ = __webpack_require__("./src/app/auth/auth-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__stock_category_category_component__ = __webpack_require__("./src/app/stock/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stock_stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__stock_add_stock_add_stock_component__ = __webpack_require__("./src/app/stock/add-stock/add-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tool_bar_tool_bar_component__["a" /* ToolBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__staff_your_staff_your_staff_component__["a" /* YourStaffComponent */],
                __WEBPACK_IMPORTED_MODULE_11__staff_staff_information_staff_information_component__["a" /* StaffInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__staff_staff_salary_staff_salary_component__["a" /* StaffSalaryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__staff_add_staff_add_staff_component__["a" /* AddStaffComponent */],
                __WEBPACK_IMPORTED_MODULE_15__stock_your_stock_your_stock_component__["a" /* YourStockComponent */],
                __WEBPACK_IMPORTED_MODULE_16__auth_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__auth_signup_page_signup_page_component__["a" /* SignupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__stock_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_23__stock_add_stock_add_stock_component__["a" /* AddStockComponent */],
                __WEBPACK_IMPORTED_MODULE_24__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_18__auth_auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__stock_stock_service__["a" /* StockService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_19__auth_auth_interceptor__["a" /* AuthInterceptor */], multi: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, rout) {
        this.authService = authService;
        this.rout = rout;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.rout.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authService = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */]);
        var authToken = localStorage.getItem('token');
        console.log('interseptor' + authToken);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        console.log(authRequest);
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth-services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.message = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        console.log("returning token from here " + this.token);
        return localStorage.getItem('token');
    };
    AuthService.prototype.userSignUp = function (formGroup) {
        var _this = this;
        var user = { email: formGroup.value.email,
            password: formGroup.value.matching_passwords.password, name: formGroup.value.name };
        this.httpClient.post('api/signup', user)
            .subscribe(function (res) {
            console.log(res.result);
            console.log(res);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error.error.message);
            if (error.error.message === 'User validation failed: email: unique') {
                _this.message.next('user already exist with this email address');
            }
        });
    };
    AuthService.prototype.getMessageListner = function () {
        return this.message.asObservable();
    };
    AuthService.prototype.userLogin = function (formGroup) {
        var _this = this;
        var user = { email: formGroup.value.email,
            password: formGroup.value.password, name: null };
        this.httpClient.post('api/login', user)
            .subscribe(function (res) {
            // console.log('here is response'+res.token);
            console.log('here is response' + res.result.email);
            var token = res.token;
            _this.token = token;
            _this.userId = res.result.name;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', _this.userId);
            console.log('i am from login token ' + token);
            _this.router.navigate(['/dashboard', 'home']);
        }, function (error) {
            console.log(error.error.message);
            _this.message.next(error.error.message);
        });
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.UserId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.logOutUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/custom validator/PasswordValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var value;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (value === undefined) {
                    value = control.value;
                }
                else {
                    if (value !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "./src/app/auth/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\r\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\r\nbody{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n  background: #fff;\r\n  position:fixed;\r\n  top:0;\r\n  bottom:0;\r\n  left:0;\r\n  right:0;\r\n\r\n\tcolor: #fff;\r\n\tfont-family: Arial;\r\n\tfont-size: 12px;\r\n}\r\n.body{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground-image: url('shop.1b2148c1e34a3b99d1a8.png');\r\n\tbackground-size: cover;\r\n\t-webkit-filter: blur(5px);\r\n\tz-index: 0;\r\n}\r\n.grad{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */\r\n\tz-index: 1;\r\n\topacity: 0.7;\r\n}\r\n/* .header{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 35px);\r\n\tleft: calc(50% - 255px);\r\n\tz-index: 2;\r\n}*/\r\n.header div{\r\n\t/* float: left; */\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 35px;\r\n  font-weight: 200;\r\n\r\n}\r\n.header div span{\r\n\tcolor: #ff4081 !important;\r\n}\r\n.login{\r\n\tposition: relative;\r\n\t/* top: calc(50% - 75px);*/\r\n\t /* left: calc(50% - 300px); */\r\n\theight: 150px;\r\n\twidth: 350px;\r\n\tpadding: 10px;\r\n  z-index: 2;\r\ntext-align: center;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n\r\n\r\n}\r\n.login input[type=text]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n}\r\n.login input[type=password]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n\tmargin-top: 10px;\r\n}\r\n.login button[type=submit]{\r\n\twidth: 260px;\r\n\theight: 35px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #fff;\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n\tcolor: #a18d6c;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]:hover{\r\n\topacity: 0.8;\r\n}\r\n.login input[type=button]:active{\r\n\topacity: 0.6;\r\n}\r\n.login input[type=text]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=password]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login button[type=submit]:focus{\r\n\toutline: none;\r\n}\r\n::-webkit-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n::-moz-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n.error {\r\n  color: #cc0033;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  line-height: 15px;\r\n  margin: 5px 0 0;\r\n }\r\n.my-toolbar{\r\n position: sticky;\r\n position: -webkit-sticky; /* For macOS/iOS Safari */\r\n top: 0; /* Sets the sticky toolbar to be on top */\r\n z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n.div-main {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n\r\n}\r\n.a-class{\r\n  color: #ffbf00;\r\n}\r\n.a-class:hover{\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"height: 50px; font-size: 15px; font-family: sans-serif;\" color=\"accent\" class=\"my-toolbar\">\n\n  <span>Welcome to ShopManagement</span>\n\n  <div  style=\"position: absolute; right: 30px;\" ><button  mat-button   >About Us</button></div>\n </mat-toolbar>\n <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n <div class=\"div-main\">\n<div class=\"body\"></div>\n\t\t<div class=\"grad\"></div>\n\n\t\t<br>\n\t\t<div class=\"login\">\n      \t<div class=\"header\">\n            <div>Shop<span>Management</span></div>\n          </div><br><br>\n      <form [formGroup] = \"userLogin\" (ngSubmit)= \"onSubmit()\">\n        <input type=\"text\" placeholder=\"email\" name=\"email\" formControlName=\"email\">\n        <div  *ngFor=\"let validation of account_validation_messages.email\">\n          <p  class=\"error\" *ngIf=\"userLogin.get('email').hasError(validation.type) && (userLogin.get('email').dirty || userLogin.get('email').touched)\">\n             {{validation.message}}\n         </p>\n       </div><br>\n\t\t\t\t<input type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\"><br>\n        <button type=\"submit\"  value=\"Login\">Login</button>\n      </form>\n      <br>\n      <div>Don't have an account ? <a class=\"a-class\" [routerLink]=\"['/sign-up']\" >Sign Up</a></div>\n      <p style=\"color: red;\">{{message}}</p>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/auth/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.MessageSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subscription"]();
        this.account_validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters' },
                { type: 'validUsername', message: 'Your username has already been taken' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions' }
            ]
        };
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
        });
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getMessageListner().subscribe(function (result) {
            console.log(result);
            _this.message = result;
        });
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
        this.MessageSub.unsubscribe();
    };
    LoginPageComponent.prototype.onSubmit = function () {
        this.isLoading = true;
        if (this.userLogin.invalid) {
            this.isLoading = false;
            return;
        }
        else {
            console.log(this.userLogin.value.email);
            console.log(this.userLogin.get('email').hasError('required'));
            this.authService.userLogin(this.userLogin);
            this.isLoading = false;
            console.log('from component  ' + this.authService.getToken());
        }
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("./src/app/auth/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/auth/login-page/login-page.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_services_auth_service__["a" /* AuthService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup-page/signup-page.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\r\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\r\nbody{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n  background: #fff;\r\n  position:fixed;\r\n  top:0;\r\n  bottom:0;\r\n  left:0;\r\n  right:0;\r\n\r\n\tcolor: #fff;\r\n\tfont-family: Arial;\r\n\tfont-size: 12px;\r\n}\r\n.body{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground-image: url('shop.1b2148c1e34a3b99d1a8.png');\r\n\tbackground-size: cover;\r\n\t-webkit-filter: blur(5px);\r\n\tz-index: 0;\r\n}\r\n.grad{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */\r\n\tz-index: 1;\r\n\topacity: 0.7;\r\n}\r\n/* .header{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 35px);\r\n\tleft: calc(50% - 255px);\r\n\tz-index: 2;\r\n}*/\r\n.header div{\r\n\t/* float: left; */\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 35px;\r\n  font-weight: 200;\r\n\r\n}\r\n.header div span{\r\n\tcolor: #ff4081 !important;\r\n}\r\n.login{\r\n\tposition: relative;\r\n\t/* top: calc(50% - 75px);*/\r\n\t /* left: calc(50% - 300px); */\r\n\theight: 150px;\r\n\twidth: 350px;\r\n\tpadding: 10px;\r\n  z-index: 2;\r\ntext-align: center;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n\r\n\r\n}\r\n.login input[type=text]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n}\r\n.login input[type=password]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n\tmargin-top: 10px;\r\n}\r\n.login button[type=submit]{\r\n\twidth: 260px;\r\n\theight: 35px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #fff;\r\n\tcursor: pointer;\r\n\tborder-radius: 2px;\r\n\tcolor: #a18d6c;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]:hover{\r\n\topacity: 0.8;\r\n}\r\n.login input[type=button]:active{\r\n\topacity: 0.6;\r\n}\r\n.login input[type=text]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=password]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login button[type=submit]:focus{\r\n\toutline: none;\r\n}\r\n::-webkit-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n::-moz-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n.error {\r\n  color: #cc0033;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  line-height: 15px;\r\n  margin: 5px 0 0;\r\n }\r\n.my-toolbar{\r\n position: sticky;\r\n position: -webkit-sticky; /* For macOS/iOS Safari */\r\n top: 0; /* Sets the sticky toolbar to be on top */\r\n z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n.div-main {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n\r\n}\r\n.a-class {\r\n  color: #ffbf00;\r\n}\r\n.a-class:hover{\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/auth/signup-page/signup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"height: 50px; font-size: 15px; font-family: sans-serif;\" color=\"accent\" class=\"my-toolbar\">\n\n  <span>Welcome to ShopManagement</span>\n\n  <div  style=\"position: absolute; right: 30px;\" ><button  mat-button >About Us</button></div>\n </mat-toolbar>\n <div class=\"div-main\">\n<div class=\"body\"></div>\n\t\t<div class=\"grad\"></div>\n\n\t\t<br>\n\t\t<div class=\"login\">\n      \t<div class=\"header\">\n            <div>Shop<span>Management</span></div>\n          </div><br><br>\n      <form [formGroup]=\"userSignUp\" (ngSubmit) = \"onSubmit()\">\n          <input type=\"text\" placeholder=\"name\" name=\"name\" formControlName=\"name\">\n          <div  *ngFor=\"let validation of account_validation_messages.name\">\n              <p  class=\"error\" *ngIf=\"userSignUp.get('name').hasError(validation.type) && (userSignUp.get('name').dirty || userSignUp.get('name').touched)\">\n                 {{validation.message}}\n             </p>\n           </div>\n          <br>\n        <input type=\"text\" placeholder=\"email\" name=\"email\" formControlName=\"email\">\n        <div  *ngFor=\"let validation of account_validation_messages.email\">\n          <p  class=\"error\" *ngIf=\"userSignUp.get('email').hasError(validation.type) && (userSignUp.get('email').dirty || userSignUp.get('email').touched)\">\n             {{validation.message}}\n         </p>\n        </div>\n       <p style=\"color: red;\" *ngIf=\"message\">{{message}}</p>\n       <br>\n       <div formGroupName=\"matching_passwords\">\n        <input type=\"password\" placeholder=\"password\" name=\"password\" formControlName=\"password\">\n        <div *ngFor=\"let validation of account_validation_messages.password\">\n            <p class=\"error\" *ngIf=\"userSignUp.get('matching_passwords').get('password').hasError(validation.type) && (userSignUp.get('matching_passwords').get('password').dirty || userSignUp.get('matching_passwords').get('password').touched)\">{{validation.message}}</p>\n        </div>\n        <br>\n        <input type=\"password\" placeholder=\"confirm password\" name=\"password\" formControlName=\"confirm_password\">\n        <div *ngFor=\"let validation of account_validation_messages.confirm_password\">\n            <p class=\"error\" *ngIf=\"(userSignUp.get('matching_passwords').get('confirm_password').hasError(validation.type)|| userSignUp.get('matching_passwords').hasError(validation.type)) && (userSignUp.get('matching_passwords').get('confirm_password').dirty || userSignUp.get('matching_passwords').get('confirm_password').touched)\">{{validation.message}}</p>\n        </div>\n       </div>\n        <br>\n        <button type=\"submit\"  value=\"Login\">SignUp</button>\n      </form>\n      <br>\n      <div>Already have an account ? <a class=\"a-class\" [routerLink]=\"['/login']\" > Login</a></div>\n\t\t</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/auth/signup-page/signup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_validator_PasswordValidator__ = __webpack_require__("./src/app/auth/custom validator/PasswordValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(authService) {
        this.authService = authService;
        this.MessageSub = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.account_validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required' },
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
        };
        this.userSignUp = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            matching_passwords: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
                ])),
                confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
            }, function (formGroup) {
                return __WEBPACK_IMPORTED_MODULE_2__custom_validator_PasswordValidator__["a" /* PasswordValidator */].areEqual(formGroup);
            }),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
        });
    }
    SignupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getMessageListner().subscribe(function (res) {
            console.log(res);
            _this.message = res;
        });
    };
    SignupPageComponent.prototype.ngOnDestroy = function () {
        this.MessageSub.unsubscribe();
    };
    SignupPageComponent.prototype.onSubmit = function () {
        if (this.userSignUp.invalid) {
            return;
        }
        else {
            this.authService.userSignUp(this.userSignUp);
            console.log(this.userSignUp);
        }
    };
    SignupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup-page',
            template: __webpack_require__("./src/app/auth/signup-page/signup-page.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup-page/signup-page.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-chip:not(.mat-basic-chip) {\r\n  background-color: #ff4081;\r\n\r\n  /* color: rgba(0,0,0,.87); */\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\nmat-chip {\r\n  max-width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n    <ng-container *ngFor=\"let link of links; let i=index\">\n      <h2 style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\">{{link.name}} </h2>\n     <div *ngIf=\"link.name === 'Staff Management'\">You can manage your <span>staff</span> by,\n            adding and updating their information. Manage staff's salaries </div>\n      <div *ngIf=\"link.name === 'Stalk Management'\">You can manage your <span>stock</span>\n             </div>\n             <br>\n\n  <mat-chip color=\"accent\" *ngFor=\"let chip of link.subItems\" [routerLink] = [chip.url] >\n     {{chip.name}}\n  </mat-chip>\n</ng-container>\n</mat-chip-list>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.links = [{
                name: 'Staff Management',
                url: 'invoices',
                subItems: [
                    {
                        name: 'Add Staff',
                        url: '/dashboard/add-staff'
                    },
                    {
                        name: 'Your Staff',
                        url: '/dashboard/yourstaff'
                    },
                    {
                        name: 'Staff Information',
                        url: '/dashboard/staff-information'
                    },
                    {
                        name: 'Staff Salary',
                        url: '/dashboard/staff-salary'
                    }
                ]
            },
            {
                name: 'Stock Management',
                url: 'clients',
                subItems: [{
                        name: 'Add Category',
                        url: '/dashboard/yourCategory'
                    },
                    {
                        name: 'Add Stock',
                        url: '/dashboard/addStock'
                    },
                    {
                        name: 'Your Stock',
                        url: '/dashboard/yourStock'
                    },
                ]
            }];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mime-type.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mimeType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);

var mimeType = function (control) {
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/shared/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var exportedMatModules = [
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__["a" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDividerModule */]
];
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ].concat(exportedMatModules),
            exports: exportedMatModules.slice(),
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/side-nav/side-nav.component.css":
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: fixed;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.app-sidenav-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n\r\n}\r\n\r\n.app-sidenav {\r\n  width: 240px;\r\n}\r\n\r\n.wrapper {\r\n  margin: 50px;\r\n\r\n}\r\n\r\n.my-toolbar{\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top: 0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n\r\nmat-chip {\r\n  max-width: 200px;\r\n}\r\n\r\n.mat-chip:not(.mat-basic-chip) {\r\n  background-color: #ff4081;\r\n\r\n  /* color: rgba(0,0,0,.87); */\r\n  color: white;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-sidenav-container\">\n  <mat-sidenav class=\"app-sidenav mat-elevation-z10\"\n   [opened] =\"!isScreenSmall()\"\n   [mode] =\"isScreenSmall() ? 'over' : 'side'\"\n   #sidenav>\n   <mat-toolbar style=\"height: 50px; font-size: 13px; font-family: sans-serif;\" color=\"accent\">Dashboard</mat-toolbar>\n   <!-- <mat-nav-list>\n    <a mat-list-item *ngFor=\"let link of links\"> {{ link.name }} </a>\n </mat-nav-list> -->\n <mat-list >\n  <ng-container *ngFor=\"let link of links; let i=index\">\n      <mat-list-item style=\"font-family: Arial; font-size: 13px\">{{i+1+'. '}}{{link.name}}</mat-list-item>\n      <mat-list style=\"margin-left:30px; margin-top: -20px; \" >\n          <div *ngFor=\"let subItem of link.subItems; let j= index\" >\n               <div *ngIf=\"isScreenSmall()\">\n              <a mat-button [routerLink] = [subItem.url] (click) ='sidenav.close()'><mat-list-item style=\"font-size: small; margin-top: -10px;text-align-last: justify;\" >{{i+1+'.'}}{{j+1+' '}}{{subItem.name}}</mat-list-item></a>\n            </div>\n            <div *ngIf=\"!isScreenSmall()\">\n                <a mat-button [routerLink] = [subItem.url] ><mat-list-item style=\"font-size: 13px; font-family: roboto; margin-top: -10px;text-align-last: justify;\" >{{i+1+'.'}}{{j+1+' '}}{{subItem.name}}</mat-list-item></a>\n              </div>\n            </div>\n      </mat-list>\n  </ng-container>\n</mat-list>\n  </mat-sidenav>\n  <div class=\"app-sidenav-content\">\n      <app-tool-bar class=\"my-toolbar\" (toggleSidenav) = \"sidenav.toggle()\"></app-tool-bar>\n     <div class=\"wrapper\">\n       <router-outlet></router-outlet>\n\n     </div>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MAX_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone) {
        var _this = this;
        this.links = [{
                name: 'Staff Management',
                url: 'invoices',
                subItems: [
                    {
                        name: 'Add Staff',
                        url: 'add-staff'
                    },
                    {
                        name: 'Your Staff',
                        url: 'yourstaff'
                    },
                    {
                        name: 'Staff Information',
                        url: 'staff-information'
                    },
                    {
                        name: 'Staff Salary',
                        url: 'staff-salary'
                    }
                ]
            },
            {
                name: 'Stock Management',
                url: 'clients',
                subItems: [{
                        name: 'Add Category',
                        url: 'yourCategory'
                    },
                    {
                        name: 'Add Stock',
                        url: 'addStock'
                    },
                    {
                        name: 'Your Stock',
                        url: 'yourStock'
                    },
                ]
            }];
        this.mediaMatcher = matchMedia("(max-width : " + MAX_WIDTH_BREAKPOINT + "px)");
        this.mediaMatcher.addListener(function (mql) {
            zone.run(function () { return _this.mediaMatcher = matchMedia("(max-width: " + MAX_WIDTH_BREAKPOINT + "px)"); });
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-nav',
            template: __webpack_require__("./src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("./src/app/side-nav/side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/staff/add-staff/add-staff.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.button{\r\n  background-color: #ff4081;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 20%;\r\n  height: 30px;\r\n  font-size: 13px;\r\ntext-align: center;\r\nline-height: 0px !important;\r\npadding: 12px 10px 10px 10px !important\r\n\r\n}\r\n\r\n.form-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card {\r\n  width: 80%;\r\n}\r\n\r\n.btn-class{\r\n  width: 150px;\r\n  text-align: center;\r\nmargin: auto;\r\n-ms-flex-line-pack: center;\r\n    align-content: center\r\n\r\n}\r\n\r\n.hide {\r\n  visibility: hidden;\r\n}\r\n\r\n.imagePreview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.imagePreview img {\r\n  height: 100%;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/staff/add-staff/add-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form class=\"form-container\" [formGroup] = \"staffProfile\" (ngSubmit)= \"onSubmit(formDirective)\" #formDirective=\"ngForm\">\n  <mat-card-header>\n      <mat-card-title>Staff Information</mat-card-title>\n  </mat-card-header>\n\n      <mat-card-content>\n        <div class=\"example-container\" style=\"font-size: 12px; font-family: Arial;\">\n\n          <mat-form-field>\n            <input matInput placeholder=\"Name*\" formControlName=\"name\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Phone Number*\" formControlName=\"phoneNumber\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Gender*\" formControlName=\"gender\">\n              <mat-option value=\"male\">Male</mat-option>\n              <mat-option value=\"female\">Female</mat-option>\n              <mat-option value=\"other\">Other</mat-option>\n            </mat-select>\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address*\" formControlName=\"address\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <textarea matInput placeholder=\"Description ( if any )\" formControlName=\"description\"></textarea>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"profile*\" formControlName=\"profile\">\n              <mat-option value=\"manager\">Manager</mat-option>\n              <mat-option value=\"seller\">Seller</mat-option>\n              <mat-option value=\"worker\">Worker</mat-option>\n              <mat-option value=\"helper\">Helper</mat-option>\n              <mat-option value=\"other\">Other</mat-option>\n            </mat-select>\n            <mat-error>\n                this field is required\n            </mat-error>\n\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date*\" formControlName=\"date\">\n            <mat-error>\n                this field is required\n            </mat-error>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Salary*\" formControlName=\"salary\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n           </div>\n\n      </mat-card-content>\n      <mat-card-actions>\n        <div>\n          <button mat-stroked-button color=\"accent\" type = \"button\" (click) = \"filePicker.click()\">pick img</button>\n            <input class=\"hide\" type=\"file\" #filePicker (change)=\"onFileUpload($event)\">\n            <div class='imagePreview' *ngIf=\"imagePreview!== '' && imagePreview && staffProfile.get('image').valid\">\n            <img [src]=\"imagePreview\">\n          </div>\n          <p *ngIf=\"!imagePreview && isImage === 'false'\" style=\"font-size: 11px; color: red;\">    this field is required</p>\n        </div>\n        <div class=\"btn-class\">\n          <button class=\"button\" mat-raised-button color=\"primary\" type=\"submit\">submit\n\n\n          </button>\n        </div>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/staff/add-staff/add-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__("./src/app/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mime_type_validator__ = __webpack_require__("./src/app/mime-type.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddStaffComponent = /** @class */ (function () {
    function AddStaffComponent(staffService, routs, snackBar) {
        this.staffService = staffService;
        this.routs = routs;
        this.snackBar = snackBar;
        this.mode = 'create';
        this.isImage = 'true';
    }
    AddStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffProfile = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            salary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            image: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', { validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required], asyncValidators: [__WEBPACK_IMPORTED_MODULE_4__mime_type_validator__["a" /* mimeType */]] })
        });
        this.routs.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('staffId')) {
                _this.mode = 'edit';
                _this.staffId = paramMap.get('staffId');
                _this.staffService.getStaffOne(_this.staffId).subscribe(function (staffData) {
                    console.log("here is staff data " + staffData);
                    _this.staff = { _id: staffData._id, name: staffData.name, phoneNumber: staffData.phoneNumber,
                        gender: staffData.gender, address: staffData.address, description: staffData.description,
                        profile: staffData.profile, date: staffData.date, salary: staffData.salary, imagePath: staffData.imagePath,
                        salaryStatus: null };
                    _this.staffProfile.setValue({
                        name: _this.staff.name,
                        phoneNumber: _this.staff.phoneNumber,
                        gender: _this.staff.gender,
                        address: _this.staff.address,
                        description: _this.staff.description,
                        profile: _this.staff.profile,
                        date: _this.staff.date,
                        salary: _this.staff.salary,
                        image: _this.staff.imagePath,
                        salaryStatus: null
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.staffId = null;
            }
        });
    };
    AddStaffComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.staffProfile.patchValue({ image: file });
        this.staffProfile.get('image').updateValueAndValidity();
        var render = new FileReader();
        render.onload = function () {
            _this.imagePreview = render.result;
        };
        render.readAsDataURL(file);
        console.log(file);
    };
    AddStaffComponent.prototype.onSubmit = function (formDirective) {
        if (this.mode === 'create') {
            console.log(this.staffProfile.controls.image);
            if (this.staffProfile.invalid) {
                this.isImage = 'false';
                return;
            }
            else {
                this.staffService.addPost(this.staffProfile, this.staffProfile.value.image, 'pending');
                this.snackBar.open('Added', 'ok', {
                    duration: 2000,
                });
                console.log(this.staffProfile);
            }
            formDirective.resetForm();
            this.staffProfile.reset();
        }
        else {
            this.staffService.updatePost(this.staffProfile, this.staffId, this.staffProfile.value.image);
            this.snackBar.open('Updated', 'ok', {
                duration: 2000,
            });
        }
    };
    AddStaffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-staff',
            template: __webpack_require__("./src/app/staff/add-staff/add-staff.component.html"),
            styles: [__webpack_require__("./src/app/staff/add-staff/add-staff.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSnackBar */]])
    ], AddStaffComponent);
    return AddStaffComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff-information/staff-information.component.css":
/***/ (function(module, exports) {

module.exports = ".no-data {\r\n  text-align: center;\r\n  color: #ff4081;\r\n  font-family: Arial;\r\n  font-size: 13px\r\n}\r\n mat-card {\r\n  width: calc(100% - 70px);\r\n  height: calc(100% - 70px);\r\n}\r\n .example-card {\r\n  max-width: auto;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n\r\n}\r\n img {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n    height: 128px;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  -webkit-transition: all 150ms ease-in-out;\r\n  transition: all 150ms ease-in-out;\r\n  width: 128px;\r\n  text-align: center;\r\n}\r\n img:hover {\r\n  border-radius: 10%;\r\n  padding: 10px;\r\n}\r\n /* img.avatar {\r\n  border-radius: 50%;\r\n  height: 50px;\r\n  padding: 10px;\r\n  width: 50px;\r\n  transition: all 150ms ease-in-out;\r\n  margin-bottom: -50px;\r\n} */\r\n .edit  :hover {\r\n  color: green;\r\n}\r\n .delete  :hover  {\r\n  color: red;\r\n}\r\n .loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/staff/staff-information/staff-information.component.html":
/***/ (function(module, exports) {

module.exports = "\n     <div class=\"loading-shade\" *ngIf=\"isResultsLoading\">\n      <mat-spinner color=\"accent\" *ngIf=\"isResultsLoading\"></mat-spinner>\n    </div>\n <div *ngIf=\"staffInformation.length !== 0\">\n\n <mat-grid-list cols=\"2\" rowHeight=\"455px\">\n    <mat-grid-tile *ngFor=\"let item of staffInformation\">\n        <mat-card class=\"example-card\">\n\n            <mat-card-header>\n\n              <mat-card-title ><h3>{{item.name}}</h3></mat-card-title>\n\n              <mat-card-subtitle style=\"text-align: center\">{{item.profile}}</mat-card-subtitle>\n            </mat-card-header>\n\n            <img   [src]=\"item.imagePath\"  />\n            <mat-card-content>\n                <div style=\"padding: 3px; font:  lighter ; font-size: 13px;\" class=\"description\">\n                    <div style=\"padding: 3px\">Gender:  {{item.gender}}</div>\n                    <div style=\"padding: 3px\">Phone Number:  {{item.phoneNumber}}</div>\n                    <div style=\"padding: 3px\">Address:  {{item.address}}</div>\n                    <div style=\"padding: 3px\">Salary:  {{item.salary}}</div>\n                    <div style=\"padding: 3px\">Date:  {{item.date | date}}</div>\n                    <div style=\"padding: 3px\">Description:  {{item.description}}</div></div>\n            </mat-card-content>\n            <mat-card-actions>\n              <button class=\"edit\" mat-button (click)= \"onEdit(item._id)\">EDIT</button>\n              <button class=\"delete\" mat-button (click)=\"onDelete(item._id)\">DELETE</button>\n            </mat-card-actions>\n          </mat-card>\n    </mat-grid-tile>\n\n  </mat-grid-list>\n  </div>\n  <p class=\"no-data\" *ngIf=\"staffInformation.length === 0\" > No Staff Added !!! </p>\n"

/***/ }),

/***/ "./src/app/staff/staff-information/staff-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_service__ = __webpack_require__("./src/app/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffInformationComponent = /** @class */ (function () {
    function StaffInformationComponent(staffService, snackBar, router) {
        this.staffService = staffService;
        this.snackBar = snackBar;
        this.router = router;
        this.staffInformation = [];
        this.StaffSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"]();
        this.isResultsLoading = false;
    }
    StaffInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isResultsLoading = true;
        this.staffService.getStaff();
        this.staffService.getStaffUpdateListener().subscribe(function (result) {
            _this.staffInformation = result;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatTableDataSource */](_this.staffInformation);
            console.log('this is staff information' + _this.staffInformation);
            _this.isResultsLoading = false;
        });
    };
    StaffInformationComponent.prototype.onDelete = function (id) {
        this.staffService.deleteStaff(id);
        //   this.staffService.getStaffUpdateListener().subscribe(result => {
        //     this.staffData = result;
        //     console.log(this.dataSource);
        //     console.log("result"+result);
        //     this.dataSource = new MatTableDataSource(this.staffData);
        //     this.dataSource.paginator = this.paginator;
        // });
        this.snackBar.open('Deleted', 'ok', {
            duration: 2000,
        });
        console.log('triggered delete wit id' + id);
    };
    StaffInformationComponent.prototype.onEdit = function (id) {
        this.router.navigate(['dashboard', 'add-staff', id]);
    };
    StaffInformationComponent.prototype.ngOnDestroy = function () {
        this.StaffSub.unsubscribe();
    };
    StaffInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-staff-information',
            template: __webpack_require__("./src/app/staff/staff-information/staff-information.component.html"),
            styles: [__webpack_require__("./src/app/staff/staff-information/staff-information.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], StaffInformationComponent);
    return StaffInformationComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff-salary/staff-salary.component.css":
/***/ (function(module, exports) {

module.exports = " .form-style-3{\r\n\tmax-width: 450px;\r\n\tfont-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.form-style-3 label{\r\n\tdisplay:block;\r\n\tmargin-bottom: 10px;\r\n}\r\n.form-style-3 label > span{\r\n\tfloat: left;\r\n\twidth: 100px;\r\n\tcolor: #F072A9;\r\n\tfont-weight: bold;\r\n\tfont-size: 13px;\r\n\ttext-shadow: 1px 1px 1px #fff;\r\n}\r\n.form-style-3 fieldset{\r\n\tborder-radius: 10px;\r\n\t-webkit-border-radius: 10px;\r\n\t-moz-border-radius: 10px;\r\n\tmargin: 0px 0px 10px 0px;\r\n\tborder: 1px solid #FFD2D2;\r\n\tpadding: 20px;\r\n\tbackground: #FFF4F4;\r\n\tbox-shadow: inset 0px 0px 15px #FFE5E5;\r\n\t-moz-box-shadow: inset 0px 0px 15px #FFE5E5;\r\n\t-webkit-box-shadow: inset 0px 0px 15px #FFE5E5;\r\n}\r\n.form-style-3 fieldset legend{\r\n\tcolor: #FFA0C9;\r\n\tborder-top: 1px solid #FFD2D2;\r\n\tborder-left: 1px solid #FFD2D2;\r\n\tborder-right: 1px solid #FFD2D2;\r\n\tborder-radius: 5px 5px 0px 0px;\r\n\t-webkit-border-radius: 5px 5px 0px 0px;\r\n\t-moz-border-radius: 5px 5px 0px 0px;\r\n\tbackground: #FFF4F4;\r\n\tpadding: 0px 8px 3px 8px;\r\n\tbox-shadow: -0px -1px 2px #F1F1F1;\r\n\t-moz-box-shadow:-0px -1px 2px #F1F1F1;\r\n\t-webkit-box-shadow:-0px -1px 2px #F1F1F1;\r\n\tfont-weight: normal;\r\n\tfont-size: 12px;\r\n}\r\n.form-style-3 textarea{\r\n\twidth:250px;\r\n\theight:100px;\r\n}\r\n.form-style-3 input[type=text],\r\n.form-style-3 input[type=date],\r\n.form-style-3 input[type=datetime],\r\n.form-style-3 input[type=number],\r\n.form-style-3 input[type=search],\r\n.form-style-3 input[type=time],\r\n.form-style-3 input[type=url],\r\n.form-style-3 input[type=email],\r\n.form-style-3 select,\r\n.form-style-3 textarea{\r\n\tborder-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n\tborder: 1px solid #FFC2DC;\r\n\toutline: none;\r\n\tcolor: #F072A9;\r\n\tpadding: 5px 8px 5px 8px;\r\n\tbox-shadow: inset 1px 1px 4px #FFD5E7;\r\n\t-moz-box-shadow: inset 1px 1px 4px #FFD5E7;\r\n\t-webkit-box-shadow: inset 1px 1px 4px #FFD5E7;\r\n\tbackground: #FFEFF6;\r\n\twidth:50%;\r\n}\r\n.form-style-3  input[type=submit],\r\n.form-style-3  input[type=button]{\r\n\tbackground: #EB3B88;\r\n\tborder: 1px solid #C94A81;\r\n\tpadding: 5px 15px 5px 15px;\r\n\tcolor: #FFCBE2;\r\n\tbox-shadow: inset -1px -1px 3px #FF62A7;\r\n\t-moz-box-shadow: inset -1px -1px 3px #FF62A7;\r\n\t-webkit-box-shadow: inset -1px -1px 3px #FF62A7;\r\n\tborder-radius: 3px;\r\n\tborder-radius: 3px;\r\n\t-webkit-border-radius: 3px;\r\n\t-moz-border-radius: 3px;\r\n\tfont-weight: bold;\r\n}\r\n.required{\r\n\tcolor:red;\r\n  font-weight:normal;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.menu-bar {\r\n  position: absolute;\r\n  right: 60px;\r\n\r\n  color: rgb(255, 255, 255);\r\n  background-color: #ff4081;\r\n}\r\n.table-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  position: relative;\r\n}\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.no-data {\r\n  text-align: center;\r\n  color: #ff4081;\r\n  font-family: Arial;\r\n  font-size: 10px\r\n}\r\n.mat-cell{\r\n  font-family: sans-serif;\r\n  font-size: 11px;\r\n}\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n.avatar {\r\n  height: 80px;\r\n  padding: 10px;\r\n  max-width: 128px;\r\n  -webkit-transition: all 150ms ease-in-out;\r\n  transition: all 150ms ease-in-out;\r\n\r\n  width: 70px;\r\n}\r\n.avatar:hover {\r\n  height: 160px;\r\n  padding: 10px;\r\n  max-width: 128px;\r\n  -webkit-transition: all 150ms ease-in-out;\r\n  transition: all 150ms ease-in-out;\r\n  width: 140px;\r\n}\r\nbutton{\r\n  height: 30px;\r\n  font-size: 13px;\r\n\r\n\r\ncolor: white;\r\nbackground: #ff4081;\r\n\r\ndisplay: -webkit-box;\r\n\r\ndisplay: -ms-flexbox;\r\n\r\ndisplay: flex;\r\n-webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n-ms-flex-pack: distribute;\r\n    justify-content: space-around;\r\n\r\n}\r\nmat-button {\r\n\r\n}\r\nmat-spinner{\r\n  margin: auto\r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/staff/staff-salary/staff-salary.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"table-container mat-elevation-z8\" *ngIf=\"check === false\">\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <div class=\"mat-elevation-z8\">\n    <div class=\"loading-shade\" *ngIf=\"isResultsLoading\">\n      <mat-spinner color=\"accent\" *ngIf=\"isResultsLoading\"></mat-spinner>\n    </div>\n  </div>\n  <mat-form-field>\n      <input class = \"input-class\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search here...\">\n    </mat-form-field>\n  <mat-table #table [dataSource]=\"dataSource\" matSort >\n\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n     <ng-container matColumnDef=\"Image\">\n     <mat-header-cell *matHeaderCellDef mat-sort-header>  </mat-header-cell>\n     <mat-cell *matCellDef=\"let data\"> <img [src]=\"data.imagePath\" class=\"avatar\" /></mat-cell>\n     </ng-container>\n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"> {{data.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PhoneNumber\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">{{data.phoneNumber}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Salary\">\n      <mat-header-cell *matHeaderCellDef> Salary </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"> {{data.salary}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Status\">\n      <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">\n       <div *ngIf=\"data.salaryStatus === 'paid'\" style=\"color: green\">  {{data.salaryStatus}} </div>\n       <div *ngIf=\"data.salaryStatus === 'unpaid'\" style=\"color: red\">  {{data.salaryStatus}} </div>\n        </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"Update\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Update </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"><button mat-button  (click) = \"onClick(data._id)\">update</button> </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 20]\"\n  [showFirstLastButtons]=\"true\">\n</mat-paginator>\n<p class=\"no-data\" *ngIf=\"staffData.length === 0\" > No Staff Added !!! </p>\n\n</div>\n\n<div class=\"form-style-3\" *ngIf=\"check === true\">\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup] = \"staffSalary\" (ngSubmit)= \"onSubmit(formDirective)\" #formDirective=\"ngForm\">\n  <fieldset><legend>staff salary</legend>\n\n  <label for=\"field1\"><span>Name <span class=\"required\">*</span></span><input  type=\"text\" class=\"input-field\" name=\"field1\" value=\"\" formControlName=\"name\"/></label>\n\n  <label for=\"field2\"><span>Total salary <span class=\"required\">*</span></span><input type=\"email\" class=\"input-field\" name=\"field2\" value=\"\" formControlName=\"salary\"/></label>\n  <label for=\"field4\"><span>Due salary</span><select name=\"field4\" class=\"select-field\" formControlName=\"checkStatus\">\n    <option value=\"paid\">Paid</option>\n    <option value=\"unpaid\">Unpaid</option>\n    </select></label>\n    <button class = \"btn\" mat-button type=\"submit\">Submit</button>\n  </fieldset>\n\n  </form>\n  </div>\n  <!-- <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form> -->\n"

/***/ }),

/***/ "./src/app/staff/staff-salary/staff-salary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffSalaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_service__ = __webpack_require__("./src/app/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffSalaryComponent = /** @class */ (function () {
    function StaffSalaryComponent(staffService, snackBar) {
        this.staffService = staffService;
        this.snackBar = snackBar;
        this.StaffSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"]();
        this.displayedColumns = ['Image', 'Name', 'PhoneNumber', 'Salary', 'Status', 'Update'];
        this.staffData = [];
        this.staffDataOne = [];
        this.isResultsLoading = false;
        this.check = false;
    }
    StaffSalaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffSalary = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            salary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            checkStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
        });
        this.isResultsLoading = true;
        this.staffService.getStaff();
        this.staffService.getStaffUpdateListener().subscribe(function (result) {
            _this.staffData = result;
            console.log(_this.dataSource);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatTableDataSource */](_this.staffData);
            _this.dataSource.paginator = _this.paginator;
            _this.isResultsLoading = false;
        });
    };
    StaffSalaryComponent.prototype.ngOnDestroy = function () {
        this.StaffSub.unsubscribe();
    };
    StaffSalaryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        console.log(filterValue);
    };
    StaffSalaryComponent.prototype.onClick = function (id) {
        var _this = this;
        console.log(id);
        this.isResultsLoading = true;
        this.staffId = id;
        this.staffService.getStaffOne(id).subscribe(function (staffData) {
            _this.staff = { _id: staffData._id, name: staffData.name, phoneNumber: staffData.phoneNumber,
                gender: staffData.gender, address: staffData.address, description: staffData.description,
                profile: staffData.profile, date: staffData.date, salary: staffData.salary, imagePath: staffData.imagePath,
                salaryStatus: null };
            _this.staffSalary.setValue({
                name: staffData.name,
                salary: staffData.salary,
                checkStatus: null
            });
        });
        this.isResultsLoading = false;
        return this.check = true;
    };
    StaffSalaryComponent.prototype.onSubmit = function (formGroupDirective) {
        console.log(" staff data " + this.staffSalary.value.checkStatus);
        this.staffService.updateSalaryStatus(this.staff, this.staffSalary.value.checkStatus, this.staffId);
        this.snackBar.open('updated', 'ok', {
            duration: 2000,
        });
        this.check = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatPaginator */])
    ], StaffSalaryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSort */])
    ], StaffSalaryComponent.prototype, "sort", void 0);
    StaffSalaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-staff-salary',
            template: __webpack_require__("./src/app/staff/staff-salary/staff-salary.component.html"),
            styles: [__webpack_require__("./src/app/staff/staff-salary/staff-salary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSnackBar */]])
    ], StaffSalaryComponent);
    return StaffSalaryComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffService = /** @class */ (function () {
    function StaffService(http, routs) {
        this.http = http;
        this.routs = routs;
        this.staffs = [];
        this.UpdatedStaff = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    StaffService.prototype.getStaffUpdateListener = function () {
        return this.UpdatedStaff.asObservable();
    };
    StaffService.prototype.addPost = function (staffDetail, image, salaryStatus) {
        var _this = this;
        var staffData = new FormData();
        staffData.append('name', staffDetail.value.name);
        staffData.append('phoneNumber', staffDetail.value.phoneNumber);
        staffData.append('gender', staffDetail.value.gender);
        staffData.append('address', staffDetail.value.address);
        staffData.append('description', staffDetail.value.description);
        staffData.append('profile', staffDetail.value.profile);
        staffData.append('date', staffDetail.value.date);
        staffData.append('salary', staffDetail.value.salary);
        staffData.append('image', image, staffDetail.value.name);
        staffData.append('salaryStatus', salaryStatus);
        console.log(image);
        // const staff: StaffModel = {
        //                            _id: null,
        //                            name: staffDetail.value.name,
        //                            phoneNumber: staffDetail.value.phoneNumber,
        //                            gender: staffDetail.value.gender,
        //                            address: staffDetail.value.address,
        //                            description: staffDetail.value.description,
        //                            profile: staffDetail.value.profile,
        //                            date: staffDetail.value.date,
        //                            salary: staffDetail.value.salary
        //                           };
        this.http.post('api/staff', staffData)
            .subscribe(function (res) {
            var staff = {
                _id: res.result,
                name: staffDetail.value.name,
                phoneNumber: staffDetail.value.phoneNumber,
                gender: staffDetail.value.gender,
                address: staffDetail.value.address,
                description: staffDetail.value.description,
                profile: staffDetail.value.profile,
                date: staffDetail.value.date,
                salary: staffDetail.value.salary,
                imagePath: res.imagePath,
                salaryStatus: null
            };
            _this.staffs.push(staff);
            _this.UpdatedStaff.next(_this.staffs.slice());
            console.log('here is your responses' + res.result);
        });
    };
    StaffService.prototype.getStaff = function () {
        var _this = this;
        this.http.get('api/staff')
            .subscribe(function (result) {
            _this.staffs = result;
            console.log('get the data sarrr ' + _this.staffs);
            _this.UpdatedStaff.next(_this.staffs.slice());
        });
    };
    StaffService.prototype.getStaffOne = function (id) {
        return this.http.get('api/findstaff/' + id);
    };
    StaffService.prototype.updatePost = function (staffDetail, id, image) {
        var _this = this;
        var staffData;
        if (typeof image === 'object') {
            staffData = new FormData();
            staffData.append('name', staffDetail.value.name);
            staffData.append('phoneNumber', staffDetail.value.phoneNumber);
            staffData.append('gender', staffDetail.value.gender);
            staffData.append('address', staffDetail.value.address);
            staffData.append('description', staffDetail.value.description);
            staffData.append('profile', staffDetail.value.profile);
            staffData.append('date', staffDetail.value.date);
            staffData.append('salary', staffDetail.value.salary);
            staffData.append('image', image);
        }
        else {
            staffData = {
                _id: id,
                name: staffDetail.value.name,
                phoneNumber: staffDetail.value.phoneNumber,
                gender: staffDetail.value.gender,
                address: staffDetail.value.address,
                description: staffDetail.value.description,
                profile: staffDetail.value.profile,
                date: staffDetail.value.date,
                salary: staffDetail.value.salary,
                imagePath: image,
                salaryStatus: null
            };
        }
        this.http.put('api/editstaff/' + id, staffData)
            .subscribe(function (response) {
            var updatedStaff = _this.staffs.slice();
            var oldPostIndex = updatedStaff.findIndex(function (p) { return p._id === id; });
            var staff = {
                _id: id,
                name: staffDetail.value.name,
                phoneNumber: staffDetail.value.phoneNumber,
                gender: staffDetail.value.gender,
                address: staffDetail.value.address,
                description: staffDetail.value.description,
                profile: staffDetail.value.profile,
                date: staffDetail.value.date,
                salary: staffDetail.value.salary,
                imagePath: '',
                salaryStatus: null
            };
            updatedStaff[oldPostIndex] = staff;
            _this.staffs = updatedStaff;
            _this.UpdatedStaff.next(_this.staffs.slice());
            _this.routs.navigate(['', 'dashboard', 'yourstaff']);
        });
    };
    StaffService.prototype.updateSalaryStatus = function (staffDetail, status, id) {
        var _this = this;
        var staffData;
        staffData = {
            _id: id,
            name: staffDetail.name,
            phoneNumber: staffDetail.phoneNumber,
            gender: staffDetail.gender,
            address: staffDetail.address,
            description: staffDetail.description,
            profile: staffDetail.profile,
            date: staffDetail.date,
            salary: staffDetail.salary,
            imagePath: staffDetail.imagePath,
            salaryStatus: status
        };
        console.log(staffData);
        this.http.put('api/editstaff/' + id, staffData)
            .subscribe(function (result) {
            console.log('here is response for the salary staus ' + result);
            var updatedStaff = _this.staffs.slice();
            var oldPostIndex = updatedStaff.findIndex(function (p) { return p._id === id; });
            var staff = {
                _id: id,
                name: staffDetail.name,
                phoneNumber: staffDetail.phoneNumber,
                gender: staffDetail.gender,
                address: staffDetail.address,
                description: staffDetail.description,
                profile: staffDetail.profile,
                date: staffDetail.date,
                salary: staffDetail.salary,
                imagePath: staffDetail.imagePath,
                salaryStatus: status
            };
            updatedStaff[oldPostIndex] = staff;
            _this.staffs = updatedStaff;
            _this.UpdatedStaff.next(_this.staffs.slice());
        });
    };
    StaffService.prototype.deleteStaff = function (staffId) {
        var _this = this;
        this.http.delete('api/deleteStaff/' + staffId)
            .subscribe(function () {
            var updatedStaff = _this.staffs.filter(function (staff) { return staff._id !== staffId; });
            console.log(updatedStaff);
            _this.staffs = updatedStaff;
            _this.UpdatedStaff.next(_this.staffs.slice());
        });
    };
    StaffService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/staff/your-staff/your-staff.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.menu-bar {\r\n  position: absolute;\r\n  right: 60px;\r\n\r\n  color: rgb(255, 255, 255);\r\n  background-color: #ff4081;\r\n}\r\n.table-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  position: relative;\r\n}\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.no-data {\r\n  text-align: center;\r\n  color: #ff4081;\r\n  font-family: Arial;\r\n  font-size: 13px\r\n}\r\n.mat-cell{\r\n  font-family: sans-serif;\r\n  font-size: 11px;\r\n}\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/staff/your-staff/your-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <div class=\"menu-bar\">\n    <button mat-raised-button class=\"float\" color=\"accent\" (click)=\"saveBtnHandler()\" >\n      Add Staff <mat-icon>add_circle_outline</mat-icon>\n    </button>\n  </div>\n</mat-toolbar>\n\n\n<div class=\"table-container mat-elevation-z8\" >\n  <div class=\"mat-elevation-z8\">\n    <div class=\"loading-shade\" *ngIf=\"isResultsLoading\">\n      <mat-spinner color=\"accent\" *ngIf=\"isResultsLoading\"></mat-spinner>\n    </div>\n  </div>\n\n  <mat-form-field>\n      <input class = \"input-class\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search here...\">\n    </mat-form-field>\n  <mat-table #table [dataSource]=\"dataSource\" matSort >\n\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"> {{data.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PhoneNumber\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">{{data.phoneNumber}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Profile\">\n      <mat-header-cell *matHeaderCellDef> Profile </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"> {{data.profile}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let invoice\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button  mat-menu-item (click)= \"onEdit(invoice._id)\" >\n            <mat-icon style=\"font-size: 15px\">edit</mat-icon>\n            <span style=\"font-family: Arial; font-size: 11px;\">Edit</span>\n          </button>\n          <!-- <div *ngFor=\"let item of staffData._id\"> -->\n          <button mat-menu-item (click)=\"onDelete(invoice._id)\">\n            <mat-icon style=\"font-size: 15px\" >delete</mat-icon>\n            <span  style=\"font-family: Arial; font-size: 11px;\" >Delete</span>\n          </button>\n        <!-- </div> -->\n        </mat-menu>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <mat-paginator #paginator\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 20]\"\n  [showFirstLastButtons]=\"true\">\n</mat-paginator>\n\n  <p class=\"no-data\" *ngIf=\"staffData.length === 0\" > No Staff Added !!! </p>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/staff/your-staff/your-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourStaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_service__ = __webpack_require__("./src/app/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YourStaffComponent = /** @class */ (function () {
    function YourStaffComponent(router, staffService, snackBar) {
        this.router = router;
        this.staffService = staffService;
        this.snackBar = snackBar;
        this.StaffSub = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.displayedColumns = ['Name', 'PhoneNumber', 'Profile', 'Action'];
        this.staffData = [];
        this.isResultsLoading = false;
    }
    YourStaffComponent.prototype.saveBtnHandler = function () {
        this.router.navigate(['dashboard', 'add-staff']);
    };
    YourStaffComponent.prototype.onEdit = function (id) {
        this.router.navigate(['dashboard', 'add-staff', id]);
    };
    YourStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isResultsLoading = true;
        this.staffService.getStaff();
        this.staffService.getStaffUpdateListener().subscribe(function (result) {
            _this.staffData = result;
            console.log(_this.dataSource);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTableDataSource */](_this.staffData);
            _this.dataSource.paginator = _this.paginator;
            _this.isResultsLoading = false;
        });
    };
    YourStaffComponent.prototype.ngOnDestroy = function () {
        this.StaffSub.unsubscribe();
    };
    YourStaffComponent.prototype.onDelete = function (id) {
        this.staffService.deleteStaff(id);
        //   this.staffService.getStaffUpdateListener().subscribe(result => {
        //     this.staffData = result;
        //     console.log(this.dataSource);
        //     console.log("result"+result);
        //     this.dataSource = new MatTableDataSource(this.staffData);
        //     this.dataSource.paginator = this.paginator;
        // });
        this.snackBar.open('Deleted', 'ok', {
            duration: 2000,
        });
        console.log('triggered delete wit id' + id);
    };
    YourStaffComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        console.log(filterValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatPaginator */])
    ], YourStaffComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */])
    ], YourStaffComponent.prototype, "sort", void 0);
    YourStaffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-your-staff',
            template: __webpack_require__("./src/app/staff/your-staff/your-staff.component.html"),
            styles: [__webpack_require__("./src/app/staff/your-staff/your-staff.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]])
    ], YourStaffComponent);
    return YourStaffComponent;
}());



/***/ }),

/***/ "./src/app/stock/add-stock/add-stock.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.button{\r\n  background-color: #ff4081;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 20%;\r\n  height: 30px;\r\n  font-size: 13px;\r\ntext-align: center;\r\nline-height: 0px !important;\r\npadding: 12px 10px 10px 10px !important\r\n\r\n}\r\n\r\n.form-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card {\r\n  width: 80%;\r\n}\r\n\r\n.btn-class{\r\n  width: 150px;\r\n  text-align: center;\r\nmargin: auto;\r\n-ms-flex-line-pack: center;\r\n    align-content: center\r\n\r\n}\r\n\r\n.hide {\r\n  visibility: hidden;\r\n}\r\n\r\n.imagePreview{\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.imagePreview img {\r\n  height: 100%;\r\n\r\n}\r\n\r\n.div-class {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/stock/add-stock/add-stock.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form class=\"form-container\" [formGroup] = \"stockInformation\" (ngSubmit)= \"onSubmit(formDirective)\" #formDirective=\"ngForm\">\n  <mat-card-header>\n      <mat-card-title>Stock Information</mat-card-title>\n  </mat-card-header>\n\n      <mat-card-content>\n        <div class=\"example-container\" style=\"font-size: 12px; font-family: Arial;\">\n\n          <mat-form-field>\n            <input matInput placeholder=\"Product Name*\" formControlName=\"productName\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Product Quantity*\" formControlName=\"productQuantity\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Category*\" formControlName=\"productCategory\"  [(ngModel)]=\"category\" >\n              <mat-option   *ngFor=\"let category of categories\" [value]=\"category\" >{{category}}</mat-option>\n            </mat-select>\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n          <div class=\"div-class\" *ngIf=\"category && subcategories?.length > 0\">\n          <mat-form-field>\n              <mat-select  placeholder=\"Sub Category\"   [(ngModel)]=\"subcategory\" formControlName=\"productSubCategory\">\n                <mat-option  *ngFor=\"let subCategory of subcategories\" [value]='subCategory'  >{{subCategory}}</mat-option>\n              </mat-select>\n               </mat-form-field></div>\n\n          <mat-form-field>\n            <textarea matInput placeholder=\"Product Description ( if any )\" formControlName=\"productDescription\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date*\" formControlName=\"productDate\">\n            <mat-error>\n                this field is required\n            </mat-error>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Product Code*\" formControlName=\"productCode\">\n            <mat-error>\n                this field is required\n            </mat-error>\n          </mat-form-field>\n           </div>\n\n      </mat-card-content>\n      <mat-card-actions>\n        <div>\n          <button mat-stroked-button color=\"accent\" type = \"button\" (click) = \"filePicker.click()\">pick img</button>\n            <input class=\"hide\" type=\"file\" #filePicker (change)=\"onFileUpload($event)\">\n            <div class='imagePreview' *ngIf=\"imagePreview!== '' && imagePreview && stockInformation.get('image').valid\">\n            <img [src]=\"imagePreview\">\n          </div>\n          <p *ngIf=\"!imagePreview && isImage === 'false'\" style=\"font-size: 11px; color: red;\">   this field is required</p>\n        </div>\n        <div class=\"btn-class\">\n          <button class=\"button\" mat-raised-button color=\"primary\" type=\"submit\">submit\n\n\n          </button>\n        </div>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/stock/add-stock/add-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mime_type_validator__ = __webpack_require__("./src/app/mime-type.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddStockComponent = /** @class */ (function () {
    function AddStockComponent(stockService, routs, snackBar) {
        this.stockService = stockService;
        this.routs = routs;
        this.snackBar = snackBar;
        this.categoryData = [];
        this.stockData = [];
        this.map = new Map();
        this.subCategoryData = null;
        this.categorySub = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"]();
        this.mode = 'create';
        this.isImage = 'true';
    }
    AddStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockInformation = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            productName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            productQuantity: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            productCategory: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            productSubCategory: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            productDescription: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            productDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            productCode: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            image: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', { validators: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required], asyncValidators: [__WEBPACK_IMPORTED_MODULE_4__mime_type_validator__["a" /* mimeType */]] })
        });
        this.stockService.getCategory();
        this.stockService.updatedCategoryListener().
            subscribe(function (result) {
            _this.categoryData = result;
            result.forEach(function (value) {
                console.log(value);
                _this.map.set(value.category, value.subCategory);
            });
        });
        console.log(this.map);
        this.routs.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('stockId')) {
                _this.mode = 'edit';
                _this.stockId = paramMap.get('stockId');
                _this.stockService.getStockOne(_this.stockId).subscribe(function (stockData) {
                    console.log('here is stock data' + stockData);
                    console.log(stockData.productSubCategory);
                    if (stockData.productDescription) {
                        _this.description = stockData.productDescription;
                    }
                    else {
                        _this.description = '';
                    }
                    if (stockData.productSubCategory) {
                        _this.subcategory = stockData.productSubCategory;
                        _this.subCategoryCheck = stockData.productSubCategory;
                    }
                    else {
                        _this.subCategoryCheck = '';
                    }
                    console.log(_this.subCategoryCheck);
                    _this.stock = { _id: stockData._id, productName: stockData.productName, productQuantity: stockData.productQuantity,
                        productCategory: stockData.productCategory, productSubCategory: stockData.productSubCategory,
                        productDescription: stockData.productDescription, date: stockData.date, productCode: stockData.productCode,
                        imagePath: stockData.imagePath };
                    _this.stockInformation.setValue({
                        productName: _this.stock.productName,
                        productQuantity: _this.stock.productQuantity,
                        productCategory: _this.stock.productCategory,
                        productSubCategory: _this.subCategoryCheck,
                        productDescription: _this.description,
                        productDate: _this.stock.date,
                        productCode: _this.stock.productCode,
                        image: _this.stock.imagePath,
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.stockId = null;
            }
        });
    };
    Object.defineProperty(AddStockComponent.prototype, "categories", {
        get: function () {
            return Array.from(this.map.keys());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddStockComponent.prototype, "subcategories", {
        get: function () {
            return this.map.get(this.category);
        },
        enumerable: true,
        configurable: true
    });
    AddStockComponent.prototype.ngOnDestroy = function () {
        this.categorySub.unsubscribe();
    };
    AddStockComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.stockInformation.patchValue({ image: file });
        this.stockInformation.get('image').updateValueAndValidity();
        var render = new FileReader();
        render.onload = function () {
            _this.imagePreview = render.result;
        };
        render.readAsDataURL(file);
        console.log(file);
    };
    AddStockComponent.prototype.onSubmit = function (formDirective) {
        if (this.mode === 'create') {
            if (this.stockInformation.invalid) {
                this.isImage = 'false';
                return;
            }
            else {
                this.stockService.addPost(this.stockInformation, this.stockInformation.value.image);
                console.log('inside stock add' + this.stockInformation.value.productDate);
                this.snackBar.open('Added', 'ok', {
                    duration: 2000,
                });
            }
            formDirective.resetForm();
            this.stockInformation.reset();
        }
        else {
            this.stockService.updatePost(this.stockInformation, this.stockId, this.stockInformation.value.image);
            this.snackBar.open('Updated', 'ok', {
                duration: 2000,
            });
        }
    };
    AddStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-stock',
            template: __webpack_require__("./src/app/stock/add-stock/add-stock.component.html"),
            styles: [__webpack_require__("./src/app/stock/add-stock/add-stock.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatSnackBar */]])
    ], AddStockComponent);
    return AddStockComponent;
}());



/***/ }),

/***/ "./src/app/stock/category/category.component.css":
/***/ (function(module, exports) {

module.exports = ".form  {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.form > * {\r\n  width: 100%;\r\n}\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.mat-card {\r\n  width: 80%;\r\n\r\n\r\n}\r\n.button{\r\n  background-color: #ff4081;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 20%;\r\n  height: 30px;\r\n  font-size: 13px;\r\ntext-align: center;\r\nline-height: 0px !important;\r\npadding: 12px 10px 10px 10px !important\r\n\r\n}\r\n.btn-class{\r\n  width: 150px;\r\n  text-align: center;\r\nmargin: auto;\r\n-ms-flex-line-pack: center;\r\n    align-content: center\r\n\r\n}\r\nmat-chip{\r\n  display: inline-block;\r\n}\r\nmat-chip-list {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n\r\n}\r\n.a {\r\n  /* background-color: #ff4081; */\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  width: 40%;\r\n  color: #ff4081;\r\n  height: 1%;\r\n  line-height: 0px !important;\r\npadding: 12px 10px 10px 10px !important;\r\ndisplay: block;\r\ncursor: pointer;\r\n  /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); */\r\n}\r\n.show {\r\n\r\n  font-size: 12px;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  margin: auto;\r\n  color: \t#787878;\r\n\r\n\r\n}\r\n.show-title {\r\n\r\n  font-size: 14px;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  margin: auto;\r\n\r\n\r\n}\r\n.panel > * {\r\n  margin: auto;\r\n  width: 100%\r\n}\r\nmat-accordion {\r\n  width: 100%;\r\n}\r\n.mat-icon {\r\n  font-size: 12px;\r\n}\r\n.delete {\r\n  position: absolute;\r\n  right: 80px;\r\n  font-size: 20px;\r\n\r\n}\r\n.example-tooltip-red {\r\n  background: #b71c1c;\r\n}\r\n/* .mat-chip-class {\r\nbackground-color: #b71c1c;\r\n} */\r\n.mat-chip:not(.mat-basic-chip) {\r\n  background-color: #ff4081;\r\n\r\n  /* color: rgba(0,0,0,.87); */\r\n  color: white\r\n}\r\n"

/***/ }),

/***/ "./src/app/stock/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n<mat-card>\n    <mat-card-header>\n        <mat-card-title>Add New Categories</mat-card-title>\n    </mat-card-header>\n<form class=\"form\" [formGroup]=\"categoryForm\" (ngSubmit) = \"onSubmit(formDirective)\" #formDirective=\"ngForm\">\n  <mat-card-content>\n      <div class=\"example-container\" style=\"font-size: 12px; font-family: Arial;\">\n  <mat-form-field>\n<input matInput formControlName=\"category\" placeholder=\"category\"/>\n</mat-form-field>\n\n<mat-form-field>\n<input matInput #newCat\n(keyup.enter)=\"addSub(newCat.value)\"\n(blur)=\"addSub(newCat.value); newCat.value='' \" placeholder=\"subCategory\" >\n</mat-form-field>\n<mat-card-actions>\n<div  class = \"a\" (click) = \"addSub(newCat.value)\" >Add more sub categories</div>\n</mat-card-actions>\n<br>\n<div>\n    <mat-chip-list  aria-label=\"sub category\"> <div class=\"mat-chip-class\">  <mat-chip  *ngFor=\"let subCategory of subCategory\" > {{subCategory}}\n        <mat-icon (click)=\"remove(subCategory)\">cancel</mat-icon> </mat-chip></div></mat-chip-list>\n</div>\n</div>\n</mat-card-content>\n<div class=\"btn-class\">\n<mat-card-actions>\n\n<button class=\"button\" mat-raised-button color=\"accent\" type=\"submit\">submit</button>\n</mat-card-actions>\n</div>\n</form>\n\n</mat-card>\n<br>\n\n<mat-card>\n<div class=\"panel\">\n    <mat-card-header>\n        <mat-card-title>Your Saved Categories</mat-card-title>\n    </mat-card-header>\n<mat-accordion  >\n    <mat-expansion-panel class=\"show\" *ngFor=\"let categories of result\" (opened)=\"panelOpenState = true\"\n    (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header >\n<mat-panel-title class=\"show-title\">\n{{categories.category}}<mat-icon class=\"delete\" (click) = \"onDelete(categories.category)\"  matTooltip=\"Delete Your category\" matTooltipClass=\"example-tooltip-red\">delete_outline</mat-icon >\n</mat-panel-title>\n\n</mat-expansion-panel-header>\n<p class=\"show\" *ngFor=\"let index of categories.subCategory\"> <mat-icon>subdirectory_arrow_right</mat-icon>{{index}}</p>\n</mat-expansion-panel>\n\n  </mat-accordion>\n</div>\n</mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/stock/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(stockService) {
        this.stockService = stockService;
        this.CategorySub = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"]();
        this.category = '';
        this.subCategory = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
            subCategory: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]),
        });
        this.stockService.getCategory();
        this.stockService.updatedCategoryListener().
            subscribe(function (result) {
            _this.result = result;
            console.log(_this.result);
        });
    };
    CategoryComponent.prototype.remove = function (subCategory) {
        var index = this.subCategory.indexOf(subCategory);
        if (index > -1) {
            this.subCategory.splice(index, 1);
        }
    };
    CategoryComponent.prototype.onClick = function () {
    };
    CategoryComponent.prototype.addSub = function (newCat) {
        if (newCat) {
            this.subCategory.push(newCat);
        }
        console.log(this.subCategory);
    };
    CategoryComponent.prototype.onSubmit = function (formDirective) {
        this.stockService.addCategory(this.categoryForm.value.category, this.subCategory);
        this.subCategory = [];
        formDirective.resetForm();
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.CategorySub.unsubscribe();
    };
    CategoryComponent.prototype.onDelete = function (category) {
        this.stockService.deleteCategory(category);
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("./src/app/stock/category/category.component.html"),
            styles: [__webpack_require__("./src/app/stock/category/category.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockService = /** @class */ (function () {
    function StockService(http, routs) {
        this.http = http;
        this.routs = routs;
        this.categories = [];
        this.updatedCategory = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.stocks = [];
        this.UpdatedStock = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    StockService.prototype.updatedCategoryListener = function () {
        return this.updatedCategory.asObservable();
    };
    StockService.prototype.addCategory = function (category, subcategory) {
        var _this = this;
        var categories = {
            category: category,
            subCategory: subcategory
        };
        this.http.post('api/addcategory', categories)
            .subscribe(function (result) {
            console.log(result);
            var CategoriesUpdates = {
                category: category,
                subCategory: subcategory
            };
            _this.categories.push(CategoriesUpdates);
            _this.updatedCategory.next(_this.categories.slice());
        });
    };
    StockService.prototype.getCategory = function () {
        var _this = this;
        this.http.get('api/getcategory').
            subscribe(function (result) {
            _this.categories = result;
            _this.updatedCategory.next(_this.categories.slice());
        });
    };
    StockService.prototype.findOneCategory = function (category) {
        return this.http.get('api/getcategory/' + category);
    };
    StockService.prototype.deleteCategory = function (category) {
        var _this = this;
        this.http.delete('api/deletecategory/' + category)
            .subscribe(function () {
            var updatedCategory = _this.categories.filter(function (staff) { return staff.category !== category; });
            console.log(updatedCategory);
            _this.categories = updatedCategory;
            _this.updatedCategory.next(_this.categories.slice());
        });
    };
    StockService.prototype.getStockUpdateListener = function () {
        return this.UpdatedStock.asObservable();
    };
    StockService.prototype.addPost = function (stockDetail, image) {
        var _this = this;
        var stockData = new FormData();
        stockData.append('productName', stockDetail.value.productName);
        stockData.append('productQuantity', stockDetail.value.productQuantity);
        stockData.append('productCategory', stockDetail.value.productCategory);
        stockData.append('productSubCategory', stockDetail.value.productSubCategory);
        stockData.append('productDescription', stockDetail.value.productDescription);
        stockData.append('date', stockDetail.value.productDate);
        stockData.append('productCode', stockDetail.value.productCode);
        stockData.append('image', image, stockDetail.value.productName);
        console.log(image);
        console.log('inside stock service for add ' + stockDetail.value.productDate);
        // const staff: StaffModel = {
        //                            _id: null,
        //                            name: staffDetail.value.name,
        //                            phoneNumber: staffDetail.value.phoneNumber,
        //                            gender: staffDetail.value.gender,
        //                            address: staffDetail.value.address,
        //                            description: staffDetail.value.description,
        //                            profile: staffDetail.value.profile,
        //                            date: staffDetail.value.date,
        //                            salary: staffDetail.value.salary
        //                           };
        this.http.post('api/stock', stockData)
            .subscribe(function (res) {
            var stock = {
                _id: res.result,
                productName: stockDetail.value.productName,
                productQuantity: stockDetail.value.productQuantity,
                productCategory: stockDetail.value.productCategory,
                productSubCategory: stockDetail.value.productSubCategory,
                productDescription: stockDetail.value.productDescription,
                date: stockDetail.value.date,
                productCode: stockDetail.value.productCode,
                imagePath: res.imagePath,
            };
            _this.stocks.push(stock);
            _this.UpdatedStock.next(_this.stocks.slice());
            console.log('here is your responses' + res.result);
        });
    };
    StockService.prototype.getStock = function () {
        var _this = this;
        this.http.get('api/stock')
            .subscribe(function (result) {
            _this.stocks = result;
            console.log('get the data sarrr ' + _this.stocks);
            _this.UpdatedStock.next(_this.stocks.slice());
        });
    };
    StockService.prototype.getStockOne = function (id) {
        return this.http.get('api/findstock/' + id);
    };
    StockService.prototype.updatePost = function (stockDetail, id, image) {
        var _this = this;
        var stockData;
        if (typeof image === 'object') {
            stockData = new FormData();
            stockData.append('productName', stockDetail.value.productName);
            stockData.append('productQuantity', stockDetail.value.productQuantity);
            stockData.append('productCategory', stockDetail.value.productCategory);
            stockData.append('productSubCategory', stockDetail.value.productSubCategory);
            stockData.append('productDescription', stockDetail.value.productDescription);
            stockData.append('date', stockDetail.value.productDate);
            stockData.append('productCode', stockDetail.value.productCode);
            stockData.append('image', image, stockDetail.value.productName);
            console.log(stockDetail.value.productDate);
        }
        else {
            stockData = {
                _id: id,
                productName: stockDetail.value.productName,
                productQuantity: stockDetail.value.productQuantity,
                productCategory: stockDetail.value.productCategory,
                productSubCategory: stockDetail.value.productSubCategory,
                productDescription: stockDetail.value.productDescription,
                date: stockDetail.value.productDate,
                productCode: stockDetail.value.productCode,
                imagePath: image,
            };
        }
        this.http.put('api/editstock/' + id, stockData)
            .subscribe(function (response) {
            var updatedStock = _this.stocks.slice();
            var oldPostIndex = updatedStock.findIndex(function (p) { return p._id === id; });
            var stock = {
                _id: id,
                productName: stockDetail.value.productName,
                productQuantity: stockDetail.value.productQuantity,
                productCategory: stockDetail.value.productCategory,
                productSubCategory: stockDetail.value.productSubCategory,
                productDescription: stockDetail.value.productDescription,
                date: stockDetail.value.date,
                productCode: stockDetail.value.productCode,
                imagePath: '',
            };
            updatedStock[oldPostIndex] = stock;
            _this.stocks = updatedStock;
            _this.UpdatedStock.next(_this.stocks.slice());
            _this.routs.navigate(['', 'dashboard', 'yourStock']);
        });
    };
    // updateSalaryStatus(stockDetail: StocksModel , id: string) {
    //   let stockData: StocksModel;
    //   stockData  = {
    //     _id: id,
    //     productName: stockDetail.productName,
    //       productQuantity: stockDetail.productQuantity,
    //        productCategory: stockDetail.productCategory,
    //        productSubCategory: stockDetail.productSubCategory,
    //        productDescription: stockDetail.productDescription,
    //         date: stockDetail.date,
    //         productCode: stockDetail.productCode,
    //     imagePath: stockDetail.imagePath,
    //    };
    //    console.log(stockData)
    //  this.http.put('api/editstock/' + id, stockData)
    //  .subscribe ( result => {
    //      const updatedStock = [...this.stocks];
    //     const oldPostIndex = updatedStock.findIndex(p => p._id === id);
    //     const stock: StocksModel = {
    //       _id: id,
    //       productName: stockDetail.productName,
    //       productQuantity: stockDetail.productQuantity,
    //        productCategory: stockDetail.productCategory,
    //        productSubCategory: stockDetail.productSubCategory,
    //        productDescription: stockDetail.productDescription,
    //         date: stockDetail.date,
    //         productCode: stockDetail.productCode,
    //       imagePath: stockDetail.imagePath,
    //     };
    //     updatedStock[oldPostIndex] = stock;
    //     this.stocks = updatedStock;
    //     this.UpdatedStock.next([...this.stocks]);
    //  });
    // }
    StockService.prototype.deleteStock = function (stockId) {
        var _this = this;
        this.http.delete('api/deleteStock/' + stockId)
            .subscribe(function () {
            var updatedStaff = _this.stocks.filter(function (stock) { return stock._id !== stockId; });
            console.log(updatedStaff);
            _this.stocks = updatedStaff;
            _this.UpdatedStock.next(_this.stocks.slice());
        });
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/stock/your-stock/your-stock.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.menu-bar {\r\n  position: absolute;\r\n  right: 60px;\r\n\r\n  color: rgb(255, 255, 255);\r\n  background-color: #ff4081;\r\n}\r\n.table-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  position: relative;\r\n}\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.no-data {\r\n  text-align: center;\r\n  color: #ff4081;\r\n  font-family: Arial;\r\n  font-size: 10px\r\n}\r\n.mat-cell{\r\n  font-family: sans-serif;\r\n  font-size: 11px;\r\n}\r\n.mat-form-field {\r\n  font-size: 13px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n.avatar {\r\n  height: 80px;\r\n  padding: 10px;\r\n  max-width: 128px;\r\n  -webkit-transition: all 150ms ease-in-out;\r\n  transition: all 150ms ease-in-out;\r\n\r\n  width: 70px;\r\n}\r\n.avatar:hover {\r\n  height: 160px;\r\n  padding: 10px;\r\n  max-width: 128px;\r\n  -webkit-transition: all 150ms ease-in-out;\r\n  transition: all 150ms ease-in-out;\r\n  width: 140px;\r\n}\r\n.header {\r\n  padding: 5px;\r\n}\r\n.filter {\r\n  display: block;\r\n}\r\n.mat-option-text {\r\n  font-size: 13px;\r\n  width: 95%;\r\n  font-style: italic;\r\n  padding-left: 5px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n.options1 {\r\n  font-size: 11px;\r\n  size: 11px;\r\n\r\n}\r\n::ng-deep .cdk-overlay-pane {\r\n  /* Do you changes here */\r\n  font-size: 9rem;\r\n  font:lighter ;\r\n  color: #ff4081;\r\n  font-family: Arial, sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/stock/your-stock/your-stock.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar>\n  <div class=\"menu-bar\">\n    <button mat-raised-button class=\"float\" color=\"accent\" (click)=\"saveBtnHandler()\" >\n      Add Stock <mat-icon>add_circle_outline</mat-icon>\n    </button>\n  </div>\n</mat-toolbar>\n\n\n<div class=\"table-container mat-elevation-z8\">\n  <div class=\"mat-elevation-z8\">\n    <div class=\"loading-shade\" *ngIf=\"isResultsLoading\">\n      <mat-spinner color=\"accent\" *ngIf=\"isResultsLoading\"></mat-spinner>\n    </div>\n  </div>\n  <!-- <mat-form-field>\n      <input class = \"input-class\" [ngModel]=\"globalFilter\" matInput (ngModelChange)=\"applyFilter($event)\" placeholder=\"Search here...\">\n    </mat-form-field> -->\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort >\n\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    <ng-container matColumnDef=\"ProductImage\">\n      <mat-header-cell *matHeaderCellDef > Product Image </mat-header-cell>\n       <mat-cell *matCellDef=\"let data\"> <img [src]=\"data.imagePath\" class=\"avatar\" /></mat-cell>\n   </ng-container>\n    <ng-container matColumnDef=\"ProductName\">\n      <mat-header-cell *matHeaderCellDef> Product Name </mat-header-cell>\n\n\n      <mat-cell *matCellDef=\"let data\"> {{data.productName}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Quantity\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>  Quantity </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\">{{data.productQuantity}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Category\">\n      <mat-header-cell *matHeaderCellDef> Category\n        <div class=\"options\">\n              <mat-form-field class=\"example-full-width\">\n                  <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"categoryControl\"  [matAutocomplete]=\"auto\">\n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let category of categories\"   [value]=\"category\">\n                      {{category}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n        </div>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let data\"> {{data.productCategory}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"SubCategory\">\n        <mat-header-cell *matHeaderCellDef> Subcategory\n            <div class=\"options\">\n                <mat-form-field class=\"example-full-width\">\n                    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"subCategoryControl\"  [matAutocomplete]=\"auto\">\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                      <mat-option class=\"options\" *ngFor=\"let subCategory of subcategories\" [value]='subCategory' >\n                      <div class=\"options1\">  {{subCategory}}</div>\n                      </mat-option>\n                    </mat-autocomplete>\n                  </mat-form-field>\n          </div>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let data\"> {{data.productSubCategory}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Description\">\n          <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n          <mat-cell *matCellDef=\"let data\"> {{data.productDescription}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"ProductCode\">\n            <mat-header-cell *matHeaderCellDef> Product Code </mat-header-cell>\n            <mat-cell *matCellDef=\"let data\"> {{data.productCode}} </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"Date\">\n            <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n            <mat-cell *matCellDef=\"let data\"> {{data.date | date}} </mat-cell>\n          </ng-container>\n    <ng-container matColumnDef=\"Action\">\n      <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\n      <mat-cell *matCellDef=\"let invoice\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button  mat-menu-item (click)= \"onEdit(invoice._id)\" >\n            <mat-icon style=\"font-size: 15px\">edit</mat-icon>\n            <span style=\"font-family: Arial; font-size: 11px;\">Edit</span>\n          </button>\n          <!-- <div *ngFor=\"let item of staffData._id\"> -->\n          <button mat-menu-item (click)=\"onDelete(invoice._id)\">\n            <mat-icon style=\"font-size: 15px\" >delete</mat-icon>\n            <span  style=\"font-family: Arial; font-size: 11px;\" >Delete</span>\n          </button>\n        <!-- </div> -->\n        </mat-menu>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n  <mat-paginator #paginator\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 20]\"\n  [showFirstLastButtons]=\"true\">\n</mat-paginator>\n<p class=\"no-data\" *ngIf=\"stocks.length === 0\" > No Stock Added !!! </p>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/stock/your-stock/your-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YourStockComponent = /** @class */ (function () {
    function YourStockComponent(router, stockService, snackBar) {
        this.router = router;
        this.stockService = stockService;
        this.snackBar = snackBar;
        this.StockSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subscription"]();
        this.displayedColumns = ['ProductImage', 'ProductName', 'Quantity', 'Category', 'SubCategory', 'Description', 'ProductCode',
            'Date', 'Action'];
        this.isResultsLoading = false;
        this.stocks = [];
        this.categoryData = [];
        this.map = new Map();
        this.categoryControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('');
        this.subCategoryControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('');
        this.filterValues = {
            productCategory: '',
            productSubCategory: ''
        };
    }
    YourStockComponent.prototype.saveBtnHandler = function () {
        this.router.navigate(['dashboard', 'addStock']);
    };
    YourStockComponent.prototype.onEdit = function (id) {
        this.router.navigate(['dashboard', 'addStock', id]);
    };
    // ngOnInit
    YourStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isResultsLoading = true;
        this.stockService.getCategory();
        this.stockService.updatedCategoryListener().
            subscribe(function (result) {
            _this.categoryData = result;
            result.forEach(function (value) {
                console.log(value);
                _this.map.set(value.category, value.subCategory);
            });
        }, function (errorResponse) { console.log(errorResponse); });
        this.stockService.getStock();
        this.stockService.getStockUpdateListener().subscribe(function (result) {
            _this.stocks = result;
            console.log(_this.dataSource);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatTableDataSource */](_this.stocks);
            _this.dataSource.filterPredicate = _this.createFilter();
            _this.dataSource.paginator = _this.paginator;
            _this.isResultsLoading = false;
        });
        this.categoryControl.valueChanges
            .subscribe(function (category) {
            _this.filterValues.productCategory = category;
            console.log(category);
            // this.category = category;
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
            _this.categoryValue = category;
        });
        this.subCategoryControl.valueChanges
            .subscribe(function (subCategory) {
            _this.filterValues.productSubCategory = subCategory;
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
    };
    Object.defineProperty(YourStockComponent.prototype, "categories", {
        // get Categories
        get: function () {
            return Array.from(this.map.keys());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YourStockComponent.prototype, "subcategories", {
        // get subCategories
        get: function () {
            return this.map.get(this.categoryValue);
        },
        enumerable: true,
        configurable: true
    });
    // ngOnDestroy
    YourStockComponent.prototype.ngOnDestroy = function () {
        this.StockSub.unsubscribe();
    };
    // Delete stock
    YourStockComponent.prototype.onDelete = function (id) {
        this.stockService.deleteStock(id);
        this.snackBar.open('Deleted', 'ok', {
            duration: 2000,
        });
        console.log('triggered delete wit id' + id);
    };
    // filter
    YourStockComponent.prototype.createFilter = function () {
        var filterFunction = function (data, filter) {
            var searchTerms = JSON.parse(filter);
            return data.productCategory.toLowerCase().indexOf(searchTerms.productCategory) !== -1
                && data.productSubCategory.toString().toLowerCase().indexOf(searchTerms.productSubCategory) !== -1;
        };
        return filterFunction;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatPaginator */])
    ], YourStockComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */])
    ], YourStockComponent.prototype, "sort", void 0);
    YourStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-your-stock',
            template: __webpack_require__("./src/app/stock/your-stock/your-stock.component.html"),
            styles: [__webpack_require__("./src/app/stock/your-stock/your-stock.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBar */]])
    ], YourStockComponent);
    return YourStockComponent;
}());



/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".sidenav-toggle {\r\n  display: none;\r\n  padding: 0;\r\n  margin: 8px;\r\n  min-width: 56px;\r\n}\r\n@media (max-width: 720px) {\r\n  .sidenav-toggle {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n}\r\n.sidenav-toggle mat-icon {\r\n  font-size: 30px;\r\n  height: 56px;\r\n  width: 56px;\r\n  line-height: 56px;\r\n  color: white;\r\n}\r\n.my-toolbar{\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top: 0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n.icon-display {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n"

/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"height: 50px; font-size: 13px; font-family: sans-serif;\" color=\"accent\" class=\"my-toolbar\">\n  <button mat-button (click) = \"toggleSidenav.emit()\"\n  class=\"sidenav-toggle\">\n   <mat-icon>\n     menu\n   </mat-icon>\n  </button>\n <span>Welcome <span>{{userId}}</span></span>\n <div style=\"position: absolute; right: 100px; ;\"><button style=\"text-align: center;\" mat-button [routerLink]=\"['/dashboard/home']\" routerLinkActive=\"router-link-active\"  ><mat-icon class=\"icon-display\">home</mat-icon> Home</button></div>\n <div  style=\"position: absolute; right: 30px;\" ><button  mat-button  (click)=\"logoutUser()\">Logout</button></div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/tool-bar/tool-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_services_auth_service__ = __webpack_require__("./src/app/auth/auth-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent(authService) {
        this.authService = authService;
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ToolBarComponent.prototype.ngOnInit = function () {
        this.userId = this.authService.UserId();
    };
    ToolBarComponent.prototype.logoutUser = function () {
        this.authService.logOutUser();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ToolBarComponent.prototype, "toggleSidenav", void 0);
    ToolBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tool-bar',
            template: __webpack_require__("./src/app/tool-bar/tool-bar.component.html"),
            styles: [__webpack_require__("./src/app/tool-bar/tool-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_services_auth_service__["a" /* AuthService */]])
    ], ToolBarComponent);
    return ToolBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map