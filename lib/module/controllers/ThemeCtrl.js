import { Appearance } from 'react-native';
import { proxy } from 'valtio';
// -- initial state ------------------------------------------------ //
const state = proxy({
  themeMode: Appearance.getColorScheme() ?? 'light'
});

// -- controller --------------------------------------------------- //
export const ThemeCtrl = {
  state,
  setThemeMode(themeMode) {
    state.themeMode = themeMode ?? Appearance.getColorScheme() ?? 'light';
  }
};
//# sourceMappingURL=ThemeCtrl.js.map