import { proxy } from 'valtio/vanilla';
// -- initial state ------------------------------------------------ //
const state = proxy({
  pairingUri: '',
  pairingEnabled: false,
  pairingError: false
});

// -- controller --------------------------------------------------- //
export const WcConnectionCtrl = {
  state,
  setPairingUri(pairingUri) {
    state.pairingUri = pairingUri;
  },
  setPairingError(pairingError) {
    state.pairingError = pairingError;
  },
  setPairingEnabled(enabled) {
    state.pairingEnabled = enabled;
  },
  resetConnection() {
    state.pairingUri = '';
    state.pairingError = false;
    state.pairingEnabled = false;
  }
};
//# sourceMappingURL=WcConnectionCtrl.js.map