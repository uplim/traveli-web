"use strict";
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 6995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ni": () => (/* reexport */ CardHome),
  "YS": () => (/* reexport */ CardLink),
  "fY": () => (/* reexport */ CardLinkEdit),
  "Pf": () => (/* reexport */ CardLinkEditList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Cards/CardLink.tsx


const CardLink = ({ label , url , category: category1  })=>{
    const onClick = ()=>{
        if (url) window.open(url);
    };
    const handleCategoryIcon = (category)=>{
        if (category === "\u98DF\u4E8B") return "/images/icons/food.svg";
        if (category === "\u5834\u6240") return "/images/icons/place.svg";
        return "/images/icons/other.svg";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
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
                borderRadius: "100%",
                w: "2.8rem",
                h: "2.8rem",
                marginLeft: "1.2rem",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    alt: "",
                    src: handleCategoryIcon(category1)
                })
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
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./src/components/Buttons/index.ts + 3 modules
var Buttons = __webpack_require__(2770);
;// CONCATENATED MODULE: ./src/components/Cards/CardHome.tsx





const CardHome = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/${data.id}`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
            display: "block",
            w: "100%",
            h: "23.9rem",
            borderRadius: "10",
            filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
            bgColor: "white",
            marginTop: "2.2rem",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    bgImage: data.thumbnail ? data.thumbnail : "/images/noImage_icon_lg.png",
                    bgSize: "cover",
                    bgRepeat: "no-repeat",
                    bgPosition: "center center",
                    w: "100%",
                    h: "12.9rem",
                    borderTopRadius: "10"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    justify: "space-between",
                    children: [
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
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                    alignContent: "baseline",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
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
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Buttons/* Button */.zx, {
                            mt: "1.6rem",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                w: "3.6rem",
                                h: "3.6rem",
                                align: "center",
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    bgImage: "/images/icons/homeMenu.svg",
                                    w: "2.4rem",
                                    h: "2.4rem"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }, data.id);
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Cards/CardLinkEditList.tsx




const CardLinkEditList = ({ fileds , errors , register , append , remove , currentLinks , setValue  })=>{
    // リンクを追加ボタンを押すと、今開いてるeditは全部閉じたい
    const { 0: isClickNext , 1: setIsClickNext  } = (0,external_react_.useState)(currentLinks ? true : false);
    const defaultLinks = {
        category: "\u305D\u306E\u4ED6",
        url: "",
        label: ""
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            fileds.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CardLinkEdit, {
                    remove: remove,
                    error: errors?.[index],
                    register: register,
                    index: index,
                    isClickNext: isClickNext,
                    fields: fileds,
                    currentLink: !currentLinks ? defaultLinks : currentLinks[index],
                    setIsClickNext: setIsClickNext,
                    setValue: setValue
                }, item.id)
            ),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                justify: "center",
                marginTop: "1.6rem",
                color: "brandBlue",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        bgImage: "/images/plus.svg",
                        w: "2.4rem",
                        h: "2.4rem"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "button",
                        fontSize: "md",
                        type: "button",
                        onClick: ()=>{
                            append({
                                url: "",
                                label: "",
                                category: "\u305D\u306E\u4ED6"
                            });
                            setIsClickNext(true);
                        },
                        children: "\u30EA\u30B9\u30C8\u306E\u8FFD\u52A0"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Radios/RadioCategory.tsx



const RadioCategory = ({ name , register  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHiddenInput, {
                        ...register(name),
                        type: "radio",
                        id: `${name}.place`,
                        value: "\u5834\u6240"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        htmlFor: `${name}.place`,
                        display: "block",
                        cursor: "pointer",
                        borderWidth: "1px",
                        borderRadius: "full",
                        borderColor: "#ACC1CA",
                        bg: "white",
                        px: 5,
                        py: 3,
                        children: "\u5834\u6240"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHiddenInput, {
                        ...register(name),
                        type: "radio",
                        id: `${name}.food`,
                        value: "\u98DF\u4E8B"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        htmlFor: `${name}.food`,
                        display: "block",
                        cursor: "pointer",
                        borderWidth: "1px",
                        borderRadius: "full",
                        borderColor: "#ACC1CA",
                        bg: "white",
                        px: 5,
                        py: 3,
                        children: "\u98DF\u4E8B"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHiddenInput, {
                        ...register(name),
                        type: "radio",
                        id: `${name}.other`,
                        value: "\u305D\u306E\u4ED6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                        htmlFor: `${name}.other`,
                        display: "block",
                        cursor: "pointer",
                        borderWidth: "1px",
                        borderRadius: "full",
                        borderColor: "#ACC1CA",
                        bg: "white",
                        px: 5,
                        py: 3,
                        children: "\u305D\u306E\u4ED6"
                    })
                ]
            })
        ]
    });
};
const Box = styled_default()(react_.Box)`
  & {
    input:checked + label {
      background-color: #1a489d;
      color: white;
      border-color: #1a489d;
    }
    input:focus + label {
      box-shadow: outline;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Radios/index.ts


;// CONCATENATED MODULE: ./src/components/Menus/MenuCardLinkEdit.tsx


const MenuCardLinkEdit = ({ setIsMinimum , remove  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
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
                                bgImage: "/images/icons/trash.svg",
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
    });
};

;// CONCATENATED MODULE: ./src/components/Menus/index.ts


;// CONCATENATED MODULE: ./src/hooks/api/useFetchOgp.ts


const useFetchOgp = (setValue, index)=>{
    const { 0: ogp , 1: setOgp  } = (0,external_react_.useState)();
    const [disabled, setDisabled] = (0,react_.useBoolean)();
    const searchOgp = async (url)=>{
        setDisabled.on();
        if (!url) {
            alert("url\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
            setDisabled.off();
            return;
        }
        if (!url.match(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/)) {
            console.log("a");
            alert("url\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093");
            setDisabled.off();
            return;
        }
        try {
            const responce = await fetch(`/api/ogp?url=${url}`, {
                headers: {
                    Accept: "application/json"
                }
            });
            const json = await responce.json();
            setOgp(json);
            if (!json.title) {
                alert("\u30EA\u30F3\u30AF\u5148\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
                return;
            }
            setValue(`links.${index}.label`, json.title);
        } catch (e) {
            alert("\u30EA\u30F3\u30AF\u5148\u306E\u30BF\u30A4\u30C8\u30EB\u304C\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
            console.error(e);
        } finally{
            setDisabled.off();
        }
    };
    return {
        ogp,
        searchOgp,
        disabled
    };
};

;// CONCATENATED MODULE: ./src/hooks/api/index.ts


;// CONCATENATED MODULE: ./src/components/Cards/CardLinkEdit.tsx








const CardLinkEdit = ({ register , error , index , isClickNext , fields , remove , setIsClickNext , currentLink , setValue  })=>{
    const { disabled , searchOgp  } = useFetchOgp(setValue, index);
    const { 0: isMinimum , 1: setIsMinimum  } = (0,external_react_.useState)(false);
    // 次へを押された時、最後の要素以外は最小化する
    if (isClickNext && !isMinimum && fields.length !== index + 1) {
        setIsMinimum(true);
    }
    const onClickHandler = ()=>{
        setIsMinimum(false);
        setIsClickNext(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isMinimum ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
            onClick: onClickHandler,
            isInvalid: !!error,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CardLink, {
                    label: !currentLink.label ? currentLink.url : currentLink.label,
                    category: currentLink.category
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                    pl: "1rem",
                    children: error?.url && error?.url.message
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            marginTop: "1rem",
            padding: "1.4rem 1.6rem 1.4rem 1.6rem",
            w: "100%",
            borderRadius: "1.5rem",
            bgColor: "white",
            filter: "drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MenuCardLinkEdit, {
                    setIsMinimum: setIsMinimum,
                    remove: ()=>remove(index)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                    as: "fieldset",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                            fontSize: "sm",
                            color: "#2D2D2D",
                            children: "\u30AB\u30C6\u30B4\u30EA\u30FC"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RadioCategory, {
                            register: register,
                            name: `links.${index}.category`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                            mb: "1rem",
                            children: error?.category && error?.category.message
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                    mt: "1.6rem",
                    isInvalid: !!error,
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
                            isInvalid: !!error?.url,
                            ...register(`links.${index}.url`),
                            placeholder: "https://"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                            mb: "1rem",
                            children: error?.url && error?.url.message
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                    mt: "1.6rem",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                            fontSize: "sm",
                            color: "#2D2D2D",
                            display: "flex",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                    display: "inline",
                                    children: [
                                        "\u30E9\u30D9\u30EB",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "span",
                                            color: "gray",
                                            children: "\uFF08\u4EFB\u610F\uFF09"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Buttons/* Button */.zx, {
                                    p: "0",
                                    color: "brandBlue",
                                    borderRadius: "none",
                                    disabled: disabled,
                                    onClick: ()=>searchOgp(currentLink.url)
                                    ,
                                    children: "\u81EA\u52D5\u53D6\u5F97"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                    marginTop: "0.3rem",
                                    variant: "outline",
                                    borderColor: "#ACC1CA",
                                    w: "100%",
                                    h: "4.4rem",
                                    borderRightRadius: "10rem",
                                    borderLeftRadius: "10rem",
                                    ...register(`links.${index}.label`),
                                    placeholder: disabled ? "\u53D6\u5F97\u4E2D" : "\u4F8B\uFF09\u5BBF\u6CCA\u5148",
                                    opacity: disabled ? ".5" : "1"
                                }),
                                disabled && /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
                                    position: "absolute",
                                    top: "25%",
                                    left: "40%",
                                    transform: "translate(-50%, -50%)",
                                    speed: ".65s",
                                    emptyColor: "gray",
                                    color: "brandBlue",
                                    width: "2.5rem",
                                    height: "2.5rem"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Cards/index.ts






/***/ })

};
;