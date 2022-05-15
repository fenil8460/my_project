(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _components_button_Button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/Button.vue */ "./resources/js/src/views/components/button/Button.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    "b-tooltip": bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["VBTooltip"]
  },
  components: {
    Button: _components_button_Button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTab"]
  },
  data: function data() {
    return {
      //api credentials
      //assests
      appLogoImage: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeConfig"].app.appLogoImage,
      sideImg: __webpack_require__(/*! @/assets/images/pages/register-v2.svg */ "./resources/js/src/assets/images/pages/register-v2.svg"),
      fundData: {// category: "Staff",
        // username: null,
        // email: null,
        // password: null,
        // password_confirmation: null,
        // phone: null,
        // emphone: null,
        // designation: null,
        // branch: null,
      },
      file: "" // doctorProfilePic: "",
      // adminProfilePic: "",

    };
  },
  methods: {
    // mode(mo) {
    //     this.fundData.type = mo;
    // },
    staffClick: function staffClick(category) {
      this.fundData.category = category;
      console.log(category);
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.profile_pic = this.file;
    },
    register: function register() {
      var _this = this;

      var formData = new FormData();
      formData.append("type", this.fundData.type);
      formData.append("username", this.fundData.username);
      formData.append("branch", this.fundData.branch);
      formData.append("category", this.fundData.category);
      formData.append("email", this.fundData.email);
      formData.append("password", this.fundData.password);
      formData.append("phone", this.fundData.phone);
      formData.append("emphone", this.fundData.emphone);
      formData.append("profile_pic", this.file);
      formData.append("designation", this.fundData.designation);
      formData.append("password_confirmation", this.fundData.password_confirmation);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/register", formData).then(function (res) {
        // console.log(res);
        _this.$router.push("/login"); // this.$router.push("/login");

      })["catch"](function (err) {
        alert("Registration error");
      });
    }
  },
  computed: {
    staffTabClass: function staffTabClass() {
      if (this.fundData.type == "staff") {
        return "nav-link active";
      } else {
        return "nav-link";
      }
    },
    doctorTabClass: function doctorTabClass() {
      if (this.fundData.type == "doctor") {
        return "nav-link active";
      } else {
        return "nav-link";
      }
    },
    adminTabClass: function adminTabClass() {
      if (this.fundData.type == "admin") {
        return "nav-link active";
      } else {
        return "nav-link";
      }
    }
  }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "brand-logo pt-2 ml-1" }, [
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
          { staticClass: "col-lg-6 m-0 d-none d-lg-flex align-items-center" },
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
                          { attrs: { pills: "", card: "" } },
                          [
                            _c(
                              "b-tab",
                              {
                                attrs: { title: "Staff", active: "" },
                                on: {
                                  click: function ($event) {
                                    return _vm.staffClick("Staff")
                                  },
                                },
                              },
                              [
                                _c(
                                  "form",
                                  {
                                    staticClass: "auth-register-form",
                                    attrs: { method: "POST" },
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.register.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
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
                                              value: _vm.fundData.branch,
                                              expression:
                                                "\n                                                        fundData.branch\n                                                    ",
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
                                                _vm.fundData,
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
                                                "\n                                                        Select Branch\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "A" } },
                                            [
                                              _vm._v(
                                                "\n                                                        Branch 1\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "B" } },
                                            [
                                              _vm._v(
                                                "\n                                                        Branch 2\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "C" } },
                                            [
                                              _vm._v(
                                                "\n                                                        Branch 3\n                                                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "username" } },
                                        [_vm._v("Username")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.username,
                                            expression:
                                              "\n                                                        fundData.username\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "username",
                                          name: "username",
                                          placeholder: "Enter your username",
                                        },
                                        domProps: {
                                          value: _vm.fundData.username,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "username",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "email" } }, [
                                        _vm._v("Email"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.email,
                                            expression: "fundData.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "email",
                                          name: "email",
                                          placeholder: "Enter your email",
                                        },
                                        domProps: { value: _vm.fundData.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "email",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "password" } },
                                        [_vm._v("Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.password,
                                            expression:
                                              "\n                                                        fundData.password\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "password",
                                          name: "password",
                                          placeholder: "Enter your password",
                                        },
                                        domProps: {
                                          value: _vm.fundData.password,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "confirm_password" } },
                                        [_vm._v("Confirm Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.fundData
                                                .password_confirmation,
                                            expression:
                                              "\n                                                        fundData.password_confirmation\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "confirm_password",
                                          name: "confirm_password",
                                          placeholder: "Re-enter your password",
                                        },
                                        domProps: {
                                          value:
                                            _vm.fundData.password_confirmation,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password_confirmation",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "phone" } }, [
                                        _vm._v("Phone"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.phone,
                                            expression: "fundData.phone",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "phone",
                                          name: "phone",
                                          placeholder:
                                            "Enter your phone number",
                                        },
                                        domProps: { value: _vm.fundData.phone },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "phone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "emphone" } },
                                        [_vm._v("Emergency Phone")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.emphone,
                                            expression:
                                              "\n                                                        fundData.emphone\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "emphone",
                                          name: "emphone",
                                          placeholder:
                                            "Enter your emergency phone number",
                                        },
                                        domProps: {
                                          value: _vm.fundData.emphone,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "emphone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
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
                                              value: _vm.fundData.designation,
                                              expression:
                                                "\n                                                        fundData.designation\n                                                    ",
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
                                                _vm.fundData,
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
                                                "\n                                                        Select your\n                                                        designation\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: { value: "Junior Staff" },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Junior Staff\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Intern" } },
                                            [
                                              _vm._v(
                                                "\n                                                        Intern\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "Junior Technician",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Junior Technician\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "Senior Technician",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Senior Technician\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "On Call Technician",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        On Call Technician\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: { value: "Support Staff" },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Support Staff\n                                                    "
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
                                                "\n                                                        Operational Head\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Manager" } },
                                            [
                                              _vm._v(
                                                "\n                                                        Manager\n                                                    "
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
                                                "\n                                                        General Manager\n                                                    "
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
                                                "\n                                                        Clinical Manager\n                                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "Assistant Manager",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Assistant Manager\n                                                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.fundData.category,
                                          expression: "fundData.category",
                                        },
                                      ],
                                      attrs: {
                                        type: "hidden",
                                        id: "category",
                                        value: "Staff",
                                      },
                                      domProps: {
                                        value: _vm.fundData.category,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.fundData,
                                            "category",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "profile_pic" } },
                                        [
                                          _vm._v(
                                            "Upload your profile\n                                                    picture"
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
                                            return _vm.handleFileUpload()
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("small", { staticClass: "ml-1" }, [
                                        _vm._v(
                                          "*Max size 1 mb & only\n                                                    jpg, png format\n                                                    allowed"
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-primary ml-1" },
                                      [
                                        _vm._v(
                                          "\n                                                By signing up, you agree to\n                                                our Terms of Use and Privacy\n                                                Policy\n                                            "
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
                                          "\n                                                Sign up\n                                            "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              {
                                attrs: { title: "Doctor" },
                                on: {
                                  click: function ($event) {
                                    return _vm.staffClick("Doctor")
                                  },
                                },
                              },
                              [
                                _c(
                                  "form",
                                  {
                                    staticClass: "auth-register-form",
                                    attrs: { method: "POST" },
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.register.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "username" } },
                                        [_vm._v("Username")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.username,
                                            expression:
                                              "\n                                                        fundData.username\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "username",
                                          name: "username",
                                          placeholder: "Enter your username",
                                        },
                                        domProps: {
                                          value: _vm.fundData.username,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "username",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "email" } }, [
                                        _vm._v("Email"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.email,
                                            expression: "fundData.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "email",
                                          name: "email",
                                          placeholder: "Enter your email",
                                        },
                                        domProps: { value: _vm.fundData.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "email",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "password" } },
                                        [_vm._v("Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.password,
                                            expression:
                                              "\n                                                        fundData.password\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "password",
                                          name: "password",
                                          placeholder: "Enter your password",
                                        },
                                        domProps: {
                                          value: _vm.fundData.password,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "password_confirmation",
                                          },
                                        },
                                        [_vm._v("Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.fundData
                                                .password_confirmation,
                                            expression:
                                              "\n                                                        fundData.password_confirmation\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "password_confirmation",
                                          name: "password_confirmation",
                                          placeholder: "Re-enter your password",
                                        },
                                        domProps: {
                                          value:
                                            _vm.fundData.password_confirmation,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password_confirmation",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "phone" } }, [
                                        _vm._v("Phone"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.phone,
                                            expression: "fundData.phone",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "phone",
                                          name: "phone",
                                          placeholder:
                                            "Enter your phone number",
                                        },
                                        domProps: { value: _vm.fundData.phone },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "phone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "emphone" } },
                                        [_vm._v("Emergency Phone")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.emphone,
                                            expression:
                                              "\n                                                        fundData.emphone\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "emphone",
                                          name: "emphone",
                                          placeholder:
                                            "Enter your emergency phone number",
                                        },
                                        domProps: {
                                          value: _vm.fundData.emphone,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "emphone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "profile_pic" } },
                                        [
                                          _vm._v(
                                            "Upload your profile\n                                                    picture"
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
                                            return _vm.handleFileUpload()
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("small", { staticClass: "ml-1" }, [
                                        _vm._v(
                                          "*Max size 1 mb & only\n                                                    jpg, png format\n                                                    allowed"
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-primary ml-1" },
                                      [
                                        _vm._v(
                                          "\n                                                By signing up, you agree to\n                                                our Terms of Use and Privacy\n                                                Policy\n                                            "
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
                                          "\n                                                Sign up\n                                            "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              {
                                attrs: { title: "Admin" },
                                on: {
                                  click: function ($event) {
                                    return _vm.staffClick("Admin")
                                  },
                                },
                              },
                              [
                                _c(
                                  "form",
                                  {
                                    staticClass: "auth-register-form",
                                    attrs: { method: "POST" },
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.register.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "username" } },
                                        [_vm._v("Username")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.username,
                                            expression:
                                              "\n                                                        fundData.username\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "username",
                                          name: "username",
                                          placeholder: "Enter your username",
                                        },
                                        domProps: {
                                          value: _vm.fundData.username,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "username",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "email" } }, [
                                        _vm._v("Email"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.email,
                                            expression: "fundData.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "email",
                                          name: "email",
                                          placeholder: "Enter your email",
                                        },
                                        domProps: { value: _vm.fundData.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "email",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "password" } },
                                        [_vm._v("Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.password,
                                            expression:
                                              "\n                                                        fundData.password\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "password",
                                          name: "password",
                                          placeholder: "Enter your password",
                                        },
                                        domProps: {
                                          value: _vm.fundData.password,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "password_confirmation",
                                          },
                                        },
                                        [_vm._v("Confirm Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.fundData
                                                .password_confirmation,
                                            expression:
                                              "\n                                                        fundData.password_confirmation\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "password_confirmation",
                                          name: "password_confirmation",
                                          placeholder: "Re-enter your password",
                                        },
                                        domProps: {
                                          value:
                                            _vm.fundData.password_confirmation,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "password_confirmation",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "phone" } }, [
                                        _vm._v("Phone"),
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.phone,
                                            expression: "fundData.phone",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "phone",
                                          name: "phone",
                                          placeholder:
                                            "Enter your phone number",
                                        },
                                        domProps: { value: _vm.fundData.phone },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "phone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "emphone" } },
                                        [_vm._v("Emergency Phone")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fundData.emphone,
                                            expression:
                                              "\n                                                        fundData.emphone\n                                                    ",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "emphone",
                                          name: "emphone",
                                          placeholder:
                                            "Enter your emergency phone number",
                                        },
                                        domProps: {
                                          value: _vm.fundData.emphone,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.fundData,
                                              "emphone",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "profile_pic" } },
                                        [
                                          _vm._v(
                                            "Upload your profile\n                                                    picture"
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control-file",
                                        attrs: {
                                          type: "file",
                                          id: "profile_pic",
                                          name: "profile_pic",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("small", { staticClass: "ml-1" }, [
                                        _vm._v(
                                          "*Max size 1 mb & only\n                                                    jpg, png format\n                                                    allowed"
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-primary ml-1" },
                                      [
                                        _vm._v(
                                          "\n                                                By signing up, you agree to\n                                                our Terms of Use and Privacy\n                                                Policy\n                                            "
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
                                          "\n                                                Sign up\n                                            "
                                        ),
                                      ]
                                    ),
                                  ]
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

/***/ "./resources/js/src/assets/images/pages/register-v2.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register-v2.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/pages/register-v2.svg";

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register-v2.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register-v2.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register-v2.vue?vue&type=template&id=51f399e4& */ "./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4&");
/* harmony import */ var _Register_v2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register-v2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_v2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/authentication/Register-v2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_v2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register-v2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_v2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register-v2.vue?vue&type=template&id=51f399e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/authentication/Register-v2.vue?vue&type=template&id=51f399e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_v2_vue_vue_type_template_id_51f399e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);