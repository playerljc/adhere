import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Ellipsis from '@baifendian/adhere-ui-ellipsis';

import { selectorPrefix } from './Expression';
import type { ViewProps } from './types';

const { useTheme } = ConfigProvider;

/**
 * 表达式视图组件
 * 用于只读显示表达式内容，支持省略号显示
 * 
 * @param wrapClassName - 包装器类名
 * @param wrapStyle - 包装器样式
 * @param value - 显示的值
 * @param ellipsisProps - 省略号组件属性
 * @returns JSX元素
 */
const View = memo<ViewProps>(({ wrapClassName, wrapStyle, value, ...ellipsisProps }) => {
  const wrapperRef = useRef<HTMLElement | undefined>(undefined);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Expression',
  });

  return (
    <div
      //@ts-ignore
      ref={wrapperRef}
      className={classNames(`${selectorPrefix}-view`, wrapClassName ?? '')}
      style={wrapStyle ?? {}}
    >
      <Ellipsis
        {...(ellipsisProps || {})}
        dangerouslySetInnerHTML={{ __html: value ?? '' }}
      ></Ellipsis>
    </div>
  );
});

View.displayName = 'ExpressionView';

export default View;
