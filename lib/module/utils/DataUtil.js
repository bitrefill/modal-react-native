import { ExplorerCtrl } from '../controllers/ExplorerCtrl';
export default {
  getAllWallets(_ref) {
    let {
      search
    } = _ref;
    const {
      wallets,
      recommendedWallets
    } = ExplorerCtrl.state;
    const _wallets = [...recommendedWallets, ...wallets.listings];
    if (search) {
      return _wallets.filter(wallet => {
        return wallet.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return _wallets;
  }
};
//# sourceMappingURL=DataUtil.js.map