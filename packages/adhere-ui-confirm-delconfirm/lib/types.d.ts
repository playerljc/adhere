/**
 * DelConfirmProps
 * @interface DelConfirmProps
 */
import type { CSSProperties, NamedExoticComponent } from 'react';
import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
export interface DelConfirmProps {
    className?: string;
    style?: CSSProperties;
    zIndex?: number;
    success: () => Promise<void>;
    children?: any;
}
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    success?: () => Promise<void>;
}
export type DelConfirmComponent = NamedExoticComponent<DelConfirmProps> & {
    open: (arg: OpenFunction) => void;
};
