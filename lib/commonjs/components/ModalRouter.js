"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalRouter = ModalRouter;
var _react = require("react");
var _valtio = require("valtio");
var _QRCodeView = _interopRequireDefault(require("../views/QRCodeView"));
var _ViewAllExplorer = _interopRequireDefault(require("../views/ViewAllExplorer"));
var _RouterCtrl = require("../controllers/RouterCtrl");
var _InitialExplorer = _interopRequireDefault(require("../views/InitialExplorer"));
var _useOrientation = require("../hooks/useOrientation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ModalRouter(props) {
  const routerState = (0, _valtio.useSnapshot)(_RouterCtrl.RouterCtrl.state);
  const {
    height,
    width,
    isPortrait
  } = (0, _useOrientation.useOrientation)();
  const ViewComponent = (0, _react.useMemo)(() => {
    switch (routerState.view) {
      case 'ConnectWallet':
        return _InitialExplorer.default;
      case 'WalletExplorer':
        return _ViewAllExplorer.default;
      case 'Qrcode':
        return _QRCodeView.default;
      default:
        return _InitialExplorer.default;
    }
  }, [routerState.view]);
  return /*#__PURE__*/React.createElement(ViewComponent, _extends({
    windowHeight: height,
    windowWidth: width,
    isPortrait: isPortrait
  }, props));
}
//# sourceMappingURL=ModalRouter.js.map