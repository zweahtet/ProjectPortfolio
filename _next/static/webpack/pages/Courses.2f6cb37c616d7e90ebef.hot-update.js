self["webpackHotUpdate_N_E"]("pages/Courses",{

/***/ "./src/components/Detail/Detail.js":
/*!*****************************************!*\
  !*** ./src/components/Detail/Detail.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Detail; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-code-blocks */ "./node_modules/react-code-blocks/dist/react-code-blocks.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\zhtet\\Desktop\\zweahtet.github.io\\src\\components\\Detail\\Detail.js";
// import CodeDisplay from "../CodeDisplay/CodeDisplay";


function Detail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: "flex flex-col overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/Courses",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "",
          children: "Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "font-bold",
        children: props.contentHeader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "panel-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "panel-question",
        children: props.question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "panel-code",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_2__.CopyBlock, {
          text: props.code,
          language: "python",
          showLineNumbers: true,
          theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_2__.dracula
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Detail;

var _c;

$RefreshReg$(_c, "Detail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsL0RldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJwcm9wcyIsImNvbnRlbnRIZWFkZXIiLCJxdWVzdGlvbiIsImNvZGUiLCJkcmFjdWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF5QjtBQUNwQyxzQkFDSTtBQUFNLGFBQVMsRUFBQyxvRUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQSxrQkFBMkJBLEtBQUssQ0FBQ0M7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0k7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBLGtCQUNLRCxLQUFLLENBQUNFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSwrQkFDSSw4REFBQyx3REFBRDtBQUFXLGNBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUF2QjtBQUE2QixrQkFBUSxFQUFDLFFBQXRDO0FBQStDLHlCQUFlLEVBQUUsSUFBaEU7QUFBc0UsZUFBSyxFQUFFQyxzREFBT0E7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDtLQW5CdUJMLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ291cnNlcy4yZjZjYjM3YzYxNmQ3ZTkwZWJlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IENvZGVEaXNwbGF5IGZyb20gXCIuLi9Db2RlRGlzcGxheS9Db2RlRGlzcGxheVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb3B5QmxvY2ssIGRyYWN1bGEgfSBmcm9tIFwicmVhY3QtY29kZS1ibG9ja3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCggcHJvcHMgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIHB5LTEgcHgtNCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ291cnNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPkJhY2s8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Byb3BzLmNvbnRlbnRIZWFkZXJ9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLXF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC1jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvcHlCbG9jayB0ZXh0PXtwcm9wcy5jb2RlfSBsYW5ndWFnZT1cInB5dGhvblwiIHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gdGhlbWU9e2RyYWN1bGF9Lz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=