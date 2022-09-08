import type { CSSProperties } from 'react';
/**
 * SliderScaleProps
 * @interface SliderScaleProps
 */
export interface SliderScaleProps {
    className?: string;
    style?: CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    interval?: number;
    onChange?: (value?: any) => void;
}
