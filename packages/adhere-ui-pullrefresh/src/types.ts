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
  // pull的高
  pullHeight: number;
  // 是否显示更新时间
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
