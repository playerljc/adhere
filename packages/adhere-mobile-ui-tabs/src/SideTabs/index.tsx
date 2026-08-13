import { SideBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

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
  ({
    className,
    style,
    items,
    activeKey: externalActiveKey,
    defaultActiveKey,
    onChange,
    ...props
  }) => {
    const wrapperRef = useRef<HTMLDivElement | undefined>(undefined);

    // 内部维护当前选中项，非受控模式（只传 defaultActiveKey）下点击切换时内容区才能跟随更新
    const [activeKey, setActiveKey] = useState<string>(
      () =>
        externalActiveKey ??
        defaultActiveKey ??
        (items?.length ? String(items[0].key ?? 0) : ''),
    );

    useEffect(() => {
      if (externalActiveKey === undefined || externalActiveKey === null) return;
      setActiveKey(externalActiveKey);
    }, [externalActiveKey]);

    const handleChange = useCallback(
      (key: string) => {
        setActiveKey(key);
        onChange?.(key);
      },
      [onChange],
    );

    /**
     * 渲染侧边栏头部
     *
     * @returns JSX元素
     */
    const renderHeader = useCallback(() => {
      return (
        <SideBar {...props} activeKey={activeKey} onChange={handleChange}>
          {items?.map?.(({ key, ...item }, index) => (
            <SideBar.Item key={key || index} {...item} />
          ))}
        </SideBar>
      );
    }, [items, props, activeKey, handleChange]);

    /**
     * 渲染侧边栏内容
     *
     * @returns JSX元素数组
     */
    const renderBody = useCallback(() => {
      return items?.map?.((item, index) => {
        const { children } = item;

        if (!children) return null;

        const itemStyle: React.CSSProperties = {
          ...(children?.props?.style || {}),
        };

        // 优先用 children 元素上的 key（保持原有约定），没有时兜底使用 item.key
        const childKey = children.key ?? (item.key != null ? String(item.key) : null);

        const isActive = childKey != null && childKey === activeKey;
        itemStyle.display = isActive ? '' : 'none';

        return React.cloneElement(
          children,
          {
            ...children.props,
            key: childKey ?? index,
            style: itemStyle,
          },
          children.props.children,
        );
      });
    }, [items, activeKey]);

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
