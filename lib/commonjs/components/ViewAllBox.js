"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _ExplorerCtrl = require("../controllers/ExplorerCtrl");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Touchable = _interopRequireDefault(require("./Touchable"));
var _WalletIcon = _interopRequireDefault(require("../assets/WalletIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ViewAllBox(_ref) {
  let {
    onPress,
    wallets,
    style
  } = _ref;
  const Theme = (0, _useTheme.default)();
  const _wallets = wallets.slice(0, 4);
  const _emptyBoxes = Array.from(Array(4 - _wallets.length).keys());
  return /*#__PURE__*/React.createElement(_Touchable.default, {
    onPress: onPress,
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.icons, {
      borderColor: Theme.overlayThin
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, _wallets.map(wallet => /*#__PURE__*/React.createElement(_reactNative.Image, {
    key: wallet.id,
    source: {
      uri: _ExplorerCtrl.ExplorerCtrl.getWalletImageUrl(wallet.image_id)
    },
    style: [styles.icon, {
      borderColor: Theme.overlayThin
    }]
  })), _emptyBoxes.map((_, i) => /*#__PURE__*/React.createElement(_reactNative.View, {
    key: i,
    style: [styles.icon, styles.placeholderIcon, {
      borderColor: Theme.overlayThin,
      backgroundColor: Theme.background2
    }]
  }, /*#__PURE__*/React.createElement(_WalletIcon.default, {
    height: 15,
    width: 15
  }))))), /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [styles.text, {
      color: Theme.foreground1
    }],
    numberOfLines: 1
  }, "View All")));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginVertical: 16
  },
  icons: {
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 23,
    width: 23,
    borderRadius: 8,
    margin: 1,
    borderWidth: 1
  },
  placeholderIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 5,
    maxWidth: 100,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center'
  }
});
var _default = ViewAllBox;
exports.default = _default;
//# sourceMappingURL=ViewAllBox.js.map