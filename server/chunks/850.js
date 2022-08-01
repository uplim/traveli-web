"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "hR": () => (/* reexport */ ButtonIconRound),
  "p4": () => (/* reexport */ ButtonSignIn)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Buttons/Button.tsx



const Button = (0,react_.forwardRef)(({ children , disabled , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        ...props,
        ref: ref,
        opacity: disabled ? "0.7" : "1",
        children: children
    });
});

// EXTERNAL MODULE: ./src/components/Icons/index.ts + 15 modules
var Icons = __webpack_require__(3307);
;// CONCATENATED MODULE: ./src/components/Buttons/ButtonIconRound.tsx




const ButtonIconRound = (0,react_.forwardRef)(({ iconType , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: iconType === "plus" ? /*#__PURE__*/ jsx_runtime_.jsx(Button, {
            ...props,
            ref: ref,
            variant: "iconRound",
            boxShadow: "0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)",
            filter: "drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconPlus */.SC, {
                w: "2.4rem",
                h: "2.4rem",
                color: "white"
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
            ...props,
            boxShadow: "0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)",
            filter: "drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))",
            ref: ref,
            variant: "iconRound",
            bgColor: "white",
            w: "4rem",
            h: "4rem",
            children: [
                iconType === "return" && /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconReturn */.BK, {
                    w: "2.4rem",
                    h: "2.4rem",
                    color: "black",
                    mt: ".4rem"
                }),
                iconType === "edit" && /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconEdit */.yl, {
                    w: "1.8rem",
                    h: "1.8rem",
                    color: "logo-black"
                }),
                iconType === "menu" && /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconMenu */.dc, {
                    w: "2rem",
                    h: "2rem",
                    color: "logo-black"
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./src/components/Buttons/ButtonSignIn.tsx



const ButtonSignIn = (0,react_.forwardRef)(({ iconType , ...props }, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
        ...props,
        w: "100%",
        pr: 0,
        pl: 0,
        _disabled: {
            opacity: ".7"
        },
        h: "4.6rem",
        bgColor: "white",
        borderRadius: "10rem",
        ref: ref,
        boxShadow: "0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)",
        filter: "drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))",
        alignItems: "center",
        justifyContent: iconType === "google" ? "left" : "center",
        children: [
            iconType === "google" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: "/images/icons/google.svg",
                        alt: "",
                        w: "1.8rem",
                        h: "1.8rem",
                        ml: "2.1rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "sm",
                        ml: "6.3rem",
                        children: "Google\u3067\u30B5\u30A4\u30F3\u30A4\u30F3"
                    })
                ]
            }),
            iconType === "anonymous" && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                textAlign: "left",
                fontSize: "sm",
                children: "\u767B\u9332\u305B\u305A\u306B\u306F\u3058\u3081\u308B"
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/Buttons/index.ts





/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lj": () => (/* reexport */ IconCamera),
  "NO": () => (/* reexport */ IconCheck),
  "yl": () => (/* reexport */ IconEdit),
  "T0": () => (/* reexport */ IconHelp),
  "JH": () => (/* reexport */ IconLink),
  "dc": () => (/* reexport */ IconMenu),
  "SC": () => (/* reexport */ IconPlus),
  "G1": () => (/* reexport */ IconQr),
  "BK": () => (/* reexport */ IconReturn),
  "Dz": () => (/* reexport */ IconSignOut),
  "f7": () => (/* reexport */ IconUser)
});

// UNUSED EXPORTS: IconSave, IconShare, IconViewGrid, IconViewList

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Icons/IconCamera.tsx


const IconCamera = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconEdit.tsx


const IconEdit = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconHelp.tsx


const IconHelp = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconLink.tsx


const IconLink = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                clipRule: "evenodd"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconMenu.tsx


const IconMenu = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4 6h16M4 12h16M4 18h16"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconPlus.tsx


const IconPlus = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 4v16m8-8H4"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconQr.tsx


const IconQr = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconReturn.tsx


const IconReturn = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 19l-7-7 7-7"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconSave.tsx


const IconSave = ({ ...props })=>{
    return /*#__PURE__*/ _jsx(Box, {
        ...props,
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconShare.tsx


const IconShare = ({ ...props })=>{
    return /*#__PURE__*/ _jsx(Box, {
        ...props,
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconSignOut.tsx


const IconSignOut = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconUser.tsx


const IconUser = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconViewGrid.tsx


const IconViewGrid = ({ ...props })=>{
    return /*#__PURE__*/ _jsx(Box, {
        ...props,
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconViewList.tsx


const IconViewList = ({ ...props })=>{
    return /*#__PURE__*/ _jsx(Box, {
        ...props,
        children: /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconCheck.tsx


const IconCheck = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5 13l4 4L19 7"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/index.ts

















/***/ }),

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
        if (document.exists()) {
            const data = document.data();
            if (!data.name) router.push("/user");
            else router.push("/home");
            return;
        }
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(userRef, {
            uid: user.uid,
            isAnonymous: user.isAnonymous,
            // google認証しかないため、providerData[0]でok
            name: !user.isAnonymous ? user.providerData[0].displayName : "",
            icon: !user.isAnonymous ? user.providerData[0].photoURL : ""
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
        user,
        currentUser
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