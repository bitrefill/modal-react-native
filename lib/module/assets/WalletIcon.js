function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import Svg, { Path } from 'react-native-svg';
const SvgWalletIcon = props => /*#__PURE__*/React.createElement(Svg, _extends({
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none"
}, props), /*#__PURE__*/React.createElement(Path, {
  fill: "#E4E7E7",
  fillRule: "evenodd",
  d: "M21.643 18.144c-.297-.742-.445-1.113-.401-1.274a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.051a6 6 0 0 0 5.166-5.166C30 10.893 30 10.43 30 9.5c0-.929 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.166C24.393 2.5 23.93 2.5 23 2.5h-7.72c-4.934 0-7.401 0-9.244 1.05a8 8 0 0 0-2.985 2.986C2.057 8.28 2.003 10.581 2 15c-.002 2.074 0 4.148 0 6.222A7.778 7.778 0 0 0 9.778 29H14.5c1.394 0 2.09 0 2.67-.115a6 6 0 0 0 4.715-4.715c.115-.58.115-1.3.115-2.744 0-1.309 0-1.964-.114-2.489a5.002 5.002 0 0 0-.243-.793Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement(Path, {
  fill: "#6E7777",
  fillRule: "evenodd",
  d: "M23 4h-7.72c-2.494 0-4.266.001-5.647.125-1.361.122-2.197.354-2.853.729A6.5 6.5 0 0 0 4.354 7.28c-.375.656-.607 1.492-.729 2.853-.11 1.233-.123 2.776-.125 4.867 0 .7 0 1.049.097 1.18a.431.431 0 0 0 .343.201c.163.02.518-.18 1.229-.582A6.195 6.195 0 0 1 8.222 15H23c.977 0 1.32-.003 1.587-.039a4.5 4.5 0 0 0 3.875-3.874c.035-.268.038-.61.038-1.587s-.003-1.32-.038-1.587a4.5 4.5 0 0 0-3.875-3.875C24.32 4.003 23.977 4 23 4Zm-7.364 12.5H8.222A4.722 4.722 0 0 0 3.5 21.222 6.278 6.278 0 0 0 9.778 27.5H14.5c1.466 0 1.98-.007 2.378-.087a4.5 4.5 0 0 0 3.535-3.535c.08-.398.087-.933.087-2.452 0-1.39-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.071-.762-.08-2.108-.08Z",
  clipRule: "evenodd"
}));
export default SvgWalletIcon;
//# sourceMappingURL=WalletIcon.js.map