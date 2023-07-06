import { proxy } from 'valtio/vanilla';
// -- initial state ------------------------------------------------ //
const state = proxy({
  pairingUri: '',
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
  resetConnection() {
    state.pairingUri = '';
    state.pairingError = false;
  }
};
//# sourceMappingURL=WcConnectionCtrl.js.map