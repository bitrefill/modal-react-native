"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
function Image(_ref) {
  let {
    source,
    style
  } = _ref;
  const opacity = (0, _react.useRef)(new _reactNative.Animated.Value(0));
  const onLoadEnd = () => {
    _reactNative.Animated.timing(opacity.current, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  };
  return /*#__PURE__*/React.createElement(_reactNative.Animated.Image, {
    source: {
      uri: source
    },
    onLoadEnd: onLoadEnd,
    style: [{
      opacity: opacity.current
    }, style]
  });
}
var _default = Image;
exports.default = _default;
//# sourceMappingURL=Image.js.map