(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts-components/ChartjsComponentLineChart.vue */ "./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/Staff/Home/Bill/chartjsData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'StaffGraph',
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    ChartjsComponentLineChart: _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      rows: [],
      kk: '',
      id: '',
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"],
      plugins: [// to add spacing between legends and chart
      {
        beforeInit: function beforeInit(chart) {
          /* eslint-disable func-names, no-param-reassign */
          chart.legend.afterFit = function () {
            this.height += 20;
          };
          /* eslint-enable */

        }
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://127.0.0.1:8000/api/doctor/view/session/sheet/' + this.id).then(function (data) {
      console.log(data["data"]['data']['patient_parameter']);
      _this.rows = data["data"]['data']['patient_parameter'];
      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[0]['data'] = [];
      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[1]['data'] = [];
      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[2]['data'] = [];
      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[3]['data'] = [];
      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.labels = [];

      for (var i = 0; i < 6; i++) {
        _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[0]['data'].push(_this.rows[i]['uf_rate'] / 5);
        _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[1]['data'].push(_this.rows[i]['bps']);
        _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[2]['data'].push(_this.rows[i]['bpd']);
        _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[3]['data'].push(_this.rows[i]['pulse']);
        _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.labels.push(_this.rows[i]['time'].slice(0, 5));
      }

      _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.options.scales.yAxes[0].ticks.max = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChart.data.datasets[0]['data'])) + 50;
      _this.kk = '1';
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _Sheet2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sheet2.vue */ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue");
/* harmony import */ var _Sheet3_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sheet3.vue */ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue");
/* harmony import */ var _Sheet4_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sheet4.vue */ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-html-to-paper */ "./node_modules/vue-html-to-paper/dist/index.js");
/* harmony import */ var vue_html_to_paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Graph_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Graph.vue */ "./resources/js/src/views/Staff/Home/Bill/Graph.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Session Sheet',
  specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
  styles: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', 'https://unpkg.com/kidlat-css/css/kidlat.css']
};
vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vue_html_to_paper__WEBPACK_IMPORTED_MODULE_7___default.a, options);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Session Sheet',
  components: {
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormValidFeedback"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    Sheet2: _Sheet2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Sheet4: _Sheet4_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Sheet3: _Sheet3_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    StaffGraph: _Graph_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  directives: {
    'b-modal': vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      rows: [],
      gra: false,
      patient_id: 'slknvjsnv ksnvknsflv ',
      rtc: 'avf',
      id: '',
      statisticsItems: [{
        icon: 'TrendingUpIcon',
        color: 'light-primary',
        title: 'Document Type',
        subtitle: 'FORM',
        customClass: 'mb-2 mb-xl-0'
      }, {
        icon: 'UserIcon',
        color: 'light-info',
        title: 'Document No : TRPOP02',
        subtitle: 'Revision: 02',
        customClass: 'mb-2 mb-xl-0'
      }, {
        icon: 'BoxIcon',
        color: 'light-danger',
        title: 'Issue Date : 01 Sep 2019',
        subtitle: 'Next Revision Date :01 Sep 2021',
        customClass: 'mb-2 mb-sm-0'
      }]
    };
  },
  methods: {
    back: function back() {
      console.log("o");
    },
    graph: function graph() {
      this.gra = !this.gra;
    },
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    share: function share() {
      console.log('share');
    }
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('http://127.0.0.1:8000/api/doctor/view/session/sheet/' + this.id).then(function (data) {
      console.log(data["data"]['data']['patient_detail']);
      _this.rows = data["data"]['data']['patient_detail'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Sheet2',
  components: {
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormValidFeedback"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"]
  },
  directives: {
    'b-modal': vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      idd: '',
      pre_dial: [],
      id: ''
    };
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/session/sheet/' + this.id).then(function (data) {
      console.log(data["data"]['data']['pre_dialysis']);
      _this.pre_dial = data["data"]['data']['pre_dialysis'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Sheet3',
  components: {
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormValidFeedback"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"]
  },
  directives: {
    'b-modal': vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      idd: '',
      id: '',
      para: []
    };
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/session/sheet/' + this.id).then(function (data) {
      console.log(data["data"]['data']['patient_parameter']);
      _this.para = data["data"]['data']['patient_parameter'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Sheet4',
  components: {
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormValidFeedback"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"]
  },
  directives: {
    'b-modal': vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      idd: '',
      id: '',
      post_dial: []
    };
  },
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/session/sheet/' + this.id).then(function (data) {
      console.log(data["data"]['data']['post_dialysis']);
      _this.post_dial = data["data"]['data']['post_dialysis'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    },
    plugins: {
      type: Array,
      "default": null
    },
    styles: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options, this.plugins, this.styles);
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      this.kk
        ? _c(
            "b-card-body",
            [
              _c("chartjs-component-line-chart", {
                attrs: {
                  height: 400,
                  data: _vm.chartjsData.lineChart.data,
                  options: _vm.chartjsData.lineChart.options,
                  plugins: _vm.plugins,
                },
              }),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                  return _vm.$router.push({ name: "staffHome" })
                },
              },
            },
            [_vm._v("Back")]
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
              on: { click: _vm.graph },
            },
            [_vm._v("Graph")]
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
              on: { click: _vm.share },
            },
            [_vm._v("Share")]
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
      this.gra ? _c("staff-graph", { staticClass: "mb-2" }) : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "printMe" } },
        [
          _c(
            "b-card",
            { staticClass: "card-statistics", attrs: { "no-body": "" } },
            [
              _c(
                "b-card-header",
                [
                  _c(
                    "b-card-title",
                    [
                      _c("b-img", {
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/logo/logo_1.png */ "./resources/js/src/assets/images/logo/logo_1.png"),
                        },
                      }),
                      _vm._v("Dialysis Session Sheet"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-card-text", { staticClass: "mr-25 mb-0" }, [
                    _vm._v("\n            Page 1 Of 1\n        "),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                { staticClass: "statistics-body" },
                [
                  _c(
                    "b-row",
                    _vm._l(_vm.statisticsItems, function (item) {
                      return _c(
                        "b-col",
                        {
                          key: item.icon,
                          staticClass: "mb-2 mb-md-0",
                          class: item.customClass,
                          attrs: { md: "4", sm: "6" },
                        },
                        [
                          _c(
                            "b-media",
                            { attrs: { "no-body": "" } },
                            [
                              _c(
                                "b-media-aside",
                                { staticClass: "mr-2" },
                                [
                                  _c(
                                    "b-avatar",
                                    {
                                      attrs: {
                                        size: "48",
                                        variant: item.color,
                                      },
                                    },
                                    [
                                      _c("feather-icon", {
                                        attrs: { size: "24", icon: item.icon },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-media-body",
                                { staticClass: "my-auto" },
                                [
                                  _c(
                                    "h4",
                                    { staticClass: "font-weight-bolder mb-0" },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(item.title) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-card-text",
                                    { staticClass: "font-small-3 mb-0" },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(item.subtitle) +
                                          "\n                "
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
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("h2", { staticClass: "text-center mt-4" }, [
                    _vm._v("PATIENT DETAILS"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-2" },
                    [
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Patient Name:",
                                "label-for": "patient_name",
                              },
                            },
                            [
                              _c("u", [
                                _c("h5", [_vm._v(_vm._s(_vm.rows.name))]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Patient ID:",
                                "label-for": "patient_id",
                              },
                            },
                            [
                              _c("u", [
                                _c("h5", [
                                  _vm._v(
                                    "PID" +
                                      _vm._s(_vm.rows.branch_name) +
                                      _vm._s(_vm.rows.patient_id)
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Patient Date & Time of Arrival:",
                                "label-for": "patient_dt",
                              },
                            },
                            [
                              _c("u", [
                                _c("h5", [_vm._v("2020-12-22 13:17:29")]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Schedule/Emergency (SCH/EMF):",
                                "label-for": "schedule",
                              },
                            },
                            [_c("u", [_c("h5", [_vm._v("scheduled")])])]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Dialyzer ID:",
                                "label-for": "dialyzer_id",
                              },
                            },
                            [_c("u", [_c("h5", [_vm._v("Fresenius F6")])])]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Machine ID:",
                                "label-for": "machine_id",
                              },
                            },
                            [_c("u", [_c("h5", [_vm._v("2VCAH725")])])]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Reused Dialyzer Count:",
                                "label-for": "reused_dialyzer_count",
                              },
                            },
                            [_c("u", [_c("h5", [_vm._v("0")])])]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Reused Tubing Count:",
                                "label-for": "rtcc",
                              },
                            },
                            [_c("u", [_c("h5", [_vm._v("0")])])]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Patient Date & Time of Arrival:",
                                "label-for": "rtc",
                              },
                            },
                            [
                              _c(
                                "b-row",
                                [
                                  _c("b-col", [
                                    _c("input", {
                                      attrs: {
                                        type: "radio",
                                        id: "h",
                                        value: "h",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: "html" } }, [
                                      _vm._v("AVF"),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-col", [
                                    _c("input", {
                                      attrs: {
                                        type: "radio",
                                        id: "t",
                                        value: "t",
                                        checked: "",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: "html" } }, [
                                      _vm._v("CATH"),
                                    ]),
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
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Opening Technician ID:",
                                "label-for": "ot_id",
                              },
                            },
                            [
                              _c("u", [
                                _c("h5", [
                                  _vm._v("Nishita Hindalekar (SIDMMH2)"),
                                ]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", lg: "2" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Closing Technician ID:",
                                "label-for": "ct_id",
                              },
                            },
                            [
                              _c("u", [
                                _c("h5", [
                                  _vm._v("Nishita Hindalekar (SIDMMH2)"),
                                ]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("sheet-2"),
                  _vm._v(" "),
                  _c("sheet-3"),
                  _vm._v(" "),
                  _c("sheet-4"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4& ***!
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
      _c("h2", { staticClass: "text-center mt-2" }, [
        _vm._v("PRE - DIALYSIS ASSESSMENT"),
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "text-center" }, [
        _vm._v(
          "TECHNICIAN-CHECK IF BP OR ANY OTHER MEDICATION TAKEN BY PATIENT BEFORE COMING FOR DIAYSIS"
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-2" },
        [
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Site Condition Acceptable:" } },
                [
                  this.pre_dial["site_condition"] === "yes"
                    ? _c(
                        "div",
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    id: "html",
                                    name: "fav_language",
                                    value: "HTML",
                                    checked: "",
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "html" } }, [
                                  _vm._v("Yes"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("b-col", [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    id: "html",
                                    name: "fav_language",
                                    value: "HTML",
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "html" } }, [
                                  _vm._v("No"),
                                ]),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.pre_dial["site_condition"] === "no"
                    ? _c(
                        "div",
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    id: "html",
                                    name: "fav_language",
                                    value: "HTML",
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "html" } }, [
                                  _vm._v("Yes"),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("b-col", [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    id: "html",
                                    name: "fav_language",
                                    value: "HTML",
                                    checked: "",
                                  },
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "html" } }, [
                                  _vm._v("No"),
                                ]),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "4" } },
            [
              _c("b-form-group", { attrs: { label: "If No, Explain:" } }, [
                _c("u", [_c("h5", [_vm._v(_vm._s(this.pre_dial.explain))])]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "4" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Pre-Dialysis Patient weight:" } },
                [_c("u", [_c("h5", [_vm._v(_vm._s(_vm.pre_dial.weight))])])]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("h6", [_vm._v("1. Patient Condition")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.bp_high
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_high",
                    name: "bp_high",
                    value: "bp_high",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_high",
                    name: "bp_high",
                    value: "bp_high",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bp_high" } }, [_vm._v(" BP High")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.bp_low
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_low",
                    name: "bp_low",
                    value: "bp_low",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_low",
                    name: "bp_low",
                    value: "bp_low",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bp_low" } }, [_vm._v(" BP Low")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.nausea
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "nausea",
                    name: "nausea",
                    value: "nausea",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "nausea",
                    name: "nausea",
                    value: "nausea",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "nausea" } }, [_vm._v(" Nausea")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.vomiting
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "vomiting",
                    name: "vomiting",
                    value: "vomiting",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "vomiting",
                    name: "vomiting",
                    value: "vomiting",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vomiting" } }, [_vm._v(" Vomiting")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [
              _vm._v(" Short Breath"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.bleeding
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bleeding",
                    name: "bleeding",
                    value: "bleeding",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bleeding",
                    name: "bleeding",
                    value: "bleeding",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bleeding" } }, [_vm._v(" Bleeding")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "3" } }, [
            _vm.pre_dial.edema
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "edema",
                    name: "edema",
                    value: "edema",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "edema",
                    name: "edema",
                    value: "edema",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "edema" } }, [_vm._v(" Edema")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.stomach_distend
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "stomach_distend",
                    name: "stomach_distend",
                    value: "stomach_distend",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "stomach_distend",
                    name: "stomach_distend",
                    value: "stomach_distend",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "stomach_distend" } }, [
              _vm._v(" Stomach Distend"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.diarrhea
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "diarrhea",
                    name: "diarrhea",
                    value: "diarrhea",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "diarrhea",
                    name: "diarrhea",
                    value: "diarrhea",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "diarrhea" } }, [_vm._v(" Diarrhea")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.pre_dial.other
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "other",
                    name: "other",
                    value: "other",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "other",
                    name: "other",
                    value: "other",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "other" } }, [_vm._v(" Other")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "5" } },
            [
              _c("b-form-group", { attrs: { label: "Note:" } }, [
                _c("u", [_c("h5", [_vm._v("No")])]),
              ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25& ***!
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
      _c("h3", { staticClass: "text-center" }, [
        _vm._v("PATIENT PARAMETER DURING DIALYSIS"),
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "overflow-x": "auto" } }, [
        _c(
          "table",
          {
            staticClass: "m-auto",
            attrs: { border: "1", width: "1000", height: "70" },
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(this.para, function (item) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(item.time))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.bps))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.bpd))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.pulse))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.uf_rate))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.uf_volume))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.bf_rate))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.ap))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.vp))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.tmp))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item["kv/t"]))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.actions))]),
              ])
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-1" },
        [
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("h6", [_vm._v("Drugs Given :")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [_vm._v(" Iron")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
                checked: "",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [_vm._v(" EPO")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [_vm._v(" Vitamin")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [
              _vm._v(" Antibiotics"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [
              _vm._v("Amino Acid "),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "5" } },
            [
              _c("b-form-group", { attrs: { label: "Heparinization:" } }, [
                _c("u", [_c("h5", [_vm._v("5000 ML")])]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "5" } },
            [
              _c("b-form-group", { attrs: { label: "UF:" } }, [
                _c("u", [_c("h5", [_vm._v("6416")])]),
              ]),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v("Time")]),
      _vm._v(" "),
      _c("td", [_vm._v("BP Systolic")]),
      _vm._v(" "),
      _c("td", [_vm._v("BP Diasystolic")]),
      _vm._v(" "),
      _c("td", [_vm._v("Pulse")]),
      _vm._v(" "),
      _c("td", [_vm._v("UF Rate")]),
      _vm._v(" "),
      _c("td", [_vm._v("UF Volume")]),
      _vm._v(" "),
      _c("td", [_vm._v("BF Rate")]),
      _vm._v(" "),
      _c("td", [_vm._v("AP")]),
      _vm._v(" "),
      _c("td", [_vm._v("VP")]),
      _vm._v(" "),
      _c("td", [_vm._v("TMP")]),
      _vm._v(" "),
      _c("td", [_vm._v("Kv/t")]),
      _vm._v(" "),
      _c("td", [_vm._v("Actions")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6& ***!
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
      _c("h2", { staticClass: "text-center" }, [
        _vm._v("POST-DIALYSIS ASSESSMENT"),
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-2" },
        [
          _c("b-col", { staticClass: "mb-1", attrs: { md: "4" } }, [
            _c("h5", [_vm._v("1. Patient Condition")]),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "5" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Pre-Dialysis Patient weight:" } },
                [_c("u", [_c("h5", [_vm._v(_vm._s(_vm.post_dial.weight))])])]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.bp_high
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_high",
                    name: "bp_high",
                    value: "bp_high",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_high",
                    name: "bp_high",
                    value: "bp_high",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bp_high" } }, [_vm._v(" BP High")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.bp_low
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_low",
                    name: "bp_low",
                    value: "bp_low",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bp_low",
                    name: "bp_low",
                    value: "bp_low",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bp_low" } }, [_vm._v(" BP Low")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.nausea
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "nausea",
                    name: "nausea",
                    value: "nausea",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "nausea",
                    name: "nausea",
                    value: "nausea",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "nausea" } }, [_vm._v(" Nausea")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.vomiting
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "vomiting",
                    name: "vomiting",
                    value: "vomiting",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "vomiting",
                    name: "vomiting",
                    value: "vomiting",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vomiting" } }, [_vm._v(" Vomiting")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _c("input", {
              attrs: {
                type: "checkbox",
                id: "vehicle1",
                name: "vehicle1",
                value: "Bike",
              },
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "vehicle1" } }, [
              _vm._v(" Short Breath"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.bleeding
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bleeding",
                    name: "bleeding",
                    value: "bleeding",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "bleeding",
                    name: "bleeding",
                    value: "bleeding",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "bleeding" } }, [_vm._v(" Bleeding")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "1" } }, [
            _vm.post_dial.edema
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "edema",
                    name: "edema",
                    value: "edema",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "edema",
                    name: "edema",
                    value: "edema",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "edema" } }, [_vm._v(" Edema")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.hypoglycemia
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "hypoglycemia",
                    name: "hypoglycemia",
                    value: "hypoglycemia",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "hypoglycemia",
                    name: "hypoglycemia",
                    value: "hypoglycemia",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "hypoglycemia" } }, [
              _vm._v(" Hypoglycemia"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.diarrhea
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "diarrhea",
                    name: "diarrhea",
                    value: "diarrhea",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "diarrhea",
                    name: "diarrhea",
                    value: "diarrhea",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "diarrhea" } }, [_vm._v(" Diarrhea")]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "3" } }, [
            _vm.post_dial.orthostatic_hypotension
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "orthostatic_hypotension",
                    name: "orthostatic_hypotension",
                    value: "orthostatic_hypotension",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "orthostatic_hypotension",
                    name: "orthostatic_hypotension",
                    value: "orthostatic_hypotension",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "orthostatic_hypotension" } }, [
              _vm._v(" Orthostatic Hypotension"),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { staticClass: "mb-1", attrs: { md: "2" } }, [
            _vm.post_dial.dizziness
              ? _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "dizziness",
                    name: "dizziness",
                    value: "dizziness",
                    checked: "",
                  },
                })
              : _c("input", {
                  attrs: {
                    type: "checkbox",
                    id: "dizziness",
                    name: "dizziness",
                    value: "dizziness",
                  },
                }),
            _vm._v(" "),
            _c("label", { attrs: { for: "dizziness" } }, [
              _vm._v(" Dizziness"),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "2" } },
            [
              _c("b-form-group", { attrs: { label: "Note:" } }, [
                _c("u", [_c("h5", [_vm._v("Normal")])]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "5" } },
            [
              _c("b-form-group", { attrs: { label: "Discharge Time:" } }, [
                _c("u", [_c("h5", [_vm._v("2020-12-22 16:51:46")])]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-1", attrs: { md: "5" } },
            [
              _c("b-form-group", { attrs: { label: "Dietician Note:" } }, [
                _c("u", [_c("h5", [_vm._v("Normal")])]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("h5", { staticClass: "text-center" }, [
        _vm._v("The Renal Project CONFIDENTIAL - INTERNAL USE ONLY"),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/logo/logo_1.png":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/logo/logo_1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/logo/logo_1.png";

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Graph.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Graph.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph.vue?vue&type=template&id=0a48aaed& */ "./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed&");
/* harmony import */ var _Graph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Graph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/Graph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Graph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Graph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Graph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Graph.vue?vue&type=template&id=0a48aaed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Graph.vue?vue&type=template&id=0a48aaed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Graph_vue_vue_type_template_id_0a48aaed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionSheet.vue?vue&type=template&id=037a5a9a& */ "./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a&");
/* harmony import */ var _SessionSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionSheet.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SessionSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/SessionSheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SessionSheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SessionSheet.vue?vue&type=template&id=037a5a9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/SessionSheet.vue?vue&type=template&id=037a5a9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSheet_vue_vue_type_template_id_037a5a9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet2.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sheet2.vue?vue&type=template&id=55c3a2a4& */ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4&");
/* harmony import */ var _Sheet2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sheet2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sheet2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/Sheet2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet2.vue?vue&type=template&id=55c3a2a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet2.vue?vue&type=template&id=55c3a2a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet2_vue_vue_type_template_id_55c3a2a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet3.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sheet3.vue?vue&type=template&id=55d1ba25& */ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25&");
/* harmony import */ var _Sheet3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sheet3.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sheet3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/Sheet3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet3.vue?vue&type=template&id=55d1ba25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet3.vue?vue&type=template&id=55d1ba25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet3_vue_vue_type_template_id_55d1ba25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet4.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sheet4.vue?vue&type=template&id=55dfd1a6& */ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6&");
/* harmony import */ var _Sheet4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sheet4.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sheet4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/Sheet4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sheet4.vue?vue&type=template&id=55dfd1a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/Sheet4.vue?vue&type=template&id=55dfd1a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sheet4_vue_vue_type_template_id_55dfd1a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/chartjsData.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/chartjsData.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
 // colors

var chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].white,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].black,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].black
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          ticks: {
            stepSize: 50,
            min: 0,
            max: 450,
            fontColor: chartColors.labelColor
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data: {
      labels: [0, 10, 20, 30, 40, 50],
      datasets: [{
        data: [80, 150, 180, 270, 210, 160],
        label: 'UF Rate',
        borderColor: chartColors.lineChartDanger,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartDanger,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartDanger,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 125, 105, 130, 215, 195],
        label: 'BP Stolic',
        borderColor: chartColors.lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 99, 82, 90, 115, 115],
        label: 'BP Dialstolic',
        borderColor: chartColors.warningColorShade,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.warningColorShade,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.warningColorShade,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 110, 120, 100, 235, 175],
        label: 'Pulse',
        borderColor: chartColors.blueColor,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.blueColor,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.blueColor,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Staff/Home/Bill/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);