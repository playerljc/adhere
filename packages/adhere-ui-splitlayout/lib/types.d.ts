import type { CSSProperties } from 'react';
/**
 * SplitLayoutProps
 */
export interface SplitLayoutProps {
    className?: '';
    style?: CSSProperties;
    maxSize?: string | number;
    minSize?: string | number;
    onCanDrag?: (params?: any) => void;
    onDragStarted?: (params?: any) => void;
    onDragFinished?: (params?: any) => void;
    onChange?: (params?: any) => void;
    onOut?: Function;
}
