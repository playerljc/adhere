import React, { MutableRefObject, RefObject } from 'react';
import type { OverlayProps } from './types';
declare const _default: (props: OverlayProps, el: RefObject<HTMLDivElement>, positionConfig: React.MutableRefObject<{
    init: {
        top?: () => void;
        left?: () => void;
        bottom?: () => void;
        right?: () => void;
    };
    show: {
        top?: ((time?: number | string) => void) | undefined;
        left?: ((time?: number | string) => void) | undefined;
        bottom?: ((time?: number | string) => void) | undefined;
        right?: ((time?: number | string) => void) | undefined;
    };
    close: {
        top?: ((time?: number | string) => void) | undefined;
        left?: ((time?: number | string) => void) | undefined;
        bottom?: ((time?: number | string) => void) | undefined;
        right?: ((time?: number | string) => void) | undefined;
    };
}>) => {
    getDuration: (_time: undefined | null | string | number) => string | number;
    maskEl: React.MutableRefObject<HTMLDivElement | undefined>;
};
export default _default;
