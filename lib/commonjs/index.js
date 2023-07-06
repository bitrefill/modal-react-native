"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IProvider", {
  enumerable: true,
  get: function () {
    return _coreTypes.IProvider;
  }
});
Object.defineProperty(exports, "IProviderMetadata", {
  enumerable: true,
  get: function () {
    return _coreTypes.IProviderMetadata;
  }
});
Object.defineProperty(exports, "WalletConnectModal", {
  enumerable: true,
  get: function () {
    return _WalletConnectModal.WalletConnectModal;
  }
});
exports.getWalletImageUrl = void 0;
Object.defineProperty(exports, "useWalletConnect", {
  enumerable: true,
  get: function () {
    return _useWalletConnect.useWalletConnect;
  }
});
Object.defineProperty(exports, "useWalletConnectModal", {
  enumerable: true,
  get: function () {
    return _useWalletConnectModal.useWalletConnectModal;
  }
});
require("react-native-get-random-values");
require("@walletconnect/react-native-compat");
require("@ethersproject/shims");
var _ExplorerCtrl = require("./controllers/ExplorerCtrl");
require("./config/animations");
var _WalletConnectModal = require("./components/WalletConnectModal");
var _useWalletConnectModal = require("./hooks/useWalletConnectModal");
var _coreTypes = require("./types/coreTypes");
var _useWalletConnect = require("./hooks/useWalletConnect");
const getWalletImageUrl = _ExplorerCtrl.ExplorerCtrl.getWalletImageUrl;
exports.getWalletImageUrl = getWalletImageUrl;
//# sourceMappingURL=index.js.map