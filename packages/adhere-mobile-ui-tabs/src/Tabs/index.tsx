import { Swiper, Tabs } from 'antd-mobile';
import type { SwiperRef } from 'antd-mobile/es/components/swiper/swiper';
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

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

  const [activeKey, setActiveKey] = useState<string>(
    externalActiveKey || (children && children.length ? (children[0].key as string) : ''),
  );

  useTheme<HTMLElement>({
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
      return children?.findIndex?.((c) => c.key === key) ?? -1;
    },
    [children],
  );

  /**
   * 标签页切换处理
   *
   * @param key - 目标标签页key
   */
  const handleKeyChange = useCallback(
    (key: string) => {
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
      const newKey = children?.[index]?.key as string;
      if (newKey) {
        setActiveKey(newKey);
      }
    },
    [children],
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
          match: children?.map?.((reactElement) => {
            const {
              props: { children: elementChildren, ...elementProps },
              ...elementRest
            } = reactElement;

            return {
              ...elementRest,
              props: {
                ...elementProps,
                children: null,
              },
            };
          }),
          noMatch: children,
        })}
      </Tabs>

      {!!showArrowMore && (
        <ArrowMore
          zIndex={arrowZIndex ?? 100}
          wrapRef={wrapperRef}
          data={children?.map?.((reactElement) => ({
            key: reactElement.key,
            title: reactElement.props.title,
          }))}
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
          defaultIndex={getActiveIndexByKey(activeKey)}
          onIndexChange={handleSwiperIndexChange}
          loop={false}
          {...(swiperProps ?? {})}
        >
          {children?.map?.((reactElement) => {
            const {
              key,
              props: { children: elementChildren },
            } = reactElement;

            if (key === activeKey) {
              swiperLoad.current.set(key as string, true);
            }

            return (
              <Swiper.Item key={key}>
                <ConditionalRender
                  conditional={!!(key === activeKey || swiperLoad.current.get(key as string))}
                >
                  {() => elementChildren}
                </ConditionalRender>
              </Swiper.Item>
            );
          })}
        </Swiper>
      )}
    </div>
  );
});

const SystemTabs = InternalSystemTabs as SystemTabsComponent;

SystemTabs.Tab = Tab;

SystemTabs.displayName = 'SystemTabs';

export default SystemTabs;
