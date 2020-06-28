webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jaeho\\Desktop\\nodeBirde\\front\\components\\PostCardContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  // 첫 번째 게시글 #해시태그 #익스프레스
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, postData.split(/(#[^\s#]+)/g).map(function (v, i) {
    if (v.match(/(#[^\s#]+)/)) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/hashtag/".concat(v, ".slice(1)"),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 28
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 74
        }
      }, v));
    }

    return v;
  }));
};

_c = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsImkiLCJtYXRjaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQUU7QUFDeEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLGFBQWYsRUFBOEJDLEdBQTlCLENBQWtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFRO0FBQ3ZDLFFBQUdELENBQUMsQ0FBQ0UsS0FBRixDQUFRLFlBQVIsQ0FBSCxFQUF5QjtBQUNyQixhQUFPLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLHFCQUFjRixDQUFkLGNBQVY7QUFBc0MsV0FBRyxFQUFFQyxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUQsQ0FBSixDQUE5QyxDQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsQ0FBUDtBQUNILEdBTEEsQ0FETCxDQURKO0FBVUgsQ0FYRDs7S0FBTUosZTtBQWFOQSxlQUFlLENBQUNPLFNBQWhCLEdBQTRCO0FBQ3hCTixVQUFRLEVBQUdPLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBNUI7QUFJZVYsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRkMjg5MTQ4NjJhY2NmYzBiNjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdERhdGEgfSkgPT4geyAvLyDssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodiwgaSk9PntcclxuICAgICAgICAgICAgICAgIGlmKHYubWF0Y2goLygjW15cXHMjXSspLykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2fS5zbGljZSgxKWB9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3REYXRhIDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=