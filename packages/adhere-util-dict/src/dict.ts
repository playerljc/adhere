import Util from '@baifendian/adhere-util';

import DictReactComponent, { set, useDict } from './react';
import type { HandlerTarget, IConfig, IDict, LabelValue, Target } from './types';

const target: Target<any> = {};

const handlerTarget: HandlerTarget = {};

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
 */
function initValue(p: string) {
  const handler = Dict.handlers[p]!;

  let value: any = null;

  // 返回值 - 一般都不是函数
  if (!handler) {
    throw new Error(`${p} dict does not exist`);
  }

  // try {
  value = handler();
  // } catch (error) {
  //   throw new Error(`${p} dict does not exist`);
  // }

  // 如果value是函数则默认是缓存的
  if (value instanceof Function) {
    // 函数单独的缓存开关
    if ('isUseMemo' in handler) {
      if (handler.isUseMemo) {
        value = CreateFunProxy(value, p);
      }
    } else {
      // 总体的缓存开关
      if ('isUseMemo' in config) {
        if (config.isUseMemo) {
          value = CreateFunProxy(value, p);
        }
      }
    }
  }

  return value;
}

/**
 * genDictFullName
 * @param {string} name
 * @return {string}
 */
function genDictFullName(name: string): string {
  return `${Util.uuid()}_${name}`;
}

type NS = Partial<{ [key: string]: ReturnType<typeof genDictFullName> }>;

type VS<
  T extends Record<
    string,
    {
      handler: H;
    }
  >,
  H extends (...args: any[]) => ReturnType<H>,
> = Partial<{
  [K in keyof T]: { value: ReturnType<T[K]['handler']> };
}>;

type TV<H> = {
  // 是否是静态字典
  isStatic?: boolean;
  // 字典代码的句柄函数
  handler: H;
  // 是否立即访问(仅对值不是函数类型的起作用)
  isImmediateAccess?: boolean;
};

/**
 * genModuleDict
 * @param handlerOptions
 * @param {boolean} isUseMemo
 */
export function genModuleDict<
  T extends {
    [key: string]: TV<H>;
  },
  H extends (...args: any[]) => ReturnType<H>,
>(handlerOptions: T, isUseMemo?: boolean) {
  const moduleDictExpansions: Array<
    (args: { entry: TV<H>; name: string; names: NS; values: VS<T, H> }) => void
  > = [
    // 如果是静态数据，对labelValue数据进行扩展，扩展出labelValue的Map形式，外部的handler不能使用解构出来的values和names
    ({ name, entry, names, values }) => {
      // 如果是静态的
      if (!!entry?.isStatic) {
        const value = entry.handler({ names, values });

        // 是否是labelValue的数组
        if (isLabelValueBeanArray(value)) {
          const labelValueMapName = `${name}Map`;
          const dictName = genDictFullName(labelValueMapName);
          names[labelValueMapName] = dictName;

          // 字典值的访问器
          Object.defineProperty(values, labelValueMapName, {
            get() {
              return Dict.value[dictName];
            },
          });

          // 创建字典
          Dict.handlers[dictName] = () =>
            genLabelValueBeanMap(entry.handler({ names, values }) as LabelValue[]);

          // 如果是立即访问
          if (!!entry?.isImmediateAccess) {
            values[labelValueMapName]?.value;
          }
        }
      }
    },
  ];

  // 扩展字典
  const targetHandlerOptions: T = handlerOptions;

  // 生成
  const { names, values } = Object.keys(targetHandlerOptions).reduce<{
    names: NS;
    values: VS<T, H>;
  }>(
    ({ names, values }, name) => {
      const entry = targetHandlerOptions[name];

      // 生成字典实际的名称
      const dictName = genDictFullName(name);

      // 字典名称访问器
      names[name] = dictName;

      // 字典值的访问器
      Object.defineProperty(values, name, {
        get() {
          return Dict.value[dictName];
        },
      });

      // 创建字典
      Dict.handlers[dictName] = () => targetHandlerOptions[name].handler({ names, values });

      // 对静态字典进行扩展
      if (!!entry?.isStatic) {
        moduleDictExpansions.forEach((moduleDictExpansion) =>
          moduleDictExpansion({ name, entry, names, values }),
        );
      }

      // 如果是立即访问
      if (!!entry?.isImmediateAccess) {
        values[name]?.value;
      }

      return {
        names,
        values,
      };
    },
    {
      names: {},
      values: {},
    },
  );

  // 初始化字典
  Dict.init(
    [
      {
        initStatic: () => {},
        initRemote: () => {},
      },
    ],
    {
      isUseMemo: !!isUseMemo,
    },
  );

  return {
    names,
    values,
  };
}

/**
 * isLabelValueBeanArray
 * @description 是否是labelValueBean的数组
 * @param originValue any
 * @return {boolean}
 */
function isLabelValueBeanArray(originValue: any): boolean {
  if (Array.isArray(originValue)) {
    return (originValue as Partial<LabelValue>[]).every(
      (t) =>
        typeof t === 'object' &&
        'label' in t &&
        'value' in t &&
        ['string'].includes(typeof t.label) &&
        ['string', 'number', 'symbol'].includes(typeof t.value),
    );
  }

  return false;
}

/**
 * genLabelValueBeanMap
 * @description 将labelValueBean数组转换成map
 */
function genLabelValueBeanMap<T extends LabelValue>(originValue: T[]) {
  return originValue.reduce<Map<T['value'], T['label']>>((map, { label, value }) => {
    map.set(value, label);
    return map;
  }, new Map());
}

const Dict = {
  /**
   * handler - 字典的定义对象
   */
  handlers: new Proxy<HandlerTarget>(handlerTarget, {
    set(target, property, value, receiver) {
      const result = Reflect.set(target, property, value, receiver);

      // 原始值
      // const originValue = value();

      // 1.如果是labelValue数组则转换成对应的labelValueMap
      // if (isLabelValueBeanArray(originValue)) {
      //   Dict.handlers[`${property as string}Map`] = () => genLabelValueBeanMap(originValue);
      // }

      // 下面可能还有其他的处理

      // React组件处理
      // @ts-ignore
      set(property);

      return result;
    },
  }),
  /**
   * value - 字典的使用对象
   */
  value: new Proxy(target, {
    get(target, property: string, receiver) {
      // 如果p属性没在t中
      if (!(property in target)) {
        receiver[property] = {
          // 给例如SystemXXX赋值，property是SystemXXX
          value: initValue(property),
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
  init: (dictArray: IDict[] = [], _config: IConfig = defaultConfig): void => {
    config = _config;

    (dictArray ?? []).forEach((dict) => {
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
  /**
   * genModuleDict - 字典生成器
   */
  genModuleDict,
};

export default Dict;
