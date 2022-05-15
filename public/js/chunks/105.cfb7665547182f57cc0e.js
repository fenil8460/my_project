(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DocDetails',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      dum: '',
      sideImg: '',
      id: '',
      rows: [],
      name: 'Anthony',
      dob: '30',
      email: 'email@gmail.com',
      gender: 'M',
      phone_number: '',
      address: '',
      doctor: '',
      hhh: '',
      covid: '',
      dpw: '',
      awaiting_t: 'Yes',
      blood_g: '',
      ckd: '',
      stable_unstable: '',
      heart_func: '',
      heart_dis: '',
      urea: '',
      creatine: '',
      bun: '',
      ecg: '',
      habits: '',
      bp_stable: '',
      diet: '',
      a: '',
      v: '',
      n: '',
      s: '',
      d: '',
      access: ''
    };
  },
  methods: {
    gr_st: function gr_st() {
      this.$router.push({
        name: 'graphs-statistics',
        params: {
          id: this.id
        }
      });
    },
    pres: function pres() {
      this.$router.push({
        name: 'prescription',
        params: {
          id: this.id
        }
      });
    },
    blo_rep: function blo_rep() {
      this.$router.push({
        name: 'reports',
        params: {
          id: this.id
        }
      });
    }
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/noPat.svg */ "./resources/js/src/assets/images/pages/noPat.svg");
      return this.sideImg;
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId(val, oldVal) {
      var _this = this;

      this.id = this.$route.params.id;
      console.log("pppp", this.id); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/details/' + this.id).then(function (data) {
        console.log('dfd', data["data"]['data']);
        _this.rows = data["data"]['data'];
        _this.dum = '1';
        _this.name = _this.rows['name'];
        _this.dob = _this.rows['age'];
        _this.email = _this.rows['email'] ? _this.rows['email'] : 'Nil';
        _this.gender = _this.rows['gender'];
        _this.phone_number = _this.rows['phone_number'];
        _this.address = _this.rows['address'];
        _this.doctor = _this.rows['doctor'] ? 'Yes' : 'No';
        _this.hhh = _this.rows['hhh'] ? 'Yes' : 'No';
        _this.covid = _this.rows['covid'] ? 'Yes' : 'No';
        _this.dpw = _this.rows['dpw'];
        _this.awaiting_t = _this.rows['awaiting_transplantation'] ? 'Yes' : 'No';
        _this.blood_g = _this.rows['blood_group'];
        _this.ckd = _this.rows['CKD_5D_HTN'];
        _this.stable_unstable = _this.rows['stability'] ? 'Yes' : 'No';
        _this.heart_func = _this.rows['heart_function'];
        _this.heart_dis = _this.rows['heart_diseases'] ? 'Yes' : 'No';
        _this.urea = _this.rows['urea'];
        _this.creatine = _this.rows['creatine'] ? _this.rows['creatine'] : 'Nil';
        _this.bun = _this.rows['bun'];
        _this.ecg = _this.rows['ecg'] ? 'Yes' : 'No';
        _this.habits = _this.rows['habits'];
        _this.bp_stable = _this.rows['bp_stable'] ? 'Yes' : 'No';
        _this.diet = _this.rows['diet'];
        _this.a = _this.rows['a'] ? 'Yes' : 'No';
        _this.v = _this.rows['v'] ? 'Yes' : 'No';
        _this.n = _this.rows['n'] ? 'Yes' : 'No';
        _this.s = _this.rows['s'] ? 'Yes' : 'No';
        _this.d = _this.rows['d'] ? 'Yes' : 'No';
        _this.access = _this.rows['access'];
      })["catch"](function (err) {
        _this.dum = '';
        console.log(err.message);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.id = this.$route.params.id;
    console.log("pppp", this.id); // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/details/' + this.id).then(function (data) {
      console.log('dfd', data["data"]['data']);
      _this2.rows = data["data"]['data'];
      _this2.dum = '1';
      _this2.name = _this2.rows['name'];
      _this2.dob = _this2.rows['age'];
      _this2.email = _this2.rows['email'] ? _this2.rows['email'] : 'Nil';
      _this2.gender = _this2.rows['gender'];
      _this2.phone_number = _this2.rows['phone_number'];
      _this2.address = _this2.rows['address'];
      _this2.doctor = _this2.rows['doctor'] ? 'Yes' : 'No';
      _this2.hhh = _this2.rows['hhh'] ? 'Yes' : 'No';
      _this2.covid = _this2.rows['covid'] ? 'Yes' : 'No';
      _this2.dpw = _this2.rows['dpw'];
      _this2.awaiting_t = _this2.rows['awaiting_transplantation'] ? 'Yes' : 'No';
      _this2.blood_g = _this2.rows['blood_group'];
      _this2.ckd = _this2.rows['CKD_5D_HTN'];
      _this2.stable_unstable = _this2.rows['stability'] ? 'Yes' : 'No';
      _this2.heart_func = _this2.rows['heart_function'];
      _this2.heart_dis = _this2.rows['heart_diseases'] ? 'Yes' : 'No';
      _this2.urea = _this2.rows['urea'];
      _this2.creatine = _this2.rows['creatine'] ? _this2.rows['creatine'] : 'Nil';
      _this2.bun = _this2.rows['bun'];
      _this2.ecg = _this2.rows['ecg'] ? 'Yes' : 'No';
      _this2.habits = _this2.rows['habits'];
      _this2.bp_stable = _this2.rows['bp_stable'] ? 'Yes' : 'No';
      _this2.diet = _this2.rows['diet'];
      _this2.a = _this2.rows['a'] ? 'Yes' : 'No';
      _this2.v = _this2.rows['v'] ? 'Yes' : 'No';
      _this2.n = _this2.rows['n'] ? 'Yes' : 'No';
      _this2.s = _this2.rows['s'] ? 'Yes' : 'No';
      _this2.d = _this2.rows['d'] ? 'Yes' : 'No';
      _this2.access = _this2.rows['access'];
    })["catch"](function (err) {
      _this2.dum = '';
      console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DocHeader',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"]
  },
  data: function data() {
    return {
      rows: [],
      id: '',
      code: '',
      statisticsItems: [{
        icon: 'HomeIcon',
        color: 'light-primary',
        title: 'Microcenters',
        subtitle: '14',
        customClass: 'mb-2 mb-xl-0'
      }, {
        icon: 'UserIcon',
        color: 'light-info',
        title: 'My Patients',
        subtitle: '1',
        customClass: 'mb-2 mb-xl-0'
      }, {
        icon: 'BoxIcon',
        color: 'light-danger',
        title: '',
        subtitle: '0',
        customClass: 'mb-2 mb-sm-0'
      }, {
        icon: 'DollarSignIcon',
        color: 'light-success',
        title: 'Amount',
        subtitle: '₹0',
        customClass: ''
      }]
    };
  },
  methods: {
    dial: function dial() {
      this.$router.push({
        name: 'doc-dialysis-data'
      });
    }
  },
  watch: {
    "$route.params.id": function $routeParamsId(val, oldVal) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/hospital/').then(function (data) {
        console.log(data);
        _this.rows = data["data"]['data'];
        _this.statisticsItems[0]['subtitle'] = _this.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/').then(function (data) {
        console.log(data);
        _this.rows = data["data"]['data'];
        _this.statisticsItems[1]['subtitle'] = _this.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/dialysis/count').then(function (data) {
        console.log(data);
        _this.rows = data["data"]['data'];
        _this.statisticsItems[2]['subtitle'] = _this.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/').then(function (data) {
        console.log(data);
        _this.rows = data["data"]['data'];
        _this.statisticsItems[3]['subtitle'] = '₹' + _this.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });

      if (this.$route.params.centre && this.$route.params.centre !== 'ALL') {
        this.code = this.$route.params.centre;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/' + this.code).then(function (data) {
          console.log(data);
          _this.rows = data["data"]['data'];
          _this.statisticsItems[1]['subtitle'] = _this.rows;
        })["catch"](function (err) {
          _this.statisticsItems[1]['subtitle'] = 0;
          console.log(err.message);
        });
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          code: this.code
        }).then(function (data) {
          console.log(data);
          _this.rows = data["data"]['data'];
          _this.statisticsItems[3]['subtitle'] = '₹' + _this.rows;
        })["catch"](function (err) {
          _this.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }

      if (this.$route.params.id) {
        this.id = this.$route.params.id;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          id: this.id
        }).then(function (data) {
          console.log(data);
          _this.rows = data["data"]['data'];
          _this.statisticsItems[3]['subtitle'] = '₹' + _this.rows;
        })["catch"](function (err) {
          _this.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }

      if (this.$route.params.id && this.$route.params.centre && this.$route.params.centre !== 'ALL') {
        this.id = this.$route.params.id;
        this.code = this.$route.params.centre;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          id: this.id,
          code: this.code
        }).then(function (data) {
          console.log(data);
          _this.rows = data["data"]['data'];
          _this.statisticsItems[3]['subtitle'] = '₹' + _this.rows;
        })["catch"](function (err) {
          _this.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }
    },
    "$route.params.centre": function $routeParamsCentre(val, oldVal) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/hospital/').then(function (data) {
        console.log(data);
        _this2.rows = data["data"]['data'];
        _this2.statisticsItems[0]['subtitle'] = _this2.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/').then(function (data) {
        console.log(data);
        _this2.rows = data["data"]['data'];
        _this2.statisticsItems[1]['subtitle'] = _this2.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/dialysis/count').then(function (data) {
        console.log(data);
        _this2.rows = data["data"]['data'];
        _this2.statisticsItems[2]['subtitle'] = _this2.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/').then(function (data) {
        console.log(data);
        _this2.rows = data["data"]['data'];
        _this2.statisticsItems[3]['subtitle'] = '₹' + _this2.rows;
      })["catch"](function (err) {
        return console.log(err.message);
      });

      if (this.$route.params.centre && this.$route.params.centre !== 'ALL') {
        this.code = this.$route.params.centre;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/' + this.code).then(function (data) {
          console.log(data);
          _this2.rows = data["data"]['data'];
          _this2.statisticsItems[1]['subtitle'] = _this2.rows;
        })["catch"](function (err) {
          _this2.statisticsItems[1]['subtitle'] = 0;
          console.log(err.message);
        });
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          code: this.code
        }).then(function (data) {
          console.log(data);
          _this2.rows = data["data"]['data'];
          _this2.statisticsItems[3]['subtitle'] = '₹' + _this2.rows;
        })["catch"](function (err) {
          _this2.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }

      if (this.$route.params.id) {
        this.id = this.$route.params.id;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          id: this.id
        }).then(function (data) {
          console.log(data);
          _this2.rows = data["data"]['data'];
          _this2.statisticsItems[3]['subtitle'] = '₹' + _this2.rows;
        })["catch"](function (err) {
          _this2.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }

      if (this.$route.params.id && this.$route.params.centre && this.$route.params.centre !== 'ALL') {
        this.id = this.$route.params.id;
        this.code = this.$route.params.centre;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
          id: this.id,
          code: this.code
        }).then(function (data) {
          console.log(data);
          _this2.rows = data["data"]['data'];
          _this2.statisticsItems[3]['subtitle'] = '₹' + _this2.rows;
        })["catch"](function (err) {
          _this2.statisticsItems[3]['subtitle'] = 0;
          console.log(err.message);
        });
      }
    }
  },
  created: function created() {
    var _this3 = this;

    // axios.get('http://127.0.0.1:8000/api/admin/view/stats/patient/info')
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/hospital/').then(function (data) {
      console.log(data);
      _this3.rows = data["data"]['data'];
      _this3.statisticsItems[0]['subtitle'] = _this3.rows;
    })["catch"](function (err) {
      return console.log(err.message);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/').then(function (data) {
      console.log(data);
      _this3.rows = data["data"]['data'];
      _this3.statisticsItems[1]['subtitle'] = _this3.rows;
    })["catch"](function (err) {
      return console.log(err.message);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/dialysis/count').then(function (data) {
      console.log(data);
      _this3.rows = data["data"]['data'];
      _this3.statisticsItems[2]['subtitle'] = _this3.rows;
    })["catch"](function (err) {
      return console.log(err.message);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/').then(function (data) {
      console.log(data);
      _this3.rows = data["data"]['data'];
      _this3.statisticsItems[3]['subtitle'] = '₹' + _this3.rows;
    })["catch"](function (err) {
      return console.log(err.message);
    });

    if (this.$route.params.centre && this.$route.params.centre !== 'ALL') {
      this.code = this.$route.params.centre;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/doctor/view/total/patient/' + this.code).then(function (data) {
        console.log(data);
        _this3.rows = data["data"]['data'];
        _this3.statisticsItems[1]['subtitle'] = _this3.rows;
      })["catch"](function (err) {
        _this3.statisticsItems[1]['subtitle'] = 0;
        console.log(err.message);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
        code: this.code
      }).then(function (data) {
        console.log(data);
        _this3.rows = data["data"]['data'];
        _this3.statisticsItems[3]['subtitle'] = '₹' + _this3.rows;
      })["catch"](function (err) {
        _this3.statisticsItems[3]['subtitle'] = 0;
        console.log(err.message);
      });
    }

    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
        id: this.id
      }).then(function (data) {
        console.log(data);
        _this3.rows = data["data"]['data'];
        _this3.statisticsItems[3]['subtitle'] = '₹' + _this3.rows;
      })["catch"](function (err) {
        _this3.statisticsItems[3]['subtitle'] = 0;
        console.log(err.message);
      });
    }

    if (this.$route.params.id && this.$route.params.centre && this.$route.params.centre !== 'ALL') {
      this.id = this.$route.params.id;
      this.code = this.$route.params.centre;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://127.0.0.1:8000/api/doctor/view/doctor/amount/', {
        id: this.id,
        code: this.code
      }).then(function (data) {
        console.log(data);
        _this3.rows = data["data"]['data'];
        _this3.statisticsItems[3]['subtitle'] = '₹' + _this3.rows;
      })["catch"](function (err) {
        _this3.statisticsItems[3]['subtitle'] = 0;
        console.log(err.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/src/views/Doctor/Home/Header.vue");
/* harmony import */ var _Hospitals_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hospitals.vue */ "./resources/js/src/views/Doctor/Home/Hospitals.vue");
/* harmony import */ var _Patients_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Patients.vue */ "./resources/js/src/views/Doctor/Home/Patients.vue");
/* harmony import */ var _Details_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Details.vue */ "./resources/js/src/views/Doctor/Home/Details.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DocHome',
  components: {
    DocHeader: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    DocHosp: _Hospitals_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DocPat: _Patients_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DocDetails: _Details_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      centre: ''
    };
  },
  created: function created() {
    if (this.$route.params.centre) {
      this.centre = this.$route.params.centre;
    } else {
      this.$router.push({
        name: 'doctorHome',
        params: {
          centre: 'ALL'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DocHosp",
  methods: {
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      console.log("ok<<<<");
    },
    onRowClick: function onRowClick(params) {
      this.all_pat = false;
      this.centre = params.row.code;
      this.$router.push({
        name: 'doctorHome',
        params: {
          centre: this.centre
        }
      }); //   fetch('http://127.0.0.1:8000/api/admin/patient/report/' + this.pat_id)
      //   .then(res => res.json())
      //   .then((data) => {
      //     this.user = data['data']
      //     console.log(this.user)
      //   })
      //   .catch(err => console.log(err.message))
    },
    showModal: function showModal() {
      var element = this.$refs.modal;
      $(element).modal('show');
    }
  },
  components: {
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_1__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BContainer"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"]
  },
  data: function data() {
    return {
      centre: '',
      all_pat: false,
      pageLength: 5,
      dir: false,
      user: null,
      columns: [{
        label: 'Centers',
        field: 'centre_name'
      }],
      rows: [],
      searchTerm: ''
    };
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    statusVariant: function statusVariant() {
      var statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info'
        /* eslint-enable key-spacing */

      };
      return function (status) {
        return statusColor[status];
      };
    },
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_4__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  watch: {
    all_pat: function all_pat(val, oldVal) {
      if (val) {
        this.$router.push({
          name: 'doctorHome',
          params: {
            centre: 'ALL'
          }
        });
      }
    }
  },
  created: function created() {
    var _this = this;

    // this.id = this.$route.params.id
    if (this.$route.params.centre == 'ALL') {
      this.all_pat = true;
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/doctor/view/branch/').then(function (data) {
      console.log(data["data"]['data']);
      _this.rows = data["data"]['data'];
    })["catch"](function (err) {
      return console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocPat',
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    pat: function pat(id) {
      if (this.centre) {
        this.$router.push({
          name: 'doctorHome',
          params: {
            centre: this.centre,
            id: id
          }
        });
      } else {
        this.$router.push({
          name: 'doctorHome',
          params: {
            centre: 'ALL',
            id: id
          }
        });
      }
    }
  },
  data: function data() {
    return {
      emp: '',
      centre: '',
      patients: [],
      side_img: ''
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      this.sideImg = __webpack_require__(/*! @/assets/images/pages/staff.svg */ "./resources/js/src/assets/images/pages/staff.svg");
      return this.sideImg;
    }
  },
  watch: {
    "$route.params.centre": function $routeParamsCentre(val, oldVal) {
      var _this = this;

      this.centre = this.$route.params.centre;

      if (this.centre == 'ALL') {
        this.centre = '';
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/name_and_id/' + this.centre).then(function (data) {
        _this.emp = '';
        _this.patients = data["data"]['data'];
      })["catch"](function (err) {
        _this.emp = '1';
        console.log(err.message);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    // this.id = this.$route.params.id
    this.centre = this.$route.params.centre;

    if (this.centre == 'ALL') {
      this.centre = '';
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/doctor/view/patient/name_and_id/' + this.centre).then(function (data) {
      _this2.emp = '';
      _this2.patients = data["data"]['data'];
    })["catch"](function (err) {
      _this2.emp = '1';
      console.log(err.message);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #742b59;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #742b59;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #742b59;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #742b59;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #ebe9f1;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #ebe9f1;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #ebe9f1;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #ebe9f1;\n  border-top: 2px solid #ebe9f1;\n  background-color: white;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #ebe9f1;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #d8d6de;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #ebe9f1;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #ebe9f1;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #ebe9f1;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #ebe9f1;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #ebe9f1;\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #ebe9f1;\n  border-left: 1px solid #ebe9f1;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #ebe9f1;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #ebe9f1;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}\n.side_bar {\n  height: 350px;\n  overflow-y: scroll;\n}\n[dir] .side_bar {\n  margin-bottom: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.fo{\r\n    font-size: large;\n}\n[dir] .q{\r\n  margin: auto;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.side_bar1{\r\n  height: 380px;\r\n  overflow-y: scroll;\n}\n.pp {\r\n  font-size: 1rem;\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hospitals.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patients.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      this.dum
        ? _c(
            "b-card",
            [
              _c("h2", { staticClass: "text-primary mb-4" }, [
                _vm._v("Patient details"),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Name:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(" " + _vm._s(_vm.name) + " "),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("DOB/Age:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.dob)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Email:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.email)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Gender:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.gender)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Phone Number:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.phone_number)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Address:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.address)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Doctor:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.doctor)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("HHH:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.hhh)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Covid:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.covid)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Dialysis Per Week:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.dpw)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Awaiting Transplantation:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.awaiting_t)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Blood Group:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.blood_g)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("CKD 5D,HTN:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.ckd)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Stable/Unstable:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.stable_unstable)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Heart Function:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.heart_func)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Heart Diseases:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.heart_dis)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Urea:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.urea)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Creatinine(mg/dL):")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.creatine)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("BUN:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.bun)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("ECG:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.ecg)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Habits:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.habits)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("BP Stable:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.bp_stable)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Diet:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.diet)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Anorexia:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.a)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Vomiting:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.v)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Nausea:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.n)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Swelling:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.s)),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-1", attrs: { md: "6" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Diarrhea:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.d)),
                            ]),
                          ]),
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
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { xs: "5", md: "5", lg: "4" } },
                            [_c("h4", [_vm._v("Access:")])]
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "7", lg: "6" } }, [
                            _c("p", { staticClass: "fo" }, [
                              _vm._v(_vm._s(_vm.access)),
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
              _c("b-row", [
                _c(
                  "div",
                  { staticClass: "demo-inline-spacing m-auto mb-2" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2",
                        attrs: { variant: "relief-primary" },
                        on: { click: _vm.gr_st },
                      },
                      [_vm._v("\n    Graphs & Statistics\n  ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2",
                        attrs: { variant: "relief-primary" },
                        on: { click: _vm.pres },
                      },
                      [_vm._v("\n    Prescription\n  ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2",
                        attrs: { variant: "relief-primary" },
                        on: { click: _vm.blo_rep },
                      },
                      [_vm._v("\n    Blood Report\n  ")]
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          )
        : _c(
            "b-card",
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
                  _c("b-col", { staticClass: "q", attrs: { cols: "6" } }, [
                    _c("h1", [_vm._v("Select A Patient")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-statistics", attrs: { "no-body": "" } },
    [
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
                  attrs: { md: "3", sm: "6" },
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
                            { attrs: { size: "48", variant: item.color } },
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
                          item.title === ""
                            ? _c("div", [
                                _c(
                                  "h4",
                                  {
                                    staticClass:
                                      "font-weight-bolder mb-0 cursor-pointer",
                                    on: { click: _vm.dial },
                                  },
                                  [
                                    _vm._v(
                                      "\n              Total no of dialysis\n            "
                                    ),
                                  ]
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-weight-bolder mb-0" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.title) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-card-text",
                            { staticClass: "font-small-3 mb-0" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.subtitle) +
                                  "\n            "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("doc-header"),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { lg: "4", xs: "12" } }, [_c("doc-hosp")], 1),
          _vm._v(" "),
          _c("b-col", { attrs: { lg: "8", xs: "12" } }, [_c("doc-pat")], 1),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [_c("b-col", { attrs: { cols: "12" } }, [_c("doc-details")], 1)],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff& ***!
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
    "div",
    [
      _c(
        "b-form-checkbox",
        {
          staticClass: "ml-2 mb-1",
          attrs: {
            checked: "true",
            name: "check-button",
            switch: "",
            inline: "",
          },
          model: {
            value: _vm.all_pat,
            callback: function ($$v) {
              _vm.all_pat = $$v
            },
            expression: "all_pat",
          },
        },
        [_vm._v("\r\n      All Patients\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "side_bar" },
        [
          _c("vue-good-table", {
            ref: "table",
            attrs: { columns: _vm.columns, rows: _vm.rows, rtl: _vm.direction },
            on: { "on-row-click": _vm.onRowClick },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function (props) {
                  return [
                    props.column.field === "name"
                      ? _c(
                          "div",
                          { staticClass: "text-nowrap" },
                          [
                            _c("b-avatar", {
                              staticClass: "mx-1",
                              attrs: { src: props.row.profile_link },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-nowrap" }, [
                              _vm._v(_vm._s(props.row.name)),
                            ]),
                          ],
                          1
                        )
                      : _c("span", [
                          _vm._v(
                            "\r\n            " +
                              _vm._s(props.formattedRow[props.column.field]) +
                              "\r\n            "
                          ),
                        ]),
                  ]
                },
              },
              {
                key: "pagination-bottom",
                fn: function (props) {
                  return [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex justify-content-between flex-wrap",
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex align-items-center mb-0 mt-1",
                          },
                          [
                            _c("span", { staticClass: "text-nowrap" }, [
                              _vm._v(
                                "\r\n                Showing 1 to\r\n                "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "mx-1",
                              attrs: { options: ["3", "5", "10"] },
                              on: {
                                input: function (value) {
                                  return props.perPageChanged({
                                    currentPerPage: value,
                                  })
                                },
                              },
                              model: {
                                value: _vm.pageLength,
                                callback: function ($$v) {
                                  _vm.pageLength = $$v
                                },
                                expression: "pageLength",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-nowrap " }, [
                              _vm._v(
                                " of " + _vm._s(props.total) + " entries "
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("b-pagination", {
                              staticClass: "mt-1 mb-0",
                              attrs: {
                                value: 1,
                                "total-rows": props.total,
                                "per-page": _vm.pageLength,
                                "first-number": "",
                                "last-number": "",
                                align: "right",
                                "prev-class": "prev-item",
                                "next-class": "next-item",
                              },
                              on: {
                                input: function (value) {
                                  return props.pageChanged({
                                    currentPage: value,
                                  })
                                },
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "prev-text",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "ChevronLeftIcon",
                                            size: "18",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                  {
                                    key: "next-text",
                                    fn: function () {
                                      return [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "ChevronRightIcon",
                                            size: "18",
                                          },
                                        }),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("b-modal", {
            attrs: {
              id: "modal-center",
              centered: "",
              title: "Vertically Centered",
              "ok-title": "Accept",
            },
            on: { ok: _vm.handleOk },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    this.emp
      ? _c(
          "div",
          [
            _c("b-card", { staticClass: "text-center side_bar1" }, [
              _c("h1", [_vm._v("No Patients")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "w-40 d-md-flex align-items-center justify-content-center px-3",
                },
                [
                  _c("b-img", {
                    attrs: { fluid: "", src: _vm.imgUrl, alt: "Login V2" },
                  }),
                ],
                1
              ),
            ]),
          ],
          1
        )
      : _c(
          "div",
          [
            _c(
              "b-card",
              { staticClass: "side_bar1" },
              [
                _c(
                  "b-badge",
                  { staticClass: "mb-2", attrs: { variant: "primary" } },
                  [_vm._v("\n        " + _vm._s(_vm.centre) + "\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "b-row",
                  { staticClass: "text-center" },
                  _vm._l(_vm.patients, function (item) {
                    return _c(
                      "b-col",
                      {
                        key: item.patient_id,
                        staticClass: "mb-1",
                        attrs: { md: "4", sm: "6" },
                      },
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
                            staticClass: "pp",
                            staticStyle: { width: "215px" },
                            attrs: { variant: "dark", size: "lg" },
                            on: {
                              click: function ($event) {
                                return _vm.pat(item.patient_id)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(item.name) +
                                "\n          "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
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

/***/ "./resources/js/src/assets/images/pages/noPat.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/noPat.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/pages/noPat.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/staff.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/staff.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/VIDUR-New/resources/js/src/assets/images/pages/staff.svg";

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Details.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Details.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=b4612470& */ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=b4612470& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Details.vue?vue&type=template&id=b4612470&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_b4612470___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Header.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Header.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=0330d6f7& */ "./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=0330d6f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Header.vue?vue&type=template&id=0330d6f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0330d6f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Home.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Home.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f999466e& */ "./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f999466e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Home.vue?vue&type=template&id=f999466e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f999466e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Hospitals.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Hospitals.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hospitals.vue?vue&type=template&id=226c0dff& */ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff&");
/* harmony import */ var _Hospitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hospitals.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hospitals.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hospitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/Hospitals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hospitals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hospitals.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hospitals.vue?vue&type=template&id=226c0dff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Hospitals.vue?vue&type=template&id=226c0dff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hospitals_vue_vue_type_template_id_226c0dff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Patients.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Patients.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patients.vue?vue&type=template&id=e2aa1510& */ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510&");
/* harmony import */ var _Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patients.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patients.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Doctor/Home/Patients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patients.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patients.vue?vue&type=template&id=e2aa1510& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Doctor/Home/Patients.vue?vue&type=template&id=e2aa1510&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patients_vue_vue_type_template_id_e2aa1510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);