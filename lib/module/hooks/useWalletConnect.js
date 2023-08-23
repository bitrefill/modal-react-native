import { useCallback, useEffect, useMemo } from 'react';
import { AccountCtrl } from '../controllers/AccountCtrl';
import { ClientCtrl } from '../controllers/ClientCtrl';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { WcConnectionCtrl } from '../controllers/WcConnectionCtrl';
import { useConfigure } from '../hooks/useConfigure';
import { ExplorerUtil } from '../utils/ExplorerUtil';
import { useSnapshot } from 'valtio';
import { defaultSessionParams } from '../constants/Config';
import { useConnectionHandler } from '../hooks/useConnectionHandler';
export const useWalletConnect = _ref => {
  let {
    projectId,
    relayUrl,
    providerMetadata,
    sessionParams = defaultSessionParams
  } = _ref;
  const session = useConnectionHandler();
  useConfigure({
    projectId,
    relayUrl,
    providerMetadata,
    sessionParams
  });
  const {
    pairingUri
  } = useSnapshot(WcConnectionCtrl.state);
  const wallets = useSnapshot(ExplorerCtrl.state.wallets);
  const {
    isConnected,
    address
  } = useSnapshot(AccountCtrl.state);
  const clientState = useSnapshot(ClientCtrl.state);
  const shouldLoadWallets = wallets.listings.length === 0;
  const connectToWalletService = useCallback(walletInfo => {
    if (pairingUri) {
      ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, pairingUri);
    }
  }, [pairingUri]);
  useEffect(() => {
    async function getWallets() {
      if (shouldLoadWallets) {
        await ExplorerCtrl.getWallets();
      }
    }
    getWallets();
  }, [shouldLoadWallets]);
  const onConnect = useCallback(async () => {
    WcConnectionCtrl.setPairingEnabled(true);
  }, []);
  return useMemo(() => ({
    connectToWalletService,
    isConnected: isConnected,
    address: address,
    provider: clientState.initialized ? ClientCtrl.provider() : undefined,
    uri: pairingUri,
    wallets,
    session,
    connect: onConnect
  }), [connectToWalletService, isConnected, address, clientState.initialized, pairingUri, wallets, session, onConnect]);
};
//# sourceMappingURL=useWalletConnect.js.map