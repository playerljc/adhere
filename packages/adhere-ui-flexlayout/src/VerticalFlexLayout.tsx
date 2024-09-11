import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './Auto';
import Fixed from './Fixed';
import FlexLayout from './FlexLayout';
import type { VerticalFlexLayoutProps } from './types';

/**
 * VerticalFlexLayout
 * @constructor
 * @param props
 */
const VerticalFlexLayout = memo<VerticalFlexLayoutProps>((props) => {
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
            {renderTop}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderTop, topClassName, topStyle, topProps],
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
                    {renderLeft}
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
            {renderBottom}
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
