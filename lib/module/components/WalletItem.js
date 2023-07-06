import { Image, Text, StyleSheet } from 'react-native';
import { ExplorerUtil } from '../utils/ExplorerUtil';
import { ConfigCtrl } from '../controllers/ConfigCtrl';
import useTheme from '../hooks/useTheme';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { UiUtil } from '../utils/UiUtil';
import Touchable from './Touchable';
export const ITEM_HEIGHT = 80;
function WalletItem(_ref) {
  let {
    currentWCURI,
    walletInfo,
    style
  } = _ref;
  const Theme = useTheme();
  const onPress = () => {
    if (currentWCURI) {
      var _walletInfo$mobile, _walletInfo$mobile2;
      ConfigCtrl.setRecentWalletDeepLink(((_walletInfo$mobile = walletInfo.mobile) === null || _walletInfo$mobile === void 0 ? void 0 : _walletInfo$mobile.native) || ((_walletInfo$mobile2 = walletInfo.mobile) === null || _walletInfo$mobile2 === void 0 ? void 0 : _walletInfo$mobile2.universal));
      ExplorerUtil.navigateDeepLink(walletInfo.mobile.universal, walletInfo.mobile.native, currentWCURI);
    }
  };
  return /*#__PURE__*/React.createElement(Touchable, {
    onPress: onPress,
    key: walletInfo.id,
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(Image, {
    style: [styles.icon, {
      borderColor: Theme.overlayThin
    }],
    source: {
      uri: ExplorerCtrl.getWalletImageUrl(walletInfo.image_id)
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: [styles.name, {
      color: Theme.foreground1
    }],
    numberOfLines: 1
  }, UiUtil.getWalletName(walletInfo.name, true)));
}
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginVertical: 16
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1
  },
  name: {
    marginTop: 5,
    maxWidth: 100,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center'
  }
});
export default WalletItem;
//# sourceMappingURL=WalletItem.js.map