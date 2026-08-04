import React from 'react';
import * as ReactIs from 'react-is';

export type FlatChild = {
  node: React.ReactNode;
  key: React.Key;
};

/**
 * 递归扁平化子节点：展开 Fragment，过滤空值 / boolean / 纯空白文本。
 * key 优先使用子元素自身 key，并带层级前缀以保证唯一且在重排时尽量稳定。
 */
export function flattenChildren(
  children: React.ReactNode,
  keyPrefix = '',
): FlatChild[] {
  const flat: FlatChild[] = [];
  const usedKeys = new Map<string, number>();
  let index = 0;

  const allocateKey = (base: string): string => {
    const count = usedKeys.get(base) ?? 0;
    usedKeys.set(base, count + 1);
    return count === 0 ? base : `${base}#${count}`;
  };

  React.Children.forEach(children, (child) => {
    if (child == null || typeof child === 'boolean') {
      return;
    }

    if (typeof child === 'string' && child.trim() === '') {
      return;
    }

    const childIndex = index;
    index += 1;

    if (ReactIs.isFragment(child)) {
      const fragmentChildren = (child as React.ReactElement<{ children?: React.ReactNode }>).props
        ?.children;
      const fragmentKey =
        React.isValidElement(child) && child.key != null
          ? String(child.key)
          : String(childIndex);
      flat.push(...flattenChildren(fragmentChildren, `${keyPrefix}${fragmentKey}.`));
      return;
    }

    const ownKey =
      React.isValidElement(child) && child.key != null
        ? String(child.key)
        : typeof child === 'string' || typeof child === 'number'
          ? `text-${child}`
          : String(childIndex);

    flat.push({
      node: child,
      key: allocateKey(`${keyPrefix}${ownKey}`),
    });
  });

  return flat;
}
