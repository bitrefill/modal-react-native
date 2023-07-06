import { useCallback, useMemo } from 'react';
import { AccountCtrl } from '../controllers/AccountCtrl';
import { ClientCtrl } from '../controllers/ClientCtrl';
import { ConfigCtrl } from '../controllers/ConfigCtrl';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { WcConnectionCtrl } from '../controllers/WcConnectionCtrl';
import { useConfigure } from '../hooks/useConfigure';
import { ExplorerUtil } from '../utils/ExplorerUtil';
import { useSnapshot } from 'valtio';
import { setDeepLinkWallet } from '../utils/StorageUtil';
import { defaultSessionParams } from '../constants/Config';
import { OptionsCtrl } from '../controllers/OptionsCtrl';
export const useWalletConnect = _ref => {
  let {
    projectId,
    relayUrl,
    providerMetadata,
    sessionParams = defaultSessionParams
  } = _ref;
  useConfigure({
    projectId,
    relayUrl,
    providerMetadata
  });
  const {
    pairingUri
  } = useSnapshot(WcConnectionCtrl.state);
  const wallets = useSnapshot(ExplorerCtrl.state.wallets);
  const accountState = useSnapshot(AccountCtrl.state);
  const clientState = useSnapshot(ClientCtrl.state);
  const {
    isDataLoaded
  } = useSnapshot(OptionsCtrl.state);
  const connectToWalletService = useCallback(walletInfo => {
    if (pairingUri) {
      var _walletInfo$mobile, _walletInfo$mobile2;
      ConfigCtrl.setRecentWalletDeepLink(((_walletInfo$mobile = walletInfo.mobile) === null || _walletInfo$mobile === void 0 ? void 0 : _walletInfo$mobile.native) || ((_walletInfo$mobile2 = walletInfo.mobile) === null || _walletInfo$mobile2 === void 0 ? void 0 : _walletInfo$mobile2.universal));
      ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, pairingUri);
    }
  }, [pairingUri]);
  const onSessionCreated = async session => {
    ClientCtrl.setSessionTopic(session.topic);
    const deepLink = ConfigCtrl.getRecentWalletDeepLink();
    try {
      if (deepLink) {
        await setDeepLinkWallet(deepLink);
        ConfigCtrl.setRecentWalletDeepLink(undefined);
      }
      AccountCtrl.getAccount();
    } catch (error) {}
  };
  const onSessionError = async () => {
    ConfigCtrl.setRecentWalletDeepLink(undefined);
    onConnect();
  };
  const onConnect = useCallback(async () => {
    const provider = ClientCtrl.provider();
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
  return useMemo(() => ({
    connectToWalletService,
    isConnected: accountState.isConnected,
    address: accountState.address,
    provider: clientState.initialized && isDataLoaded ? ClientCtrl.provider() : undefined,
    uri: pairingUri,
    wallets,
    connect: onConnect
  }), [accountState.address, accountState.isConnected, clientState.initialized, connectToWalletService, onConnect, pairingUri, wallets, isDataLoaded]);
};
//# sourceMappingURL=useWalletConnect.js.map