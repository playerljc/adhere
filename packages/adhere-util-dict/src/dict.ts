import DictReactComponent, { set, useDict } from './react';
import type { DictObj, IConfig } from './types';

const target = {};

const handlerTarget = {};

const funParams = new Map();

const defaultConfig: IConfig = {
  isUseMemo: true,
};

let config: IConfig = defaultConfig;

/**
 * diffParams
 * @param {Array} preArgArray
 * @param {Array} curArgArray
 * @return {boolean}
 */
function diffParams(preArgArray: any[], curArgArray: any[]): boolean {
  if (preArgArray.length !== curArgArray.length) return false;

  let flag = false;

  for (let i = 0; i < preArgArray.length; i++) {
    if (preArgArray[i] !== curArgArray[i]) {
      flag = true;

      break;
    }
  }

  return !flag;
}

/**
 * CreateFunProxy
 * @param {Function} fun
 * @param {String} property
 * @return {Proxy}
 */
function CreateFunProxy(fun: Function, property: string) {
  return new Proxy(fun, {
    apply(funTarget, thisArg, argArray) {
      const context = thisArg || window;

      let result = null;

      const entry = funParams.get(property);

      if (!entry) {
        result = funTarget.apply(context, argArray);

        funParams.set(property, {
          argArray,
          result,
        });
      } else if (!diffParams(entry.argArray, argArray)) {
        result = funTarget.apply(context, argArray);

        funParams.set(property, {
          argArray,
          result,
        });
      } else {
        result = entry.result;
      }

      return result;
    },
  });
}

/**
 * initValue
 * @param p
 * @param params
 */
function initValue(p, params) {
  const handler = Dict.handlers[p];

  let value: any = null;

  // 返回值 - 一般都不是函数
  try {
    value = handler(params);
  } catch (error) {
    throw new Error(`${p} dict does not exist`);
  }

  // 如果value是函数则默认是缓存的
  if (value instanceof Function) {
    // 函数单独的缓存开关
    if ('isUseMemo' in handler) {
      if (handler.isUseMemo) {
        // console.log('handler.isUseMemo', p);
        value = CreateFunProxy(value, p);
      }
    } else {
      // 总体的缓存开关
      if ('isUseMemo' in config) {
        if (config.isUseMemo) {
          // console.log('config.isUseMemo', p);
          value = CreateFunProxy(value, p);
        }
      }
    }
  }

  // console.log('noMemo', p);
  return value;
}

const Dict: DictObj = {
  /**
   * handler - 字典的定义对象
   */
  handlers: new Proxy(handlerTarget, {
    set(target: Object, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver);

      // @ts-ignore
      set(property);

      return result;
    },
  }),
  /**
   * value - 字典的使用对象
   */
  value: new Proxy(target, {
    get(target: Object, property: string, receiver) {
      // 如果p属性没在t中
      if (!(property in target)) {
        receiver[property] = {
          // 给例如SystemXXX赋值，property是SystemXXX
          value: initValue(property, null),
          refresh() {
            // receiver[property].value = initValue(property, params);
            delete receiver[property];
            return this;
          },
        };
      }

      // 此处直接获取相当于只用一次
      return Reflect.get(target, property, receiver);
    },
  }),
  /**
   * init - 字典的初始化
   * @param {
   *   {
   *    initStatic: () => void;
   *    initRemote: () => void;
   *   }[]
   * } dictArray 字典定义的集合
   * @param {IConfig} _config 字典的配置
   * @return {void}
   */
  init: (dictArray = [], _config: IConfig = defaultConfig) => {
    config = _config;

    (dictArray || []).forEach((dict) => {
      if (dict) {
        dict?.initStatic?.();
        dict?.initRemote?.();
      }
    });
  },
  /**
   * React - 字典对应的React组件
   */
  React: DictReactComponent,
  /**
   * useDict - 字典的hook
   */
  useDict,
};

export default Dict;
