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
      className: "flex flex-row justify-between",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsL0RldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJwcm9wcyIsImNvbnRlbnRIZWFkZXIiLCJxdWVzdGlvbiIsImNvZGUiLCJkcmFjdWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF5QjtBQUNwQyxzQkFDSTtBQUFNLGFBQVMsRUFBQyxvRUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQTJCQSxLQUFLLENBQUNDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU9JO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFDS0QsS0FBSyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsK0JBQ0ksOERBQUMsd0RBQUQ7QUFBVyxjQUFJLEVBQUVGLEtBQUssQ0FBQ0csSUFBdkI7QUFBNkIsa0JBQVEsRUFBQyxRQUF0QztBQUErQyx5QkFBZSxFQUFFLElBQWhFO0FBQXNFLGVBQUssRUFBRUMsc0RBQU9BO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0FuQnVCTCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvdXJzZXMuYzc0NGZlODg1YzE4Y2VkZTdiMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDb2RlRGlzcGxheSBmcm9tIFwiLi4vQ29kZURpc3BsYXkvQ29kZURpc3BsYXlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29weUJsb2NrLCBkcmFjdWxhIH0gZnJvbSBcInJlYWN0LWNvZGUtYmxvY2tzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoIHByb3BzICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBweS0xIHB4LTQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Db3Vyc2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+QmFjazwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cHJvcHMuY29udGVudEhlYWRlcn08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtcXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLWNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29weUJsb2NrIHRleHQ9e3Byb3BzLmNvZGV9IGxhbmd1YWdlPVwicHl0aG9uXCIgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfSB0aGVtZT17ZHJhY3VsYX0vPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==