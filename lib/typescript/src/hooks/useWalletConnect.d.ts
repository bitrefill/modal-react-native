import type { Listing } from '../types/controllerTypes';
import type { IProviderMetadata, ISessionParams } from '../types/coreTypes';
import type { IUniversalProvider } from '@walletconnect/universal-provider';
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
    getWallets: () => void;
    connect: () => void;
}
export declare const useWalletConnect: ({ projectId, relayUrl, providerMetadata, sessionParams, }: WCProps) => UseWalletConnectReturn;
export {};
//# sourceMappingURL=useWalletConnect.d.ts.map