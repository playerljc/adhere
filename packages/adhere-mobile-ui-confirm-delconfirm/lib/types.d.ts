import type { DialogConfirmProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
export interface DelConfirmProps extends DialogConfirmProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export type DelConfirmComponent = NamedExoticComponent<DelConfirmProps> & {
    open: (props: DialogConfirmProps) => Promise<boolean>;
};
