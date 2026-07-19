import { Tabs } from 'antd';
import classNames from 'classnames';
import React, { memo, useRef } from 'react';
import type { CSSProperties } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { DisplayNameInternal, SegmentedTabsProps } from '../types';
import SegmentedTabBar from './SegmentedTabBar';

const selectorPrefix = 'adhere-ui-anthoc-segmented-tabs-root';

const { useTheme } = ConfigProvider;

function resolveAnimated(
  animated: SegmentedTabsProps['animated'],
): SegmentedTabsProps['animated'] {
  if (animated === undefined) {
    return { inkBar: false, tabPane: false };
  }

  if (typeof animated === 'boolean') {
    return animated ? { inkBar: false, tabPane: true } : false;
  }

  // 自定义 TabBar（Segmented）无 ink-bar，强制关闭
  return { tabPane: false, ...animated, inkBar: false };
}

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

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(
          selectorPrefix,
          {
            [`${selectorPrefix}-segmented`]: !renderTabBar,
          },
          className,
        )}
        style={style ?? {}}
      >
        <Tabs
          {...restProps}
          items={items}
          size={size}
          centered={centered}
          type={type}
          animated={renderTabBar ? animated : resolveAnimated(animated)}
          renderTabBar={
            renderTabBar ??
            ((tabBarProps) => {
              const headerClassName =
                'classNames' in tabBarProps
                  ? (tabBarProps as { classNames?: { header?: string } }).classNames?.header
                  : undefined;
              const headerStyle =
                'styles' in tabBarProps
                  ? (tabBarProps as { styles?: { header?: CSSProperties } }).styles?.header
                  : undefined;

              return (
                <SegmentedTabBar
                  id={tabBarProps.id}
                  activeKey={tabBarProps.activeKey}
                  tabPosition={tabBarProps.tabPosition}
                  extra={tabBarProps.extra}
                  editable={tabBarProps.editable}
                  locale={tabBarProps.locale}
                  tabBarGutter={tabBarProps.tabBarGutter}
                  onTabClick={tabBarProps.onTabClick}
                  onTabScroll={tabBarProps.onTabScroll}
                  style={{ ...headerStyle, ...tabBarProps.style }}
                  className={headerClassName}
                  items={items}
                  size={size}
                  centered={centered}
                  type={type}
                  swiperProps={tabBarSwiperProps}
                />
              );
            })
          }
        />
      </div>
    );
  },
);

const SegmentedTabs = InternalSegmentedTabs as DisplayNameInternal<typeof InternalSegmentedTabs>;
SegmentedTabs.displayName = 'SegmentedTabs';

export default SegmentedTabs;
