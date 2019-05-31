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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>StarWars</h1>\n\n<div class=\"links\">\n  <nav class=\"navigation\">\n    <a routerLink=\"/films\" class=\"navigation-item\">films</a>\n    <a routerLink=\"/people\" class=\"navigation-item\">people</a>\n    <a routerLink=\"/planets\" class=\"navigation-item\">planets</a>\n    <a routerLink=\"/species\" class=\"navigation-item\">species</a>\n    <a routerLink=\"/starships\" class=\"navigation-item\">starships</a>\n    <a routerLink=\"/vehicles\" class=\"navigation-item\">vehicles</a>\n  </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".links {\n  display: flex;\n  justify-content: center; }\n\nh1 {\n  text-align: center; }\n\n.navigation {\n  display: flex;\n  width: 100%;\n  justify-content: space-around; }\n\n.navigation-item {\n    text-decoration: none;\n    color: #000;\n    text-transform: capitalize; }\n\n.navigation-item:hover {\n      text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCLEVBQUE7O0FBRTdCO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCwwQkFBMEIsRUFBQTs7QUFIM0I7TUFNRywwQkFBMEIsRUFBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICYtaXRlbSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-starwars-app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _films_films_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./films/films.component */ "./src/app/films/films.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _planets_planets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planets/planets.component */ "./src/app/planets/planets.component.ts");
/* harmony import */ var _species_species_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./species/species.component */ "./src/app/species/species.component.ts");
/* harmony import */ var _starships_starships_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./starships/starships.component */ "./src/app/starships/starships.component.ts");
/* harmony import */ var _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicles/vehicles.component */ "./src/app/vehicles/vehicles.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
















var appRoutes = [
    { path: 'films', component: _films_films_component__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"] },
    { path: 'planets', component: _planets_planets_component__WEBPACK_IMPORTED_MODULE_10__["PlanetsComponent"] },
    { path: 'species', component: _species_species_component__WEBPACK_IMPORTED_MODULE_11__["SpeciesComponent"] },
    { path: 'starships', component: _starships_starships_component__WEBPACK_IMPORTED_MODULE_12__["StarshipsComponent"] },
    { path: 'vehicles', component: _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_13__["VehiclesComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _films_films_component__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"],
                _planets_planets_component__WEBPACK_IMPORTED_MODULE_10__["PlanetsComponent"],
                _species_species_component__WEBPACK_IMPORTED_MODULE_11__["SpeciesComponent"],
                _starships_starships_component__WEBPACK_IMPORTED_MODULE_12__["StarshipsComponent"],
                _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_13__["VehiclesComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/films/films.component.html":
/*!********************************************!*\
  !*** ./src/app/films/films.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Films</h1>\n<input type=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"film\" *ngFor=\"let film of films | search: searchString\">\n    <h2 class=\"film-title\">{{film.title}}</h2>\n    <p class=\"film-episode\">ID: {{film.episode_id}}</p>\n    <p class=\"film-director\">Director: {{film.director}}</p>\n    <p class=\"film-producer\">Producer: {{film.producer}}</p>\n    <p class=\"film-release\">Date of release:{{film.release_date}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/films/films.component.scss":
/*!********************************************!*\
  !*** ./src/app/films/films.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.film {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px;\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: center;\n  padding: 10px;\n  max-width: 200px; }\n\n.film-title {\n    font-size: 17px;\n    font-weight: normal; }\n\n.film-episode {\n    font-size: 10px; }\n\n.film-director {\n    font-size: 14px; }\n\n.film-producer {\n    font-size: 14px; }\n\n.film-release {\n    font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvZmlsbXMvZmlsbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFaEI7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0lBQ0UsZUFBZSxFQUFBOztBQUdqQjtJQUNFLGVBQWUsRUFBQTs7QUFFakI7SUFDRSxlQUFlLEVBQUE7O0FBRWpCO0lBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6ImZpbG1zL2ZpbG1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuXG4gICYtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgJi1lcGlzb2RlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAmLWRpcmVjdG9yIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgJi1wcm9kdWNlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICYtcmVsZWFzZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/films/films.component.ts":
/*!******************************************!*\
  !*** ./src/app/films/films.component.ts ***!
  \******************************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _films_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./films.service */ "./src/app/films/films.service.ts");



var FilmsComponent = /** @class */ (function () {
    function FilmsComponent(service) {
        this.service = service;
        this.films = [];
        this.searchString = '';
    }
    FilmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getData('films')
            .subscribe(function (resp) {
            console.log(resp);
            _this.films = resp;
        });
    };
    FilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-films',
            template: __webpack_require__(/*! ./films.component.html */ "./src/app/films/films.component.html"),
            providers: [_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"]],
            styles: [__webpack_require__(/*! ./films.component.scss */ "./src/app/films/films.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"]])
    ], FilmsComponent);
    return FilmsComponent;
}());



/***/ }),

/***/ "./src/app/films/films.service.ts":
/*!****************************************!*\
  !*** ./src/app/films/films.service.ts ***!
  \****************************************/
/*! exports provided: FilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsService", function() { return FilmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FilmsService = /** @class */ (function () {
    function FilmsService(http) {
        this.http = http;
    }
    FilmsService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (film) {
                return {
                    title: film.title,
                    episode_id: film.episode_id,
                    opening_crawl: film.opening_crawl,
                    director: film.director,
                    producer: film.producer,
                    release_date: film.release_date,
                    characters: film.characters,
                    planets: film.planets,
                    starships: film.starships,
                    vehicles: film.vehicles,
                    species: film.species,
                    created: film.created,
                    edited: film.edited,
                    url: film.url
                };
            })
                .sort(function (el1, el2) {
                if (el1.title < el2.title) {
                    return -1;
                }
                else if (el1.title > el2.title) {
                    return 1;
                }
            });
        }));
    };
    FilmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmsService);
    return FilmsService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  I don't know this page!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>People</h1>\n<input type=\"search\" [(ngModel)]=\"str\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"actor\" *ngFor=\"let actor of people | search: str\">\n    <h2 class=\"actor-name\">Name: {{actor.name}}</h2>\n    <p class=\"actor-height\">Height: {{actor.height}}</p>\n    <p class=\"actor-mass\">Mass: {{actor.mass}}</p>\n    <p class=\"actor-hair_color\">Hair: {{actor.hair_color}}</p>\n    <p class=\"actor-skin_color\">Skin: {{actor.skin_color}}</p>\n    <p class=\"actor-eye_color\">Eyes: {{actor.eye_color}}</p>\n    <p class=\"actor-birth_year\">Birthday: {{actor.birth_year}}</p>\n    <p class=\"actor-gender\">Gender: {{actor.gender}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/people/people.component.scss":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.actor {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  min-width: 250px;\n  margin: 20px;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px; }\n\n.actor-name {\n    font-size: 17px;\n    font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUNiO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQixFQUFBIiwiZmlsZSI6InBlb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgJi1uYW1lIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people.service */ "./src/app/people/people.service.ts");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(service) {
        this.service = service;
        this.people = [];
        this.str = '';
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getData('people')
            .subscribe(function (resp) {
            _this.people = resp;
            console.log(_this.people);
        });
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            providers: [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]],
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/people/people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/people/people.service.ts":
/*!******************************************!*\
  !*** ./src/app/people/people.service.ts ***!
  \******************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (people) {
                return {
                    name: people.name,
                    height: people.height,
                    mass: people.mass,
                    hair_color: people.hair_color,
                    skin_color: people.skin_color,
                    eye_color: people.eye_color,
                    birth_year: people.birth_year,
                    gender: people.gender,
                    homeworld: people.homeworld,
                    films: people.films,
                    species: people.species,
                    vehicles: people.vehicles,
                    starships: people.starships,
                    created: people.created,
                    edited: people.edited,
                    url: people.url
                };
            })
                .sort(function (el1, el2) {
                if (el1.name < el2.name) {
                    return -1;
                }
                else if (el1.name > el2.name) {
                    return 1;
                }
            });
        }));
    };
    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/planets/planets.component.html":
/*!************************************************!*\
  !*** ./src/app/planets/planets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Planets</h1>\n<input type=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"planet\" *ngFor=\"let planet of planets | search: searchString\">\n    <h2 class=\"planet-name\">Name: {{planet.name}}</h2>\n    <p class=\"planet-orbital_period\">Period: {{planet.orbital_period}}</p>\n    <p class=\"planet-diameter\">Diameter: {{planet.diameter}}</p>\n    <p class=\"planet-climate\">Climate: {{planet.climate}}</p>\n    <p class=\"planet-terrain\">Terrain: {{planet.terrain}}</p>\n    <p class=\"planet-population\">Population: {{planet.population}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/planets/planets.component.scss":
/*!************************************************!*\
  !*** ./src/app/planets/planets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.planet {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 20px;\n  padding: 10px;\n  min-width: 250px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvcGxhbmV0cy9wbGFuZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJwbGFuZXRzL3BsYW5ldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wbGFuZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/planets/planets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/planets/planets.component.ts ***!
  \**********************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets.service */ "./src/app/planets/planets.service.ts");



var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(service) {
        this.service = service;
        this.planets = [];
        this.searchString = '';
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getData('planets')
            .subscribe(function (resp) {
            console.log(resp);
            _this.planets = resp;
        });
    };
    PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planets',
            template: __webpack_require__(/*! ./planets.component.html */ "./src/app/planets/planets.component.html"),
            providers: [_planets_service__WEBPACK_IMPORTED_MODULE_2__["PlanetsService"]],
            styles: [__webpack_require__(/*! ./planets.component.scss */ "./src/app/planets/planets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planets_service__WEBPACK_IMPORTED_MODULE_2__["PlanetsService"]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "./src/app/planets/planets.service.ts":
/*!********************************************!*\
  !*** ./src/app/planets/planets.service.ts ***!
  \********************************************/
/*! exports provided: PlanetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsService", function() { return PlanetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PlanetsService = /** @class */ (function () {
    function PlanetsService(http) {
        this.http = http;
    }
    PlanetsService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (planet) {
                return {
                    name: planet.name,
                    rotation_period: planet.rotation_period,
                    orbital_period: planet.orbital_period,
                    diameter: planet.diameter,
                    climate: planet.climate,
                    gravity: planet.gravity,
                    terrain: planet.terrain,
                    surface_water: planet.surface_water,
                    population: planet.population,
                    residents: planet.residents,
                    films: planet.films,
                    created: planet.created,
                    edited: planet.edited,
                    url: planet.url
                };
            })
                .sort(function (el1, el2) {
                if (el1.name < el2.name) {
                    return -1;
                }
                else if (el1.name > el2.name) {
                    return 1;
                }
            });
        }));
    };
    PlanetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanetsService);
    return PlanetsService;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, term) {
        if (term === void 0) { term = ''; }
        return value.filter(function (x) {
            if (x.name !== undefined && term !== undefined) {
                return x.name.toLowerCase().startsWith(term.toLowerCase());
            }
            else if (x.title !== undefined && term !== undefined) {
                return x.title.toLowerCase().startsWith(term.toLowerCase());
            }
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/species/species.component.html":
/*!************************************************!*\
  !*** ./src/app/species/species.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Species</h1>\n<input type=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"spec\" *ngFor=\"let spec of species | search: searchString\">\n    <h2 class=\"spec-name\">Name: {{spec.name}}</h2>\n    <p class=\"spec-classification\">Classification: {{spec.classification}}</p>\n    <p class=\"spec-designation\">Designation: {{spec.designation}}</p>\n    <p class=\"spec-average_height\">Average height: {{spec.average_height}}</p>\n    <p class=\"spec-skin_colors\">Skin: {{spec.skin_colors}}</p>\n    <p class=\"spec-hair_colors\">Hair: {{spec.hair_colors}}</p>\n    <p class=\"spec-eye_colors\">Eyes: {{spec.eye_colors}}</p>\n    <p class=\"spec-homeworld\">Eyes: {{spec.homeworld}}</p>\n    <p class=\"spec-language\">Eyes: {{spec.language}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/species/species.component.scss":
/*!************************************************!*\
  !*** ./src/app/species/species.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.spec {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px;\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: center; }\n\n.spec-name {\n    font-size: 17px;\n    font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvc3BlY2llcy9zcGVjaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUNsQjtJQUNFLGVBQWU7SUFDZixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcGVjaWVzL3NwZWNpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zcGVjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/species/species.component.ts":
/*!**********************************************!*\
  !*** ./src/app/species/species.component.ts ***!
  \**********************************************/
/*! exports provided: SpeciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesComponent", function() { return SpeciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _species_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./species.service */ "./src/app/species/species.service.ts");



var SpeciesComponent = /** @class */ (function () {
    function SpeciesComponent(service) {
        this.service = service;
        this.species = [];
        this.searchString = '';
    }
    SpeciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getData('species')
            .subscribe(function (resp) {
            _this.species = resp;
            console.log(_this.species);
        });
    };
    SpeciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-species',
            template: __webpack_require__(/*! ./species.component.html */ "./src/app/species/species.component.html"),
            styles: [__webpack_require__(/*! ./species.component.scss */ "./src/app/species/species.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_species_service__WEBPACK_IMPORTED_MODULE_2__["SpeciesService"]])
    ], SpeciesComponent);
    return SpeciesComponent;
}());



/***/ }),

/***/ "./src/app/species/species.service.ts":
/*!********************************************!*\
  !*** ./src/app/species/species.service.ts ***!
  \********************************************/
/*! exports provided: SpeciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesService", function() { return SpeciesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SpeciesService = /** @class */ (function () {
    function SpeciesService(http) {
        this.http = http;
    }
    SpeciesService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (species) {
                return {
                    name: species.name,
                    classification: species.classification,
                    designation: species.designation,
                    average_height: species.average_height,
                    skin_colors: species.skin_colors,
                    hair_colors: species.hair_colors,
                    eye_colors: species.eye_colors,
                    average_lifespan: species.average_lifespan,
                    homeworld: species.homeworld,
                    language: species.language,
                    people: species.people,
                    films: species.films,
                    created: species.created,
                    edited: species.edited,
                    url: species.url
                };
            })
                .sort(function (el1, el2) {
                if (el1.name < el2.name) {
                    return -1;
                }
                else if (el1.name > el2.name) {
                    return 1;
                }
            });
        }));
    };
    SpeciesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpeciesService);
    return SpeciesService;
}());



/***/ }),

/***/ "./src/app/starships/starships.component.html":
/*!****************************************************!*\
  !*** ./src/app/starships/starships.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Starships</h1>\n<input type=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"starship\" *ngFor=\"let starship of starShips | search: searchString \">\n    <h2 class=\"starship-name\">Name: {{starship.name}}</h2>\n    <p class=\"starship-model\">Model: {{starship.model}}</p>\n    <p class=\"starship-manufacturer\">Manufacturer: {{starship.manufacturer}}</p>\n    <p class=\"starship-cost_in_credits\">Cost in credits: {{starship.cost_in_credits}}</p>\n    <p class=\"starship-length\">Length: {{starship.length}}</p>\n    <p class=\"starship-max_atmosphering_speed\">Max atmosphering speed: {{starship.max_atmosphering_speed}}</p>\n    <p class=\"starship-crew\">Crew: {{starship.crew}}</p>\n    <p class=\"starship-passengers\">Passengers: {{starship.passengers}}</p>\n    <p class=\"starship-cargo_capacity\">Cargo capacity: {{starship.cargo_capacity}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/starships/starships.component.scss":
/*!****************************************************!*\
  !*** ./src/app/starships/starships.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.starship {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  max-width: 250px;\n  margin: 20px;\n  padding: 10px;\n  text-align: center;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvc3RhcnNoaXBzL3N0YXJzaGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzdGFyc2hpcHMvc3RhcnNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnN0YXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/starships/starships.component.ts":
/*!**************************************************!*\
  !*** ./src/app/starships/starships.component.ts ***!
  \**************************************************/
/*! exports provided: StarshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsComponent", function() { return StarshipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _starships_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starships.service */ "./src/app/starships/starships.service.ts");



var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(service) {
        this.service = service;
        this.starShips = [];
        this.searchString = '';
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .getData('starships')
            .subscribe(function (resp) {
            _this.starShips = resp;
            console.log(_this.starShips);
        });
    };
    StarshipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starships',
            template: __webpack_require__(/*! ./starships.component.html */ "./src/app/starships/starships.component.html"),
            styles: [__webpack_require__(/*! ./starships.component.scss */ "./src/app/starships/starships.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_starships_service__WEBPACK_IMPORTED_MODULE_2__["StarshipsService"]])
    ], StarshipsComponent);
    return StarshipsComponent;
}());



/***/ }),

/***/ "./src/app/starships/starships.service.ts":
/*!************************************************!*\
  !*** ./src/app/starships/starships.service.ts ***!
  \************************************************/
/*! exports provided: StarshipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsService", function() { return StarshipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var StarshipsService = /** @class */ (function () {
    function StarshipsService(http) {
        this.http = http;
    }
    StarshipsService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (starship) {
                return {
                    name: starship.name,
                    model: starship.model,
                    manufacturer: starship.manufacture,
                    cost_in_credits: starship.cost_in_credits,
                    length: starship.length,
                    max_atmosphering_speed: starship.max_atmosphering_speed,
                    crew: starship.crew,
                    passengers: starship.passengers,
                    cargo_capacity: starship.cargo_capacity,
                    consumables: starship.consumables,
                    hyperdrive_rating: starship.hyperdrive_rating,
                    MGLT: starship.MGLT,
                    starship_class: starship.starship_class,
                    pilots: starship.pilots,
                    films: starship.films,
                    created: starship.created,
                    edited: starship.edited,
                    url: starship.url
                };
            })
                .sort(function (el1, el2) {
                if (el1.title < el2.title) {
                    return -1;
                }
                else if (el1.title > el2.title) {
                    return 1;
                }
            });
        }));
    };
    StarshipsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StarshipsService);
    return StarshipsService;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.component.html":
/*!**************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Vehicles</h1>\n<input type=\"search\" [(ngModel)]=\"searchString\" placeholder=\"Search\">\n<div class=\"wrapper\">\n  <div class=\"vehicle\" *ngFor=\"let vehicle of vehicles | search : searchString\">\n    <h2 class=\"vehicle-name\">Name: {{vehicle.name}}</h2>\n    <div class=\"vehicle-model\">Model: {{vehicle.model}}</div>\n    <div class=\"vehicle-manufacturer\">Manufacturer: {{vehicle.manufacturer}}</div>\n    <div class=\"vehicle-cost_in_credits\">Cost_in_credits: {{vehicle.cost_in_credits}}</div>\n    <div class=\"vehicle-length\">Length: {{vehicle.length}}</div>\n    <div class=\"vehicle-max_atmosphering_speed\">Speed: {{vehicle.max_atmosphering_speed}}</div>\n    <div class=\"vehicle-crew\">Crew: {{vehicle.crew}}</div>\n    <div class=\"vehicle-passengers\">Passengers: {{vehicle.passengers}}</div>\n    <div class=\"vehicle-cargo_capacity\">cargo_capacity: {{vehicle.cargo_capacity}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.scss":
/*!**************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.vehicle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 15px;\n  padding: 10px;\n  margin: 20px;\n  text-align: center;\n  max-width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvQW50b24vc3RhcndhcnMvbXktc3RhcndhcnMtYXBwL3NyYy9hcHAvdmVoaWNsZXMvdmVoaWNsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJ2ZWhpY2xlcy92ZWhpY2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnZlaGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vehicles/vehicles.component.ts":
/*!************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.ts ***!
  \************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicles.service */ "./src/app/vehicles/vehicles.service.ts");



var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent(service) {
        this.service = service;
        this.vehicles = [];
    }
    VehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData('vehicles')
            .subscribe(function (resp) {
            _this.vehicles = resp;
        });
    };
    VehiclesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! ./vehicles.component.html */ "./src/app/vehicles/vehicles.component.html"),
            styles: [__webpack_require__(/*! ./vehicles.component.scss */ "./src/app/vehicles/vehicles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vehicles_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesService"]])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicles/vehicles.service.ts ***!
  \**********************************************/
/*! exports provided: VehiclesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return VehiclesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var VehiclesService = /** @class */ (function () {
    function VehiclesService(http) {
        this.http = http;
    }
    VehiclesService.prototype.getData = function (str) {
        return this.http.get('https://swapi.co/api/' + str)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var list = data['results'];
            return list.map(function (vehicle) {
                return {
                    name: vehicle.name,
                    model: vehicle.model,
                    manufacturer: vehicle.manufacturer,
                    cost_in_credits: vehicle.cost_in_credits,
                    length: vehicle.length,
                    max_atmosphering_speed: vehicle.max_atmosphering_speed,
                    crew: vehicle.crew,
                    passengers: vehicle.passengers,
                    cargo_capacity: vehicle.cargo_capacity,
                    consumables: vehicle.consumables,
                    vehicle_class: vehicle.vehicle_class,
                    pilots: vehicle.pilots,
                    films: vehicle.films,
                    created: vehicle.created,
                    edited: vehicle.edited,
                    url: vehicle.url
                };
            });
        }));
    };
    VehiclesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VehiclesService);
    return VehiclesService;
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

module.exports = __webpack_require__(/*! /home/andy/Anton/starwars/my-starwars-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map