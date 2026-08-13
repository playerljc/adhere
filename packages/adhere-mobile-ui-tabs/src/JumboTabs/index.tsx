import { JumboTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemJumboTabsComponent, SystemJumboTabsProps } from '../types';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-jumbo-tabs';

/**
 * 内部巨型标签页组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const InternalSystemJumboTabs = memo<SystemJumboTabsProps>(
  ({ className, style, innerClassName, innerStyle, items, children, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'Tabs',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
      >
        <JumboTabs {...props} className={innerClassName ?? ''} style={innerStyle ?? {}}>
          {items?.length
            ? items.map(({ key, ...item }, index) => <JumboTabs.Tab key={key ?? index} {...item} />)
            : children}
        </JumboTabs>
      </div>
    );
  },
);

const SystemJumboTabs = InternalSystemJumboTabs as SystemJumboTabsComponent;

SystemJumboTabs.Tab = JumboTabs.Tab;

SystemJumboTabs.displayName = 'SystemJumboTabs';

export default SystemJumboTabs;
