function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import QRCodeView from '../views/QRCodeView';
import ViewAllExplorer from '../views/ViewAllExplorer';
import { RouterCtrl } from '../controllers/RouterCtrl';
import InitialExplorer from '../views/InitialExplorer';
import { useOrientation } from '../hooks/useOrientation';
export function ModalRouter(props) {
  const routerState = useSnapshot(RouterCtrl.state);
  const {
    height,
    width,
    isPortrait
  } = useOrientation();
  const ViewComponent = useMemo(() => {
    switch (routerState.view) {
      case 'ConnectWallet':
        return InitialExplorer;
      case 'WalletExplorer':
        return ViewAllExplorer;
      case 'Qrcode':
        return QRCodeView;
      default:
        return InitialExplorer;
    }
  }, [routerState.view]);
  return /*#__PURE__*/React.createElement(ViewComponent, _extends({
    windowHeight: height,
    windowWidth: width,
    isPortrait: isPortrait
  }, props));
}
//# sourceMappingURL=ModalRouter.js.map