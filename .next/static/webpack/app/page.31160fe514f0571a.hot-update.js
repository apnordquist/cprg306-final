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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecommendations)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetRecommendations(param) {\n    let { query } = param;\n    _s();\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            console.log(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve recommended ids\n    async function getRecommendations(title) {\n        try {\n            const id = await getID(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            const idList = data.similar_titles;\n            console.log(idList);\n            console.log(idList[0]);\n            await displayRecommendations(idList[0]);\n            await displayRecommendations(idList[1]);\n            await displayRecommendations(idList[2]);\n            console.log(recommendations);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    async function displayRecommendations(id) {\n        try {\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            console.log(data);\n            setRecommend([\n                ...recommendations,\n                data\n            ]);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"GetRecommendations.useEffect\": ()=>{\n            getRecommendations({\n                query\n            });\n        }\n    }[\"GetRecommendations.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-center m-6 align-middle\",\n        children: [\n            recommendations.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: movie.poster,\n                            alt: movie.title,\n                            className: \"mx-auto rounded-sm drop-shadow-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl text-center mt-3 mb-6 text-[#FAE9F2]\",\n                            children: [\n                                movie.title,\n                                \", \",\n                                movie.year\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecommendations, \"ja+IqFoAAvF4heAmyZhWIz1Tzks=\");\n_c = GetRecommendations;\nvar _c;\n$RefreshReg$(_c, \"GetRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvUmVjb21tZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUU3QixTQUFTRyxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUN6QyxNQUFNLENBQUNDLGlCQUFpQkMsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU1NLFVBQVVDLDBDQUF5QztJQUV6RCx5RUFBeUU7SUFDekUsZUFBZUcsTUFBTSxLQUFTO1lBQVQsRUFBRVAsS0FBSyxFQUFFLEdBQVQ7UUFDbkIsSUFBSTtZQUNGLE1BQU1RLFFBQVFSLE1BQU1TLFFBQVE7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixNQUFNSSxXQUFXLE1BQU1DLE1BQ3JCLCtDQUF5RkwsT0FBMUNMLFNBQVEsb0NBQXdDLE9BQU5LLE9BQU07WUFFakcsTUFBTU0sT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDTCxRQUFRQyxHQUFHLENBQUNHLEtBQUtFLGFBQWEsQ0FBQyxFQUFFLENBQUNDLEVBQUU7WUFDcEMsT0FBT0gsS0FBS0UsYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDUixRQUFRO1FBQzFDLEVBQUUsT0FBT1MsT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsVUFBVU87UUFDeEI7SUFDRjtJQUVBLHVEQUF1RDtJQUN2RCxlQUFlQyxtQkFBbUJYLEtBQUs7UUFDckMsSUFBSTtZQUNGLE1BQU1TLEtBQUssTUFBTVYsTUFBTUM7WUFDdkIsTUFBTUksV0FBVyxNQUFNQyxNQUNyQixzQ0FBNERWLE9BQXRCYyxJQUFHLHFCQUEyQixPQUFSZDtZQUU5RCxNQUFNVyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaEMsTUFBTUssU0FBU04sS0FBS08sY0FBYztZQUNsQ1gsUUFBUUMsR0FBRyxDQUFDUztZQUNaVixRQUFRQyxHQUFHLENBQUNTLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU1FLHVCQUF1QkYsTUFBTSxDQUFDLEVBQUU7WUFDdEMsTUFBTUUsdUJBQXVCRixNQUFNLENBQUMsRUFBRTtZQUN0QyxNQUFNRSx1QkFBdUJGLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDVixRQUFRQyxHQUFHLENBQUNWO1FBQ2QsRUFBRSxPQUFPaUIsT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsVUFBVU87UUFDeEI7SUFDRjtJQUVBLGVBQWVJLHVCQUF1QkwsRUFBRTtRQUN0QyxJQUFJO1lBQ0YsTUFBTUwsV0FBVyxNQUFNQyxNQUNyQixzQ0FBNERWLE9BQXRCYyxJQUFHLHFCQUEyQixPQUFSZDtZQUU5RCxNQUFNVyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFFBQVFDLEdBQUcsQ0FBQ0c7WUFDWlosYUFBYTttQkFBSUQ7Z0JBQWlCYTthQUFLO1FBQ3pDLEVBQUUsT0FBT0ksT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsVUFBVU87UUFDeEI7SUFDRjtJQUVBcEIsZ0RBQVNBO3dDQUFDO1lBQ1JxQixtQkFBbUI7Z0JBQUVuQjtZQUFNO1FBQzdCO3VDQUFHO1FBQUNBO0tBQU07SUFFVixvQkFBb0I7SUFDcEIscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOztZQUNadkIsZ0JBQWdCd0IsR0FBRyxDQUFDLENBQUNDLHNCQUNwQiw4REFBQ0g7b0JBQW1CQyxXQUFVOztzQ0FDNUIsOERBQUNHOzRCQUNDQyxLQUFLRixNQUFNRyxNQUFNOzRCQUNqQkMsS0FBS0osTUFBTWxCLEtBQUs7NEJBQ2hCZ0IsV0FBVTs7Ozs7O3NDQUdaLDhEQUFDTzs0QkFBRVAsV0FBVTs7Z0NBQ1ZFLE1BQU1sQixLQUFLO2dDQUFDO2dDQUFHa0IsTUFBTU0sSUFBSTs7Ozs7Ozs7bUJBUnBCTixNQUFNVCxFQUFFOzs7OztZQVdqQjs7Ozs7OztBQVVUO0dBbEZ3QmxCO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGFwbm9yXFxjcHJnMzA2XFxjcHJnMzA2LWZpbmFscHJvamVjdFxcYXBwXFxBUElcXFJlY29tbWVuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0UmVjb21tZW5kYXRpb25zKHsgcXVlcnkgfSkge1xyXG4gIGNvbnN0IFtyZWNvbW1lbmRhdGlvbnMsIHNldFJlY29tbWVuZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZO1xyXG5cclxuICAvL3ByaW1hcnkgc2VhcmNoIGZ1bmN0aW9uOyBuZWVkZWQgdG8gcmV0dXJuIGlkIGZvciBvdGhlciBwYXJ0cyBvZiB0aGUgQVBJXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SUQoeyBxdWVyeSB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHF1ZXJ5LnRvU3RyaW5nKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS9zZWFyY2gvP2FwaUtleT0ke0FQSV9LRVl9JnNlYXJjaF9maWVsZD1uYW1lJnNlYXJjaF92YWx1ZT0ke3RpdGxlfSZ0eXBlcz1tb3ZpZWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS50aXRsZV9yZXN1bHRzWzBdLmlkKTtcclxuICAgICAgcmV0dXJuIGRhdGEudGl0bGVfcmVzdWx0c1swXS5pZC50b1N0cmluZygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9zZWNvbmRhcnkgc2VhcmNoIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHJlY29tbWVuZGVkIGlkc1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlY29tbWVuZGF0aW9ucyh0aXRsZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBhd2FpdCBnZXRJRCh0aXRsZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndhdGNobW9kZS5jb20vdjEvdGl0bGUvJHtpZH0vZGV0YWlscy8/YXBpS2V5PSR7QVBJX0tFWX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IGlkTGlzdCA9IGRhdGEuc2ltaWxhcl90aXRsZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkTGlzdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkTGlzdFswXSk7XHJcbiAgICAgIGF3YWl0IGRpc3BsYXlSZWNvbW1lbmRhdGlvbnMoaWRMaXN0WzBdKTtcclxuICAgICAgYXdhaXQgZGlzcGxheVJlY29tbWVuZGF0aW9ucyhpZExpc3RbMV0pO1xyXG4gICAgICBhd2FpdCBkaXNwbGF5UmVjb21tZW5kYXRpb25zKGlkTGlzdFsyXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlY29tbWVuZGF0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkaXNwbGF5UmVjb21tZW5kYXRpb25zKGlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3RpdGxlLyR7aWR9L2RldGFpbHMvP2FwaUtleT0ke0FQSV9LRVl9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0UmVjb21tZW5kKFsuLi5yZWNvbW1lbmRhdGlvbnMsIGRhdGFdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRSZWNvbW1lbmRhdGlvbnMoeyBxdWVyeSB9KTtcclxuICB9LCBbcXVlcnldKTtcclxuXHJcbiAgLy9zZWN0aW9uIHRvIGRpc3BsYXlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG0tNiBhbGlnbi1taWRkbGVcIj5cclxuICAgICAge3JlY29tbWVuZGF0aW9ucy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17bW92aWUucG9zdGVyfVxyXG4gICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHJvdW5kZWQtc20gZHJvcC1zaGFkb3ctbGdcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBtdC0zIG1iLTYgdGV4dC1bI0ZBRTlGMl1cIj5cclxuICAgICAgICAgICAge21vdmllLnRpdGxlfSwge21vdmllLnllYXJ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA7XHJcbiAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgIGhyZWY9e3Jlc3VsdHMuc291cmNlcy5pZFsyMDNdLndlYl91cmx9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNDQzI1MkNdIHB5LTIgcm91bmRlZC14bCB0ZXh0LVsjRkFFOUVBXSB0ZXh0LWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgIE9uIE5ldGZsaXhcclxuICAgICAgIDwvTGluaz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXRSZWNvbW1lbmRhdGlvbnMiLCJxdWVyeSIsInJlY29tbWVuZGF0aW9ucyIsInNldFJlY29tbWVuZCIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV0FUQ0hNT0RFX0FQSV9LRVkiLCJnZXRJRCIsInRpdGxlIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidGl0bGVfcmVzdWx0cyIsImlkIiwiZXJyb3IiLCJnZXRSZWNvbW1lbmRhdGlvbnMiLCJpZExpc3QiLCJzaW1pbGFyX3RpdGxlcyIsImRpc3BsYXlSZWNvbW1lbmRhdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtb3ZpZSIsImltZyIsInNyYyIsInBvc3RlciIsImFsdCIsInAiLCJ5ZWFyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/Recommend.js\n"));

/***/ })

});