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

/***/ "(app-pages-browser)/./app/API/GetRecommend.js":
/*!*********************************!*\
  !*** ./app/API/GetRecommend.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecommendations)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Netflix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Netflix */ \"(app-pages-browser)/./app/API/Netflix.js\");\n/* harmony import */ var _DisplayRecommend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayRecommend */ \"(app-pages-browser)/./app/API/DisplayRecommend.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction GetRecommendations(param) {\n    let { query } = param;\n    _s();\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve recommended ids\n    async function getRecommendations(title) {\n        try {\n            const id = await getID(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            setRecommend(data.similar_titles);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"GetRecommendations.useEffect\": ()=>{\n            getRecommendations({\n                query\n            });\n        }\n    }[\"GetRecommendations.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around m-6 align-middle\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: recommendations[0]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: recommendations[1]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: recommendations[2]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecommendations, \"ja+IqFoAAvF4heAmyZhWIz1Tzks=\");\n_c = GetRecommendations;\nvar _c;\n$RefreshReg$(_c, \"GetRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvR2V0UmVjb21tZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1Q7QUFDcUI7QUFFekMsU0FBU0ksbUJBQW1CLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDekMsTUFBTSxDQUFDQyxpQkFBaUJDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNUSxVQUFVQywwQ0FBeUM7SUFFekQseUVBQXlFO0lBQ3pFLGVBQWVHLE1BQU0sS0FBUztZQUFULEVBQUVQLEtBQUssRUFBRSxHQUFUO1FBQ25CLElBQUk7WUFDRixNQUFNUSxRQUFRUixNQUFNUyxRQUFRO1lBQzVCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQXlGSCxPQUExQ0wsU0FBUSxvQ0FBd0MsT0FBTkssT0FBTTtZQUVqRyxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0gsS0FBS0ksYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtZQUNwQyxPQUFPTCxLQUFLSSxhQUFhLENBQUMsRUFBRSxDQUFDQyxFQUFFLENBQUNSLFFBQVE7UUFDMUMsRUFBRSxPQUFPUyxPQUFPO1lBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRztRQUN4QjtJQUNGO0lBRUEsdURBQXVEO0lBQ3ZELGVBQWVDLG1CQUFtQlgsS0FBSztRQUNyQyxJQUFJO1lBQ0YsTUFBTVMsS0FBSyxNQUFNVixNQUFNQztZQUN2QixNQUFNRSxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0RFIsT0FBdEJjLElBQUcscUJBQTJCLE9BQVJkO1lBRTlELE1BQU1TLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1gsYUFBYVUsS0FBS1EsY0FBYztRQUNsQyxFQUFFLE9BQU9GLE9BQU87WUFDZEosUUFBUUMsR0FBRyxDQUFDLFVBQVVHO1FBQ3hCO0lBQ0Y7SUFFQXRCLGdEQUFTQTt3Q0FBQztZQUNSdUIsbUJBQW1CO2dCQUFFbkI7WUFBTTtRQUM3Qjt1Q0FBRztRQUFDQTtLQUFNO0lBRVYsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDcUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN4Qix5REFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7MEJBQzlDLDhEQUFDSCx5REFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7MEJBQzlDLDhEQUFDSCx5REFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7QUFHcEQ7R0E3Q3dCRjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhcG5vclxcY3ByZzMwNlxcY3ByZzMwNi1maW5hbHByb2plY3RcXGFwcFxcQVBJXFxHZXRSZWNvbW1lbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHZXROZXRmbGl4IGZyb20gXCIuL05ldGZsaXhcIjtcclxuaW1wb3J0IERpc3BsYXlSZWNvbW1lbmRhdGlvbnMgZnJvbSBcIi4vRGlzcGxheVJlY29tbWVuZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0UmVjb21tZW5kYXRpb25zKHsgcXVlcnkgfSkge1xyXG4gIGNvbnN0IFtyZWNvbW1lbmRhdGlvbnMsIHNldFJlY29tbWVuZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZO1xyXG5cclxuICAvL3ByaW1hcnkgc2VhcmNoIGZ1bmN0aW9uOyBuZWVkZWQgdG8gcmV0dXJuIGlkIGZvciBvdGhlciBwYXJ0cyBvZiB0aGUgQVBJXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SUQoeyBxdWVyeSB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHF1ZXJ5LnRvU3RyaW5nKCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndhdGNobW9kZS5jb20vdjEvc2VhcmNoLz9hcGlLZXk9JHtBUElfS0VZfSZzZWFyY2hfZmllbGQ9bmFtZSZzZWFyY2hfdmFsdWU9JHt0aXRsZX0mdHlwZXM9bW92aWVgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEudGl0bGVfcmVzdWx0c1swXS5pZCk7XHJcbiAgICAgIHJldHVybiBkYXRhLnRpdGxlX3Jlc3VsdHNbMF0uaWQudG9TdHJpbmcoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vc2Vjb25kYXJ5IHNlYXJjaCBmdW5jdGlvbiB0byByZXRyaWV2ZSByZWNvbW1lbmRlZCBpZHNcclxuICBhc3luYyBmdW5jdGlvbiBnZXRSZWNvbW1lbmRhdGlvbnModGl0bGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgZ2V0SUQodGl0bGUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3RpdGxlLyR7aWR9L2RldGFpbHMvP2FwaUtleT0ke0FQSV9LRVl9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRSZWNvbW1lbmQoZGF0YS5zaW1pbGFyX3RpdGxlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmVjb21tZW5kYXRpb25zKHsgcXVlcnkgfSk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIC8vc2VjdGlvbiB0byBkaXNwbGF5XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBtLTYgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMF19IC8+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMV19IC8+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMl19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdldE5ldGZsaXgiLCJEaXNwbGF5UmVjb21tZW5kYXRpb25zIiwiR2V0UmVjb21tZW5kYXRpb25zIiwicXVlcnkiLCJyZWNvbW1lbmRhdGlvbnMiLCJzZXRSZWNvbW1lbmQiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZIiwiZ2V0SUQiLCJ0aXRsZSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRpdGxlX3Jlc3VsdHMiLCJpZCIsImVycm9yIiwiZ2V0UmVjb21tZW5kYXRpb25zIiwic2ltaWxhcl90aXRsZXMiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/GetRecommend.js\n"));

/***/ })

});