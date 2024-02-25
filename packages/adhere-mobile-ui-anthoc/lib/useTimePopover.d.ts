import React from 'react';
import type { UseTimePopover } from './types';
declare function useTimePopover({ popoverTriggerClassName, popoverTriggerStyle, placeholder, value, okLabel, cancelLabel, renderDisplay, locale, ...timePickerViewProps }: UseTimePopover<typeof value>): {
    actions: (false | {
        key: string;
        text: NonNullable<React.ReactNode>;
        primary: boolean;
        onClick: () => Promise<any>;
    } | {
        key: string;
        text: NonNullable<React.ReactNode>;
        onClick: () => Promise<undefined>;
        primary?: undefined;
    } | {
        key: string;
        text: NonNullable<React.ReactNode>;
        onClick: () => Promise<any>;
        primary?: undefined;
    })[];
    popoverTriggerProps: {
        className: string;
        style: React.CSSProperties;
        renderTrigger: () => React.JSX.Element;
    };
    children: React.JSX.Element;
};
export default useTimePopover;
