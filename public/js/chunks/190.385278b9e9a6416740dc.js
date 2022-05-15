(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[190],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
  name: 'Tele',
  components: {
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckboxGroup"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  data: function data() {
    return {
      selectedRadio: 'active',
      optionsRadio: [{
        text: 'Active',
        value: 'active'
      }, {
        text: 'Radio',
        value: 'radio'
      }, {
        text: 'Radio',
        value: 'radio2'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("h1", { staticClass: "text-center" }, [_vm._v(" Telemedicine ")]),
      _vm._v(" "),
      _c(
        "b-button-group",
        { staticClass: "m-auto" },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(113, 102, 240, 0.15)",
                  expression: "'rgba(113, 102, 240, 0.15)'",
                  modifiers: { 400: true },
                },
                {
                  name: "b-modal",
                  rawName: "v-b-modal.modal-cons",
                  modifiers: { "modal-cons": true },
                },
              ],
              attrs: { variant: "outline-primary" },
              on: { click: _vm.showModal },
            },
            [_vm._v("\n        Consumables\n      ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(113, 102, 240, 0.15)",
                  expression: "'rgba(113, 102, 240, 0.15)'",
                  modifiers: { 400: true },
                },
                {
                  name: "b-modal",
                  rawName: "v-b-modal.modal-phar",
                  modifiers: { "modal-phar": true },
                },
              ],
              attrs: { variant: "outline-primary" },
              on: { click: _vm.showModal },
            },
            [_vm._v("\n        Pharmaceuticals\n      ")]
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

/***/ "./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Telemedicine.vue?vue&type=template&id=aaddb8f4& */ "./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4&");
/* harmony import */ var _Telemedicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Telemedicine.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Telemedicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Telemedicine/Telemedicine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Telemedicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Telemedicine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Telemedicine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Telemedicine.vue?vue&type=template&id=aaddb8f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Telemedicine/Telemedicine.vue?vue&type=template&id=aaddb8f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Telemedicine_vue_vue_type_template_id_aaddb8f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);