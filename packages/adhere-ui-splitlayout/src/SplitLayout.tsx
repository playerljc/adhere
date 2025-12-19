import classNames from 'classnames';
import React, { memo, useCallback, useContext, useLayoutEffect, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import * as TRBLC from './TRBLC';
import type {
  DirectionProps,
  DragEventParams,
  FixedElementPosition,
  ResizeCursor,
  SplitLayoutComponent,
  SplitLayoutProps,
} from './types';

const FlexContext = FlexLayout.Context;
const flexLayoutSelectorPrefix = FlexLayout.selectorPrefix;
const selectorPrefix = 'adhere-ui-split-layout';

const { useTheme } = ConfigProvider;

/**
 * 将百分比字符串转换为小数
 * @param percent - 百分比字符串，如 "50%"
 * @returns 对应的小数值，如 0.5
 * @example
 * toPoint("50%") // 返回 0.5
 * toPoint("25%") // 返回 0.25
 */
function toPoint(percent: string): number {
  const str = Number(percent.replace('%', ''));
  return str / 100;
}

/**
 * 内部分割布局组件
 * 提供可拖拽的分割线功能，支持水平和垂直方向
 */
const InternalSplitLayout = memo<SplitLayoutProps>((props) => {
  const {
    className,
    style,
    maxSize = '100%',
    minSize = 10,
    onCanDrag,
    onDragStarted,
    onDragFinished,
    onChange,
    onOut,
  } = props;

  const { direction } = useContext(FlexContext);

  // DOM元素引用
  const el = useRef<HTMLDivElement | null>(null);
  const fixedEl = useRef<HTMLElement | null>(null);
  const autoEl = useRef<HTMLElement | null>(null);
  const containerEl = useRef<HTMLElement | null>(null);

  // 支持的分割线组合情况
  const situation = useRef(
    new Map([
      [`${flexLayoutSelectorPrefix}-fixed_${flexLayoutSelectorPrefix}-auto`, true],
      [`${flexLayoutSelectorPrefix}-auto_${flexLayoutSelectorPrefix}-fixed`, true],
    ]),
  );

  // 状态管理
  const isEnter = useRef(false);
  const isOut = useRef(false);
  const isDown = useRef(false);
  const isMove = useRef(false);

  // 数值计算
  const startVal = useRef(0);
  const changeVal = useRef(0);
  const changeBaseVal = useRef(0);
  const fixedValue = useRef(0);
  const maxDimension = useRef(0);

  useTheme<HTMLElement>({
    elRef: el,
    group: 'normal',
    displayName: 'SplitLayout',
  });

  /**
   * 检查当前分割线是否支持拖拽
   * @returns 是否支持拖拽
   */
  const checked = useCallback((): boolean => {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;
    const keys = Array.from(situation.current.keys());

    return keys.some((key) => {
      const arr = key.split('_');
      const prevKey = arr[0];
      const nextKey = arr[1];

      return (
        previousElementSibling?.classList.contains(prevKey) &&
        nextElementSibling?.classList.contains(nextKey)
      );
    });
  }, []);

  /**
   * 获取固定尺寸的元素
   * @returns 固定尺寸的DOM元素
   */
  const getFixedEl = useCallback((): HTMLElement => {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }, []);

  /**
   * 获取自动尺寸的元素
   * @returns 自动尺寸的DOM元素
   */
  const getAutoEl = useCallback((): HTMLElement => {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-auto`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }, []);

  /**
   * 获取调整大小的光标样式类名
   * @returns 光标样式类名
   */
  const getResizeClass = useCallback((): ResizeCursor => {
    return direction === 'vertical' ? 'row-resize' : 'col-resize';
  }, [direction]);

  /**
   * 获取方向相关的属性配置
   * @returns 方向属性配置
   */
  const getProps = useCallback((): DirectionProps => {
    return direction === 'vertical'
      ? { page: 'pageY', dimension: 'height', offset: 'offsetHeight' }
      : { page: 'pageX', dimension: 'width', offset: 'offsetWidth' };
  }, [direction]);

  /**
   * 获取固定元素的位置
   * @returns 固定元素位置
   */
  const getFixedElPosition = useCallback((): FixedElementPosition => {
    const { previousElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? 'prev'
      : 'next';
  }, []);

  /**
   * 获取最大尺寸
   * @returns 最大尺寸值
   */
  const getMaxDimension = useCallback((): number => {
    if (maxDimension.current) {
      return maxDimension.current;
    }

    const fixedEl = getFixedEl();
    const autoEl = getAutoEl();
    const { offset } = getProps();

    maxDimension.current = fixedEl[offset] + autoEl[offset];

    return maxDimension.current;
  }, [getFixedEl, getAutoEl, getProps]);

  /**
   * 获取最大尺寸限制
   * @returns 最大尺寸限制值
   */
  const getMaxSize = useCallback((): number => {
    let resultVal = 0;
    const maxDimension = getMaxDimension();

    if (typeof maxSize === 'string') {
      resultVal = maxDimension * toPoint(maxSize);
    } else if (typeof maxSize === 'number') {
      resultVal = maxSize;
    }

    return resultVal > maxDimension ? maxDimension : resultVal;
  }, [maxSize, getMaxDimension]);

  /**
   * 获取最小尺寸限制
   * @returns 最小尺寸限制值
   */
  const getMinSize = useCallback((): number => {
    let resultVal = 0;
    const maxDimension = getMaxDimension();
    const { offset } = getProps();
    const elSize = el.current?.[offset] || 0;

    if (typeof minSize === 'string') {
      resultVal = maxDimension * toPoint(minSize);
    } else if (typeof minSize === 'number') {
      resultVal = minSize;
    }

    return resultVal < elSize ? elSize : resultVal;
  }, [minSize, getMaxDimension, getProps]);

  /**
   * 创建拖拽事件参数
   * @param event - 鼠标事件
   * @param targetValue - 目标尺寸
   * @returns 拖拽事件参数
   */
  const createDragEventParams = useCallback(
    (event: MouseEvent, targetValue: number): DragEventParams => {
      const { page } = getProps();
      return {
        event,
        currentPosition: event[page],
        startPosition: startVal.current,
        delta: changeVal.current,
        targetSize: targetValue,
      };
    },
    [getProps],
  );

  /**
   * 鼠标进入事件处理
   * @param e - 鼠标事件
   */
  const onMouseenter = useCallback(
    (e: MouseEvent) => {
      el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);
      isOut.current = false;
      isEnter.current = true;
      onCanDrag?.(createDragEventParams(e, 0));
    },
    [getResizeClass, onCanDrag, createDragEventParams],
  );

  /**
   * 鼠标按下事件处理
   * @param e - 鼠标事件
   */
  const onMousedown = useCallback(
    (e: MouseEvent) => {
      el.current?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);

      if (isEnter.current) {
        isDown.current = true;
        startVal.current = e[getProps().page];
        fixedValue.current = fixedEl.current?.[getProps().offset] || 0;
        onDragStarted?.(createDragEventParams(e, 0));
      }
    },
    [getResizeClass, getProps, onDragStarted, createDragEventParams],
  );

  /**
   * 鼠标抬起事件处理
   * @param e - 鼠标事件
   */
  const onMouseup = useCallback(
    (e: MouseEvent) => {
      el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

      if (isDown.current) {
        isDown.current = false;
        isMove.current = false;
        isEnter.current = !isOut.current;
        startVal.current = 0;
        changeBaseVal.current = changeBaseVal.current + changeVal.current;
        onDragFinished?.(createDragEventParams(e, 0));
      }
    },
    [getResizeClass, onDragFinished, createDragEventParams],
  );

  /**
   * 鼠标离开容器事件处理
   * @param e - 鼠标事件
   */
  const onMouseleave = useCallback(
    (e: MouseEvent) => {
      if (isDown.current) {
        isDown.current = false;
        isMove.current = false;
        isEnter.current = false;
        startVal.current = 0;
        changeBaseVal.current += changeVal.current;
        onDragFinished?.(createDragEventParams(e, 0));
      }
    },
    [onDragFinished, createDragEventParams],
  );

  /**
   * 鼠标移动事件处理
   * @param e - 鼠标事件
   */
  const onMousemove = useCallback(
    (e: MouseEvent) => {
      if (isEnter.current && isDown.current) {
        isMove.current = true;

        const { page } = getProps();
        const end = e[page];
        changeVal.current = end - startVal.current;

        const position = getFixedElPosition();
        const computedValue =
          position === 'prev'
            ? fixedValue.current + changeVal.current
            : fixedValue.current - changeVal.current;

        const maxSize = getMaxSize();
        const minSize = getMinSize();

        let targetValue: number;
        if (computedValue >= maxSize) {
          targetValue = maxSize;
        } else if (computedValue <= minSize) {
          targetValue = minSize;
        } else {
          targetValue = computedValue;
        }

        if (fixedEl.current) {
          fixedEl.current.style[getProps().dimension] = `${targetValue}px`;
        }

        onChange?.(createDragEventParams(e, targetValue));
      }
    },
    [getProps, getFixedElPosition, getMaxSize, getMinSize, onChange, createDragEventParams],
  );

  /**
   * 鼠标离开事件处理
   * @param e - 鼠标事件
   */
  const onMouseout = useCallback(
    (e: MouseEvent) => {
      isOut.current = true;

      if (!isDown.current) {
        isEnter.current = false;
        onOut?.(createDragEventParams(e, 0));
      }
    },
    [onOut, createDragEventParams],
  );

  /**
   * 初始化事件监听器
   */
  const initEvents = useCallback(() => {
    const elements = [el.current, fixedEl.current, autoEl.current].filter(Boolean) as HTMLElement[];

    // 添加事件监听器
    el.current?.addEventListener('mouseenter', onMouseenter);
    el.current?.addEventListener('mousedown', onMousedown);

    elements.forEach((element) => {
      element.addEventListener('mousemove', onMousemove);
      element.addEventListener('mouseout', onMouseout);
      element.addEventListener('mouseup', onMouseup);
    });

    containerEl.current?.addEventListener('mouseleave', onMouseleave);
  }, [onMouseenter, onMousedown, onMousemove, onMouseout, onMouseup, onMouseleave]);

  /**
   * 移除事件监听器
   */
  const removeEvents = useCallback(() => {
    const elements = [el.current, fixedEl.current, autoEl.current].filter(Boolean) as HTMLElement[];

    // 移除事件监听器
    el.current?.removeEventListener('mouseenter', onMouseenter);
    el.current?.removeEventListener('mousedown', onMousedown);

    elements.forEach((element) => {
      element.removeEventListener('mousemove', onMousemove);
      element.removeEventListener('mouseout', onMouseout);
      element.removeEventListener('mouseup', onMouseup);
    });

    containerEl.current?.removeEventListener('mouseleave', onMouseleave);
  }, [onMouseenter, onMousedown, onMousemove, onMouseout, onMouseup, onMouseleave]);

  // 初始化
  useLayoutEffect(() => {
    if (checked()) {
      fixedEl.current = getFixedEl();
      autoEl.current = getAutoEl();
      containerEl.current = el.current?.parentElement as HTMLElement;

      if (containerEl.current) {
        containerEl.current.classList.add(`${selectorPrefix}-no-select`);
      }

      initEvents();
    }

    return removeEvents;
  }, [checked, getFixedEl, getAutoEl, initEvents, removeEvents]);

  // 更新时重新初始化
  useLayoutEffect(() => {
    if (checked()) {
      // 重置状态
      isEnter.current = false;
      isOut.current = false;
      isDown.current = false;
      isMove.current = false;

      startVal.current = 0;
      changeVal.current = 0;
      changeBaseVal.current = 0;
      fixedValue.current = 0;
      maxDimension.current = 0;

      fixedEl.current = getFixedEl();
      autoEl.current = getAutoEl();

      initEvents();
    }

    return removeEvents;
  }, [checked, getFixedEl, getAutoEl, initEvents, removeEvents]);

  return (
    <div
      ref={el}
      className={classNames(selectorPrefix, `${selectorPrefix}-${direction}`, className)}
      style={style ?? {}}
    />
  );
});

InternalSplitLayout.displayName = 'InternalSplitLayout';

const SplitLayout = InternalSplitLayout as SplitLayoutComponent;

SplitLayout.displayName = 'SplitLayout';

SplitLayout.TRBLC = TRBLC;

export default SplitLayout;
