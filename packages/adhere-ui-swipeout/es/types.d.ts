import React from 'react';
/**
 * ISwipeOutProps
 * @interface ISwipeOutProps
 */
export interface ISwipeOutProps {
    className?: string;
    style?: React.CSSProperties;
    beforeClassName?: string;
    beforeStyle?: React.CSSProperties;
    afterClassName?: string;
    afterStyle?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    beforeShow: boolean;
    afterShow: boolean;
    direction: 'horizontal' | 'vertical';
    before: () => React.ReactElement;
    after: () => React.ReactElement;
    duration: number;
    onInit: () => void;
    slideChangeTransitionStart: () => void;
    slideChangeTransitionEnd: () => void;
}
