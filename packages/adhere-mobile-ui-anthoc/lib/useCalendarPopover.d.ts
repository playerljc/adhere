import React from 'react';
import type { UseCalendarPopover } from './types';
declare function useCalendarPopover({ popoverTriggerClassName, popoverTriggerStyle, placeholder, value, okLabel, cancelLabel, renderDisplay, locale, ...calendarPickerViewProps }: UseCalendarPopover<typeof value>): {
    actions: (false | {
        key: string;
        text: NonNullable<React.ReactNode>;
        primary: boolean;
        onClick: () => Promise<any>;
    } | {
        key: string;
        text: NonNullable<React.ReactNode>;
        onClick: () => Promise<null>;
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
export default useCalendarPopover;
