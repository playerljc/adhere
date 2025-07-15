import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './Auto';
import Fixed from './Fixed';
import FlexLayout from './FlexLayout';
import { selectorPrefix } from './FlexLayout';
import type { HorizontalFlexLayoutProps, RenderFunction } from './types';

/**
 * HorizontalFlexLayout 组件
 * 水平方向的弹性布局组件，支持上、下、左、右、主区域的自定义渲染
 *
 * @param {HorizontalFlexLayoutProps} props - 组件属性
 * @returns {JSX.Element} HorizontalFlexLayout 组件
 */
const HorizontalFlexLayout = memo<HorizontalFlexLayoutProps>((props) => {
  const {
    className,
    style = {},
    topClassName,
    topStyle = {},
    rightClassName,
    rightStyle = {},
    bottomClassName,
    bottomStyle = {},
    leftClassName,
    leftStyle = {},
    mainClassName,
    mainStyle = {},
    mainAutoWrapClassName,
    mainAutoStyle = {},
    mainWrapClassName,
    mainWrapStyle = {},
    renderTop,
    renderRight,
    renderBottom,
    renderLeft,
    renderMain,
    topProps = {},
    rightProps = {},
    bottomProps = {},
    leftProps = {},
    mainProps = {},
    mainAutoWrapProps = {},
    children,
    ...attrs
  } = props;

  /**
   * 渲染左侧区域
   */
  const leftElement = useMemo(
    () => (
      <ConditionalRender conditional={!!renderLeft}>
        {() => (
          <Fixed className={leftClassName ?? ''} style={leftStyle ?? {}} fit {...(leftProps ?? {})}>
            {typeof renderLeft === 'function' ? renderLeft() : renderLeft}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderLeft, leftClassName, leftStyle, leftProps],
  );

  /**
   * 渲染主区域
   */
  const mainElement = useMemo(
    () => (
      <ConditionalRender conditional={!!renderMain}>
        {() => (
          <Auto
            className={classNames(mainAutoWrapClassName)}
            style={mainAutoStyle ?? {}}
            fit
            autoFixed
            {...(mainAutoWrapProps ?? {})}
          >
            <FlexLayout
              direction="vertical"
              className={classNames(mainWrapClassName)}
              style={mainWrapStyle ?? {}}
            >
              <ConditionalRender conditional={!!renderTop}>
                {() => (
                  <Fixed
                    className={classNames(topClassName)}
                    style={topStyle ?? {}}
                    fit
                    {...(topProps ?? {})}
                  >
                    {typeof renderTop === 'function' ? renderTop() : renderTop}
                  </Fixed>
                )}
              </ConditionalRender>

              <Auto
                autoFixed
                fit
                className={classNames(mainClassName)}
                style={mainStyle ?? {}}
                {...(mainProps ?? {})}
              >
                {typeof renderMain === 'function' ? renderMain() : renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderBottom}>
                {() => (
                  <Fixed
                    className={classNames(bottomClassName)}
                    style={bottomStyle ?? {}}
                    fit
                    {...(bottomProps ?? {})}
                  >
                    {typeof renderBottom === 'function' ? renderBottom() : renderBottom}
                  </Fixed>
                )}
              </ConditionalRender>
            </FlexLayout>
          </Auto>
        )}
      </ConditionalRender>
    ),
    [
      renderMain,
      mainAutoWrapClassName,
      mainAutoStyle,
      mainAutoWrapProps,
      mainWrapClassName,
      mainWrapStyle,
      renderTop,
      topClassName,
      topStyle,
      topProps,
      mainClassName,
      mainStyle,
      mainProps,
      renderBottom,
      bottomClassName,
      bottomStyle,
      bottomProps,
    ],
  );

  /**
   * 渲染右侧区域
   */
  const rightElement = useMemo(
    () => (
      <ConditionalRender conditional={!!renderRight}>
        {() => (
          <Fixed
            className={classNames(rightClassName)}
            style={rightStyle ?? {}}
            fit
            {...(rightProps ?? {})}
          >
            {typeof renderRight === 'function' ? renderRight() : renderRight}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderRight, rightClassName, rightStyle, rightProps],
  );

  return (
    <FlexLayout
      {...attrs}
      className={classNames(`${selectorPrefix}-horizontal-flex-layout`, className)}
      style={style ?? {}}
      direction="horizontal"
    >
      {leftElement}
      {mainElement}
      {rightElement}
    </FlexLayout>
  );
});

HorizontalFlexLayout.displayName = 'HorizontalFlexLayout';

export default HorizontalFlexLayout;
