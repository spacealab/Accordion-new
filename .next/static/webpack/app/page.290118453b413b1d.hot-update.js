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

/***/ "(app-pages-browser)/./src/components/Accordion.tsx":
/*!**************************************!*\
  !*** ./src/components/Accordion.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccordionContext */ \"(app-pages-browser)/./src/components/AccordionContext.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n// Accordion.tsx\n\n // Adjust the import path as needed\nconst Accordion = (param)=>{\n    let { items, identifier } = param;\n    _s();\n    const { openIndex, setOpenIndex } = (0,_AccordionContext__WEBPACK_IMPORTED_MODULE_2__.useAccordion)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-4/5 mx-auto mt-5\",\n        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 border border-gray-300 rounded overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-200 p-4 cursor-pointer\",\n                        onClick: ()=>setOpenIndex(openIndex === identifier + index ? null : identifier + index),\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/Accordion-new/src/components/Accordion.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 \".concat(openIndex === identifier + index ? \"block\" : \"hidden\"),\n                        children: item.content\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/Accordion-new/src/components/Accordion.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/home/ali/Desktop/Project/3/Accordion-new/src/components/Accordion.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/ali/Desktop/Project/3/Accordion-new/src/components/Accordion.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Accordion, \"vCTIJQbBegvqHsouqDGjzg2/J3A=\", false, function() {\n    return [\n        _AccordionContext__WEBPACK_IMPORTED_MODULE_2__.useAccordion\n    ];\n});\n_c = Accordion;\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLGdCQUFnQjtBQUNVO0FBQ3dCLENBQUMsbUNBQW1DO0FBWXRGLE1BQU1FLFlBQXNDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUU7O0lBQ2hFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBR0wsK0RBQVlBO0lBRWhELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNaTCxNQUFNTSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDSjtnQkFBZ0JDLFdBQVU7O2tDQUN6Qiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZJLFNBQVMsSUFBTU4sYUFBYUQsY0FBY0QsYUFBYU8sUUFBUSxPQUFPUCxhQUFhTztrQ0FFbEZELEtBQUtHLEtBQUs7Ozs7OztrQ0FFYiw4REFBQ047d0JBQUlDLFdBQVcsT0FBNkQsT0FBdERILGNBQWNELGFBQWFPLFFBQVEsVUFBVTtrQ0FDakVELEtBQUtJLE9BQU87Ozs7Ozs7ZUFSUEg7Ozs7Ozs7Ozs7QUFjbEI7R0FwQk1UOztRQUNnQ0QsMkRBQVlBOzs7S0FENUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi50c3g/ZWQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG4vLyBBY2NvcmRpb24udHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9BY2NvcmRpb25Db250ZXh0JzsgLy8gQWRqdXN0IHRoZSBpbXBvcnQgcGF0aCBhcyBuZWVkZWRcblxuaW50ZXJmYWNlIEFjY29yZGlvbkl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyB7XG4gIGl0ZW1zOiBBY2NvcmRpb25JdGVtW107XG4gIGlkZW50aWZpZXI6IG51bWJlcjsgLy8gQWRkIGFuIGlkZW50aWZpZXIgcHJvcCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGRpZmZlcmVudCBhY2NvcmRpb25zXG59XG5cbmNvbnN0IEFjY29yZGlvbjogUmVhY3QuRkM8QWNjb3JkaW9uUHJvcHM+ID0gKHsgaXRlbXMsIGlkZW50aWZpZXIgfSkgPT4ge1xuICBjb25zdCB7IG9wZW5JbmRleCwgc2V0T3BlbkluZGV4IH0gPSB1c2VBY2NvcmRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTQvNSBteC1hdXRvIG10LTVcIj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC00IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5JbmRleChvcGVuSW5kZXggPT09IGlkZW50aWZpZXIgKyBpbmRleCA/IG51bGwgOiBpZGVudGlmaWVyICsgaW5kZXgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcC00ICR7b3BlbkluZGV4ID09PSBpZGVudGlmaWVyICsgaW5kZXggPyAnYmxvY2snIDogJ2hpZGRlbid9YH0+XG4gICAgICAgICAgICB7aXRlbS5jb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBY2NvcmRpb24iLCJBY2NvcmRpb24iLCJpdGVtcyIsImlkZW50aWZpZXIiLCJvcGVuSW5kZXgiLCJzZXRPcGVuSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbkNsaWNrIiwidGl0bGUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Accordion.tsx\n"));

/***/ })

});