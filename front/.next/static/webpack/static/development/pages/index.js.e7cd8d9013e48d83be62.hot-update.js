webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jaeho\\Desktop\\nodeBirde\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uAE00\uC744 \uC785\uB825\uD574\uBCF4\uC138\uC694~!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, imagePaths.map(function (v) {
    return __jsx("div", {
      key: v,
      style: {
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: v,
      style: {
        width: '200px'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }, "\uC81C\uAC70")));
  })));
};

_s(PostForm, "sjs3n/z3dI7KesCZc5U3KZ9IcM8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsIm9uQ2hhbmdlVGV4dCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJtYXJnaW4iLCJtYXAiLCJ2IiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEscUJBQ0lDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVVBLEtBQUssQ0FBQ0MsSUFBaEI7QUFBQSxHQUFELENBRGY7QUFBQSxNQUNYQyxVQURXLGdCQUNYQSxVQURXOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVpDLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUduQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDSCxXQUFPLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDSCxHQUYrQixDQUFoQztBQUdBLE1BQU1DLFFBQVEsR0FBR0oseURBQVcsQ0FBQyxZQUFNLENBRWxDLENBRjJCLEVBRXpCLEVBRnlCLENBQTVCO0FBSUEsU0FDSSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVLLFlBQU0sRUFBRTtBQUFWLEtBQWI7QUFBd0MsV0FBTyxFQUFDLHFCQUFoRDtBQUFzRSxZQUFRLEVBQUVELFFBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNJLFNBQUssRUFBRVAsSUFEWDtBQUVJLFlBQVEsRUFBRUUsWUFGZDtBQUdJLGFBQVMsRUFBRSxHQUhmO0FBSUksZUFBVyxFQUFDLHFEQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFRLE1BQTNCO0FBQTRCLFVBQU0sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUZKLEVBR0ksTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFNBQUssRUFBRTtBQUFFLGVBQU87QUFBVCxLQUE5QjtBQUFrRCxZQUFRLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixDQVBKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixVQUFVLENBQUNXLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUs7QUFDakIsV0FDSTtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVELENBQVY7QUFBYSxXQUFLLEVBQUU7QUFBRUUsYUFBSyxFQUFFO0FBQVQsT0FBcEI7QUFBeUMsU0FBRyxFQUFFRixDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLENBRkosQ0FESjtBQVFILEdBVEEsQ0FETCxDQVpKLENBREo7QUE0QkgsQ0F0Q0Q7O0dBQU1oQixRO1VBQ3FCQyx1RDs7O0tBRHJCRCxRO0FBd0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTdjZDhkOTAxM2U0OGQ4M2JlNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PiBzdGF0ZS5wb3N0KVxyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0gPlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6riA7J2EIOyeheugpe2VtOuztOyEuOyalH4hXCJcclxuICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19ICBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB7Lyog7J2066+47KeAIOyXheuhnOuTnOyLnCDsnbTrr7jsp4Ag66+466as67O064qUIOu2gOu2hCAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9