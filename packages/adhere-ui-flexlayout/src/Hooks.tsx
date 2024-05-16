import {
  /*useMount,*/
  useUpdateEffect,
} from 'ahooks';
import classNames from 'classnames';
import React, {
  MutableRefObject,
  useCallback,
  /*useEffect,*/
  useMemo,
  /*useRef,*/
  useState,
} from 'react';

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

import { gridCount } from './Fixed';
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
  const [collapsible, setCollapsible] = useState(defaultCollapsible);

  // const [box, setBox] = useState({
  //   width: '100%',
  //   height: '100%',
  // });

  // const originElSize = useRef<{
  //   computedWidth: number | string;
  //   computedHeight: number | string;
  // }>({ computedWidth: 0, computedHeight: 0 });

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

  useUpdateEffect(() => {
    setCollapsible(defaultCollapsible);
  }, [defaultCollapsible]);

  // useUpdateEffect(() => {
  //   adapterSize();
  // }, [collapsible]);

  // useEffect(() => {
  //   const el = elRef.current as HTMLDivElement;
  //
  //   const ro = new ResizeObserver((entries) => {
  //     if (!collapsible) {
  //       for (const entry of entries) {
  //         const target = entry.target as HTMLElement;
  //
  //         if (target === el) {
  //           originElSize.current = {
  //             computedWidth: toPx(target.offsetWidth),
  //             computedHeight: toPx(target.offsetHeight),
  //           };
  //         }
  //       }
  //     }
  //   });
  //
  //   ro.observe(el);
  //
  //   return () => {
  //     ro.unobserve(el);
  //   };
  // }, [collapsible]);

  // useMount(() => {
  //   // 获取originElSize
  //   const computedStyle = window.getComputedStyle(elRef.current as HTMLDivElement);
  //   const width = computedStyle.width;
  //   const height = computedStyle.height;
  //   originElSize.current = {
  //     computedWidth: width ? width : 'auto',
  //     computedHeight: height ? height : 'auto',
  //   };
  // });

  // useMount(() => {
  //   // adapterSize();
  //   const computedStyle = window.getComputedStyle(elRef.current as HTMLDivElement);
  //   const width = parseFloat(computedStyle.width);
  //   const height = parseFloat(computedStyle.height);
  //   setBox({
  //     width,
  //     height,
  //   });
  // });

  // /**
  //  * toPx
  //  * @param value
  //  */
  // function toPx(value) {
  //   if (typeof value === 'number') return `${value}px`;
  //
  //   return value;
  // }

  /**
   * adapterSize
   */
  // function adapterSize() {
  //   const el = elRef.current as HTMLDivElement;
  //
  //   if (collapsible) {
  //     if (collapseDirection === 'L') {
  //       el.style.width = toPx(collapsedSize);
  //     } else if (collapseDirection === 'R') {
  //       el.style.width = toPx(collapsedSize);
  //     } else if (collapseDirection === 'T') {
  //       el.style.height = toPx(collapsedSize);
  //     } else if (collapseDirection === 'B') {
  //       el.style.height = toPx(collapsedSize);
  //     }
  //     return;
  //   }
  //
  //   if (collapseDirection === 'L') {
  //     el.style.width = `${originElSize.current.computedWidth}`;
  //   } else if (collapseDirection === 'R') {
  //     el.style.width = `${originElSize.current.computedWidth}`;
  //   } else if (collapseDirection === 'T') {
  //     el.style.height = `${originElSize.current.computedHeight}`;
  //   } else if (collapseDirection === 'B') {
  //     el.style.height = `${originElSize.current.computedHeight}`;
  //   }
  // }

  // const collapseClassName = useMemo(() => {
  //   // 关闭
  //   if (collapsible) {
  //     if (collapseDirection === 'L') {
  //       return `${selectorPrefix}-l-close`;
  //     } else if (collapseDirection === 'R') {
  //       return `${selectorPrefix}-r-close`;
  //     } else if (collapseDirection === 'T') {
  //       return `${selectorPrefix}-t-close`;
  //     } else if (collapseDirection === 'B') {
  //       return `${selectorPrefix}-b-close`;
  //     }
  //     return null;
  //   }
  //
  //   if (collapseDirection === 'L') {
  //     return `${selectorPrefix}-l-open`;
  //   } else if (collapseDirection === 'R') {
  //     return `${selectorPrefix}-r-open`;
  //   } else if (collapseDirection === 'T') {
  //     return `${selectorPrefix}-t-open`;
  //   } else if (collapseDirection === 'B') {
  //     return `${selectorPrefix}-b-open`;
  //   }
  //
  //   return null;
  // }, [collapseDirection, collapsible, collapsedSize]);

  const collapseStyle = useMemo(() => {
    // 关闭
    if (collapsible) {
      if (collapseDirection === 'L') {
        return {
          maxWidth: collapsedSize,
        };
      } else if (collapseDirection === 'R') {
        return {
          maxWidth: collapsedSize,
        };
      } else if (collapseDirection === 'T') {
        return {
          maxHeight: collapsedSize,
        };
      } else if (collapseDirection === 'B') {
        return {
          maxHeight: collapsedSize,
        };
      }

      return {};
    }

    // const { width, height } = box;

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
  }, [collapseDirection, collapsible, collapsedSize]);

  /**
   * _onCollapse
   */
  function _onCollapse() {
    setCollapsible(!collapsible);
    onCollapse?.(!collapsible);
  }

  return {
    renderTrigger,
    // collapseClassName,
    collapseStyle,
  };
};
