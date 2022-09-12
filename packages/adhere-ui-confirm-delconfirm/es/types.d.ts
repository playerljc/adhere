/**
 * DelConfirmProps
 * @interface DelConfirmProps
 */
import type { CSSProperties, FunctionComponent } from 'react';
import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
export interface DelConfirmProps {
    className?: string;
    style?: CSSProperties;
    zIndex?: number;
    success: () => void;
    children?: any;
}
export interface DelConfirmFunction<P> extends FunctionComponent<P> {
    open: (messageDialogParams: any) => void;
}
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    success?: () => Promise<void>;
}
