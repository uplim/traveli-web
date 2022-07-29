"use strict";
exports.id = 468;
exports.ids = [468];
exports.modules = {

/***/ 9468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ry": () => (/* reexport */ CardEdit),
  "ak": () => (/* reexport */ CardEditWrapper),
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
                marginBottom: "1rem",
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

;// CONCATENATED MODULE: ./src/components/Cards/CardEdit.tsx


const CardEdit = ({ label , index , register , remove , errors , setCurrentLabel , setIsMinimum  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                marginTop: "0.4rem",
                padding: "1.4rem 1.6rem 0 1.6rem",
                w: "100%",
                h: "27.4rem",
                borderRadius: "1.5rem",
                bgColor: "white",
                filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                            bgColor: "#E8ECF0",
                                            borderRadius: "full",
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
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: "\u30AB\u30C6\u30B4\u30EA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                    isInvalid: !!errors,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                            h: "1.6rem",
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
                                            children: errors?.[index] && errors?.[index].url?.message
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                                    display: "flex",
                                    h: "1.6rem",
                                    fontSize: "sm",
                                    color: "#2D2D2D",
                                    mt: "1.6rem",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            children: "\u30E9\u30D9\u30EB"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
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
                                    defaultValue: label,
                                    onChange: (e)=>{
                                        setCurrentLabel(e.target.value);
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Cards/CardEditWrapper.tsx




const CardEditWrapper = ({ label , index , remove , register , errors  })=>{
    const { 0: isMinimum , 1: setIsMinimum  } = (0,external_react_.useState)(false);
    const { 0: currentLabel , 1: setCurrentLabel  } = (0,external_react_.useState)(label);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isMinimum ? /*#__PURE__*/ jsx_runtime_.jsx(CardLink, {
            label: currentLabel,
            setIsMinimum: setIsMinimum,
            errors: errors,
            index: index
        }) : /*#__PURE__*/ jsx_runtime_.jsx(CardEdit, {
            label: currentLabel,
            index: index,
            register: register,
            errors: errors,
            remove: ()=>{
                remove();
            },
            setCurrentLabel: setCurrentLabel,
            setIsMinimum: setIsMinimum
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Cards/index.ts





/***/ })

};
;