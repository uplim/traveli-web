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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7658);
/* harmony import */ var _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(628);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(553);
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9468);
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7768);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_3__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_form__WEBPACK_IMPORTED_MODULE_3__, _components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const FormCreateUpdateLinks = ({ travelinkData , ownerProfile , isOwner  })=>{
    const { register , handleSubmit , fields , append , remove , control , onSubmit , errors , disabled , image , handleChangeImage  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormCreateUpdateLinks */ .j)(travelinkData, ownerProfile);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onClickButton = ()=>{
        inputRef.current?.click();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "100%",
                h: "6.3rem",
                justify: "center",
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .IconReturn */ .BK, {
                        w: "2.2rem",
                        h: "2.2rem"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        color: "black",
                        fontSize: "md",
                        fontWeight: "bold",
                        children: "\u65B0\u3057\u3044\u30C8\u30E9\u30D9\u30EA\u30F3\u30AF\u3092\u4F5C\u6210"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "2.2rem",
                        h: "2.2rem"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                isInvalid: errors.title ? true : false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        marginTop: "1.5rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u65C5\u306E\u540D\u524D"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                        children: errors.title && errors.title.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                isInvalid: errors.date ? true : false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        marginTop: "1.6rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u65E5\u6642\uFF08\u4EFB\u610F\uFF09"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Inputs_InputDate__WEBPACK_IMPORTED_MODULE_4__/* .InputDate */ .U, {
                        control: control,
                        name: "date"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                        marginTop: "1.6rem",
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u30B5\u30E0\u30CD\u30A4\u30EB\u753B\u50CF\uFF08\u4EFB\u610F\uFF09"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VisuallyHiddenInput, {
                        ref: inputRef,
                        type: "file",
                        accept: "image/*",
                        onChange: handleChangeImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        marginTop: "0.8rem",
                        bgImage: image ? URL.createObjectURL(image) : "",
                        onClick: onClickButton,
                        w: "100%",
                        h: "12.9rem",
                        borderRadius: "1rem",
                        bgColor: "#D2D6E1",
                        filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            h: "12.9rem",
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__/* .IconCamera */ .Lj, {
                                zIndex: 1,
                                w: "4.8rem",
                                h: "4.8rem",
                                color: "white"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                margin: "1.6rem 0 0.8rem 0",
                children: "\u30EA\u30F3\u30AF"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                children: [
                    fields.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_6__/* .CardEditWrapper */ .ak, {
                                label: item.label,
                                url: item.url,
                                index: index,
                                register: register,
                                errors: errors.links,
                                remove: ()=>{
                                    remove(index);
                                }
                            })
                        }, item.id);
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        align: "center",
                        justify: "center",
                        marginTop: "1.6rem",
                        color: "brandBlue",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                bgImage: "/images/plus.svg",
                                w: "2.4rem",
                                h: "2.4rem"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                as: "button",
                                fontSize: "md",
                                type: "button",
                                onClick: ()=>{
                                    append({
                                        url: "",
                                        label: ""
                                    });
                                },
                                children: "\u30EA\u30B9\u30C8\u306E\u8FFD\u52A0"
                            })
                        ]
                    }),
                    (isOwner || !travelinkData) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "3rem",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                                children: "\u4ED6\u306E\u30E6\u30FC\u30B6\u306B\u7DE8\u96C6\u3092\u8A31\u53EF\u3059\u308B"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                justify: "center",
                margin: "3rem 0 3.5rem 0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
                    disabled: disabled,
                    variant: "round",
                    onClick: handleSubmit(onSubmit),
                    children: !travelinkData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "\u4F5C\u6210\u3059\u308B"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "\u5909\u66F4\u3059\u308B"
                    })
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(553);
/* harmony import */ var _hooks_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7658);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_form__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FormUserProfile = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { onSubmit , handleSubmit , register , handleChangeIcon , error , iconUrl , name , image , disabled  } = (0,_hooks_form__WEBPACK_IMPORTED_MODULE_4__/* .useCreateUpdateUserProfile */ .t)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const onClickButton = ()=>{
        inputRef.current?.click();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            as: "form",
            height: "100vh",
            position: "relative",
            children: [
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                    children: "\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    w: "100%",
                    h: "6.3rem",
                    justify: "center",
                    align: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: router.basePath + "/home",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                "aria-label": "return",
                                size: "lg",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .IconReturn */ .BK, {
                                    w: "2.2rem",
                                    h: "2.2rem"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            color: "black",
                            fontSize: "md",
                            fontWeight: "bold",
                            children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            w: "2.2rem",
                            h: "2.2rem"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                borderRadius: "50%",
                                filter: "drop-shadow(4px 4px 10px #E4EBEE);",
                                marginBottom: "2.4rem",
                                bgColor: "base",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                    src: image ? URL.createObjectURL(image) : iconUrl,
                                    w: "12.9rem",
                                    h: "12.9rem",
                                    onClick: onClickButton
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHiddenInput, {
                            onChange: handleChangeIcon,
                            ref: inputRef,
                            id: "icon",
                            type: "file",
                            accept: "image/*"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                            htmlFor: "name",
                            fontSize: "md",
                            children: "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                variant: "filled",
                                w: "34.4rem",
                                h: "4.6rem",
                                borderRightRadius: "10rem",
                                borderLeftRadius: "10rem",
                                bgColor: "white",
                                filter: "drop-shadow(4px 4px 10px #E4EBEE)",
                                id: "name",
                                defaultValue: name,
                                ...register("name")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/***/ 7658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
const useFormCreateUpdateLinks = (travelinkData, ownerProfile)=>{
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
            !travelinkData ? await create(req, currentUser1) : await update(req, traveliId1);
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
        image
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