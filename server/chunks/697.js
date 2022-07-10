"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 8697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "n": () => (/* reexport safe */ _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9675);
/* harmony import */ var _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_1__]);
([_hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// travelink



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useCreateTravelink)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCreateTravelink = async (data, uid)=>{
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "travelinks"));
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(ref, {
        ...data,
        id: ref.id,
        ownerId: uid,
        createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
    return ref.id;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useGetTravelink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useGetTravelink = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: travelink , 1: setTravelink  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const traveliId = router.query.traveliId;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        if (!traveliId) return;
        const loadTravelinks = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "travelinks"), traveliId);
            const travelinksDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(ref);
            if (!travelinksDoc.exists()) {
                return;
            }
            const getTravelinks = travelinksDoc.data();
            setTravelink(getTravelinks);
        };
        loadTravelinks();
    }, []);
    return {
        travelink
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ currentUserState)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./src/recoil/keys.ts
var AtomKeys;
(function(AtomKeys) {
    AtomKeys["CURRENT_USER_STATE"] = "userState";
})(AtomKeys || (AtomKeys = {}));

;// CONCATENATED MODULE: ./src/recoil/atoms/user.ts


// undefined またログインが完了していない状態
// null ログイン確認をした結果、ログインしていない状態
const currentUserState = (0,external_recoil_.atom)({
    key: AtomKeys.CURRENT_USER_STATE,
    default: undefined
});

;// CONCATENATED MODULE: ./src/recoil/atoms/index.ts



/***/ })

};
;