"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalCtrl = void 0;
var _valtio = require("valtio");
var _ClientCtrl = require("./ClientCtrl");
var _OptionsCtrl = require("./OptionsCtrl");
var _AccountCtrl = require("./AccountCtrl");
var _RouterCtrl = require("./RouterCtrl");
// -- types -------------------------------------------------------- //

// -- initial state ------------------------------------------------ //
const state = (0, _valtio.proxy)({
  open: false
});

// -- controller --------------------------------------------------- //
const ModalCtrl = {
  state,
  async open(options) {
    return new Promise(resolve => {
      const {
        isDataLoaded
      } = _OptionsCtrl.OptionsCtrl.state;
      const {
        isConnected
      } = _AccountCtrl.AccountCtrl.state;
      const {
        initialized
      } = _ClientCtrl.ClientCtrl.state;
      if (isConnected) {
        // If already connected, do nothing
        return;
      } else if (options !== null && options !== void 0 && options.route) {
        _RouterCtrl.RouterCtrl.replace(options.route);
      } else {
        _RouterCtrl.RouterCtrl.replace('ConnectWallet');
      }

      // Open modal if async data is ready
      if (initialized && isDataLoaded) {
        state.open = true;
        resolve();
      }
      // Otherwise (slow network) re-attempt open checks
      else {
        const interval = setInterval(() => {
          if (_ClientCtrl.ClientCtrl.state.initialized && _OptionsCtrl.OptionsCtrl.state.isDataLoaded) {
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
exports.ModalCtrl = ModalCtrl;
//# sourceMappingURL=ModalCtrl.js.map