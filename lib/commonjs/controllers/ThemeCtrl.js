"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeCtrl = void 0;
var _reactNative = require("react-native");
var _valtio = require("valtio");
// -- initial state ------------------------------------------------ //
const state = (0, _valtio.proxy)({
  themeMode: _reactNative.Appearance.getColorScheme() ?? 'light'
});

// -- controller --------------------------------------------------- //
const ThemeCtrl = {
  state,
  setThemeMode(themeMode) {
    state.themeMode = themeMode ?? _reactNative.Appearance.getColorScheme() ?? 'light';
  }
};
exports.ThemeCtrl = ThemeCtrl;
//# sourceMappingURL=ThemeCtrl.js.map