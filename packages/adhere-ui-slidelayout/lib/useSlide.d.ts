import React, { RefObject, MutableRefObject } from 'react';
import type { OverlayProps } from './types';
declare const _default: (props: OverlayProps, el: RefObject<HTMLDivElement>, positionConfig: React.MutableRefObject<{
    init: {
        top?: () => void;
        left?: () => void;
        bottom?: () => void;
        right?: () => void;
    };
    show: {
        top?: ((time?: string | number | undefined) => void) | undefined;
        left?: ((time?: string | number | undefined) => void) | undefined;
        bottom?: ((time?: string | number | undefined) => void) | undefined;
        right?: ((time?: string | number | undefined) => void) | undefined;
    };
    close: {
        top?: ((time?: string | number | undefined) => void) | undefined;
        left?: ((time?: string | number | undefined) => void) | undefined;
        bottom?: ((time?: string | number | undefined) => void) | undefined;
        right?: ((time?: string | number | undefined) => void) | undefined;
    };
}>) => {
    getDuration: (_time: undefined | null | string | number) => string | number;
    maskEl: React.MutableRefObject<HTMLDivElement | undefined>;
};
export default _default;
