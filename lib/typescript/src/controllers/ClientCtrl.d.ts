import type { ClientCtrlState } from '../types/controllerTypes';
export declare const ClientCtrl: {
    state: ClientCtrlState;
    setProvider(provider: ClientCtrlState['provider']): void;
    setInitialized(initialized: ClientCtrlState['initialized']): void;
    setSessionTopic(topic: ClientCtrlState['sessionTopic']): void;
    provider(): import("@walletconnect/universal-provider").IUniversalProvider | undefined;
    sessionTopic(): string | undefined;
    resetSession(): void;
};
//# sourceMappingURL=ClientCtrl.d.ts.map