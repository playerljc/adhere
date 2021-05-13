import React from 'react';
/**
 * IPullRefreshProps
 * @interface IPullRefreshProps
 */
export interface IPullRefreshProps {
    className?: string;
    style?: React.CSSProperties;
    scrollClassName?: string;
    scrollStyle?: React.CSSProperties;
    pullHeight: number;
    isShowUpdateTime?: boolean;
    renderIcon?: () => React.ReactElement;
    renderLabel: () => React.ReactElement;
    renderCanLabel: () => React.ReactElement;
    renderLoadingAnimation?: () => React.ReactElement | string;
    onPullStart: () => void;
    onPullCanRefresh: () => void;
    onPullRefresh: () => void;
    onPullBottom: () => void;
    onPullRebound: () => void;
}
/**
 * IPullRefreshState
 * @interface IPullRefreshState
 */
export interface IPullRefreshState {
    isCan: boolean;
}
