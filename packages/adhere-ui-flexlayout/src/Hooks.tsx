import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { RefObject, useCallback, useContext, useMemo, useState } from 'react';

import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { FlexContext } from './Context';
import { gridCount } from './Fixed';
import { getValueWithUnit } from './Util';
import type { ContextType, FixedProps, GutterType } from './types';

/**
 * 判断是否使用了栅格系统
 * @param {FixedProps} props - Fixed 组件属性
 * @returns {boolean} 是否使用栅格
 */
export const useGrid = (props: FixedProps): boolean =>
  useMemo(
    () =>
      'span' in props &&
      typeof props.span === 'number' &&
      props.span >= 0 &&
      props.span <= gridCount,
    [props.span],
  );

/**
 * 判断是否使用了间隙
 * @param {GutterType} gutter - 栅格间隙
 * @returns {boolean} 是否使用间隙
 */
export const useGap = (gutter: GutterType): boolean => {
  const { direction } = useContext<ContextType>(FlexContext);

  return useMemo(() => {
    // 检查 gutter 是否有效
    if (
      gutter === undefined ||
      gutter === null ||
      gutter === 0 ||
      typeof gutter === 'function' ||
      (typeof gutter === 'object' && !Array.isArray(gutter))
    ) {
      return false;
    }

    if (Array.isArray(gutter)) {
      if (gutter.length === 0) return false;

      if (gutter.length >= 1 && gutter.length <= 2) {
        const hasInvalidValue = gutter.some(
          (g) => g === undefined || g === null || typeof g !== 'number',
        );

        if (hasInvalidValue) return false;

        if (gutter.length === 1) {
          if (gutter[0] === 0) return false;
        }

        if (gutter.length === 2) {
          if (direction === 'vertical') {
            if (gutter[0] === 0) return false;
          }

          if (direction === 'horizontal') {
            if (gutter[1] === 0) return false;
          }
        }
      }
    }

    return true;
  }, [gutter, direction]);
};

/**
 * 触发器 Hook 参数
 */
interface UseTriggerParams
  extends Pick<
    FixedProps,
    'trigger' | 'collapseDirection' | 'collapsedSize' | 'defaultCollapsible' | 'onCollapse'
  > {
  /** 元素引用 */
  elRef: RefObject<HTMLDivElement | null>;
  /** 选择器前缀 */
  selectorPrefix: string;
}

/**
 * 触发器 Hook 返回值
 */
interface UseTriggerReturn {
  /** 渲染触发器 */
  renderTrigger: () => React.ReactNode;
  /** 折叠样式 */
  collapseStyle: React.CSSProperties;
}

/**
 * 使用触发器 Hook
 * @param {UseTriggerParams} params - 触发器参数
 * @returns {UseTriggerReturn} 触发器相关状态和方法
 */
export const useTrigger = ({
  trigger,
  collapseDirection = 'L',
  collapsedSize = 80,
  defaultCollapsible = false,
  onCollapse,
  selectorPrefix,
}: UseTriggerParams): UseTriggerReturn => {
  const { media } = useContext(ConfigProvider.Context);

  const targetCollapsedSize = useMemo(
    () => getValueWithUnit(collapsedSize, media),
    [collapsedSize, media],
  );

  const [collapsible, setCollapsible] = useState(defaultCollapsible);

  // 默认触发器元素
  const DefaultTrigger = useMemo(() => {
    // const iconStyle = { transform: 'rotate(90deg)' };

    switch (collapseDirection) {
      case 'L':
        return collapsible ? <RightOutlined /> : <LeftOutlined />;
      case 'R':
        return collapsible ? <LeftOutlined /> : <RightOutlined />;
      case 'T':
        return collapsible ? <DownOutlined /> : <UpOutlined />;
      case 'B':
        return collapsible ? <UpOutlined /> : <DownOutlined />;
      default:
        return null;
    }
  }, [collapseDirection, collapsible]);

  // 渲染触发器
  const renderTrigger = useCallback(() => {
    if (!trigger) return null;

    const triggerInner = trigger(collapsible, DefaultTrigger);

    if (!triggerInner) return null;

    return (
      <div
        className={classNames(
          `${selectorPrefix}-trigger`,
          `${selectorPrefix}-trigger-${collapseDirection?.toLowerCase()}`,
        )}
        onClick={_onCollapse}
      >
        {triggerInner}
      </div>
    );
  }, [trigger, collapseDirection, DefaultTrigger, collapsible, selectorPrefix]);

  // 计算折叠样式
  const collapseStyle = useMemo(() => {
    const isCollapsed = collapsible;

    switch (collapseDirection) {
      case 'L':
      case 'R':
        return {
          maxWidth: isCollapsed ? targetCollapsedSize : '100%',
        };
      case 'T':
      case 'B':
        return {
          maxHeight: isCollapsed ? targetCollapsedSize : '100%',
        };
      default:
        return {};
    }
  }, [collapseDirection, collapsible, targetCollapsedSize]);

  // 监听 defaultCollapsible 变化
  useUpdateEffect(() => {
    setCollapsible(defaultCollapsible);
  }, [defaultCollapsible]);

  /**
   * 处理折叠状态变化
   */
  const _onCollapse = useCallback(() => {
    const newCollapsed = !collapsible;
    setCollapsible(newCollapsed);
    onCollapse?.(newCollapsed);
  }, [collapsible, onCollapse]);

  return {
    renderTrigger,
    collapseStyle,
  };
};
