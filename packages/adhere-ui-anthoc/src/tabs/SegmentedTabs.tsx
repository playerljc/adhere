import { Tabs } from 'antd';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { DisplayNameInternal, SegmentedTabsProps } from '../types';
import SegmentedTabBar from './SegmentedTabBar';

const selectorPrefix = 'adhere-ui-anthoc-segmented-tabs-root';

const { useTheme } = ConfigProvider;

/**
 * SegmentedTabs
 * @description 基于 antd Tabs，TabBar 为 Segmented 观感 + Swiper 溢出
 */
const InternalSegmentedTabs = memo<SegmentedTabsProps>(
  ({
    className,
    style,
    renderTabBar,
    tabBarSwiperProps,
    items,
    size,
    centered,
    type,
    animated,
    ...restProps
  }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    if (renderTabBar) {
      return (
        <div
          // @ts-ignore
          ref={wrapperRef}
          className={classNames(selectorPrefix, className)}
          style={style ?? {}}
        >
          <Tabs
            {...restProps}
            items={items}
            size={size}
            centered={centered}
            type={type}
            animated={animated}
            renderTabBar={renderTabBar}
          />
        </div>
      );
    }

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(selectorPrefix, className)}
        style={style ?? {}}
      >
        <Tabs
          {...restProps}
          items={items}
          size={size}
          centered={centered}
          type={type}
          animated={
            animated === undefined
              ? { inkBar: false, tabPane: false }
              : typeof animated === 'boolean'
                ? animated
                  ? { inkBar: false, tabPane: true }
                  : false
                : { tabPane: false, ...animated, inkBar: false }
          }
          renderTabBar={(tabBarProps) => (
            <SegmentedTabBar
              {...tabBarProps}
              items={items}
              size={size}
              centered={centered}
              type={type}
              swiperProps={tabBarSwiperProps}
            />
          )}
        />
      </div>
    );
  },
);

const SegmentedTabs = InternalSegmentedTabs as DisplayNameInternal<typeof InternalSegmentedTabs>;
SegmentedTabs.displayName = 'SegmentedTabs';

export default SegmentedTabs;
