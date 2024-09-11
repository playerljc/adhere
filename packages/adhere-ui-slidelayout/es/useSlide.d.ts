import React, { MutableRefObject, RefObject } from 'react';
import type { OverlayProps } from './types';
declare const _default: (props: OverlayProps, el: RefObject<HTMLDivElement>, positionConfig: MutableRefObject<{
    init: {
        top?: () => void;
        left?: () => void;
        bottom?: () => void;
        right?: () => void;
    };
    show: {
        top?: (time?: number | string) => void;
        left?: (time?: number | string) => void;
        bottom?: (time?: number | string) => void;
        right?: (time?: number | string) => void;
    };
    close: {
        top?: (time?: number | string) => void;
        left?: (time?: number | string) => void;
        bottom?: (time?: number | string) => void;
        right?: (time?: number | string) => void;
    };
}>) => {
    getDuration: (_time: undefined | null | string | number) => string | number;
    maskEl: React.MutableRefObject<HTMLDivElement | undefined>;
};
export default _default;
