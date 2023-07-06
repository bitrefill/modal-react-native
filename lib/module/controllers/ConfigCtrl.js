import { proxy } from 'valtio';
// -- initial state ------------------------------------------------ //
const state = proxy({
  projectId: '',
  recentWalletDeepLink: undefined,
  providerMetadata: undefined,
  explorerRecommendedWalletIds: undefined,
  explorerExcludedWalletIds: undefined
});

// -- controller --------------------------------------------------- //
export const ConfigCtrl = {
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
//# sourceMappingURL=ConfigCtrl.js.map