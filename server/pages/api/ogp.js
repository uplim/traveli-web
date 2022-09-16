"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ogp)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: ./src/pages/api/ogp.ts


async function ogp(req, res) {
    const url = getUrlParameter(req);
    if (!url) {
        return;
    }
    try {
        const response = await external_axios_default().get(url);
        const data = response.data;
        const dom = new external_jsdom_namespaceObject.JSDOM(data);
        const title = dom.window.document.title;
        const image = dom.window.document.querySelector("head > meta[property='og:image']")?.getAttribute("content");
        const ogp = {
            title,
            image
        };
        res.status(200).json(ogp);
    } catch (e) {
        errorResponce(res);
    }
};
function isValidUrlParameter(url) {
    return !(url == undefined || url == null || Array.isArray(url));
}
function getUrlParameter(req) {
    const { url  } = req.query;
    if (isValidUrlParameter(url)) {
        return url;
    }
    return null;
}
function errorResponce(res) {
    res.status(400).send("error");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5985));
module.exports = __webpack_exports__;

})();