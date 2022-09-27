import React, { FC, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout from './flexlayout';
import type { VerticalFlexLayoutProps } from './types';

/**
 * VerticalFlexLayout
 * @constructor
 * @param props
 */
const VerticalFlexLayout: FC<VerticalFlexLayoutProps> = (props) => {
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
  } = props;

  const _renderTop = useMemo(
    () => (
      <ConditionalRender conditional={!!renderTop}>
        {() => (
          <Fixed className={topClassName || ''} style={topStyle || {}} fit {...(topProps || {})}>
            {renderTop}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderTop, topClassName, topStyle, topProps],
  );

  const _renderMain = useMemo(
    () => (
      <ConditionalRender conditional={!!renderMain}>
        {() => (
          <Auto
            className={mainAutoWrapClassName || ''}
            style={mainAutoStyle || {}}
            fit
            autoFixed
            {...(mainAutoWrapProps || {})}
          >
            <FlexLayout
              direction="horizontal"
              className={mainWrapClassName || ''}
              style={mainWrapStyle || {}}
            >
              <ConditionalRender conditional={!!renderLeft}>
                {() => (
                  <Fixed
                    className={leftClassName || ''}
                    style={leftStyle || {}}
                    fit
                    {...(leftProps || {})}
                  >
                    {renderLeft}
                  </Fixed>
                )}
              </ConditionalRender>

              <Auto
                autoFixed
                fit
                className={mainClassName || ''}
                style={mainStyle || {}}
                {...(mainProps || {})}
              >
                {renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderRight}>
                {() => (
                  <Fixed
                    className={rightClassName || ''}
                    style={rightStyle || {}}
                    fit
                    {...(rightProps || {})}
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

  const _renderBottom = useMemo(
    () => (
      <ConditionalRender conditional={!!renderBottom}>
        {() => (
          <Fixed
            className={bottomClassName || ''}
            style={bottomStyle || {}}
            fit
            {...(bottomProps || {})}
          >
            {renderBottom}
          </Fixed>
        )}
      </ConditionalRender>
    ),
    [renderBottom, bottomClassName, bottomStyle, bottomProps],
  );

  return (
    <FlexLayout className={className || ''} style={style || {}} direction="vertical">
      {_renderTop}
      {_renderMain}
      {_renderBottom}
    </FlexLayout>
  );
};

export default VerticalFlexLayout;
