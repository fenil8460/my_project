(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
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
  name: 'Consumables',
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    resetModal: function resetModal() {
      console.log("okokok");
    },
    validationForm: function validationForm() {
      var _this = this;

      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          // eslint-disable-next-line
          console.log(_this.formData);
        }
      });
    }
  },
  data: function data() {
    return {
      stock: [],
      formData: {
        needle_16g: 'browndove',
        needle_16g_val: '0',
        needle_17g: 'browndove',
        needle_17g_val: '0',
        ab_part: '',
        ab_part_val: '0',
        bedsheet: 'star_enterprises',
        bedsheet_val: '1',
        blood_tubing: 'browndove',
        blood_tubing_val: '0',
        chemical_dt: '',
        chemical_dt_val: '0',
        chemical_mc: '',
        chemical_mc_val: '0',
        dialyzer: 'Single use',
        dialyzer_val: '0',
        heparin: 'samarth',
        heparin_val: '0',
        iv_set: 'biotech',
        iv_set_val: '1',
        ns1000: 'biotech',
        ns1000_val: '1',
        ns500: 'biotech',
        ns500_val: '0',
        on_off: 'whitecotton',
        on_off_val: '0',
        syr_10ml: 'bd',
        syr_10ml_val: '1',
        syr_5ml: 'bd',
        syr_5ml_val: '1',
        transducer: 'biotech',
        transducer_val: '0'
      },
      optionsRadio: ['0', '1', '2'],
      needleOptions: [{
        value: '',
        text: 'Nil'
      }, {
        value: 'browndove',
        text: 'Browndove'
      }],
      ab_partOptions: [{
        value: '',
        text: 'Nil'
      }],
      bedsheetOptions: [{
        value: '',
        text: 'Nil'
      }, {
        value: 'star_enterprises',
        text: 'Star Enterprises'
      }],
      dialyzerOptions: [],
      dialyzerTotal: [],
      heparinOptions: [{
        value: 'samarth',
        text: 'Samarth'
      }],
      iv_setOptions: [{
        value: 'biotech',
        text: 'Biotech'
      }],
      on_offOptions: [{
        value: 'whitecotton',
        text: 'White Cotton'
      }],
      syrOptions: [{
        value: 'bd',
        text: 'BD'
      }]
    };
  },
  created: function created() {
    var _this2 = this;

    var token = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_5__["isUserLoggedIn"])(); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/staff/show/stocks/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (data) {
      _this2.stock = data["data"]['consumable_stock_data']; // for (let i = 0; i < this.stock[0]['brand'].length; i++) {
      //   this.dialyzerOptions.push(this.stock[7]['brand'][i]['brand_name'])
      //   this.dialyzerTotal.push(this.stock[7]['brand'][i]['total'])
      // }

      for (var i = 0; i < _this2.stock[7]['brand'].length; i++) {
        _this2.dialyzerOptions.push(_this2.stock[7]['brand'][i]['brand_name']);

        _this2.dialyzerTotal.push(_this2.stock[7]['brand'][i]['total']);
      }
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
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
  name: 'Others',
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
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
  name: 'Pharmaceuticals',
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    resetModal: function resetModal() {
      console.log("okokok");
    },
    validationForm: function validationForm() {
      console.log(this.formData);
    }
  },
  data: function data() {
    return {
      formData: {
        epo_10k: '',
        epo_10k_val: '0',
        epo_4k: '',
        epo_4k_val: '0',
        inj_amino: '',
        inj_amino_val: '0',
        inj_anti: '',
        inj_anti_val: '0',
        inj_dextrose: 'osk',
        inj_dextrose_val: '1',
        inj_iron: 'sucrowel',
        inj_iron_val: '1',
        inj_multi: 'optineuron_forte',
        inj_multi_val: '1'
      },
      optionsRadio: ['0', '1', '2'],
      epo_10kOptions: [{
        value: '',
        text: 'Nil'
      }],
      epo_4kOptions: [{
        value: '',
        text: 'Nil'
      }],
      inj_aminoOptions: [{
        value: '',
        text: 'Nil'
      }],
      inj_antiOptions: [{
        value: '',
        text: 'Nil'
      }],
      inj_multiOptions: [{
        value: '',
        text: 'Nil'
      }, {
        value: 'optineuron_forte',
        text: 'Optineuron forte'
      }],
      inj_ironOptions: [{
        value: '',
        text: 'Nil'
      }, {
        value: 'sucrowel',
        text: 'Sucrowel'
      }],
      inj_dextroseOptions: [{
        value: '',
        text: 'Nil'
      }, {
        value: 'osk',
        text: 'OSK'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          attrs: {
            id: "modal-cons",
            title: "Consumables",
            "ok-only": "",
            "ok-title": "Set",
            size: "lg",
            "no-close-on-backdrop": "",
          },
          on: {
            ok: _vm.validationForm,
            show: _vm.resetModal,
            hidden: _vm.resetModal,
          },
        },
        [
          _c(
            "validation-observer",
            { ref: "simpleRules" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                    },
                  },
                },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "16g Needle:",
                        "label-for": "needle_16g",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "needle_16g",
                                  options: _vm.needleOptions,
                                },
                                model: {
                                  value: _vm.formData.needle_16g,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "needle_16g", $$v)
                                  },
                                  expression: "formData.needle_16g",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.needle_16g
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "needle_16g",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.needle_16g_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "needle_16g_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.needle_16g_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "needle_16g",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.needle_16g_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "needle_16g_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.needle_16g_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "17g Needle:",
                        "label-for": "needle_17g",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "needle_17g",
                                  options: _vm.needleOptions,
                                },
                                model: {
                                  value: _vm.formData.needle_17g,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "needle_17g", $$v)
                                  },
                                  expression: "formData.needle_17g",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.needle_17g
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "needle_16g",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.needle_17g_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "needle_17g_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.needle_17g_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "needle_17g",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.needle_17g_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "needle_17g_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.needle_17g_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "A/B part:",
                        "label-for": "ab_part",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "ab_part",
                                  options: _vm.ab_partOptions,
                                },
                                model: {
                                  value: _vm.formData.ab_part,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "ab_part", $$v)
                                  },
                                  expression: "formData.ab_part",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.ab_part
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "ab_part",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ab_part_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "ab_part_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.ab_part_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "ab_part",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ab_part_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "ab_part_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.ab_part_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Bed Sheet:",
                        "label-for": "bedsheet",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "bedsheet",
                                  options: _vm.bedsheetOptions,
                                },
                                model: {
                                  value: _vm.formData.bedsheet,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "bedsheet", $$v)
                                  },
                                  expression: "formData.bedsheet",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.bedsheet
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "bedsheet",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.bedsheet_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "bedsheet_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.bedsheet_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "bedsheet",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.bedsheet_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "bedsheet_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.bedsheet_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Blood Tubing:",
                        "label-for": "blood_tubing",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "blood_tubing",
                                  options: _vm.needleOptions,
                                },
                                model: {
                                  value: _vm.formData.blood_tubing,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "blood_tubing", $$v)
                                  },
                                  expression: "formData.blood_tubing",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.blood_tubing
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "blood_tubing",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.blood_tubing_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "blood_tubing_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.blood_tubing_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "blood_tubing",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.blood_tubing_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "blood_tubing_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.blood_tubing_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Chemical D&T:",
                        "label-for": "chemical_dt",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "chemical_dt",
                                  options: _vm.ab_partOptions,
                                },
                                model: {
                                  value: _vm.formData.chemical_dt,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "chemical_dt", $$v)
                                  },
                                  expression: "formData.chemical_dt",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.chemical_dt
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "chemical_dt",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.chemical_dt_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "chemical_dt_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.chemical_dt_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "chemical_dt",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.chemical_dt_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "chemical_dt_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.chemical_dt_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Chemical M&C:",
                        "label-for": "chemical_mc",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "chemical_mc",
                                  options: _vm.ab_partOptions,
                                },
                                model: {
                                  value: _vm.formData.chemical_mc,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "chemical_mc", $$v)
                                  },
                                  expression: "formData.chemical_mc",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.chemical_mc
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "chemical_mc",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.chemical_mc_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "chemical_mc_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.chemical_mc_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "chemical_mc",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.chemical_mc_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "chemical_mc_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.chemical_mc_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Dialyzer:",
                        "label-for": "dialyzer",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "dialyzer",
                                  options: _vm.dialyzerOptions,
                                },
                                model: {
                                  value: _vm.formData.dialyzer,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "dialyzer", $$v)
                                  },
                                  expression: "formData.dialyzer",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.dialyzer
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "dialyzer",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.dialyzer_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "dialyzer_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.dialyzer_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "dialyzer",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.dialyzer_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "dialyzer_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.dialyzer_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Heparin:",
                        "label-for": "heparin",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "heparin",
                                  options: _vm.heparinOptions,
                                },
                                model: {
                                  value: _vm.formData.heparin,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "heparin", $$v)
                                  },
                                  expression: "formData.heparin",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { cols: "3" } },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Heparin",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "heparin",
                                            required: "",
                                          },
                                          model: {
                                            value: _vm.formData.heparin_val,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "heparin_val",
                                                $$v
                                              )
                                            },
                                            expression: "formData.heparin_val",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          { staticClass: "text-danger" },
                                          [_vm._v(_vm._s(errors[0]))]
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
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "IV Set:",
                        "label-for": "iv_set",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "iv_set",
                                  options: _vm.iv_setOptions,
                                },
                                model: {
                                  value: _vm.formData.iv_set,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "iv_set", $$v)
                                  },
                                  expression: "formData.iv_set",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.iv_set
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "iv_set",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.iv_set_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "iv_set_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.iv_set_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "iv_set",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.iv_set_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "iv_set_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.iv_set_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "NS1000 ML:",
                        "label-for": "ns1000",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "ns1000",
                                  options: _vm.iv_setOptions,
                                },
                                model: {
                                  value: _vm.formData.ns1000,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "ns1000", $$v)
                                  },
                                  expression: "formData.ns1000",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.ns1000
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "ns1000",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ns1000_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "ns1000_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.ns1000_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "ns1000",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ns1000_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "ns1000_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.ns1000_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "NS500 ML:",
                        "label-for": "ns500",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "ns500",
                                  options: _vm.iv_setOptions,
                                },
                                model: {
                                  value: _vm.formData.ns500,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "ns500", $$v)
                                  },
                                  expression: "formData.ns500",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.ns500
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "ns500",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ns500_val,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.formData, "ns500_val", $$v)
                                      },
                                      expression: "formData.ns500_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "ns500",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.ns500_val,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.formData, "ns500_val", $$v)
                                      },
                                      expression: "formData.ns500_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "On/Off Kit:",
                        "label-for": "on_off",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "on_off",
                                  options: _vm.on_offOptions,
                                },
                                model: {
                                  value: _vm.formData.on_off,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "on_off", $$v)
                                  },
                                  expression: "formData.on_off",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.on_off
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "on_off",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.on_off_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "on_off_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.on_off_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "on_off",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.on_off_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "on_off_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.on_off_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Syringe 10 ML:",
                        "label-for": "syr_10ml",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "syr_10ml",
                                  options: _vm.syrOptions,
                                },
                                model: {
                                  value: _vm.formData.syr_10ml,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "syr_10ml", $$v)
                                  },
                                  expression: "formData.syr_10ml",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.syr_10ml
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "syr_10ml",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.syr_10ml_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "syr_10ml_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.syr_10ml_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "syr_10ml",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.syr_10ml_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "syr_10ml_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.syr_10ml_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Syringe 5 ML:",
                        "label-for": "syr_5ml",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "syr_5ml",
                                  options: _vm.syrOptions,
                                },
                                model: {
                                  value: _vm.formData.syr_5ml,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "syr_5ml", $$v)
                                  },
                                  expression: "formData.syr_5ml",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.syr_5ml
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "syr_5ml",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.syr_5ml_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "syr_5ml_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.syr_5ml_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "syr_5ml",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.syr_5ml_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "syr_5ml_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.syr_5ml_val",
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
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Transducer Protector:",
                        "label-for": "transducer",
                        "label-cols-md": "2",
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "transducer",
                                  options: _vm.iv_setOptions,
                                },
                                model: {
                                  value: _vm.formData.transducer,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "transducer", $$v)
                                  },
                                  expression: "formData.transducer",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.transducer
                            ? _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      id: "transducer",
                                      "button-variant": "outline-primary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.transducer_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "transducer_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.transducer_val",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      disabled: "",
                                      id: "transducer",
                                      "button-variant": "outline-secondary",
                                      options: _vm.optionsRadio,
                                      buttons: "",
                                      name: "radios-btn-default",
                                    },
                                    model: {
                                      value: _vm.formData.transducer_val,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "transducer_val",
                                          $$v
                                        )
                                      },
                                      expression: "formData.transducer_val",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          attrs: {
            id: "modal-oth",
            title: "Others",
            "ok-only": "",
            "ok-title": "Set",
          },
        },
        [
          _c("b-card-text", [
            _c("h5", { staticClass: "text-center" }, [_vm._v("No Items")]),
          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          attrs: {
            id: "modal-phar",
            title: "Pharmaceuticals",
            "ok-only": "",
            "ok-title": "Set",
            size: "lg",
            "no-close-on-backdrop": "",
          },
          on: {
            ok: _vm.validationForm,
            show: _vm.resetModal,
            hidden: _vm.resetModal,
          },
        },
        [
          _c(
            "b-form",
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "EPO 10K:",
                    "label-for": "epo_10k",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "epo_10k",
                              options: _vm.epo_10kOptions,
                            },
                            model: {
                              value: _vm.formData.epo_10k,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "epo_10k", $$v)
                              },
                              expression: "formData.epo_10k",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.epo_10k
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "epo_10k",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.epo_10k_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "epo_10k_val", $$v)
                                  },
                                  expression: "formData.epo_10k_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "epo_10k",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.epo_10k_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "epo_10k_val", $$v)
                                  },
                                  expression: "formData.epo_10k_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "EPO 4K:",
                    "label-for": "epo_4k",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: { id: "epo_4k", options: _vm.epo_4kOptions },
                            model: {
                              value: _vm.formData.epo_4k,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "epo_4k", $$v)
                              },
                              expression: "formData.epo_4k",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.epo_4k
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "epo_4k",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.epo_4k_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "epo_4k_val", $$v)
                                  },
                                  expression: "formData.epo_4k_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "epo_4k",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.epo_4k_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "epo_4k_val", $$v)
                                  },
                                  expression: "formData.epo_4k_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Inj Amino Acid:",
                    "label-for": "inj_amino",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "inj_amino",
                              options: _vm.inj_aminoOptions,
                            },
                            model: {
                              value: _vm.formData.inj_amino,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "inj_amino", $$v)
                              },
                              expression: "formData.inj_amino",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.inj_amino
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "inj_amino",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_amino_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_amino_val", $$v)
                                  },
                                  expression: "formData.inj_amino_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "inj_amino",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_amino_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_amino_val", $$v)
                                  },
                                  expression: "formData.inj_amino_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Inj Antibiotics:",
                    "label-for": "inj_anti",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "inj_anti",
                              options: _vm.inj_antiOptions,
                            },
                            model: {
                              value: _vm.formData.inj_anti,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "inj_anti", $$v)
                              },
                              expression: "formData.inj_anti",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.inj_anti
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "inj_anti",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_anti_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_anti_val", $$v)
                                  },
                                  expression: "formData.inj_anti_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "inj_anti",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_anti_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_anti_val", $$v)
                                  },
                                  expression: "formData.inj_anti_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Inj Dextrose 25% 100ml:",
                    "label-for": "inj_dextrose",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "inj_dextrose",
                              options: _vm.inj_dextroseOptions,
                            },
                            model: {
                              value: _vm.formData.inj_dextrose,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "inj_dextrose", $$v)
                              },
                              expression: "formData.inj_dextrose",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.inj_dextrose
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "inj_dextrose",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_dextrose_val,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "inj_dextrose_val",
                                      $$v
                                    )
                                  },
                                  expression: "formData.inj_dextrose_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "inj_dextrose",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_dextrose_val,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "inj_dextrose_val",
                                      $$v
                                    )
                                  },
                                  expression: "formData.inj_dextrose_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Inj Iron:",
                    "label-for": "inj_iron",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "inj_iron",
                              options: _vm.inj_ironOptions,
                            },
                            model: {
                              value: _vm.formData.inj_iron,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "inj_iron", $$v)
                              },
                              expression: "formData.inj_iron",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.inj_iron
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "inj_iron",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_iron_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_iron_val", $$v)
                                  },
                                  expression: "formData.inj_iron_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "inj_iron",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_iron_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_iron_val", $$v)
                                  },
                                  expression: "formData.inj_iron_val",
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
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Inj Multi Vit:",
                    "label-for": "inj_multi",
                    "label-cols-md": "2",
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("b-form-select", {
                            attrs: {
                              id: "inj_multi",
                              options: _vm.inj_multiOptions,
                            },
                            model: {
                              value: _vm.formData.inj_multi,
                              callback: function ($$v) {
                                _vm.$set(_vm.formData, "inj_multi", $$v)
                              },
                              expression: "formData.inj_multi",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.formData.inj_multi
                        ? _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "inj_multi",
                                  "button-variant": "outline-primary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_multi_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_multi_val", $$v)
                                  },
                                  expression: "formData.inj_multi_val",
                                },
                              }),
                            ],
                            1
                          )
                        : _c(
                            "b-col",
                            { attrs: { cols: "4" } },
                            [
                              _c("b-form-radio-group", {
                                attrs: {
                                  disabled: "",
                                  id: "inj_multi",
                                  "button-variant": "outline-secondary",
                                  options: _vm.optionsRadio,
                                  buttons: "",
                                  name: "radios-btn-default",
                                },
                                model: {
                                  value: _vm.formData.inj_multi_val,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "inj_multi_val", $$v)
                                  },
                                  expression: "formData.inj_multi_val",
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

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Consumables.vue?vue&type=template&id=7645f288& */ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288&");
/* harmony import */ var _Consumables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Consumables.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Consumables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Consumables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Consumables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Consumables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Consumables.vue?vue&type=template&id=7645f288& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue?vue&type=template&id=7645f288&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Consumables_vue_vue_type_template_id_7645f288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Others.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Others.vue?vue&type=template&id=230a4e47& */ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47&");
/* harmony import */ var _Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Others.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PostDialysis/Others.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=template&id=230a4e47& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Others.vue?vue&type=template&id=230a4e47&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_230a4e47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pharmaceuticals.vue?vue&type=template&id=1d06f848& */ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848&");
/* harmony import */ var _Pharmaceuticals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pharmaceuticals.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pharmaceuticals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pharmaceuticals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pharmaceuticals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pharmaceuticals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pharmaceuticals.vue?vue&type=template&id=1d06f848& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue?vue&type=template&id=1d06f848&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pharmaceuticals_vue_vue_type_template_id_1d06f848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);