"use strict";
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 7658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ currentUserState),
  "f": () => (/* reexport */ historyState)
});

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./src/recoil/keys.ts
var AtomKeys;
(function(AtomKeys) {
    AtomKeys["CURRENT_USER_STATE"] = "userState";
    AtomKeys["ROUTE_HISTORY"] = "history";
})(AtomKeys || (AtomKeys = {}));

;// CONCATENATED MODULE: ./src/recoil/atoms/user.ts


// undefined またログインが完了していない状態
// null ログイン確認をした結果、ログインしていない状態
const currentUserState = (0,external_recoil_.atom)({
    key: AtomKeys.CURRENT_USER_STATE,
    default: undefined
});

;// CONCATENATED MODULE: ./src/recoil/atoms/history.ts


const historyState = (0,external_recoil_.atom)({
    key: AtomKeys.ROUTE_HISTORY,
    default: undefined
});

;// CONCATENATED MODULE: ./src/recoil/atoms/index.ts




/***/ })

};
;