"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfigure = useConfigure;
var _react = require("react");
var _reactNative = require("react-native");
var _core = require("@walletconnect/core");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _ClientCtrl = require("../controllers/ClientCtrl");
var _AccountCtrl = require("../controllers/AccountCtrl");
var _WcConnectionCtrl = require("../controllers/WcConnectionCtrl");
var _ProviderUtil = require("../utils/ProviderUtil");
var _StorageUtil = require("../utils/StorageUtil");
var _ThemeCtrl = require("../controllers/ThemeCtrl");
// import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
// import { OptionsCtrl } from '../controllers/OptionsCtrl';

// import { ToastCtrl } from '../controllers/ToastCtrl';

function useConfigure(config) {
  const colorScheme = (0, _reactNative.useColorScheme)();
  const {
    projectId,
    providerMetadata,
    relayUrl
  } = config;
  const resetApp = (0, _react.useCallback)(() => {
    _ClientCtrl.ClientCtrl.resetSession();
    _AccountCtrl.AccountCtrl.resetAccount();
    _WcConnectionCtrl.WcConnectionCtrl.resetConnection();
    _StorageUtil.StorageUtil.removeDeepLinkWallet();
  }, []);
  const onSessionDelete = (0, _react.useCallback)(_ref => {
    let {
      topic
    } = _ref;
    const sessionTopic = _ClientCtrl.ClientCtrl.sessionTopic();
    if (topic === sessionTopic) {
      resetApp();
    }
  }, [resetApp]);
  const onDisplayUri = (0, _react.useCallback)(async uri => {
    _WcConnectionCtrl.WcConnectionCtrl.setPairingUri(uri);
  }, []);
  (0, _react.useEffect)(() => {
    if (!projectId) {
      console.error('projectId not found');
    }
  }, [projectId]);

  /**
   * Set theme mode
   */
  (0, _react.useEffect)(() => {
    _ThemeCtrl.ThemeCtrl.setThemeMode(config.themeMode || colorScheme);
    _ThemeCtrl.ThemeCtrl.setAccentColor(config.accentColor);
  }, [config.themeMode, config.accentColor, colorScheme]);

  /**
   * Set config
   */
  (0, _react.useEffect)(() => {
    _ConfigCtrl.ConfigCtrl.setConfig(config);
    _ConfigCtrl.ConfigCtrl.loadRecentWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Fetch wallet list
   */
  // useEffect(() => {
  //   async function fetchWallets() {
  //     try {
  //       if (!ExplorerCtrl.state.wallets.total) {
  //         await ExplorerCtrl.getWallets();
  //         OptionsCtrl.setIsDataLoaded(true);
  //       }
  //     } catch (error) {
  //       ToastCtrl.openToast('Network error', 'error');
  //     }
  //   }
  //   fetchWallets();
  // }, []);

  /**
   * Initialize provider
   */
  (0, _react.useEffect)(() => {
    async function initProvider() {
      try {
        const provider = await (0, _ProviderUtil.createUniversalProvider)({
          projectId,
          relayUrl,
          metadata: providerMetadata
        });
        if (provider) {
          _ClientCtrl.ClientCtrl.setProvider(provider);
          provider.on('display_uri', onDisplayUri);
          provider.client.core.relayer.subscriber.on(_core.SUBSCRIBER_EVENTS.deleted, onSessionDelete);

          // Check if there is an active session
          if (provider.session) {
            _ClientCtrl.ClientCtrl.setSessionTopic(provider.session.topic);
            await _AccountCtrl.AccountCtrl.getAccount();
          }
          _ClientCtrl.ClientCtrl.setInitialized(true);
        }
      } catch (error) {
        console.error('Error initializing WalletConnect SDK', error);
      }
    }
    if (!_ClientCtrl.ClientCtrl.provider() && projectId && providerMetadata) {
      initProvider();
    }
  }, [projectId, providerMetadata, relayUrl, onDisplayUri, onSessionDelete]);
}
//# sourceMappingURL=useConfigure.js.map