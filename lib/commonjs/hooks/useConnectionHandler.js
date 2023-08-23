"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnectionHandler = useConnectionHandler;
var _react = require("react");
var _valtio = require("valtio");
var _AccountCtrl = require("../controllers/AccountCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _ClientCtrl = require("../controllers/ClientCtrl");
var _Config = require("../constants/Config");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _StorageUtil = require("../utils/StorageUtil");
var _ModalCtrl = require("../controllers/ModalCtrl");
var _RouterCtrl = require("../controllers/RouterCtrl");
const FOUR_MIN_MS = 240000;
function useConnectionHandler() {
  const timeoutRef = (0, _react.useRef)(null);
  const {
    isConnected
  } = (0, _valtio.useSnapshot)(_AccountCtrl.AccountCtrl.state);
  const {
    pairingEnabled,
    pairingUri
  } = (0, _valtio.useSnapshot)(_WcConnectionCtrl.WcConnectionCtrl.state);
  const {
    provider
  } = (0, _valtio.useSnapshot)(_ClientCtrl.ClientCtrl.state);
  const {
    sessionParams
  } = (0, _valtio.useSnapshot)(_ConfigCtrl.ConfigCtrl.state);
  const [connectionSession, setConnectionSession] = (0, _react.useState)(undefined);
  const onSessionCreated = async session => {
    _WcConnectionCtrl.WcConnectionCtrl.setPairingError(false);
    _WcConnectionCtrl.WcConnectionCtrl.setPairingEnabled(false);
    _ClientCtrl.ClientCtrl.setSessionTopic(session.topic);
    const saveDeepLink = _RouterCtrl.RouterCtrl.state.view !== 'Qrcode';
    try {
      const recentWallet = _ConfigCtrl.ConfigCtrl.getRecentWallet();
      if (saveDeepLink && recentWallet !== null && recentWallet !== void 0 && recentWallet.mobile) {
        await _StorageUtil.StorageUtil.setDeepLinkWallet(recentWallet.mobile.native || recentWallet.mobile.universal);
      }
      _AccountCtrl.AccountCtrl.getAccount();
      _ModalCtrl.ModalCtrl.close();
    } catch (error) {
      console.info('Unable to save deeplink');
    }
  };
  const connectAndWait = (0, _react.useCallback)(async () => {
    try {
      console.log('WC: connectAndWait', isConnected, pairingEnabled);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (!isConnected && pairingEnabled) {
        timeoutRef.current = setTimeout(connectAndWait, FOUR_MIN_MS);
        const session = await provider.connect(sessionParams ?? _Config.defaultSessionParams);
        if (session) {
          onSessionCreated(session);
          setConnectionSession(session);
        }
      }
    } catch (error) {
      _WcConnectionCtrl.WcConnectionCtrl.setPairingUri('');
      _WcConnectionCtrl.WcConnectionCtrl.setPairingError(true);
      console.log('WC: connectAndWait error', error);
    }
  }, [isConnected, provider, sessionParams, pairingEnabled]);
  (0, _react.useEffect)(() => {
    console.log('WC:', provider, isConnected, pairingEnabled, pairingUri);
    if (provider && !isConnected && pairingEnabled && !pairingUri) {
      connectAndWait();
    }
  }, [provider, connectAndWait, isConnected, pairingEnabled, pairingUri]);
  return connectionSession;
}
//# sourceMappingURL=useConnectionHandler.js.map