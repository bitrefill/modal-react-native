"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientCtrl = void 0;
var _valtio = require("valtio");
// -- initial state ------------------------------------------------ //
const state = (0, _valtio.proxy)({
  initialized: false,
  provider: undefined,
  sessionTopic: undefined
});

// -- controller -------------------------------------------------- //
const ClientCtrl = {
  state,
  setProvider(provider) {
    if (!state.initialized && provider) {
      state.provider = (0, _valtio.ref)(provider);
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
exports.ClientCtrl = ClientCtrl;
//# sourceMappingURL=ClientCtrl.js.map