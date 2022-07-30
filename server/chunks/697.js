"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 6708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useCheckBookmarked)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useCheckBookmarked = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [isBookmarked, setIsBookmarked] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const traveliId = router.query.traveliId;
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        const loadBookmark = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "users", currentUser.uid, "bookmarks"), traveliId);
            const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(ref);
            document.exists() ? setIsBookmarked.on() : setIsBookmarked.off();
        };
        loadBookmark();
    }, []);
    return {
        isBookmarked,
        setIsBookmarked
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useCreateBookmark)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCreateBookmark = async (uid, traveliId, data)=>{
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const subColRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "users", uid, "bookmarks"), traveliId);
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(subColRef, {
            thumbnail: data.thumbnail,
            date: data.date,
            title: data.title,
            id: data.id,
            ownerIcon: data.ownerIcon,
            ownerName: data.ownerName
        });
    } catch  {
        console.error("\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useDeleteBookmark)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useDeleteBookmark = async (uid, traveliId)=>{
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "users", uid, "bookmarks"), traveliId);
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(ref);
    } catch  {
        console.error("\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useGetBookmarkList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useGetBookmarkList = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: bookmarkList , 1: setBookmarkList  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        const loadBookmarkList = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "users", currentUser.uid, "bookmarks");
            const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(ref);
            const getBookmarkList = snapshot.docs.map((doc)=>{
                return doc.data();
            });
            setBookmarkList(getBookmarkList);
        };
        loadBookmarkList();
    }, []);
    return {
        bookmarkList
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BH": () => (/* reexport safe */ _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_8__.B),
/* harmony export */   "Ef": () => (/* reexport safe */ _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_10__.E),
/* harmony export */   "Io": () => (/* reexport safe */ _hooks_firestore_user_useUpdateUser__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "Mt": () => (/* reexport safe */ _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_9__.M),
/* harmony export */   "O2": () => (/* reexport safe */ _hooks_firestore_user_useCreateUser__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "O_": () => (/* reexport safe */ _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_4__.O),
/* harmony export */   "h0": () => (/* reexport safe */ _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_5__.h),
/* harmony export */   "no": () => (/* reexport safe */ _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_3__.n),
/* harmony export */   "pg": () => (/* reexport safe */ _hooks_firestore_user_useGetUser__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "pz": () => (/* reexport safe */ _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_6__.p),
/* harmony export */   "qM": () => (/* reexport safe */ _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_7__.q)
/* harmony export */ });
/* harmony import */ var _hooks_firestore_user_useGetUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(753);
/* harmony import */ var _hooks_firestore_user_useCreateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7942);
/* harmony import */ var _hooks_firestore_user_useUpdateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2716);
/* harmony import */ var _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9675);
/* harmony import */ var _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9001);
/* harmony import */ var _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6980);
/* harmony import */ var _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2489);
/* harmony import */ var _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1931);
/* harmony import */ var _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3546);
/* harmony import */ var _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9679);
/* harmony import */ var _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_firestore_user_useGetUser__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_user_useCreateUser__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore_user_useUpdateUser__WEBPACK_IMPORTED_MODULE_2__, _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_5__, _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_6__, _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_7__, _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_8__, _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_9__, _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_10__]);
([_hooks_firestore_user_useGetUser__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_user_useCreateUser__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore_user_useUpdateUser__WEBPACK_IMPORTED_MODULE_2__, _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_5__, _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_6__, _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_7__, _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_8__, _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_9__, _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// user



// travelink




// bookmark





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
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
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
        const loadTravelink = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "travelinks"), traveliId);
            const travelinksDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(ref);
            if (!travelinksDoc.exists()) {
                await router.push("/404");
                return;
            }
            const getTravelink = travelinksDoc.data();
            setTravelink(getTravelink);
        };
        loadTravelink();
    }, []);
    return {
        travelink
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useGetTravelinkList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useGetTravelinkList = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: travelinkList , 1: setTravelinkList  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        const loadTravelinkList = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const travelinksRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "travelinks");
            const travelinksQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(travelinksRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)("ownerId", "==", currentUser.uid));
            const travelinksSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(travelinksQuery);
            const getTravelinkList = travelinksSnapshot.docs.map((doc)=>{
                return doc.data();
            });
            setTravelinkList(getTravelinkList);
        };
        loadTravelinkList();
    }, []);
    return {
        travelinkList
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useUpdateTravelink)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useUpdateTravelink = async (data, id)=>{
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "travelinks"), id);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(ref, {
        ...data,
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useCreateUser)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCreateUser = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const createUser = async (user)=>{
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "users");
        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(usersCollection, user.uid);
        const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userRef);
        if (document.exists()) router.push("/home");
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userRef, {
            uid: user.uid,
            isAnonymous: user.isAnonymous,
            name: "",
            icon: ""
        });
    };
    return {
        createUser
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useGetUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useGetUser = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const loadUser = async ()=>{
            if (!currentUser) return;
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "users"), currentUser.uid);
            const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(ref);
            const getUser = document.data();
            setUser(getUser);
        };
        loadUser();
    }, []);
    return {
        user
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useUpdateUser)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useUpdateUser = async (data, id)=>{
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "users"), id);
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(ref, data);
    } catch (e) {
        console.error(e);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;