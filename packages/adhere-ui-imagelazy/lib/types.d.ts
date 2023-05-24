import React from 'react';
/**
 * ImageLazyProps
 * @interface ImageLazyProps
 */
export interface ImageLazyProps {
    className?: string;
    style?: React.CSSProperties;
    imgArgs?: {
        originSrc: string;
        targetSrc: string;
        alt?: string;
    };
}
