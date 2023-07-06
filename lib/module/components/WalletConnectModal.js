import { useEffect } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSnapshot } from 'valtio';
import ModalHeader from './ModalHeader';
import { ModalCtrl } from '../controllers/ModalCtrl';
import { ModalRouter } from './ModalRouter';
import { AccountCtrl } from '../controllers/AccountCtrl';
import { ClientCtrl } from '../controllers/ClientCtrl';
import { ToastCtrl } from '../controllers/ToastCtrl';
import { RouterCtrl } from '../controllers/RouterCtrl';
import { ConfigCtrl } from '../controllers/ConfigCtrl';
import { useOrientation } from '../hooks/useOrientation';
import { useConfigure } from '../hooks/useConfigure';
import { defaultSessionParams } from '../constants/Config';
import { setDeepLinkWallet } from '../utils/StorageUtil';
import useTheme from '../hooks/useTheme';
import Toast from './Toast';
export function WalletConnectModal(config) {
  useConfigure(config);
  const {
    open
  } = useSnapshot(ModalCtrl.state);
  const {
    isConnected
  } = useSnapshot(AccountCtrl.state);
  const {
    history
  } = useSnapshot(RouterCtrl.state);
  const {
    width
  } = useOrientation();
  const Theme = useTheme();
  const onSessionCreated = async session => {
    ClientCtrl.setSessionTopic(session.topic);
    const deepLink = ConfigCtrl.getRecentWalletDeepLink();
    try {
      if (deepLink) {
        await setDeepLinkWallet(deepLink);
        ConfigCtrl.setRecentWalletDeepLink(undefined);
      }
      AccountCtrl.getAccount();
      ModalCtrl.close();
    } catch (error) {
      ToastCtrl.openToast("Couldn't save deeplink", 'error');
    }
  };
  const onBackButtonPress = () => {
    if (history.length > 1) {
      return RouterCtrl.goBack();
    }
    return ModalCtrl.close();
  };
  const onSessionError = async () => {
    ConfigCtrl.setRecentWalletDeepLink(undefined);
    ModalCtrl.close();
    ToastCtrl.openToast('Unable to create the session', 'error');
  };
  const onConnect = async () => {
    const provider = ClientCtrl.provider();
    try {
      if (!provider) throw new Error('Provider not initialized');
      if (!isConnected) {
        const session = await provider.connect((config === null || config === void 0 ? void 0 : config.sessionParams) || defaultSessionParams);
        if (session) {
          onSessionCreated(session);
        }
      }
    } catch (error) {
      onSessionError();
    }
  };
  useEffect(() => {
    if (!config.projectId) {
      Alert.alert('Error', 'projectId not found');
    }
  }, [config.projectId]);
  return /*#__PURE__*/React.createElement(Modal, {
    isVisible: open,
    style: styles.modal,
    propagateSwipe: true,
    hideModalContentWhileAnimating: true,
    onBackdropPress: ModalCtrl.close,
    onModalWillShow: onConnect,
    onBackButtonPress: onBackButtonPress,
    useNativeDriver: true,
    statusBarTranslucent: true
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      width,
      backgroundColor: Theme.accent
    }]
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: ModalCtrl.close
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.connectWalletContainer, {
      backgroundColor: Theme.background1
    }]
  }, /*#__PURE__*/React.createElement(ModalRouter, {
    onCopyClipboard: config.onCopyClipboard
  }), /*#__PURE__*/React.createElement(Toast, null))));
}
const styles = StyleSheet.create({
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