import { JumboTabs } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemJumboTabsComponent, SystemJumboTabsProps } from '../types';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-jumbo-tabs';

/**
 * SystemJumboTabs
 * @param props
 * @constructor
 */
const InternalSystemJumboTabs = memo<SystemJumboTabsProps>(
  ({ className, style, innerClassName, innerStyle, items, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>();

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
          {items?.map((_item) => (
            <JumboTabs.Tab {..._item} />
          ))}
        </JumboTabs>
      </div>
    );
  },
);

const SystemJumboTabs = InternalSystemJumboTabs as SystemJumboTabsComponent;

SystemJumboTabs.Tab = JumboTabs.Tab;

SystemJumboTabs.displayName = 'SystemJumboTabs';

export default SystemJumboTabs;
