import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import VerticalFlexLayout from './VerticalFlexLayout';
import type { ToolBarLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-tool-bar-layout';

/**
 * ToolBarLayout
 * @constructor
 * @param props
 */
const ToolBarLayout = memo<ToolBarLayoutProps>((props) => {
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
});

ToolBarLayout.displayName = 'ToolBarLayout';

export default ToolBarLayout;