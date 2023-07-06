"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _valtio = require("valtio");
var _WalletItem = _interopRequireDefault(require("../components/WalletItem"));
var _ViewAllBox = _interopRequireDefault(require("../components/ViewAllBox"));
var _QRCode = _interopRequireDefault(require("../assets/QRCode"));
var _NavHeader = _interopRequireDefault(require("../components/NavHeader"));
var _RouterCtrl = require("../controllers/RouterCtrl");
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _OptionsCtrl = require("../controllers/OptionsCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _UiUtil = require("../utils/UiUtil");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function InitialExplorer(_ref) {
  let {
    windowHeight,
    isPortrait
  } = _ref;
  const Theme = (0, _useTheme.default)();
  const {
    isDataLoaded
  } = (0, _valtio.useSnapshot)(_OptionsCtrl.OptionsCtrl.state);
  const {
    pairingUri
  } = (0, _valtio.useSnapshot)(_WcConnectionCtrl.WcConnectionCtrl.state);
  const {
    recommendedWallets
  } = (0, _valtio.useSnapshot)(_ExplorerCtrl.ExplorerCtrl.state);
  const loading = (0, _react.useMemo)(() => !isDataLoaded || !pairingUri, [isDataLoaded, pairingUri]);
  (0, _react.useEffect)(() => {
    if (!loading) {
      _UiUtil.UiUtil.layoutAnimation();
    }
  }, [loading]);
  const wallets = (0, _react.useMemo)(() => {
    return recommendedWallets.slice(0, 7);
  }, [recommendedWallets]);
  const viewAllButtonWallets = (0, _react.useMemo)(() => {
    return recommendedWallets.slice(-4);
  }, [recommendedWallets]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_NavHeader.default, {
    title: "Connect your wallet",
    onActionPress: () => _RouterCtrl.RouterCtrl.push('Qrcode'),
    actionIcon: /*#__PURE__*/React.createElement(_QRCode.default, {
      width: 22,
      height: 22,
      fill: Theme.accent
    })
  }), loading ? /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    style: {
      height: Math.round(windowHeight * 0.2)
    },
    color: Theme.accent
  }) : /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.explorerContainer
  }, wallets.map(item => /*#__PURE__*/React.createElement(_WalletItem.default, {
    walletInfo: item,
    key: item.id,
    currentWCURI: pairingUri,
    style: isPortrait && styles.wallet
  })), /*#__PURE__*/React.createElement(_ViewAllBox.default, {
    onPress: () => _RouterCtrl.RouterCtrl.push('WalletExplorer'),
    wallets: viewAllButtonWallets,
    style: isPortrait && styles.wallet
  })));
}
const styles = _reactNative.StyleSheet.create({
  explorerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wallet: {
    width: '25%'
  }
});
var _default = InitialExplorer;
exports.default = _default;
//# sourceMappingURL=InitialExplorer.js.map