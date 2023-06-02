import classNames from 'classnames';
import React, { FC, memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout from './flexlayout';
import { selectorPrefix } from './flexlayout';
import type { HorizontalFlexLayoutProps } from './types';

/**
 * HorizontalFlexLayout
 * @constructor
 * @param props
 */
const HorizontalFlexLayout: FC<HorizontalFlexLayoutProps> = (props) => {
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

  const _renderLeft = useMemo(
    () => (
      <ConditionalRender conditional={!!renderLeft}>
        {() => (
          <Fixed className={leftClassName || ''} style={leftStyle || {}} fit {...(leftProps || {})}>
            {renderLeft}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderLeft, leftClassName, leftStyle, leftProps],
  );

  const _renderMain = useMemo(
    () => (
      <ConditionalRender conditional={!!renderMain}>
        {() => (
          <Auto
            className={classNames(mainAutoWrapClassName)}
            style={mainAutoStyle || {}}
            fit
            autoFixed
            {...(mainAutoWrapProps || {})}
          >
            <FlexLayout
              direction="vertical"
              className={classNames(mainWrapClassName)}
              style={mainWrapStyle || {}}
            >
              <ConditionalRender conditional={!!renderTop}>
                {() => (
                  <Fixed
                    className={classNames(topClassName)}
                    style={topStyle || {}}
                    fit
                    {...(topProps || {})}
                  >
                    {renderTop}
                  </Fixed>
                )}
              </ConditionalRender>

              <Auto
                autoFixed
                fit
                className={classNames(mainClassName)}
                style={mainStyle || {}}
                {...(mainProps || {})}
              >
                {renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderBottom}>
                {() => (
                  <Fixed
                    className={classNames(bottomClassName)}
                    style={bottomStyle || {}}
                    fit
                    {...(bottomProps || {})}
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

  const _renderRight = useMemo(
    () => (
      <ConditionalRender conditional={!!renderRight}>
        {() => (
          <Fixed
            className={classNames(rightClassName)}
            style={rightStyle || {}}
            fit
            {...(rightProps || {})}
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
      style={style || {}}
      direction="horizontal"
    >
      {_renderLeft}
      {_renderMain}
      {_renderRight}
    </FlexLayout>
  );
};

export default memo(HorizontalFlexLayout);
