/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import type { Listing } from '../types/controllerTypes';
interface Props {
    currentWCURI?: string;
    walletInfo: Listing;
    style?: StyleProp<ViewStyle>;
}
export declare const ITEM_HEIGHT = 80;
declare function WalletItem({ currentWCURI, walletInfo, style }: Props): JSX.Element;
export default WalletItem;
//# sourceMappingURL=WalletItem.d.ts.map