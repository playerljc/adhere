import cloneDeep from 'lodash/cloneDeep';

import Util from '@baifendian/adhere-util';
import Emitter, { Events } from '@baifendian/adhere-util-emitter';

import {
  ICompareConfig,
  ICompareModeFun,
  IWatchMemoized,
  IWatchHandler,
  ISubscriptionHandler,
  IChangeLogItem,
  IMemoizedItem,
  IWatchCreateResult,
} from './types';

/**
 * 原始对象存储
 */
const srcObj: Record<symbol, any> = {};

/**
 * 特殊符号常量
 */
const SPECIAL_SYMBOL = '__';

/**
 * 记录对象路径的符号
 */
const PATH_SYMBOLS = [
  `${SPECIAL_SYMBOL}parentName${SPECIAL_SYMBOL}`,
  `${SPECIAL_SYMBOL}parent${SPECIAL_SYMBOL}`,
] as const;

/**
 * 私有符号前缀
 */
const PRIVATE_SYMBOL = '$';

/**
 * 创建代理时排除的属性前缀
 */
const CREATE_PROXY_EXCLUDE_PREFIX = [PRIVATE_SYMBOL, SPECIAL_SYMBOL];

/**
 * 创建代理时排除的属性后缀
 */
const CREATE_PROXY_EXCLUDE_SUFFIX = [SPECIAL_SYMBOL];

/**
 * 判断是否为代理属性
 * 一般对$开头的属性不进行任何处理
 * @param property - 属性名
 * @returns 是否为代理属性
 */
function isProxyProperty(property: string | symbol): boolean {
  const propertyStr = String(property);
  return !(
    CREATE_PROXY_EXCLUDE_PREFIX.some((prefix) => propertyStr.startsWith(prefix)) ||
    CREATE_PROXY_EXCLUDE_SUFFIX.some((suffix) => propertyStr.endsWith(suffix))
  );
}

/**
 * 创建代理对象
 * @param srcObj - 源对象
 * @param noProxy - 未被代理的对象副本
 * @param events - 事件发射器
 * @returns 代理对象
 */
function createProxy<T extends object>(
  srcObj: T,
  noProxy: Record<string, any>,
  events: Events
): T {
  const proxy = new Proxy(srcObj, {
    /**
     * set 陷阱函数
     * 在生命周期hook或事件处理函数中对data的值进行修改时会触发set
     * @param target - 目标对象
     * @param key - 属性键
     * @param value - 新值
     * @param receiver - 接收器
     * @returns 是否设置成功
     */
    set(target: any, key: string | symbol, value: any, receiver: any): boolean {
      // 如果不是代理属性则不处理
      // 比如以$等开头的key不进行处理，或者是计算属性的key
      if (!isProxyProperty(key)) {
        return Reflect.set(target, key, value, receiver);
      }

      // 处理数组
      if (Util.isArray(target)) {
        return handleArraySet(target, key, value, receiver, noProxy, events);
      }

      // 处理对象
      if (Util.isObject(target)) {
        return handleObjectSet(target, key, value, receiver, noProxy, events);
      }

      return Reflect.set(target, key, value, receiver);
    },

    /**
     * deleteProperty 陷阱函数 - 对象删除属性
     * @param target - 目标对象
     * @param property - 要删除的属性
     * @returns 是否删除成功
     */
    deleteProperty(target: any, property: string | symbol): boolean {
      if (!isProxyProperty(property)) {
        return Reflect.deleteProperty(target, property);
      }

      // 不处理数组的删除
      if (Util.isArray(target)) {
        return Reflect.deleteProperty(target, property);
      }

      const propertyAccessStr = Util.getPropertyVisitPathStr(target, String(property));

      // 触发监听事件
      events.trigger(propertyAccessStr, property);

      // 从原始对象中删除
      delete noProxy[propertyAccessStr];

      return Reflect.deleteProperty(target, property);
    },
  });

  /**
   * 继续迭代，为srcObj的所有属性都进行代理
   */
  for (const p in srcObj) {
    const objItem = srcObj[p];
    if (isProxyProperty(p) && (Util.isObject(objItem) || Util.isArray(objItem))) {
      srcObj[p] = createProxy(objItem, noProxy, events);
      // 创建value的上下级关系
      // 如果srcObj是数组则记录数组的索引
      (objItem as any)[PATH_SYMBOLS[0]] = Util.isArray(srcObj) ? `[${p}]` : p;
      (objItem as any)[PATH_SYMBOLS[1]] = srcObj;
    }
  }

  return proxy;
}

/**
 * 处理数组的set操作
 * @param target - 目标数组
 * @param key - 属性键
 * @param value - 新值
 * @param receiver - 接收器
 * @param noProxy - 未被代理的对象副本
 * @param events - 事件发射器
 * @returns 是否设置成功
 */
function handleArraySet(
  target: any[],
  key: string | symbol,
  value: any,
  receiver: any,
  noProxy: Record<string, any>,
  events: Events
): boolean {
  // 数组的原始长度
  const srcLength = target.length;

  let result = Reflect.set(target, key, value, receiver);

        // 数组在data中的访问表达式
      const propertyAccessStr = Util.getPropertyVisitPathStr(target as unknown as Record<string, unknown>, String(key));

      // 对原始对象赋值
      noProxy[propertyAccessStr] = cloneDeep(target);

  // 数组的当前长度
  const targetLength = target.length;

  // 触发监听事件
  events.trigger(propertyAccessStr, key, value);

  // 处理数组操作类型
  if (targetLength < srcLength) {
    // 数组删除操作
    // console.log('删除', `key:${String(key)}`, `value:${value}`);
  } else if (targetLength > srcLength) {
    // 数组添加操作
    // console.log('添加', `key:${String(key)}`, `value:${value}`);
    value = createProxyForValue(value, key, target, noProxy, events);
  } else {
    // 数组修改操作
    // console.log('修改', `key:${String(key)}`, `value:${value}`);
    value = createProxyForValue(value, key, target, noProxy, events);
  }

  return result;
}

/**
 * 处理对象的set操作
 * @param target - 目标对象
 * @param key - 属性键
 * @param value - 新值
 * @param receiver - 接收器
 * @param noProxy - 未被代理的对象副本
 * @param events - 事件发射器
 * @returns 是否设置成功
 */
function handleObjectSet(
  target: object,
  key: string | symbol,
  value: any,
  receiver: any,
  noProxy: Record<string, any>,
  events: Events
): boolean {
        // 一个表达式路径，比如a.b.c.d这样的一个路径
      // key是target的一个键，但是target也是其他对象键的值
      // 这个方法会返回追溯到整个的一个访问链
      const propertyAccessStr = Util.getPropertyVisitPathStr(target as Record<string, unknown>, String(key));

  // 触发监听事件
  const newVal = cloneDeep(value);
  events.trigger(propertyAccessStr, value, newVal);

  // 回写原始数据
  noProxy[propertyAccessStr] = cloneDeep(value);

  // 如果不是私有属性且是对象或数组，继续创建代理
  if ((Util.isObject(value) || Util.isArray(value)) && !(PATH_SYMBOLS[0] in value)) {
    value = createProxyForValue(value, key, target, noProxy, events);
  }

  return Reflect.set(target, key, value, receiver);
}

/**
 * 为值创建代理
 * @param value - 要代理的值
 * @param key - 属性键
 * @param parent - 父对象
 * @param noProxy - 未被代理的对象副本
 * @param events - 事件发射器
 * @returns 代理后的值
 */
function createProxyForValue(
  value: any,
  key: string | symbol,
  parent: any,
  noProxy: Record<string, any>,
  events: Events
): any {
  if ((Util.isObject(value) || Util.isArray(value)) && !(PATH_SYMBOLS[0] in value)) {
    value = createProxy(value, noProxy, events);
    // 创建value的上下级关系(留着在watch中在原始对象中通过上下级关系找到变量)
    (value as any)[PATH_SYMBOLS[0]] = String(key);
    (value as any)[PATH_SYMBOLS[1]] = parent;
  }
  return value;
}

/**
 * WatchMemoized 主类
 * 提供响应式数据监听和记忆化功能
 */
const WatchMemoized: IWatchMemoized = {
  /**
   * 创建一个响应式引用
   * @param defaultValue - 默认值
   * @returns [获取值函数, 设置值函数, 属性符号]
   */
  createRef<T = any>(defaultValue?: T): [() => T, (value: T) => void, symbol] {
    const property = Symbol.for(Util.uuid());

    let value: T = defaultValue as T;

    // 在srcObj中创建这个值的property
    Object.defineProperty(srcObj, property, {
      enumerable: true,
      configurable: true,
      set(curValue: T) {
        const preVal = value;
        value = curValue;

        Emitter.trigger(Symbol.keyFor(property) as string, {
          oldValue: preVal,
          newValue: curValue,
        });
      },
      get(): T {
        return value;
      },
    });

    return [
      // 获取值
      () => srcObj[property] as T,
      // 设置值
      (val: T) => {
        srcObj[property] = val;
      },
      // 值在srcObj中的property
      property,
    ];
  },

  // 记忆化功能
  memoized: {
    // 监听功能
    watch: {
      /**
       * 对依赖项的监控(所有依赖项全部发生改变才执行handler)
       * @param handler - 处理函数
       * @param depends - 依赖项数组(这个数组中的值是createRef返回值中的第三个参数)
       * @returns 取消订阅的函数
       */
      all(handler: IWatchHandler, depends: Array<symbol | ICompareConfig>): () => void {
        // 依赖项可能重复，去重的操作
        depends = Array.from(new Set([...depends]));

        // 所有订阅的句柄
        const subscriptionHandlers: ISubscriptionHandler[] = [];

        // 记录有多少个改变
        let changelog: IChangeLogItem[] = [];

        /**
         * 处理变更详情
         * @param type - 变更类型
         */
        function changeDetail(type: string): void {
          const change = changelog.find((t) => t.type === type);
          if (change) {
            change.isChange = true;
          }

          if (changelog.every((e) => e.isChange)) {
            changelog.forEach((e) => (e.isChange = false));
            handler();
          }
        }

        // 迭代进行订阅操作
        depends.forEach((depend) => {
          let type: string;

          // 获取订阅的type，订阅的type就是depend符号的字符串值
          if (Util.isSymbol(depend)) {
            type = Symbol.keyFor(depend as symbol) as string;
          } else {
            type = Symbol.keyFor((depend as ICompareConfig).property as symbol) as string;
          }

          // changelog赋初值
          changelog.push({
            type,
            isChange: false,
          });

          /**
           * 订阅处理函数
           * @param data - 变更数据
           */
          function onSubscription(data: { oldValue: any; newValue: any }): void {
            const { oldValue, newValue } = data;

            // 如果depend直接是符号那么就是浅比较
            if (Util.isSymbol(depend)) {
              if (oldValue !== newValue) {
                changeDetail(type);
              }
            } else {
              // 如果进行了细粒度的比较控制
              const config = depend as ICompareConfig;

              if (config.mode === 'light') {
                // 如果是浅比较
                if (!Object.is(oldValue, newValue)) {
                  changeDetail(type);
                }
              } else if (config.mode === 'deep') {
                // 如果是深比较
                if (Util.isRef(oldValue) && Util.isRef(newValue)) {
                  // 只有oldValue和newValue同时为引用类型的时候才进行深度比较
                  if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    changeDetail(type);
                  }
                } else {
                  // 否则进行浅比较
                  if (!Object.is(oldValue, newValue)) {
                    changeDetail(type);
                  }
                }
              } else if (Util.isFunction(config.mode)) {
                // 如果是自定义比较
                const result = (config.mode as ICompareModeFun)(oldValue, newValue);
                if (!result) {
                  changeDetail(type);
                }
              }
            }
          }

          subscriptionHandlers.push({
            type,
            handler: onSubscription,
          });

          // 进行订阅，依赖项就是订阅项
          Emitter.on(type, onSubscription);
        });

        // 返回清空所有订阅句柄的方法
        return () => {
          subscriptionHandlers.forEach(({ type, handler }) => {
            Emitter.remove(type, handler);
          });
        };
      },

      /**
       * 对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)
       * @param handler - 处理函数
       * @param depends - 依赖项数组(这个数组中的值是createRef返回值中的第三个参数)
       * @returns 取消订阅的函数
       */
      race(handler: IWatchHandler, depends: Array<symbol | ICompareConfig>): () => void {
        // 依赖项可能重复，去重的操作
        depends = Array.from(new Set([...depends]));

        // 所有订阅的句柄
        const subscriptionHandlers: ISubscriptionHandler[] = [];

        // 迭代进行订阅操作
        depends.forEach((depend) => {
          let type: string;

          // 获取订阅的type，订阅的type就是depend符号的字符串值
          if (Util.isSymbol(depend)) {
            type = Symbol.keyFor(depend as symbol) as string;
          } else {
            type = Symbol.keyFor((depend as ICompareConfig).property as symbol) as string;
          }

          /**
           * 订阅处理函数
           * @param data - 变更数据
           */
          function onSubscription(data: { oldValue: any; newValue: any }): void {
            const { oldValue, newValue } = data;

            // 如果depend直接是符号那么就是浅比较
            if (Util.isSymbol(depend)) {
              if (oldValue !== newValue) {
                handler();
              }
            } else {
              // 如果进行了细粒度的比较控制
              const config = depend as ICompareConfig;

              if (config.mode === 'light') {
                // 如果是浅比较
                if (!Object.is(oldValue, newValue)) {
                  handler();
                }
              } else if (config.mode === 'deep') {
                // 如果是深比较
                if (Util.isRef(oldValue) && Util.isRef(newValue)) {
                  // 只有oldValue和newValue同时为引用类型的时候才进行深度比较
                  if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    handler();
                  }
                } else {
                  // 否则进行浅比较
                  if (!Object.is(oldValue, newValue)) {
                    handler();
                  }
                }
              } else if (Util.isFunction(config.mode)) {
                // 如果是自定义比较
                const result = (config.mode as ICompareModeFun)(oldValue, newValue);
                if (!result) {
                  handler();
                }
              }
            }
          }

          subscriptionHandlers.push({
            type,
            handler: onSubscription,
          });

          // 进行订阅，依赖项就是订阅项
          Emitter.on(type, onSubscription);
        });

        // 返回清空所有订阅句柄的方法
        return () => {
          subscriptionHandlers.forEach(({ type, handler }) => {
            Emitter.remove(type, handler);
          });
        };
      },
    },

    /**
     * 创建一个记忆化函数
     * @param handler - 要记忆化的函数
     * @param stackMaxSize - 最大保存栈大小，默认10
     * @returns 记忆化后的函数
     */
    createMemoFun<T extends any[] = any[], R = any>(
      handler: (...args: T) => R,
      stackMaxSize: number = 10
    ): (...args: T) => R {
      // 缓存的值
      const memoized: IMemoizedItem<T, R>[] = [];

      // 校验链
      const checkChain = [
        /**
         * 判断长度
         * @param depends - 依赖参数
         * @param params - 当前参数
         * @returns 长度是否相等
         */
        (depends: T, params: T): boolean => {
          return depends.length === params.length;
        },

        /**
         * 深比较 depends和params一个一个的比较
         * @param depends - 依赖参数
         * @param params - 当前参数
         * @returns 是否相等
         */
        (depends: T, params: T): boolean => {
          let result = true;

          for (let i = 0; i < depends.length; i++) {
            const dependVal = depends[i];
            const paramVal = params[i];

            if (Util.isRef(dependVal) && Util.isRef(paramVal)) {
              result = JSON.stringify(cloneDeep(dependVal)) === JSON.stringify(cloneDeep(paramVal));
            } else {
              result = dependVal === paramVal;
            }

            if (!result) break;
          }

          return result;
        },
      ];

      /**
       * 校验参数是否匹配
       * @param depends - 依赖参数
       * @param params - 当前参数
       * @returns 是否匹配
       */
      function check(depends: T, params: T): boolean {
        let result = true;

        for (let i = 0; i < checkChain.length; i++) {
          const chain = checkChain[i];
          result = chain(depends, params);

          if (!result) break;
        }

        return result;
      }

      /**
       * 查找匹配的缓存
       * @param params - 参数
       * @returns 缓存的结果或null
       */
      function find(params: T): R | null {
        let result: R | null = null;

        for (let i = 0; i < memoized.length; i++) {
          const { resultVal, depends } = memoized[i];

          const flag = check(depends, params);

          if (flag) {
            result = resultVal;
            break;
          }
        }

        return result;
      }

      /**
       * 获取记忆化的结果
       * @param args - 函数参数
       * @param context - 函数执行上下文
       * @returns 函数结果
       */
      function getMemoized(args: T, context?: any): R {
        let result = find(args);

        // 没找到返回值
        if (result === null) {
          // 调用函数
          result = handler.apply(context, args);

          // 如果memoized大于stackMaxSize
          if (memoized.length >= stackMaxSize) {
            memoized.shift();
          }

          if (result instanceof Promise) {
            // 处理Promise返回值
            const p = (result as Promise<any>).then((res) => {
              return res;
            });

            memoized.push({
              depends: args,
              resultVal: p as R,
            });

            return p as R;
          } else {
            memoized.push({
              depends: args,
              resultVal: result,
            });
          }
        }

        return result;
      }

      return function (this: any, ...params: T): R {
        return getMemoized(params, this);
      };
    },
  },

  // 监听功能
  watch: {
    /**
     * 创建一个watch对象
     * @param srcObj - 源对象
     * @param listeners - 监听器对象
     * @returns 监听器结果对象
     */
    create<T extends object>(
      srcObj: T,
      listeners?: Record<string, IWatchHandler>
    ): IWatchCreateResult<T> {
      const events = new Events();

      // 注册事件
      if (!Util.isEmpty(listeners)) {
        for (const type in listeners) {
          events.on(type, listeners[type]);
        }
      }

      // 未被代理的对象
      const noProxy = cloneDeep(srcObj);

      // 创建代理对象
      const proxy = createProxy(srcObj, noProxy, events);

      return {
        value: proxy,
        on(expression: string, handler: IWatchHandler) {
          events.on(expression, handler);
        },
        remove(expression: string, handler: IWatchHandler) {
          events.remove(expression, handler);
        },
      };
    },
  },
};

export default WatchMemoized;
