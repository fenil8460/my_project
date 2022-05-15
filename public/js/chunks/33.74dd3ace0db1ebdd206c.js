(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _PatientDetailsStaff_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientDetailsStaff.vue */ "./resources/js/src/views/Staff/Home/PatientDetailsStaff.vue");
/* harmony import */ var _PreDialysisForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreDialysisForm.vue */ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var _core_directives_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/animations */ "./resources/js/src/@core/directives/animations.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PatientsClick',
  props: ["ik"],
  data: function data() {
    return {
      "in": 1,
      alert: null
    };
  },
  components: {
    PreDialysisForm: _PreDialysisForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    PatientDetailsStaff: _PatientDetailsStaff_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    heightFade: _core_directives_animations__WEBPACK_IMPORTED_MODULE_5__["heightFade"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  created: function created() {
    var _this = this;

    var token = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_4__["isUserLoggedIn"])();
    console.log(token); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/staff/show/stock/alert', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (data) {
      console.log(data);
      _this.alert = data["data"]['data'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PatientsTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientsTable.vue */ "./resources/js/src/views/Staff/Home/PatientsTable.vue");
/* harmony import */ var _statistics_PatientInfo_PatientRegister_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../statistics/PatientInfo/PatientRegister.vue */ "./resources/js/src/views/statistics/PatientInfo/PatientRegister.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PreDialysisForm',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    PatientsTable: _PatientsTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PatientRegister: _statistics_PatientInfo_PatientRegister_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formData: {
        bp_systolic: '',
        bp_diastolic: '',
        heart_rate: '',
        weight: '',
        sop2: '',
        reused_dc: '',
        dialyzer_id: 'Fresenius F6',
        reused_tc: '',
        machine: '1 - Fresenius 4008B',
        appointment_type: 'emergency',
        access_av: 'avf',
        conditions: [],
        remarks: '',
        site_ca: 'yes',
        if_no: '',
        additional: ''
      },
      conditionsOptions: ['Bp High', 'Bp Low', 'Nausea', 'Vomiting', 'Short Breath', 'Bleeding', 'Edema', 'Stomach Distend', 'Diarrhea'],
      dialyzerIdOptions: [{
        value: 'Fresenius F6',
        text: 'Fresenius F6'
      }, {
        value: 'Fresenius F8',
        text: 'Fresenius F7'
      }, {
        value: 'Brown Dove B6',
        text: 'Brown Dove B6'
      }, {
        value: 'Brown Dove B7',
        text: 'Brown Dove B7'
      }, {
        value: 'Brown Dove 130',
        text: 'Brown Dove 130'
      }, {
        value: 'Nipro',
        text: 'Nipro'
      }, {
        value: 'Dora',
        text: 'Dora'
      }],
      machineOptions: [{
        value: '1 - Fresenius 4008B',
        text: '1 - Fresenius 4008B'
      }, {
        value: '2 - Nipro Surdial 55+',
        text: '2 - Nipro Surdial 55+'
      }, {
        value: '3 - Fresenius 4008A',
        text: '3 - Fresenius 4008A'
      }, {
        value: '4 - Fresenius 4008B',
        text: '4 - Fresenius 4008B'
      }]
    };
  },
  methods: {
    showModal: function showModal() {
      var element = this.$refs.modal;
      $(element).modal('show');
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "b-alert",
        { attrs: { variant: "danger", show: "", dismissible: "", fade: "" } },
        [
          _c("div", { staticClass: "alert-body" }, [
            _c(
              "span",
              [
                _c("feather-icon", {
                  staticClass: "mr-50",
                  attrs: { icon: "InfoIcon" },
                }),
                _vm._v(" "),
                _c("strong", [_vm._v("Items like ")]),
                _vm._v(" " + _vm._s(this.alert) + " "),
                _c("strong", [_vm._v(" are not available.")]),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", xs: "12" } },
            [_c("pre-dialysis-form", { staticClass: "mr-2 ml-2" })],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", xs: "12" } },
            [_c("patient-details-staff", { staticClass: "ml-2 mr-2" })],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("h1", [_vm._v(" end dial " + _vm._s(this.$route.params.id))]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "text-center" },
        [
          _c("h2", { staticClass: "text-primary mb-2" }, [
            _vm._v(" Pre Dialysis Form"),
          ]),
          _vm._v(" "),
          _c(
            "validation-observer",
            { ref: "simpleRules" },
            [
              _c(
                "b-form",
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "BP Systolic:",
                                "label-for": "bp_systolic",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "BP Systolic",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "bp_systolic",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "BP Systolic",
                                          },
                                          model: {
                                            value: _vm.formData.bp_systolic,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "bp_systolic",
                                                $$v
                                              )
                                            },
                                            expression: "formData.bp_systolic",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "BP Diastolic:",
                                "label-for": "bp_diastolic",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "BP Diastolic",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "bp_diastolic",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "BP Diastolic",
                                          },
                                          model: {
                                            value: _vm.formData.bp_diastolic,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "bp_diastolic",
                                                $$v
                                              )
                                            },
                                            expression: "formData.bp_diastolic",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Heart Rate:",
                                "label-for": "heart_rate",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Heart Rate",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "heart_rate",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "Heart Rate",
                                          },
                                          model: {
                                            value: _vm.formData.heart_rate,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "heart_rate",
                                                $$v
                                              )
                                            },
                                            expression: "formData.heart_rate",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Weight:",
                                "label-for": "weight",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Weight",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "weight",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "Weight",
                                          },
                                          model: {
                                            value: _vm.formData.weight,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "weight",
                                                $$v
                                              )
                                            },
                                            expression: "formData.weight",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "SPO2 %:",
                                "label-for": "sop2",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "SPO2 %",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "sop2",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "SPO2 %",
                                          },
                                          model: {
                                            value: _vm.formData.sop2,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "sop2",
                                                $$v
                                              )
                                            },
                                            expression: "formData.sop2",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Reused Dialyzer Count:",
                                "label-for": "reused_dc",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Reused Dialyzer Count",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "reused_dc",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder:
                                              "Reused Dialyzer Count",
                                          },
                                          model: {
                                            value: _vm.formData.reused_dc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "reused_dc",
                                                $$v
                                              )
                                            },
                                            expression: "formData.reused_dc",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Dialyzer ID:",
                                "label-for": "dialyzer_id",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "dialyzer_id",
                                  options: _vm.dialyzerIdOptions,
                                },
                                model: {
                                  value: _vm.formData.dialyzer_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "dialyzer_id", $$v)
                                  },
                                  expression: "formData.dialyzer_id",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Reused Tubing Count:",
                                "label-for": "reused_tc",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Reused Tubing Count",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "reused_tc",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "Reused Tubing Count",
                                          },
                                          model: {
                                            value: _vm.formData.reused_tc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "reused_tc",
                                                $$v
                                              )
                                            },
                                            expression: "formData.reused_tc",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Machine:",
                                "label-for": "machine",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "machine",
                                  options: _vm.machineOptions,
                                },
                                model: {
                                  value: _vm.formData.machine,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "machine", $$v)
                                  },
                                  expression: "formData.machine",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Appointment Type:",
                                "label-for": "appointment_type",
                                "label-cols-md": "4",
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
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Appointment Type",
                                            value: "emergency",
                                          },
                                          model: {
                                            value:
                                              _vm.formData.appointment_type,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "appointment_type",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "formData.appointment_type",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n          Emergency\n          "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Appointment Type",
                                            value: "scheduled",
                                          },
                                          model: {
                                            value:
                                              _vm.formData.appointment_type,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "appointment_type",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "formData.appointment_type",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n          Scheduled\n          "
                                          ),
                                        ]
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Access AV:",
                                "label-for": "access_av",
                                "label-cols-md": "4",
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
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Access AV",
                                            value: "avf",
                                          },
                                          model: {
                                            value: _vm.formData.access_av,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "access_av",
                                                $$v
                                              )
                                            },
                                            expression: "formData.access_av",
                                          },
                                        },
                                        [_vm._v("\n          AVF\n          ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Access AV",
                                            value: "cath",
                                          },
                                          model: {
                                            value: _vm.formData.access_av,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "access_av",
                                                $$v
                                              )
                                            },
                                            expression: "formData.access_av",
                                          },
                                        },
                                        [_vm._v("\n          CATH\n          ")]
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Conditions",
                                "label-for": "conditions",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  id: "conditions",
                                  dir: "ltr",
                                  multiple: "",
                                  label: "title",
                                  options: _vm.conditionsOptions,
                                },
                                model: {
                                  value: _vm.formData.conditions,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "conditions", $$v)
                                  },
                                  expression: "formData.conditions",
                                },
                              }),
                              _vm._v(" "),
                              _c("b-form-input", {
                                staticClass: "mt-1",
                                attrs: {
                                  id: "conditions",
                                  placeholder: "Enter Other Diseases (if any)",
                                },
                                model: {
                                  value: _vm.formData.additional,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "additional", $$v)
                                  },
                                  expression: "formData.additional",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Remarks:",
                                "label-for": "remarks",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  id: "remarks",
                                  placeholder: "Enter Remarks (if any)",
                                  rows: "3",
                                },
                                model: {
                                  value: _vm.formData.remarks,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "remarks", $$v)
                                  },
                                  expression: "formData.remarks",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Site Condition Acceptable:",
                                "label-for": "site_ca",
                                "label-cols-md": "4",
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
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Site Condition Acceptable",
                                            value: "yes",
                                          },
                                          model: {
                                            value: _vm.formData.site_ca,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "site_ca",
                                                $$v
                                              )
                                            },
                                            expression: "formData.site_ca",
                                          },
                                        },
                                        [_vm._v("\n          Yes\n          ")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c(
                                        "b-form-radio",
                                        {
                                          staticClass: "custom-control-primary",
                                          attrs: {
                                            name: "Site Condition Acceptable",
                                            value: "no",
                                          },
                                          model: {
                                            value: _vm.formData.site_ca,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "site_ca",
                                                $$v
                                              )
                                            },
                                            expression: "formData.site_ca",
                                          },
                                        },
                                        [_vm._v("\n          No\n          ")]
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "If No, Explain:",
                                "label-for": "if_no",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  id: "if_no",
                                  placeholder: "Enter Explanation",
                                  rows: "3",
                                },
                                model: {
                                  value: _vm.formData.if_no,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.formData, "if_no", $$v)
                                  },
                                  expression: "formData.if_no",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "primary", type: "submit" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.validationForm.apply(
                                    null,
                                    arguments
                                  )
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n              Start Session\n          "
                              ),
                            ]
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

/***/ "./resources/js/src/@core/directives/animations.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@core/directives/animations.js ***!
  \*********************************************************/
/*! exports provided: heightFade, temp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightFade", function() { return heightFade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temp", function() { return temp; });
var heightFade = {
  /* eslint-disable no-param-reassign */
  inserted: function inserted(el, binding) {
    var height = "".concat(el.offsetHeight, "px");

    if (binding.modifiers.appear) {
      el.style.overflow = 'hidden';
      el.style.maxHeight = '0px';
      el.style.opacity = 0; // Focus the element

      setTimeout(function () {
        el.style.maxHeight = height;
        el.style.opacity = 1;
        setTimeout(function () {
          el.style.overflow = 'unset';
        }, 300);
      }, 100);
    } else {
      el.style.maxHeight = height;
    }
  },
  unbind: function unbind(el) {
    if (el.style === undefined) return;
    el.style.overflow = 'hidden';
    el.style.maxHeight = '0px';
    el.style.opacity = 0;
  }
  /* eslint-enable no-param-reassign */

};
var temp = 2;

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PatientsClick.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PatientsClick.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientsClick.vue?vue&type=template&id=92e8edba& */ "./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba&");
/* harmony import */ var _PatientsClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientsClick.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PatientsClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PatientsClick.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientsClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientsClick.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientsClick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientsClick.vue?vue&type=template&id=92e8edba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PatientsClick.vue?vue&type=template&id=92e8edba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientsClick_vue_vue_type_template_id_92e8edba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PreDialysisForm.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDialysisForm.vue?vue&type=template&id=00381ab8& */ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8&");
/* harmony import */ var _PreDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDialysisForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PreDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PreDialysisForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialysisForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialysisForm.vue?vue&type=template&id=00381ab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PreDialysisForm.vue?vue&type=template&id=00381ab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialysisForm_vue_vue_type_template_id_00381ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);