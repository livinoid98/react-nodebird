webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\admin\\Desktop\\react-nodebird\\ch1\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });

    if (!commentFormOpened) {}
  }, []);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!me) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["ADD_COMMENT_REQUEST"]
    });
  }, [me && me.id, commentText]);
  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setCommentText(e.target.value);
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt,
    cover: post.img && __jsx("img", {
      src: post.img,
      alt: "example",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 36
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "retweet",
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "heart",
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "message",
      key: "message",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "ellipsis",
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    })],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 24
      }
    }, "\uD314\uB85C\uC6B0"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 34
      }
    }, post.content.split(/(#[^\s]+)/g).map(function (v) {
      if (v.match(/#[^\s]+/)) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/hashtag",
          key: v,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 63
          }
        }, v));
      }

      return v;
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentForm, {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments || [],
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 41
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  })));
};

_s(PostCard, "2U1sn8gHW+hqaCnrJcPcsg2Z15U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsInVzZVN0YXRlIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uVG9nZ2xlQ29tbWVudCIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uU3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJpZCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZWRBdCIsImltZyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJzcGxpdCIsIm1hcCIsInYiLCJtYXRjaCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLGtCQUN5QkMsc0RBQVEsQ0FBQyxLQUFELENBRGpDO0FBQUEsTUFDbEJDLGlCQURrQjtBQUFBLE1BQ0NDLG9CQUREOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVsQkcsV0FGa0I7QUFBQSxNQUVMQyxjQUZLOztBQUFBLHFCQUdaQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBSEM7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RUQ7O0dBQU05QixRO1VBR1dPLHVELEVBQ0lLLHVEOzs7S0FKZlosUTtBQTRFTkEsUUFBUSxDQUFDc0MsU0FBVCxHQUFxQjtBQUNqQnJDLE1BQUksRUFBR3FDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDbkJYLFFBQUksRUFBR1UsaURBQVMsQ0FBQ0UsTUFERTtBQUVuQlYsV0FBTyxFQUFHUSxpREFBUyxDQUFDRyxNQUZEO0FBR25CZCxPQUFHLEVBQUdXLGlEQUFTLENBQUNHLE1BSEc7QUFJbkJmLGFBQVMsRUFBR1ksaURBQVMsQ0FBQ0U7QUFKSCxHQUFoQjtBQURVLENBQXJCO0FBU2V4Qyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDYzYTM5NTgxMDAzYzE3Y2VmNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDYXJkLEJ1dHRvbixBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHt1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRm9ybSBmcm9tICdhbnRkL2xpYi9mb3JtL0Zvcm0nXHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZChwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICBpZighY29tbWVudEZvcm1PcGVuZWQpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighbWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFttZSAmJiBtZS5pZCwgY29tbWVudFRleHRdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUNvbW1lbnRUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17K3Bvc3QuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuaW1nICYmIDxpbWcgc3JjPXtwb3N0LmltZ30gYWx0PVwiZXhhbXBsZVwiLz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInJldHdlZXRcIiBrZXk9XCJyZXR3ZWV0XCIvPixcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiaGVhcnRcIiBrZXk9XCJoZWFydFwiLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1lc3NhZ2VcIiBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJlbGxpcHNpc1wiIGtleT1cImVsbGlwc2lzXCIvPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8QnV0dG9uPu2MlOuhnOyasDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8ZGl2Pntwb3N0LmNvbnRlbnQuc3BsaXQoLygjW15cXHNdKykvZykubWFwKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2Lm1hdGNoKC8jW15cXHNdKy8pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhc2h0YWdcIiBrZXk9e3Z9PjxhPnt2fTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDB9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0IDogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBVc2VyIDogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50IDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpbWcgOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdCA6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==