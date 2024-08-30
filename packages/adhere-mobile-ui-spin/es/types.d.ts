import type { ToastProps } from 'antd-mobile/es/components/toast/toast';
import { CSSProperties } from 'react';
export type SpinProps = Omit<ToastProps, 'getContainer' | 'content' | 'visible' | 'duration'> & {
    className?: string;
    style?: CSSProperties;
    spinning?: boolean;
    text?: ToastProps['content'];
    zIndex?: number;
};
