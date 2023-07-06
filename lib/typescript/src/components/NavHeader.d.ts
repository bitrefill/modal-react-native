import type { ReactNode } from 'react';
interface Props {
    title?: string;
    onBackPress?: () => void;
    onActionPress?: () => void;
    actionIcon?: ReactNode;
    actionDisabled?: boolean;
    shadow?: boolean;
    children?: ReactNode;
}
declare function NavHeader({ title, onBackPress, onActionPress, actionIcon, actionDisabled, shadow, children, }: Props): JSX.Element;
export default NavHeader;
//# sourceMappingURL=NavHeader.d.ts.map