(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[147],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_button_Button_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/Button.vue */ "./resources/js/src/views/components/button/Button.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









Object(vee_validate__WEBPACK_IMPORTED_MODULE_2__["extend"])("min", Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__["min"]), {}, {
  message: "The {_field_} field must be at least {length} characters long"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_2__["extend"])("max", Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__["max"]), {}, {
  message: "The {_field_} field must be at most {length} characters long"
}));
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    "b-tooltip": bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["VBTooltip"]
  },
  components: {
    Button: _components_button_Button_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTab"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BLink"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"]
  },
  data: function data() {
    return {
      //assests
      appLogoImage: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeConfig"].app.appLogoImage,
      sideImg: __webpack_require__(/*! @/assets/images/pages/register-v2.svg */ "./resources/js/src/assets/images/pages/register-v2.svg"),
      staffData: {},
      doctorData: {},
      adminData: {},
      file: "",
      errors: "",
      required: _validations__WEBPACK_IMPORTED_MODULE_7__["required"],
      email: _validations__WEBPACK_IMPORTED_MODULE_7__["email"]
    };
  },
  methods: {
    handleFileUpload: function handleFileUpload() {
      this.file = event.target.files[0];
      console.log(this.file); //   this.file = this.$refs.file.files[0];
      //   console.log(this.file);
      //    this.profile_pic = this.file;
    },
    handleFileUploadD: function handleFileUploadD() {
      // this.profile_pic = this.file;
      // console.log(this.file + "file");
      // this.file = this.$refs.file.files[0];
      // console.log(this.file);
      this.file = event.target.files[0];
      console.log(this.file);
    },
    handleFileUploadA: function handleFileUploadA() {
      this.profile_pic = this.file;
      console.log(this.file + "file");
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    registerStaff: function registerStaff() {
      var _this = this;

      this.$refs.registerForm.validate().then(function (success) {
        if (success) {
          var staffFormData = new FormData();
          staffFormData.append("username", _this.staffData.username);
          staffFormData.append("branch", _this.staffData.branch);
          staffFormData.append("category", "Staff");
          staffFormData.append("email", _this.staffData.email);
          staffFormData.append("password", _this.staffData.password);
          staffFormData.append("phone", _this.staffData.phone);
          staffFormData.append("emphone", _this.staffData.emphone);
          staffFormData.append("profile_pic", _this.file);
          staffFormData.append("designation", _this.staffData.designation);
          staffFormData.append("password_confirmation", _this.staffData.password_confirmation);
          axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/register", staffFormData).then(function (res) {
            console.log(res);

            if (status == "true") {
              _this.$router.push("/login");
            }

            _this.$router.push("/login");
          })["catch"](function (err) {
            console.log(err);

            if (status == "false") {
              alert("Registration error");
            }
          });
        }
      });
    },
    registerDoctor: function registerDoctor() {
      var _this2 = this;

      var doctorFormData = new FormData();
      doctorFormData.append("username", this.doctorData.username);
      doctorFormData.append("branch", this.doctorData.branch);
      doctorFormData.append("category", "Doctor");
      doctorFormData.append("email", this.doctorData.email);
      doctorFormData.append("password", this.doctorData.password);
      doctorFormData.append("phone", this.doctorData.phone);
      doctorFormData.append("emphone", this.doctorData.emphone);
      doctorFormData.append("profile_pic", this.file);
      doctorFormData.append("designation", this.doctorData.designation);
      doctorFormData.append("password_confirmation", this.doctorData.password_confirmation);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/register", doctorFormData).then(function (res) {
        console.log(res);

        if (status == "true") {
          _this2.$router.push("/login");
        }

        _this2.$router.push("/login");

        if (status == "false") {
          alert("Registration error");
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    registerAdmin: function registerAdmin() {
      var _this3 = this;

      // this.$refs.registerForm.validate().then((success) => {
      //     if (success) {
      var adminFormData = new FormData();
      adminFormData.append("username", this.adminData.username);
      adminFormData.append("branch", this.adminData.branch);
      adminFormData.append("category", "Admin");
      adminFormData.append("email", this.adminData.email);
      adminFormData.append("password", this.adminData.password);
      adminFormData.append("phone", this.adminData.phone);
      adminFormData.append("emphone", this.adminData.emphone);
      adminFormData.append("profile_pic", this.file);
      adminFormData.append("designation", this.adminData.designation);
      adminFormData.append("password_confirmation", this.adminData.password_confirmation);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/register", adminFormData).then(function (res) {
        console.log(res);

        if (status == "true") {
          _this3.$router.push("/login");
        }

        _this3.$router.push("/login");

        if (status == "false") {
          alert("Registration error");
        }
      })["catch"](function (err) {
        console.log(err);
      }); // }
      // });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toastification-close-icon[data-v-7834b2fa],\n.toastification-title[data-v-7834b2fa] {\n  line-height: 26px;\n}\n.toastification-title[data-v-7834b2fa] {\n  color: inherit;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" },
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-toast")
                },
              },
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "brand-logo pt-2" }, [
          _c("a", { staticClass: "row", attrs: { href: "#" } }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: _vm.appLogoImage,
                width: "50",
                alt: "The Renal Project",
              },
            }),
            _vm._v(" "),
            _c("h2", { staticClass: "brand-text text-primary ml-1 pt-1" }, [
              _vm._v("Vidur"),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6 d-none d-lg-flex align-items-center" },
          [
            _c(
              "div",
              {
                staticClass:
                  "w-100 align-items-center justify-content-center px-5",
              },
              [_c("img", { attrs: { src: _vm.sideImg, alt: "Filler Image" } })]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 align-items-center" }, [
        _c(
          "div",
          { staticClass: "col-sm-8 col-md-6 col-lg-12 p-xl-3 mx-auto" },
          [
            _c("div", { staticClass: "px-2" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "mb-2" }, [
                _c(
                  "div",
                  [
                    _c(
                      "b-card",
                      { attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-tabs",
                          {
                            staticClass: "align-items-center",
                            attrs: { pills: "", card: "" },
                          },
                          [
                            _c(
                              "b-tab",
                              { attrs: { title: "Staff", active: "" } },
                              [
                                _c(
                                  "validation-observer",
                                  { ref: "registerForm" },
                                  [
                                    _c(
                                      "form",
                                      {
                                        staticClass: "auth-register-form",
                                        attrs: { method: "POST" },
                                        on: {
                                          submit: function ($event) {
                                            $event.preventDefault()
                                            return _vm.registerStaff()
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "branch" } },
                                              [_vm._v("Branch")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.staffData.branch,
                                                    expression:
                                                      "\n                                                            staffData.branch\n                                                        ",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "branch",
                                                  id: "branch",
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$selectedVal =
                                                      Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function (o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function (o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                    _vm.$set(
                                                      _vm.staffData,
                                                      "branch",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Select Branch\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Branch 1",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Branch 1\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Branch 2",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Branch 2\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Branch 3",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Branch 3\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "username" } },
                                              [_vm._v("Username")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Username",
                                                vid: "username",
                                                rules: "required",
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .username,
                                                            expression:
                                                              "\n                                                                staffData.username\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "username",
                                                          name: "username",
                                                          placeholder:
                                                            "Enter your username",
                                                          state:
                                                            errors.length > 0
                                                              ? false
                                                              : null,
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData
                                                              .username,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "username",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "email" } },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "email",
                                                vid: "email",
                                                rules: "required|email",
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .email,
                                                            expression:
                                                              "\n                                                                staffData.email\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "email",
                                                          id: "email",
                                                          name: "email",
                                                          placeholder:
                                                            "Enter your email",
                                                          state:
                                                            errors.length > 0
                                                              ? false
                                                              : null,
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData.email,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "email",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "password" } },
                                              [_vm._v("Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "password",
                                                vid: "password",
                                                rules: "required|min:6",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .password,
                                                            expression:
                                                              "\n                                                                staffData.password\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "password",
                                                          name: "password",
                                                          placeholder:
                                                            "Enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData
                                                              .password,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "password",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "ml-1 mt-1",
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-danger",
                                                            },
                                                            [_vm._v("* ")]
                                                          ),
                                                          _vm._v(
                                                            "A-Z, a-z, 0-9 &\n                                                            special\n                                                            character are\n                                                            mandatory\n                                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "confirm_password",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "Confirm\n                                                        Password"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "confirm_password",
                                                vid: "confirm_password",
                                                rules:
                                                  "required|min:6|confirmed:password",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .password_confirmation,
                                                            expression:
                                                              "\n                                                                staffData.password_confirmation\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "confirm_password",
                                                          name: "confirm_password",
                                                          placeholder:
                                                            "Re-enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData
                                                              .password_confirmation,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "password_confirmation",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "phone" } },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "phone",
                                                vid: "phone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .phone,
                                                            expression:
                                                              "\n                                                                staffData.phone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "phone",
                                                          name: "phone",
                                                          placeholder:
                                                            "Enter your phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData.phone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "phone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "emphone" } },
                                              [
                                                _vm._v(
                                                  "Emergency\n                                                        Phone"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "emphone",
                                                vid: "emphone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.staffData
                                                                .emphone,
                                                            expression:
                                                              "\n                                                                staffData.emphone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "emphone",
                                                          name: "emphone",
                                                          placeholder:
                                                            "Enter your emergency phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.staffData
                                                              .emphone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.staffData,
                                                              "emphone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "designation" } },
                                              [_vm._v("Designation")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.staffData.designation,
                                                    expression:
                                                      "\n                                                            staffData.designation\n                                                        ",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "branch",
                                                  id: "branch",
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$selectedVal =
                                                      Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function (o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function (o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                    _vm.$set(
                                                      _vm.staffData,
                                                      "designation",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Select your\n                                                            designation\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Junior Staff",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Junior Staff\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "Intern" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Intern\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value:
                                                        "Junior Technician",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Junior\n                                                            Technician\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value:
                                                        "Senior Technician",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Senior\n                                                            Technician\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value:
                                                        "On Call Technician",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            On Call\n                                                            Technician\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Support Staff",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Support Staff\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Operational Head",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Operational Head\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "Manager" },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Manager\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "General Manager",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            General Manager\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "Clinical Manager",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Clinical Manager\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value:
                                                        "Assistant Manager",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Assistant\n                                                            Manager\n                                                        "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.staffData.category,
                                              expression:
                                                "\n                                                        staffData.category\n                                                    ",
                                            },
                                          ],
                                          attrs: {
                                            type: "hidden",
                                            id: "category",
                                            value: "Staff",
                                          },
                                          domProps: {
                                            value: _vm.staffData.category,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.staffData,
                                                "category",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "profile_pic" } },
                                              [
                                                _vm._v(
                                                  "Upload your profile\n                                                        picture"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              ref: "file",
                                              attrs: {
                                                type: "file",
                                                id: "file",
                                                name: "file",
                                                accept: "image/*",
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.handleFileUpload(
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "ml-1" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [_vm._v("* ")]
                                                ),
                                                _vm._v(
                                                  "Max size 1 mb &\n                                                        only jpg, png format\n                                                        allowed"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-primary ml-1" },
                                          [
                                            _vm._v(
                                              "\n                                                    By signing up, you agree\n                                                    to our Terms of Use and\n                                                    Privacy Policy\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-block mt-3",
                                            attrs: { type: "submit" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Sign up\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-card-text",
                                          { staticClass: "text-center mt-2" },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                "Already have an account?\n                                                    "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "b-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "auth-login",
                                                  },
                                                },
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    " \n                                                            Login"
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              { attrs: { title: "Doctor" } },
                              [
                                _c(
                                  "validation-observer",
                                  { ref: "registerForm" },
                                  [
                                    _c(
                                      "form",
                                      {
                                        staticClass: "auth-register-form",
                                        attrs: { method: "POST" },
                                        on: {
                                          submit: function ($event) {
                                            $event.preventDefault()
                                            return _vm.registerDoctor()
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "username" } },
                                              [_vm._v("Username")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "username",
                                                vid: "username",
                                                rules: "required|min:3|max:20",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .username,
                                                            expression:
                                                              "\n                                                                doctorData.username\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "username",
                                                          name: "username",
                                                          placeholder:
                                                            "Enter your username",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .username,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "username",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "email" } },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "email",
                                                vid: "email",
                                                rules: "required|email",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .email,
                                                            expression:
                                                              "\n                                                                doctorData.email\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "email",
                                                          id: "email",
                                                          name: "email",
                                                          placeholder:
                                                            "Enter your email",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .email,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "email",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "password" } },
                                              [_vm._v("Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "password",
                                                vid: "password",
                                                rules: "required|min:6|max:20",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .password,
                                                            expression:
                                                              "\n                                                                doctorData.password\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "password",
                                                          name: "password",
                                                          placeholder:
                                                            "Enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .password,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "password",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "ml-1 mt-1",
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-danger",
                                                            },
                                                            [_vm._v("* ")]
                                                          ),
                                                          _vm._v(
                                                            "A-Z, a-z, 0-9 &\n                                                            special\n                                                            character are\n                                                            mandatory\n                                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "passwordConfirmation",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "Confirm\n                                                        Password"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "passwordConfirmation",
                                                vid: "passwordConfirmation",
                                                rules:
                                                  "required|min:6|max:20|confirmed:password",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .password_confirmation,
                                                            expression:
                                                              "\n                                                                doctorData.password_confirmation\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "passwordConfirmation",
                                                          name: "passwordConfirmation",
                                                          placeholder:
                                                            "Re-enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .password_confirmation,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "password_confirmation",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "phone" } },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "phone",
                                                vid: "phone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .phone,
                                                            expression:
                                                              "\n                                                                doctorData.phone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "phone",
                                                          name: "phone",
                                                          placeholder:
                                                            "Enter your phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .phone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "phone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "emphone" } },
                                              [
                                                _vm._v(
                                                  "Emergency\n                                                        Phone"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "emphone",
                                                vid: "emphone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.doctorData
                                                                .emphone,
                                                            expression:
                                                              "\n                                                                doctorData.emphone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "emphone",
                                                          name: "emphone",
                                                          placeholder:
                                                            "Enter your emergency phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.doctorData
                                                              .emphone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.doctorData,
                                                              "emphone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "profile_pic" } },
                                              [
                                                _vm._v(
                                                  "Upload your profile\n                                                        picture"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              ref: "file",
                                              attrs: {
                                                type: "file",
                                                id: "file",
                                                name: "file",
                                                accept: "image/*",
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.handleFileUploadD(
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "ml-1" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [_vm._v("* ")]
                                                ),
                                                _vm._v(
                                                  "Max size 1 mb &\n                                                        only jpg, png format\n                                                        allowed"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.doctorData.category,
                                              expression:
                                                "\n                                                        doctorData.category\n                                                    ",
                                            },
                                          ],
                                          attrs: {
                                            type: "hidden",
                                            id: "category",
                                            value: "Doctor",
                                          },
                                          domProps: {
                                            value: _vm.doctorData.category,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.doctorData,
                                                "category",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-primary ml-1" },
                                          [
                                            _vm._v(
                                              "\n                                                    By signing up, you agree\n                                                    to our Terms of Use and\n                                                    Privacy Policy\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-block mt-3",
                                            attrs: { type: "submit" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Sign up\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-card-text",
                                          { staticClass: "text-center mt-2" },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                "Already have an account?\n                                                    "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "b-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "auth-login",
                                                  },
                                                },
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    " \n                                                            Login"
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              { attrs: { title: "Admin" } },
                              [
                                _c(
                                  "validation-observer",
                                  { ref: "registerAdmin" },
                                  [
                                    _c(
                                      "form",
                                      {
                                        staticClass: "auth-register-form",
                                        attrs: { method: "POST" },
                                        on: {
                                          submit: function ($event) {
                                            $event.preventDefault()
                                            return _vm.registerAdmin()
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "username" } },
                                              [_vm._v("Username")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "username",
                                                vid: "username",
                                                rules: "required|min:3|max:20",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .username,
                                                            expression:
                                                              "\n                                                                adminData.username\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "username",
                                                          name: "username",
                                                          placeholder:
                                                            "Enter your username",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData
                                                              .username,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "username",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "email" } },
                                              [_vm._v("Email")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "email",
                                                vid: "email",
                                                rules: "required|email",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .email,
                                                            expression:
                                                              "\n                                                                adminData.email\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "email",
                                                          id: "email",
                                                          name: "email",
                                                          placeholder:
                                                            "Enter your email",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData.email,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "email",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "password" } },
                                              [_vm._v("Password")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "password",
                                                vid: "password",
                                                rules: "required|min:6|max:20",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .password,
                                                            expression:
                                                              "\n                                                                adminData.password\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "password",
                                                          name: "password",
                                                          placeholder:
                                                            "Enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData
                                                              .password,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "password",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "ml-1 mt-1",
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-danger",
                                                            },
                                                            [_vm._v("* ")]
                                                          ),
                                                          _vm._v(
                                                            "A-Z, a-z, 0-9 &\n                                                            special\n                                                            character are\n                                                            mandatory\n                                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "passwordConfirmation",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "Confirm\n                                                        Password"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "passwordConfirmation",
                                                vid: "passwordConfirmation",
                                                rules:
                                                  "required|min:6|max:20|confirmed:password",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .password_confirmation,
                                                            expression:
                                                              "\n                                                                adminData.password_confirmation\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "password",
                                                          id: "passwordConfirmation",
                                                          name: "passwordConfirmation",
                                                          placeholder:
                                                            "Re-enter your password",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData
                                                              .password_confirmation,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "password_confirmation",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "phone" } },
                                              [_vm._v("Phone")]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "phone",
                                                vid: "phone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .phone,
                                                            expression:
                                                              "\n                                                                adminData.phone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "phone",
                                                          name: "phone",
                                                          placeholder:
                                                            "Enter your phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData.phone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "phone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "emphone" } },
                                              [
                                                _vm._v(
                                                  "Emergency\n                                                        Phone"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "emphone",
                                                vid: "emphone",
                                                rules: "required|min:10|max:10",
                                                state:
                                                  _vm.errors.length > 0
                                                    ? false
                                                    : null,
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.adminData
                                                                .emphone,
                                                            expression:
                                                              "\n                                                                adminData.emphone\n                                                            ",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          id: "emphone",
                                                          name: "emphone",
                                                          placeholder:
                                                            "Enter your emergency phone number",
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.adminData
                                                              .emphone,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.adminData,
                                                              "emphone",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(errors[0])
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "profile_pic" } },
                                              [
                                                _vm._v(
                                                  "Upload your profile\n                                                        picture"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              ref: "file",
                                              attrs: {
                                                type: "file",
                                                id: "file",
                                                name: "file",
                                                accept: "image/*",
                                              },
                                              on: {
                                                change: function ($event) {
                                                  return _vm.handleFileUploadA()
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "ml-1" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [_vm._v("* ")]
                                                ),
                                                _vm._v(
                                                  "Max size 1 mb &\n                                                        only jpg, png format\n                                                        allowed"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.adminData.category,
                                              expression:
                                                "\n                                                        adminData.category\n                                                    ",
                                            },
                                          ],
                                          attrs: {
                                            type: "hidden",
                                            id: "category",
                                            value: "Admin",
                                          },
                                          domProps: {
                                            value: _vm.adminData.category,
                                          },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.adminData,
                                                "category",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "text-primary ml-1" },
                                          [
                                            _vm._v(
                                              "\n                                                    By signing up, you agree\n                                                    to our Terms of Use and\n                                                    Privacy Policy\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-block mt-3",
                                            attrs: { type: "submit" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Sign up\n                                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-card-text",
                                          { staticClass: "text-center mt-2" },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                "Already have an account?\n                                                    "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "b-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "auth-login",
                                                  },
                                                },
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    " \n                                                            Login"
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
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
              ]),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("h2", { staticClass: "card-title text-primary mb-1" }, [
        _vm._v(
          "\n                            Register to Vidur\n                        "
        ),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-text mb-2" }, [
        _vm._v(
          "\n                            Please fill in this form to create an account.\n                        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834b2fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/assets/images/pages/register-v2.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register-v2.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/pages/register-v2.svg";

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=71e1b915& */ "./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=71e1b915& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register.vue?vue&type=template&id=71e1b915&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_71e1b915___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);