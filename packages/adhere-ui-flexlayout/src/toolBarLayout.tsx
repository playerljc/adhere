import classNames from 'classnames';
import React, { FC, memo, useMemo } from 'react';

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

  const _renderTop = useMemo(
    () => (
      <ConditionalRender conditional={!!(topToolBarItems || []).length}>
        {() =>
          topToolBarItems.map((t, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {t}
            </div>
          ))
        }
      </ConditionalRender>
    ),
    [topToolBarItems],
  );

  const _renderBottom = useMemo(
    () => (
      <ConditionalRender conditional={!!(bottomToolBarItems || []).length}>
        {() =>
          bottomToolBarItems.map((t, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {t}
            </div>
          ))
        }
      </ConditionalRender>
    ),
    [bottomToolBarItems],
  );

  const _topProps = useMemo(() => ({ fit: false, ...(topProps ?? {}) }), [topProps]);

  const _bottomProps = useMemo(() => ({ fit: false, ...(bottomProps ?? {}) }), [bottomProps]);

  return (
    <VerticalFlexLayout
      className={classNames(selectorPrefix, className ?? '')}
      topClassName={classNames(topClassName, {
        [`${selectorPrefix}-top`]: (topToolBarItems || []).length,
      })}
      bottomClassName={classNames(bottomClassName, {
        [`${selectorPrefix}-bottom`]: (bottomToolBarItems || []).length,
      })}
      mainAutoWrapClassName={classNames(
        `${selectorPrefix}-main-auto-wrap`,
        mainAutoWrapClassName ?? '',
      )}
      topProps={_topProps}
      bottomProps={_bottomProps}
      {...otherProps}
      renderTop={_renderTop}
      renderMain={children}
      renderBottom={_renderBottom}
    />
  );
};

export default memo(ToolBarLayout);
