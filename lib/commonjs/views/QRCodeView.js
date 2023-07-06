"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _valtio = require("valtio");
var _NavHeader = _interopRequireDefault(require("../components/NavHeader"));
var _QRCode = _interopRequireDefault(require("../components/QRCode"));
var _CopyLarge = _interopRequireDefault(require("../assets/CopyLarge"));
var _RouterCtrl = require("../controllers/RouterCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _ThemeCtrl = require("../controllers/ThemeCtrl");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _ToastCtrl = require("../controllers/ToastCtrl");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function QRCodeView(_ref) {
  let {
    onCopyClipboard,
    isPortrait,
    windowHeight,
    windowWidth
  } = _ref;
  const Theme = (0, _useTheme.default)();
  const QRSize = isPortrait ? Math.round(windowWidth * 0.8) : Math.round(windowHeight * 0.6);
  const themeState = (0, _valtio.useSnapshot)(_ThemeCtrl.ThemeCtrl.state);
  const {
    pairingUri
  } = (0, _valtio.useSnapshot)(_WcConnectionCtrl.WcConnectionCtrl.state);
  const onCopy = async () => {
    if (onCopyClipboard && pairingUri) {
      onCopyClipboard(pairingUri);
      _ToastCtrl.ToastCtrl.openToast('Link copied', 'success');
    }
  };
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(_NavHeader.default, {
    title: "Scan the code",
    onBackPress: _RouterCtrl.RouterCtrl.goBack,
    actionIcon: /*#__PURE__*/React.createElement(_CopyLarge.default, {
      width: 22,
      height: 22,
      fill: !pairingUri ? Theme.foreground3 : Theme.accent
    }),
    onActionPress: onCopyClipboard ? onCopy : undefined,
    actionDisabled: !pairingUri
  }), pairingUri ? /*#__PURE__*/React.createElement(_QRCode.default, {
    uri: pairingUri,
    size: QRSize,
    theme: themeState.themeMode
  }) : /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    style: {
      height: QRSize
    },
    color: Theme.accent
  }));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingBottom: 12,
    width: '100%'
  }
});
var _default = QRCodeView;
exports.default = _default;
//# sourceMappingURL=QRCodeView.js.map