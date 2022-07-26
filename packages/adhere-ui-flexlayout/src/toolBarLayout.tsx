import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import { IToolBarLayoutProps } from './types';

import VerticalFlexLayout from './verticalFlexLayout';

const selectorPrefix = 'adhere-ui-flexlayout-toolbarlayout';

/**
 * ToolBarLayout
 * @param topToolBarItems
 * @param bottomToolBarItems
 * @param children
 * @param className
 * @param topClassName
 * @param bottomClassName
 * @param mainAutoWrapClassName
 * @param topProps
 * @param bottomProps
 * @param otherProps
 * @constructor
 */
function ToolBarLayout({
  topToolBarItems,
  bottomToolBarItems,
  children,
  className,
  topClassName,
  bottomClassName,
  mainAutoWrapClassName,
  topProps,
  bottomProps,
  ...otherProps
}: IToolBarLayoutProps) {
  return (
    <VerticalFlexLayout
      className={classNames(selectorPrefix, className || '')}
      topClassName={classNames(
        topToolBarItems.length ? `${selectorPrefix}-top` : null,
        topClassName || '',
      )}
      bottomClassName={classNames(
        bottomToolBarItems.length ? `${selectorPrefix}-bottom` : null,
        bottomClassName || '',
      )}
      mainAutoWrapClassName={classNames(
        `${selectorPrefix}-main-auto-wrap`,
        mainAutoWrapClassName || '',
      )}
      topProps={{ fit: false, ...(topProps || {}) }}
      bottomProps={{ fit: false, ...(bottomProps || {}) }}
      {...otherProps}
      renderTop={
        <ConditionalRender conditional={!!topToolBarItems.length}>
          {() =>
            topToolBarItems.map((t, index) => (
              <div key={index} className={`${selectorPrefix}-toolbar-item`}>
                {t}
              </div>
            ))
          }
        </ConditionalRender>
      }
      renderMain={children}
      renderBottom={
        <ConditionalRender conditional={!!bottomToolBarItems.length}>
          {() =>
            bottomToolBarItems.map((t, index) => (
              <div key={index} className={`${selectorPrefix}-toolbar-item`}>
                {t}
              </div>
            ))
          }
        </ConditionalRender>
      }
    />
  );
}

ToolBarLayout.defaultProps = {
  topToolBarItems: [],
  bottomToolBarItems: [],
};

ToolBarLayout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  topClassName: PropTypes.string,
  topStyle: PropTypes.object,
  bottomClassName: PropTypes.string,
  bottomStyle: PropTypes.object,
  mainClassName: PropTypes.string,
  mainStyle: PropTypes.object,
  mainAutoWrapClassName: PropTypes.string,
  mainAutoStyle: PropTypes.object,
  mainWrapClassName: PropTypes.string,
  mainWrapStyle: PropTypes.object,
  topToolBarItems: PropTypes.arrayOf(PropTypes.node),
  bottomToolBarItems: PropTypes.arrayOf(PropTypes.node),
  topProps: PropTypes.object,
  bottomProps: PropTypes.object,
  mainProps: PropTypes.object,
  mainAutoWrapProps: PropTypes.object,
};

export default ToolBarLayout;
