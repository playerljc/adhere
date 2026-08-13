import type { FC } from 'react';
// import * as ReactIs from 'react-is';
import React from 'react';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import { DictComponentProps, SearchFactory } from '../types';
import DictRefreshHOC from './DictRefreshHOC';
import { getOriginDictNameByItemName } from './Util';

const { memoized } = WatchMemoized;

const map = new Map<string, (originDictName: string, dictName?: string) => any>();

/**
 * setItem
 * @param {string} itemName - 组件名称
 * @param {string} functionName - 功能名称
 * @param {(originDictName: string, dictName?: string) => any)} handler
 */
export function setItem<T, D>(
  itemName: string,
  functionName: string,
  handler: (
    originDictName: string,
    dictName?: string,
  ) => FC<DictComponentProps<T, D>> | SearchFactory<T, D>,
) {
  map.set(`${itemName}${functionName}`, handler);
}

/**
 * getItem
 * @param {string} itemName - 组件名
 * @param {string} functionName - 功能名
 * @param {string} dictName - 字典的名称
 */
export function getItem<P>({
  itemName,
  functionName,
  dictName,
}: {
  itemName: string;
  functionName: string;
  dictName: string;
}) {
  const name = getOriginDictNameByItemName(dictName, itemName);

  if (!name) return null;

  const handler = map.get(`${itemName}${functionName}`);

  if (!handler) return null;

  const createItem = memoized.createMemoFun(handler);
  const item = createItem?.(name, dictName);

  if (React.isValidElement(item)) {
    return DictRefreshHOC<P>(item as any);
  }

  return item;
}

/**
 * ItemFactory
 * // p = 字典名(业务名 + 组件名) + 功能名
 * // p = SystemAppBasicLayoutRectifyTransferListSection + SelectDynamic + MultiFormItem
 * @param params
 */
function ItemFactory<P>({
  itemName,
  functionName,
  dictName,
}: {
  itemName: string;
  functionName: string;
  dictName: string;
}) {
  return getItem<P>({ itemName, functionName, dictName });
}

export default ItemFactory;
