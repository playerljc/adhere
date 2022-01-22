import { InitFunc, IConfig } from './types';

const target = {};

const funParams = new Map();

const defaultConfig: IConfig = {
  isFunMemo: true,
};

let config: IConfig = defaultConfig;

/**
 * diffParams
 * @param preArgArray - {Array}
 * @param curArgArray - {Array}
 * @return {boolean}
 */
function diffParams(preArgArray: Array<any>, curArgArray: Array<any>): boolean {
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
  const handler = ins.handlers[p];

  // 返回值 - 一般都不是函数
  let value = handler(params);

  // 如果value是函数则默认是缓存的
  if (value instanceof Function) {
    // 函数单独的缓存开关
    if (!!value.isFunMemo) {
      value = CreateFunProxy(value, p);
    } else {
      // 总体的缓存开关
      if (config.isFunMemo) {
        value = CreateFunProxy(value, p);
      }
    }
  }

  return value;
}

const ins: {
  handlers: object;
  value: any;
  init: InitFunc;
} = {
  handlers: {},
  value: new Proxy(target, {
    get(t: Object, p: string, receiver) {
      // 如果p属性没在t中
      if (!(p in t)) {
        receiver[p] = {
          value: initValue(p, null),
          refresh(params) {
            receiver[p].value = initValue(p, params);
          },
        };
      }

      return Reflect.get(target, p, receiver);
    },
  }),
  init: (dictArr = [], c: IConfig = defaultConfig) => {
    config = c;

    (dictArr || []).forEach((dict) => {
      if (dict) {
        dict.initStatic();
        dict.initRemote();
      }
    });
  },
};

export default ins;
