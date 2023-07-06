"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _valtio = require("valtio");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Backward = _interopRequireDefault(require("../assets/Backward"));
var _RouterCtrl = require("../controllers/RouterCtrl");
var _Touchable = _interopRequireDefault(require("./Touchable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavHeader(_ref) {
  let {
    title,
    onBackPress,
    onActionPress,
    actionIcon,
    actionDisabled,
    shadow,
    children
  } = _ref;
  const Theme = (0, _useTheme.default)();
  const routerState = (0, _valtio.useSnapshot)(_RouterCtrl.RouterCtrl.state);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, shadow && _reactNative.StyleSheet.flatten([styles.shadow, {
      backgroundColor: Theme.background1,
      shadowColor: Theme.background1
    }])]
  }, onBackPress && routerState.history.length > 1 ? /*#__PURE__*/React.createElement(_Touchable.default, {
    style: styles.button,
    onPress: onBackPress,
    disabled: actionDisabled,
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(_Backward.default, {
    height: 18,
    width: 10,
    fill: Theme.accent
  })) : /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.button
  }), children, title && /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.title, {
      color: Theme.foreground1
    }]
  }, title), actionIcon && onActionPress ? /*#__PURE__*/React.createElement(_Touchable.default, {
    style: styles.button,
    onPress: onActionPress,
    disabled: actionDisabled,
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  }, actionIcon) : /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.button
  }));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  shadow: {
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ..._reactNative.Platform.select({
      ios: {
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 6
        }
      }
    })
  },
  button: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24
  }
});
var _default = NavHeader;
exports.default = _default;
//# sourceMappingURL=NavHeader.js.map