"use strict";
exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 6671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJ": () => (/* reexport safe */ _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "jI": () => (/* reexport safe */ _hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "lN": () => (/* reexport safe */ _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__.l)
/* harmony export */ });
/* harmony import */ var _hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4846);
/* harmony import */ var _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__, _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__, _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__, _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__, _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useCheckAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);
firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const accessibleBeforeSignInPages = [
    "/404"
];
const useCheckAuth = ()=>{
    const [isLoading, setIsLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBoolean)();
    const [currentUser1, setCurrentUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isAccessibleBeforeSignIn = accessibleBeforeSignInPages.includes(router.pathname);
    const checkAuth = async ()=>{
        // ログインなしでアクセス可能なページには認証チェックしない
        if (isAccessibleBeforeSignIn) return;
        try {
            setIsLoading.on();
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(auth, (currentUser)=>{
                if (currentUser) {
                    if (router.pathname === "/") {
                        router.push("/home");
                        return;
                    }
                    setCurrentUser({
                        uid: currentUser.uid,
                        isAnonymous: currentUser.isAnonymous
                    });
                } else if (router.pathname !== "/[traveliId]") {
                    // ログアウト
                    router.push("/");
                    setCurrentUser(null);
                } else {
                    setCurrentUser(null);
                }
            });
            setIsLoading.off();
        } catch  {
            await router.push("/");
            setCurrentUser(null);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.pathname
    ]);
    const isLogout = !currentUser1 && (router.pathname === "/" || router.pathname === "/[traveliId]");
    const isLogin = !!currentUser1;
    return {
        isAccessibleBeforeSignIn,
        isLogin,
        isLoading,
        isLogout
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useSignInAnonymously)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3125);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useSignInAnonymously = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)();
    const setCurrentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__/* .currentUserState */ .y);
    const signInAnonymouslyHandler = async ()=>{
        setDisabled.on();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        try {
            const res = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInAnonymously)(auth);
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, async (firebaseUser)=>{
                if (firebaseUser) {
                    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getFirestore)();
                    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(db, "users"), firebaseUser.uid);
                    const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(ref);
                    const isNewUser = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAdditionalUserInfo)(res)?.isNewUser;
                    // 初回ログインで、かつuser作成済みの場合
                    if (!isNewUser && document.exists()) {
                        router.push("/home");
                        return;
                    }
                    setCurrentUser({
                        uid: firebaseUser.uid,
                        isAnonymous: firebaseUser.isAnonymous,
                        name: "",
                        icon: ""
                    });
                } else {
                    setCurrentUser(null);
                }
            });
            router.push("/user?isFirst=true");
        } catch (err) {
            console.error(err);
            setDisabled.off();
        }
    };
    return {
        signInAnonymouslyHandler,
        disabled
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useSignOut)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useSignOut = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const setCurrentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const signOutHandler = async ()=>{
        setDisabled.on();
        try {
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
            if (!auth.currentUser) {
                setDisabled.off();
                return;
            }
            await auth.signOut();
            setCurrentUser(null);
            setDisabled.off();
            router.push("/");
        } catch (err) {
            console.error(err);
            setDisabled.off();
        }
    };
    return {
        signOutHandler,
        disabled
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;