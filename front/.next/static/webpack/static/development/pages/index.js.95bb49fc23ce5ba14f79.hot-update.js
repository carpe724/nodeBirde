webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '마크'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/300px-Hopetoun_falls.jpg'
    }, {
      src: 'https://https://lh3.googleusercontent.com/proxy/cM-PCN2gslTzIV3XWq6cP5xcpca-UL8yjqnstLYs63LIH-0uRXP5KZCSHsEcMZo-ailZav3Lb9ICCsjmmFy_rE2mf5yTz8wVQWjmLQ4p_dZ0T1tC_r_KOc_O'
    }, {
      src: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F206CA00E4CF0B11229'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 신기해요 ~'
    }] // db 시퀄라이즈에서 관계 데이터 합쳐지는 경우 대문자 시작 속성때문에 (User, Images, Comments) ,
    // 우선적으로 프론트 개발자라면 서버개발자와 리덕스 데이터 구조 합의 필요

  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터 입니다',
  User: {
    id: 1,
    nickname: '마크'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // dummyPost 를 배열 앞에다가 추가해야 게시글이 위에서부터 쌓임 >> 반대도가능?
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUFDO0FBQ1JDLE1BQUUsRUFBRSxDQURJO0FBRVJDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZFO0FBTVJDLFdBQU8sRUFBRSx1QkFORDtBQU9SQyxVQUFNLEVBQUUsQ0FBQztBQUNMQyxTQUFHLEVBQUU7QUFEQSxLQUFELEVBRU47QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FGTSxFQUlOO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBSk0sQ0FQQTtBQWNSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxDQWRGLENBb0JSO0FBQ0E7O0FBckJRLEdBQUQsQ0FEYTtBQXdCeEJJLFlBQVUsRUFBRSxFQXhCWTtBQXlCeEJDLFdBQVMsRUFBRTtBQXpCYSxDQUFyQjtBQTRCUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBRUY7QUFEYSxDQUFoQjtBQUlQLElBQU1HLFNBQVMsR0FBRztBQUNkWixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsV0FGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kRSxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFXQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJoQixZQUF5QjtBQUFBLE1BQVhpQixNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSWYsaUJBQVMsR0FBR2EsU0FBSCxzR0FBaUJFLEtBQUssQ0FBQ2YsU0FBdkIsRUFGYjtBQUdJO0FBQ0FTLGlCQUFTLEVBQUU7QUFKZjs7QUFNSjtBQUNJLGFBQU9NLEtBQVA7QUFUUjtBQVdILENBWkQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45NWJiNDlmYzIzY2U1YmExNGY3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+uniO2BrCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8zLzM2L0hvcGV0b3VuX2ZhbGxzLmpwZy8zMDBweC1Ib3BldG91bl9mYWxscy5qcGcnLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9jTS1QQ04yZ3NsVHpJVjNYV3E2Y1A1eGNwY2EtVUw4eWpxbnN0TFlzNjNMSUgtMHVSWFA1S1pDU0hzRWNNWm8tYWlsWmF2M0xiOUlDQ3NqbW1GeV9yRTJtZjV5VHo4d1ZRV2ptTFE0cF9kWjBUMXRDX3JfS09jX08nLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2ltZzEuZGF1bWNkbi5uZXQvdGh1bWIvUjgwMHgwLz9zY29kZT1tdGlzdG9yeTImZm5hbWU9aHR0cHMlM0ElMkYlMkZ0MS5kYXVtY2RuLm5ldCUyRmNmaWxlJTJGdGlzdG9yeSUyRjIwNkNBMDBFNENGMEIxMTIyOScsXHJcbiAgICAgICAgfSxdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg7Iug6riw7ZW07JqUIH4nLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIC8vIGRiIOyLnO2AhOudvOydtOymiOyXkOyEnCDqtIDqs4Qg642w7J207YSwIO2VqeyzkOyngOuKlCDqsr3smrAg64yA66y47J6QIOyLnOyekSDsho3shLHrlYzrrLjsl5AgKFVzZXIsIEltYWdlcywgQ29tbWVudHMpICxcclxuICAgICAgICAvLyDsmrDshKDsoIHsnLzroZwg7ZSE66Gg7Yq4IOqwnOuwnOyekOudvOuptCDshJzrsoTqsJzrsJzsnpDsmYAg66as642V7IqkIOuNsOydtO2EsCDqtazsobAg7ZWp7J2YIO2VhOyalFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb250ZW50OiAn642U66+4642w7J207YSwIOyeheuLiOuLpCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfrp4jtgawnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAvLyBkdW1teVBvc3Qg66W8IOuwsOyXtCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07JW8IOqyjOyLnOq4gOydtCDsnITsl5DshJzrtoDthLAg7IyT7J6EID4+IOuwmOuMgOuPhOqwgOuKpT9cclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=