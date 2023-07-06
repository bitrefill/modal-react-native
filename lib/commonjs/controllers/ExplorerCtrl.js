"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplorerCtrl = void 0;
var _valtio = require("valtio");
var _ExplorerUtil = require("../utils/ExplorerUtil");
var _CoreUtil = require("../utils/CoreUtil");
var _ConfigCtrl = require("./ConfigCtrl");
// -- initial state ------------------------------------------------ //
const state = (0, _valtio.proxy)({
  wallets: {
    listings: [],
    total: 0,
    page: 1
  },
  recommendedWallets: []
});

// -- controller --------------------------------------------------- //
const ExplorerCtrl = {
  state,
  async getRecommendedWallets() {
    const {
      explorerRecommendedWalletIds,
      explorerExcludedWalletIds
    } = _ConfigCtrl.ConfigCtrl.state;

    // Don't fetch recomended wallets
    if (explorerRecommendedWalletIds === 'NONE' || explorerExcludedWalletIds === 'ALL' && !explorerRecommendedWalletIds) {
      return state.recommendedWallets;
    }

    // Fetch only recomended wallets defined in config
    if (_CoreUtil.CoreUtil.isArray(explorerRecommendedWalletIds)) {
      const recommendedIds = explorerRecommendedWalletIds.join(',');
      const params = {
        recommendedIds
      };
      const {
        listings
      } = await _ExplorerUtil.ExplorerUtil.getListings(params);
      const listingsArr = Object.values(listings);
      listingsArr.sort((a, b) => {
        const aIndex = explorerRecommendedWalletIds.indexOf(a.id);
        const bIndex = explorerRecommendedWalletIds.indexOf(b.id);
        return aIndex - bIndex;
      });
      state.recommendedWallets = listingsArr;
    }

    // Fetch default recomended wallets based on user's device and excluded config
    else {
      const isExcluded = _CoreUtil.CoreUtil.isArray(explorerExcludedWalletIds);
      const params = {
        page: 1,
        entries: _CoreUtil.CoreUtil.RECOMMENDED_WALLET_AMOUNT,
        excludedIds: isExcluded ? explorerExcludedWalletIds.join(',') : undefined
      };
      const {
        listings
      } = await _ExplorerUtil.ExplorerUtil.getListings(params);
      state.recommendedWallets = Object.values(listings);
    }
    return state.recommendedWallets;
  },
  async getWallets(params) {
    const extendedParams = {
      ...params
    };
    const {
      explorerRecommendedWalletIds,
      explorerExcludedWalletIds
    } = _ConfigCtrl.ConfigCtrl.state;
    const {
      recommendedWallets
    } = state;

    // Don't fetch any wallets if all are excluded
    if (explorerExcludedWalletIds === 'ALL') {
      return state.wallets;
    }

    // Don't fetch recommended wallets, as we already have these
    if (recommendedWallets.length) {
      extendedParams.excludedIds = recommendedWallets.map(wallet => wallet.id).join(',');
    } else if (_CoreUtil.CoreUtil.isArray(explorerRecommendedWalletIds)) {
      extendedParams.excludedIds = explorerRecommendedWalletIds.join(',');
    }

    // Don't fetch user defined excluded wallets
    if (_CoreUtil.CoreUtil.isArray(explorerExcludedWalletIds)) {
      extendedParams.excludedIds = [extendedParams.excludedIds, explorerExcludedWalletIds].filter(Boolean).join(',');
    }
    const {
      listings,
      total
    } = await _ExplorerUtil.ExplorerUtil.getListings(extendedParams);
    const _listings = Object.values(listings);
    state.wallets = {
      listings: _listings,
      page: 1,
      total
    };
    return _listings;
  },
  getWalletImageUrl(imageId) {
    return _ExplorerUtil.ExplorerUtil.getWalletImageUrl(imageId);
  },
  getAssetImageUrl(imageId) {
    return _ExplorerUtil.ExplorerUtil.getAssetImageUrl(imageId);
  }
};
exports.ExplorerCtrl = ExplorerCtrl;
//# sourceMappingURL=ExplorerCtrl.js.map