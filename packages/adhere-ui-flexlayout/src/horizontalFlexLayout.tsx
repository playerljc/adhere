import React, { FC } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout from './flexlayout';
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
  } = props;

  return (
    <FlexLayout className={className || ''} style={style || {}} direction="horizontal">
      <ConditionalRender conditional={!!renderLeft}>
        {() => (
          <Fixed className={leftClassName || ''} style={leftStyle || {}} fit {...(leftProps || {})}>
            {renderLeft}
          </Fixed>
        )}
      </ConditionalRender>

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
              direction="vertical"
              className={mainWrapClassName || ''}
              style={mainWrapStyle || {}}
            >
              <ConditionalRender conditional={!!renderTop}>
                {() => (
                  <Fixed
                    className={topClassName || ''}
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
                className={mainClassName || ''}
                style={mainStyle || {}}
                {...(mainProps || {})}
              >
                {renderMain}
              </Auto>

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
            </FlexLayout>
          </Auto>
        )}
      </ConditionalRender>

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
  );
};

export default HorizontalFlexLayout;
