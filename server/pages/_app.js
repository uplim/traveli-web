(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CheckAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6671);
/* harmony import */ var _components_Loadings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7043);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_auth__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CheckAuth = ({ children  })=>{
    const { isAccessibleBeforeSignIn , isLogin , isLoading , isLogout  } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_1__/* .useCheckAuth */ .jI)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isAccessibleBeforeSignIn || isLogin && !isLoading || isLogout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loadings__WEBPACK_IMPORTED_MODULE_2__/* .Loading */ .g, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _components_Auth_CheckAuth__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _components_Auth_CheckAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Auth_CheckAuth__WEBPACK_IMPORTED_MODULE_0__]);
_components_Auth_CheckAuth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        minH: "100vh",
        direction: "column",
        bgColor: "base",
        overflowX: "scroll",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            as: "main",
            maxW: "container.md",
            minW: "container.sm",
            px: "1.6rem",
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Layout/index.ts



/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ DefaultSeo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./src/components/SEOs/DefaultSeo.tsx


const DefaultSeo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
        defaultTitle: "traveli - URL\u3092\u4FDD\u5B58\u3059\u308B\u65C5\u7A0B\u7BA1\u7406\u30A2\u30D7\u30EA",
        description: "traveli\u306F\u65C5\u5148\u3067\u78BA\u8A8D\u3057\u305F\u3044\u60C5\u5831\u306EURL\u30921\u3064\u306B\u307E\u3068\u3081\u3066\u53CB\u9054\u3084\u5BB6\u65CF\u306B\u5171\u6709\u3067\u304D\u308Bweb\u30A2\u30D7\u30EA\u3067\u3059",
        openGraph: {
            type: "website",
            title: "traveli - URL\u3092\u4FDD\u5B58\u3059\u308B\u65C5\u7A0B\u7BA1\u7406\u30A2\u30D7\u30EA",
            description: "traveli\u306F\u65C5\u5148\u3067\u78BA\u8A8D\u3057\u305F\u3044\u60C5\u5831\u306EURL\u30921\u3064\u306B\u307E\u3068\u3081\u3066\u53CB\u9054\u3084\u5BB6\u65CF\u306B\u5171\u6709\u3067\u304D\u308Bweb\u30A2\u30D7\u30EA\u3067\u3059",
            site_name: "traveli - URL\u3092\u4FDD\u5B58\u3059\u308B\u65C5\u7A0B\u7BA1\u7406\u30A2\u30D7\u30EA",
            url: "https://traveli-web.vercel.app/",
            images: [
                {
                    url: "https://traveli-web.vercel.app/images/ogp.png",
                    width: 1200,
                    height: 630,
                    alt: "",
                    type: "image/png"
                }
            ]
        },
        twitter: {
            handle: "@traveli_jp",
            cardType: "summary_large_image"
        }
    });
};

;// CONCATENATED MODULE: ./src/components/SEOs/index.ts



/***/ }),

/***/ 3158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ BaseToastContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BaseToastContainer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _components_Toasts_BaseToastContainer__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _components_Toasts_BaseToastContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3158);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toasts_BaseToastContainer__WEBPACK_IMPORTED_MODULE_0__]);
_components_Toasts_BaseToastContainer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




if (false) {}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8040);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2837);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6606);
/* harmony import */ var _components_SEOs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(362);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4804);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Toasts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Auth__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Toasts__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Auth__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase__WEBPACK_IMPORTED_MODULE_8__, _components_Toasts__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
            theme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .customTheme */ .v,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEOs__WEBPACK_IMPORTED_MODULE_7__/* .DefaultSeo */ .l, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* .Layout */ .A, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Auth__WEBPACK_IMPORTED_MODULE_6__/* .CheckAuth */ .u, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toasts__WEBPACK_IMPORTED_MODULE_10__/* .BaseToastContainer */ .U, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ customTheme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/theme/colors.ts
const colors = {
    white: "#FFFFFF",
    base: "#F1F4FF",
    logoBlack: "#393849",
    brandBlue: "#1A489D",
    "brandBlue-switch": {
        500: "#1A489D",
        600: "#1A489D"
    },
    gray: "#7E7E7E",
    black: "#252525",
    brandPink: {
        50: "#ffdde5",
        100: "#ffccd8",
        200: "#ffbbcb",
        300: "#ffaabf",
        400: "#ff99b2",
        500: "#ff89a5",
        600: "#ff7898",
        700: "#ff678c",
        800: "#ff567f",
        900: "#ff4572"
    }
};

;// CONCATENATED MODULE: ./src/theme/font-sizes.ts
const fontSizes = {
    xs: "1.2rem",
    sm: "1.5rem",
    md: "1.6rem",
    lg: "2.0rem",
    xl: "2.4rem",
    "2xl": "3.2rem",
    "3xl": "4.0rem",
    "4xl": "4.8rem"
};

;// CONCATENATED MODULE: ./src/theme/sizes.ts
const sizes = {
    container: {
        sm: "32rem",
        md: "68rem"
    }
};

;// CONCATENATED MODULE: ./src/theme/button.ts
const Button = {
    baseStyle: {
        fontWeight: 400,
        _focus: {
            boxShadow: "none"
        }
    },
    variants: {
        round: {
            w: "12.4rem",
            h: "5.2rem",
            borderRadius: "10rem",
            bgColor: "brandBlue",
            color: "white"
        },
        iconRound: {
            w: "6.4rem",
            h: "6.4rem",
            borderRadius: "50%",
            bgColor: "brandBlue",
            filter: "drop-shadow(4px 4px 10px #E4EBEE)"
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/index.ts





const customTheme = (0,react_.extendTheme)({
    fonts: {
        body: `'M PLUS 1p', sans-serif`,
        heading: `'M PLUS 1p', sans-serif`
    },
    colors: colors,
    fontSizes: fontSizes,
    sizes: sizes,
    styles: {
        global: {
            html: {
                fontSize: "62.5%"
            },
            body: {
                fontFamily: "body",
                lineHeight: "base",
                fontSize: "sm",
                "& p, & span, & dl, & form": {
                    transform: "rotate(0.03deg)"
                }
            },
            "h1,h2,h3,h4,h5,h6,input,textarea,img,svg,a,label": {
                transform: "rotate(0.03deg)"
            }
        }
    },
    components: {
        Button: Button
    }
});


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 9500:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [596,671], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();