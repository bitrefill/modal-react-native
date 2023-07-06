import type { ExplorerCtrlState, ListingParams } from '../types/controllerTypes';
export declare const ExplorerCtrl: {
    state: ExplorerCtrlState;
    getRecommendedWallets(): Promise<import("../types/controllerTypes").Listing[]>;
    getWallets(params?: ListingParams): Promise<(import("../types/controllerTypes").ListingResponse & {
        page: number;
    }) | import("../types/controllerTypes").Listing[]>;
    getWalletImageUrl(imageId: string): string;
    getAssetImageUrl(imageId: string): string;
};
//# sourceMappingURL=ExplorerCtrl.d.ts.map