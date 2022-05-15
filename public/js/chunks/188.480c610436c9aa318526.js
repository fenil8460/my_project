(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ViewBranchDetails',
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"]
  },
  data: function data() {
    return {
      hosp: [],
      transactionData: [{
        mode: 'Hospital Name',
        types: 'Name',
        avatar: 'PocketIcon',
        avatarVariant: 'light-primary',
        payment: '',
        deduction: true
      }, {
        mode: 'Registration Fee',
        types: 'INR',
        avatar: 'CheckIcon',
        avatarVariant: 'light-success',
        payment: '+$480',
        deduction: false
      }, {
        mode: 'Normal Dialysis Charge',
        types: 'OPD',
        avatar: 'DollarSignIcon',
        avatarVariant: 'light-danger',
        payment: '+$480',
        deduction: false
      }, {
        mode: 'Emergency Dialysis Charge',
        types: 'IPD',
        avatar: 'CreditCardIcon',
        avatarVariant: 'light-warning',
        payment: '-$23',
        deduction: true
      }, {
        mode: 'Extra hours Dialysis Charge',
        types: 'Per Hour',
        avatar: 'TrendingUpIcon',
        avatarVariant: 'light-info',
        payment: '+$98',
        deduction: false
      }]
    };
  },
  created: function created() {
    var _this = this;

    var token = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_2__["isUserLoggedIn"])();
    console.log(token); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/staff/view/branch/details/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (data) {
      console.log(data);
      _this.hosp = data["data"]['data'];
      _this.transactionData[0].payment = _this.hosp.centre_name;
      _this.transactionData[1].payment = _this.hosp.registration_fee;
      _this.transactionData[2].payment = _this.hosp.normal_fee;
      _this.transactionData[3].payment = _this.hosp.emergency_fee;
      _this.transactionData[4].payment = _this.hosp.per_hour_fee;
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "card card-congratulations",
          attrs: { "text-variant": "center" },
        },
        [
          _c("b-img", {
            staticClass: "congratulations-img-left",
            attrs: { src: __webpack_require__(/*! @/assets/images/elements/decore-left.png */ "./resources/js/src/assets/images/elements/decore-left.png") },
          }),
          _vm._v(" "),
          _c("b-img", {
            staticClass: "congratulations-img-right",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/elements/decore-right.png */ "./resources/js/src/assets/images/elements/decore-right.png"),
            },
          }),
          _vm._v(" "),
          _c(
            "b-avatar",
            {
              staticClass: "shadow mb-2",
              attrs: { variant: "primary", size: "70" },
            },
            [_c("feather-icon", { attrs: { size: "28", icon: "HomeIcon" } })],
            1
          ),
          _vm._v(" "),
          _c("h1", { staticClass: "mb-1 mt-50 text-white" }, [
            _vm._v("\n      " + _vm._s(this.hosp.centre_name) + "\n    "),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "card-transaction", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", [_vm._v("Details")]),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass: "cursor-pointer",
                attrs: { icon: "MoreVerticalIcon", size: "18" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            _vm._l(_vm.transactionData, function (transaction) {
              return _c(
                "div",
                { key: transaction.mode, staticClass: "transaction-item" },
                [
                  _c(
                    "b-media",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-media-aside",
                        [
                          _c(
                            "b-avatar",
                            {
                              attrs: {
                                rounded: "",
                                size: "42",
                                variant: transaction.avatarVariant,
                              },
                            },
                            [
                              _c("feather-icon", {
                                attrs: { size: "18", icon: transaction.avatar },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-media-body", [
                        _c("h6", { staticClass: "transaction-title" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(transaction.mode) +
                              "\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(transaction.types))]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "font-weight-bolder",
                      class: transaction.deduction
                        ? "text-danger"
                        : "text-success",
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(transaction.payment) +
                          "\n        "
                      ),
                    ]
                  ),
                ],
                1
              )
            }),
            0
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-left.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-left.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/elements/decore-left.png";

/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-right.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-right.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/elements/decore-right.png";

/***/ }),

/***/ "./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewBranchDetails.vue?vue&type=template&id=1000e304& */ "./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304&");
/* harmony import */ var _ViewBranchDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewBranchDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewBranchDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewBranchDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewBranchDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewBranchDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewBranchDetails.vue?vue&type=template&id=1000e304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/ViewBranchDetails/ViewBranchDetails.vue?vue&type=template&id=1000e304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewBranchDetails_vue_vue_type_template_id_1000e304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);