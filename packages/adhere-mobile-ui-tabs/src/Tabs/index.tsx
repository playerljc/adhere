import { Swiper, Tabs } from 'antd-mobile';
import type { SwiperRef } from 'antd-mobile/es/components/swiper/swiper';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';

import type { SystemTabsComponent, SystemTabsProps } from '../types';
import ArrowMore from './arrowMore';
import Tab from './tab';

const { useForceUpdate } = Hooks;

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-ui-tabs';

/**
 * 内部标签页组件
 *
 * @param props - 组件属性
 * @returns JSX元素
 */
const InternalSystemTabs = memo<SystemTabsProps>((props) => {
  const {
    swiper,
    showArrowMore,
    arrowZIndex,
    className,
    style,
    innerClassName,
    innerStyle,
    swiperProps,
    children,
    onChange,
    activeKey: externalActiveKey,
    ...restProps
  } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const childrenEffectFirst = useRef(false);
  const swiperLoad = useRef(new Map<string, boolean>());

  // 归一化 children：JSX 传单个子元素时不是数组，统一转为数组处理
  const childList = useMemo<ReactElement[]>(() => {
    if (!children) return [];
    return (Array.isArray(children) ? children : [children]) as ReactElement[];
  }, [children]);

  const [activeKey, setActiveKey] = useState<string>(
    externalActiveKey || (childList.length ? (childList[0].key as string) : ''),
  );

  // 记录最新 activeKey，用于 swiper onIndexChange 中判重（swipeTo 也会触发 onIndexChange，避免重复 onChange）
  const activeKeyRef = useRef<string>(activeKey);

  useTheme<HTMLElement>({
    // @ts-ignore
    elRef: wrapperRef,
    group: 'mobile',
    displayName: 'Tabs',
  });

  const forceUpdate = useForceUpdate();

  /**
   * 根据key获取激活索引
   *
   * @param key - 标签页key
   * @returns 索引值
   */
  const getActiveIndexByKey = useCallback(
    (key?: string): number => {
      if (!key) return -1;
      return childList.findIndex((c) => c.key === key);
    },
    [childList],
  );

  /**
   * 标签页切换处理
   *
   * @param key - 目标标签页key
   */
  const handleKeyChange = useCallback(
    (key: string) => {
      activeKeyRef.current = key;
      setActiveKey(key);
      const index = getActiveIndexByKey(key);
      if (index >= 0) {
        swiperRef?.current?.swipeTo(index);
      }
      onChange?.(key);
    },
    [getActiveIndexByKey, onChange],
  );

  useEffect(() => {
    if (showArrowMore) {
      forceUpdate();
    }
  }, [showArrowMore]);

  useEffect(() => {
    if (!externalActiveKey) return;

    activeKeyRef.current = externalActiveKey;
    setActiveKey(externalActiveKey);
    const index = getActiveIndexByKey(externalActiveKey);
    if (index >= 0) {
      swiperRef?.current?.swipeTo?.(index);
    }
  }, [externalActiveKey, getActiveIndexByKey]);

  useEffect(() => {
    if (!childrenEffectFirst.current) {
      childrenEffectFirst.current = true;
      return;
    }

    swiperLoad.current.clear();
  }, [children]);

  /**
   * 轮播索引变化处理
   *
   * @param index - 新的索引值
   */
  const handleSwiperIndexChange = useCallback(
    (index: number) => {
      const newKey = childList[index]?.key as string;
      if (!newKey || newKey === activeKeyRef.current) return;

      activeKeyRef.current = newKey;
      setActiveKey(newKey);
      // 手势滑动切换也要通知外部，保持与点击 tab 头的行为一致
      onChange?.(newKey);
    },
    [childList, onChange],
  );

  return (
    <div
      ref={wrapperRef}
      className={classNames(selectorPrefix, className, {
        [`${selectorPrefix}-swiper`]: !!swiper,
        [`${selectorPrefix}-arrowMore`]: !!showArrowMore,
      })}
      style={style ?? {}}
    >
      <Tabs
        className={innerClassName}
        style={innerStyle ?? {}}
        activeKey={activeKey}
        {...restProps}
        onChange={handleKeyChange}
      >
        {ConditionalRender.conditionalRender({
          conditional: !!swiper,
          match: childList.map((reactElement) =>
            React.isValidElement(reactElement)
              ? React.cloneElement(reactElement, { children: null } as any)
              : reactElement,
          ),
          noMatch: children,
        })}
      </Tabs>

      {!!showArrowMore && (
        <ArrowMore
          zIndex={arrowZIndex ?? 100}
          // @ts-ignore
          wrapRef={wrapperRef}
          data={childList
            .map((reactElement) =>
              React.isValidElement(reactElement)
                ? { key: reactElement.key as any, title: (reactElement.props as any)?.title }
                : null,
            )
            .filter(Boolean) as any}
          activeKey={activeKey}
          swiper={!!swiper}
          getActiveIndexByKey={getActiveIndexByKey}
          onChange={handleKeyChange}
        />
      )}

      {!!swiper && (
        <Swiper
          ref={swiperRef}
          direction="horizontal"
          indicator={() => null}
          defaultIndex={Math.max(getActiveIndexByKey(activeKey), 0)}
          onIndexChange={handleSwiperIndexChange}
          loop={false}
          {...(swiperProps ?? {})}
        >
          {childList
            .map((reactElement) => {
              if (!React.isValidElement(reactElement)) return null;
              const el = reactElement as React.ReactElement<any>;
              const {
                key,
                props: { children: elementChildren },
              } = el;

              if (key === activeKey) {
                swiperLoad.current.set(key as string, true);
              }

              return (
                <Swiper.Item key={key as string}>
                  <ConditionalRender
                    conditional={!!(key === activeKey || swiperLoad.current.get(key as string))}
                  >
                    {() => elementChildren}
                  </ConditionalRender>
                </Swiper.Item>
              );
            })
            .filter(Boolean) as any}
        </Swiper>
      )}
    </div>
  );
});

const SystemTabs = InternalSystemTabs as SystemTabsComponent;

SystemTabs.Tab = Tab;

SystemTabs.displayName = 'SystemTabs';

export default SystemTabs;
