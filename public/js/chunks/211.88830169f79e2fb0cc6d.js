(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[211],{

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

/***/ })

}]);