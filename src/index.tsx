import 'react-native-get-random-values';
import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import { ExplorerCtrl } from './controllers/ExplorerCtrl';
import './config/animations';

export { WalletConnectModal } from './components/WalletConnectModal';
export { useWalletConnectModal } from './hooks/useWalletConnectModal';
export { IProvider, IProviderMetadata } from './types/coreTypes';
export { useWalletConnect } from './hooks/useWalletConnect';

export const getWalletImageUrl = ExplorerCtrl.getWalletImageUrl;
