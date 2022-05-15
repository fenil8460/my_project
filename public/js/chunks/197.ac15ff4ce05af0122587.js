(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");



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
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BCardGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardGroup"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardTitle"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardFooter"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardBody"],
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BProgress"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BIcon"],
    BIconTrash: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BIconTrash"],
    BIconPencilSquare: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BIconPencilSquare"]
  },
  data: function data() {
    return {
      centers: []
    };
  },
  methods: {
    getCenters: function getCenters() {
      var _this = this;

      return Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, response, jsonData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://127.0.0.1:8000/api/admin/view/microcentre";
                _context.next = 3;
                return fetch(url);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                jsonData = _context.sent;
                _this.centers = jsonData.data;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteCenter: function deleteCenter(id) {
      var _this2 = this;

      if (confirm("Are you sure you want to delete this microcentre?")) {
        var url = "http://127.0.0.1:8000/api/admin/delete/microcentre/" + id;
        fetch(url, {
          method: 'DELETE'
        }).then(function () {
          return _this2.getCenters();
        })["catch"](function (error) {
          return console.error('Error:', error);
        });
      }
    },
    editCenter: function editCenter() {
      console.log("Editing");
      this.getCenters();
    }
  },
  mounted: function mounted() {
    this.getCenters();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "b-container",
    [
      _c(
        "b-row",
        { attrs: { cols: "3" } },
        _vm._l(_vm.centers, function (center) {
          return _c(
            "b-col",
            { key: center.id },
            [
              _c(
                "b-card",
                [
                  _c(
                    "b-card-body",
                    [
                      _c(
                        "b-card-title",
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { cols: "9" } }, [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(center.centre_name) +
                                    "\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { cols: "3" } },
                                [
                                  _c("b-icon", {
                                    attrs: { icon: "pencil-square" },
                                    on: { click: _vm.editCenter },
                                  }),
                                  _vm._v(" "),
                                  _c("b-icon", {
                                    attrs: { icon: "trash" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteCenter(center.id)
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _vm._v("Normal fee: " + _vm._s(center.normal_fee)),
                      ]),
                      _vm._v(" "),
                      center.m_scheduled !== 0
                        ? _c("b-card-text", [
                            _vm._v("MJPJAY fee: " + _vm._s(center.m_scheduled)),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _vm._v("Patient count: " + _vm._s(center.ap)),
                      ]),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _vm._v("No of beds: " + _vm._s(center.beds_count)),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card-footer",
                    [
                      _c("b-progress", {
                        attrs: { max: "100", "show-value": "" },
                        model: {
                          value: center.percentage,
                          callback: function ($$v) {
                            _vm.$set(center, "percentage", $$v)
                          },
                          expression: "center.percentage",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/microcenter/ManageMicrocenter.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/microcenter/ManageMicrocenter.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageMicrocenter.vue?vue&type=template&id=ee51c978& */ "./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978&");
/* harmony import */ var _ManageMicrocenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageMicrocenter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageMicrocenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/microcenter/ManageMicrocenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageMicrocenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageMicrocenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageMicrocenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageMicrocenter.vue?vue&type=template&id=ee51c978& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/microcenter/ManageMicrocenter.vue?vue&type=template&id=ee51c978&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageMicrocenter_vue_vue_type_template_id_ee51c978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);