import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useState } from 'react';

import type { SimpleTabsComponent, SimpleTabsProps } from '../types';
import { TabContext } from './Context';
import TabPanel from './TabPanel';

const selectorPrefix = 'adhere-ui-playground-simple-tabs';

/**
 * 标签页头部项属性接口
 * @interface TabHeadItemProps
 * @description 定义标签页头部项的属性
 */
interface TabHeadItemProps {
  /** 标签页索引 */
  index: string;
  /** 标签页标题 */
  title: React.ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * 简单标签页组件
 * @component InternalSimpleTabs
 * @description 一个简单的标签页组件，支持标签页切换和内容展示
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @param props.onChange - 标签页切换回调函数
 * @param props.children - 子组件，通常是TabPanel组件
 * @param props.activeKey - 当前激活的标签页键值
 * @returns JSX.Element
 * @example
 * ```tsx
 * <SimpleTabs activeKey="tab1" onChange={(key) => console.log(key)}>
 *   <TabPanel index="tab1" title="标签页1">内容1</TabPanel>
 *   <TabPanel index="tab2" title="标签页2">内容2</TabPanel>
 * </SimpleTabs>
 * ```
 */
const InternalSimpleTabs = memo<SimpleTabsProps>((props) => {
  const { 
    className = '', 
    onChange, 
    children, 
    activeKey: propActiveKey,
    headClassName = '',
    bodyClassName = '',
    showHead = true,
    type = 'line',
    size = 'middle'
  } = props;

  const [activeKey, setActiveKey] = useState<string>(propActiveKey ?? '');

  /**
   * 处理标签页切换
   * @function handleTabChange
   * @param newActiveKey - 新的激活标签页键值
   */
  const handleTabChange = useCallback((newActiveKey: string) => {
    setActiveKey(newActiveKey);
    onChange?.(newActiveKey);
  }, [onChange]);

  /**
   * 渲染标签页头部
   * @function renderHead
   * @returns ReactNode
   */
  const renderHead = useCallback(() => {
    if (!children || !showHead) return null;

    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return renderHeadItem(child);
      }
      return null;
    });
  }, [children, showHead]);

  /**
   * 渲染单个标签页头部项
   * @function renderHeadItem
   * @param child - 子组件
   * @returns JSX.Element
   */
  const renderHeadItem = useCallback((child: React.ReactElement) => {
    const { props: { index, title, disabled } } = child as React.ReactElement<TabHeadItemProps>;
    
    if (!index) {
      console.warn('TabPanel component must have an index prop');
      return null;
    }

    const isActive = activeKey === index;
    const isDisabled = disabled === true;

    return (
      <li
        key={index}
        id={`tab-${index}`}
        className={classNames(`${selectorPrefix}-head-item`, `${selectorPrefix}-head-item-${type}`, `${selectorPrefix}-head-item-${size}`, {
          [`${selectorPrefix}-head-item-active`]: isActive,
          [`${selectorPrefix}-head-item-disabled`]: isDisabled,
        })}
        onClick={() => {
          if (!isDisabled) {
            handleTabChange(index);
          }
        }}
        role="tab"
        aria-selected={isActive}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {title}
      </li>
    );
  }, [activeKey, handleTabChange]);

  /**
   * 监听activeKey属性变化
   */
  useEffect(() => {
    if (propActiveKey !== undefined) {
      setActiveKey(propActiveKey);
    }
  }, [propActiveKey]);

  return (
    <TabContext.Provider
      value={{
        activeKey: activeKey ?? '',
      }}
    >
      <div 
        className={classNames(selectorPrefix, `${selectorPrefix}-${type}`, `${selectorPrefix}-${size}`, className)}
        role="tablist"
      >
        <ul className={classNames(`${selectorPrefix}-head`, headClassName)}>{renderHead()}</ul>
        <div className={classNames(`${selectorPrefix}-body`, bodyClassName)}>{children}</div>
      </div>
    </TabContext.Provider>
  );
});

InternalSimpleTabs.displayName = 'InternalSimpleTabs';

/**
 * 简单标签页组件
 * @component SimpleTabs
 * @description 导出的简单标签页组件，包含TabPanel子组件
 * @example
 * ```tsx
 * import SimpleTabs from './SimpleTabs';
 * 
 * <SimpleTabs activeKey="tab1">
 *   <SimpleTabs.TabPanel index="tab1" title="标签页1">内容1</SimpleTabs.TabPanel>
 *   <SimpleTabs.TabPanel index="tab2" title="标签页2">内容2</SimpleTabs.TabPanel>
 * </SimpleTabs>
 * ```
 */
const SimpleTabs = InternalSimpleTabs as SimpleTabsComponent;

SimpleTabs.displayName = 'SimpleTabs';

// 添加TabPanel子组件
SimpleTabs.TabPanel = TabPanel;

export default SimpleTabs;
