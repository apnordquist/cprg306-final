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

/***/ "(app-pages-browser)/./app/API/watchmode.js":
/*!******************************!*\
  !*** ./app/API/watchmode.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetMovie)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GetMovie(param) {\n    let { query } = param;\n    _s();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const API_KEY = \"7DW7QVPTi00sZRgYLvUlCmt8fyOHidW8wWIcfi5o\";\n    //primary search function; needed to return id for other parts of the API\n    async function getID(param) {\n        let { query } = param;\n        try {\n            const title = query.toString();\n            console.log(title);\n            const response = await fetch(\"https://api.watchmode.com/v1/search/?apiKey=\".concat(API_KEY, \"&search_field=name&search_value=\").concat(title, \"&types=movie\"));\n            const data = await response.json();\n            console.log(data.title_results[0].id);\n            return data.title_results[0].id.toString();\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    //secondary search function to retrieve details to display, title, actors, poster...\n    async function getMovie(title) {\n        try {\n            const id = await getID(title);\n            console.log(id);\n            const response = await fetch(\"https://api.watchmode.com/v1/title/\".concat(id, \"/details/?apiKey=\").concat(API_KEY));\n            const data = await response.json();\n            console.log(data);\n            setResults(data);\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"GetMovie.useEffect\": ()=>{\n            getMovie({\n                query\n            });\n        }\n    }[\"GetMovie.useEffect\"], [\n        query\n    ]);\n    //section to display\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        // style={{ \"--image-url\": `url(${results.backdrop})` }}\n        // className=\"bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover\"\n        className: \"flex flex-col justify-center m-6 h-fit align-middle\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: results.backdrop,\n                alt: results.title,\n                className: \"mx-auto rounded-lg drop-shadow-lg h-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\watchmode.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl text-center mt-3 mb-6 text-[#FAE9F2]\",\n                children: [\n                    results.title,\n                    \", \",\n                    results.year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\watchmode.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apnor\\\\cprg306\\\\cprg306-finalproject\\\\app\\\\API\\\\watchmode.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(GetMovie, \"reTVpSxrMK1+M+KWoZPLxIJPHh0=\");\n_c = GetMovie;\nvar _c;\n$RefreshReg$(_c, \"GetMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BUEkvd2F0Y2htb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUU3QixTQUFTRyxTQUFTLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDL0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFDeEMsTUFBTU0sVUFBVUMsMENBQXlDO0lBRXpELHlFQUF5RTtJQUN6RSxlQUFlRyxNQUFNLEtBQVM7WUFBVCxFQUFFUCxLQUFLLEVBQUUsR0FBVDtRQUNuQixJQUFJO1lBQ0YsTUFBTVEsUUFBUVIsTUFBTVMsUUFBUTtZQUM1QkMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaLE1BQU1JLFdBQVcsTUFBTUMsTUFDckIsK0NBQXlGTCxPQUExQ0wsU0FBUSxvQ0FBd0MsT0FBTkssT0FBTTtZQUVqRyxNQUFNTSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFFBQVFDLEdBQUcsQ0FBQ0csS0FBS0UsYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRTtZQUNwQyxPQUFPSCxLQUFLRSxhQUFhLENBQUMsRUFBRSxDQUFDQyxFQUFFLENBQUNSLFFBQVE7UUFDMUMsRUFBRSxPQUFPUyxPQUFPO1lBQ2RSLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTztRQUN4QjtJQUNGO0lBRUEsb0ZBQW9GO0lBQ3BGLGVBQWVDLFNBQVNYLEtBQUs7UUFDM0IsSUFBSTtZQUNGLE1BQU1TLEtBQUssTUFBTVYsTUFBTUM7WUFDdkJFLFFBQVFDLEdBQUcsQ0FBQ007WUFDWixNQUFNTCxXQUFXLE1BQU1DLE1BQ3JCLHNDQUE0RFYsT0FBdEJjLElBQUcscUJBQTJCLE9BQVJkO1lBRTlELE1BQU1XLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsUUFBUUMsR0FBRyxDQUFDRztZQUNaWixXQUFXWTtRQUNiLEVBQUUsT0FBT0ksT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUMsVUFBVU87UUFDeEI7SUFDRjtJQUVBcEIsZ0RBQVNBOzhCQUFDO1lBQ1JxQixTQUFTO2dCQUFFbkI7WUFBTTtRQUNuQjs2QkFBRztRQUFDQTtLQUFNO0lBRVYsb0JBQW9CO0lBQ3BCLHFCQUNFLDhEQUFDb0I7UUFDQyx3REFBd0Q7UUFDeEQsMEVBQTBFO1FBQzFFQyxXQUFVOzswQkFPViw4REFBQ0M7Z0JBQ0NDLEtBQUt0QixRQUFRdUIsUUFBUTtnQkFDckJDLEtBQUt4QixRQUFRTyxLQUFLO2dCQUNsQmEsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDSztnQkFBRUwsV0FBVTs7b0JBQ1ZwQixRQUFRTyxLQUFLO29CQUFDO29CQUFHUCxRQUFRMEIsSUFBSTs7Ozs7Ozs7Ozs7OztBQWdCdEM7R0ExRXdCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXBub3JcXGNwcmczMDZcXGNwcmczMDYtZmluYWxwcm9qZWN0XFxhcHBcXEFQSVxcd2F0Y2htb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRNb3ZpZSh7IHF1ZXJ5IH0pIHtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZO1xyXG5cclxuICAvL3ByaW1hcnkgc2VhcmNoIGZ1bmN0aW9uOyBuZWVkZWQgdG8gcmV0dXJuIGlkIGZvciBvdGhlciBwYXJ0cyBvZiB0aGUgQVBJXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SUQoeyBxdWVyeSB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHF1ZXJ5LnRvU3RyaW5nKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2F0Y2htb2RlLmNvbS92MS9zZWFyY2gvP2FwaUtleT0ke0FQSV9LRVl9JnNlYXJjaF9maWVsZD1uYW1lJnNlYXJjaF92YWx1ZT0ke3RpdGxlfSZ0eXBlcz1tb3ZpZWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS50aXRsZV9yZXN1bHRzWzBdLmlkKTtcclxuICAgICAgcmV0dXJuIGRhdGEudGl0bGVfcmVzdWx0c1swXS5pZC50b1N0cmluZygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9zZWNvbmRhcnkgc2VhcmNoIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGRldGFpbHMgdG8gZGlzcGxheSwgdGl0bGUsIGFjdG9ycywgcG9zdGVyLi4uXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWUodGl0bGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgZ2V0SUQodGl0bGUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLndhdGNobW9kZS5jb20vdjEvdGl0bGUvJHtpZH0vZGV0YWlscy8/YXBpS2V5PSR7QVBJX0tFWX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRSZXN1bHRzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE1vdmllKHsgcXVlcnkgfSk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIC8vc2VjdGlvbiB0byBkaXNwbGF5XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgLy8gc3R5bGU9e3sgXCItLWltYWdlLXVybFwiOiBgdXJsKCR7cmVzdWx0cy5iYWNrZHJvcH0pYCB9fVxyXG4gICAgICAvLyBjbGFzc05hbWU9XCJiZy1baW1hZ2U6dmFyKC0taW1hZ2UtdXJsKV0gYmctbm8tcmVwZWF0IGJnLWNlbnRlciBiZy1jb3ZlclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbS02IGgtZml0IGFsaWduLW1pZGRsZVwiXHJcbiAgICA+XHJcbiAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgc3JjPXtyZXN1bHRzLnBvc3Rlcn1cclxuICAgICAgICBhbHQ9e3Jlc3VsdHMudGl0bGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byByb3VuZGVkLXNtIGRyb3Atc2hhZG93LWxnXCJcclxuICAgICAgLz4gKi99XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Jlc3VsdHMuYmFja2Ryb3B9XHJcbiAgICAgICAgYWx0PXtyZXN1bHRzLnRpdGxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC1sZyBkcm9wLXNoYWRvdy1sZyBoLTEyXCJcclxuICAgICAgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgbXQtMyBtYi02IHRleHQtWyNGQUU5RjJdXCI+XHJcbiAgICAgICAge3Jlc3VsdHMudGl0bGV9LCB7cmVzdWx0cy55ZWFyfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgPGxpPntyZXN1bHRzLnNpbWlsYXJfdGl0bGVzWzBdfTwvbGk+XHJcbiAgICAgICAgPGxpPntyZXN1bHRzLnNpbWlsYXJfdGl0bGVzWzFdfTwvbGk+XHJcbiAgICAgICAgPGxpPntyZXN1bHRzLnNpbWlsYXJfdGl0bGVzWzJdfTwvbGk+XHJcbiAgICAgIDwvdWw+ICovfVxyXG5cclxuICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgaHJlZj17cmVzdWx0cy5zb3VyY2VzLmlkWzIwM10ud2ViX3VybH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0NDMjUyQ10gcHktMiByb3VuZGVkLXhsIHRleHQtWyNGQUU5RUFdIHRleHQtbFwiXHJcbiAgICAgID5cclxuICAgICAgICBPbiBOZXRmbGl4XHJcbiAgICAgIDwvTGluaz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXRNb3ZpZSIsInF1ZXJ5IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1dBVENITU9ERV9BUElfS0VZIiwiZ2V0SUQiLCJ0aXRsZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlX3Jlc3VsdHMiLCJpZCIsImVycm9yIiwiZ2V0TW92aWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJiYWNrZHJvcCIsImFsdCIsInAiLCJ5ZWFyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/API/watchmode.js\n"));

/***/ })

});