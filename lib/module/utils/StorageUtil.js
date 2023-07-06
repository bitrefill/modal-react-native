import AsyncStorage from '@react-native-async-storage/async-storage';
export const setDeepLinkWallet = link => {
  return AsyncStorage.setItem('WALLETCONNECT_DEEPLINK_CHOICE', JSON.stringify({
    href: link
  }));
};
export const removeDeepLinkWallet = () => {
  AsyncStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
};
//# sourceMappingURL=StorageUtil.js.map