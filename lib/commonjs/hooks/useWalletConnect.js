"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWalletConnect = void 0;
var _react = require("react");
var _AccountCtrl = require("../controllers/AccountCtrl");
var _ClientCtrl = require("../controllers/ClientCtrl");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _useConfigure = require("../hooks/useConfigure");
var _ExplorerUtil = require("../utils/ExplorerUtil");
var _valtio = require("valtio");
var _StorageUtil = require("../utils/StorageUtil");
var _Config = require("../constants/Config");
var _OptionsCtrl = require("../controllers/OptionsCtrl");
const useWalletConnect = _ref => {
  let {
    projectId,
    relayUrl,
    providerMetadata,
    sessionParams = _Config.defaultSessionParams
  } = _ref;
  (0, _useConfigure.useConfigure)({
    projectId,
    relayUrl,
    providerMetadata
  });
  const {
    pairingUri
  } = (0, _valtio.useSnapshot)(_WcConnectionCtrl.WcConnectionCtrl.state);
  const wallets = (0, _valtio.useSnapshot)(_ExplorerCtrl.ExplorerCtrl.state.wallets);
  const accountState = (0, _valtio.useSnapshot)(_AccountCtrl.AccountCtrl.state);
  const clientState = (0, _valtio.useSnapshot)(_ClientCtrl.ClientCtrl.state);
  const {
    isDataLoaded
  } = (0, _valtio.useSnapshot)(_OptionsCtrl.OptionsCtrl.state);
  const connectToWalletService = (0, _react.useCallback)(walletInfo => {
    if (pairingUri) {
      var _walletInfo$mobile, _walletInfo$mobile2;
      _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(((_walletInfo$mobile = walletInfo.mobile) === null || _walletInfo$mobile === void 0 ? void 0 : _walletInfo$mobile.native) || ((_walletInfo$mobile2 = walletInfo.mobile) === null || _walletInfo$mobile2 === void 0 ? void 0 : _walletInfo$mobile2.universal));
      _ExplorerUtil.ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, pairingUri);
    }
  }, [pairingUri]);
  const onSessionCreated = async session => {
    _ClientCtrl.ClientCtrl.setSessionTopic(session.topic);
    const deepLink = _ConfigCtrl.ConfigCtrl.getRecentWalletDeepLink();
    try {
      if (deepLink) {
        await (0, _StorageUtil.setDeepLinkWallet)(deepLink);
        _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(undefined);
      }
      _AccountCtrl.AccountCtrl.getAccount();
    } catch (error) {}
  };
  const onSessionError = async () => {
    _ConfigCtrl.ConfigCtrl.setRecentWalletDeepLink(undefined);
    onConnect();
  };
  const onConnect = (0, _react.useCallback)(async () => {
    const provider = _ClientCtrl.ClientCtrl.provider();
    try {
      if (!provider) throw new Error('Provider not initialized');
      if (!accountState.isConnected) {
        const session = await provider.connect(sessionParams);
        if (session) {
          onSessionCreated(session);
          return session;
        }
      }
    } catch (error) {
      onSessionError();
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountState.isConnected]);
  return (0, _react.useMemo)(() => ({
    connectToWalletService,
    isConnected: accountState.isConnected,
    address: accountState.address,
    provider: clientState.initialized && isDataLoaded ? _ClientCtrl.ClientCtrl.provider() : undefined,
    uri: pairingUri,
    wallets,
    connect: onConnect
  }), [accountState.address, accountState.isConnected, clientState.initialized, connectToWalletService, onConnect, pairingUri, wallets, isDataLoaded]);
};
exports.useWalletConnect = useWalletConnect;
//# sourceMappingURL=useWalletConnect.js.map