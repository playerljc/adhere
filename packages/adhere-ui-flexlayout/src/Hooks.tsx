import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { MutableRefObject, useCallback, useContext, useMemo, useState } from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { gridCount } from './Fixed';
import { getValueWithUnit } from './Util';
import type { FixedProps } from './types';

// import { ResizeObserver } from '@juggle/resize-observer';

/**
 * useGrid
 * @description 是否使用了栅格系统
 * @param {FixedProps} props
 * @return {boolean}
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
 * useGap
 * @param {number | number[]} gutter
 * @return {boolean}
 */
export const useGap = (gutter: any): boolean =>
  useMemo(() => {
    if (
      gutter === undefined ||
      gutter === null ||
      gutter === '' ||
      gutter === 0 ||
      typeof gutter === 'function' ||
      (typeof gutter === 'object' && !Array.isArray(gutter))
    ) {
      return false;
    }

    if (Array.isArray(gutter)) {
      if (gutter.length === 0) return false;

      if (gutter.length >= 1 && gutter.length <= 2) {
        return !gutter.some(
          (g) => g === undefined || g === null || g === '' || typeof g !== 'number',
        );
      }
    }

    return true;
  }, [gutter]);

/**
 * useTrigger
 */
export const useTrigger = ({
  trigger,
  collapseDirection = 'L',
  collapsedSize = 80,
  defaultCollapsible = false,
  onCollapse,
  selectorPrefix,
  elRef,
}: Pick<
  FixedProps,
  'trigger' | 'collapseDirection' | 'collapsedSize' | 'defaultCollapsible' | 'onCollapse'
> & {
  elRef: MutableRefObject<HTMLDivElement | null>;
  selectorPrefix: string;
}) => {
  const { media } = useContext(ConfigProvider.Context);

  const targetCollapsedSize = useMemo(
    () => getValueWithUnit(collapsedSize, media),
    [collapsedSize],
  );

  const [collapsible, setCollapsible] = useState(defaultCollapsible);

  // 缺省的Trigger元素
  const DefaultTrigger = useMemo(() => {
    if (collapseDirection === 'L') {
      if (collapsible) {
        return <DoubleRightOutlined />;
      } else return <DoubleLeftOutlined />;
    } else if (collapseDirection === 'R') {
      if (collapsible) {
        return <DoubleLeftOutlined />;
      } else return <DoubleRightOutlined />;
    } else if (collapseDirection === 'T') {
      if (collapsible) {
        return <DoubleRightOutlined style={{ transform: 'rotate(90deg)' }} />;
      } else return <DoubleLeftOutlined style={{ transform: 'rotate(90deg)' }} />;
    } else if (collapseDirection === 'B') {
      if (collapsible) {
        return <DoubleLeftOutlined style={{ transform: 'rotate(90deg)' }} />;
      } else return <DoubleRightOutlined style={{ transform: 'rotate(90deg)' }} />;
    }
  }, [collapseDirection, collapsible]);

  // 渲染Trigger
  const renderTrigger = useCallback(() => {
    if (trigger) {
      const triggerInner = trigger?.(collapsible as boolean, DefaultTrigger);

      if (triggerInner) {
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
      }

      return null;
    }

    return null;
  }, [trigger, collapseDirection, DefaultTrigger]);

  const collapseStyle = useMemo(() => {
    // 关闭
    if (collapsible) {
      if (collapseDirection === 'L') {
        return {
          maxWidth: targetCollapsedSize,
        };
      } else if (collapseDirection === 'R') {
        return {
          maxWidth: targetCollapsedSize,
        };
      } else if (collapseDirection === 'T') {
        return {
          maxHeight: targetCollapsedSize,
        };
      } else if (collapseDirection === 'B') {
        return {
          maxHeight: targetCollapsedSize,
        };
      }

      return {};
    }

    // 显示
    if (collapseDirection === 'L') {
      return {
        maxWidth: '100%',
      };
    } else if (collapseDirection === 'R') {
      return {
        maxWidth: '100%',
      };
    } else if (collapseDirection === 'T') {
      return {
        maxHeight: '100%',
      };
    } else if (collapseDirection === 'B') {
      return {
        maxHeight: '100%',
      };
    }

    return {};
  }, [collapseDirection, collapsible, targetCollapsedSize]);

  useUpdateEffect(() => {
    setCollapsible(defaultCollapsible);
  }, [defaultCollapsible]);

  /**
   * _onCollapse
   */
  function _onCollapse() {
    setCollapsible(!collapsible);
    onCollapse?.(!collapsible);
  }

  return {
    renderTrigger,
    collapseStyle,
  };
};
