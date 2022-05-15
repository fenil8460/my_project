(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[187],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-html-to-paper */ "./node_modules/vue-html-to-paper/dist/index.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3__);
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






var options = {
  name: 'Patient Bill',
  specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
  styles: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'https://unpkg.com/kidlat-css/css/kidlat.css']
};
vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_3___default.a, options);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PatientBill',
  components: {
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormValidFeedback"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  directives: {
    'b-modal': vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      rows: [],
      due: '',
      id: ''
    };
  },
  methods: {
    payDue: function payDue() {
      console.log(this.due);
      this.due = '';
    },
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    send_email: function send_email() {
      console.log('email');
    }
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    var token = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_5__["isUserLoggedIn"])();
    console.log(token); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://127.0.0.1:8000/api/staff/patient/bill/' + this.id).then(function (data) {
      console.log(data['data']);
      _this.rows = data["data"]['bill_data'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-html-to-paper/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-html-to-paper/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function addStyles (win, styles) {
  styles.forEach(style => {
    let link = win.document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', style);
    win.document.getElementsByTagName('head')[0].appendChild(link);
  });
}

function openWindow (url, name, props) {
  let windowRef = null;
  windowRef = window.open(url, name, props);
  if (!windowRef.opener) {
    windowRef.opener = self;
  }
  windowRef.focus();
  return windowRef;
}
  
const VueHtmlToPaper = {
  install (Vue, options = {}) {
    Vue.prototype.$htmlToPaper = (el, localOptions, cb = () => true) => {
      let defaultName = '_blank', 
        defaultSpecs = ['fullscreen=yes','titlebar=yes', 'scrollbars=yes'],
        defaultReplace = true,
        defaultStyles = [];
      let {
        name = defaultName,
        specs = defaultSpecs,
        replace = defaultReplace,
        styles = defaultStyles,
      } = options;

      // If has localOptions
      // TODO: improve logic
      if (!!localOptions) {
        if (localOptions.name) name = localOptions.name;
        if (localOptions.specs) specs = localOptions.specs;
        if (localOptions.replace) replace = localOptions.replace;
        if (localOptions.styles) styles = localOptions.styles;
      }

      specs = !!specs.length ? specs.join(',') : '';

      const element = window.document.getElementById(el);

      if (!element) {
        alert(`Element to print #${el} not found!`);
        return;
      }
      
      const url = '';
      const win = openWindow(url, name, specs);

      win.document.write(`
        <html>
          <head>
            <title>${window.document.title}</title>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `);

      addStyles(win, styles);
      
      setTimeout(() => {
        win.document.close();
        win.focus();
        win.print();
        setTimeout(function () {window.close();}, 1);
        cb();
      }, 1000);
        
      return true;
    };
  },
};

exports.default = VueHtmlToPaper;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "mb-2" },
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
            staticClass: "m-1",
            attrs: { variant: "primary" },
            on: {
              click: function ($event) {
                return _vm.$router.push({
                  name: "sessionSheet",
                  params: { id: _vm.id },
                })
              },
            },
          },
          [_vm._v("Dialysis Session Sheet")]
        ),
        _vm._v(" "),
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
            staticClass: "m-1",
            attrs: { variant: "primary" },
            on: { click: _vm.send_email },
          },
          [_vm._v("Send Email")]
        ),
        _vm._v(" "),
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
            staticClass: "m-1",
            attrs: { variant: "primary" },
            on: { click: _vm.print },
          },
          [_vm._v("Print")]
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "printMe" } },
      [
        _c(
          "b-card",
          [
            _c("h2", { staticClass: "text-primary text-center mb-2" }, [
              _vm._v(" Patient Details"),
            ]),
            _vm._v(" "),
            _c(
              "b-list-group",
              [
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v("\n          Name:\n            "),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.patinet_name) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v("\n          Patient ID:\n            "),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.patient_id) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v("\n          Bill ID:\n            "),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.patient_id) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v("\n          Opening Staff:\n            "),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.opening_staff) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v("\n          Closing Staff:\n            "),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.closing_staff) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n          Dialysis Start Time:\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.start_time.slice(10, 19)) +
                              "\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-list-group-item",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n          Dialysis End Time:\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "6" } }, [
                          _vm._v(
                            "\n        " +
                              _vm._s(this.rows.end_time.slice(10, 19)) +
                              "\n            "
                          ),
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
        _vm._v(" "),
        _c("h1", [_vm._v("Invoice ")]),
        _vm._v(" "),
        _c(
          "b-badge",
          { attrs: { variant: "primary" } },
          [
            _c("feather-icon", {
              staticClass: "mr-25",
              attrs: { icon: "StarIcon" },
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Invoice Date: 22nd Dec 2020")]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-list-group",
          { staticClass: "mt-2" },
          [
            _c(
              "b-list-group-item",
              { attrs: { variant: "primary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Description\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Quantity\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Amount\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v("\n            Subtotal(₹)\n          "),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Therapy Fee\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            1\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            ₹1200\t\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v("\n            ₹1200.00\n          "),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            EPO 4K\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            1\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            ₹250\t\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v("\n            ₹250.00\n          "),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Total:\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v(
                        "\n            ₹" +
                          _vm._s(this.rows.total_amount) +
                          "\n          "
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Paid:\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v(
                        "\n            ₹" +
                          _vm._s(this.rows.paid) +
                          "\n          "
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Amount Due:\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v(
                        "\n            ₹" +
                          _vm._s(this.rows.amount_due) +
                          "\n          "
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { attrs: { variant: "secondary" } },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "1", sm: "0", md: "1" } }),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "3", sm: "1", md: "3" } }, [
                      _vm._v("\n            Mode of Payment:\n          "),
                    ]),
                    _vm._v(" "),
                    _c("b-col", { attrs: { cols: "2", sm: "1", md: "2" } }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(this.rows.mode_of_payment) +
                          "\n          "
                      ),
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
        _c("h5", { staticClass: "mt-3" }, [
          _vm._v("Phone:+91 95607 86456, Email:info@therenalproject.com "),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/PatientBill.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/PatientBill.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientBill.vue?vue&type=template&id=7a52bbea& */ "./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea&");
/* harmony import */ var _PatientBill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientBill.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PatientBill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/PatientBill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientBill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientBill.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientBill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PatientBill.vue?vue&type=template&id=7a52bbea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/PatientBill.vue?vue&type=template&id=7a52bbea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientBill_vue_vue_type_template_id_7a52bbea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);