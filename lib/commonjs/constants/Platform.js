"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIOS = exports.isAndroid = void 0;
var _reactNative = require("react-native");
const isAndroid = _reactNative.Platform.OS === 'android';
exports.isAndroid = isAndroid;
const isIOS = _reactNative.Platform.OS === 'ios';
exports.isIOS = isIOS;
//# sourceMappingURL=Platform.js.map