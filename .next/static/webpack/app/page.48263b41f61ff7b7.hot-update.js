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

/***/ "(app-pages-browser)/./app/API/Recommend.js":
/*!******************************!*\
  !*** ./app/API/Recommend.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecommendations)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetRecommendations(param) {\n    let { query } = param;\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            console.log(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve recommended ids\n    async function getRecommendations(title) {\n        try {\n            const id = await getID(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            setRecommend(data.similar_titles);\n            console.log(recommendations);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    async function displayRecommendations(id) {\n        try {\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            setResults(data);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"GetRecommendations.useEffect\": ()=>{\n            getRecommendations({\n                query\n            });\n        }\n    }[\"GetRecommendations.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center m-6 align-middle\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecommendations, \"cJ0EUKT2daCnClZFxsWZOkRvYpk=\");\n_c = GetRecommendations;\nvar _c;\n$RefreshReg$(_c, \"GetRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvUmVjb21tZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUU3QixTQUFTRyxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUN6QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUNNLGlCQUFpQkMsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU1RLFVBQVVDLDBDQUF5QztJQUV6RCx5RUFBeUU7SUFDekUsZUFBZUcsTUFBTSxLQUFTO1lBQVQsRUFBRVQsS0FBSyxFQUFFLEdBQVQ7UUFDbkIsSUFBSTtZQUNGLE1BQU1VLFFBQVFWLE1BQU1XLFFBQVE7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixNQUFNSSxXQUFXLE1BQU1DLE1BQ3JCLCtDQUF5RkwsT0FBMUNMLFNBQVEsb0NBQXdDLE9BQU5LLE9BQU07WUFFakcsTUFBTU0sT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDTCxRQUFRQyxHQUFHLENBQUNHLEtBQUtFLGFBQWEsQ0FBQyxFQUFFLENBQUNDLEVBQUU7WUFDcEMsT0FBT0gsS0FBS0UsYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDUixRQUFRO1FBQzFDLEVBQUUsT0FBT1MsT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsVUFBVU87UUFDeEI7SUFDRjtJQUVBLHVEQUF1RDtJQUN2RCxlQUFlQyxtQkFBbUJYLEtBQUs7UUFDckMsSUFBSTtZQUNGLE1BQU1TLEtBQUssTUFBTVYsTUFBTUM7WUFDdkIsTUFBTUksV0FBVyxNQUFNQyxNQUNyQixzQ0FBNERWLE9BQXRCYyxJQUFHLHFCQUEyQixPQUFSZDtZQUU5RCxNQUFNVyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENiLGFBQWFZLEtBQUtNLGNBQWM7WUFDaENWLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDZCxFQUFFLE9BQU9pQixPQUFPO1lBQ2RSLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTztRQUN4QjtJQUNGO0lBRUEsZUFBZUcsdUJBQXVCSixFQUFFO1FBQ3RDLElBQUk7WUFDRixNQUFNTCxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0RFYsT0FBdEJjLElBQUcscUJBQTJCLE9BQVJkO1lBRTlELE1BQU1XLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ2YsV0FBV2M7UUFDYixFQUFFLE9BQU9JLE9BQU87WUFDZFIsUUFBUUMsR0FBRyxDQUFDLFVBQVVPO1FBQ3hCO0lBQ0Y7SUFFQXRCLGdEQUFTQTt3Q0FBQztZQUNSdUIsbUJBQW1CO2dCQUFFckI7WUFBTTtRQUM3Qjt1Q0FBRztRQUFDQTtLQUFNO0lBRVYsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTs7Ozs7O0FBbUJuQjtHQXpFd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxhcG5vclxcY3ByZzMwNlxcY3ByZzMwNi1maW5hbHByb2plY3RcXGFwcFxcQVBJXFxSZWNvbW1lbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFJlY29tbWVuZGF0aW9ucyh7IHF1ZXJ5IH0pIHtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3JlY29tbWVuZGF0aW9ucywgc2V0UmVjb21tZW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FUQ0hNT0RFX0FQSV9LRVk7XHJcblxyXG4gIC8vcHJpbWFyeSBzZWFyY2ggZnVuY3Rpb247IG5lZWRlZCB0byByZXR1cm4gaWQgZm9yIG90aGVyIHBhcnRzIG9mIHRoZSBBUElcclxuICBhc3luYyBmdW5jdGlvbiBnZXRJRCh7IHF1ZXJ5IH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gcXVlcnkudG9TdHJpbmcoKTtcclxuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3NlYXJjaC8/YXBpS2V5PSR7QVBJX0tFWX0mc2VhcmNoX2ZpZWxkPW5hbWUmc2VhcmNoX3ZhbHVlPSR7dGl0bGV9JnR5cGVzPW1vdmllYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnRpdGxlX3Jlc3VsdHNbMF0uaWQpO1xyXG4gICAgICByZXR1cm4gZGF0YS50aXRsZV9yZXN1bHRzWzBdLmlkLnRvU3RyaW5nKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3NlY29uZGFyeSBzZWFyY2ggZnVuY3Rpb24gdG8gcmV0cmlldmUgcmVjb21tZW5kZWQgaWRzXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb21tZW5kYXRpb25zKHRpdGxlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IGdldElEKHRpdGxlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS90aXRsZS8ke2lkfS9kZXRhaWxzLz9hcGlLZXk9JHtBUElfS0VZfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UmVjb21tZW5kKGRhdGEuc2ltaWxhcl90aXRsZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZWNvbW1lbmRhdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVJlY29tbWVuZGF0aW9ucyhpZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS90aXRsZS8ke2lkfS9kZXRhaWxzLz9hcGlLZXk9JHtBUElfS0VZfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UmVzdWx0cyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRSZWNvbW1lbmRhdGlvbnMoeyBxdWVyeSB9KTtcclxuICB9LCBbcXVlcnldKTtcclxuXHJcbiAgLy9zZWN0aW9uIHRvIGRpc3BsYXlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG0tNiBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgey8qIC8vICAgICAgIDxpbWdcclxuLy8gICAgICAgICBzcmM9e3Jlc3VsdHMucG9zdGVyfVxyXG4vLyAgICAgICAgIGFsdD17cmVzdWx0cy50aXRsZX1cclxuLy8gICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHJvdW5kZWQtc20gZHJvcC1zaGFkb3ctbGdcIlxyXG4vLyAgICAgICAvPlxyXG5cclxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgbXQtMyBtYi02IHRleHQtWyNGQUU5RjJdXCI+XHJcbi8vICAgICAgICAge3Jlc3VsdHMudGl0bGV9LCB7cmVzdWx0cy55ZWFyfVxyXG4vLyAgICAgICA8L3A+XHJcblxyXG4vLyAgICAgICA8TGlua1xyXG4vLyAgICAgICAgIGhyZWY9e3Jlc3VsdHMuc291cmNlcy5pZFsyMDNdLndlYl91cmx9XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNDQzI1MkNdIHB5LTIgcm91bmRlZC14bCB0ZXh0LVsjRkFFOUVBXSB0ZXh0LWxcIlxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAgT24gTmV0ZmxpeFxyXG4vLyAgICAgICA8L0xpbms+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2V0UmVjb21tZW5kYXRpb25zIiwicXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInJlY29tbWVuZGF0aW9ucyIsInNldFJlY29tbWVuZCIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV0FUQ0hNT0RFX0FQSV9LRVkiLCJnZXRJRCIsInRpdGxlIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidGl0bGVfcmVzdWx0cyIsImlkIiwiZXJyb3IiLCJnZXRSZWNvbW1lbmRhdGlvbnMiLCJzaW1pbGFyX3RpdGxlcyIsImRpc3BsYXlSZWNvbW1lbmRhdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/Recommend.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _API_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API/Movie */ \"(app-pages-browser)/./app/API/Movie.js\");\n/* harmony import */ var _API_Recommend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API/Recommend */ \"(app-pages-browser)/./app/API/Recommend.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [renderMovie, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleInputChange = (event)=>{\n        setQuery(event.target.value);\n    };\n    const handleSearch = (event)=>{\n        event.preventDefault();\n        setMovie(query);\n        setRender(true);\n        setQuery(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col align-middle justify-center h-screen bg-[#140404]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-2/5 w-screen align-middle justify-center\",\n                children: renderMovie ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_API_Movie__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    query: movie\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl text-center m-12\",\n                            children: \"Welcome!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl text-center m-12\",\n                            children: \"Lets find something to watch!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-12 py-0 flex justify-center my-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: query,\n                            onChange: handleInputChange,\n                            placeholder: \"Search for a movie...\",\n                            className: \"px-12 py-2 rounded-l-xl bg-[#FAE9EA] text-[#140404] placeholder:text-[#887778] w-10/12 text-xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSearch,\n                            className: \"bg-[#CC252C] py-2 rounded-r-xl text-[#FAE9EA] w-2/12 text-xl hover:bg-[#CC6633]\",\n                            children: \"SEARCH\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-screen h-2/5\",\n                children: renderMovie ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl text-center m-6\",\n                            children: [\n                                \"Recommendations similar to \",\n                                movie\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_API_Recommend__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            query: movie\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pM7jMzDojmbtjeeA0Cjq0c7YuLs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNJO0FBQ0U7QUFDYztBQUVsQyxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLGFBQWFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDVSxpQkFBaUJDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUVuRCxNQUFNWSxvQkFBb0IsQ0FBQ0M7UUFDekJSLFNBQVNRLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0g7UUFDcEJBLE1BQU1JLGNBQWM7UUFDcEJWLFNBQVNIO1FBQ1RLLFVBQVU7UUFDVkosU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNhO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlgsNEJBQ0MsOERBQUNQLGtEQUFRQTtvQkFBQ0csT0FBT0U7Ozs7O3lDQUVqQiw4REFBQ2M7O3NDQUNDLDhEQUFDQzs0QkFBRUYsV0FBVTtzQ0FBNEI7Ozs7OztzQ0FDekMsOERBQUNFOzRCQUFFRixXQUFVO3NDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS9DLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDQ0MsTUFBSzs0QkFDTFIsT0FBT1g7NEJBQ1BvQixVQUFVWjs0QkFDVmEsYUFBWTs0QkFDWk4sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTzs0QkFDQ0MsU0FBU1g7NEJBQ1RHLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtMLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlgsNEJBQ0MsOERBQUNZOztzQ0FDQyw4REFBQ0M7NEJBQUVGLFdBQVU7O2dDQUEwQjtnQ0FDVGI7Ozs7Ozs7c0NBRTlCLDhEQUFDSixzREFBa0JBOzRCQUFDRSxPQUFPRTs7Ozs7Ozs7Ozs7eUNBRzdCLDhEQUFDYzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBOUR3QmpCO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFwbm9yXFxjcHJnMzA2XFxjcHJnMzA2LWZpbmFscHJvamVjdFxcYXBwXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2V0TW92aWUgZnJvbSBcIi4vQVBJL01vdmllXCI7XHJcbmltcG9ydCBHZXRSZWNvbW1lbmRhdGlvbnMgZnJvbSBcIi4vQVBJL1JlY29tbWVuZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlbmRlck1vdmllLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZWNvbW1lbmRhdGlvbnMsIHNldFJlY29tbWVuZF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE1vdmllKHF1ZXJ5KTtcclxuICAgIHNldFJlbmRlcih0cnVlKTtcclxuICAgIHNldFF1ZXJ5KFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlbiBiZy1bIzE0MDQwNF1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIvNSB3LXNjcmVlbiBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICB7cmVuZGVyTW92aWUgPyAoXHJcbiAgICAgICAgICA8R2V0TW92aWUgcXVlcnk9e21vdmllfSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlciBtLTEyXCI+V2VsY29tZSE8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyIG0tMTJcIj5cclxuICAgICAgICAgICAgICBMZXRzIGZpbmQgc29tZXRoaW5nIHRvIHdhdGNoIVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMiBweS0wIGZsZXgganVzdGlmeS1jZW50ZXIgbXktMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBtb3ZpZS4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEyIHB5LTIgcm91bmRlZC1sLXhsIGJnLVsjRkFFOUVBXSB0ZXh0LVsjMTQwNDA0XSBwbGFjZWhvbGRlcjp0ZXh0LVsjODg3Nzc4XSB3LTEwLzEyIHRleHQteGxcIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNDQzI1MkNdIHB5LTIgcm91bmRlZC1yLXhsIHRleHQtWyNGQUU5RUFdIHctMi8xMiB0ZXh0LXhsIGhvdmVyOmJnLVsjQ0M2NjMzXVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNFQVJDSFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1zY3JlZW4gaC0yLzVcIj5cclxuICAgICAgICB7cmVuZGVyTW92aWUgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyIG0tNlwiPlxyXG4gICAgICAgICAgICAgIFJlY29tbWVuZGF0aW9ucyBzaW1pbGFyIHRvIHttb3ZpZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8R2V0UmVjb21tZW5kYXRpb25zIHF1ZXJ5PXttb3ZpZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIkdldE1vdmllIiwiR2V0UmVjb21tZW5kYXRpb25zIiwiSG9tZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJtb3ZpZSIsInNldE1vdmllIiwicmVuZGVyTW92aWUiLCJzZXRSZW5kZXIiLCJyZWNvbW1lbmRhdGlvbnMiLCJzZXRSZWNvbW1lbmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});