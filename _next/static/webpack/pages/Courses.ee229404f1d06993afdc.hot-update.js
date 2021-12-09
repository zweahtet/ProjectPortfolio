self["webpackHotUpdate_N_E"]("pages/Courses",{

/***/ "./src/pages/Courses/index.js":
/*!************************************!*\
  !*** ./src/pages/Courses/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Courses; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zhtet_Desktop_zweahtet_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SideNav/SideNav */ "./src/components/SideNav/SideNav.js");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Content/Content */ "./src/components/Content/Content.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\zhtet\\Desktop\\zweahtet.github.io\\src\\pages\\Courses\\index.js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Courses(_ref) {
  _s();

  var courses = _ref.courses;

  var groupBy = function groupBy(key, array) {
    return array.reduce(function (result, currentElement) {
      var property = currentElement[key];
      result[property] = result[property] || [];
      result[property].push(currentElement);
      return result;
    }, {});
  };

  var coursesGroupByName = groupBy("course", courses);
  var courseNames = Object.keys(coursesGroupByName);
  var courseNamesWithId = courseNames.map(function (name, id) {
    return {
      id: id,
      title: name
    };
  }); // const problemsGroupByTitle = groupBy("title", courses)
  // const problemTitles = Object.keys(problemsGroupByTitle)

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
    contentHeader: 'cs61a',
    contentBody: coursesGroupByName['cs61a'],
    sideNavList: courseNamesWithId
  }),
      _React$useState2 = (0,C_Users_zhtet_Desktop_zweahtet_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleOnClickNav = function handleOnClickNav(event) {
    // alert(event.target.getAttribute('id'))
    setState({
      contentHeader: event.target.getAttribute('value'),
      contentBody: coursesGroupByName[event.target.getAttribute('value')],
      sideNavList: state.sideNavList
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col relative min-h-screen md:flex",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex h-full flex-grow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_3__.default, {
        navList: state.sideNavList,
        onClick: handleOnClickNav
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content_Content__WEBPACK_IMPORTED_MODULE_4__.default, {
        contentHeader: state.contentHeader,
        contentBody: state.contentBody
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
} // export async function getServerSideProps(context) {
//     const client = await clientPromise
//     const db = client.db("ProjectPortforlio");
//     const data = await db
//         .collection("courses")
//         .find({})
//         .toArray();
//     const courses = JSON.parse(JSON.stringify(data));
//     return {
//         props: { courses },
//     }
// }

_s(Courses, "lo7P8G9MHlvepIK0/13lHZPqgtw=");

_c = Courses;

var _c;

$RefreshReg$(_c, "Courses");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NvdXJzZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ291cnNlcyIsImNvdXJzZXMiLCJncm91cEJ5Iiwia2V5IiwiYXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJjdXJyZW50RWxlbWVudCIsInByb3BlcnR5IiwicHVzaCIsImNvdXJzZXNHcm91cEJ5TmFtZSIsImNvdXJzZU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImNvdXJzZU5hbWVzV2l0aElkIiwibWFwIiwibmFtZSIsImlkIiwidGl0bGUiLCJSZWFjdCIsImNvbnRlbnRIZWFkZXIiLCJjb250ZW50Qm9keSIsInNpZGVOYXZMaXN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZU9uQ2xpY2tOYXYiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxPQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUN6QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDNUIsV0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsTUFBRCxFQUFTQyxjQUFULEVBQTRCO0FBQzVDLFVBQU1DLFFBQVEsR0FBR0QsY0FBYyxDQUFDSixHQUFELENBQS9CO0FBQ0FHLFlBQU0sQ0FBQ0UsUUFBRCxDQUFOLEdBQW1CRixNQUFNLENBQUNFLFFBQUQsQ0FBTixJQUFvQixFQUF2QztBQUNBRixZQUFNLENBQUNFLFFBQUQsQ0FBTixDQUFpQkMsSUFBakIsQ0FBc0JGLGNBQXRCO0FBQ0EsYUFBT0QsTUFBUDtBQUNILEtBTE0sRUFLSixFQUxJLENBQVA7QUFNSCxHQVBEOztBQVNBLE1BQU1JLGtCQUFrQixHQUFHUixPQUFPLENBQUMsUUFBRCxFQUFXRCxPQUFYLENBQWxDO0FBQ0EsTUFBTVUsV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsa0JBQVosQ0FBcEI7QUFDQSxNQUFNSSxpQkFBaUIsR0FBR0gsV0FBVyxDQUFDSSxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsRUFBUDtBQUFBLFdBQ3RDO0FBQUNBLFFBQUUsRUFBRUEsRUFBTDtBQUFTQyxXQUFLLEVBQUVGO0FBQWhCLEtBRHNDO0FBQUEsR0FBaEIsQ0FBMUIsQ0FaeUMsQ0FlekM7QUFDQTs7QUFoQnlDLHdCQWtCZkcscURBQUEsQ0FBZTtBQUNyQ0MsaUJBQWEsRUFBRSxPQURzQjtBQUVyQ0MsZUFBVyxFQUFFWCxrQkFBa0IsQ0FBQyxPQUFELENBRk07QUFHckNZLGVBQVcsRUFBRVI7QUFId0IsR0FBZixDQWxCZTtBQUFBO0FBQUEsTUFrQmxDUyxLQWxCa0M7QUFBQSxNQWtCM0JDLFFBbEIyQjs7QUF3QnpDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDO0FBQ0FGLFlBQVEsQ0FBQztBQUNMSixtQkFBYSxFQUFFTSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixPQUExQixDQURWO0FBRUxQLGlCQUFXLEVBQUVYLGtCQUFrQixDQUFDZ0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBQWIsQ0FBMEIsT0FBMUIsQ0FBRCxDQUYxQjtBQUdMTixpQkFBVyxFQUFFQyxLQUFLLENBQUNEO0FBSGQsS0FBRCxDQUFSO0FBS0gsR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVRO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsOEJBQ0ksOERBQUMsZ0VBQUQ7QUFDSSxlQUFPLEVBQUVDLEtBQUssQ0FBQ0QsV0FEbkI7QUFFSSxlQUFPLEVBQUVHO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0ksOERBQUMsZ0VBQUQ7QUFDSSxxQkFBYSxFQUFFRixLQUFLLENBQUNILGFBRHpCO0FBRUksbUJBQVcsRUFBRUcsS0FBSyxDQUFDRjtBQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsZUFZSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkgsQyxDQWlCRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0dBaEZ3QnJCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ291cnNlcy5lZTIyOTQwNGYxZDA2OTkzYWZkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vdXRpbC9tb25nb2RiJztcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlTmF2L1NpZGVOYXYnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlcyh7IGNvdXJzZXMgfSkge1xyXG4gICAgY29uc3QgZ3JvdXBCeSA9IChrZXksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzdWx0LCBjdXJyZW50RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGN1cnJlbnRFbGVtZW50W2tleV07XHJcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0gPSByZXN1bHRbcHJvcGVydHldIHx8IFtdO1xyXG4gICAgICAgICAgICByZXN1bHRbcHJvcGVydHldLnB1c2goY3VycmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3Vyc2VzR3JvdXBCeU5hbWUgPSBncm91cEJ5KFwiY291cnNlXCIsIGNvdXJzZXMpXHJcbiAgICBjb25zdCBjb3Vyc2VOYW1lcyA9IE9iamVjdC5rZXlzKGNvdXJzZXNHcm91cEJ5TmFtZSlcclxuICAgIGNvbnN0IGNvdXJzZU5hbWVzV2l0aElkID0gY291cnNlTmFtZXMubWFwKChuYW1lLCBpZCkgPT4gKFxyXG4gICAgICAgIHtpZDogaWQsIHRpdGxlOiBuYW1lfVxyXG4gICAgKSlcclxuICAgIC8vIGNvbnN0IHByb2JsZW1zR3JvdXBCeVRpdGxlID0gZ3JvdXBCeShcInRpdGxlXCIsIGNvdXJzZXMpXHJcbiAgICAvLyBjb25zdCBwcm9ibGVtVGl0bGVzID0gT2JqZWN0LmtleXMocHJvYmxlbXNHcm91cEJ5VGl0bGUpXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgY29udGVudEhlYWRlcjogJ2NzNjFhJyxcclxuICAgICAgICBjb250ZW50Qm9keTogY291cnNlc0dyb3VwQnlOYW1lWydjczYxYSddLFxyXG4gICAgICAgIHNpZGVOYXZMaXN0OiBjb3Vyc2VOYW1lc1dpdGhJZCxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25DbGlja05hdiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIGFsZXJ0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpXHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb250ZW50SGVhZGVyOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLFxyXG4gICAgICAgICAgICBjb250ZW50Qm9keTogY291cnNlc0dyb3VwQnlOYW1lW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyldLFxyXG4gICAgICAgICAgICBzaWRlTmF2TGlzdDogc3RhdGUuc2lkZU5hdkxpc3RcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByZWxhdGl2ZSBtaW4taC1zY3JlZW4gbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGVOYXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpc3Q9e3N0YXRlLnNpZGVOYXZMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja05hdn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVhZGVyPXtzdGF0ZS5jb250ZW50SGVhZGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEJvZHk9e3N0YXRlLmNvbnRlbnRCb2R5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3Rlci8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcblxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJQcm9qZWN0UG9ydGZvcmxpb1wiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImNvdXJzZXNcIikuZmluZCh7fSkudG9BcnJheSgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb3Vyc2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBjb3Vyc2VzfSxcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlXHJcbi8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcIlByb2plY3RQb3J0Zm9ybGlvXCIpO1xyXG5cclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4vLyAgICAgICAgIC5jb2xsZWN0aW9uKFwiY291cnNlc1wiKVxyXG4vLyAgICAgICAgIC5maW5kKHt9KVxyXG4vLyAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGNvdXJzZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7IGNvdXJzZXMgfSxcclxuLy8gICAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=