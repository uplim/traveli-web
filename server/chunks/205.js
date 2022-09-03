exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 1751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ FormCreateUpdateLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7658);
/* harmony import */ var _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(628);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3307);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6995);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_5__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_6__]);
([_hooks_form__WEBPACK_IMPORTED_MODULE_5__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const FormCreateUpdateLinks = ({ travelinkData , userData , isOwner  })=>{
    const { register , handleSubmit , fields , append , remove , control , onSubmit , errors , disabled , isUploading , currentThumbnail , currentLinks , handleUploadFile , setValue  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_5__/* .useFormCreateUpdateLinks */ .j)(travelinkData, userData);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const traveliId = router.query.traveliId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                w: "100%",
                h: "6.3rem",
                justify: "center",
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: travelinkData ? `/${traveliId}` : "/home",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* .IconReturn */ .BK, {
                                bgColor: "none",
                                w: "2.4rem",
                                h: "2.4rem"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        color: "black",
                        fontSize: "md",
                        fontWeight: "bold",
                        children: "\u65B0\u3057\u3044\u30C8\u30E9\u30D9\u30EA\u30F3\u30AF\u3092\u4F5C\u6210"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        w: "2.2rem",
                        h: "2.2rem"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                isInvalid: errors.title ? true : false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {
                        marginTop: "1.5rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u65C5\u306E\u540D\u524D"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
                        variant: "filled",
                        h: "4.6rem",
                        marginTop: "0.8rem",
                        borderRightRadius: "10rem",
                        borderLeftRadius: "10rem",
                        bgColor: "white",
                        filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                        ...register("title"),
                        placeholder: "\u4F8B\uFF09\u3068\u3082\u3060\u3061\u3068\u306E\u4E00\u6CCA\u4E8C\u65E5\u306E\u65C5\u884C"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormErrorMessage, {
                        children: errors.title && errors.title.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                isInvalid: errors.date ? true : false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {
                        marginTop: "1.6rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u65E5\u6642\uFF08\u4EFB\u610F\uFF09"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_6__/* .InputDate */ .U, {
                        control: control,
                        name: "date"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {
                        marginTop: "1.6rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u30B5\u30E0\u30CD\u30A4\u30EB\u753B\u50CF\uFF08\u4EFB\u610F\uFF09"
                    }),
                    isUploading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                        w: "100%",
                        h: "12.9rem",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        bg: "gray",
                        borderRadius: "1rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                            thickness: ".4rem",
                            speed: ".65s",
                            emptyColor: "gray",
                            color: "brandBlue",
                            w: "6.4rem",
                            h: "6.4rem"
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        as: "label",
                        display: "block",
                        w: "100%",
                        h: "12.9rem",
                        borderRadius: "1rem",
                        bgColor: "#D2D6E1",
                        marginTop: "0.8rem",
                        bgRepeat: "no-repeat",
                        bgImage: currentThumbnail ? currentThumbnail : travelinkData ? travelinkData.thumbnail : "",
                        bgSize: "cover",
                        bgPosition: "center center",
                        filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                                h: "12.9rem",
                                align: "center",
                                justify: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_7__/* .IconCamera */ .Lj, {
                                    zIndex: 1,
                                    w: "4.8rem",
                                    h: "4.8rem",
                                    color: "white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VisuallyHiddenInput, {
                                type: "file",
                                accept: "image/*",
                                onChange: handleUploadFile
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VisuallyHiddenInput, {
                                ...register("thumbnail")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                margin: "1.6rem 0 0.8rem 0",
                children: "\u30EA\u30F3\u30AF"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_8__/* .CardLinkEditList */ .Pf, {
                fileds: fields,
                errors: errors.links,
                register: register,
                append: append,
                remove: remove,
                currentLinks: currentLinks,
                setValue: setValue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                children: (isOwner || !travelinkData) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "3rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Switch, {
                            sx: {
                                "--switch-track-width": "3.8rem",
                                "--switch-track-height": "2rem"
                            },
                            backgroundColor: "#e3e4e5",
                            borderRadius: "full",
                            marginRight: "2.2rem",
                            colorScheme: "brandBlue-switch",
                            ...register("canEdit"),
                            defaultChecked: travelinkData?.canEdit
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {
                            children: "\u4ED6\u306E\u30E6\u30FC\u30B6\u306B\u7DE8\u96C6\u3092\u8A31\u53EF\u3059\u308B"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                justify: "center",
                margin: "3rem 0 3.5rem 0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .zx, {
                    disabled: disabled,
                    variant: "round",
                    onClick: handleSubmit(onSubmit),
                    children: !travelinkData ? "\u4F5C\u6210\u3059\u308B" : "\u5909\u66F4\u3059\u308B"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ FormCreateUpdateUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3307);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FormCreateUpdateUser = ({ data  })=>{
    const { register , handleSubmit , onSubmit , errors , disabled , handleUploadFile , isFirst , currentIcon , isUploading  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_4__/* .useFormCreateUpdateUser */ .q)(data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            as: "form",
            height: "100vh",
            position: "relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    w: "100%",
                    h: "6.3rem",
                    justify: "center",
                    align: "center",
                    children: [
                        !isFirst && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/home",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                "aria-label": "return",
                                size: "lg",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .IconReturn */ .BK, {
                                    w: "2.2rem",
                                    h: "2.2rem"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            color: "black",
                            fontSize: "md",
                            fontWeight: "bold",
                            children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            w: "2.2rem",
                            h: "2.2rem"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    align: "center",
                    justify: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        borderRadius: "50%",
                        filter: "drop-shadow(4px 4px 10px #E4EBEE);",
                        marginBottom: "2.4rem",
                        bgColor: "base",
                        children: isUploading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            w: "12.9rem",
                            h: "12.9rem",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            bg: "gray",
                            rounded: "full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                                thickness: ".4rem",
                                speed: ".65s",
                                emptyColor: "gray",
                                color: "brandBlue",
                                w: "6.4rem",
                                h: "6.4rem"
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                            as: "label",
                            w: "12.9rem",
                            h: "12.9rem",
                            defaultValue: data.icon ?? "",
                            src: currentIcon,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VisuallyHiddenInput, {
                                    onChange: handleUploadFile,
                                    id: "icon",
                                    type: "file",
                                    accept: "image/*"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VisuallyHiddenInput, {
                                    ...register("icon")
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                    isInvalid: errors.name ? true : false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                            htmlFor: "name",
                            fontSize: "md",
                            children: "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                variant: "filled",
                                w: "34.4rem",
                                h: "4.6rem",
                                borderRightRadius: "10rem",
                                borderLeftRadius: "10rem",
                                bgColor: "white",
                                filter: "drop-shadow(4px 4px 10px #E4EBEE)",
                                ...register("name")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                            children: errors.name && errors.name.message
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    position: "absolute",
                    bottom: "12.9rem",
                    right: "50%",
                    transform: "translateX(50%)",
                    disabled: disabled,
                    variant: "round",
                    onClick: handleSubmit(onSubmit),
                    children: "\u6C7A\u5B9A"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _components_Forms_FormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "E": () => (/* reexport safe */ _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__.E)
/* harmony export */ });
/* harmony import */ var _components_Forms_FormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9787);
/* harmony import */ var _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Forms_FormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_0__, _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__]);
([_components_Forms_FormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_0__, _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ InputDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






(0,react_datepicker__WEBPACK_IMPORTED_MODULE_4__.registerLocale)("ja", date_fns_locale__WEBPACK_IMPORTED_MODULE_5__.ja);
const InputDate = ({ name , control  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
        control: control,
        name: name,
        render: ({ field: { onChange , value =[
            null,
            null
        ]  }  })=>{
            const v = value;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {
                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_5__.ja,
                selectsRange: true,
                dateFormat: "yyyy/MM/dd",
                onChange: onChange,
                startDate: v[0],
                endDate: v[1],
                withPortal: true
            });
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* reexport safe */ _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "q": () => (/* reexport safe */ _hooks_form_useFormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3007);
/* harmony import */ var _hooks_form_useFormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3887);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_0__, _hooks_form_useFormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_1__]);
([_hooks_form_useFormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_0__, _hooks_form_useFormCreateUpdateUser__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _hooks_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__, _hooks_upload__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__, _hooks_upload__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    title: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("\u65C5\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
    date: yup__WEBPACK_IMPORTED_MODULE_2__.array(),
    thumbnail: yup__WEBPACK_IMPORTED_MODULE_2__.string().nullable(),
    links: yup__WEBPACK_IMPORTED_MODULE_2__.array().of(yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        category: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("\u30AB\u30C6\u30B4\u30EA\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
        url: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("url\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")// urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
            message: "\u5229\u7528\u53EF\u80FD\u306AURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
        }),
        label: yup__WEBPACK_IMPORTED_MODULE_2__.string()
    }))
});
const useFormCreateUpdateLinks = (travelinkData, userData)=>{
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const [isUploading, setIsUploading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const traveliId = router.query.traveliId;
    const formatedDate = travelinkData?.date.map((item)=>{
        return item ? item.toDate() : null;
    });
    const { register , control , handleSubmit , setValue , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(schema),
        defaultValues: {
            ...travelinkData,
            date: formatedDate ? formatedDate : [
                null,
                null
            ]
        }
    });
    const uploadImage = _hooks_upload__WEBPACK_IMPORTED_MODULE_6__/* .useUploadImage */ .H;
    const createTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useCreateTravelink */ .h0;
    const updateTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateTravelink */ .pz;
    const { fields , append , remove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFieldArray)({
        name: "links",
        control: control
    });
    const handleUploadFile = async (event)=>{
        setIsUploading.on();
        if (event.currentTarget.files) {
            const url = await uploadImage(event.currentTarget.files[0], "links") || "";
            setValue("thumbnail", url);
        }
        setIsUploading.off();
    };
    const currentThumbnail = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useWatch)({
        control,
        name: "thumbnail"
    });
    const currentLinks = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useWatch)({
        control,
        name: "links"
    });
    const onSubmit = async (data)=>{
        const req = data;
        try {
            setDisabled.on();
            !travelinkData ? await create(req) : await update(req);
        } catch (err) {
            console.error(err);
        } finally{
            setDisabled.off();
        }
    };
    const create = async (data)=>{
        if (!userData) return;
        const res = await createTravelink({
            ...data,
            ownerIcon: userData.icon ? userData.icon : "",
            ownerName: userData.name ? userData.name : ""
        }, userData.uid);
        router.push(`/${res}`);
    };
    const update = async (data)=>{
        await updateTravelink(data, traveliId);
        router.push(`/${traveliId}`);
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
        handleUploadFile,
        setValue,
        isUploading,
        currentThumbnail,
        currentLinks
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useFormCreateUpdateUser)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8456);
/* harmony import */ var _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8697);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, _hooks_upload__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, _hooks_upload__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
    icon: yup__WEBPACK_IMPORTED_MODULE_2__.string().nullable()
});
const useFormCreateUpdateUser = (userData)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { isFirst  } = router.query;
    const [isUploading, setIsUploading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)();
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)();
    const createUser = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useCreateUser */ .O2;
    const uploadImage = _hooks_upload__WEBPACK_IMPORTED_MODULE_4__/* .useUploadImage */ .H;
    const updateUser = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateUser */ .Io;
    const { register , handleSubmit , setValue , control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__.yupResolver)(schema),
        defaultValues: {
            name: userData.name,
            icon: userData.icon ?? ""
        }
    });
    const currentIcon = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useWatch)({
        control,
        name: "icon"
    });
    const handleUploadFile = async (event)=>{
        setIsUploading.on();
        if (event.currentTarget.files) {
            const url = await uploadImage(event.currentTarget.files[0], "users") || "";
            setValue("icon", url);
        }
        setIsUploading.off();
    };
    const onSubmit = async (data)=>{
        try {
            setDisabled.on();
            isFirst ? await create(data) : await update(data);
            if (isFirst) {
                router.push("/home");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setDisabled.off();
        }
    };
    const create = async (data)=>{
        await createUser({
            ...data,
            uid: userData.uid,
            isAnonymous: userData.isAnonymous
        });
    };
    const update = async (data)=>{
        await updateUser({
            ...data,
            uid: userData.uid,
            isAnonymous: userData.isAnonymous
        });
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        disabled,
        handleUploadFile,
        isFirst,
        isUploading,
        currentIcon
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useUploadImage)
/* harmony export */ });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_0__]);
firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useUploadImage = async (file, path)=>{
    const firestorage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)();
    const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(firestorage, `images/${path}/${encodeURI(file.name)}`);
    const downloadUrl = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.uploadBytes)(imageRef, file).then(()=>{
        const url = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(imageRef);
        return url;
    });
    return downloadUrl;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;