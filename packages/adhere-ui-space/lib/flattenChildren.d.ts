import React from 'react';
export type FlatChild = {
    node: React.ReactNode;
    key: React.Key;
};
/**
 * 递归扁平化子节点：展开 Fragment，过滤空值 / boolean / 纯空白文本。
 * key 优先使用子元素自身 key，并带层级前缀以保证唯一且在重排时尽量稳定。
 */
export declare function flattenChildren(children: React.ReactNode, keyPrefix?: string): FlatChild[];
