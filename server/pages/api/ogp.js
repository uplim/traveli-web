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
  "default": () => (/* binding */ ogp2)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: ./src/pages/api/ogp.ts


/**
 * OGPタグを取得して、そのcontentをJSON形式で返す.
 * 使用例:
 *    endpoint/api/ogp?url="サイトのURL"
 *
 * @param req HTTP request
 * @param res HTTP responce
 */ async function ogp2(req, res) {
    const url = getUrlParameter(req);
    if (!url) {
        errorResponce(res);
        return;
    }
    try {
        const responce = await external_axios_default().get(url);
        const data = responce.data;
        const dom = new external_jsdom_namespaceObject.JSDOM(data);
        const meta = dom.window.document.querySelectorAll("head > meta");
        // metaからOGPを抽出し、JSON形式に変換する
        const ogp1 = Array.from(meta).filter((element)=>element.hasAttribute("property")
        )// eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((pre, ogp)=>{
            const property = ogp.getAttribute("property")?.trim().replace("og:", "");
            const content = ogp.getAttribute("content");
            pre[property ? property : ""] = content;
            return pre;
        }, {});
        res.status(200).json(ogp1);
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