"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWalletConnect = void 0;
var _react = require("react");
var _AccountCtrl = require("../controllers/AccountCtrl");
var _ClientCtrl = require("../controllers/ClientCtrl");
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _useConfigure = require("../hooks/useConfigure");
var _ExplorerUtil = require("../utils/ExplorerUtil");
var _valtio = require("valtio");
var _Config = require("../constants/Config");
var _useConnectionHandler = require("../hooks/useConnectionHandler");
var _DataUtil = require("../utils/DataUtil");
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
    providerMetadata,
    sessionParams
  });
  (0, _useConnectionHandler.useConnectionHandler)();
  const {
    pairingUri
  } = (0, _valtio.useSnapshot)(_WcConnectionCtrl.WcConnectionCtrl.state);
  const wallets = (0, _valtio.useSnapshot)(_ExplorerCtrl.ExplorerCtrl.state.wallets);
  const {
    isConnected,
    address
  } = (0, _valtio.useSnapshot)(_AccountCtrl.AccountCtrl.state);
  const clientState = (0, _valtio.useSnapshot)(_ClientCtrl.ClientCtrl.state);
  const shouldLoadWallets = wallets.listings.length === 0;
  const connectToWalletService = (0, _react.useCallback)(walletInfo => {
    if (pairingUri) {
      _DataUtil.DataUtil.setRecentWallet(walletInfo);
      _ExplorerUtil.ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, pairingUri);
    }
  }, [pairingUri]);
  const getWallets = (0, _react.useCallback)(async () => {
    if (shouldLoadWallets) {
      const loadedWallets = await _ExplorerCtrl.ExplorerCtrl.getWallets();
      return loadedWallets;
    }
    return wallets;
  }, [shouldLoadWallets, wallets]);
  const onConnect = (0, _react.useCallback)(async () => {
    _WcConnectionCtrl.WcConnectionCtrl.setPairingEnabled(true);
  }, []);
  return (0, _react.useMemo)(() => ({
    connectToWalletService,
    isConnected: isConnected,
    address: address,
    provider: clientState.initialized ? _ClientCtrl.ClientCtrl.provider() : undefined,
    uri: pairingUri,
    wallets,
    getWallets,
    connect: onConnect
  }), [connectToWalletService, isConnected, address, clientState.initialized, pairingUri, wallets, getWallets, onConnect]);
};
exports.useWalletConnect = useWalletConnect;
//# sourceMappingURL=useWalletConnect.js.map