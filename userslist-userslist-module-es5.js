(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userslist-userslist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/userslist/userslist.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userslist/userslist.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserslistUserslistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Users</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-list>\n          <ion-item *ngFor=\"let character of characters\" [routerLink]=\"['/profile/' + character.id]\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{character.image}}\">\n            </ion-avatar>\n            <ion-label>{{character.name}}</ion-label>\n\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/userslist/userslist-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/userslist/userslist-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: UserslistPageRoutingModule */

    /***/
    function srcAppUserslistUserslistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserslistPageRoutingModule", function () {
        return UserslistPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _userslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./userslist.page */
      "./src/app/userslist/userslist.page.ts");

      var routes = [{
        path: '',
        component: _userslist_page__WEBPACK_IMPORTED_MODULE_3__["UserslistPage"]
      }];

      var UserslistPageRoutingModule = function UserslistPageRoutingModule() {
        _classCallCheck(this, UserslistPageRoutingModule);
      };

      UserslistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserslistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/userslist/userslist.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/userslist/userslist.module.ts ***!
      \***********************************************/

    /*! exports provided: UserslistPageModule */

    /***/
    function srcAppUserslistUserslistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserslistPageModule", function () {
        return UserslistPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _userslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./userslist-routing.module */
      "./src/app/userslist/userslist-routing.module.ts");
      /* harmony import */


      var _userslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./userslist.page */
      "./src/app/userslist/userslist.page.ts");

      var UserslistPageModule = function UserslistPageModule() {
        _classCallCheck(this, UserslistPageModule);
      };

      UserslistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _userslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserslistPageRoutingModule"]],
        declarations: [_userslist_page__WEBPACK_IMPORTED_MODULE_6__["UserslistPage"]]
      })], UserslistPageModule);
      /***/
    },

    /***/
    "./src/app/userslist/userslist.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/userslist/userslist.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserslistUserslistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzbGlzdC91c2Vyc2xpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/userslist/userslist.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/userslist/userslist.page.ts ***!
      \*********************************************/

    /*! exports provided: UserslistPage */

    /***/
    function srcAppUserslistUserslistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserslistPage", function () {
        return UserslistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UserslistPage = /*#__PURE__*/function () {
        function UserslistPage(http) {
          _classCallCheck(this, UserslistPage);

          this.http = http;
          this.characters = [];
        }

        _createClass(UserslistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.http.get("https://rickandmortyapi.com/api/character").subscribe(function (res) {
                        console.log(res);
                        _this.characters = res.results;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return UserslistPage;
      }();

      UserslistPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UserslistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-userslist",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./userslist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/userslist/userslist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./userslist.page.scss */
        "./src/app/userslist/userslist.page.scss"))["default"]]
      })], UserslistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=userslist-userslist-module-es5.js.map