import React from 'react';
import type { DateTimeViewProps, UseDateTimerPopover } from './types';
declare function useDateTimePopover<T extends DateTimeViewProps>({ popoverTriggerClassName, popoverTriggerStyle, placeholder, value, okLabel, cancelLabel, defaultValue, formatValue, }: Parameters<UseDateTimerPopover<T, typeof value>>[0]): {
    actions: ({
        key: string;
        text: string | NonNullable<import("./types").DateTimePopoverProps<T>["okLabel"]>;
        primary: boolean;
        onClick: () => Promise<any>;
    } | {
        key: string;
        text: string | NonNullable<import("./types").DateTimePopoverProps<T>["cancelLabel"]>;
        onClick: () => Promise<any>;
        primary?: undefined;
    })[];
    popoverTriggerProps: {
        className: string;
        style: React.CSSProperties;
        renderTrigger: () => React.JSX.Element;
    };
    setTargetValue: (_value: any) => void;
};
export default useDateTimePopover;
