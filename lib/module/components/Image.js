import { useRef } from 'react';
import { Animated } from 'react-native';
function Image(_ref) {
  let {
    source,
    style
  } = _ref;
  const opacity = useRef(new Animated.Value(0));
  const onLoadEnd = () => {
    Animated.timing(opacity.current, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  };
  return /*#__PURE__*/React.createElement(Animated.Image, {
    source: {
      uri: source
    },
    onLoadEnd: onLoadEnd,
    style: [{
      opacity: opacity.current
    }, style]
  });
}
export default Image;
//# sourceMappingURL=Image.js.map