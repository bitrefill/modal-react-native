"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplorerUtil = void 0;
var _reactNative = require("react-native");
var _package = require("../../package.json");
var _package2 = require("@walletconnect/universal-provider/package.json");
var _CoreUtil = require("./CoreUtil");
var _ConfigCtrl = require("../controllers/ConfigCtrl");
var _ToastCtrl = require("../controllers/ToastCtrl");
// -- Helpers -------------------------------------------------------
const W3M_API = 'https://explorer-api.walletconnect.com';
function getUserAgent() {
  return `w3m-rn-${_package.version}/js-${_package2.version}/${_reactNative.Platform.OS}-${_reactNative.Platform.Version}`;
}
async function fetchListings(endpoint, params, headers) {
  const url = new URL(endpoint, W3M_API);
  url.searchParams.append('projectId', _ConfigCtrl.ConfigCtrl.state.projectId);
  if (params) {
    Object.entries(params).forEach(_ref => {
      let [key, value] = _ref;
      if (value) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  const request = await fetch(url.toString(), {
    headers
  });
  return request.json();
}

// -- Utility -------------------------------------------------------
const ExplorerUtil = {
  async getListings(params) {
    const headers = this.getCustomHeaders();
    const extendedParams = {
      ...params,
      version: 2
    };
    const platform = _reactNative.Platform.select({
      ios: 'iOS',
      android: 'Android',
      default: 'Mobile'
    });
    return fetchListings(`/w3m/v1/get${platform}Listings`, extendedParams, headers);
  },
  getWalletImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getWalletImage/${imageId}?projectId=${_ConfigCtrl.ConfigCtrl.state.projectId}`;
  },
  getAssetImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getAssetImage/${imageId}?projectId=${_ConfigCtrl.ConfigCtrl.state.projectId}`;
  },
  async navigateDeepLink(universalLink, deepLink, wcURI) {
    try {
      const nativeUrl = _CoreUtil.CoreUtil.formatNativeUrl(deepLink, wcURI);
      const universalUrl = _CoreUtil.CoreUtil.formatUniversalUrl(universalLink, wcURI);
      if (nativeUrl) {
        await _reactNative.Linking.openURL(nativeUrl).catch(() => {
          // Fallback to universal link
          if (universalUrl) {
            _reactNative.Linking.openURL(universalUrl);
          } else {
            _ToastCtrl.ToastCtrl.openToast('Unable to open the wallet', 'error');
          }
        });
      } else if (universalUrl) {
        await _reactNative.Linking.openURL(universalUrl);
      } else {
        _ToastCtrl.ToastCtrl.openToast('Unable to open the wallet', 'error');
      }
    } catch (error) {
      _ToastCtrl.ToastCtrl.openToast('Unable to open the wallet', 'error');
    }
  },
  getCustomHeaders() {
    const referer = _ConfigCtrl.ConfigCtrl.getMetadata().name.trim().replace(' ', '');
    return {
      'User-Agent': getUserAgent(),
      'Referer': referer
    };
  }
};
exports.ExplorerUtil = ExplorerUtil;
//# sourceMappingURL=ExplorerUtil.js.map