import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './Auto';
import Fixed from './Fixed';
import FlexLayout from './FlexLayout';
import type { VerticalFlexLayoutProps, RenderFunction } from './types';

/**
 * VerticalFlexLayout 组件
 * 垂直方向的弹性布局组件，支持上、下、左、右、主区域的自定义渲染
 * 
 * @param {VerticalFlexLayoutProps} props - 组件属性
 * @returns {JSX.Element} VerticalFlexLayout 组件
 */
const VerticalFlexLayout = memo<VerticalFlexLayoutProps>((props) => {
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
   * 渲染顶部区域
   */
  const topElement = useMemo(
    () => (
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
    ),
    [renderTop, topClassName, topStyle, topProps],
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
              direction="horizontal"
              className={classNames(mainWrapClassName)}
              style={mainWrapStyle ?? {}}
            >
              <ConditionalRender conditional={!!renderLeft}>
                {() => (
                  <Fixed
                    className={classNames(leftClassName)}
                    style={leftStyle ?? {}}
                    fit
                    {...(leftProps ?? {})}
                  >
                    {typeof renderLeft === 'function' ? renderLeft() : renderLeft}
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
      renderLeft,
      leftClassName,
      leftStyle,
      leftProps,
      mainClassName,
      mainStyle,
      mainProps,
      renderRight,
      rightClassName,
      rightStyle,
      rightProps,
    ],
  );

  /**
   * 渲染底部区域
   */
  const bottomElement = useMemo(
    () => (
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
    ),
    [renderBottom, bottomClassName, bottomStyle, bottomProps],
  );

  return (
    <FlexLayout
      {...attrs}
      className={classNames(className)}
      style={style ?? {}}
      direction="vertical"
    >
      {topElement}
      {mainElement}
      {bottomElement}
    </FlexLayout>
  );
});

VerticalFlexLayout.displayName = 'VerticalFlexLayout';

export default VerticalFlexLayout;
