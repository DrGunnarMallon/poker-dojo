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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (process.env.MODE_ENV === \"development\") {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    clientPromise = client.connect();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRW5DLE1BQU1DLFVBQVU7SUFDZEMsb0JBQW9CLElBQUk7SUFDeEJDLGlCQUFpQixJQUFJO0FBQ3ZCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxNQUFNLDJDQUEyQztBQUM3RCxDQUFDO0FBRUQsSUFBSVIsUUFBUUMsR0FBRyxDQUFDUSxRQUFRLEtBQUssZUFBZTtJQUMxQyxJQUFJLENBQUNDLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CTCxTQUFTLElBQUlSLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5Qk8sT0FBT0MsbUJBQW1CLEdBQUdMLE9BQU9NLE9BQU87SUFDN0MsQ0FBQztJQUNETCxnQkFBZ0JHLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPO0lBQ0xMLFNBQVMsSUFBSVIsZ0RBQVdBLENBQUNDLEtBQUtJO0lBQzlCSSxnQkFBZ0JELE9BQU9NLE9BQU87QUFDaEMsQ0FBQztBQUVELGlFQUFlTCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZXItZG9qby8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5NT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsIk1PREVfRU5WIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        }),\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.DISCORD_CLIENT_ID,\n            clientSecret: process.env.DISCORD_CLIENT_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_CLIENT_ID,\n            clientSecret: process.env.TWITTER_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    theme: {\n        colorScheme: \"auto\",\n        brandColor: \"#f6c466\"\n    },\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_5__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: \"database\",\n        maxAge: 30 * 24 * 60 * 60,\n        updateAge: 24 * 60 * 60,\n        generateSessioToken: ()=>{\n            return randomUUID?.() ?? randomBytes(32).toString(\"hex\");\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2tCO0FBQ0k7QUFDRjtBQUNBO0FBQ0U7QUFDWDtBQUVqRCxpRUFBZUEscURBQVFBLENBQUM7SUFDdEJPLFdBQVc7UUFDVE4saUVBQWNBLENBQUM7WUFDYk8sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO1FBQ0FYLG1FQUFnQkEsQ0FBQztZQUNmTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLGtCQUFrQjtZQUN4Q0YsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxzQkFBc0I7UUFDbEQ7UUFDQVosa0VBQWVBLENBQUM7WUFDZEssVUFBVUMsUUFBUUMsR0FBRyxDQUFDTSxpQkFBaUI7WUFDdkNKLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ08scUJBQXFCO1FBQ2pEO1FBQ0FiLGtFQUFlQSxDQUFDO1lBQ2RJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ1EsaUJBQWlCO1lBQ3ZDTixjQUFjSCxRQUFRQyxHQUFHLENBQUNTLHFCQUFxQjtRQUNqRDtLQUNEO0lBQ0RDLFFBQVFYLFFBQVFDLEdBQUcsQ0FBQ1csVUFBVTtJQUM5QkMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMQyxhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUNBQyxTQUFTdEIsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQ3NCLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQ3ZCQyxXQUFXLEtBQUssS0FBSztRQUNyQkMscUJBQXFCLElBQU07WUFDekIsT0FBT0Msa0JBQWtCQyxZQUFZLElBQUlDLFFBQVEsQ0FBQztRQUNwRDtJQUNGO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZXItZG9qby8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IEZhY2Vib29rUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZmFjZWJvb2tcIjtcclxuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XHJcbmltcG9ydCBUd2l0dGVyUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvdHdpdHRlclwiO1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIEZhY2Vib29rUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIERpc2NvcmRQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIFR3aXR0ZXJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gIH0sXHJcbiAgdGhlbWU6IHtcclxuICAgIGNvbG9yU2NoZW1lOiBcImF1dG9cIixcclxuICAgIGJyYW5kQ29sb3I6IFwiI2Y2YzQ2NlwiLFxyXG4gIH0sXHJcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiZGF0YWJhc2VcIixcclxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXHJcbiAgICB1cGRhdGVBZ2U6IDI0ICogNjAgKiA2MCxcclxuICAgIGdlbmVyYXRlU2Vzc2lvVG9rZW46ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHJhbmRvbVVVSUQ/LigpID8/IHJhbmRvbUJ5dGVzKDMyKS50b1N0cmluZyhcImhleFwiKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsIkRpc2NvcmRQcm92aWRlciIsIlR3aXR0ZXJQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJESVNDT1JEX0NMSUVOVF9JRCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsIlRXSVRURVJfQ0xJRU5UX0lEIiwiVFdJVFRFUl9DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiSldUX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImJyYW5kQ29sb3IiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwidXBkYXRlQWdlIiwiZ2VuZXJhdGVTZXNzaW9Ub2tlbiIsInJhbmRvbVVVSUQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();