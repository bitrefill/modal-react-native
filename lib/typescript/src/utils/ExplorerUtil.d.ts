import type { ListingParams, ListingResponse } from '../types/controllerTypes';
export declare const ExplorerUtil: {
    getListings(params?: ListingParams): Promise<ListingResponse>;
    getWalletImageUrl(imageId: string): string;
    getAssetImageUrl(imageId: string): string;
    navigateDeepLink(universalLink: string, deepLink: string, wcURI: string): Promise<void>;
    getCustomHeaders(): {
        'User-Agent': string;
        Referer: string;
    };
};
//# sourceMappingURL=ExplorerUtil.d.ts.map