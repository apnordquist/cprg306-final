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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecommendations)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Netflix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Netflix */ \"(app-pages-browser)/./app/API/Netflix.js\");\n/* harmony import */ var _DisplayRecommendations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayRecommendations */ \"(app-pages-browser)/./app/API/DisplayRecommendations.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction GetRecommendations(param) {\n    let { query } = param;\n    _s();\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve recommended ids\n    async function getRecommendations(title) {\n        try {\n            const id = await getID(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            setRecommend(data.similar_titles);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"GetRecommendations.useEffect\": ()=>{\n            getRecommendations({\n                query\n            });\n        }\n    }[\"GetRecommendations.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-center m-6 align-middle\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommendations__WEBPACK_IMPORTED_MODULE_3__.DisplayRecommendations, {\n                id: recommendations[0]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommendations__WEBPACK_IMPORTED_MODULE_3__.DisplayRecommendations, {\n                id: recommendations[1]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayRecommendations__WEBPACK_IMPORTED_MODULE_3__.DisplayRecommendations, {\n                id: recommendations[2]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\GetRecommend.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecommendations, \"ja+IqFoAAvF4heAmyZhWIz1Tzks=\");\n_c = GetRecommendations;\nvar _c;\n$RefreshReg$(_c, \"GetRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvR2V0UmVjb21tZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1Q7QUFDK0I7QUFFbkQsU0FBU0ksbUJBQW1CLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDekMsTUFBTSxDQUFDQyxpQkFBaUJDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNUSxVQUFVQywwQ0FBeUM7SUFFekQseUVBQXlFO0lBQ3pFLGVBQWVHLE1BQU0sS0FBUztZQUFULEVBQUVQLEtBQUssRUFBRSxHQUFUO1FBQ25CLElBQUk7WUFDRixNQUFNUSxRQUFRUixNQUFNUyxRQUFRO1lBQzVCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsK0NBQXlGSCxPQUExQ0wsU0FBUSxvQ0FBd0MsT0FBTkssT0FBTTtZQUVqRyxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0gsS0FBS0ksYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtZQUNwQyxPQUFPTCxLQUFLSSxhQUFhLENBQUMsRUFBRSxDQUFDQyxFQUFFLENBQUNSLFFBQVE7UUFDMUMsRUFBRSxPQUFPUyxPQUFPO1lBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRztRQUN4QjtJQUNGO0lBRUEsdURBQXVEO0lBQ3ZELGVBQWVDLG1CQUFtQlgsS0FBSztRQUNyQyxJQUFJO1lBQ0YsTUFBTVMsS0FBSyxNQUFNVixNQUFNQztZQUN2QixNQUFNRSxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0RFIsT0FBdEJjLElBQUcscUJBQTJCLE9BQVJkO1lBRTlELE1BQU1TLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ1gsYUFBYVUsS0FBS1EsY0FBYztRQUNsQyxFQUFFLE9BQU9GLE9BQU87WUFDZEosUUFBUUMsR0FBRyxDQUFDLFVBQVVHO1FBQ3hCO0lBQ0Y7SUFJQXRCLGdEQUFTQTt3Q0FBQztZQUNSdUIsbUJBQW1CO2dCQUFFbkI7WUFBTTtRQUM3Qjt1Q0FBRztRQUFDQTtLQUFNO0lBRVYsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDcUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN4QiwyRUFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7MEJBQzlDLDhEQUFDSCwyRUFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7MEJBQzlDLDhEQUFDSCwyRUFBc0JBO2dCQUFDbUIsSUFBSWhCLGVBQWUsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7QUFHcEQ7R0EvQ3dCRjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhcG5vclxcY3ByZzMwNlxcY3ByZzMwNi1maW5hbHByb2plY3RcXGFwcFxcQVBJXFxHZXRSZWNvbW1lbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHZXROZXRmbGl4IGZyb20gXCIuL05ldGZsaXhcIjtcclxuaW1wb3J0IHsgRGlzcGxheVJlY29tbWVuZGF0aW9ucyB9IGZyb20gXCIuL0Rpc3BsYXlSZWNvbW1lbmRhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFJlY29tbWVuZGF0aW9ucyh7IHF1ZXJ5IH0pIHtcclxuICBjb25zdCBbcmVjb21tZW5kYXRpb25zLCBzZXRSZWNvbW1lbmRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XQVRDSE1PREVfQVBJX0tFWTtcclxuXHJcbiAgLy9wcmltYXJ5IHNlYXJjaCBmdW5jdGlvbjsgbmVlZGVkIHRvIHJldHVybiBpZCBmb3Igb3RoZXIgcGFydHMgb2YgdGhlIEFQSVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldElEKHsgcXVlcnkgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBxdWVyeS50b1N0cmluZygpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3NlYXJjaC8/YXBpS2V5PSR7QVBJX0tFWX0mc2VhcmNoX2ZpZWxkPW5hbWUmc2VhcmNoX3ZhbHVlPSR7dGl0bGV9JnR5cGVzPW1vdmllYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnRpdGxlX3Jlc3VsdHNbMF0uaWQpO1xyXG4gICAgICByZXR1cm4gZGF0YS50aXRsZV9yZXN1bHRzWzBdLmlkLnRvU3RyaW5nKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3NlY29uZGFyeSBzZWFyY2ggZnVuY3Rpb24gdG8gcmV0cmlldmUgcmVjb21tZW5kZWQgaWRzXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb21tZW5kYXRpb25zKHRpdGxlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IGdldElEKHRpdGxlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS90aXRsZS8ke2lkfS9kZXRhaWxzLz9hcGlLZXk9JHtBUElfS0VZfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UmVjb21tZW5kKGRhdGEuc2ltaWxhcl90aXRsZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmVjb21tZW5kYXRpb25zKHsgcXVlcnkgfSk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIC8vc2VjdGlvbiB0byBkaXNwbGF5XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtLTYgYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMF19IC8+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMV19IC8+XHJcbiAgICAgIDxEaXNwbGF5UmVjb21tZW5kYXRpb25zIGlkPXtyZWNvbW1lbmRhdGlvbnNbMl19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdldE5ldGZsaXgiLCJEaXNwbGF5UmVjb21tZW5kYXRpb25zIiwiR2V0UmVjb21tZW5kYXRpb25zIiwicXVlcnkiLCJyZWNvbW1lbmRhdGlvbnMiLCJzZXRSZWNvbW1lbmQiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZIiwiZ2V0SUQiLCJ0aXRsZSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRpdGxlX3Jlc3VsdHMiLCJpZCIsImVycm9yIiwiZ2V0UmVjb21tZW5kYXRpb25zIiwic2ltaWxhcl90aXRsZXMiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/GetRecommend.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _API_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API/Movie */ \"(app-pages-browser)/./app/API/Movie.js\");\n/* harmony import */ var _API_GetRecommend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API/GetRecommend */ \"(app-pages-browser)/./app/API/GetRecommend.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [renderMovie, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleInputChange = (event)=>{\n        setQuery(event.target.value);\n    };\n    const handleSearch = (event)=>{\n        event.preventDefault();\n        setMovie(query);\n        setRender(true);\n        setQuery(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col align-middle justify-center h-screen bg-[#140404]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-2/5 w-screen align-middle justify-center\",\n                children: renderMovie ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_API_Movie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    query: movie\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl text-center m-12\",\n                            children: \"Welcome!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl text-center m-12\",\n                            children: \"Lets find something to watch!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-12 py-0 flex justify-center my-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: query,\n                            onChange: handleInputChange,\n                            placeholder: \"Search for a movie...\",\n                            className: \"px-12 py-2 rounded-l-xl bg-[#FAE9EA] text-[#140404] placeholder:text-[#887778] w-10/12 text-xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSearch,\n                            className: \"bg-[#CC252C] py-2 rounded-r-xl text-[#FAE9EA] w-2/12 text-xl hover:bg-[#CC6633]\",\n                            children: \"SEARCH\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-screen h-2/5 align-middle justify-center\",\n                children: renderMovie ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl text-center m-6\",\n                            children: \"Have you tried...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_API_GetRecommend__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            query: movie\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LRKg/rFfveGoXMbVBs191Fdwmsw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNJO0FBQ0U7QUFDaUI7QUFFckMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxhQUFhQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBRTFDLE1BQU1VLG9CQUFvQixDQUFDQztRQUN6Qk4sU0FBU00sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsZUFBZSxDQUFDSDtRQUNwQkEsTUFBTUksY0FBYztRQUNwQlIsU0FBU0g7UUFDVEssVUFBVTtRQUNWSixTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1c7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaVCw0QkFDQyw4REFBQ1Asa0RBQVFBO29CQUFDRyxPQUFPRTs7Ozs7eUNBRWpCLDhEQUFDWTs7c0NBQ0MsOERBQUNDOzRCQUFFRixXQUFVO3NDQUE0Qjs7Ozs7O3NDQUN6Qyw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNL0MsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUNDQyxNQUFLOzRCQUNMUixPQUFPVDs0QkFDUGtCLFVBQVVaOzRCQUNWYSxhQUFZOzRCQUNaTixXQUFVOzs7Ozs7c0NBRVosOERBQUNPOzRCQUNDQyxTQUFTWDs0QkFDVEcsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaVCw0QkFDQyw4REFBQ1U7O3NDQUNDLDhEQUFDQzs0QkFBRUYsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDdkMsOERBQUNmLHlEQUFrQkE7NEJBQUNFLE9BQU9FOzs7Ozs7Ozs7Ozt5Q0FHN0IsOERBQUNZOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0EzRHdCZjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhcG5vclxcY3ByZzMwNlxcY3ByZzMwNi1maW5hbHByb2plY3RcXGFwcFxccGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdldE1vdmllIGZyb20gXCIuL0FQSS9Nb3ZpZVwiO1xyXG5pbXBvcnQgR2V0UmVjb21tZW5kYXRpb25zIGZyb20gXCIuL0FQSS9HZXRSZWNvbW1lbmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZW5kZXJNb3ZpZSwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TW92aWUocXVlcnkpO1xyXG4gICAgc2V0UmVuZGVyKHRydWUpO1xyXG4gICAgc2V0UXVlcnkoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIGJnLVsjMTQwNDA0XVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMi81IHctc2NyZWVuIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIHtyZW5kZXJNb3ZpZSA/IChcclxuICAgICAgICAgIDxHZXRNb3ZpZSBxdWVyeT17bW92aWV9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyIG0tMTJcIj5XZWxjb21lITwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXIgbS0xMlwiPlxyXG4gICAgICAgICAgICAgIExldHMgZmluZCBzb21ldGhpbmcgdG8gd2F0Y2ghXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEyIHB5LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBteS0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMlwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIG1vdmllLi4uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMTIgcHktMiByb3VuZGVkLWwteGwgYmctWyNGQUU5RUFdIHRleHQtWyMxNDA0MDRdIHBsYWNlaG9sZGVyOnRleHQtWyM4ODc3NzhdIHctMTAvMTIgdGV4dC14bFwiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0NDMjUyQ10gcHktMiByb3VuZGVkLXIteGwgdGV4dC1bI0ZBRTlFQV0gdy0yLzEyIHRleHQteGwgaG92ZXI6YmctWyNDQzY2MzNdXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU0VBUkNIXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LXNjcmVlbiBoLTIvNSBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICB7cmVuZGVyTW92aWUgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIG0tNlwiPkhhdmUgeW91IHRyaWVkLi4uPC9wPlxyXG4gICAgICAgICAgICA8R2V0UmVjb21tZW5kYXRpb25zIHF1ZXJ5PXttb3ZpZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIkdldE1vdmllIiwiR2V0UmVjb21tZW5kYXRpb25zIiwiSG9tZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJtb3ZpZSIsInNldE1vdmllIiwicmVuZGVyTW92aWUiLCJzZXRSZW5kZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});