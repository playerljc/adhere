import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import VerticalFlexLayout from './VerticalFlexLayout';
import type { ToolBarLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-tool-bar-layout';

/**
 * ToolBarLayout 组件
 * 工具栏布局组件，支持顶部和底部工具栏
 * 
 * @param {ToolBarLayoutProps} props - 组件属性
 * @returns {JSX.Element} ToolBarLayout 组件
 */
const ToolBarLayout = memo<ToolBarLayoutProps>((props) => {
  const {
    topToolBarItems = [],
    bottomToolBarItems = [],
    children,
    className,
    topClassName,
    bottomClassName,
    mainAutoWrapClassName,
    topProps = {},
    bottomProps = {},
    ...restProps
  } = props;

  /**
   * 渲染顶部工具栏
   */
  const topElement = useMemo(
    () => (
      <ConditionalRender conditional={!!(topToolBarItems || []).length}>
        {() =>
          topToolBarItems.map((item, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {item}
            </div>
          ))
        }
      </ConditionalRender>
    ),
    [topToolBarItems],
  );

  /**
   * 渲染底部工具栏
   */
  const bottomElement = useMemo(
    () => (
      <ConditionalRender conditional={!!(bottomToolBarItems || []).length}>
        {() =>
          bottomToolBarItems.map((item, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {item}
            </div>
          ))
        }
      </ConditionalRender>
    ),
    [bottomToolBarItems],
  );

  /**
   * 计算顶部属性
   */
  const targetTopProps = useMemo(() => ({ 
    fit: false, 
    ...(topProps ?? {}) 
  }), [topProps]);

  /**
   * 计算底部属性
   */
  const targetBottomProps = useMemo(() => ({ 
    fit: false, 
    ...(bottomProps ?? {}) 
  }), [bottomProps]);

  return (
    <VerticalFlexLayout
      className={classNames(selectorPrefix, className ?? '')}
      topClassName={classNames(topClassName, {
        [`${selectorPrefix}-top`]: (topToolBarItems || []).length,
      })}
      bottomClassName={classNames(bottomClassName, {
        [`${selectorPrefix}-bottom`]: (bottomToolBarItems || []).length,
      })}
      mainAutoWrapClassName={classNames(
        `${selectorPrefix}-main-auto-wrap`,
        mainAutoWrapClassName ?? '',
      )}
      topProps={targetTopProps}
      bottomProps={targetBottomProps}
      {...restProps}
      renderTop={topElement}
      renderMain={children}
      renderBottom={bottomElement}
    />
  );
});

ToolBarLayout.displayName = 'ToolBarLayout';

export default ToolBarLayout;
