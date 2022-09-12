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
  // pull的高
  pullHeight?: number;
  // 是否显示更新时间
  isShowUpdateTime?: boolean;
  // 更新时间毫秒数
  updateTime?: number;
  // 更新时间的格式化
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
