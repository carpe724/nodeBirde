webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./reducers/post.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // const initialState = {
//     user: {
//         isLoggedIn: false,
//         user: null,
//         signUpData: {},
//         loginData: {},
//     },
//     post: {
//         mainPosts: [],
//     }
// };
// export const loginAction = (data) => {
//     return {
//         type: 'LOG_IN',
//         data,
//     }
// }
// export const logoutAction = (data) => {
//     return {
//         type: 'LOG_OUT',
//     }
// }
// ------------- action
// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'codeMark'
// }
// ------------- action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };
// changeNickname('codeMark');
// store.dispatch(changeNickname('codeMark'));
// (이전상태, 액션) => 다음상태 [함수]
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
// case 'CHANGE_NICKNAME':
//     return{
//         ...state,
//         name: action.data,
//     }
// case HYDRATE:
//     return {...state, ...action.payload};
// case 'LOG_IN':
//     return{
//         ...state,
//         user: {
//             ...state.user,
//             isLoggedIn : true,
//             user: action.data,
//         },
//     };
// case 'LOG_OUT':
//     return{
//         ...state,
//         user: {
//             ...state.user,
//             isLoggedIn : false,
//             user: null,
//         },
//     };
//         default:
//             return state;
//     }
// };

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUUsaUJBQXdCO0FBQUEsUUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYQyxNQUFXOztBQUMzQixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxXQUFLQywwREFBTDtBQUNBLCtDQUFXSCxLQUFYLEdBQXFCQyxNQUFNLENBQUNHLE9BQTVCOztBQUNBO0FBQ0ksZUFBT0osS0FBUDtBQUpSO0FBTUgsR0FSK0I7QUFVaENLLE1BQUksRUFBSkEsNkNBVmdDO0FBV2hDQyxNQUFJLEVBQUpBLDZDQUFJQTtBQVg0QixDQUFELENBQW5DO0FBY2VULDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmMxOTQ4ZDQyNzA5ODgzZDkzMzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICB1c2VyOiB7XHJcbi8vICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgdXNlcjogbnVsbCxcclxuLy8gICAgICAgICBzaWduVXBEYXRhOiB7fSxcclxuLy8gICAgICAgICBsb2dpbkRhdGE6IHt9LFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHBvc3Q6IHtcclxuLy8gICAgICAgICBtYWluUG9zdHM6IFtdLFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbi8vICAgICAgICAgZGF0YSxcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLSBhY3Rpb25cclxuXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbi8vICAgICBkYXRhOiAnY29kZU1hcmsnXHJcbi8vIH1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0gYWN0aW9uIGNyZWF0b3JcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgICAgICBkYXRhLFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyBjaGFuZ2VOaWNrbmFtZSgnY29kZU1hcmsnKTtcclxuXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdjb2RlTWFyaycpKTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcIFvtlajsiJhdXHJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBjYXNlICdDSEFOR0VfTklDS05BTUUnOlxyXG4gICAgICAgIC8vICAgICByZXR1cm57XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgICAgIG5hbWU6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgLy8gICAgIHJldHVybntcclxuICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaXNMb2dnZWRJbiA6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgIC8vICAgICByZXR1cm57XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlzTG9nZ2VkSW4gOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgfTtcclxuXHJcblxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9