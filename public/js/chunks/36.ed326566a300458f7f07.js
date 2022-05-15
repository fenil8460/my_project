(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _PatientDetailsStaff_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientDetailsStaff.vue */ "./resources/js/src/views/Staff/Home/PatientDetailsStaff.vue");
/* harmony import */ var _PostDialysisForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostDialysisForm.vue */ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue");

//
//
//
//
//
//
//
//
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
  name: 'EndDialysis',
  props: ["ik"],
  data: function data() {
    return {
      "in": 1
    };
  },
  components: Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    PostDialysisForm: _PostDialysisForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    PatientDetailsStaff: _PatientDetailsStaff_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, "PostDialysisForm", _PostDialysisForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"]),
  created: function created() {
    console.log(ik);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PatientsTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientsTable.vue */ "./resources/js/src/views/Staff/Home/PatientsTable.vue");
/* harmony import */ var _PostDialysis_Consumables_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostDialysis/Consumables.vue */ "./resources/js/src/views/Staff/Home/PostDialysis/Consumables.vue");
/* harmony import */ var _PostDialysis_Pharmaceuticals_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostDialysis/Pharmaceuticals.vue */ "./resources/js/src/views/Staff/Home/PostDialysis/Pharmaceuticals.vue");
/* harmony import */ var _PostDialysis_Others_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostDialysis/Others.vue */ "./resources/js/src/views/Staff/Home/PostDialysis/Others.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PostDialysisForm',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    PatientsTable: _PatientsTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_6__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_6__["ValidationObserver"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_8___default.a,
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButtonGroup"],
    Consumables: _PostDialysis_Consumables_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Pharmaceuticals: _PostDialysis_Pharmaceuticals_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Others: _PostDialysis_Others_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        extra_hours: 10,
        mode_discharge: 'By Walk',
        early_dis: 'no',
        conditions: [],
        remarks: '',
        additional: ''
      },
      conditionsOptions: ['Bp High', 'Bp Low', 'Nausea', 'Vomiting', 'Short Breath', 'Bleeding', 'Edema', 'Stomach Distend', 'Diarrhea'],
      mode_dischargeOptions: [{
        value: 'By Walk',
        text: 'By Walk'
      }, {
        value: 'By WheelChair',
        text: 'By WheelChair'
      }, {
        value: 'Ambulance',
        text: 'Ambulance'
      }, {
        value: 'Human Support',
        text: 'Human Support'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", xs: "12" } },
            [_c("post-dialysis-form", { staticClass: "mr-2 ml-2" })],
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
      _c("h1", [_vm._v(" end dia " + _vm._s(this.$route.params.id))]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f& ***!
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
    "div",
    [
      _c("consumables", { ref: "modal" }),
      _vm._v(" "),
      _c("pharmaceuticals", { ref: "modal" }),
      _vm._v(" "),
      _c("others", { ref: "modal" }),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "text-center" },
        [
          _c("h2", { staticClass: "text-primary mb-2" }, [
            _vm._v(" Post Dialysis Form"),
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
                                label: "Extra Hours:",
                                "label-for": "extra_hours",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  rules: "required|between:10,20",
                                  name: "Extra Hours",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "extra_hours",
                                            state:
                                              errors.length > 0 ? false : null,
                                            placeholder: "Extra Hours",
                                          },
                                          model: {
                                            value: _vm.formData.extra_hours,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "extra_hours",
                                                $$v
                                              )
                                            },
                                            expression: "formData.extra_hours",
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
                                label: "Mode of Discharge:",
                                "label-for": "mode_discharge",
                                "label-cols-md": "4",
                              },
                            },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "mode_discharge",
                                  options: _vm.mode_dischargeOptions,
                                },
                                model: {
                                  value: _vm.formData.mode_discharge,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "mode_discharge",
                                      $$v
                                    )
                                  },
                                  expression: "formData.mode_discharge",
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
                                label: "Early Discharge:",
                                "label-for": "early_dis",
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
                                            name: "Early Discharge",
                                            value: "yes",
                                          },
                                          model: {
                                            value: _vm.formData.early_dis,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "early_dis",
                                                $$v
                                              )
                                            },
                                            expression: "formData.early_dis",
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
                                            name: "Early Discharge",
                                            value: "no",
                                          },
                                          model: {
                                            value: _vm.formData.early_dis,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "early_dis",
                                                $$v
                                              )
                                            },
                                            expression: "formData.early_dis",
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
                                  rawName: "v-b-modal.modal-oth",
                                  modifiers: { "modal-oth": true },
                                },
                              ],
                              attrs: { variant: "outline-primary" },
                              on: { click: _vm.showModal },
                            },
                            [_vm._v("\n        Others\n      ")]
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
                              staticClass: "mt-2",
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
                            [_vm._v("\n              End Session\n          ")]
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

/***/ "./resources/js/src/views/Staff/Home/EndDialysis.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/EndDialysis.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndDialysis.vue?vue&type=template&id=fe96cc10& */ "./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10&");
/* harmony import */ var _EndDialysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndDialysis.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EndDialysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/EndDialysis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EndDialysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EndDialysis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EndDialysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EndDialysis.vue?vue&type=template&id=fe96cc10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/EndDialysis.vue?vue&type=template&id=fe96cc10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EndDialysis_vue_vue_type_template_id_fe96cc10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysisForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDialysisForm.vue?vue&type=template&id=2564de5f& */ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f&");
/* harmony import */ var _PostDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDialysisForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/PostDialysisForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialysisForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialysisForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialysisForm.vue?vue&type=template&id=2564de5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/PostDialysisForm.vue?vue&type=template&id=2564de5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialysisForm_vue_vue_type_template_id_2564de5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);