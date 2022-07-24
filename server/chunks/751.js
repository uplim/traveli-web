"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 5751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ CardLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/components/Cards/CardLink.tsx


const CardLink = ({ label , url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: url,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
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
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Cards/index.ts



/***/ })

};
;