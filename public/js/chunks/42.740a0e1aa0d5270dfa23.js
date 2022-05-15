(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HemoPharma_HemoPharma_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HemoPharma/HemoPharma.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue");
/* harmony import */ var _CreatineGr_CreatineGr_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatineGr/CreatineGr.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue");
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
  name: 'GsBloodReport',
  components: {
    HpHemoPharma: _HemoPharma_HemoPharma_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CrCreatineGr: _CreatineGr_CreatineGr_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _CreatineGrChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatineGrChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CrCreatineGr',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    CreatineGrChart: _CreatineGrChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/creatinine/graph/' + this.id, {
        creatinine_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['creatinine'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/creatinine/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['creatinine'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/apexChartData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CreatineGrChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_3__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_3__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_3__["default"].lineChartSimple.series;
    this.series[0]['data'] = [];
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.weights.length; i++) {
      this.series[0]['data'].push(this.weights[i]['creatinine']);
      this.options['xaxis']['categories'].push(this.weights[i]['report_date'].slice(0, 10));
    }

    if (this.series[0]['data'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _HemoPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HemoPharmaChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'HpHemoPharma',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    HemoPharmaChart: _HemoPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/haemoglobin_vs_pharma/graph/' + this.id, {
        haemoglobin_vs_pharma_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/haemoglobin_vs_pharma/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/apexChartData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'HemoPharmaChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.series;
    var arr = [];

    for (var i = 0; i < this.weights['haemoglobin'].length; i++) {
      arr.push(this.weights['haemoglobin'][i]);
    }

    for (var _i = 0; _i < this.weights['pharma'].length; _i++) {
      arr.push(this.weights['pharma'][_i]);
    }

    this.weights = arr;
    console.log(this.weights);
    this.options['xaxis']['categories'] = [];

    for (var _i2 = 0; _i2 < this.series.length; _i2++) {
      this.series[_i2]['data'] = [];
    }

    for (var _i3 = 0; _i3 < this.weights.length; _i3++) {
      if (this.weights[_i3]['start_time'] && !this.options['xaxis']['categories'].includes(this.weights[_i3]['start_time'].slice(0, 10))) {
        this.options['xaxis']['categories'].push(this.weights[_i3]['start_time'].slice(0, 10));
      }

      if (this.weights[_i3]['report_date'] && !this.options['xaxis']['categories'].includes(this.weights[_i3]['report_date'].slice(0, 10))) {
        this.options['xaxis']['categories'].push(this.weights[_i3]['report_date'].slice(0, 10));
      }
    }

    for (var _i4 = 0; _i4 < this.series.length; _i4++) {
      for (var j = 0; j < this.options['xaxis']['categories'].length; j++) {
        this.series[_i4]['data'].push(null);
      }
    }

    var al = ['Inj Dextrose 25% 100ml', 'Inj Multi Vit', 'EPO 4K', 'EPO 10K', 'Inj Iron', 'Inj Antibiotics', 'Inj Amino Acid'];

    for (var _i5 = 0; _i5 < this.weights.length; _i5++) {
      if (!this.weights[_i5]['name']) {
        var p = this.weights[_i5]['start_time'].slice(0, 10);

        var a = this.options['xaxis']['categories'].indexOf(p);
        this.series[0]['data'][a] = this.weights[_i5]['haemoglobin'];
      }

      for (var _j = 0; _j < al.length; _j++) {
        if (this.weights[_i5]['name'] == al[_j]) {
          var _p = this.weights[_i5]['start_time'].slice(0, 10);

          var _a = this.options['xaxis']['categories'].indexOf(_p);

          this.series[_j + 1]['data'][_a] = this.weights[_i5]['count'];
        }
      }
    }

    if (this.options['xaxis']['categories'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDc_PreDc_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDc/PreDc.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue");
/* harmony import */ var _PostDc_PostDc_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDc/PostDc.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue");
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
  name: 'GsConditions',
  components: {
    ConPostDc: _PostDc_PostDc_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ConPreDc: _PreDc_PreDc_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PostDcChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostDcChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ConPostDc',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    PostDcChart: _PostDcChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/post_dialysis_conditions/graph/' + this.id, {
        post_dialysis_condition_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['post_dialysis'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/post_dialysis_conditions/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['post_dialysis'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts-components/ChartjsComponentScatterChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/chartjsData.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PostDcChart',
  components: {
    ChartjsComponentScatterChart: _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['weights'],
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.series = _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].scatterChart.data;
    this.options = _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].scatterChart.options;
    this.options['scales']['xAxes'][0]['labels'] = [];

    for (var i = 0; i < 9; i++) {
      this.series['datasets'][i]['data'] = [];
    }

    this.series['datasets'][0]['data'] = [];
    var lab = ["bp_high", "bp_low", "nausea", "vomiting", "short_breath", "bleeding", "edema", "hypoglycemia", "diarrhea", "orthostatic_hypotension", "dizziness"];

    for (var _i = 0; _i < this.weights.length; _i++) {
      this.options['scales']['xAxes'][0]['labels'].push(this.weights[_i]['start_time'].slice(0, 10));
    } // for (let i = 0; i < this.options['scales']['xAxes'][0]['labels'].length; i++) {
    //     for(let j=0; j<3; j++){
    //     this.series['datasets'][j]['data'].push({x, y: -1})
    //     }
    // }


    for (var _i2 = 0; _i2 < this.options['scales']['xAxes'][0]['labels'].length; _i2++) {
      for (var j = 0; j < lab.length; j++) {
        this.series['datasets'][j]['data'].push({
          x: 0,
          y: -1
        });
      }
    }

    for (var _i3 = 0; _i3 < this.weights.length; _i3++) {
      // if(this.weights[i]['bp_high']){
      //     this.series['datasets'][0]['data'][i] = {x:this.weights[i]['bp_high'], y: 1}
      // }
      for (var _j = 0; _j < lab.length; _j++) {
        var p = lab[_j];

        if (this.weights[_i3][p]) {
          this.series['datasets'][_j]['data'][_i3] = {
            x: this.weights[_i3][p],
            y: _j + 1
          };
        }
      }
    }

    if (this.options['scales']['xAxes'][0]['labels'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PreDcChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreDcChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ConPreDc',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    PreDcChart: _PreDcChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/pre_dialysis_conditions/graph/' + this.id, {
        pre_dialysis_condition_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['pre_dialysis'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/pre_dialysis_conditions/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['pre_dialysis'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts-components/ChartjsComponentScatterChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/chartjsData.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PreDcChart',
  components: {
    ChartjsComponentScatterChart: _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['weights'],
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.series = _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].scatterChart.data;
    this.options = _chartjsData__WEBPACK_IMPORTED_MODULE_4__["default"].scatterChart.options;
    this.options['scales']['xAxes'][0]['labels'] = []; // for(let i=0; i<9; i++){
    //     this.series['datasets'][i]['data'] = []
    // }

    this.series['datasets'][0]['data'] = [];
    var lab = ["bp_high", "bp_low", "nausea", "vomiting", "short_breath", "bleeding", "edema", "stomach_distend", "diarrhea"];

    for (var i = 0; i < this.weights.length; i++) {
      this.options['scales']['xAxes'][0]['labels'].push(this.weights[i]['start_time'].slice(0, 10));
    } // for (let i = 0; i < this.options['scales']['xAxes'][0]['labels'].length; i++) {
    //     for(let j=0; j<3; j++){
    //     this.series['datasets'][j]['data'].push({x, y: -1})
    //     }
    // }


    for (var _i = 0; _i < this.weights.length; _i++) {
      // if(this.weights[i]['bp_high']){
      //     this.series['datasets'][0]['data'][i] = {x:this.weights[i]['bp_high'], y: 1}
      // }
      for (var j = 0; j < lab.length; j++) {
        var p = lab[j];

        if (this.weights[_i][p]) {
          this.series['datasets'][j]['data'][_i] = {
            x: this.weights[_i][p],
            y: j + 1
          };
        }
      }
    }

    if (this.options['scales']['xAxes'][0]['labels'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _ConsChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CpCons',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    ConsChart: _ConsChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/consumables/graph/' + this.id, {
        consumables_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['pre_dialysis'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/consumables/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['pre_dialysis'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts-components/ChartjsComponentScatterChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/chartjsData.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ConsChart',
  components: {
    ChartjsComponentScatterChart: _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ['weights'],
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_7__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.series = _chartjsData__WEBPACK_IMPORTED_MODULE_7__["default"].scatterChart.data;
    this.options = _chartjsData__WEBPACK_IMPORTED_MODULE_7__["default"].scatterChart.options;
    this.options['scales']['xAxes'][0]['labels'] = []; // for(let i=0; i<3; i++){
    //     this.series['datasets'][i]['data'] = []
    // }

    this.series['datasets'][0]['data'] = [];
    var lab = ['16g Needle', '17g Needle', 'Bed Sheet', 'Blood Tubing', 'Chemical M/C', 'Chemical D&T', 'Dialyzer', 'Heparin', 'IV Set', 'NS1000 ML', 'NS500 ML', 'Syringe 10 ML', 'Syringe 5 ML', 'A/B part', 'Transducer protector'];

    for (var i = 0; i < this.weights.length; i++) {
      if (!this.options['scales']['xAxes'][0]['labels'].includes(this.weights[i]['start_time'].slice(0, 10))) {
        this.options['scales']['xAxes'][0]['labels'].push(this.weights[i]['start_time'].slice(0, 10));
      } // for(let j=0; j< lab.length; j++){
      //     if(this.weights[i]['name'] === lab[j] && this.weights[i]['count']) {
      //         this.series['datasets'][j]['data'].push({x: this.weights[i]['count'], y: j+1})
      //     }else if(this.weights[i]['name'] !== lab[j]){
      //         // this.series['datasets'][j]['data'].push({x: 0, y:16})
      //         this.series['datasets'][j]['data'].push({x: 0, y: -1})
      //     }
      // }

    }

    for (var _i = 0; _i < this.options['scales']['xAxes'][0]['labels'].length; _i++) {
      for (var j = 0; j < lab.length; j++) {
        this.series['datasets'][j]['data'].push({
          x: 0,
          y: -1
        });
      }
    }

    for (var _i2 = 0; _i2 < this.weights.length; _i2++) {
      for (var _j = 0; _j < lab.length; _j++) {
        if (this.weights[_i2]['name'] === lab[_j] && this.weights[_i2]['count']) {
          var p = this.weights[_i2]['start_time'].slice(0, 10);

          var a = this.options['scales']['xAxes'][0]['labels'].indexOf(p);
          this.series['datasets'][_j]['data'][a] = {
            x: this.weights[_i2]['count'],
            y: _j + 1
          };
        }
      }
    }

    if (this.options['scales']['xAxes'][0]['labels'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cons_Cons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cons/Cons.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue");
/* harmony import */ var _PreDialPharma_PreDialPharma_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDialPharma/PreDialPharma.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue");
/* harmony import */ var _PostDialPharma_PostDialPharma_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostDialPharma/PostDialPharma.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue");
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
  name: 'GsConsPharma',
  components: {
    CpCons: _Cons_Cons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CpPdp: _PreDialPharma_PreDialPharma_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CpPostdp: _PostDialPharma_PostDialPharma_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PostDialPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostDialPharmaChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CpPostdp',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    PostDialPharmaChart: _PostDialPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/post_dialysis_pharma/graph/' + this.id, {
        post_dialysis_pharma_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['post_dialysis'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/post_dialysis_pharma/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['post_dialysis'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/apexChartData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PostDialPharmaChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.series;
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.series.length; i++) {
      this.series[i]['data'] = [];
    }

    for (var _i = 0; _i < this.weights.length; _i++) {
      if (!this.options['xaxis']['categories'].includes(this.weights[_i]['start_time'].slice(0, 10))) {
        this.options['xaxis']['categories'].push(this.weights[_i]['start_time'].slice(0, 10));
      }
    }

    for (var _i2 = 0; _i2 < this.series.length; _i2++) {
      for (var j = 0; j < this.options['xaxis']['categories'].length; j++) {
        this.series[_i2]['data'].push(null);
      }
    }

    var al = ['Inj Dextrose 25% 100ml', 'Inj Multi Vit', 'EPO 4K', 'EPO 10K', 'Inj Iron', 'Inj Antibiotics', 'Inj Amino Acid'];

    for (var _i3 = 0; _i3 < this.weights.length; _i3++) {
      if (!this.weights[_i3]['name']) {
        var p = this.weights[_i3]['start_time'].slice(0, 10);

        var a = this.options['xaxis']['categories'].indexOf(p);
        this.series[0]['data'][a] = this.weights[_i3]['bp_systolic'];
        this.series[1]['data'][a] = this.weights[_i3]['bp_diasystolic'];
        this.series[2]['data'][a] = this.weights[_i3]['heart_rate'];
        this.series[3]['data'][a] = this.weights[_i3]['weight'];
      }

      for (var _j = 0; _j < al.length; _j++) {
        if (this.weights[_i3]['name'] == al[_j]) {
          var _p = this.weights[_i3]['start_time'].slice(0, 10);

          var _a = this.options['xaxis']['categories'].indexOf(_p);

          this.series[0]['data'][_a] = this.weights[_i3]['bp_systolic'];
          this.series[1]['data'][_a] = this.weights[_i3]['bp_diasystolic'];
          this.series[2]['data'][_a] = this.weights[_i3]['heart_rate'];
          this.series[3]['data'][_a] = this.weights[_i3]['weight'];
          this.series[_j + 4]['data'][_a] = this.weights[_i3]['count'];
        }
      }
    }

    if (this.options['xaxis']['categories'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _PreDialPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreDialPharmaChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CpPdp',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    PreDialPharmaChart: _PreDialPharmaChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/pre_dialysis_pharma/graph/' + this.id, {
        pre_dialysis_pharma_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data']['pre_dialysis'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/pre_dialysis_pharma/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data']['pre_dialysis'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/apexChartData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PreDialPharmaChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_5___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_6__["default"].lineChartSimple.series;
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.series.length; i++) {
      this.series[i]['data'] = [];
    }

    for (var _i = 0; _i < this.weights.length; _i++) {
      if (!this.options['xaxis']['categories'].includes(this.weights[_i]['start_time'].slice(0, 10))) {
        this.options['xaxis']['categories'].push(this.weights[_i]['start_time'].slice(0, 10));
      }
    }

    for (var _i2 = 0; _i2 < this.series.length; _i2++) {
      for (var j = 0; j < this.options['xaxis']['categories'].length; j++) {
        this.series[_i2]['data'].push(null);
      }
    }

    var al = ['Inj Dextrose 25% 100ml', 'Inj Multi Vit', 'EPO 4K', 'EPO 10K', 'Inj Iron', 'Inj Antibiotics', 'Inj Amino Acid'];

    for (var _i3 = 0; _i3 < this.weights.length; _i3++) {
      if (!this.weights[_i3]['name']) {
        var p = this.weights[_i3]['start_time'].slice(0, 10);

        var a = this.options['xaxis']['categories'].indexOf(p);
        this.series[0]['data'][a] = this.weights[_i3]['bp_systolic'];
        this.series[1]['data'][a] = this.weights[_i3]['bp_diasystolic'];
        this.series[2]['data'][a] = this.weights[_i3]['heart_rate'];
        this.series[3]['data'][a] = this.weights[_i3]['weight'];
      }

      for (var _j = 0; _j < al.length; _j++) {
        if (this.weights[_i3]['name'] == al[_j]) {
          var _p = this.weights[_i3]['start_time'].slice(0, 10);

          var _a = this.options['xaxis']['categories'].indexOf(_p);

          this.series[0]['data'][_a] = this.weights[_i3]['bp_systolic'];
          this.series[1]['data'][_a] = this.weights[_i3]['bp_diasystolic'];
          this.series[2]['data'][_a] = this.weights[_i3]['heart_rate'];
          this.series[3]['data'][_a] = this.weights[_i3]['weight'];
          this.series[_j + 4]['data'][_a] = this.weights[_i3]['count'];
        }
      }
    }

    if (this.options['xaxis']['categories'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _BpChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BpChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DpBp',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    BpChart: _BpChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: [],
      rowss: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/bp_systolic_diastolic/graph/' + this.id, {
        bpsd_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['bp_diasystolic_data']);
        _this.rows = data['data']['bp_diasystolic_data'];
        _this.rowss = data['data']['bp_systolic_data'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/bp_systolic_diastolic/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['bp_diasystolic_data']);
        _this2.rows = data['data']['bp_diasystolic_data'];
        _this2.rowss = data['data']['bp_systolic_data'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/apexChartData.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'BpChart',
  props: ['weights', 'weighs'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: '',
      w_max_pre: '',
      w_min_pre: '',
      w_max_index_pre: '',
      w_min_index_pre: '',
      w_max_post: '',
      w_min_post: '',
      w_max_index_post: '',
      w_min_index_post: '',
      w_max_pre2: '',
      w_min_pre2: '',
      w_max_index_pre2: '',
      w_min_index_pre2: '',
      w_max_post2: '',
      w_min_post2: '',
      w_max_index_post2: '',
      w_min_index_post2: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.series;
    this.series[0]['data'] = [];
    this.series[1]['data'] = [];
    this.series[2]['data'] = [];
    this.series[3]['data'] = [];
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.weighs['pre_dialysis'].length; i++) {
      this.series[0]['data'].push(this.weights['pre_dialysis'][i]['bp_diasystolic']);
      this.series[1]['data'].push(this.weights['post_dialysis'][i]['bp_diasystolic']);
      this.series[2]['data'].push(this.weighs['pre_dialysis'][i]['bp_systolic']);
      this.series[3]['data'].push(this.weighs['post_dialysis'][i]['bp_systolic']);
      this.options['xaxis']['categories'].push(this.weighs['pre_dialysis'][i]['start_time'].slice(0, 10));
    }

    if (this.series[0]['data'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }

    this.w_max_pre = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_max_index_pre = this.series[0]['data'].indexOf(this.w_max_pre);
    this.w_max_index_pre = this.options['xaxis']['categories'][this.w_max_index_pre];
    this.w_min_pre = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_min_index_pre = this.series[0]['data'].indexOf(this.w_min_pre);
    this.w_min_index_pre = this.options['xaxis']['categories'][this.w_min_index_pre];
    this.w_max_post = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_max_index_post = this.series[1]['data'].indexOf(this.w_max_post);
    this.w_max_index_post = this.options['xaxis']['categories'][this.w_max_index_post];
    this.w_min_post = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_min_index_post = this.series[1]['data'].indexOf(this.w_min_post);
    this.w_min_index_post = this.options['xaxis']['categories'][this.w_min_index_post];
    this.w_max_pre2 = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[2]['data']));
    this.w_max_index_pre2 = this.series[2]['data'].indexOf(this.w_max_pre2);
    this.w_max_index_pre2 = this.options['xaxis']['categories'][this.w_max_index_pre2];
    this.w_min_pre2 = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[2]['data']));
    this.w_min_index_pre2 = this.series[2]['data'].indexOf(this.w_min_pre2);
    this.w_min_index_pre2 = this.options['xaxis']['categories'][this.w_min_index_pre2];
    this.w_max_post2 = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[3]['data']));
    this.w_max_index_post2 = this.series[3]['data'].indexOf(this.w_max_post2);
    this.w_max_index_post2 = this.options['xaxis']['categories'][this.w_max_index_post2];
    this.w_min_post2 = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[3]['data']));
    this.w_min_index_post2 = this.series[3]['data'].indexOf(this.w_min_post2);
    this.w_min_index_post2 = this.options['xaxis']['categories'][this.w_min_index_post2];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weight_Weight_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weight/Weight.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue");
/* harmony import */ var _HeartRate_HeartRate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeartRate/HeartRate.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue");
/* harmony import */ var _Bp_Bp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bp/Bp.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue");
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
  name: 'GsDialysisParameters',
  components: {
    DpWeight: _Weight_Weight_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DpHeartRate: _HeartRate_HeartRate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DpBp: _Bp_Bp_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _HeartRateChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeartRateChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DpHeartRate',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    HeartRateChart: _HeartRateChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/heart_rate/graph/' + this.id, {
        hr_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/heart_rate/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/apexChartData.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'HeartRateChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: '',
      w_max_pre: '',
      w_min_pre: '',
      w_max_index_pre: '',
      w_min_index_pre: '',
      w_max_post: '',
      w_min_post: '',
      w_max_index_post: '',
      w_min_index_post: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.series;
    this.series[0]['data'] = [];
    this.series[1]['data'] = [];
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.weights['pre_dialysis'].length; i++) {
      this.series[0]['data'].push(this.weights['pre_dialysis'][i]['heart_rate']);
      this.series[1]['data'].push(this.weights['post_dialysis'][i]['heart_rate']);
      this.options['xaxis']['categories'].push(this.weights['pre_dialysis'][i]['start_time'].slice(0, 10));
    }

    if (this.series[0]['data'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }

    this.w_max_pre = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_max_index_pre = this.series[0]['data'].indexOf(this.w_max_pre);
    this.w_max_index_pre = this.options['xaxis']['categories'][this.w_max_index_pre];
    this.w_min_pre = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_min_index_pre = this.series[0]['data'].indexOf(this.w_min_pre);
    this.w_min_index_pre = this.options['xaxis']['categories'][this.w_min_index_pre];
    this.w_max_post = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_max_index_post = this.series[1]['data'].indexOf(this.w_max_post);
    this.w_max_index_post = this.options['xaxis']['categories'][this.w_max_index_post];
    this.w_min_post = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_min_index_post = this.series[1]['data'].indexOf(this.w_min_post);
    this.w_min_index_post = this.options['xaxis']['categories'][this.w_min_index_post];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _WeightChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeightChart.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DpWeight',
  components: {
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormDatepicker"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    WeightChart: _WeightChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 15th two months prior
    // 15th in two months

    var maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth());
    maxDate.setDate(maxDate.getDate());
    return {
      componentKey: '',
      max: maxDate,
      fromDate: '',
      currentDate: '',
      simp: '',
      line: '',
      id: '',
      rows: []
    };
  },
  watch: {
    currentDate: function currentDate(val, oldVal) {
      var _this = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/weight/graph/' + this.id, {
        weight_plot_date: this.currentDate
      }).then(function (data) {
        console.log(data['data']['data']);
        _this.rows = data['data']['data'];
        console.log(_this.rows);
        _this.componentKey += 1;
      })["catch"](function (err) {
        _this.rows = [];
        _this.componentKey += 1;
        console.log(err.message);
      });
    },
    line: function line(val, oldVal) {
      var _this2 = this;

      console.log(val);
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/doctor/show/weight/graph/' + this.id, {
        time_range: this.line
      }).then(function (data) {
        console.log(data['data']['data']);
        _this2.rows = data['data']['data'];
        console.log(_this2.rows);
        _this2.componentKey += 1;
      })["catch"](function (err) {
        _this2.rows = [];
        _this2.componentKey += 1;
        console.log(err.message);
      });
    }
  },
  methods: {
    week: function week() {
      // this.currentDate = new Date();
      // this.currentDate.setDate(this.currentDate.getDate() - 7 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1w';
    },
    month: function month() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1m';
    },
    mon: function mon() {
      this.line = '3m';
    },
    months: function months() {
      // this.currentDate = new Date();
      // this.currentDate.setMonth(this.currentDate.getMonth() - 6 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '6m';
    },
    year: function year() {
      // this.currentDate = new Date();
      // this.currentDate.setFullYear(this.currentDate.getFullYear() - 1 );
      //   this.currentDate = this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate();
      // console.log(this.currentDate)
      this.line = '1y';
    },
    maxx: function maxx() {
      this.line = 'max';
    }
  },
  created: function created() {
    this.currentDate = new Date();
    this.currentDate = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth() + 1) + '-' + this.currentDate.getDate();
    console.log(this.currentDate);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/apexChartData.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WeightChart',
  props: ['weights'],
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroupItem"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"],
      options: '',
      series: '',
      show: '',
      sideImg: '',
      w_max_pre: '',
      w_min_pre: '',
      w_max_index_pre: '',
      w_min_index_pre: '',
      w_max_post: '',
      w_min_post: '',
      w_max_index_post: '',
      w_min_index_post: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  created: function created() {
    this.options = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.chartOptions;
    this.series = _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"].lineChartSimple.series;
    this.series[0]['data'] = [];
    this.series[1]['data'] = [];
    this.options['xaxis']['categories'] = [];

    for (var i = 0; i < this.weights['pre_dialysis'].length; i++) {
      this.series[0]['data'].push(this.weights['pre_dialysis'][i]['weight']);
      this.series[1]['data'].push(this.weights['post_dialysis'][i]['weight']);
      this.options['xaxis']['categories'].push(this.weights['pre_dialysis'][i]['start_time'].slice(0, 10));
    }

    if (this.series[0]['data'].length) {
      this.show = 1;
    } else {
      this.show = 0;
    }

    this.w_max_pre = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_max_index_pre = this.series[0]['data'].indexOf(this.w_max_pre);
    this.w_max_index_pre = this.options['xaxis']['categories'][this.w_max_index_pre];
    this.w_min_pre = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[0]['data']));
    this.w_min_index_pre = this.series[0]['data'].indexOf(this.w_min_pre);
    this.w_min_index_pre = this.options['xaxis']['categories'][this.w_min_index_pre];
    this.w_max_post = Math.max.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_max_index_post = this.series[1]['data'].indexOf(this.w_max_post);
    this.w_max_index_post = this.options['xaxis']['categories'][this.w_max_index_post];
    this.w_min_post = Math.min.apply(Math, Object(F_xampp_htdocs_Renal_Project_VIDUR_New_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.series[1]['data']));
    this.w_min_index_post = this.series[1]['data'].indexOf(this.w_min_post);
    this.w_min_index_post = this.options['xaxis']['categories'][this.w_min_index_post];
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocGsDropdown',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: ['idd'],
  data: function data() {
    return {
      id: '',
      rows: [],
      selected1: {
        title: '1'
      },
      books: [{
        title: '1'
      }, {
        title: '2'
      }, {
        title: '3'
      }, {
        title: '4'
      }]
    };
  },
  watch: {
    selected1: function selected1(val, oldVal) {
      this.$emit('newPat', val);
    }
  },
  created: function created() {
    var _this = this;

    this.id = parseInt(this.idd);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/name_and_id/').then(function (data) {
      console.log(data['data']['data']);
      _this.rows = data["data"]['data'];

      if (_this.id) {
        for (var i = 0; i < _this.rows.length; i++) {
          if (_this.rows[i]['patient_id'] == _this.id) {
            _this.selected1 = _this.rows[i];
          }
        }
      } else {
        _this.selected1 = _this.rows[0];
      }
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FooterTable',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"]
  },
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _DropDown_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDown.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _Main_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue");
/* harmony import */ var _FooterTable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FooterTable.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'GraphsStatistics',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    DocGsDropdown: _DropDown_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    GrMain: _Main_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FooterTable: _FooterTable_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      id: '',
      name: '',
      dob: '',
      phone_number: '',
      address: '',
      componentKey: ''
    };
  },
  methods: {
    newP: function newP(val) {
      this.id = val['patient_id'];
      this.$router.push({
        name: 'graphs-statistics',
        params: {
          id: this.id
        }
      });
      this.componentKey += 1;
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId(val, oldVal) {
      var _this = this;

      this.id = this.$route.params.id; // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/details/' + this.id).then(function (data) {
        console.log('dfd', data["data"]['data']);
        _this.rows = data["data"]['data'];
        _this.name = _this.rows['name'];
        _this.dob = _this.rows['age'];
        _this.phone_number = _this.rows['phone_number'];
        _this.address = _this.rows['address'];
      })["catch"](function (err) {
        console.log(err.message);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.id = this.$route.params.id; // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/details/' + this.id).then(function (data) {
      console.log('dfd', data["data"]['data']);
      _this2.rows = data["data"]['data'];
      _this2.name = _this2.rows['name'];
      _this2.dob = _this2.rows['age'];
      _this2.phone_number = _this2.rows['phone_number'];
      _this2.address = _this2.rows['address'];
    })["catch"](function (err) {
      console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DialysisParameters_DialysisParameters_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialysisParameters/DialysisParameters.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue");
/* harmony import */ var _Conditions_Conditions_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Conditions/Conditions.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue");
/* harmony import */ var _ConsPharma_ConsPharma_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConsPharma/ConsPharma.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue");
/* harmony import */ var _BloodReport_BloodReport_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BloodReport/BloodReport.vue */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'GrMain',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    GsDialysisParameters: _DialysisParameters_DialysisParameters_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    GsConditions: _Conditions_Conditions_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    GsConsPharma: _ConsPharma_ConsPharma_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    GsBloodReport: _BloodReport_BloodReport_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      pa: 'DIALYSIS PARAMETERS',
      selected1: {
        title: 'DIALYSIS PARAMETERS'
      },
      opt: [{
        title: 'DIALYSIS PARAMETERS'
      }, {
        title: 'CONDITIONS'
      }, {
        title: 'CONS & PHARMA'
      }, {
        title: 'BLOOD REPORT'
      }]
    };
  },
  watch: {
    selected1: function selected1(val, oldVal) {
      this.pa = val['title'];
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER;
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #742b59 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(116, 43, 89, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #742b59;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #742b59 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #742b59;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #742b59 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #742b59;\n  border-bottom-color: #742b59;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #742b59;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(116, 43, 89, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #742b59 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(116, 43, 89, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #742b59;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #742b59 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #742b59;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #742b59 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #742b59;\n  border-bottom-color: #742b59;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #742b59;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(116, 43, 89, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(116, 43, 89, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}\np {\n  font-size: 1.2rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #742b59 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(116, 43, 89, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #742b59;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #742b59 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #742b59;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #742b59 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #742b59;\n  border-bottom-color: #742b59;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #742b59;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(116, 43, 89, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropDown.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraphsStatistics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGrChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BpChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRateChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("hp-hemo-pharma"), _vm._v(" "), _c("cr-creatine-gr")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Creatinine Graph"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("creatine-gr-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c("div", [_c("b-card-sub-title", [_vm._v("Pharmaceuticals")])], 1),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Haemoglobin vs Pharma"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("hemo-pharma-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c("div", [_c("b-card-sub-title", [_vm._v("Pharmaceuticals")])], 1),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("con-pre-dc"), _vm._v(" "), _c("con-post-dc")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Post Dialysis Conditions"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("post-dc-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-card-header",
        [_c("b-card-sub-title", [_vm._v("Post Dialysis Conditions")])],
        1
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("chartjs-component-scatter-chart", {
                attrs: { height: 415, data: _vm.series, options: _vm.options },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Pre Dialysis Conditions"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("pre-dc-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-card-header",
        [_c("b-card-sub-title", [_vm._v("Pre Dialysis Conditions")])],
        1
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("chartjs-component-scatter-chart", {
                attrs: { height: 415, data: _vm.series, options: _vm.options },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Consumables Graph"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("cons-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [_c("b-card-sub-title", [_vm._v("Consumables")])], 1),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("chartjs-component-scatter-chart", {
                attrs: { height: 415, data: _vm.series, options: _vm.options },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    [_c("cp-cons"), _vm._v(" "), _c("cp-pdp"), _vm._v(" "), _c("cp-postdp")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Post Dialysis Pharma Graph"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("post-dial-pharma-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c("div", [_c("b-card-sub-title", [_vm._v("Pharmaceuticals")])], 1),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("Pre Dialysis Pharma Graph"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("pre-dial-pharma-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c("div", [_c("b-card-sub-title", [_vm._v("Pharmaceuticals")])], 1),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
            ],
            1
          )
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body mt-3 text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [
                  _vm._v("BP Systolic/Diastolic"),
                ]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("bp-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows, weighs: this.rowss },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-sub-title", [
              _vm._v("Post And Pre Dialysis BP Systolic/Diastolic"),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-center mt-2",
                  staticStyle: { "overflow-x": "auto" },
                },
                [
                  _c("h3", [_vm._v("BP Systolic")]),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Statistics")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Post Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Post Dialysis")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Min")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_pre2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_pre2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_post2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_post2))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Avg")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_pre2 + this.w_min_pre2) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s(
                                  (this.w_max_post2 + this.w_min_post2) / 2
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Max")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_pre2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_pre2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_post2))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_post2))]
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
                "div",
                {
                  staticClass: "text-center mt-2",
                  staticStyle: { "overflow-x": "auto" },
                },
                [
                  _c("h3", [_vm._v("BP Diastolic")]),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Statistics")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Post Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Post Dialysis")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Min")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_post))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Avg")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_pre + this.w_min_pre) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_post + this.w_min_post) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Max")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_post))]
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
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
      _c("dp-weight"),
      _vm._v(" "),
      _c("dp-bp"),
      _vm._v(" "),
      _c("dp-heart-rate"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body mt-3 text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [_vm._v("Heart Rate")]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("heart-rate-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-sub-title", [
              _vm._v("Post And Pre Dialysis Heart Rate"),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-center mt-2",
                  staticStyle: { "overflow-x": "auto" },
                },
                [
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Statistics")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Post Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Post Dialysis")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Min")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_post))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Avg")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_pre + this.w_min_pre) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_post + this.w_min_post) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Max")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_post))]
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
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "demo-spacing-0 m-2" },
        [
          _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
            _c(
              "div",
              { staticClass: "alert-body text-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-25",
                  attrs: { icon: "StarIcon" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-25" }, [_vm._v("Weight")]),
              ],
              1
            ),
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
            { attrs: { md: "6" } },
            [
              _c("label", { attrs: { for: "example-datepicker" } }, [
                _vm._v("Start date:"),
              ]),
              _vm._v(" "),
              _c("b-form-datepicker", {
                staticClass: "mb-1",
                attrs: { id: "example-datepicker", max: _vm.max },
                model: {
                  value: _vm.currentDate,
                  callback: function ($$v) {
                    _vm.currentDate = $$v
                  },
                  expression: "currentDate",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(113, 102, 240, 0.15)",
                      expression: "'rgba(113, 102, 240, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: {
                    text: "Data From The Previous:",
                    variant: "outline-primary",
                  },
                },
                [
                  _c("b-dropdown-item", { on: { click: _vm.week } }, [
                    _vm._v("\n        1 Week\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.month } }, [
                    _vm._v("\n        1 Month\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.mon } }, [
                    _vm._v("\n        3 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.months } }, [
                    _vm._v("\n        6 Months\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.year } }, [
                    _vm._v("\n        1 Year\n      "),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.maxx } }, [
                    _vm._v("\n        Max\n      "),
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
      _c("weight-chart", {
        key: _vm.componentKey,
        attrs: { weights: this.rows },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", [
        _c(
          "div",
          [_c("b-card-sub-title", [_vm._v("Post And Pre Dialysis Weight")])],
          1
        ),
      ]),
      _vm._v(" "),
      _vm.show
        ? _c(
            "b-card-body",
            [
              _c("vue-apex-charts", {
                ref: "realtimeChart",
                attrs: {
                  type: "line",
                  height: "400",
                  options: _vm.options,
                  series: _vm.series,
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-center mt-2",
                  staticStyle: { "overflow-x": "auto" },
                },
                [
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Statistics")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Pre Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Post Dialysis")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Date of Post Dialysis")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Min")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_min_index_post))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Avg")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_pre + this.w_min_pre) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [
                              _vm._v(
                                _vm._s((this.w_max_post + this.w_min_post) / 2)
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v("-")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group",
                    { attrs: { horizontal: "" } },
                    [
                      _c(
                        "b-list-group-item",
                        {
                          staticClass: "text-primary",
                          staticStyle: { width: "300px" },
                        },
                        [_vm._v("Max")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_pre))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_post))]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-list-group-item",
                        { staticStyle: { width: "300px" } },
                        [
                          _c(
                            "b-badge",
                            { attrs: { pill: "", variant: "primary" } },
                            [_vm._v(_vm._s(this.w_max_index_post))]
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
        : _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-20 d-md-flex align-items-center justify-content-center px-3",
                      },
                      [
                        _c("b-img", {
                          attrs: {
                            fluid: "",
                            src: _vm.imgUrl,
                            alt: "Login V2",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "q", attrs: { cols: "6" } },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-25",
                        attrs: { size: "26", icon: "AlertOctagonIcon" },
                      }),
                      _vm._v(" "),
                      _c("h3", [_vm._v("No Data Found")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
            [
              _c(
                "b-form-group",
                [
                  _c("v-select", {
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      options: _vm.rows,
                      label: "name",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "option",
                        fn: function (ref) {
                          var patient_id = ref.patient_id
                          var name = ref.name
                          return [
                            _c("feather-icon", {
                              staticClass: "align-middle mr-50",
                              attrs: { icon: "UserIcon", size: "16" },
                            }),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                " " + _vm._s(name) + " - " + _vm._s(patient_id)
                              ),
                            ]),
                          ]
                        },
                      },
                    ]),
                    model: {
                      value: _vm.selected1,
                      callback: function ($$v) {
                        _vm.selected1 = $$v
                      },
                      expression: "selected1",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      {
        staticClass: "text-center mt-2",
        staticStyle: { "overflow-x": "auto" },
      },
      [
        _c(
          "b-list-group",
          { attrs: { horizontal: "" } },
          [
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Category")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Difference in Pre Dialysis")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Date of Pre Dialysis")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Difference in Post Dialysis")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Date of Post Dialysis")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-list-group",
          { attrs: { horizontal: "" } },
          [
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("BP Systolic")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_min_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_min_index_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_min_post)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_min_index_post)),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-list-group",
          { attrs: { horizontal: "" } },
          [
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("BP Diastolic")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s((this.w_max_pre + this.w_min_pre) / 2)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v("-"),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s((this.w_max_post + this.w_min_post) / 2)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v("-"),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-list-group",
          { attrs: { horizontal: "" } },
          [
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Heart Rate")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_index_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_post)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_index_post)),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-list-group",
          { attrs: { horizontal: "" } },
          [
            _c(
              "b-list-group-item",
              { staticClass: "text-primary", staticStyle: { width: "300px" } },
              [_vm._v("Weight")]
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_index_pre)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_post)),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-list-group-item",
              { staticStyle: { width: "300px" } },
              [
                _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                  _vm._v(_vm._s(this.w_max_index_post)),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
        "section",
        [
          _c(
            "b-card",
            [
              _c(
                "b-card-body",
                { staticClass: "card-body" },
                [
                  _c("h2", { staticClass: "text-primary text-center mb-2" }, [
                    _vm._v("\n          Patient Details\n        "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Patient:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "mb-2" },
                            [
                              _c("doc-gs-dropdown", {
                                attrs: { idd: this.id },
                                on: { newPat: _vm.newP },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "1" } }),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Name:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("p", [_vm._v(_vm._s(_vm.name))]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Patient ID:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("p", [_vm._v(_vm._s(_vm.id))]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Phone:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("p", [_vm._v(_vm._s(_vm.phone_number))]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Age:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("p", [_vm._v(_vm._s(_vm.dob))]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "3" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("h4", [_vm._v("Address:")]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "9", lg: "6" } },
                        [
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _c("p", [_vm._v(_vm._s(_vm.address))]),
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
      ),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c("h2", { staticClass: "text-primary mb-2 text-center" }, [
            _vm._v(" Graphs And Statistics "),
          ]),
          _vm._v(" "),
          _c("gr-main", { key: _vm.componentKey }),
        ],
        1
      ),
      _vm._v(" "),
      _c("footer-table"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
            { staticClass: "m-auto", attrs: { md: "6" } },
            [
              _c(
                "b-form-group",
                [
                  _c("v-select", {
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      options: _vm.opt,
                      label: "title",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "option",
                        fn: function (ref) {
                          var title = ref.title
                          return [
                            _c("feather-icon", {
                              staticClass: "align-middle mr-50",
                              attrs: { icon: "PieChartIcon", size: "16" },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(" " + _vm._s(title))]),
                          ]
                        },
                      },
                    ]),
                    model: {
                      value: _vm.selected1,
                      callback: function ($$v) {
                        _vm.selected1 = $$v
                      },
                      expression: "selected1",
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              this.pa === "BLOOD REPORT" ? _c("gs-blood-report") : _vm._e(),
              _vm._v(" "),
              this.pa === "CONDITIONS" ? _c("gs-conditions") : _vm._e(),
              _vm._v(" "),
              this.pa === "CONS & PHARMA" ? _c("gs-cons-pharma") : _vm._e(),
              _vm._v(" "),
              _vm.pa === "DIALYSIS PARAMETERS"
                ? _c("gs-dialysis-parameters")
                : _vm._e(),
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

/***/ "./resources/js/src/assets/images/pages/noPat.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/noPat.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/pages/noPat.svg";

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloodReport.vue?vue&type=template&id=2aeae910& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910&");
/* harmony import */ var _BloodReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BloodReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BloodReport.vue?vue&type=template&id=2aeae910& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/BloodReport.vue?vue&type=template&id=2aeae910&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BloodReport_vue_vue_type_template_id_2aeae910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatineGr.vue?vue&type=template&id=831d6ede& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede&");
/* harmony import */ var _CreatineGr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatineGr.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreatineGr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGr.vue?vue&type=template&id=831d6ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGr.vue?vue&type=template&id=831d6ede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGr_vue_vue_type_template_id_831d6ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatineGrChart.vue?vue&type=template&id=2afa6e06& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06&");
/* harmony import */ var _CreatineGrChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatineGrChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatineGrChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreatineGrChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGrChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGrChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreatineGrChart.vue?vue&type=template&id=2afa6e06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/CreatineGrChart.vue?vue&type=template&id=2afa6e06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatineGrChart_vue_vue_type_template_id_2afa6e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/apexChartData.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/CreatineGr/apexChartData.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Creatine',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      color: '#b9b3f8'
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light],
        colors: '#742c5a'
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        title: {
          text: 'Weight of Patient',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HemoPharma.vue?vue&type=template&id=789e7051& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051&");
/* harmony import */ var _HemoPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HemoPharma.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HemoPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharma.vue?vue&type=template&id=789e7051& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharma.vue?vue&type=template&id=789e7051&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharma_vue_vue_type_template_id_789e7051___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HemoPharmaChart.vue?vue&type=template&id=5918793d& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d&");
/* harmony import */ var _HemoPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HemoPharmaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HemoPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HemoPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharmaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HemoPharmaChart.vue?vue&type=template&id=5918793d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/HemoPharmaChart.vue?vue&type=template&id=5918793d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HemoPharmaChart_vue_vue_type_template_id_5918793d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/apexChartData.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/BloodReport/HemoPharma/apexChartData.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Haemoglobin',
      type: 'line',
      color: '#003f5c',
      data: [1]
    }, {
      name: 'Dextrose',
      type: 'scatter',
      color: '#d45087',
      data: []
    }, {
      name: 'Multi Vit',
      type: 'scatter',
      color: '#f95d6a',
      data: []
    }, {
      name: 'EPO 4K',
      type: 'scatter',
      color: '#ff7c43',
      data: []
    }, {
      name: 'EPO 10K',
      type: 'scatter',
      color: '#aecdc2',
      data: []
    }, {
      name: 'Iron',
      type: 'scatter',
      color: '#dbc667',
      data: []
    }, {
      name: 'Antibiotics',
      type: 'scatter',
      color: '#79ab62',
      data: []
    }, {
      name: 'Amino Acid',
      type: 'scatter',
      color: '#389469',
      data: []
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        type: 'category',
        categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        tickAmount: 20,
        title: {
          text: 'Values',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conditions.vue?vue&type=template&id=41de1272& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272&");
/* harmony import */ var _Conditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conditions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Conditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Conditions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Conditions.vue?vue&type=template&id=41de1272& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/Conditions.vue?vue&type=template&id=41de1272&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conditions_vue_vue_type_template_id_41de1272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDc.vue?vue&type=template&id=71eacae5& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5&");
/* harmony import */ var _PostDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDc.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDc.vue?vue&type=template&id=71eacae5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDc.vue?vue&type=template&id=71eacae5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDc_vue_vue_type_template_id_71eacae5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDcChart.vue?vue&type=template&id=3ffcc9ae& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae&");
/* harmony import */ var _PostDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDcChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDcChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDcChart.vue?vue&type=template&id=3ffcc9ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/PostDcChart.vue?vue&type=template&id=3ffcc9ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDcChart_vue_vue_type_template_id_3ffcc9ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/chartjsData.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/chartjsData.js ***!
  \**********************************************************************************************/
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
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        callbacks: {
          title: function title(items, data) {
            return data.datasets[items[0].datasetIndex].label;
          },
          label: function label(item, data) {
            return data.datasets[item.datasetIndex].data[item.index].x;
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
          // ticks: {
          //   stepSize: 10,
          //   min: 0,
          //   max: 140,
          //   fontColor: chartColors.labelColor,
          // },
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Marcha', 'Aprila', 'Maya', 'Junea']
        }],
        yAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Conditions'
          },
          ticks: {
            stepSize: 1,
            min: 0,
            max: 13,
            suggestedMin: 1,
            padding: 30,
            fontColor: chartColors.labelColor,
            callback: function callback(label, index, labels) {
              switch (label) {
                case 0:
                  return '';

                case 1:
                  return 'Bp High';

                case 2:
                  return 'Bp Low';

                case 3:
                  return 'Nausea';

                case 4:
                  return 'Vomiting';

                case 5:
                  return 'Short Breath';

                case 6:
                  return 'Bleeding';

                case 7:
                  return 'Edema';

                case 8:
                  return 'hypoglycemia';

                case 9:
                  return 'Diarrhea';

                case 10:
                  return 'Orthostatic Hypotension';

                case 11:
                  return 'Dizziness';
              }
            }
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7
        }
      }
    },
    data: {
      datasets: [{
        label: 'Bp High',
        data: [{
          x: 72,
          y: -1
        }, {
          x: 81,
          y: 2
        }, {
          x: 90,
          y: 3
        }, {
          x: 103,
          y: 4
        }, {
          x: 103,
          y: 5
        }, {
          x: 108,
          y: 6
        }, {
          x: 110,
          y: 7
        }],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].primary,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Bp Low',
        data: [],
        backgroundColor: chartColors.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5
      }, {
        label: 'Nausea',
        data: [],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Vomiting',
        data: [],
        backgroundColor: '#003f5c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Short Breath',
        data: [],
        backgroundColor: '#2f4b7c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Bleeding',
        data: [],
        backgroundColor: '#665191',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Edema',
        data: [],
        backgroundColor: '#a05195',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Hypoglycemia',
        data: [],
        backgroundColor: '#d45087',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Diarrhea',
        data: [],
        backgroundColor: '#f95d6a',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Orthostatic Hypotension',
        data: [],
        backgroundColor: '#389469',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Dizziness',
        data: [],
        backgroundColor: '#433f31',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PostDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDc.vue?vue&type=template&id=151d67cb& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb&");
/* harmony import */ var _PreDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDc.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PreDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDc.vue?vue&type=template&id=151d67cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDc.vue?vue&type=template&id=151d67cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDc_vue_vue_type_template_id_151d67cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDcChart.vue?vue&type=template&id=288b1e03& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03&");
/* harmony import */ var _PreDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDcChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PreDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDcChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDcChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDcChart.vue?vue&type=template&id=288b1e03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/PreDcChart.vue?vue&type=template&id=288b1e03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDcChart_vue_vue_type_template_id_288b1e03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/chartjsData.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/chartjsData.js ***!
  \*********************************************************************************************/
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
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        callbacks: {
          title: function title(items, data) {
            return data.datasets[items[0].datasetIndex].label;
          },
          label: function label(item, data) {
            return data.datasets[item.datasetIndex].data[item.index].x;
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
          // ticks: {
          //   stepSize: 10,
          //   min: 0,
          //   max: 140,
          //   fontColor: chartColors.labelColor,
          // },
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Marcha', 'Aprila', 'Maya', 'Junea']
        }],
        yAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Conditions'
          },
          ticks: {
            stepSize: 1,
            min: 0,
            max: 11,
            suggestedMin: 1,
            padding: 30,
            fontColor: chartColors.labelColor,
            callback: function callback(label, index, labels) {
              switch (label) {
                case 0:
                  return '';

                case 1:
                  return 'Bp High';

                case 2:
                  return 'Bp Low';

                case 3:
                  return 'Nausea';

                case 4:
                  return 'Vomiting';

                case 5:
                  return 'Short Breath';

                case 6:
                  return 'Bleeding';

                case 7:
                  return 'Edema';

                case 8:
                  return 'Stomach Distend';

                case 9:
                  return 'Diarrhea';
              }
            }
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7
        }
      }
    },
    data: {
      datasets: [{
        label: 'Bp High',
        data: [{
          x: 72,
          y: -1
        }, {
          x: 81,
          y: 2
        }, {
          x: 90,
          y: 3
        }, {
          x: 103,
          y: 4
        }, {
          x: 103,
          y: 5
        }, {
          x: 108,
          y: 6
        }, {
          x: 110,
          y: 7
        }],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].primary,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Bp Low',
        data: [],
        backgroundColor: chartColors.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5
      }, {
        label: 'Nausea',
        data: [],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Vomiting',
        data: [],
        backgroundColor: '#003f5c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Short Breath',
        data: [],
        backgroundColor: '#2f4b7c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Bleeding',
        data: [],
        backgroundColor: '#665191',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Edema',
        data: [],
        backgroundColor: '#a05195',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Stomach Distend',
        data: [],
        backgroundColor: '#d45087',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Diarrhea',
        data: [],
        backgroundColor: '#f95d6a',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Conditions/PreDc/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cons.vue?vue&type=template&id=a530c40a& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a&");
/* harmony import */ var _Cons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cons.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cons.vue?vue&type=template&id=a530c40a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/Cons.vue?vue&type=template&id=a530c40a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cons_vue_vue_type_template_id_a530c40a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsChart.vue?vue&type=template&id=b3c9745a& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a&");
/* harmony import */ var _ConsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsChart.vue?vue&type=template&id=b3c9745a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/ConsChart.vue?vue&type=template&id=b3c9745a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsChart_vue_vue_type_template_id_b3c9745a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/chartjsData.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/chartjsData.js ***!
  \********************************************************************************************/
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
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].dark,
        callbacks: {
          title: function title(items, data) {
            return data.datasets[items[0].datasetIndex].label;
          },
          label: function label(item, data) {
            return data.datasets[item.datasetIndex].data[item.index].x;
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
          // ticks: {
          //   stepSize: 10,
          //   min: 0,
          //   max: 140,
          //   fontColor: chartColors.labelColor,
          // },
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Marcha', 'Aprila', 'Maya', 'Junea']
        }],
        yAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true,
            labelString: 'Diseases'
          },
          ticks: {
            stepSize: 1,
            min: 0,
            max: 17,
            suggestedMin: 1,
            padding: 30,
            fontColor: chartColors.labelColor,
            callback: function callback(label, index, labels) {
              switch (label) {
                case 0:
                  return '';

                case 1:
                  return '16g Needle';

                case 2:
                  return '17g Needle';

                case 3:
                  return 'Bed Sheet';

                case 4:
                  return 'Blood Tubing';

                case 5:
                  return 'Chemical M/C';

                case 6:
                  return 'Chemical D&T';

                case 7:
                  return 'Dialyzer';

                case 8:
                  return 'Heparin';

                case 9:
                  return 'IV Set';

                case 10:
                  return 'NS1000 ML';

                case 11:
                  return 'NS500 ML';

                case 12:
                  return 'Syringe 10 ML';

                case 13:
                  return 'Syringe 5 ML';

                case 14:
                  return 'A/B Part';

                case 15:
                  return 'Transducer protector';
              }
            }
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7
        }
      }
    },
    data: {
      datasets: [{
        label: '16g Needle',
        data: [{
          x: 72,
          y: -1
        }, {
          x: 81,
          y: 2
        }, {
          x: 90,
          y: 3
        }, {
          x: 103,
          y: 4
        }, {
          x: 103,
          y: 5
        }, {
          x: 108,
          y: 6
        }, {
          x: 110,
          y: 7
        }],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeColors"].primary,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: '17g Needle',
        data: [],
        backgroundColor: chartColors.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5
      }, {
        label: 'Bed Sheet',
        data: [],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Blood Tubing',
        data: [],
        backgroundColor: '#003f5c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Chemical M/C',
        data: [],
        backgroundColor: '#2f4b7c',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Chemical D&T',
        data: [],
        backgroundColor: '#665191',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Dialyzer',
        data: [],
        backgroundColor: '#a05195',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Heparin',
        data: [],
        backgroundColor: '#d45087',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'IV Set',
        data: [],
        backgroundColor: '#f95d6a',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'NS1000 ML',
        data: [],
        backgroundColor: '#ff7c43',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'NS500 ML',
        data: [],
        backgroundColor: '#aecdc2',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Syringe 10 ML',
        data: [],
        backgroundColor: '#dbc667',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Syringe 5 ML',
        data: [],
        backgroundColor: '#79ab62',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'A/B Part',
        data: [],
        backgroundColor: '#389469',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Transducer protector',
        data: [],
        backgroundColor: '#433f31',
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/Cons/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsPharma.vue?vue&type=template&id=08a120b2& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2&");
/* harmony import */ var _ConsPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsPharma.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConsPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsPharma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsPharma.vue?vue&type=template&id=08a120b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/ConsPharma.vue?vue&type=template&id=08a120b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsPharma_vue_vue_type_template_id_08a120b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDialPharma.vue?vue&type=template&id=6b38dafb& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb&");
/* harmony import */ var _PostDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDialPharma.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharma.vue?vue&type=template&id=6b38dafb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharma.vue?vue&type=template&id=6b38dafb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharma_vue_vue_type_template_id_6b38dafb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostDialPharmaChart.vue?vue&type=template&id=0aefae5a& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a&");
/* harmony import */ var _PostDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostDialPharmaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharmaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostDialPharmaChart.vue?vue&type=template&id=0aefae5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/PostDialPharmaChart.vue?vue&type=template&id=0aefae5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostDialPharmaChart_vue_vue_type_template_id_0aefae5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/apexChartData.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PostDialPharma/apexChartData.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Post BP Systolic',
      type: 'line',
      color: '#003f5c',
      data: [1]
    }, {
      name: 'Post BP Diastolic',
      type: 'line',
      color: '#2f4b7c',
      data: []
    }, {
      name: 'Post Heart Rate',
      type: 'line',
      color: '#665191',
      data: []
    }, {
      name: 'Post Weight',
      type: 'line',
      color: '#a05195',
      data: []
    }, {
      name: 'Dextrose',
      type: 'scatter',
      color: '#d45087',
      data: []
    }, {
      name: 'Multi Vit',
      type: 'scatter',
      color: '#f95d6a',
      data: []
    }, {
      name: 'EPO 4K',
      type: 'scatter',
      color: '#ff7c43',
      data: []
    }, {
      name: 'EPO 10K',
      type: 'scatter',
      color: '#aecdc2',
      data: []
    }, {
      name: 'Iron',
      type: 'scatter',
      color: '#dbc667',
      data: []
    }, {
      name: 'Antibiotics',
      type: 'scatter',
      color: '#79ab62',
      data: []
    }, {
      name: 'Amino Acid',
      type: 'scatter',
      color: '#389469',
      data: []
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        type: 'category',
        categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        tickAmount: 20,
        title: {
          text: 'Values',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDialPharma.vue?vue&type=template&id=5faa00bd& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd&");
/* harmony import */ var _PreDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDialPharma.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PreDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharma.vue?vue&type=template&id=5faa00bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharma.vue?vue&type=template&id=5faa00bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharma_vue_vue_type_template_id_5faa00bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreDialPharmaChart.vue?vue&type=template&id=d9db675e& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e&");
/* harmony import */ var _PreDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreDialPharmaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharmaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharmaChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PreDialPharmaChart.vue?vue&type=template&id=d9db675e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/PreDialPharmaChart.vue?vue&type=template&id=d9db675e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreDialPharmaChart_vue_vue_type_template_id_d9db675e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/apexChartData.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/ConsPharma/PreDialPharma/apexChartData.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Pre BP Systolic',
      type: 'line',
      color: '#003f5c',
      data: [1]
    }, {
      name: 'Pre BP Diastolic',
      type: 'line',
      color: '#2f4b7c',
      data: []
    }, {
      name: 'Pre Heart Rate',
      type: 'line',
      color: '#665191',
      data: []
    }, {
      name: 'Pre Weight',
      type: 'line',
      color: '#a05195',
      data: []
    }, {
      name: 'Dextrose',
      type: 'scatter',
      color: '#d45087',
      data: []
    }, {
      name: 'Multi Vit',
      type: 'scatter',
      color: '#f95d6a',
      data: []
    }, {
      name: 'EPO 4K',
      type: 'scatter',
      color: '#ff7c43',
      data: []
    }, {
      name: 'EPO 10K',
      type: 'scatter',
      color: '#aecdc2',
      data: []
    }, {
      name: 'Iron',
      type: 'scatter',
      color: '#dbc667',
      data: []
    }, {
      name: 'Antibiotics',
      type: 'scatter',
      color: '#79ab62',
      data: []
    }, {
      name: 'Amino Acid',
      type: 'scatter',
      color: '#389469',
      data: []
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        type: 'category',
        categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        tickAmount: 20,
        title: {
          text: 'Values',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bp.vue?vue&type=template&id=11b9d4ea& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea&");
/* harmony import */ var _Bp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bp.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bp.vue?vue&type=template&id=11b9d4ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/Bp.vue?vue&type=template&id=11b9d4ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bp_vue_vue_type_template_id_11b9d4ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpChart.vue?vue&type=template&id=3fac0843& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843&");
/* harmony import */ var _BpChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BpChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BpChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BpChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BpChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BpChart.vue?vue&type=template&id=3fac0843& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/BpChart.vue?vue&type=template&id=3fac0843&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BpChart_vue_vue_type_template_id_3fac0843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/apexChartData.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Bp/apexChartData.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Pre BP Diastolic',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      color: '#b9b3f8'
    }, {
      name: 'Post BP Diastolic',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
      color: '#a2c5f8'
    }, {
      name: 'Pre BP Systolic',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      color: '#D64161FF'
    }, {
      name: 'Post BP Systolic',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
      color: '#990011FF'
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light],
        colors: '#742c5a'
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        title: {
          text: 'BP Systolic/Diastolic of Patient',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialysisParameters.vue?vue&type=template&id=2b8ee89c& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c&");
/* harmony import */ var _DialysisParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialysisParameters.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialysisParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialysisParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialysisParameters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialysisParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialysisParameters.vue?vue&type=template&id=2b8ee89c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/DialysisParameters.vue?vue&type=template&id=2b8ee89c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialysisParameters_vue_vue_type_template_id_2b8ee89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeartRate.vue?vue&type=template&id=52076f59& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59&");
/* harmony import */ var _HeartRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeartRate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeartRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRate.vue?vue&type=template&id=52076f59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRate.vue?vue&type=template&id=52076f59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRate_vue_vue_type_template_id_52076f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeartRateChart.vue?vue&type=template&id=521d9f35& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35&");
/* harmony import */ var _HeartRateChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeartRateChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeartRateChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeartRateChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRateChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRateChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeartRateChart.vue?vue&type=template&id=521d9f35& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/HeartRateChart.vue?vue&type=template&id=521d9f35&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeartRateChart_vue_vue_type_template_id_521d9f35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/apexChartData.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/HeartRate/apexChartData.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Pre Weight',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      color: '#b9b3f8'
    }, {
      name: 'Post Weight',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
      color: '#a2c5f8'
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light],
        colors: '#742c5a'
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        title: {
          text: 'Heart Rate of Patient',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weight.vue?vue&type=template&id=f393f46a& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a&");
/* harmony import */ var _Weight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weight.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Weight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Weight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Weight.vue?vue&type=template&id=f393f46a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/Weight.vue?vue&type=template&id=f393f46a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weight_vue_vue_type_template_id_f393f46a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeightChart.vue?vue&type=template&id=44254003& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003&");
/* harmony import */ var _WeightChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeightChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeightChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WeightChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeightChart.vue?vue&type=template&id=44254003& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/WeightChart.vue?vue&type=template&id=44254003&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeightChart_vue_vue_type_template_id_44254003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/apexChartData.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DialysisParameters/Weight/apexChartData.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // heat chart data generator

function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      name: 'Pre Weight',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      color: '#b9b3f8'
    }, {
      name: 'Post Weight',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
      color: '#a2c5f8'
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light],
        colors: '#742c5a'
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        mode: 'index'
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12'],
        title: {
          text: 'Date',
          rotate: 0,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title'
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
        title: {
          text: 'Weight of Patient',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#742c5a',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDown.vue?vue&type=template&id=3e4b879e& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e&");
/* harmony import */ var _DropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropDown.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropDown.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropDown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropDown.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropDown.vue?vue&type=template&id=3e4b879e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/DropDown.vue?vue&type=template&id=3e4b879e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_template_id_3e4b879e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterTable.vue?vue&type=template&id=98b272d4& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4&");
/* harmony import */ var _FooterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterTable.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FooterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTable.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTable.vue?vue&type=template&id=98b272d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/FooterTable.vue?vue&type=template&id=98b272d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTable_vue_vue_type_template_id_98b272d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphsStatistics.vue?vue&type=template&id=7cf05a56& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56&");
/* harmony import */ var _GraphsStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphsStatistics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphsStatistics.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GraphsStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraphsStatistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraphsStatistics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GraphsStatistics.vue?vue&type=template&id=7cf05a56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/GraphsStatistics.vue?vue&type=template&id=7cf05a56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GraphsStatistics_vue_vue_type_template_id_7cf05a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=bafc78b4& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=bafc78b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/GraphsStatistics/Main.vue?vue&type=template&id=bafc78b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_bafc78b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);