import { useCallback, useEffect } from 'react';
import { Alert, useColorScheme } from 'react-native';
import { SUBSCRIBER_EVENTS } from '@walletconnect/core';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { OptionsCtrl } from '../controllers/OptionsCtrl';
import { ConfigCtrl } from '../controllers/ConfigCtrl';
import { ClientCtrl } from '../controllers/ClientCtrl';
import { AccountCtrl } from '../controllers/AccountCtrl';
import { WcConnectionCtrl } from '../controllers/WcConnectionCtrl';
import { createUniversalProvider } from '../utils/ProviderUtil';
import { removeDeepLinkWallet } from '../utils/StorageUtil';
import { ThemeCtrl } from '../controllers/ThemeCtrl';
import { ToastCtrl } from '../controllers/ToastCtrl';
export function useConfigure(config) {
  const colorScheme = useColorScheme();
  const {
    projectId,
    providerMetadata,
    relayUrl
  } = config;
  const resetApp = useCallback(() => {
    ClientCtrl.resetSession();
    AccountCtrl.resetAccount();
    WcConnectionCtrl.resetConnection();
    ConfigCtrl.resetConfig();
    removeDeepLinkWallet();
  }, []);
  const onSessionDelete = useCallback(_ref => {
    let {
      topic
    } = _ref;
    const sessionTopic = ClientCtrl.sessionTopic();
    if (topic === sessionTopic) {
      resetApp();
    }
  }, [resetApp]);
  const onDisplayUri = useCallback(async uri => {
    WcConnectionCtrl.setPairingUri(uri);
  }, []);

  /**
   * Set theme mode
   */
  useEffect(() => {
    ThemeCtrl.setThemeMode(config.themeMode || colorScheme);
  }, [config.themeMode, colorScheme]);

  /**
   * Set config
   */
  useEffect(() => {
    ConfigCtrl.setConfig(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Fetch wallet list
   */
  useEffect(() => {
    async function fetchWallets() {
      try {
        if (!ExplorerCtrl.state.wallets.total) {
          await ExplorerCtrl.getRecommendedWallets();
          OptionsCtrl.setIsDataLoaded(true);
        }
      } catch (error) {
        ToastCtrl.openToast('Network error', 'error');
      }
    }
    fetchWallets();
  }, []);

  /**
   * Initialize provider
   */
  useEffect(() => {
    async function initProvider() {
      try {
        const provider = await createUniversalProvider({
          projectId,
          relayUrl,
          metadata: providerMetadata
        });
        if (provider) {
          ClientCtrl.setProvider(provider);
          provider.on('display_uri', onDisplayUri);
          provider.client.core.relayer.subscriber.on(SUBSCRIBER_EVENTS.deleted, onSessionDelete);

          // Check if there is an active session
          if (provider.session) {
            ClientCtrl.setSessionTopic(provider.session.topic);
            await AccountCtrl.getAccount();
          }
          ClientCtrl.setInitialized(true);
        }
      } catch (error) {
        Alert.alert('Error', 'Error initializing WalletConnect SDK');
      }
    }
    if (!ClientCtrl.provider() && projectId && providerMetadata) {
      initProvider();
    }
  }, [projectId, providerMetadata, relayUrl, onDisplayUri, onSessionDelete]);
}
//# sourceMappingURL=useConfigure.js.map