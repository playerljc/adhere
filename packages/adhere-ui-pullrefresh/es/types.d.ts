import type { CSSProperties, ReactElement } from 'react';
export interface PullRefreshRefHandle {
    refresh: () => void;
    reset: () => void;
    resetUpdateTime: (updateTime: number) => Promise<void>;
    getUpdateTime: () => number;
}
/**
 * PullRefreshProps
 * @interface PullRefreshProps
 */
export interface PullRefreshProps {
    className?: string;
    style?: CSSProperties;
    scrollClassName?: string;
    scrollStyle?: CSSProperties;
    pullHeight?: number;
    isShowUpdateTime?: boolean;
    updateTime?: number;
    updateTimeFormat?: string;
    renderIcon?: () => any;
    renderLabel?: () => any;
    renderCanLabel: () => any;
    renderLoadingAnimation?: () => ReactElement | string;
    onPullStart?: () => void;
    onPullCanRefresh?: () => void;
    onPullRefresh?: () => void;
    onPullBottom?: () => void;
    onPullRebound?: () => void;
    children?: any;
}
