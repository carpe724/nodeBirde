webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jaeho\\Desktop\\nodeBirde\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, isLoggedIn && __jsx(PostForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }), mainPosts.map(function (post) {
    return __jsx(PostCard, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 39
      }
    });
  }));
};

_s(Home, "yViitBsbbl69mW3t/o7jzus6gBQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwicG9zdCIsIm1haW5Qb3N0cyIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEscUJBRVFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRm5CO0FBQUEsTUFFUEMsVUFGTyxnQkFFUEEsVUFGTzs7QUFBQSxzQkFHT0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIbEI7QUFBQSxNQUdQQyxTQUhPLGlCQUdQQSxTQUhPOztBQUtmLFNBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01GLFVBQVUsSUFBSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURwQixFQUVNRSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDRixJQUFEO0FBQUEsV0FBVSxNQUFDLFFBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0csRUFBcEI7QUFBd0IsVUFBSSxFQUFFSCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFkLENBRk4sQ0FESjtBQU1ILENBWEQ7O0dBQU1MLEk7VUFFcUJDLHVELEVBQ0RBLHVEOzs7S0FIcEJELEk7QUFhU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNkOWE4OThmYTU4ZTQxYjE4MjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIHsgaXNMb2dnZWRJbiAmJiA8UG9zdEZvcm0gLz4gfVxyXG4gICAgICAgICAgICB7IG1haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+ICl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==