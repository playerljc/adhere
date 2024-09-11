import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './Auto';
import Fixed from './Fixed';
import FlexLayout from './FlexLayout';
import { selectorPrefix } from './FlexLayout';
import type { HorizontalFlexLayoutProps } from './types';

/**
 * HorizontalFlexLayout
 * @constructor
 * @param props
 */
const HorizontalFlexLayout = memo<HorizontalFlexLayoutProps>((props) => {
  const {
    className = '',
    style = {},
    topClassName = '',
    topStyle = {},
    rightClassName = '',
    rightStyle = {},
    bottomClassName = '',
    bottomStyle = {},
    leftClassName = '',
    leftStyle = {},
    mainClassName = '',
    mainStyle = {},
    mainAutoWrapClassName = '',
    mainAutoStyle = {},
    mainWrapClassName = '',
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

  const leftElement = useMemo(
    () => (
      <ConditionalRender conditional={!!renderLeft}>
        {() => (
          <Fixed className={leftClassName ?? ''} style={leftStyle ?? {}} fit {...(leftProps ?? {})}>
            {renderLeft}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderLeft, leftClassName, leftStyle, leftProps],
  );

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
                    {renderTop}
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
                {renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderBottom}>
                {() => (
                  <Fixed
                    className={classNames(bottomClassName)}
                    style={bottomStyle ?? {}}
                    fit
                    {...(bottomProps ?? {})}
                  >
                    {renderBottom}
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
            {renderRight}
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
