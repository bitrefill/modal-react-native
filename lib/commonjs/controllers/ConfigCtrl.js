"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigCtrl = void 0;
var _valtio = require("valtio");
// -- initial state ------------------------------------------------ //
const state = (0, _valtio.proxy)({
  projectId: '',
  recentWalletDeepLink: undefined,
  providerMetadata: undefined,
  explorerRecommendedWalletIds: undefined,
  explorerExcludedWalletIds: undefined
});

// -- controller --------------------------------------------------- //
const ConfigCtrl = {
  state,
  setRecentWalletDeepLink(deepLink) {
    state.recentWalletDeepLink = deepLink;
  },
  getRecentWalletDeepLink() {
    return state.recentWalletDeepLink;
  },
  getMetadata() {
    if (!state.providerMetadata) {
      throw new Error('Metadata not set');
    }
    return state.providerMetadata;
  },
  setConfig(config) {
    const {
      projectId,
      providerMetadata
    } = config;
    if (projectId && projectId !== state.projectId) {
      state.projectId = projectId;
    }
    if (providerMetadata && state.providerMetadata !== providerMetadata) {
      state.providerMetadata = providerMetadata;
    }
    state.explorerRecommendedWalletIds = config.explorerRecommendedWalletIds;
    state.explorerExcludedWalletIds = config.explorerExcludedWalletIds;
  },
  resetConfig() {
    state.recentWalletDeepLink = undefined;
  }
};
exports.ConfigCtrl = ConfigCtrl;
//# sourceMappingURL=ConfigCtrl.js.map