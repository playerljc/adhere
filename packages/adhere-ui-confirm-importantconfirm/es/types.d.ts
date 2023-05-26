import type { CSSProperties } from 'react';
import { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
/**
 * ImportantConfirmProps
 * @interface ImportantConfirmProps
 */
export interface ImportantConfirmProps {
    children?: any;
    zIndex?: number;
    className?: string;
    style?: CSSProperties;
    success?: () => void;
}
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    success?: () => Promise<void>;
}
