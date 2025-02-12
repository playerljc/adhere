import type { CSSProperties, NamedExoticComponent } from 'react';
import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
/**
 * ImportantConfirmProps
 * @interface ImportantConfirmProps
 */
export interface ImportantConfirmProps {
    children?: any;
    zIndex?: number;
    className?: string;
    style?: CSSProperties;
    success?: () => Promise<void>;
}
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    success?: () => Promise<void>;
}
export type ImportantConfirmComponent = NamedExoticComponent<ImportantConfirmProps> & {
    open: (arg: OpenFunction) => void;
};
