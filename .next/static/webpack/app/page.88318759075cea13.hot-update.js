"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/API/Netflix.js":
/*!****************************!*\
  !*** ./app/API/Netflix.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetNetflix)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetNetflix(param) {\n    let { id } = param;\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    async function getLink(param) {\n        let { id } = param;\n        try {\n            console.log(id);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/sources/?apiKey=\").concat(API_KEY, \"&region=CA\"));\n            const data = await response.json();\n            console.log(data);\n            setResults(data);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"GetNetflix.useEffect\": ()=>{\n            getLink({\n                id\n            });\n        }\n    }[\"GetNetflix.useEffect\"], [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Netflix.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(GetNetflix, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n_c = GetNetflix;\nvar _c;\n$RefreshReg$(_c, \"GetNetflix\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvTmV0ZmxpeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTZCO0FBQ2U7QUFFN0IsU0FBU0csV0FBVyxLQUFNO1FBQU4sRUFBRUMsRUFBRSxFQUFFLEdBQU47O0lBQ2pDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1NLFVBQVVDLDBDQUF5QztJQUV6RCxlQUFlRyxRQUFRLEtBQU07WUFBTixFQUFFUCxFQUFFLEVBQUUsR0FBTjtRQUNyQixJQUFJO1lBQ0ZRLFFBQVFDLEdBQUcsQ0FBQ1Q7WUFDWixNQUFNVSxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0RFIsT0FBdEJILElBQUcscUJBQTJCLE9BQVJHLFNBQVE7WUFFdEUsTUFBTVMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDTCxRQUFRQyxHQUFHLENBQUNHO1lBQ1pWLFdBQVdVO1FBQ2IsRUFBRSxPQUFPRSxPQUFPO1lBQ2ROLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSztRQUN4QjtJQUNGO0lBRUFoQixnREFBU0E7Z0NBQUM7WUFDUlMsUUFBUTtnQkFBRVA7WUFBRztRQUNmOytCQUFHO1FBQUNBO0tBQUc7SUFFUCxxQkFDRSw4REFBQ2U7Ozs7O0FBYUw7R0FwQ3dCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBub3JcXGNwcmczMDZcXGNwcmczMDYtZmluYWxwcm9qZWN0XFxhcHBcXEFQSVxcTmV0ZmxpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0TmV0ZmxpeCh7IGlkIH0pIHtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRMaW5rKHsgaWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3RpdGxlLyR7aWR9L3NvdXJjZXMvP2FwaUtleT0ke0FQSV9LRVl9JnJlZ2lvbj1DQWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldFJlc3VsdHMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TGluayh7IGlkIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIHtyZXN1bHRzLm5hbWVbXCJOZXRmbGl4XCJdID8gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtyZXN1bHRzLm5hbWVbXCJOZXRmbGl4XCJdLndlYl91cmx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0NDMjUyQ10gcHktMiByb3VuZGVkLXhsIHRleHQtWyNGQUU5RUFdIHRleHQtbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgT24gTmV0ZmxpeFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD51bmF2YWlsYWJsZTwvcD5cclxuICAgICAgKX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXROZXRmbGl4IiwiaWQiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV0FUQ0hNT0RFX0FQSV9LRVkiLCJnZXRMaW5rIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiZGl2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/Netflix.js\n"));

/***/ })

});