import lodashClone from 'lodash.clone';
// import lodashCloneDeep from 'lodash.clonedeep';
import cloneDeepWith from 'lodash/cloneDeepWith';
import deepClone from 'rfdc';
import type { ValidatorRule } from './types';

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
  const temp = deepClone()(record1);

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
  // const targetObj = Object.keys(obj).reduce((cloneObj, prop) => {
  //   if (!prop.startsWith('_')) {
  //     cloneObj[prop] = obj[prop];
  //   }
  //   return cloneObj;
  // }, {});
  //
  // return lodashCloneDeep(targetObj);

  // return structuredClone(obj);

  if (obj === null || typeof obj !== 'object') return obj;

  const root = Array.isArray(obj) ? [] : {};
  const stack: Array<{ parent: any; key: string | number | undefined; data: any }> = [];
  const map = new WeakMap(); // 循环引用记录

  map.set(obj, root);
  stack.push({ parent: root, key: undefined, data: obj });

  while (stack.length) {
    const { parent, key, data } = stack.pop()!;
    const target = key === undefined ? parent : (parent[key] = Array.isArray(data) ? [] : {});

    for (const k in data) {
      if (!Object.prototype.hasOwnProperty.call(data, k)) continue;
      const val = data[k];

      if (
        typeof val === 'function' ||
        typeof val === 'symbol' ||
        (typeof HTMLElement !== 'undefined' && val instanceof HTMLElement) ||
        (typeof Node !== 'undefined' && val instanceof Node)
      ) {
        target[k] = val; // 保留引用
      } else if (val && typeof val === 'object') {
        if (map.has(val)) {
          target[k] = map.get(val); // 循环引用处理
        } else {
          target[k] = Array.isArray(val) ? [] : {};
          map.set(val, target[k]);
          stack.push({ parent: target, key: k, data: val });
        }
      } else {
        target[k] = val; // 原始类型
      }
    }
  }

  return root;
};

/**
 * hasCommonPathRelation
 * @param path1
 * @param path2
 */
export function hasCommonPathRelation(path1: string, path2: string) {
  // 按斜杠分割路径并过滤空字符串
  const segments1 = path1.split(/[\\/]/).filter((segment) => segment !== '');
  const segments2 = path2.split(/[\\/]/).filter((segment) => segment !== '');

  // 获取较短路径的长度
  const minLength = Math.min(segments1.length, segments2.length);

  // 检查公共前缀的长度
  let commonLength = 0;
  while (commonLength < minLength && segments1[commonLength] === segments2[commonLength]) {
    commonLength++;
  }

  // 情况1：除最后一级外完全相同
  if (segments1.length === segments2.length && commonLength === segments1.length - 1) {
    return true;
  }

  // 情况2：一个路径是另一个的完整前缀
  return commonLength === minLength;
}

export const clone = lodashClone;

export async function asyncLoop({ tasks, ...rest }) {
  for (let task of tasks) {
    try {
      await task(rest);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return Promise.resolve();
}

export const validator = (rules: ValidatorRule[]) => {
  type ValidatorCtx = {
    rule: ValidatorRule;
    value: any;
    callback: (error?: any) => void;
  };

  type RuleImplFactory = (rule: ValidatorRule) => (ctx: ValidatorCtx) => Promise<void>;

  const isValidateEmpty = (v: any) => v === undefined || v === null || v === '';

  const rulesImpls: Record<string, RuleImplFactory> = {
    required:
      (rule) =>
      ({ value }) => {
        if (!rule.required) return Promise.resolve();

        if (isValidateEmpty(value)) return Promise.reject(rule.message);

        return Promise.resolve();
      },
    pattern:
      (rule) =>
      ({ value }) => {
        if (isValidateEmpty(value)) return Promise.reject(rule.message);

        // 保持原来的“匹配即报错”语义，同时修正 value.test 的类型问题
        if (rule.pattern && rule.pattern.test(String(value))) return Promise.reject(rule.message);

        return Promise.resolve();
      },
    min:
      (rule) =>
      ({ value }) => {
        if (isValidateEmpty(value)) return Promise.reject(rule.message);

        if (typeof value?.length === 'number' && typeof rule.min === 'number' && value.length < rule.min) {
          return Promise.reject(rule.message);
        }

        return Promise.resolve();
      },
    max:
      (rule) =>
      ({ value }) => {
        if (isValidateEmpty(value)) return Promise.reject(rule.message);

        if (typeof value?.length === 'number' && typeof rule.max === 'number' && value.length > rule.max) {
          return Promise.reject(rule.message);
        }

        return Promise.resolve();
      },
    whitespace:
      (rule) =>
      ({ value }) => {
        if (!rule.whitespace) return Promise.resolve();

        if (isValidateEmpty(value)) return Promise.reject(rule.message);

        if (/^\s+$/.test(String(value))) return Promise.reject(rule.message);

        return Promise.resolve();
      },
    validator:
      (rule) =>
      ({ rule: _, value, callback }) =>
        new Promise((resolve, reject) => {
          const cb = (error?: any) => {
            callback(error);

            if (error) {
              reject(error);
            } else {
              resolve();
            }
          };

          // antd rule.validator 可能不存在，但这里的分支只会在 'validator' in rule 时走到
          rule.validator?.(_, value, cb);
        }),
  };

  const isTask = (v: any): v is (ctx: ValidatorCtx) => Promise<void> => typeof v === 'function';

  return {
    validator: function (_, value, cb) {
      const tasks = rules
        .map((rule) => {
          if ('required' in rule) {
            return rulesImpls.required(rule);
          }
          if ('pattern' in rule) {
            return rulesImpls.pattern(rule);
          }
          if ('min' in rule) {
            return rulesImpls.min(rule);
          }
          if ('max' in rule) {
            return rulesImpls.max(rule);
          }
          if ('whitespace' in rule) {
            return rulesImpls.whitespace(rule);
          }
          if ('validator' in rule) {
            return rulesImpls.validator(rule);
          }

          return false;
        })
        .filter(isTask);

      return asyncLoop({
        rules: _,
        value,
        callback: cb,
        tasks,
      });
    },
  };
};
