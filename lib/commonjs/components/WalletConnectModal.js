"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletConnectModal = WalletConnectModal;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _valtio = require("valtio");
var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));
var _ModalCtrl = require("../controllers/ModalCtrl");
var _ModalRouter = require("./ModalRouter");
var _AccountCtrl = require("../controllers/AccountCtrl");
var _ClientCtrl = require("../controllers/ClientCtrl");
var _ToastCtrl = require("../controllers/ToastCtrl");
var _RouterCtrl = require("../controllers/RouterCtrl");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _useOrientation = require("../hooks/useOrientation");
var _useConfigure = require("../hooks/useConfigure");
var _Config = require("../constants/Config");
var _StorageUtil = require("../utils/StorageUtil");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Toast = _interopRequireDefault(require("./Toast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function WalletConnectModal(config) {
  (0, _useConfigure.useConfigure)(config);
  const {
    open
  } = (0, _valtio.useSnapshot)(_ModalCtrl.ModalCtrl.state);
  const {
    isConnected
  } = (0, _valtio.useSnapshot)(_AccountCtrl.AccountCtrl.state);
  const {
    history
  } = (0, _valtio.useSnapshot)(_RouterCtrl.RouterCtrl.state);
  const {
    width
  } = (0, _useOrientation.useOrientation)();
  const Theme = (0, _useTheme.default)();
  const onSessionCreated = async session => {
    _ClientCtrl.ClientCtrl.setSessionTopic(session.topic);
    const deepLink = _ConfigCtrl.ConfigCtrl.getRecentWalletDeepLink();
    try {
      if (deepLink) {
        await (0, _StorageUtil.setDeepLinkWallet)(deepLink);
        _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(undefined);
      }
      _AccountCtrl.AccountCtrl.getAccount();
      _ModalCtrl.ModalCtrl.close();
    } catch (error) {
      _ToastCtrl.ToastCtrl.openToast("Couldn't save deeplink", 'error');
    }
  };
  const onBackButtonPress = () => {
    if (history.length > 1) {
      return _RouterCtrl.RouterCtrl.goBack();
    }
    return _ModalCtrl.ModalCtrl.close();
  };
  const onSessionError = async () => {
    _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(undefined);
    _ModalCtrl.ModalCtrl.close();
    _ToastCtrl.ToastCtrl.openToast('Unable to create the session', 'error');
  };
  const onConnect = async () => {
    const provider = _ClientCtrl.ClientCtrl.provider();
    try {
      if (!provider) throw new Error('Provider not initialized');
      if (!isConnected) {
        const session = await provider.connect((config === null || config === void 0 ? void 0 : config.sessionParams) || _Config.defaultSessionParams);
        if (session) {
          onSessionCreated(session);
        }
      }
    } catch (error) {
      onSessionError();
    }
  };
  (0, _react.useEffect)(() => {
    if (!config.projectId) {
      _reactNative.Alert.alert('Error', 'projectId not found');
    }
  }, [config.projectId]);
  return /*#__PURE__*/React.createElement(_reactNativeModal.default, {
    isVisible: open,
    style: styles.modal,
    propagateSwipe: true,
    hideModalContentWhileAnimating: true,
    onBackdropPress: _ModalCtrl.ModalCtrl.close,
    onModalWillShow: onConnect,
    onBackButtonPress: onBackButtonPress,
    useNativeDriver: true,
    statusBarTranslucent: true
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, {
      width,
      backgroundColor: Theme.accent
    }]
  }, /*#__PURE__*/React.createElement(_ModalHeader.default, {
    onClose: _ModalCtrl.ModalCtrl.close
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.connectWalletContainer, {
      backgroundColor: Theme.background1
    }]
  }, /*#__PURE__*/React.createElement(_ModalRouter.ModalRouter, {
    onCopyClipboard: config.onCopyClipboard
  }), /*#__PURE__*/React.createElement(_Toast.default, null))));
}
const styles = _reactNative.StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  connectWalletContainer: {
    paddingBottom: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
});
//# sourceMappingURL=WalletConnectModal.js.map