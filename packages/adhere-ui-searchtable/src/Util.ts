import lodashClone from 'lodash.clone';
import lodashCloneDeep from 'lodash.clonedeep';

import Util from '@baifendian/adhere-util';

/**
 * findRecord
 * @description 在dataResource中查找rowKey是id的record
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {any} id
 * @return {any}
 */
export function findRecord(dataSource: any[], rowKey: string = 'id', id: any) {
  function find(_dataSource) {
    let record;

    for (let i = 0; i < _dataSource.length; i++) {
      if (_dataSource[i][rowKey] === id) {
        record = _dataSource[i];
        break;
      }

      const _item = _dataSource[i];

      if ('children' in _item && Array.isArray(_item.children) && !!_item.children.length) {
        record = find(_item.children);

        if (record) break;
      }
    }

    return record;
  }

  return find(dataSource);
}

/**
 * findBrother
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {any} id
 * @return {any[]}
 */
export function findBrother(dataSource: any[], rowKey: string = 'id', id: any): any[] {
  function find(_dataSource): any[] {
    let res: any[] = [];

    for (let i = 0; i < _dataSource.length; i++) {
      if (_dataSource[i][rowKey] === id) {
        res = _dataSource;
        break;
      }

      const _item = _dataSource[i];

      if ('children' in _item && Array.isArray(_item.children) && !!_item.children.length) {
        res = find(_item.children);

        if (res && !!res.length) break;
      }
    }

    return res;
  }

  return find(dataSource);
}

/**
 * flatDataSource
 * @description 拉平dataSource中的的children
 * @param {any[]} dataSource
 * @return {any[]}
 */
export function flatDataSource(dataSource: any[]) {
  const flatData: any[] = [];

  function loop(_dataSource) {
    for (let i = 0; i < _dataSource.length; i++) {
      const record = _dataSource[i];

      flatData.push(record);

      if ('children' in record && Array.isArray(record.children) && !!record.children) {
        loop(record.children);
      }
    }
  }

  loop(dataSource);

  return flatData;
}

/**
 * swap
 * @description 交换两个record
 * @param {any} record1
 * @param {any} record2
 */
export function swap(record1: any, record2: any) {
  const temp = JSON.parse(JSON.stringify(record1));

  Object.assign(record1, record2);

  Object.assign(record2, temp);
}

/**
 * isSameLevel
 * @description 是否是同一层级
 * @param {any[]} dataSource
 * @param {string} rowKey
 * @param {string} sourceId
 * @param {string} targetId
 * @return {boolean}
 */
export function isSameLevel({ dataSource, rowKey = 'id', sourceId, targetId }) {
  const brother = findBrother(dataSource, rowKey, sourceId);

  return brother.some((t) => t[rowKey] === targetId);
}

/**
 * createTreeDataChildren
 * @description 创建TreeData的children
 * @param {ReactElement} tdREL 单元格
 * @param {ReactNode} subChildren
 * @return {ReactNode[]}
 */
export const createTreeDataChildren = (tdREL, subChildren) => [
  tdREL.props.children[0],
  subChildren,
];

/**
 * createChildren
 * @description 创建children
 * @param {ReactElement} tdREL 单元格
 * @param {ReactNode} subChildren
 * @return {ReactNode[]}
 */
export const createChildren = (tdREL, subChildren) => {
  // @ts-ignore
  if ((tdREL?.props?.className || '').split(/\s+/gim).includes('ant-table-cell-with-append')) {
    // 如果是treeData数据
    return createTreeDataChildren(tdREL, subChildren);
  }

  return [subChildren];
};

export const cloneDeep = (obj: { [x: string]: any }) => {
  const targetObj = Object.keys(obj).reduce((cloneObj, prop) => {
    if (!prop.startsWith('_')) {
      cloneObj[prop] = obj[prop];
    }
    return cloneObj;
  }, {});

  return lodashCloneDeep(targetObj);
};

export const clone = lodashClone;
