(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[192],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_actions_BCardActions_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-actions/BCardActions.vue */ "./resources/js/src/@core/components/b-card-actions/BCardActions.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
    BCardActions: _core_components_b_card_actions_BCardActions_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      fields: ['ACTION', {
        key: 'ICON',
        label: 'ICON'
      }, 'DETAILS'],
      items: [{
        ACTION: 'Collapse',
        ICON: 'ChevronDownIcon',
        DETAILS: 'Collapse card content using collapse action.'
      }, {
        ACTION: 'Refresh Content',
        ICON: 'RotateCwIcon',
        DETAILS: 'Refresh your card content using refresh action.'
      }, {
        ACTION: 'Remove Card',
        ICON: 'XIcon',
        DETAILS: 'Remove card from page using remove card action'
      }]
    };
  },
  methods: {
    // stop refreshing card in 3 sec
    refreshStop: function refreshStop(cardName) {
      var _this = this;

      setTimeout(function () {
        _this.$refs[cardName].showLoading = false;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "section",
    { attrs: { id: "card-actions" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-card-actions",
                {
                  ref: "cardAction",
                  attrs: { title: "Card Actions" },
                  on: {
                    refresh: function ($event) {
                      return _vm.refreshStop("cardAction")
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("b-table", {
                            attrs: {
                              responsive: "",
                              items: _vm.items,
                              bordered: "",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "cell(ICON)",
                                fn: function (data) {
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "text-center" },
                                      [
                                        _c("feather-icon", {
                                          attrs: { icon: data.value },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card-actions",
                { attrs: { title: "Collapsible", "action-collapse": "" } },
                [
                  _c("b-card-text", [
                    _c("span", [
                      _vm._v("You can create a collapsible content by adding "),
                    ]),
                    _vm._v(" "),
                    _c("code", [_vm._v("actionCollapse")]),
                    _vm._v(" "),
                    _c("span", [_vm._v(" prop in ")]),
                    _vm._v(" "),
                    _c("code", [_vm._v("<b-card-actions>")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    [
                      _c("span", [_vm._v("Click on ")]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        attrs: { icon: "ChevronDownIcon" },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v(" to see card collapse in action.")]),
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
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card-actions",
                {
                  ref: "refreshCard",
                  attrs: { title: "Refresh Content", "action-refresh": "" },
                  on: {
                    refresh: function ($event) {
                      return _vm.refreshStop("refreshCard")
                    },
                  },
                },
                [
                  _c("b-card-text", [
                    _vm._v(
                      "\n          To create a card with refresh action use "
                    ),
                    _c("code", [_vm._v("actionRefresh")]),
                    _vm._v(" prop along with\n          "),
                    _c("code", [_vm._v("<b-card-actions>")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    [
                      _c("span", [_vm._v("Click on ")]),
                      _vm._v(" "),
                      _c("feather-icon", { attrs: { icon: "RotateCwIcon" } }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(" icon to see refresh card content in action."),
                      ]),
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
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card-actions",
                { attrs: { title: "Remove Card", "action-close": "" } },
                [
                  _c("b-card-text", [
                    _vm._v(
                      "\n          You can create a closeable card by using "
                    ),
                    _c("code", [_vm._v("actionClose")]),
                    _vm._v(" prop along with\n          "),
                    _c("code", [_vm._v("<b-card-actions>")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    [
                      _c("span", [_vm._v("Click on ")]),
                      _vm._v(" "),
                      _c("feather-icon", { attrs: { icon: "XIcon" } }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(" icon to see closeable card in action."),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
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

/***/ "./resources/js/src/views/card/card-action/CardAction.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/card/card-action/CardAction.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardAction.vue?vue&type=template&id=ede4a872& */ "./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872&");
/* harmony import */ var _CardAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardAction.vue?vue&type=script&lang=js& */ "./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/card/card-action/CardAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAction.vue?vue&type=template&id=ede4a872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/card/card-action/CardAction.vue?vue&type=template&id=ede4a872&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAction_vue_vue_type_template_id_ede4a872___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);