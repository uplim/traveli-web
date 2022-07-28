"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 3667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ CardEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7658);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CardEdit = ({ label , url , index , formType , travelinkData , ownerProfile , remove , setCurrentLabel , setCurrentURL , setState  })=>{
    const { register , errors  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_1__/* .useFormCreateUpdateLinks */ .j)(formType, travelinkData, ownerProfile);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                marginTop: "0.4rem",
                padding: "1.4rem 1.6rem 0 1.6rem",
                w: "100%",
                h: "27.4rem",
                borderRadius: "1.5rem",
                bgColor: "white",
                filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                            bgColor: "#E8ECF0",
                                            borderRadius: "full",
                                            w: "3.6rem",
                                            h: "3.6rem",
                                            align: "center",
                                            justify: "center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                bgImage: "/images/menuButton.svg",
                                                w: "2.4rem",
                                                h: "2.4rem"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                                padding: "1.35rem 0 0 2.4rem",
                                w: "16.8rem",
                                h: "8.8rem",
                                borderColor: "#CBD5E0",
                                borderRadius: "1.5rem",
                                boxShadow: 0,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        display: "flex",
                                        padding: "0 0 1.35rem 0",
                                        // TODO: useState
                                        onClick: ()=>{
                                            setState();
                                            if (label == "") setCurrentLabel(url);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                bgImage: "/images/closeMenu.svg",
                                                w: "1.5rem",
                                                h: "1.5rem",
                                                marginRight: "1.6rem"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                fontSize: "sm",
                                                children: "\u8868\u793A\u3092\u6700\u5C0F\u5316"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        display: "flex",
                                        padding: 0,
                                        onClick: ()=>{
                                            remove();
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                bgImage: "/images/trash.svg",
                                                w: "1.68rem",
                                                h: "1.68rem",
                                                marginRight: "1.6rem"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                fontSize: "sm",
                                                color: "#FF4D4D",
                                                children: "\u524A\u9664\u3059\u308B"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: "\u30AB\u30C6\u30B4\u30EA"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                    isInvalid: !!errors.links,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                            h: "1.6rem",
                                            fontSize: "sm",
                                            color: "#2D2D2D",
                                            children: "URL"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                            marginTop: "0.3rem",
                                            marginBottom: "1.6rem",
                                            variant: "outline",
                                            borderColor: "#ACC1CA",
                                            w: "100%",
                                            h: "4.4rem",
                                            borderRightRadius: "10rem",
                                            borderLeftRadius: "10rem",
                                            isInvalid: errors.links?.[index] ? true : false,
                                            ...register(`links.${index}.url`),
                                            defaultValue: url,
                                            onChange: (u)=>{
                                                setCurrentURL(u.target.value);
                                            },
                                            placeholder: "https://"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                                            children: errors.links?.[index] && errors.links?.[index].url?.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                    display: "flex",
                                    h: "1.6rem",
                                    fontSize: "sm",
                                    color: "#2D2D2D",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            children: "\u30E9\u30D9\u30EB"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            color: "gray",
                                            children: "\uFF08\u4EFB\u610F\uFF09"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    marginTop: "0.3rem",
                                    variant: "outline",
                                    borderColor: "#ACC1CA",
                                    w: "100%",
                                    h: "4.4rem",
                                    borderRightRadius: "10rem",
                                    borderLeftRadius: "10rem",
                                    ...register(`links.${index}.label`),
                                    defaultValue: label,
                                    onChange: (l)=>{
                                        setCurrentLabel(l.target.value);
                                    },
                                    placeholder: "\u4F8B\uFF09\u5BBF\u6CCA\u5148"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CardEditWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3340);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Cards__WEBPACK_IMPORTED_MODULE_2__]);
_components_Cards__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CardEditWrapper = ({ label , url , index , remove  })=>{
    const { 0: isMinimum , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentLabel , 1: setCurrentLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(label);
    const { 0: currentURL , 1: setCurrentURL  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(url);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isMinimum ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_2__/* .CardLink */ .YS, {
            label: currentLabel,
            url: currentURL,
            onClick: ()=>{
                setState(false);
                if (currentURL == currentLabel) setCurrentLabel("");
            }
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_2__/* .CardEdit */ .Ry, {
            label: currentLabel,
            url: currentURL,
            index: index,
            formType: "create",
            remove: ()=>{
                remove();
            },
            setCurrentLabel: setCurrentLabel,
            setCurrentURL: setCurrentURL,
            setState: ()=>{
                setState(true);
            }
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CardLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const CardLink = ({ label , url , onClick  })=>{
    if (onClick == undefined) onClick = ()=>{
        window.open(url);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            position: "relative",
            top: 0,
            left: 0,
            w: "100%",
            h: "5.2rem",
            borderRadius: "10rem",
            bgColor: "white",
            filter: "drop-shadow(4px 4px 10px #E4EBEE)",
            align: "center",
            marginBottom: "1rem",
            onClick: onClick,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    backgroundColor: "gray",
                    borderRadius: "100%",
                    w: "3.8rem",
                    h: "3.8rem",
                    marginLeft: "0.7rem"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    w: "80%",
                    textAlign: "center",
                    fontSize: "md",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    margin: "0 1.6rem",
                    children: label
                })
            ]
        })
    });
};


/***/ }),

/***/ 3340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ry": () => (/* reexport safe */ _components_Cards_CardEdit__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "YS": () => (/* reexport safe */ _components_Cards_CardLink__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "ak": () => (/* reexport safe */ _components_Cards_CardEditWrapper__WEBPACK_IMPORTED_MODULE_2__.a)
/* harmony export */ });
/* harmony import */ var _components_Cards_CardLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5940);
/* harmony import */ var _components_Cards_CardEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3667);
/* harmony import */ var _components_Cards_CardEditWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5048);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Cards_CardEdit__WEBPACK_IMPORTED_MODULE_1__, _components_Cards_CardEditWrapper__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Cards_CardEdit__WEBPACK_IMPORTED_MODULE_1__, _components_Cards_CardEditWrapper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* reexport safe */ _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "t": () => (/* reexport safe */ _hooks_form_useCreateUpdateUserProfile__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _hooks_form_useCreateUpdateUserProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5881);
/* harmony import */ var _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form_useCreateUpdateUserProfile__WEBPACK_IMPORTED_MODULE_0__, _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__]);
([_hooks_form_useCreateUpdateUserProfile__WEBPACK_IMPORTED_MODULE_0__, _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useCreateUpdateUserProfile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3125);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1908);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const schema = yup__WEBPACK_IMPORTED_MODULE_6__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")
});
const useCreateUpdateUserProfile = ()=>{
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__.yupResolver)(schema)
    });
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_5__/* .currentUserState */ .y);
    const firestorage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: iconUrl , 1: setIconUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useBoolean)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getProfile = async ()=>{
            if (!currentUser) return;
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
            const profilesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "profiles");
            const profileRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(profilesCollection, currentUser.uid);
            const document = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(profileRef);
            const data = document.data();
            if (!data) return;
            setIconUrl(data.icon);
            setName(data.name);
            return data;
        };
        getProfile();
    }, []);
    const createProfileIfNotFound = async (profile)=>{
        if (!currentUser) return;
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
        const profilesCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "profiles");
        const profileRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(profilesCollection, currentUser.uid);
        if (profile.name == "" && profile.icon) {
            setIconUrl(profile.icon);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(profileRef, {
                icon: profile.icon
            });
        } else if (profile.name && profile.icon == "") {
            setName(profile.name);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(profileRef, {
                name: profile.name
            });
        } else if (profile.name && profile.icon) {
            setIconUrl(profile.icon);
            setName(profile.name);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(profileRef, {
                name: profile.name,
                icon: profile.icon
            });
        } else {
            return;
        }
    };
    // react-hook-formでinput[type="file"]上手くいかない
    // https://zenn.dev/akira_miyake/articles/0b08cf732e7c0a
    const handleChangeIcon = (e)=>{
        if (e.target.files !== null) {
            setImage(e.target.files[0]);
        }
    };
    const onSubmit = (data)=>{
        // TODO: いるかも？
        // event.preventDefault()
        try {
            setDisabled.on();
            if (image) {
                const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(firestorage, encodeURI(image.name));
                (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(imageRef, image).then(()=>{
                    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(imageRef).then((url)=>{
                        const req = {
                            name: data.name,
                            icon: url
                        };
                        createProfileIfNotFound(req);
                    });
                });
            } else if (!image && data.name) {
                const req = {
                    name: data.name,
                    icon: ""
                };
                createProfileIfNotFound(req);
                // TODO: アラートをいい感じに表示する
                alert("\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F");
            }
        } catch (err) {
            setError(true);
        } finally{
            setDisabled.off();
        }
    };
    return {
        onSubmit,
        handleSubmit,
        register,
        handleChangeIcon,
        error,
        iconUrl,
        name,
        image,
        errors,
        disabled
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFormCreateUpdateLinks)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8697);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3125);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__, _hooks_upload__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__, _hooks_upload__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    title: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("\u65C5\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
    date: yup__WEBPACK_IMPORTED_MODULE_2__.array(),
    links: yup__WEBPACK_IMPORTED_MODULE_2__.array().of(yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        url: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("url\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")// urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
            message: "\u5229\u7528\u53EF\u80FD\u306AURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
        }),
        label: yup__WEBPACK_IMPORTED_MODULE_2__.string()
    }))
});
const useFormCreateUpdateLinks = (formType, travelinkData, ownerProfile)=>{
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const traveliId1 = router.query.traveliId;
    const formatedDate = travelinkData?.date.map((item)=>{
        return item ? item.toDate() : null;
    });
    const { register , control , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(schema),
        defaultValues: {
            ...travelinkData,
            date: formatedDate
        }
    });
    const { uploadImage , image , handleChangeImage , isImageChanged  } = (0,_hooks_upload__WEBPACK_IMPORTED_MODULE_8__/* .useUploadImage */ .H)();
    const currentUser1 = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_6__/* .currentUserState */ .y);
    const createTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useCreateTravelink */ .h0;
    const updateTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateTravelink */ .pz;
    const { fields , append , remove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFieldArray)({
        name: "links",
        control: control
    });
    const onSubmit = async (data)=>{
        if (!currentUser1) return;
        const req = data;
        try {
            setDisabled.on();
            // 画像に変更が入っていたらrequest bodyに画像を含める
            if (image && isImageChanged) {
                const downloadUrl = await uploadImage(image);
                req.thumbnail = downloadUrl;
            }
            formType === "create" ? create(req, currentUser1) : update(req, traveliId1);
        } catch (err) {
            console.error(err);
        } finally{
            setDisabled.off();
        }
    };
    const create = async (data, currentUser)=>{
        if (!ownerProfile) return;
        const res = await createTravelink({
            ...data,
            ownerIcon: ownerProfile.icon,
            ownerName: ownerProfile.name
        }, currentUser.uid);
        router.push(window.location.origin + res);
    };
    const update = async (data, traveliId)=>{
        await updateTravelink(data, traveliId);
        router.push(window.location.origin + traveliId);
    };
    return {
        register,
        handleSubmit,
        fields,
        append,
        remove,
        control,
        onSubmit,
        errors,
        disabled,
        handleChangeImage,
        image
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _hooks_upload_useUploadImage__WEBPACK_IMPORTED_MODULE_0__.H)
/* harmony export */ });
/* harmony import */ var _hooks_upload_useUploadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_upload_useUploadImage__WEBPACK_IMPORTED_MODULE_0__]);
_hooks_upload_useUploadImage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useUploadImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_1__]);
firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useUploadImage = ()=>{
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [isImageChanged, setIsChanged] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)();
    const uploadImage = (imageFile)=>{
        const firestorage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)();
        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(firestorage, encodeURI(imageFile.name));
        const downloadUrl = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytes)(imageRef, imageFile).then(()=>{
            const url = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(imageRef);
            return url;
        });
        return downloadUrl;
    };
    const handleChangeImage = (e)=>{
        if (e.target.files !== null) {
            setImage(e.target.files[0]);
            setIsChanged.on();
        }
    };
    return {
        uploadImage,
        image,
        handleChangeImage,
        isImageChanged
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;