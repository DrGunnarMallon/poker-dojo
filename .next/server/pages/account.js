"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/account";
exports.ids = ["pages/account"];
exports.modules = {

/***/ "./pages/account.jsx":
/*!***************************!*\
  !*** ./pages/account.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst account = ()=>{\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Welcome \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gunnar/Desktop/Programming/poker-dojo/pages/account.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/gunnar/Desktop/Programming/poker-dojo/pages/account.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gunnar/Desktop/Programming/poker-dojo/pages/account.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"You are not signed in.\"\n            }, void 0, false, {\n                fileName: \"/Users/gunnar/Desktop/Programming/poker-dojo/pages/account.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gunnar/Desktop/Programming/poker-dojo/pages/account.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (account);\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/login\"\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3dDO0FBRWxFLE1BQU1JLFVBQVUsSUFBTTtJQUNwQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdOLDJEQUFVQTtJQUU1QyxJQUFJTSxXQUFXLGlCQUFpQjtRQUM5QixxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDQzs7d0JBQUU7d0JBQVNILFFBQVFJLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs4QkFDN0IsOERBQUNDO29CQUFPQyxTQUFTLElBQU1YLHdEQUFPQTs4QkFBSTs7Ozs7Ozs7Ozs7O0lBR3hDLE9BQU87UUFDTCxxQkFDRSw4REFBQ007c0JBQ0MsNEVBQUNDOzBCQUFFOzs7Ozs7Ozs7OztJQUdULENBQUM7QUFDSDtBQUVBLGlFQUFlTCxPQUFPQSxFQUFDO0FBRWhCLE1BQU1VLHFCQUFxQixPQUFPQyxVQUFZO0lBQ25ELE1BQU1ULFVBQVUsTUFBTUgsMkRBQVVBLENBQUNZO0lBRWpDLElBQUksQ0FBQ1QsU0FBUztRQUNaLE9BQU87WUFDTFUsVUFBVTtnQkFDUkMsYUFBYTtZQUNmO1FBQ0Y7SUFDRixDQUFDO0lBRUQsT0FBTztRQUNMQyxPQUFPO1lBQUVaO1FBQVE7SUFDbkI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZXItZG9qby8uL3BhZ2VzL2FjY291bnQuanN4P2VmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgYWNjb3VudCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5XZWxjb21lIHtzZXNzaW9uLnVzZXIubmFtZX08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+WW91IGFyZSBub3Qgc2lnbmVkIGluLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnQ7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHNlc3Npb24gfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsImdldFNlc3Npb24iLCJhY2NvdW50IiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJkaXYiLCJwIiwidXNlciIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/account.jsx"));
module.exports = __webpack_exports__;

})();