import type { DialogConfirmProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
export interface ImportantConfirmProps extends DialogConfirmProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export type ImportantConfirmComponent = NamedExoticComponent<ImportantConfirmProps> & {
    open: (props: DialogConfirmProps) => Promise<boolean>;
};
