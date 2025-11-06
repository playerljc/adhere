import { SideBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useCallback, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SystemSideTabsComponent, SystemSideTabsProps } from '../types';
import Tab from './tab';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs-side-tabs';

/**
 * 内部侧边栏标签页组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const InternalSystemSideTabs = memo<SystemSideTabsProps>(
  ({ className, style, items, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>(undefined);

    /**
     * 渲染侧边栏头部
     *
     * @returns JSX元素
     */
    const renderHeader = useCallback(() => {
      return (
        <SideBar {...props}>
          {items?.map?.((item, index) => (
            <SideBar.Item key={item.key || index} {...item} />
          ))}
        </SideBar>
      );
    }, [items, props]);

    /**
     * 渲染侧边栏内容
     *
     * @returns JSX元素数组
     */
    const renderBody = useCallback(() => {
      return items?.map?.(({ children }) => {
        if (!children) return null;

        const itemStyle: React.CSSProperties = {
          ...(children?.props?.style || {}),
        };

        const isActive = children?.key === (props.activeKey || props.defaultActiveKey);
        itemStyle.display = isActive ? '' : 'none';

        return React.cloneElement(
          children,
          {
            ...children.props,
            style: itemStyle,
          },
          children.props.children,
        );
      });
    }, [items, props.activeKey, props.defaultActiveKey]);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'Tabs',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={classNames(selectorPrefix, className)}
        style={style ?? {}}
      >
        <div className={`${selectorPrefix}-fixed`}>{renderHeader()}</div>
        <div className={`${selectorPrefix}-auto`}>{renderBody()}</div>
      </div>
    );
  },
);

const SystemSideTabs = InternalSystemSideTabs as SystemSideTabsComponent;

SystemSideTabs.Tab = Tab;

SystemSideTabs.displayName = 'SystemSideTabs';

export default SystemSideTabs;
