"use strict";
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 7417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ UseCheckAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3125);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var _components_Loadings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7043);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_5__]);
firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const accessibleBeforeSignInPages = [
    "/signin",
    "/signup",
    "/404"
];
const UseCheckAuth = ({ children  })=>{
    const [isLoading, setIsLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useBoolean)();
    const [currentUser1, setCurrentUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__/* .currentUserState */ .y);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isAccessibleBeforeSignIn = accessibleBeforeSignInPages.includes(router.pathname);
    const checkAuth = async ()=>{
        // ログインなしでアクセス可能なページには認証チェックしない
        if (isAccessibleBeforeSignIn) return;
        try {
            setIsLoading.on();
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(auth, (currentUser)=>{
                if (currentUser) {
                    if (router.pathname === "/") {
                        router.push("/home");
                        return;
                    }
                    setCurrentUser({
                        uid: currentUser.uid,
                        isAnonymous: currentUser.isAnonymous
                    });
                } else {
                    // ログアウト
                    router.push("/");
                    setCurrentUser(null);
                }
            });
            setIsLoading.off();
        } catch  {
            await router.push("/");
            setCurrentUser(null);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.pathname
    ]);
    const isLogout = !currentUser1 && router.pathname === "/";
    const isLogin = !!currentUser1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isAccessibleBeforeSignIn || isLogin && !isLoading || isLogout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loadings__WEBPACK_IMPORTED_MODULE_6__/* .Loading */ .g, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;