import React, { FC } from 'react';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type { ToolBarLayoutProps } from './types';
import VerticalFlexLayout from './verticalFlexLayout';

const selectorPrefix = 'adhere-ui-flexlayout-toolbarlayout';

/**
 * ToolBarLayout
 * @constructor
 * @param props
 */
const ToolBarLayout: FC<ToolBarLayoutProps> = (props) => {
  const {
    topToolBarItems = [],
    bottomToolBarItems = [],
    children,
    className = '',
    topClassName = '',
    bottomClassName = '',
    mainAutoWrapClassName = '',
    topProps = {},
    bottomProps = {},
    ...otherProps
  } = props;

  return (
    <VerticalFlexLayout
      className={classNames(selectorPrefix, className || '')}
      topClassName={classNames(
        (topToolBarItems || []).length ? `${selectorPrefix}-top` : null,
        topClassName || '',
      )}
      bottomClassName={classNames(
        (bottomToolBarItems || []).length ? `${selectorPrefix}-bottom` : null,
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
        <ConditionalRender conditional={!!(topToolBarItems || []).length}>
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
        <ConditionalRender conditional={!!(bottomToolBarItems || []).length}>
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
};

export default ToolBarLayout;
