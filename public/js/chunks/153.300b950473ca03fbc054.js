(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      dir: 'ltr',
      selected: [],
      options: []
    };
  },
  props: ['option']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _forms_form_repeater_FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forms/form-repeater/FormRepeaterBasic.vue */ "./resources/js/src/views/forms/form-repeater/FormRepeaterBasic.vue");
/* harmony import */ var _forms_form_element_vue_select_VueSelectMultiple_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forms/form-element/vue-select/VueSelectMultiple.vue */ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormCheckbox"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormRadioGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BButton"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_10__["BFormSelect"],
    FormRepeaterBasic: _forms_form_repeater_FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    VueSelectMultiple: _forms_form_element_vue_select_VueSelectMultiple_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_14__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_14__["ValidationObserver"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  props: {},
  data: function data() {
    return {
      form: {
        branch_name: null,
        product_name: '',
        category: null,
        brand: null,
        billable: 0,
        cost: 0,
        gst: 0,
        arrived: 0,
        private_selling_price: 0,
        mjpjay_selling_price: 0
      },
      branch_options: [{
        value: null,
        text: 'Please select center'
      }],
      HD_options: [{
        value: null,
        text: 'Please select patient'
      }],
      hd: false,
      brand_options: [{
        value: null,
        text: 'Please select brand'
      }, {
        value: 'BD',
        text: 'BD'
      }, {
        value: 'Biotech',
        text: 'Biotech'
      }, {
        value: 'Browndove',
        text: 'Browndove'
      }, {
        value: 'Dora single use',
        text: 'Dora single use'
      }, {
        value: 'Dove',
        text: 'Dove'
      }, {
        value: 'Multiuse',
        text: 'Multiuse'
      }, {
        value: 'Optineuron forte',
        text: 'Optineuron forte'
      }, {
        value: 'OSK',
        text: 'OSK'
      }, {
        value: 'Samarth',
        text: 'Samarth'
      }, {
        value: 'Star Enterprises',
        text: 'Star Enterprises'
      }, {
        value: 'Sucrowel',
        text: 'Sucrowel'
      }],
      newBrand: false,
      category_options: [{
        value: null,
        text: 'Please select category'
      }, {
        value: 'consumable',
        text: 'consumable'
      }, {
        value: 'pharmaceutical',
        text: 'pharmaceutical'
      }],
      newCategory: false,
      btn_options: [{
        text: 'Yes',
        value: '1'
      }, {
        text: 'No',
        value: '0'
      }]
    };
  },
  methods: {
    validationForm: function validationForm() {
      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          // eslint-disable-next-line
          console.log("Form is valid");
        }
      });
    },
    isHd: function isHd() {
      this.hd = !this.hd;
    },
    getNewBrand: function getNewBrand() {
      this.newBrand = !this.newBrand;
    },
    getNewCategory: function getNewCategory() {
      this.newCategory = !this.newCategory;
    },
    getBranches: function getBranches() {
      var _this = this;

      return Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var url, response, jsonData, branches;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://127.0.0.1:8000/api/admin/view/microcentre/";
                _context.next = 3;
                return fetch(url);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                jsonData = _context.sent;
                branches = jsonData.data.map(function (item) {
                  return {
                    value: item.code,
                    text: item.centre_name
                  };
                });
                _this.branch_options = [].concat(Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.branch_options), Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(branches));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getHDs: function getHDs() {
      var _this2 = this;

      return Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var url, response, jsonData, HDs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "http://127.0.0.1:8000/api/admin/view/patient";
                _context2.next = 3;
                return fetch(url);

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                jsonData = _context2.sent;
                HDs = jsonData.data.map(function (item) {
                  return {
                    value: item.branch_name,
                    text: item.name
                  };
                }).filter(function (item) {
                  return item.value.startsWith('HD');
                });
                _this2.HD_options = [].concat(Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.HD_options), Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(HDs));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    submitForm: function submitForm() {
      console.log(JSON.stringify(this.form));
      var url = "http://127.0.0.1:8000/api/admin/stock/maintenance/add/product";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return console.log(data);
      });
      alert("Product added successfully");
      location.reload();
    }
  },
  mounted: function mounted() {
    this.getBranches();
    this.getHDs();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.centralise[data-v-4a26d403] {\r\n  display: flex;\r\n  justify-content: center;\n}\n[dir] .submit[data-v-4a26d403] {\r\n  margin: 20px;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { lg: "12" } },
        [
          _c("v-select", {
            attrs: {
              dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
              multiple: "",
              label: "title",
              options: _vm.option,
            },
            model: {
              value: _vm.selected,
              callback: function ($$v) {
                _vm.selected = $$v
              },
              expression: "selected",
            },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "b-row",
    { staticClass: "match-height centralise" },
    [
      _c(
        "b-col",
        { attrs: { lg: "8" } },
        [
          _c(
            "b-card",
            { staticClass: "centralise", attrs: { title: "ADD PRODUCT" } },
            [
              _c(
                "validation-observer",
                { ref: "simpleRules" },
                [
                  _c(
                    "b-form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.submitForm.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c(
                        "b-row",
                        { staticClass: "centralise" },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Name:",
                                    "label-for": "name",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { rules: "required", name: "Name" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder:
                                                  "Enter product name",
                                              },
                                              model: {
                                                value: _vm.form.product_name,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "product_name",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.product_name",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Center: ",
                                    "label-for": "center",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required",
                                      name: "Center",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            !_vm.hd
                                              ? _c("b-form-select", {
                                                  staticClass: "mr-1",
                                                  style: { maxWidth: "67%" },
                                                  attrs: {
                                                    options: _vm.branch_options,
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                  },
                                                  model: {
                                                    value: _vm.form.branch_name,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "branch_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.branch_name",
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.hd
                                              ? _c("b-form-select", {
                                                  staticClass: "mr-1",
                                                  style: { maxWidth: "71%" },
                                                  attrs: {
                                                    options: _vm.HD_options,
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                  },
                                                  model: {
                                                    value: _vm.form.branch_name,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "branch_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.branch_name",
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "b-button",
                                              {
                                                directives: [
                                                  {
                                                    name: "ripple",
                                                    rawName: "v-ripple.400",
                                                    value:
                                                      "rgba(255, 255, 255, 0.15)",
                                                    expression:
                                                      "'rgba(255, 255, 255, 0.15)'",
                                                    modifiers: { 400: true },
                                                  },
                                                ],
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary",
                                                },
                                                on: { click: _vm.isHd },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                " +
                                                    _vm._s(
                                                      _vm.hd
                                                        ? "Hospitals"
                                                        : "HD Patients"
                                                    ) +
                                                    "\r\n              "
                                                ),
                                              ]
                                            ),
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Brand: ",
                                    "label-for": "brand",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { rules: "required", name: "Brand" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            !_vm.newBrand
                                              ? _c("b-form-select", {
                                                  staticClass: "mr-1",
                                                  style: { maxWidth: "88%" },
                                                  attrs: {
                                                    options: _vm.brand_options,
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                  },
                                                  model: {
                                                    value: _vm.form.brand,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "brand",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.brand",
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !_vm.newBrand
                                              ? _c("feather-icon", {
                                                  staticClass: "mr-1",
                                                  attrs: {
                                                    icon: "PlusIcon",
                                                    size: "20",
                                                  },
                                                  on: {
                                                    click: _vm.getNewBrand,
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.newBrand
                                              ? _c("b-form-input", {
                                                  attrs: {
                                                    id: "new-brand",
                                                    type: "text",
                                                    placeholder:
                                                      "Enter new brand",
                                                  },
                                                  model: {
                                                    value: _vm.form.brand,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "brand",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.brand",
                                                  },
                                                })
                                              : _vm._e(),
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Category: ",
                                    "label-for": "category",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { rules: "required", name: "Brand" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            !_vm.newCategory
                                              ? _c("b-form-select", {
                                                  staticClass: "mr-1",
                                                  style: { maxWidth: "88%" },
                                                  attrs: {
                                                    options:
                                                      _vm.category_options,
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                  },
                                                  model: {
                                                    value: _vm.form.category,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "category",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.category",
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !_vm.newCategory
                                              ? _c("feather-icon", {
                                                  staticClass: "mr-1",
                                                  attrs: {
                                                    icon: "PlusIcon",
                                                    size: "20",
                                                  },
                                                  on: {
                                                    click: _vm.getNewCategory,
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.newCategory
                                              ? _c("b-form-input", {
                                                  attrs: {
                                                    id: "new-category",
                                                    type: "text",
                                                    placeholder:
                                                      "Enter new category",
                                                    state:
                                                      errors.length > 0
                                                        ? false
                                                        : null,
                                                  },
                                                  model: {
                                                    value: _vm.form.category,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "category",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.category",
                                                  },
                                                })
                                              : _vm._e(),
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Billable: ",
                                    "label-for": "billable",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("b-form-radio-group", {
                                    attrs: {
                                      size: "sm",
                                      options: _vm.btn_options,
                                      "button-variant": "outline-secondary",
                                      name: "radio-btn-outline",
                                      buttons: "",
                                    },
                                    model: {
                                      value: _vm.form.billable,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "billable", $$v)
                                      },
                                      expression: "form.billable",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Cost Price: ",
                                    "label-for": "cost",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required|integer",
                                      name: "Cost",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter Cost price",
                                              },
                                              model: {
                                                value: _vm.form.cost,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "cost",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.cost",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "GST: ",
                                    "label-for": "gst",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required|integer",
                                      name: "GST",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter GST in %",
                                              },
                                              model: {
                                                value: _vm.form.gst,
                                                callback: function ($$v) {
                                                  _vm.$set(_vm.form, "gst", $$v)
                                                },
                                                expression: "form.gst",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Arrived: ",
                                    "label-for": "arrived",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required|integer",
                                      name: "Arrived",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder:
                                                  "Enter Arrived Count",
                                              },
                                              model: {
                                                value: _vm.form.arrived,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "arrived",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.arrived",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Private selling price: ",
                                    "label-for": "private",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required|integer",
                                      name: "Private",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter Private SP",
                                              },
                                              model: {
                                                value:
                                                  _vm.form
                                                    .private_selling_price,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "private_selling_price",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.private_selling_price",
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
                            { attrs: { cols: "11" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "MJPJAY Selling Price: ",
                                    "label-for": "mjpjay",
                                    "label-cols-md": "4",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      rules: "required|integer",
                                      name: "mjpjay",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter MJPJAY SP",
                                              },
                                              model: {
                                                value:
                                                  _vm.form.mjpjay_selling_price,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "mjpjay_selling_price",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.mjpjay_selling_price",
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
                            { attrs: { "offset-md": "5" } },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "ripple",
                                      rawName: "v-ripple.400",
                                      value: "rgba(255, 255, 255, 0.15)",
                                      expression: "'rgba(255, 255, 255, 0.15)'",
                                      modifiers: { 400: true },
                                    },
                                  ],
                                  staticClass: "mr-1 submit",
                                  attrs: { type: "submit", variant: "primary" },
                                },
                                [
                                  _vm._v(
                                    "\r\n          Add Product\r\n          "
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");



 // eslint-disable-next-line object-curly-newline

 // ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
}); // Install English and Arabic localizations.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
}); // ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////
// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }
// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }
// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }
// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation
//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }
// export const date = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }
// export const max = (val, max) => {
//   // If blank return
//   if (val === undefined || val === null) return true
//   return val.length <= max || `More than ${max} characters are not allowed`
// }
// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }
// export const min = (val, min) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   return val.length >= min || `Minimum ${min} characters are required`
// }
// export const num_range = (val, min, max) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);


var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }

  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */

  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */


  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */

  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueSelectMultiple.vue?vue&type=template&id=5b17f230& */ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230&");
/* harmony import */ var _VueSelectMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueSelectMultiple.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VueSelectMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSelectMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VueSelectMultiple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSelectMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VueSelectMultiple.vue?vue&type=template&id=5b17f230& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/vue-select/VueSelectMultiple.vue?vue&type=template&id=5b17f230&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSelectMultiple_vue_vue_type_template_id_5b17f230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/stock-maintenance/AddNewProduct.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true& */ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true&");
/* harmony import */ var _AddNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewProduct.vue?vue&type=script&lang=js& */ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& */ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a26d403",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/stock-maintenance/AddNewProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=style&index=0&id=4a26d403&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_style_index_0_id_4a26d403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/stock-maintenance/AddNewProduct.vue?vue&type=template&id=4a26d403&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewProduct_vue_vue_type_template_id_4a26d403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);