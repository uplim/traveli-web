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
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3970);
/* harmony import */ var _hooks_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8144);
/* harmony import */ var _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(628);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3307);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2640);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_5__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_form__WEBPACK_IMPORTED_MODULE_5__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FormCreateUpdateLinks = ({ travelinkData , userData , isOwner  })=>{
    // 次へを押された時に最小化するためのstate
    const { 0: isClickNext , 1: setIsClickNext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(travelinkData ? true : false);
    const { register , handleSubmit , fields , append , remove , control , onSubmit , errors , disabled , image , handleChangeImage , setCategories , categories: categories1 , setValue  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_5__/* .useFormCreateUpdateLinks */ .j)(travelinkData, userData);
    const { inputRef , onClickImage  } = (0,_hooks_input__WEBPACK_IMPORTED_MODULE_6__/* .useInputImage */ .U)();
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_8__/* .IconReturn */ .BK, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_7__/* .InputDate */ .U, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VisuallyHiddenInput, {
                        ref: inputRef,
                        type: "file",
                        accept: "image/*",
                        onChange: handleChangeImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        marginTop: "0.8rem",
                        bgImage: image ? URL.createObjectURL(image) : travelinkData ? travelinkData.thumbnail : "",
                        bgRepeat: "no-repeat",
                        bgSize: "cover",
                        bgPosition: "center center",
                        onClick: onClickImage,
                        w: "100%",
                        h: "12.9rem",
                        borderRadius: "1rem",
                        bgColor: "#D2D6E1",
                        filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                            h: "12.9rem",
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_8__/* .IconCamera */ .Lj, {
                                zIndex: 1,
                                w: "4.8rem",
                                h: "4.8rem",
                                color: "white"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                margin: "1.6rem 0 0.8rem 0",
                children: "\u30EA\u30F3\u30AF"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                children: [
                    fields.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_9__/* .CardEditWrapper */ .ak, {
                                categories: categories1,
                                setCategories: setCategories,
                                label: item.label,
                                url: item.url,
                                index: index,
                                register: register,
                                errors: errors.links,
                                setValue: setValue,
                                remove: ()=>{
                                    remove(index);
                                },
                                isClickNext: isClickNext,
                                setIsClickNext: setIsClickNext,
                                isLast: fields.length === index + 1
                            })
                        }, item.id);
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                        align: "center",
                        justify: "center",
                        marginTop: "1.6rem",
                        color: "brandBlue",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                bgImage: "/images/plus.svg",
                                w: "2.4rem",
                                h: "2.4rem"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                as: "button",
                                fontSize: "md",
                                type: "button",
                                onClick: ()=>{
                                    // onChangeでsetStateしているので、初期値はこの段階で入れる
                                    setCategories((categories)=>[
                                            ...categories,
                                            "\u305D\u306E\u4ED6"
                                        ]
                                    );
                                    // 次のやつ以外閉じる
                                    setIsClickNext(true);
                                    append({
                                        url: "",
                                        label: ""
                                    });
                                },
                                children: "\u30EA\u30B9\u30C8\u306E\u8FFD\u52A0"
                            })
                        ]
                    }),
                    (isOwner || !travelinkData) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
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
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                justify: "center",
                margin: "3rem 0 3.5rem 0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .zx, {
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

/***/ 1619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ FormUserProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3307);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3970);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FormUserProfile = ({ data  })=>{
    const { register , handleSubmit , onSubmit , errors , disabled , handleChangeImage , image , history  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_5__/* .useFormCreateUpdateUser */ .q)(data);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onClickButton = ()=>{
        inputRef.current?.click();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
            as: "form",
            height: "100vh",
            position: "relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                    w: "100%",
                    h: "6.3rem",
                    justify: "center",
                    align: "center",
                    children: [
                        history !== "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/home",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                "aria-label": "return",
                                size: "lg",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_4__/* .IconReturn */ .BK, {
                                    w: "2.2rem",
                                    h: "2.2rem"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            color: "black",
                            fontSize: "md",
                            fontWeight: "bold",
                            children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            w: "2.2rem",
                            h: "2.2rem"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                    align: "center",
                    justify: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        borderRadius: "50%",
                        filter: "drop-shadow(4px 4px 10px #E4EBEE);",
                        marginBottom: "2.4rem",
                        bgColor: "base",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                            src: image ? URL.createObjectURL(image) : data.icon,
                            w: "12.9rem",
                            h: "12.9rem",
                            onClick: onClickButton
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VisuallyHiddenInput, {
                    onChange: handleChangeImage,
                    ref: inputRef,
                    id: "icon",
                    type: "file",
                    accept: "image/*"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                    isInvalid: errors.name ? true : false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                            htmlFor: "name",
                            fontSize: "md",
                            children: "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormErrorMessage, {
                            children: errors.name && errors.name.message
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
/* harmony export */   "E": () => (/* reexport safe */ _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "r": () => (/* reexport safe */ _components_Forms_FormUserProfile__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _components_Forms_FormUserProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1619);
/* harmony import */ var _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Forms_FormUserProfile__WEBPACK_IMPORTED_MODULE_0__, _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__]);
([_components_Forms_FormUserProfile__WEBPACK_IMPORTED_MODULE_0__, _components_Forms_FormCreateUpdateLinks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



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

/***/ 3970:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8697);
/* harmony import */ var _hooks_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_6__, _hooks_upload__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_6__, _hooks_upload__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const schema = yup__WEBPACK_IMPORTED_MODULE_3__.object({
    title: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("\u65C5\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
    date: yup__WEBPACK_IMPORTED_MODULE_3__.array(),
    links: yup__WEBPACK_IMPORTED_MODULE_3__.array().of(yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
        url: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("url\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")// urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
            message: "\u5229\u7528\u53EF\u80FD\u306AURL\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
        }),
        label: yup__WEBPACK_IMPORTED_MODULE_3__.string()
    }))
});
const useFormCreateUpdateLinks = (travelinkData, userData)=>{
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBoolean)();
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(travelinkData ? travelinkData.links.map((link)=>link.category
    ) : []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const traveliId1 = router.query.traveliId;
    const formatedDate = travelinkData?.date.map((item)=>{
        return item ? item.toDate() : null;
    });
    const { register , control , handleSubmit , setValue , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(schema),
        defaultValues: {
            ...travelinkData,
            date: formatedDate ? formatedDate : [
                null,
                null
            ]
        }
    });
    const { uploadImage , image , handleChangeImage , isImageChanged  } = (0,_hooks_upload__WEBPACK_IMPORTED_MODULE_7__/* .useUploadImage */ .H)();
    const createTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_6__/* .useCreateTravelink */ .h0;
    const updateTravelink = _hooks_firestore__WEBPACK_IMPORTED_MODULE_6__/* .useUpdateTravelink */ .pz;
    const { fields , append , remove  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
        name: "links",
        control: control
    });
    const onSubmit = async (data)=>{
        const mergeCategoriesIntoLinks = data.links.map((link, index)=>{
            link.category = categories[index];
            return link;
        });
        const req = {
            ...data,
            links: mergeCategoriesIntoLinks
        };
        try {
            setDisabled.on();
            // 画像に変更が入っていたらrequest bodyに画像を含める
            if (image && isImageChanged) {
                const downloadUrl = await uploadImage(image);
                req.thumbnail = downloadUrl;
            }
            !travelinkData ? await create(req) : await update(req, traveliId1);
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
    const update = async (data, traveliId)=>{
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
        handleChangeImage,
        image,
        categories,
        setCategories,
        setValue
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
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7658);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, _hooks_upload__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, _hooks_upload__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")
});
const useFormCreateUpdateUser = (userData)=>{
    const [history, setHistory] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_7__/* .historyState */ .f);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [disabled, setDisabled] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBoolean)();
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__.yupResolver)(schema),
        defaultValues: {
            name: userData.name
        }
    });
    const { uploadImage , image , handleChangeImage , isImageChanged  } = (0,_hooks_upload__WEBPACK_IMPORTED_MODULE_4__/* .useUploadImage */ .H)();
    const updateUser = _hooks_firestore__WEBPACK_IMPORTED_MODULE_5__/* .useUpdateUser */ .Io;
    const onSubmit = async (data)=>{
        const req = data;
        try {
            setDisabled.on();
            // 画像に変更が入っていたらrequest bodyに画像を含める
            if (image && isImageChanged) {
                const downloadUrl = await uploadImage(image);
                req.icon = downloadUrl;
            }
            await updateUser(req, userData.uid);
        } catch (err) {
            console.error(err);
        } finally{
            if (history === "/") {
                setHistory("/user");
                router.push("/home");
            }
            setDisabled.off();
        }
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        disabled,
        handleChangeImage,
        image,
        history
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ useInputImage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/input/useInputImage.ts

const useInputImage = ()=>{
    const inputRef = (0,external_react_.useRef)(null);
    const onClickImage = ()=>{
        inputRef.current?.click();
    };
    return {
        inputRef,
        onClickImage
    };
};

;// CONCATENATED MODULE: ./src/hooks/input/index.ts



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

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;