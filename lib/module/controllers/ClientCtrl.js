import { proxy, ref } from 'valtio';
// -- initial state ------------------------------------------------ //
const state = proxy({
  initialized: false,
  provider: undefined,
  sessionTopic: undefined
});

// -- controller -------------------------------------------------- //
export const ClientCtrl = {
  state,
  setProvider(provider) {
    if (!state.initialized && provider) {
      state.provider = ref(provider);
    }
  },
  setInitialized(initialized) {
    state.initialized = initialized;
  },
  setSessionTopic(topic) {
    if (topic && state.provider) {
      state.sessionTopic = topic;
    }
  },
  provider() {
    return state.provider;
  },
  sessionTopic() {
    return state.sessionTopic;
  },
  resetSession() {
    state.sessionTopic = undefined;
  }
};
//# sourceMappingURL=ClientCtrl.js.map