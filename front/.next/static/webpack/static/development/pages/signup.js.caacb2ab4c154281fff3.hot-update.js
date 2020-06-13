webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\jaeho\\Desktop\\nodeBirde\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  // const [id, setId] = useState('');
  // const onChangeId = useCallback((e) => {
  //     setId(e.target.value)
  // }, [])
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1]; // const [nickname, setNickname] = useState('');
  // const onChangeNickname = useCallback((e) => {
  //     setNickname(e.target.value)
  // }, [])


  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1]; // const [password, setPassword] = useState('');
  // const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value)
  // }, [])


  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1]; // 비밀번호 체크 에러 처리


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      PasswordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      PasswordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]); // 약관동의

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setTerm(e.target.checked);
    setTermError(false);
  }, [term]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (password !== PasswordError) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, nickname, term]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onsubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "user-nickname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "\uB2C9\uB134\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-nickname",
    value: nickname,
    onChange: onChangeNickname,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password",
    type: "password",
    value: Password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "user-password-Check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-password-Check",
    type: "password",
    value: PasswordCheck,
    onChange: onChangePasswordCheck,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }), PasswordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 43
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 39
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C\uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "\uAC00\uC785\uD558\uAE30")))));
};

_s(Signup, "K+dcKneZJuPVPsjOOsavMijC+lo=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiRXJyb3JNZXNzYWdlIiwic3R5bGVkIiwiZGl2IiwiU2lnbnVwIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VTdGF0ZSIsIlBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwiUGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwib25DaGFuZ2VUZXJtIiwiY2hlY2tlZCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIm9uc3VibWl0IiwiUGFzc3dvcmQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWxCO0tBQU1GLFk7O0FBSU4sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUppQixrQkFLUUMsK0RBQVEsQ0FBQyxFQUFELENBTGhCO0FBQUE7QUFBQSxNQUtWQyxFQUxVO0FBQUEsTUFLTkMsVUFMTSxrQkFPakI7QUFDQTtBQUNBO0FBQ0E7OztBQVZpQixtQkFXb0JGLCtEQUFRLENBQUMsRUFBRCxDQVg1QjtBQUFBO0FBQUEsTUFXVkcsUUFYVTtBQUFBLE1BV0FDLGdCQVhBLGtCQWFqQjtBQUNBO0FBQ0E7QUFDQTs7O0FBaEJpQixtQkFpQm9CSiwrREFBUSxDQUFDLEVBQUQsQ0FqQjVCO0FBQUE7QUFBQSxNQWlCVkssUUFqQlU7QUFBQSxNQWlCQUMsZ0JBakJBLGtCQW1CakI7OztBQW5CaUIsa0JBb0J5QkMsc0RBQVEsQ0FBQyxFQUFELENBcEJqQztBQUFBLE1Bb0JWQyxhQXBCVTtBQUFBLE1Bb0JLQyxnQkFwQkw7O0FBQUEsbUJBcUJ5QkYsc0RBQVEsQ0FBQyxLQUFELENBckJqQztBQUFBLE1BcUJWRyxhQXJCVTtBQUFBLE1BcUJLQyxnQkFyQkw7O0FBc0JqQixNQUFNQyxxQkFBcUIsR0FBR0MseURBQVcsQ0FBQyxZQUFJO0FBQzFDSixvQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDQUwsb0JBQWdCLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CWCxRQUFwQixDQUFoQjtBQUNILEdBSHdDLEVBR3RDLENBQUNBLFFBQUQsQ0FIc0MsQ0FBekMsQ0F0QmlCLENBMkJqQjs7QUEzQmlCLG1CQTRCT0Usc0RBQVEsQ0FBQyxFQUFELENBNUJmO0FBQUEsTUE0QlZVLElBNUJVO0FBQUEsTUE0QkpDLE9BNUJJOztBQUFBLG1CQTZCaUJYLHNEQUFRLENBQUMsS0FBRCxDQTdCekI7QUFBQSxNQTZCVlksU0E3QlU7QUFBQSxNQTZCQ0MsWUE3QkQ7O0FBOEJqQixNQUFNQyxZQUFZLEdBQUdSLHlEQUFXLENBQUMsWUFBSTtBQUNqQ0ssV0FBTyxDQUFDSixDQUFDLENBQUNDLE1BQUYsQ0FBU08sT0FBVixDQUFQO0FBQ0FGLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0gsR0FIK0IsRUFHN0IsQ0FBQ0gsSUFBRCxDQUg2QixDQUFoQztBQUtBLE1BQU1NLFFBQVEsR0FBR1YseURBQVcsQ0FBQyxZQUFJO0FBQzdCLFFBQUdSLFFBQVEsS0FBS0ssYUFBaEIsRUFBOEI7QUFDMUIsYUFBT0MsZ0JBQWdCLENBQUMsSUFBRCxDQUF2QjtBQUNIOztBQUNELFFBQUcsQ0FBQ00sSUFBSixFQUFVO0FBQ04sYUFBT0csWUFBWSxDQUFDLElBQUQsQ0FBbkI7QUFDSDs7QUFDREksV0FBTyxDQUFDQyxHQUFSLENBQVl4QixFQUFaLEVBQWdCRSxRQUFoQixFQUEwQkUsUUFBMUI7QUFDSCxHQVIyQixFQVF6QixDQUFDQSxRQUFELEVBQVdGLFFBQVgsRUFBcUJjLElBQXJCLENBUnlCLENBQTVCO0FBVUEsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLENBREosRUFJSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFUyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsMENBQUQ7QUFBTyxRQUFJLEVBQUMsU0FBWjtBQUFzQixTQUFLLEVBQUV6QixFQUE3QjtBQUFpQyxZQUFRLEVBQUVDLFVBQTNDO0FBQXVELFlBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxlQUFaO0FBQTRCLFNBQUssRUFBRUMsUUFBbkM7QUFBNkMsWUFBUSxFQUFFQyxnQkFBdkQ7QUFBeUUsWUFBUSxNQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FOSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDBDQUFEO0FBQU8sUUFBSSxFQUFDLGVBQVo7QUFBNEIsUUFBSSxFQUFDLFVBQWpDO0FBQTRDLFNBQUssRUFBRXVCLFFBQW5EO0FBQTZELFlBQVEsRUFBRXJCLGdCQUF2RTtBQUF5RixZQUFRLE1BQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQVhKLEVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxxQkFBWjtBQUFrQyxRQUFJLEVBQUMsVUFBdkM7QUFBa0QsU0FBSyxFQUFFRSxhQUF6RDtBQUF3RSxZQUFRLEVBQUVJLHFCQUFsRjtBQUF5RyxZQUFRLE1BQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlLRixhQUFhLElBQUksTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBSnRCLENBaEJKLEVBc0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQVUsUUFBSSxFQUFDLFdBQWY7QUFBMkIsV0FBTyxFQUFFTyxJQUFwQztBQUEwQyxZQUFRLEVBQUVJLFlBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREosRUFFS0YsU0FBUyxJQUFJLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQUZsQixDQXRCSixFQTBCSTtBQUFLLFNBQUssRUFBRTtBQUFDUyxlQUFTLEVBQUc7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosQ0ExQkosQ0FESixDQUpKLENBREo7QUF1Q0gsQ0FwRkQ7O0dBQU03QixNO1VBS3VCQyx1RCxFQU1ZQSx1RCxFQU1BQSx1RDs7O01BakJuQ0QsTTtBQXNGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNpZ251cC5qcy5jYWFjYjJhYjRjMTU0MjgxZmZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogcmVkO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIH0sIFtdKVxyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICAvLyBjb25zdCBbbmlja25hbWUsIHNldE5pY2tuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vIGNvbnN0IG9uQ2hhbmdlTmlja25hbWUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gICAgIHNldE5pY2tuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gfSwgW10pXHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyB9LCBbXSlcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgLy8g67mE67CA67KI7Zi4IOyytO2BrCDsl5Drn6wg7LKY66asXHJcbiAgICBjb25zdCBbUGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbUGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sIFtwYXNzd29yZF0pXHJcblxyXG4gICAgLy8g7JW96rSA64+Z7J2YXHJcbiAgICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICB9LCBbdGVybV0pXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmKHBhc3N3b3JkICE9PSBQYXNzd29yZEVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpXHJcbiAgICB9LCBbcGFzc3dvcmQsIG5pY2tuYW1lLCB0ZXJtXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD4gXHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uc3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja25hbWVcIj7ri4nrhLTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLW5pY2tuYW1lXCIgdmFsdWU9e25pY2tuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e1Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtQ2hlY2tcIj7ruYTrsIDrsojtmLgg7LK07YGsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZC1DaGVja1wiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtQYXNzd29yZENoZWNrfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7UGFzc3dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbmFtZT1cInVzZXItdGVybVwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PuyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbztlanri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3AgOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsIDsnoXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9