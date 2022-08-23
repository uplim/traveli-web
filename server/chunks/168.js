"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 6671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QJ": () => (/* reexport safe */ _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "lN": () => (/* reexport safe */ _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__.l)
/* harmony export */ });
/* harmony import */ var _hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7417);
/* harmony import */ var _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4846);
/* harmony import */ var _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__, _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__, _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_auth_useCheckAuth__WEBPACK_IMPORTED_MODULE_0__, _hooks_auth_useSignInAnonymously__WEBPACK_IMPORTED_MODULE_1__, _hooks_auth_useSignOut__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




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

/***/ 5684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useSignInGoogle)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useSignInGoogle = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const [currentUser1, setCurrentUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const createUser = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useCreateUser */ .O2;
    const signInGoogleHandler = async ()=>{
        setDisabled.on();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
        // 匿名認証済みの時は、リンクさせる
        if (auth.currentUser) {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.linkWithPopup)(auth.currentUser, provider);
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (currentUser)=>{
                if (currentUser) {
                    setCurrentUser({
                        uid: currentUser.uid,
                        isAnonymous: currentUser.isAnonymous
                    });
                } else {
                    setCurrentUser(null);
                }
                router.push("/home");
            });
        } else {
            const res = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider);
            const isNewUser = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAdditionalUserInfo)(res)?.isNewUser;
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (currentUser)=>{
                if (currentUser) {
                    if (isNewUser) {
                        const userData = {
                            uid: currentUser.uid,
                            isAnonymous: currentUser.isAnonymous,
                            name: currentUser.providerData[0].displayName ?? "",
                            icon: currentUser.providerData[0].photoURL ?? ""
                        };
                        createUser(userData);
                        setCurrentUser(userData);
                    }
                } else {
                    setCurrentUser(null);
                }
                router.push("/home");
            });
        }
    };
    return {
        signInGoogleHandler,
        disabled,
        currentUser: currentUser1
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