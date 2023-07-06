import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSnapshot } from 'valtio';
import useTheme from '../hooks/useTheme';
import Backward from '../assets/Backward';
import { RouterCtrl } from '../controllers/RouterCtrl';
import Touchable from './Touchable';
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
  const Theme = useTheme();
  const routerState = useSnapshot(RouterCtrl.state);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, shadow && StyleSheet.flatten([styles.shadow, {
      backgroundColor: Theme.background1,
      shadowColor: Theme.background1
    }])]
  }, onBackPress && routerState.history.length > 1 ? /*#__PURE__*/React.createElement(Touchable, {
    style: styles.button,
    onPress: onBackPress,
    disabled: actionDisabled,
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(Backward, {
    height: 18,
    width: 10,
    fill: Theme.accent
  })) : /*#__PURE__*/React.createElement(View, {
    style: styles.button
  }), children, title && /*#__PURE__*/React.createElement(Text, {
    style: [styles.title, {
      color: Theme.foreground1
    }]
  }, title), actionIcon && onActionPress ? /*#__PURE__*/React.createElement(Touchable, {
    style: styles.button,
    onPress: onActionPress,
    disabled: actionDisabled,
    hitSlop: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  }, actionIcon) : /*#__PURE__*/React.createElement(View, {
    style: styles.button
  }));
}
const styles = StyleSheet.create({
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
    ...Platform.select({
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
export default NavHeader;
//# sourceMappingURL=NavHeader.js.map