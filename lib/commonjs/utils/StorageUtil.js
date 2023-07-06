"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDeepLinkWallet = exports.removeDeepLinkWallet = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const setDeepLinkWallet = link => {
  return _asyncStorage.default.setItem('WALLETCONNECT_DEEPLINK_CHOICE', JSON.stringify({
    href: link
  }));
};
exports.setDeepLinkWallet = setDeepLinkWallet;
const removeDeepLinkWallet = () => {
  _asyncStorage.default.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
};
exports.removeDeepLinkWallet = removeDeepLinkWallet;
//# sourceMappingURL=StorageUtil.js.map