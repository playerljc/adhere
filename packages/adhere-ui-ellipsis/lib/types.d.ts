import type { CSSProperties, ReactNode } from 'react';
import { Options } from '@popperjs/core/lib/types';
/**
 * EllipsisProps
 * @interface EllipsisProps
 */
export type EllipsisProps = {
    className?: string;
    style?: CSSProperties;
    tooltip?: string;
    wrap?: boolean;
    wrapLines?: number;
    tooltipMaxLength?: number;
    isUseNativeTooltip?: boolean;
    trigger?: 'hover' | 'click' | 'focus' | ['hover', 'click', 'focus'];
    tooltipClassName?: string;
    tooltipStyle?: CSSProperties;
    tooltipArrowClassName?: string;
    tooltipArrowStyle?: CSSProperties;
    tooltipMore?: ReactNode;
    tooltipClose?: ReactNode;
    customTooltipOptions?: Options;
    children?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
};
