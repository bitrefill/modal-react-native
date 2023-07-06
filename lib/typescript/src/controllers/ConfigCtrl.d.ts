import type { ConfigCtrlState } from '../types/controllerTypes';
export declare const ConfigCtrl: {
    state: ConfigCtrlState;
    setRecentWalletDeepLink(deepLink?: string): void;
    getRecentWalletDeepLink(): string | undefined;
    getMetadata(): import("..").IProviderMetadata;
    setConfig(config: Partial<ConfigCtrlState>): void;
    resetConfig(): void;
};
//# sourceMappingURL=ConfigCtrl.d.ts.map