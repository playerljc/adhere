import React, { ReactElement, ReactNode, isValidElement } from 'react';

import type { Deal, DealResult } from './types';

/**
 * 检查元素是否为有效的React元素
 * @param element - 要检查的元素
 * @returns 如果是有效的React元素返回true，否则返回false
 */
function isValidReactElement(element: unknown): element is ReactElement {
  return isValidElement(element);
}

/**
 * 检查元素是否为React Fragment
 * @param element - 要检查的React元素
 * @returns 如果是React Fragment返回true，否则返回false
 */
function isReactFragment(element: ReactElement): boolean {
  return element.type === React.Fragment;
}

/**
 * 检查元素是否为数组
 * @param element - 要检查的元素
 * @returns 如果是数组返回true，否则返回false
 */
function isArray(element: unknown): element is unknown[] {
  return Array.isArray(element);
}

/**
 * 处理单个React元素的样式
 * @param element - 要处理的React元素
 * @param prop - CSS属性名
 * @param value - CSS属性值
 * @returns 处理后的React元素
 */
function processElementStyle(
  element: ReactElement,
  prop: string,
  value: string,
): ReactElement {
  const { props } = element;
  
  // 如果没有style属性，创建一个空的style对象
  const newStyle = props.style ? { ...props.style } : {};
  newStyle[prop] = value;

  // 克隆元素并应用新的style
  return React.cloneElement(element, { ...props, style: newStyle }, props.children);
}

/**
 * 处理React元素数组的样式
 * @param elements - 要处理的React元素数组
 * @param prop - CSS属性名
 * @param value - CSS属性值
 * @returns 处理后的React元素数组
 */
function processElementArrayStyle(
  elements: ReactElement[],
  prop: string,
  value: string,
): ReactElement[] {
  return elements.map((element) => processElementStyle(element, prop, value));
}

/**
 * 处理React Fragment的样式
 * @param fragment - 要处理的React Fragment
 * @param prop - CSS属性名
 * @param value - CSS属性值
 * @returns 处理后的React Fragment
 */
function processFragmentStyle(
  fragment: ReactElement,
  prop: string,
  value: string,
): ReactElement {
  const { props } = fragment;
  const processedChildren = processElement(props.children, prop, value);
  
  return React.cloneElement(
    fragment,
    { ...props, children: processedChildren },
    processedChildren as ReactElement[],
  );
}

/**
 * 处理React元素的样式属性
 * @param element - 要处理的元素
 * @param prop - CSS属性名
 * @param value - CSS属性值
 * @returns 处理后的元素
 */
function processElement(
  element: ReactNode,
  prop: string,
  value: string,
): DealResult {
  if (!element) {
    return element as DealResult;
  }

  // 处理数组
  if (isArray(element)) {
    const reactElements = element.filter(isValidReactElement);
    if (reactElements.length === 0) {
      return element as DealResult;
    }
    return processElementArrayStyle(reactElements, prop, value);
  }

  // 处理单个React元素
  if (isValidReactElement(element)) {
    // 处理React Fragment
    if (isReactFragment(element)) {
      return processFragmentStyle(element, prop, value);
    }
    
    // 处理普通React元素
    return processElementStyle(element, prop, value);
  }

  // 非React元素直接返回
  return element as DealResult;
}

/**
 * 处理元素的样式属性
 * @description 根据条件为React元素添加或修改CSS样式属性
 * @param params - 处理参数
 * @param params.element - 要处理的React元素
 * @param params.conditional - 控制条件（当前未使用，保留用于未来扩展）
 * @param params.prop - CSS属性名
 * @param params.value - CSS属性值
 * @returns 处理后的React元素或元素数组
 * 
 * @example
 * ```tsx
 * // 隐藏元素
 * deal({
 *   element: <div>内容</div>,
 *   conditional: false,
 *   prop: 'display',
 *   value: 'none'
 * });
 * 
 * // 显示元素
 * deal({
 *   element: <div>内容</div>,
 *   conditional: true,
 *   prop: 'visibility',
 *   value: 'visible'
 * });
 * ```
 */
export function deal({
  element,
  conditional,
  prop,
  value,
}: Deal): DealResult {
  return processElement(element, prop, value);
}
