"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ITEM_HEIGHT = void 0;
var _reactNative = require("react-native");
var _ExplorerUtil = require("../utils/ExplorerUtil");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _UiUtil = require("../utils/UiUtil");
var _Touchable = _interopRequireDefault(require("./Touchable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ITEM_HEIGHT = 80;
exports.ITEM_HEIGHT = ITEM_HEIGHT;
function WalletItem(_ref) {
  let {
    currentWCURI,
    walletInfo,
    style
  } = _ref;
  const Theme = (0, _useTheme.default)();
  const onPress = () => {
    if (currentWCURI) {
      var _walletInfo$mobile, _walletInfo$mobile2;
      _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(((_walletInfo$mobile = walletInfo.mobile) === null || _walletInfo$mobile === void 0 ? void 0 : _walletInfo$mobile.native) || ((_walletInfo$mobile2 = walletInfo.mobile) === null || _walletInfo$mobile2 === void 0 ? void 0 : _walletInfo$mobile2.universal));
      _ExplorerUtil.ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, currentWCURI);
    }
  };
  return /*#__PURE__*/React.createElement(_Touchable.default, {
    onPress: onPress,
    key: walletInfo.id,
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(_reactNative.Image, {
    style: [styles.icon, {
      borderColor: Theme.overlayThin
    }],
    source: {
      uri: _ExplorerCtrl.ExplorerCtrl.getWalletImageUrl(walletInfo.image_id)
    }
  }), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.name, {
      color: Theme.foreground1
    }],
    numberOfLines: 1
  }, _UiUtil.UiUtil.getWalletName(walletInfo.name, true)));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginVertical: 16
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1
  },
  name: {
    marginTop: 5,
    maxWidth: 100,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center'
  }
});
var _default = WalletItem;
exports.default = _default;
//# sourceMappingURL=WalletItem.js.map