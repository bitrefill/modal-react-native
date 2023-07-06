import { useEffect, useMemo } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSnapshot } from 'valtio';
import WalletItem from '../components/WalletItem';
import ViewAllBox from '../components/ViewAllBox';
import QRIcon from '../assets/QRCode';
import NavHeader from '../components/NavHeader';
import { RouterCtrl } from '../controllers/RouterCtrl';
import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
import { OptionsCtrl } from '../controllers/OptionsCtrl';
import { WcConnectionCtrl } from '../controllers/WcConnectionCtrl';
import useTheme from '../hooks/useTheme';
import { UiUtil } from '../utils/UiUtil';
function InitialExplorer(_ref) {
  let {
    windowHeight,
    isPortrait
  } = _ref;
  const Theme = useTheme();
  const {
    isDataLoaded
  } = useSnapshot(OptionsCtrl.state);
  const {
    pairingUri
  } = useSnapshot(WcConnectionCtrl.state);
  const {
    recommendedWallets
  } = useSnapshot(ExplorerCtrl.state);
  const loading = useMemo(() => !isDataLoaded || !pairingUri, [isDataLoaded, pairingUri]);
  useEffect(() => {
    if (!loading) {
      UiUtil.layoutAnimation();
    }
  }, [loading]);
  const wallets = useMemo(() => {
    return recommendedWallets.slice(0, 7);
  }, [recommendedWallets]);
  const viewAllButtonWallets = useMemo(() => {
    return recommendedWallets.slice(-4);
  }, [recommendedWallets]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavHeader, {
    title: "Connect your wallet",
    onActionPress: () => RouterCtrl.push('Qrcode'),
    actionIcon: /*#__PURE__*/React.createElement(QRIcon, {
      width: 22,
      height: 22,
      fill: Theme.accent
    })
  }), loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    style: {
      height: Math.round(windowHeight * 0.2)
    },
    color: Theme.accent
  }) : /*#__PURE__*/React.createElement(View, {
    style: styles.explorerContainer
  }, wallets.map(item => /*#__PURE__*/React.createElement(WalletItem, {
    walletInfo: item,
    key: item.id,
    currentWCURI: pairingUri,
    style: isPortrait && styles.wallet
  })), /*#__PURE__*/React.createElement(ViewAllBox, {
    onPress: () => RouterCtrl.push('WalletExplorer'),
    wallets: viewAllButtonWallets,
    style: isPortrait && styles.wallet
  })));
}
const styles = StyleSheet.create({
  explorerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wallet: {
    width: '25%'
  }
});
export default InitialExplorer;
//# sourceMappingURL=InitialExplorer.js.map