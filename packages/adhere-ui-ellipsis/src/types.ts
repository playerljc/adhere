import type { CSSProperties, ReactNode } from 'react';

import { Options } from '@popperjs/core/lib/types';

/**
 * EllipsisProps
 * @interface EllipsisProps
 */
export type EllipsisProps = {
  className?: string;
  style?: CSSProperties;
  // 提示内容(如果没有则是children，只能是纯文本)
  tooltip?: string;
  // 是否换行
  wrap?: boolean;
  // 显示的行数
  wrapLines?: number;
  // tooltip最大字符数
  tooltipMaxLength?: number;
  // 是否使用原生提示
  isUseNativeTooltip?: boolean;
  // 触发的事件类型
  trigger?: 'hover' | 'click' | 'focus' | ['hover', 'click', 'focus'];
  // tooltip的className(isUseNativeTooltip是false生效)
  tooltipClassName?: string;
  // tooltip的style(isUseNativeTooltip是false生效)
  tooltipStyle?: CSSProperties;
  // tooltip的Arrow的className(isUseNativeTooltip是false生效)
  tooltipArrowClassName?: string;
  // tooltip的Arrow的style(isUseNativeTooltip是false生效)
  tooltipArrowStyle?: CSSProperties;
  // 更多(tooltip长度大于tooltipMaxLength时生效)
  tooltipMore?: ReactNode;
  // 收起更多(tooltip长度大于tooltipMaxLength时生效)
  tooltipClose?: ReactNode;
  // 自定义tooltip的options
  customTooltipOptions?: Options;
  children?: string;
  dangerouslySetInnerHTML?: { __html: string };
};
