function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import Svg, { Path } from 'react-native-svg';
const SvgLogo = props => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 78,
  height: 48,
  viewBox: "0 0 78 48",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: props.fill || '#fff',
  d: "M16.323 9.597c12.524-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22L56.237 47.01a1.628 1.628 0 0 1-2.268 0L39.283 32.63a.407.407 0 0 0-.567 0L24.03 47.012a1.628 1.628 0 0 1-2.268 0L1.07 26.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
}));
export default SvgLogo;
//# sourceMappingURL=WCLogo.js.map