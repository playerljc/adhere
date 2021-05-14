import React from 'react';
import moment from 'moment';
import Resource from '@baifendian/adhere-util-resource';

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
  // 更新时间毫秒数
  updateTime?: number;
  // 更新时间的格式化
  updateTimeFormat?: string;
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
  preUpdateTime: number;
}
