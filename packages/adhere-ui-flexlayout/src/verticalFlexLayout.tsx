import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import FlexLayout from './flexlayout';
import { IVerticalFlexLayoutProps } from './types';

const { Fixed, Auto } = FlexLayout;

/**
 * VerticalFlexLayout
 * @param className
 * @param style
 * @param topClassName
 * @param topStyle
 * @param rightClassName
 * @param rightStyle
 * @param bottomClassName
 * @param bottomStyle
 * @param leftClassName
 * @param leftStyle
 * @param mainClassName
 * @param mainStyle
 * @param mainAutoWrapClassName
 * @param mainAutoStyle
 * @param mainWrapClassName
 * @param mainWrapStyle
 * @param renderTop
 * @param renderRight
 * @param renderBottom
 * @param renderLeft
 * @param renderMain
 * @param topProps
 * @param rightProps
 * @param bottomProps
 * @param leftProps
 * @param mainProps
 * @param mainAutoWrapProps
 * @constructor
 */
const VerticalFlexLayout = ({
  className,
  style,
  topClassName,
  topStyle,
  rightClassName,
  rightStyle,
  bottomClassName,
  bottomStyle,
  leftClassName,
  leftStyle,
  mainClassName,
  mainStyle,
  mainAutoWrapClassName,
  mainAutoStyle,
  mainWrapClassName,
  mainWrapStyle,
  renderTop,
  renderRight,
  renderBottom,
  renderLeft,
  renderMain,
  topProps,
  rightProps,
  bottomProps,
  leftProps,
  mainProps,
  mainAutoWrapProps,
}: IVerticalFlexLayoutProps) => {
  return (
    // @ts-ignore
    <FlexLayout className={className} style={{ ...style }} direction="vertical">
      <ConditionalRender conditional={!!renderTop}>
        {() => (
          // @ts-ignore
          <Fixed className={topClassName} style={{ ...topStyle }} fit {...topProps}>
            {renderTop}
          </Fixed>
        )}
      </ConditionalRender>

      <ConditionalRender conditional={!!renderMain}>
        {() => (
          // @ts-ignore
          <Auto
            className={mainAutoWrapClassName}
            style={{ ...mainAutoStyle }}
            fit
            autoFixed
            {...mainAutoWrapProps}
          >
            {/*@ts-ignore*/}
            <FlexLayout
              direction="horizontal"
              className={mainWrapClassName}
              style={{ ...mainWrapStyle }}
            >
              <ConditionalRender conditional={!!renderLeft}>
                {() => (
                  // @ts-ignore
                  <Fixed className={leftClassName} style={{ ...leftStyle }} fit {...leftProps}>
                    {renderLeft}
                  </Fixed>
                )}
              </ConditionalRender>

              {/*@ts-ignore*/}
              <Auto autoFixed fit className={mainClassName} style={{ ...mainStyle }} {...mainProps}>
                {renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderRight}>
                {() => (
                  // @ts-ignore
                  <Fixed className={rightClassName} style={{ ...rightStyle }} fit {...rightProps}>
                    {renderRight}
                  </Fixed>
                )}
              </ConditionalRender>
            </FlexLayout>
          </Auto>
        )}
      </ConditionalRender>

      <ConditionalRender conditional={!!renderBottom}>
        {() => (
          // @ts-ignore
          <Fixed className={bottomClassName} style={{ ...bottomStyle }} fit {...bottomProps}>
            {renderBottom}
          </Fixed>
        )}
      </ConditionalRender>
    </FlexLayout>
  );
};

export const defaultProps = {
  className: '',
  style: {},
  topClassName: '',
  topStyle: {},
  rightClassName: '',
  rightStyle: {},
  bottomClassName: '',
  bottomStyle: {},
  leftClassName: '',
  leftStyle: {},
  mainClassName: '',
  mainStyle: {},
  mainAutoWrapClassName: '',
  mainAutoStyle: {},
  mainWrapClassName: '',
  mainWrapStyle: {},
  topProps: {},
  rightProps: {},
  bottomProps: {},
  leftProps: {},
  mainProps: {},
  mainAutoWrapProps: {},
  renderTop: null,
  renderRight: null,
  renderBottom: null,
  renderLeft: null,
  renderMain: null,
};

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  topClassName: PropTypes.string,
  topStyle: PropTypes.object,
  rightClassName: PropTypes.string,
  rightStyle: PropTypes.object,
  bottomClassName: PropTypes.string,
  bottomStyle: PropTypes.object,
  leftClassName: PropTypes.string,
  leftStyle: PropTypes.object,
  mainClassName: PropTypes.string,
  mainStyle: PropTypes.object,
  mainAutoWrapClassName: PropTypes.string,
  mainAutoStyle: PropTypes.object,
  mainWrapClassName: PropTypes.string,
  mainWrapStyle: PropTypes.object,
  renderTop: PropTypes.node,
  renderRight: PropTypes.node,
  renderBottom: PropTypes.node,
  renderLeft: PropTypes.node,
  renderMain: PropTypes.node,
  topProps: PropTypes.object,
  rightProps: PropTypes.object,
  bottomProps: PropTypes.object,
  leftProps: PropTypes.object,
  mainProps: PropTypes.object,
  mainAutoWrapProps: PropTypes.object,
};

VerticalFlexLayout.defaultProps = defaultProps;

VerticalFlexLayout.propTypes = propTypes;

export default VerticalFlexLayout;
