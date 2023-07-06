import { Image, StyleSheet, View, Text } from 'react-native';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import useTheme from '../hooks/useTheme';
import Touchable from './Touchable';
import WalletIcon from '../assets/WalletIcon';
function ViewAllBox(_ref) {
  let {
    onPress,
    wallets,
    style
  } = _ref;
  const Theme = useTheme();
  const _wallets = wallets.slice(0, 4);
  const _emptyBoxes = Array.from(Array(4 - _wallets.length).keys());
  return /*#__PURE__*/React.createElement(Touchable, {
    onPress: onPress,
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.icons, {
      borderColor: Theme.overlayThin
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, _wallets.map(wallet => /*#__PURE__*/React.createElement(Image, {
    key: wallet.id,
    source: {
      uri: ExplorerCtrl.getWalletImageUrl(wallet.image_id)
    },
    style: [styles.icon, {
      borderColor: Theme.overlayThin
    }]
  })), _emptyBoxes.map((_, i) => /*#__PURE__*/React.createElement(View, {
    key: i,
    style: [styles.icon, styles.placeholderIcon, {
      borderColor: Theme.overlayThin,
      backgroundColor: Theme.background2
    }]
  }, /*#__PURE__*/React.createElement(WalletIcon, {
    height: 15,
    width: 15
  }))))), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: [styles.text, {
      color: Theme.foreground1
    }],
    numberOfLines: 1
  }, "View All")));
}
const styles = StyleSheet.create({
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
export default ViewAllBox;
//# sourceMappingURL=ViewAllBox.js.map