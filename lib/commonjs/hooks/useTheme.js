"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _valtio = require("valtio");
var _Colors = require("../constants/Colors");
var _ThemeCtrl = require("../controllers/ThemeCtrl");
function useTheme() {
  const themeState = (0, _valtio.useSnapshot)(_ThemeCtrl.ThemeCtrl.state);
  return themeState.themeMode === 'dark' ? _Colors.DarkTheme : _Colors.LightTheme;
}
var _default = useTheme;
exports.default = _default;
//# sourceMappingURL=useTheme.js.map