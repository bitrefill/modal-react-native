"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WcConnectionCtrl = void 0;
var _vanilla = require("valtio/vanilla");
// -- initial state ------------------------------------------------ //
const state = (0, _vanilla.proxy)({
  pairingUri: '',
  pairingError: false
});

// -- controller --------------------------------------------------- //
const WcConnectionCtrl = {
  state,
  setPairingUri(pairingUri) {
    state.pairingUri = pairingUri;
  },
  setPairingError(pairingError) {
    state.pairingError = pairingError;
  },
  resetConnection() {
    state.pairingUri = '';
    state.pairingError = false;
  }
};
exports.WcConnectionCtrl = WcConnectionCtrl;
//# sourceMappingURL=WcConnectionCtrl.js.map