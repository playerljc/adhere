import classNames from 'classnames';
import React, { FC, memo, useContext, useLayoutEffect, useRef } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import * as TRBLC from './TRBLC';
import type { SplitLayoutComponent, SplitLayoutProps } from './types';

const FlexContext = FlexLayout.Context;
const flexLayoutSelectorPrefix = FlexLayout.selectorPrefix;
const directionProp = {
  horizontal: {
    page: 'pageX',
    dimension: 'width',
    offset: 'offsetWidth',
  },
  vertical: {
    page: 'pageY',
    dimension: 'height',
    offset: 'offsetHeight',
  },
};
const selectorPrefix = 'adhere-ui-split-layout';

/**
 * toPoint - 百分数转化为小数
 * @param percent
 */
function toPoint(percent: string) {
  let str = Number(percent.replace('%', ''));

  return str / 100;
}

const InternalSplitLayout = memo<SplitLayoutProps>((props) => {
  const {
    className = '',
    style = {},
    maxSize = '100%',
    minSize = 10,
    onCanDrag,
    onDragStarted,
    onDragFinished,
    onChange,
  } = props;

  const { direction } = useContext(FlexContext);

  const el = useRef<HTMLDivElement | null>(null);
  const fixedEl = useRef<HTMLElement | null>(null);
  const autoEl = useRef<HTMLElement | null>(null);
  const containerEl = useRef<HTMLElement | null>();
  const situation = useRef(
    new Map([
      [`${flexLayoutSelectorPrefix}-fixed_${flexLayoutSelectorPrefix}-auto`, true],
      [`${flexLayoutSelectorPrefix}-auto_${flexLayoutSelectorPrefix}-fixed`, true],
    ]),
  );

  const isEnter = useRef(false);
  const isOut = useRef(false);
  const isDown = useRef(false);
  const isMove = useRef(false);

  const startVal = useRef(0);
  const changeVal = useRef(0);
  const changeBaseVal = useRef(0);
  const fixedValue = useRef(0);
  const maxDimension = useRef(0);

  /**
   * checked
   */
  function checked() {
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
  }

  /**
   * getFixedEl
   */
  function getFixedEl(): HTMLElement {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }

  /**
   * getAutoEl
   */
  function getAutoEl(): HTMLElement {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-auto`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }

  /**
   * getResizeClass
   */
  function getResizeClass(): 'row-resize' | 'col-resize' {
    return direction === 'vertical' ? 'row-resize' : 'col-resize';
  }

  /**
   * getProps
   */
  function getProps() {
    return directionProp[direction];
  }

  function getFixedElPosition(): 'prev' | 'next' {
    const { previousElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? 'prev'
      : 'next';
  }

  /**
   * getMaxDimension
   */
  function getMaxDimension(): number {
    if (maxDimension.current) {
      return maxDimension.current;
    }

    const fixedEl = getFixedEl();

    const autoEl = getAutoEl();

    const { offset } = getProps();

    maxDimension.current = fixedEl[offset] + autoEl[offset];

    return maxDimension.current;
  }

  function getMaxSize(): number {
    let resultVal = 0;

    const maxDimension = getMaxDimension();

    if (typeof maxSize === 'string') {
      resultVal = maxDimension * toPoint(maxSize);
    } else if (typeof maxSize === 'number') {
      resultVal = maxSize;
    }

    return resultVal > maxDimension ? maxDimension : resultVal;
  }

  /**
   * getMinSize
   */
  function getMinSize(): number {
    let resultVal = 0;

    const maxDimension = getMaxDimension();

    const { offset } = getProps();

    const elSize = el[offset];

    if (typeof minSize === 'string') {
      resultVal = maxDimension * toPoint(minSize);
    } else if (typeof minSize === 'number') {
      resultVal = minSize;
    }

    return resultVal < elSize ? elSize : resultVal;
  }

  function onMouseenter(e) {
    el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

    isOut.current = false;

    isEnter.current = true;

    onCanDrag && onCanDrag(e);
  }

  function onMousedown(e) {
    el.current?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);

    if (isEnter.current) {
      isDown.current = true;

      startVal.current = e[getProps().page];

      fixedValue.current = fixedEl.current?.[getProps().offset];

      onDragStarted && onDragStarted(e);
    }
  }

  function onMouseup(e) {
    el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

    if (isDown.current) {
      isDown.current = false;

      isMove.current = false;

      isEnter.current = !isOut;

      startVal.current = 0;

      changeBaseVal.current = changeBaseVal.current + changeVal.current;

      onDragFinished && onDragFinished(e);
    }
  }

  function onMouseleave(e) {
    if (isDown.current) {
      isDown.current = false;

      isMove.current = false;

      isEnter.current = false;

      startVal.current = 0;

      changeBaseVal.current += changeVal.current;

      onDragFinished && onDragFinished(e);
    }
  }

  function onMousemove(e) {
    if (isEnter.current && isDown.current) {
      isMove.current = true;

      let end = e[getProps().page];

      changeVal.current = end - startVal.current;

      const position = getFixedElPosition();

      const computedValue =
        position === 'prev'
          ? fixedValue.current + changeVal.current
          : fixedValue.current - changeVal.current;

      let targetValue;

      const maxSize = getMaxSize();

      const minSize = getMinSize();

      if (computedValue >= maxSize || computedValue <= minSize) {
        if (computedValue >= maxSize) {
          targetValue = maxSize;
        } else {
          if (computedValue <= minSize) {
            targetValue = minSize;
          }
        }
      } else {
        targetValue = computedValue;
      }

      (fixedEl.current as HTMLElement).style[getProps().dimension] = `${targetValue}px`;

      onChange && onChange(e);
    }
  }

  function onMouseout(e) {
    isOut.current = true;

    if (!isDown.current) {
      isEnter.current = false;

      onChange && onChange(e);
    }
  }

  function initEvents() {
    el.current?.removeEventListener?.('mouseenter', onMouseenter);

    el.current?.addEventListener?.('mouseenter', onMouseenter);

    el.current?.removeEventListener?.('mousedown', onMousedown);

    el.current?.addEventListener?.('mousedown', onMousedown);

    fixedEl.current?.removeEventListener?.('mousemove', onMousemove);

    el.current?.removeEventListener?.('mousemove', onMousemove);

    autoEl.current?.removeEventListener?.('mousemove', onMousemove);

    fixedEl.current?.addEventListener?.('mousemove', onMousemove);

    el.current?.addEventListener?.('mousemove', onMousemove);

    autoEl.current?.addEventListener?.('mousemove', onMousemove);

    fixedEl.current?.removeEventListener?.('mouseout', onMouseout);

    el.current?.removeEventListener?.('mouseout', onMouseout);

    autoEl.current?.removeEventListener?.('mouseout', onMouseout);

    fixedEl.current?.addEventListener?.('mouseout', onMouseout);

    el.current?.addEventListener?.('mouseout', onMouseout);

    autoEl.current?.addEventListener?.('mouseout', onMouseout);

    fixedEl.current?.removeEventListener?.('mouseup', onMouseup);

    el.current?.removeEventListener?.('mouseup', onMouseup);

    autoEl.current?.removeEventListener?.('mouseup', onMouseup);

    fixedEl.current?.addEventListener?.('mouseup', onMouseup);

    el.current?.addEventListener?.('mouseup', onMouseup);

    autoEl.current?.addEventListener?.('mouseup', onMouseup);

    containerEl.current?.removeEventListener?.('mouseleave', onMouseleave);

    containerEl.current?.addEventListener?.('mouseleave', onMouseleave);
  }

  function removeEvents() {
    el.current?.removeEventListener?.('mouseenter', onMouseenter);

    el.current?.removeEventListener?.('mouseenter', onMouseenter);

    el.current?.removeEventListener?.('mousedown', onMousedown);

    el.current?.removeEventListener?.('mousedown', onMousedown);

    fixedEl.current?.removeEventListener?.('mousemove', onMousemove);

    el.current?.removeEventListener?.('mousemove', onMousemove);

    autoEl.current?.removeEventListener?.('mousemove', onMousemove);

    fixedEl.current?.removeEventListener?.('mousemove', onMousemove);

    el.current?.removeEventListener?.('mousemove', onMousemove);

    autoEl.current?.removeEventListener?.('mousemove', onMousemove);

    fixedEl.current?.removeEventListener?.('mouseout', onMouseout);

    el.current?.removeEventListener?.('mouseout', onMouseout);

    autoEl.current?.removeEventListener?.('mouseout', onMouseout);

    fixedEl.current?.removeEventListener?.('mouseout', onMouseout);

    el.current?.removeEventListener?.('mouseout', onMouseout);

    autoEl.current?.removeEventListener?.('mouseout', onMouseout);

    fixedEl.current?.removeEventListener?.('mouseup', onMouseup);

    el.current?.removeEventListener?.('mouseup', onMouseup);

    autoEl.current?.removeEventListener?.('mouseup', onMouseup);

    fixedEl.current?.removeEventListener?.('mouseup', onMouseup);

    el.current?.removeEventListener?.('mouseup', onMouseup);

    autoEl.current?.removeEventListener?.('mouseup', onMouseup);

    containerEl.current?.removeEventListener?.('mouseleave', onMouseleave);

    containerEl.current?.removeEventListener?.('mouseleave', onMouseleave);
  }

  useLayoutEffect(() => {
    if (checked()) {
      fixedEl.current = getFixedEl();

      autoEl.current = getAutoEl();

      containerEl.current = el.current?.parentElement as HTMLElement;

      containerEl.current.classList.add(`${selectorPrefix}-no-select`);

      initEvents();
    }

    return () => removeEvents();
  }, []);

  useLayoutEffect(() => {
    if (checked()) {
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

    return () => removeEvents();
  });

  return (
    <div
      ref={el}
      className={classNames(selectorPrefix, `${selectorPrefix}-${direction}`, className ?? '')}
      style={style ?? {}}
    />
  );
});

const SplitLayout = InternalSplitLayout as SplitLayoutComponent;

SplitLayout.TRBLC = TRBLC;

export default SplitLayout;
