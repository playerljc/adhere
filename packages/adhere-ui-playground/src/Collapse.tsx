import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type { CollapseProps } from './types';

const selectorPrefix = 'adhere-ui-playground-collapse';

/**
 * 可折叠组件
 * @component Collapse
 * @description 一个可折叠的内容组件，支持展开/收起功能
 * @param props - 组件属性
 * @returns JSX.Element
 */
const Collapse = memo<CollapseProps>((props) => {
  const {
    headerClassName = '',
    headerStyle = {},
    bodyClassName = '',
    bodyStyle = {},
    children,
    title,
    extra,
    border = false,
    scrollY = false,
    fixedHeaderScrollBody = false,
    defaultCollapse = false,
  } = props;

  const [collapse, setCollapse] = useState<boolean>(defaultCollapse);

  /**
   * 处理头部点击事件
   * @function onClickHeader
   */
  const onClickHeader = (): void => {
    setCollapse(!collapse);
  };

  /**
   * 监听defaultCollapse属性变化
   */
  useEffect(() => {
    setCollapse(defaultCollapse);
  }, [defaultCollapse]);

  return (
    <div
      className={classNames(
        selectorPrefix,
        scrollY ? `${selectorPrefix}-scroll-y` : '',
        fixedHeaderScrollBody ? `${selectorPrefix}-fixed-header-scroll-body` : '',
      )}
    >
      <div
        className={classNames(
          `${selectorPrefix}-header`,
          border ? `${selectorPrefix}-header-border` : '',
          headerClassName,
        )}
        style={headerStyle}
        onClickCapture={onClickHeader}
      >
        <div className={`${selectorPrefix}-header-collapse`}>
          <div
            className={classNames(
              `${selectorPrefix}-header-collapse-icon`,
              collapse ? '' : `${selectorPrefix}-header-collapse-icon-close`,
            )}
          />
          <ConditionalRender conditional={!!title}>
            {() => <div className={`${selectorPrefix}-header-title`}>{title}</div>}
          </ConditionalRender>
        </div>

        <ConditionalRender conditional={!!extra}>
          {() => <div className={`${selectorPrefix}-header-extra`}>{extra}</div>}
        </ConditionalRender>
      </div>

      <ConditionalRender conditional={!collapse}>
        {() => (
          <div
            className={classNames(
              `${selectorPrefix}-body`,
              border ? `${selectorPrefix}-body-border` : '',
              bodyClassName,
              !!title || !!extra ? `${selectorPrefix}-body-exists-header` : '',
            )}
            style={bodyStyle}
          >
            {children}
          </div>
        )}
      </ConditionalRender>
    </div>
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
