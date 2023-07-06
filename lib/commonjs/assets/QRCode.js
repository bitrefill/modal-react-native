"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SvgQrCode = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  height: 24,
  width: 24,
  fill: "none",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: props.fill || '#fff',
  d: "M23.248 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.655-2.624-.765-5.22-.784A.748.748 0 0 0 15 .753c0 .413.335.748.749.751 1.014.008 1.818.028 2.493.089.995.09 1.561.255 1.988.499.7.399 1.28.979 1.679 1.679.243.426.41.993.498 1.988.061.674.082 1.478.09 2.493a.753.753 0 0 0 .75.748ZM3.027.789C4.177.133 5.652.023 8.247.004A.748.748 0 0 1 9 .753a.753.753 0 0 1-.749.751c-1.014.008-1.818.028-2.493.089-.995.09-1.561.255-1.988.499-.7.399-1.28.979-1.679 1.679-.243.426-.41.993-.498 1.988-.061.674-.082 1.478-.09 2.493A.753.753 0 0 1 .754 9a.748.748 0 0 1-.75-.752c.02-2.596.13-4.07.785-5.22a6 6 0 0 1 2.24-2.24ZM.752 15a.748.748 0 0 0-.748.753c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.655 2.624.765 5.22.784A.748.748 0 0 0 9 23.248a.753.753 0 0 0-.749-.751c-1.014-.008-1.818-.029-2.493-.09-.995-.088-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.679c-.243-.426-.41-.993-.498-1.988-.061-.674-.082-1.479-.09-2.493a.753.753 0 0 0-.75-.748ZM22.496 15.75a.753.753 0 0 1 .752-.75c.415 0 .751.338.748.753-.018 2.596-.128 4.07-.784 5.22a5.999 5.999 0 0 1-2.24 2.24c-1.15.655-2.624.765-5.22.784a.748.748 0 0 1-.752-.749c0-.413.335-.748.749-.751 1.014-.008 1.818-.029 2.493-.09.995-.088 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.679c.243-.426.41-.993.498-1.988.061-.674.082-1.479.09-2.493Z"
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: props.fill || '#fff',
  fillRule: "evenodd",
  d: "M6.5 4A2.5 2.5 0 0 0 4 6.5v2A2.5 2.5 0 0 0 6.5 11h2A2.5 2.5 0 0 0 11 8.5v-2A2.5 2.5 0 0 0 8.5 4h-2Zm2 1.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13 6.5A2.5 2.5 0 0 1 15.5 4h2A2.5 2.5 0 0 1 20 6.5v2a2.5 2.5 0 0 1-2.5 2.5h-2A2.5 2.5 0 0 1 13 8.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM6.5 13A2.5 2.5 0 0 0 4 15.5v2A2.5 2.5 0 0 0 6.5 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 8.5 13h-2Zm2 1.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  fill: props.fill || '#fff',
  d: "M13 15.5c0-.464 0-.697.038-.89a2 2 0 0 1 1.572-1.571c.193-.038.425-.038.89-.038v2.5H13ZM17.5 13c.465 0 .697 0 .89.039a2 2 0 0 1 1.572 1.571c.038.194.038.426.038.89h-2.5V13ZM17.5 17.5H20c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038v-2.5ZM13 17.5h2.5V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.571C13 18.197 13 17.965 13 17.5Z"
}));
var _default = SvgQrCode;
exports.default = _default;
//# sourceMappingURL=QRCode.js.map