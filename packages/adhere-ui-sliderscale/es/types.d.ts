import React from 'react';
/**
 * ISliderScaleProps
 * @interface ISliderScaleProps
 */
export interface ISliderScaleProps {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    interval?: number;
    onChange: Function;
}
