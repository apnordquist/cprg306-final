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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetNetflix)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetNetflix(param) {\n    let { id } = param;\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    async function getLink(title) {\n        try {\n            const id = await getID(title);\n            console.log(id);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/sources/?apiKey=\").concat(API_KEY, \"&region=CA\"));\n            const data = await response.json();\n            console.log(data);\n            setResults(data);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"GetNetflix.useEffect\": ()=>{\n            getLink({\n                id\n            });\n        }\n    }[\"GetNetflix.useEffect\"], [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: results ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            href: results.name[\"Netflix\"].web_url,\n            className: \"bg-[#CC252C] py-2 rounded-xl text-[#FAE9EA] text-l\",\n            children: \"On Netflix\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Netflix.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"unavail\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Netflix.js\",\n            lineNumber: 36,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Netflix.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(GetNetflix, \"reTVpSxrMK1+M+KWoZPLxIJPHh0=\");\n_c = GetNetflix;\nvar _c;\n$RefreshReg$(_c, \"GetNetflix\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvTmV0ZmxpeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTZCO0FBQ2U7QUFFN0IsU0FBU0csV0FBVyxLQUFJO1FBQUosRUFBQ0MsRUFBRSxFQUFDLEdBQUo7O0lBQ2pDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhDLGVBQWVNLFFBQVFDLEtBQUs7UUFDMUIsSUFBSTtZQUNGLE1BQU1KLEtBQUssTUFBTUssTUFBTUQ7WUFDdkJFLFFBQVFDLEdBQUcsQ0FBQ1A7WUFDWixNQUFNUSxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0REMsT0FBdEJWLElBQUcscUJBQTJCLE9BQVJVLFNBQVE7WUFFdEUsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1lBQ2hDTixRQUFRQyxHQUFHLENBQUNJO1lBQ1pULFdBQVdTO1FBQ2IsRUFBRSxPQUFPRSxPQUFPO1lBQ2RQLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTTtRQUN4QjtJQUNGO0lBRUFmLGdEQUFTQTtnQ0FBQztZQUNSSyxRQUFRO2dCQUFFSDtZQUFHO1FBQ2Y7K0JBQUc7UUFBQ0E7S0FBRztJQUVQLHFCQUNFLDhEQUFDYztrQkFDQ2Isd0JBQ0YsOERBQUNMLGlEQUFJQTtZQUNIbUIsTUFBTWQsUUFBUWUsSUFBSSxDQUFDLFVBQVUsQ0FBQ0MsT0FBTztZQUNyQ0MsV0FBVTtzQkFDWDs7Ozs7aUNBRVMsOERBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUdqQjtHQWpDd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhcG5vclxcY3ByZzMwNlxcY3ByZzMwNi1maW5hbHByb2plY3RcXGFwcFxcQVBJXFxOZXRmbGl4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXROZXRmbGl4KHtpZH0pIHtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldExpbmsodGl0bGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgZ2V0SUQodGl0bGUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndhdGNobW9kZS5jb20vdjEvdGl0bGUvJHtpZH0vc291cmNlcy8/YXBpS2V5PSR7QVBJX0tFWX0mcmVnaW9uPUNBYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0UmVzdWx0cyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRMaW5rKHsgaWQgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgeyByZXN1bHRzID9cclxuICAgIDxMaW5rXHJcbiAgICAgIGhyZWY9e3Jlc3VsdHMubmFtZVtcIk5ldGZsaXhcIl0ud2ViX3VybH1cclxuICAgICAgY2xhc3NOYW1lPVwiYmctWyNDQzI1MkNdIHB5LTIgcm91bmRlZC14bCB0ZXh0LVsjRkFFOUVBXSB0ZXh0LWxcIlxyXG4gICAgPlxyXG4gICAgICBPbiBOZXRmbGl4XHJcbiAgICA8L0xpbms+IDogPHA+dW5hdmFpbDwvcD4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2V0TmV0ZmxpeCIsImlkIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJnZXRMaW5rIiwidGl0bGUiLCJnZXRJRCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX0tFWSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJkaXYiLCJocmVmIiwibmFtZSIsIndlYl91cmwiLCJjbGFzc05hbWUiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/Netflix.js\n"));

/***/ })

});