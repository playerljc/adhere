/**
 * DelConfirmProps
 * @interface DelConfirmProps
 */
import type { CSSProperties } from 'react';
import type { ConfirmArgv } from '@baifendian/adhere-ui-messagedialog/lib/types';
export interface DelConfirmProps {
    className?: string;
    style?: CSSProperties;
    zIndex?: number;
    success: () => void;
    children?: any;
}
export interface OpenFunction extends Omit<ConfirmArgv, 'onSuccess'> {
    success?: () => Promise<void>;
}
