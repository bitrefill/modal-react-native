import { proxy } from 'valtio';
import { ClientCtrl } from './ClientCtrl';
import { OptionsCtrl } from './OptionsCtrl';
import { AccountCtrl } from './AccountCtrl';
import { RouterCtrl } from './RouterCtrl';

// -- types -------------------------------------------------------- //

// -- initial state ------------------------------------------------ //
const state = proxy({
  open: false
});

// -- controller --------------------------------------------------- //
export const ModalCtrl = {
  state,
  async open(options) {
    return new Promise(resolve => {
      const {
        isDataLoaded
      } = OptionsCtrl.state;
      const {
        isConnected
      } = AccountCtrl.state;
      const {
        initialized
      } = ClientCtrl.state;
      if (isConnected) {
        // If already connected, do nothing
        return;
      } else if (options !== null && options !== void 0 && options.route) {
        RouterCtrl.replace(options.route);
      } else {
        RouterCtrl.replace('ConnectWallet');
      }

      // Open modal if async data is ready
      if (initialized && isDataLoaded) {
        state.open = true;
        resolve();
      }
      // Otherwise (slow network) re-attempt open checks
      else {
        const interval = setInterval(() => {
          if (ClientCtrl.state.initialized && OptionsCtrl.state.isDataLoaded) {
            clearInterval(interval);
            state.open = true;
            resolve();
          }
        }, 200);
      }
    });
  },
  close() {
    state.open = false;
  }
};
//# sourceMappingURL=ModalCtrl.js.map