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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRecommendations)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Netflix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Netflix */ \"(app-pages-browser)/./app/API/Netflix.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetRecommendations(param) {\n    let { query } = param;\n    _s();\n    const [recommendations, setRecommend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve recommended ids\n    async function getRecommendations(title) {\n        try {\n            const id = await getID(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            setRecommend(data.similar_titles);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //get info of each recommmendation\n    async function displayRecommendations(id) {\n        try {\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.poster,\n                        alt: data.title,\n                        className: \"mx-auto rounded-sm drop-shadow-lg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl text-center mt-3 mb-6 text-[#FAE9F2]\",\n                        children: [\n                            data.title,\n                            \", \",\n                            data.year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"GetRecommendations.useEffect\": ()=>{\n            getRecommendations({\n                query\n            });\n        }\n    }[\"GetRecommendations.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-center m-6 align-middle\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\Recommend.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(GetRecommendations, \"ja+IqFoAAvF4heAmyZhWIz1Tzks=\");\n_c = GetRecommendations;\nvar _c;\n$RefreshReg$(_c, \"GetRecommendations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvUmVjb21tZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDVDtBQUVwQixTQUFTRyxtQkFBbUIsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUN6QyxNQUFNLENBQUNDLGlCQUFpQkMsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU1PLFVBQVVDLDBDQUF5QztJQUV6RCx5RUFBeUU7SUFDekUsZUFBZUcsTUFBTSxLQUFTO1lBQVQsRUFBRVAsS0FBSyxFQUFFLEdBQVQ7UUFDbkIsSUFBSTtZQUNGLE1BQU1RLFFBQVFSLE1BQU1TLFFBQVE7WUFDNUIsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrQ0FBeUZILE9BQTFDTCxTQUFRLG9DQUF3QyxPQUFOSyxPQUFNO1lBRWpHLE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSCxLQUFLSSxhQUFhLENBQUMsRUFBRSxDQUFDQyxFQUFFO1lBQ3BDLE9BQU9MLEtBQUtJLGFBQWEsQ0FBQyxFQUFFLENBQUNDLEVBQUUsQ0FBQ1IsUUFBUTtRQUMxQyxFQUFFLE9BQU9TLE9BQU87WUFDZEosUUFBUUMsR0FBRyxDQUFDLFVBQVVHO1FBQ3hCO0lBQ0Y7SUFFQSx1REFBdUQ7SUFDdkQsZUFBZUMsbUJBQW1CWCxLQUFLO1FBQ3JDLElBQUk7WUFDRixNQUFNUyxLQUFLLE1BQU1WLE1BQU1DO1lBQ3ZCLE1BQU1FLFdBQVcsTUFBTUMsTUFDckIsc0NBQTREUixPQUF0QmMsSUFBRyxxQkFBMkIsT0FBUmQ7WUFFOUQsTUFBTVMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDWCxhQUFhVSxLQUFLUSxjQUFjO1FBQ2xDLEVBQUUsT0FBT0YsT0FBTztZQUNkSixRQUFRQyxHQUFHLENBQUMsVUFBVUc7UUFDeEI7SUFDRjtJQUVBLGtDQUFrQztJQUNsQyxlQUFlRyx1QkFBdUJKLEVBQUU7UUFDdEMsSUFBSTtZQUNGLE1BQU1QLFdBQVcsTUFBTUMsTUFDckIsc0NBQTREUixPQUF0QmMsSUFBRyxxQkFBMkIsT0FBUmQ7WUFFOUQsTUFBTVMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDLHFCQUNFLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFLYixLQUFLYyxNQUFNO3dCQUNoQkMsS0FBS2YsS0FBS0osS0FBSzt3QkFDZmUsV0FBVTs7Ozs7O2tDQUdaLDhEQUFDSzt3QkFBRUwsV0FBVTs7NEJBQ1ZYLEtBQUtKLEtBQUs7NEJBQUM7NEJBQUdJLEtBQUtpQixJQUFJOzs7Ozs7Ozs7Ozs7O1FBSWhDLEVBQUUsT0FBT1gsT0FBTztZQUNkSixRQUFRQyxHQUFHLENBQUMsVUFBVUc7UUFDeEI7SUFDRjtJQUVBckIsZ0RBQVNBO3dDQUFDO1lBQ1JzQixtQkFBbUI7Z0JBQUVuQjtZQUFNO1FBQzdCO3VDQUFHO1FBQUNBO0tBQU07SUFFVixvQkFBb0I7SUFDcEIscUJBQ0UsOERBQUNzQjtRQUFJQyxXQUFVOzs7Ozs7QUFJbkI7R0FwRXdCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBub3JcXGNwcmczMDZcXGNwcmczMDYtZmluYWxwcm9qZWN0XFxhcHBcXEFQSVxcUmVjb21tZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2V0TmV0ZmxpeCBmcm9tIFwiLi9OZXRmbGl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRSZWNvbW1lbmRhdGlvbnMoeyBxdWVyeSB9KSB7XHJcbiAgY29uc3QgW3JlY29tbWVuZGF0aW9ucywgc2V0UmVjb21tZW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FUQ0hNT0RFX0FQSV9LRVk7XHJcblxyXG4gIC8vcHJpbWFyeSBzZWFyY2ggZnVuY3Rpb247IG5lZWRlZCB0byByZXR1cm4gaWQgZm9yIG90aGVyIHBhcnRzIG9mIHRoZSBBUElcclxuICBhc3luYyBmdW5jdGlvbiBnZXRJRCh7IHF1ZXJ5IH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gcXVlcnkudG9TdHJpbmcoKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS9zZWFyY2gvP2FwaUtleT0ke0FQSV9LRVl9JnNlYXJjaF9maWVsZD1uYW1lJnNlYXJjaF92YWx1ZT0ke3RpdGxlfSZ0eXBlcz1tb3ZpZWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS50aXRsZV9yZXN1bHRzWzBdLmlkKTtcclxuICAgICAgcmV0dXJuIGRhdGEudGl0bGVfcmVzdWx0c1swXS5pZC50b1N0cmluZygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9zZWNvbmRhcnkgc2VhcmNoIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHJlY29tbWVuZGVkIGlkc1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlY29tbWVuZGF0aW9ucyh0aXRsZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBhd2FpdCBnZXRJRCh0aXRsZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndhdGNobW9kZS5jb20vdjEvdGl0bGUvJHtpZH0vZGV0YWlscy8/YXBpS2V5PSR7QVBJX0tFWX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFJlY29tbWVuZChkYXRhLnNpbWlsYXJfdGl0bGVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vZ2V0IGluZm8gb2YgZWFjaCByZWNvbW1tZW5kYXRpb25cclxuICBhc3luYyBmdW5jdGlvbiBkaXNwbGF5UmVjb21tZW5kYXRpb25zKGlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53YXRjaG1vZGUuY29tL3YxL3RpdGxlLyR7aWR9L2RldGFpbHMvP2FwaUtleT0ke0FQSV9LRVl9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2RhdGEucG9zdGVyfVxyXG4gICAgICAgICAgICBhbHQ9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC1zbSBkcm9wLXNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIG10LTMgbWItNiB0ZXh0LVsjRkFFOUYyXVwiPlxyXG4gICAgICAgICAgICB7ZGF0YS50aXRsZX0sIHtkYXRhLnllYXJ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmVjb21tZW5kYXRpb25zKHsgcXVlcnkgfSk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIC8vc2VjdGlvbiB0byBkaXNwbGF5XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtLTYgYWxpZ24tbWlkZGxlXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXROZXRmbGl4IiwiR2V0UmVjb21tZW5kYXRpb25zIiwicXVlcnkiLCJyZWNvbW1lbmRhdGlvbnMiLCJzZXRSZWNvbW1lbmQiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZIiwiZ2V0SUQiLCJ0aXRsZSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRpdGxlX3Jlc3VsdHMiLCJpZCIsImVycm9yIiwiZ2V0UmVjb21tZW5kYXRpb25zIiwic2ltaWxhcl90aXRsZXMiLCJkaXNwbGF5UmVjb21tZW5kYXRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicG9zdGVyIiwiYWx0IiwicCIsInllYXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/Recommend.js\n"));

/***/ })

});