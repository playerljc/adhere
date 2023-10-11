import { Swiper, Tabs } from 'antd-mobile';
import type { SwiperRef } from 'antd-mobile/es/components/swiper/swiper';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';

import type { SystemTabsProps } from '../types';
import ArrowMore from './arrowMore';
import Tab from './tab';

const { useForceUpdate } = Hooks;

const selectorPrefix = 'adhere-ui-tabs';

const SystemTabs: FC<SystemTabsProps> = (props) => {
  const {
    swiper = false,
    showArrowMore = true,
    className = '',
    style = {},
    innerClassName = '',
    innerStyle = {},
    swiperProps = {},
    children,
    ...restProps
  } = props;

  const swiperRef = useRef<SwiperRef>(null);

  const wrapRef = useRef<HTMLDivElement>(null);

  const childrenEffectFirst = useRef(false);

  const swiperLoad = useRef(new Map());

  const [activeKey, setActiveKey] = useState(
    props.activeKey ? props.activeKey : children && children.length ? children[0].key : '',
  );

  const forceUpdate = useForceUpdate();

  function getActiveIndexByKey(key) {
    return children?.findIndex?.((c) => c.key === key);
  }

  function keyChange(key) {
    setActiveKey(key);
    swiperRef?.current?.swipeTo(getActiveIndexByKey?.(key) as number);
    props?.onChange?.(key);
  }

  useEffect(() => {
    if (showArrowMore) {
      forceUpdate();
    }
  }, []);

  useEffect(() => {
    if (!props.activeKey) return;
    setActiveKey(props.activeKey);
    swiperRef?.current?.swipeTo?.(getActiveIndexByKey?.(props.activeKey) as number);
  }, [props.activeKey]);

  useEffect(() => {
    if (!childrenEffectFirst.current) {
      childrenEffectFirst.current = true;
      return;
    }

    swiperLoad.current.clear();
  }, [children]);

  return (
    <div
      ref={wrapRef}
      className={classNames(selectorPrefix, className ?? '', {
        [`${selectorPrefix}-swiper`]: swiper,
        [`${selectorPrefix}-arrowMore`]: showArrowMore,
      })}
      style={style ?? {}}
    >
      <Tabs
        className={innerClassName ?? ''}
        style={innerStyle ?? {}}
        activeKey={activeKey as string}
        {...restProps}
        onChange={(key) => {
          keyChange(key);
        }}
      >
        {ConditionalRender.conditionalRender({
          conditional: swiper,
          match: children?.map?.((_rElement) => {
            const {
              props: { children: _children, ..._props },
              ..._rest
            } = _rElement;

            return {
              ..._rest,
              props: {
                ..._props,
                children: null,
              },
            };
          }),
          noMatch: props.children,
        })}
      </Tabs>

      <ConditionalRender conditional={showArrowMore}>
        {() => (
          <ArrowMore
            data={props?.children?.map?.((_rElement) => ({
              key: _rElement.key,
              title: _rElement.props.title,
            }))}
            activeKey={activeKey as string}
            onChange={(key) => {
              keyChange(key);
            }}
            swiper={swiper}
            getActiveIndexByKey={getActiveIndexByKey}
            wrapRef={wrapRef}
          />
        )}
      </ConditionalRender>

      <ConditionalRender conditional={swiper}>
        {() => (
          <Swiper
            direction="horizontal"
            indicator={() => null}
            ref={swiperRef}
            defaultIndex={getActiveIndexByKey(activeKey)}
            onIndexChange={(index) => setActiveKey(props?.children?.[index]?.key as string)}
            loop={false}
            {...(swiperProps || {})}
          >
            {children?.map?.((_rElement) => {
              const {
                key,
                props: { children: _children },
              } = _rElement;

              if (key === activeKey) {
                swiperLoad.current.set(key, true);
              }

              return (
                <Swiper.Item key={key}>
                  <ConditionalRender
                    conditional={!!(key === activeKey || swiperLoad.current.get(key))}
                  >
                    {() => _children}
                  </ConditionalRender>
                </Swiper.Item>
              );
            })}
          </Swiper>
        )}
      </ConditionalRender>
    </div>
  );
};

// @ts-ignore
SystemTabs.Tab = Tab;

export default SystemTabs;