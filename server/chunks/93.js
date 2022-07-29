"use strict";
exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 7768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "hR": () => (/* reexport */ ButtonIconRound),
  "qW": () => (/* reexport */ ButtonViewChange)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Buttons/Button.tsx


const Button = (0,react_.forwardRef)(({ children , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        ...props,
        ref: ref,
        children: children
    });
});

// EXTERNAL MODULE: ./src/components/Icons/index.ts + 11 modules
var Icons = __webpack_require__(553);
;// CONCATENATED MODULE: ./src/components/Buttons/ButtonIconRound.tsx




const ButtonIconRound = (0,react_.forwardRef)(({ iconType , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: iconType === "plus" ? /*#__PURE__*/ jsx_runtime_.jsx(Button, {
            ...props,
            ref: ref,
            variant: "iconRound",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconPlus */.SC, {
                w: "2.4rem",
                h: "2.4rem",
                color: "white"
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
            ...props,
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

;// CONCATENATED MODULE: ./src/components/Buttons/ButtonViewChange.tsx



const ButtonViewChange = ({ ...props })=>{
    const [isListView, setIsListView] = (0,react_.useBoolean)(false);
    const onSubmit = ()=>{
        if (isListView) {
            setIsListView.off();
        } else {
            setIsListView.on();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isListView ? /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconViewList */.d8, {
            ...props,
            w: "2.5rem",
            h: "2.5rem",
            onClick: onSubmit
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconViewGrid */.MS, {
            ...props,
            w: "2.5rem",
            h: "2.5rem",
            onClick: onSubmit
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Buttons/index.ts





/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ry": () => (/* reexport */ CardEdit),
  "ak": () => (/* reexport */ CardEditWrapper),
  "ni": () => (/* reexport */ CardHome),
  "YS": () => (/* reexport */ CardLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Cards/CardLink.tsx


const CardLink = ({ label , url , setIsMinimum , errors , index  })=>{
    const onClick = ()=>{
        if (url) window.open(url);
        if (setIsMinimum) setIsMinimum(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                position: "relative",
                top: 0,
                left: 0,
                w: "100%",
                h: "5.2rem",
                borderRadius: "10rem",
                bgColor: "white",
                filter: "drop-shadow(4px 4px 10px #E4EBEE)",
                align: "center",
                mt: "1rem",
                onClick: onClick,
                cursor: "pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        backgroundColor: "gray",
                        borderRadius: "100%",
                        w: "3.8rem",
                        h: "3.8rem",
                        marginLeft: "0.7rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
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
            }),
            index !== undefined && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormControl, {
                isInvalid: !!errors,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                    children: errors?.[index].url?.message
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./src/components/Icons/index.ts + 11 modules
var Icons = __webpack_require__(553);
;// CONCATENATED MODULE: ./src/components/Cards/CardHome.tsx






const CardHome = ({ data  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: router.basePath + data.id,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            as: "a",
            display: "block",
            w: "100%",
            h: "23.9rem",
            borderRadius: "10",
            filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
            bgColor: "white",
            marginTop: "2.2rem",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    bgImage: data.thumbnail,
                    h: "12.9rem",
                    borderTopRadius: "10"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    paddingTop: "1.1rem",
                    paddingLeft: "1.8rem",
                    paddingRight: "1.8rem",
                    borderBottomRadius: "10",
                    children: [
                        data.date[0] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            fontSize: "xs",
                            color: "gray",
                            children: [
                                data.date[0] && (0,external_date_fns_.format)(data.date[0].toDate(), "yyyy/MM/dd"),
                                "~",
                                data.date[1] && (0,external_date_fns_.format)(data.date[1].toDate(), "yyyy/MM/dd")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                paddingTop: "0.6rem",
                                paddingBottom: "1.4rem",
                                fontSize: "lg",
                                children: data.title
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            alignContent: "baseline",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                            w: "2.4rem",
                                            h: "2.4rem",
                                            src: data.ownerIcon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            paddingLeft: "1rem",
                                            fontSize: "md",
                                            children: data.ownerName
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: router.basePath + "/user",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* IconLink */.JH, {
                                        w: "2rem",
                                        h: "2rem",
                                        color: "gray"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }, data.id);
};

;// CONCATENATED MODULE: ./src/hooks/radio/useRadioCategory.ts

const useRadioCategory = (categories1, setCategories, index)=>{
    const categoryOptions = [
        "\u5834\u6240",
        "\u98DF\u4E8B",
        "\u305D\u306E\u4ED6"
    ];
    const onChangeHandler = (value)=>{
        setCategories((categories)=>{
            const cpCategories = categories;
            cpCategories.splice(index, 1, value);
            return cpCategories;
        });
    };
    const { getRootProps , getRadioProps  } = (0,react_.useRadioGroup)({
        name: "category",
        defaultValue: categories1[index],
        onChange: onChangeHandler
    });
    const group = getRootProps();
    return {
        categoryOptions,
        getRadioProps,
        group
    };
};

;// CONCATENATED MODULE: ./src/hooks/radio/index.ts


;// CONCATENATED MODULE: ./src/components/Radios/RadioCategoryList.tsx




const RadioCategoryList = ({ categories , setCategories , index  })=>{
    const { categoryOptions , getRadioProps , group  } = useRadioCategory(categories, setCategories, index);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
        ...group,
        children: categoryOptions.map((value)=>{
            const radio = getRadioProps({
                value
            });
            return /*#__PURE__*/ jsx_runtime_.jsx(RadioCategoryItem, {
                radio: radio,
                children: value
            }, value);
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Radios/RadioCategoryItem.tsx



const RadioCategoryItem = ({ radio , children  })=>{
    const { getInputProps , getCheckboxProps  } = (0,react_.useRadio)(radio);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "label",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ...input
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                ...checkbox,
                cursor: "pointer",
                borderWidth: "1px",
                borderRadius: "full",
                borderColor: "#ACC1CA",
                bg: "white",
                _checked: {
                    bg: "brandBlue",
                    color: "white",
                    borderColor: "brandBlue"
                },
                _focus: {
                    boxShadow: "outline"
                },
                px: 5,
                py: 3,
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Radios/index.ts



;// CONCATENATED MODULE: ./src/components/Cards/CardEdit.tsx



const CardEdit = ({ index , register , remove , errors , setCurrentLabel , setIsMinimum , categories: categories1 , setCategories  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        marginTop: "1rem",
        padding: "1.4rem 1.6rem 1.4rem 1.6rem",
        w: "100%",
        borderRadius: "1.5rem",
        bgColor: "white",
        filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        position: "absolute",
                        right: "1.2rem",
                        zIndex: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                    w: "3.6rem",
                                    h: "3.6rem",
                                    align: "center",
                                    justify: "center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        bgImage: "/images/menuButton.svg",
                                        w: "2.4rem",
                                        h: "2.4rem"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        padding: "1.35rem 0 0 2.4rem",
                        w: "16.8rem",
                        h: "8.8rem",
                        borderColor: "#CBD5E0",
                        borderRadius: "1.5rem",
                        boxShadow: 0,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuItem, {
                                display: "flex",
                                padding: "0 0 1.35rem 0",
                                // TODO: useState
                                onClick: ()=>setIsMinimum(true)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        bgImage: "/images/closeMenu.svg",
                                        w: "1.5rem",
                                        h: "1.5rem",
                                        marginRight: "1.6rem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        fontSize: "sm",
                                        children: "\u8868\u793A\u3092\u6700\u5C0F\u5316"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuItem, {
                                display: "flex",
                                padding: 0,
                                onClick: ()=>{
                                    // stateのカテゴリーも一緒に削除する
                                    // TODO: これもRHFで管理する
                                    setCategories((categories)=>{
                                        const cpCategories = categories;
                                        cpCategories.splice(index, 1);
                                        return cpCategories;
                                    });
                                    remove();
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        bgImage: "/images/trash.svg",
                                        w: "1.68rem",
                                        h: "1.68rem",
                                        marginRight: "1.6rem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "\u30AB\u30C6\u30B4\u30EA\u30FC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RadioCategoryList, {
                        categories: categories1,
                        index: index,
                        setCategories: setCategories
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                mt: "1.6rem",
                isInvalid: !!errors,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: "URL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        marginTop: "0.3rem",
                        variant: "outline",
                        borderColor: "#ACC1CA",
                        w: "100%",
                        h: "4.4rem",
                        borderRightRadius: "10rem",
                        borderLeftRadius: "10rem",
                        isInvalid: errors?.[index] ? true : false,
                        ...register(`links.${index}.url`),
                        placeholder: "https://"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        mb: "1rem",
                        children: errors?.[index] && errors?.[index].url?.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                mt: "1.6rem",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                        fontSize: "sm",
                        color: "#2D2D2D",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                display: "inline",
                                children: "\u30E9\u30D9\u30EB"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "span",
                                display: "inline",
                                color: "gray",
                                children: "\uFF08\u4EFB\u610F\uFF09"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        marginTop: "0.3rem",
                        variant: "outline",
                        borderColor: "#ACC1CA",
                        w: "100%",
                        h: "4.4rem",
                        borderRightRadius: "10rem",
                        borderLeftRadius: "10rem",
                        ...register(`links.${index}.label`),
                        onChange: (e)=>{
                            setCurrentLabel(e.target.value);
                        },
                        placeholder: "\u4F8B\uFF09\u5BBF\u6CCA\u5148"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Cards/CardEditWrapper.tsx




const CardEditWrapper = ({ label , index , remove , register , errors , setCategories , categories  })=>{
    const { 0: isMinimum , 1: setIsMinimum  } = (0,external_react_.useState)(false);
    const { 0: currentLabel , 1: setCurrentLabel  } = (0,external_react_.useState)(label);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isMinimum ? /*#__PURE__*/ jsx_runtime_.jsx(CardLink, {
            label: currentLabel,
            setIsMinimum: setIsMinimum,
            errors: errors,
            index: index
        }) : /*#__PURE__*/ jsx_runtime_.jsx(CardEdit, {
            index: index,
            register: register,
            errors: errors,
            remove: ()=>{
                remove();
            },
            setCurrentLabel: setCurrentLabel,
            setIsMinimum: setIsMinimum,
            categories: categories,
            setCategories: setCategories
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Cards/index.ts






/***/ }),

/***/ 6500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ IconHelp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const IconHelp = ({ ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        })
    });
};


/***/ }),

/***/ 5050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ IconSignOut)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const IconSignOut = ({ ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            })
        })
    });
};


/***/ }),

/***/ 4673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ IconUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const IconUser = ({ ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            })
        })
    });
};


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lj": () => (/* reexport */ IconCamera),
  "yl": () => (/* reexport */ IconEdit),
  "JH": () => (/* reexport */ IconLink),
  "dc": () => (/* reexport */ IconMenu),
  "SC": () => (/* reexport */ IconPlus),
  "G1": () => (/* reexport */ IconQr),
  "BK": () => (/* reexport */ IconReturn),
  "FO": () => (/* reexport */ IconShare),
  "MS": () => (/* reexport */ IconViewGrid),
  "d8": () => (/* reexport */ IconViewList)
});

// UNUSED EXPORTS: IconHelp, IconSave, IconSignOut, IconUser

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

// EXTERNAL MODULE: ./src/components/Icons/IconHelp.tsx
var IconHelp = __webpack_require__(6500);
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
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            })
        })
    });
};

// EXTERNAL MODULE: ./src/components/Icons/IconSignOut.tsx
var IconSignOut = __webpack_require__(5050);
// EXTERNAL MODULE: ./src/components/Icons/IconUser.tsx
var IconUser = __webpack_require__(4673);
;// CONCATENATED MODULE: ./src/components/Icons/IconViewGrid.tsx


const IconViewGrid = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Icons/IconViewList.tsx


const IconViewList = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
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
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
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
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "profiles", currentUser.uid, "bookmarks"), traveliId);
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
    const subColRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "profiles", uid, "bookmarks"), traveliId);
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
    const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, "profiles", uid, "bookmarks"), traveliId);
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
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useGetBookmarkList = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: bookmarkList , 1: setBookmarkList  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        const loadBookmarkList = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "profiles", currentUser.uid, "bookmarks");
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
/* harmony export */   "BH": () => (/* reexport safe */ _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_6__.B),
/* harmony export */   "Ef": () => (/* reexport safe */ _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_8__.E),
/* harmony export */   "Mt": () => (/* reexport safe */ _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   "O_": () => (/* reexport safe */ _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "h0": () => (/* reexport safe */ _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_2__.h),
/* harmony export */   "mw": () => (/* reexport safe */ _hooks_firestore_profile_useGetOwnerProfile__WEBPACK_IMPORTED_MODULE_4__.m),
/* harmony export */   "no": () => (/* reexport safe */ _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "pz": () => (/* reexport safe */ _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   "qM": () => (/* reexport safe */ _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_5__.q)
/* harmony export */ });
/* harmony import */ var _hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9675);
/* harmony import */ var _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9001);
/* harmony import */ var _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6980);
/* harmony import */ var _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2489);
/* harmony import */ var _hooks_firestore_profile_useGetOwnerProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8323);
/* harmony import */ var _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1931);
/* harmony import */ var _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3546);
/* harmony import */ var _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9679);
/* harmony import */ var _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_2__, _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore_profile_useGetOwnerProfile__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_5__, _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_6__, _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_7__, _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_firestore_travelink_useGetTravelink__WEBPACK_IMPORTED_MODULE_0__, _hooks_firestore_travelink_useGetTravelinkList__WEBPACK_IMPORTED_MODULE_1__, _hooks_firestore_travelink_useCreateTravelink__WEBPACK_IMPORTED_MODULE_2__, _hooks_firestore_travelink_useUpdateTravelink__WEBPACK_IMPORTED_MODULE_3__, _hooks_firestore_profile_useGetOwnerProfile__WEBPACK_IMPORTED_MODULE_4__, _hooks_firestore_bookmark_useCreateBookmark__WEBPACK_IMPORTED_MODULE_5__, _hooks_firestore_bookmark_useGetBookmarkList__WEBPACK_IMPORTED_MODULE_6__, _hooks_firestore_bookmark_useDeleteBookmark__WEBPACK_IMPORTED_MODULE_7__, _hooks_firestore_bookmark_useCheckBookmarked__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// travelink




//

// bookmark





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useGetOwnerProfile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useGetOwnerProfile = ()=>{
    const currentUser = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_recoil_atoms__WEBPACK_IMPORTED_MODULE_3__/* .currentUserState */ .y);
    const { 0: ownerProfile , 1: setOwnerProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentUser) return;
        const loadOwnerProfile = async ()=>{
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
            const ownerProfileRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "profiles", currentUser.uid);
            const ownerProfileDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(ownerProfileRef);
            if (!ownerProfileDoc.exists()) {
                return;
            }
            const getOwnerProfile = ownerProfileDoc.data();
            setOwnerProfile(getOwnerProfile);
        };
        loadOwnerProfile();
    }, []);
    return {
        ownerProfile
    };
};

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
/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3125);
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