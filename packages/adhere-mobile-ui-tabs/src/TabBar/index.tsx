import { TabBar } from 'antd-mobile';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
// @ts-ignore
import { useHistory } from '@ctsj/router';

import type { SystemTabBarNavProps, SystemTabBarProps } from '../types';

const { useTheme } = ConfigProvider;

const { VerticalFlexLayout } = FlexLayout;

const selectorPrefix = 'adhere-ui-tabs-tab-bar';

/**
 * 底部标签栏导航组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const TabBarNav: FC<SystemTabBarNavProps> = (props) => {
  const { items = [], onChange } = props;

  const history = useHistory();

  const [activeKey, setActiveKey] = useState<string>(props.activeKey ?? '');

  /**
   * 处理标签页切换
   *
   * @param key - 目标标签页key
   */
  const handleTabChange = useCallback(
    (key: string) => {
      history.push(key);
      setActiveKey(key);
      onChange?.(key);
    },
    [history, onChange],
  );

  useEffect(() => {
    setActiveKey(props.activeKey ?? '');
  }, [props.activeKey]);

  return (
    <TabBar activeKey={activeKey} onChange={handleTabChange}>
      {items.map(({ key, ...item }, index) => (
        <TabBar.Item key={key ?? index} {...item} />
      ))}
    </TabBar>
  );
};

/**
 * 底部标签栏组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const SystemTabBar = memo<SystemTabBarProps>((props) => {
  const {
    className,
    style,
    wrapperClassName,
    wrapperStyle,
    mainClassName,
    mainStyle,
    bottomClassName,
    bottomStyle,
    children,
    activeKey,
    ...tabBarNavProps
  } = props;

  const wrapperRef = useRef<HTMLDivElement | undefined>(undefined);

  const history = useHistory();

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'mobile',
    displayName: 'Tabs',
  });

  /**
   * 获取当前激活的标签页key（以当前路由为准，未获取到时回退到 activeKey）
   */
  const getCurrentActiveKey = useCallback((): string => {
    return history.location.pathname ?? activeKey ?? '';
  }, [activeKey, history.location.pathname]);

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
      className={classNames(selectorPrefix, className)}
      style={style ?? {}}
    >
      <VerticalFlexLayout
        className={classNames(selectorPrefix, wrapperClassName)}
        style={wrapperStyle ?? {}}
        mainClassName={mainClassName}
        mainStyle={mainStyle ?? {}}
        bottomClassName={bottomClassName}
        bottomStyle={bottomStyle ?? {}}
        renderMain={children}
        renderBottom={<TabBarNav {...tabBarNavProps} activeKey={getCurrentActiveKey()} />}
      />
    </div>
  );
});

SystemTabBar.displayName = 'SystemTabBar';

export default SystemTabBar;
