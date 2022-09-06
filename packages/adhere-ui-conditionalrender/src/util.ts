import React, { ReactElement } from 'react';

import type { Deal } from './types';

/**
 * check
 * @description - 检查元素是否是ReactElement
 * @param element
 */
function check(element: any): boolean {
  if (!element) return false;

  return typeof element === 'object' && '$$typeof' in element;
}

/**
 * checkAndDeal
 * @description 检查和处理
 * @param element
 * @param prop
 * @param value
 */
function checkAndDeal({
  element,
  prop,
  value,
}: {
  element: ReactElement;
  prop: string;
  value: string;
}): ReactElement {
  // 如果是ReactElement
  if (check(element)) {
    // 没有style属性则进行克隆，放入style属性
    if (!('style' in element.props)) {
      const { props } = element;

      element = cloneElement(element, { ...props, style: {} }, props.children);
    }

    // 设置prop = value
    element.props.style[prop] = value;
  }

  return element;
}

/**
 * cloneElement
 * @description - 对ReactElement进行Clone
 * @param element
 * @param props
 * @param children
 */
function cloneElement(element: ReactElement, props: any, children: any[]): ReactElement {
  return React.cloneElement(element, props, children);
}

/**
 * arrayDeal
 * @description - array的处理
 * @param element
 * @param prop
 * @param value
 */
function arrayDeal({
  element,
  prop,
  value,
}: {
  element: ReactElement[];
  prop: string;
  value: string;
}): ReactElement[] {
  return element.map((c) =>
    checkAndDeal({
      element: c,
      prop,
      value,
    }),
  );
}

/**
 * elementDeal
 * @description 元素的处理
 * @param element
 * @param prop
 * @param value
 */
function elementDeal(element: React.ReactElement, prop: string, value: string): ReactElement {
  return checkAndDeal({
    element,
    prop,
    value,
  });
}

/**
 * deal
 * @description - 处理
 * @param element
 * @param conditional
 * @param prop
 * @param value
 */
export function deal({
  element,
  conditional,
  prop,
  value,
}: Deal): ReactElement | ReactElement[] | null {
  if (!element) return element;

  // array
  if (Array.isArray(element)) {
    element = arrayDeal({ element, prop, value });
  }
  // fragment
  else {
    // @ts-ignore
    if (element.type === Symbol.for('react.fragment')) {
      const frChildren = deal({ element: element.props.children, conditional, prop, value });
      element = cloneElement(
        element,
        { ...element.props, children: frChildren },
        frChildren as any[],
      );
    }
    // ReactElement
    else {
      element = elementDeal(element, prop, value);
    }
  }

  return element;
}
