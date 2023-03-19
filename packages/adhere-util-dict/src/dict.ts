import DictReactComponent, { set } from './react';
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
 * @param preArgArray - {Array}
 * @param curArgArray - {Array}
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
 * @param fun - {Function}
 * @param property - {String}
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

  // 返回值 - 一般都不是函数
  let value = handler(params);

  // 如果value是函数则默认是缓存的
  if (value instanceof Function) {
    // 函数单独的缓存开关
    if (!!handler.isUseMemo) {
      value = CreateFunProxy(value, p);
    } else {
      // 总体的缓存开关
      if (config.isUseMemo) {
        value = CreateFunProxy(value, p);
      }
    }
  }

  return value;
}

const Dict: DictObj = {
  handlers: new Proxy(handlerTarget, {
    set(target: Object, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver);

      set(property);

      return result;
    },
  }),
  value: new Proxy(target, {
    get(target: Object, property: string, receiver) {
      // 如果p属性没在t中
      if (!(property in target)) {
        receiver[property] = {
          value: initValue(property, null),
          refresh(params) {
            receiver[property].value = initValue(property, params);
            return this;
          },
        };
      }

      return Reflect.get(target, property, receiver);
    },
  }),
  init: (dictArray = [], _config: IConfig = defaultConfig) => {
    config = _config;

    (dictArray || []).forEach((dict) => {
      if (dict) {
        dict?.initStatic?.();
        dict?.initRemote?.();
      }
    });
  },
  React: DictReactComponent,
};

export default Dict;
