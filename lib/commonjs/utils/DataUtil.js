"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _default = {
  getAllWallets(_ref) {
    let {
      search
    } = _ref;
    const {
      wallets,
      recommendedWallets
    } = _ExplorerCtrl.ExplorerCtrl.state;
    const _wallets = [...recommendedWallets, ...wallets.listings];
    if (search) {
      return _wallets.filter(wallet => {
        return wallet.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return _wallets;
  }
};
exports.default = _default;
//# sourceMappingURL=DataUtil.js.map