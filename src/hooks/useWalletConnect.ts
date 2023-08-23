import { useCallback, useEffect, useMemo } from 'react';
import { AccountCtrl } from '../controllers/AccountCtrl';
import { ClientCtrl } from '../controllers/ClientCtrl';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { WcConnectionCtrl } from '../controllers/WcConnectionCtrl';
import { useConfigure } from '../hooks/useConfigure';
import type { Listing } from '../types/controllerTypes';
import { ExplorerUtil } from '../utils/ExplorerUtil';
import { useSnapshot } from 'valtio';
import { defaultSessionParams } from '../constants/Config';
import type { IProviderMetadata, ISessionParams } from '../types/coreTypes';
import type { IUniversalProvider } from '@walletconnect/universal-provider';
import { useConnectionHandler } from 'src/hooks/useConnectionHandler';

interface WCProps {
  projectId: string;
  providerMetadata: IProviderMetadata;
  relayUrl?: string;
  sessionParams?: ISessionParams;
}

export interface UseWalletConnectReturn {
  connectToWalletService: (walletInfo: Listing) => void;
  isConnected: boolean;
  address?: string;
  provider?: IUniversalProvider;
  uri: string;
  wallets: any;
  // connect: () => Promise<SessionTypes.Struct | undefined>;
}

export const useWalletConnect = ({
  projectId,
  relayUrl,
  providerMetadata,
  sessionParams = defaultSessionParams,
}: WCProps): UseWalletConnectReturn => {
  useConnectionHandler();
  useConfigure({ projectId, relayUrl, providerMetadata, sessionParams });

  const { pairingUri } = useSnapshot(WcConnectionCtrl.state);
  const wallets = useSnapshot(ExplorerCtrl.state.wallets);
  const { isConnected, address } = useSnapshot(AccountCtrl.state);
  const clientState = useSnapshot(ClientCtrl.state);
  const shouldLoadWallets = wallets.listings.length === 0;

  const connectToWalletService = useCallback(
    (walletInfo: Listing) => {
      if (pairingUri) {
        ExplorerUtil.navigateDeepLink(
          walletInfo.mobile.universal,
          walletInfo.mobile.native,
          pairingUri
        );
      }
    },
    [pairingUri]
  );

  useEffect(() => {
    async function getWallets() {
      if (shouldLoadWallets) {
        await ExplorerCtrl.getWallets();
      }
    }
    getWallets();
  }, [shouldLoadWallets]);

  return useMemo(
    () => ({
      connectToWalletService,
      isConnected: isConnected,
      address: address,
      provider: clientState.initialized ? ClientCtrl.provider() : undefined,
      uri: pairingUri,
      wallets,
      // connect: onConnect,
    }),
    [
      connectToWalletService,
      isConnected,
      address,
      clientState.initialized,
      pairingUri,
      wallets,
    ]
  );
};
