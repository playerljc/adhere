import cloneDeep from 'lodash/cloneDeep';
import Emitter from '@baifendian/adhere-util-emitter';
import Util from '@baifendian/adhere-util';

import { IWatchMemoized, ICompareConfig, ICompareModeFun } from './types';

const Events = Emitter.Events;

/**
 * 原始对象
 */
const srcObj = {};

// 特殊符号
const SPECIAL_SYMBOL = '__';

// 记录对象路径的变量
const PATH_SYMBOLS = [
  `${SPECIAL_SYMBOL}parentName${SPECIAL_SYMBOL}`,
  `${SPECIAL_SYMBOL}parent${SPECIAL_SYMBOL}`,
];

const PRIVATE_SYMBOL = '$';

// 创建代理排除的属性前缀
const CREATE_PROXY_EXCLUDE_PREFIX = [PRIVATE_SYMBOL, SPECIAL_SYMBOL];

// 创建代理排除的属性后缀
const CREATE_PROXY_EXCLUDE_SUFFIX = [SPECIAL_SYMBOL];

/**
 * isProxyProperty - 是否是代理属性 一般对$开头的属性不进行任何处理
 * @param property - Object
 * @return {boolean}
 */
function isProxyProperty(property) {
  return !(
    CREATE_PROXY_EXCLUDE_PREFIX.some((t) => property.startsWith(t)) ||
    CREATE_PROXY_EXCLUDE_SUFFIX.some((t) => property.endsWith(t))
  );
}

/**
 * createProxy - 创建代理
 * @param srcObj
 * @param noProxy
 * @param events
 * @return Proxy;
 */
function createProxy(srcObj: object, noProxy: object, events) {
  const proxy = new Proxy(srcObj, {
    /**
     * set 陷阱的函数
     * 一般都是在生命周期hook或者事件处理函数中对data的值进行修改，会触发set
     * @param target
     * @param key
     * @param value
     * @param receiver
     * @return {boolean}
     */
    set(target, key, value, receiver) {
      // 如果不是代理属性则不处理
      // 比如已$等开头的key不进行处理 或者是计算属性的key
      if (!isProxyProperty(key)) {
        return Reflect.set(target, key, value, receiver);
      }

      // 是数组
      if (Util.isArray(target)) {
        // console.log(target, key);
        // console.log('是数组');

        // 数组的原始长度
        const srcLength = (target as Array<any>).length;

        let result = Reflect.set(target, key, value, receiver);

        // 数组在data中的访问表达式
        const propertyAccessStr = Util.getPropertyVisitPathStr(target, key);

        // 对原始对象赋值
        noProxy[propertyAccessStr] = cloneDeep(target);

        // 数组的当前长度
        const targetLength = (target as Array<any>).length;

        // watch监听
        events.trigger(propertyAccessStr, key, value);

        // 数组是删除
        if (targetLength < srcLength) {
          // @ts-ignore
          // console.log('删除', `key:${key}`, `value:${value}`);
        }
        // 数组是添加
        else if (targetLength > srcLength) {
          // @ts-ignore
          // console.log('添加', `key:${key}`, `value:${value}`);

          // 如果可以则会给value继续创建代理
          if ((Util.isObject(value) || Util.isArray(value)) && !(PATH_SYMBOLS[0] in value)) {
            value = createProxy(value, noProxy, events);
            // @ts-ignore
            value[PATH_SYMBOLS[0]] = `[${key}]`;
            value[PATH_SYMBOLS[1]] = target;
            result = Reflect.set(target, key, value, receiver);
          }
        }
        // 数组修改
        else {
          // @ts-ignore
          // console.log('修改', `key:${key}`, `value:${value}`);

          // 如果可以则会给value继续创建代理
          if ((Util.isObject(value) || Util.isArray(value)) && !(PATH_SYMBOLS[0] in value)) {
            value = createProxy(value, noProxy, events);
            // @ts-ignore
            value[PATH_SYMBOLS[0]] = `[${key}]`;
            value[PATH_SYMBOLS[1]] = target;
            result = Reflect.set(target, key, value, receiver);
          }
        }

        // console.log('数组完成');
        return result;
      }

      // 是对象
      if (Util.isObject(target)) {
        // console.log(target, key);
        // console.log('是对象');
        // 一个表达式路径 比如a.b.c.d这样的一个路径，key是target的一个键，但是target也是其他对象键的值，
        // 这个方法会返回追溯到整个的一个访问链
        const propertyAccessStr = Util.getPropertyVisitPathStr(target, key);
        // console.log('propertyAccessStr', propertyAccessStr);

        let cloneValue;

        // watch监听
        // 新的值
        const newVal = cloneDeep(value);

        // console.log('newVal', newVal);

        events.trigger(propertyAccessStr, value, newVal);

        // 回写原始数据
        if (!cloneValue) {
          cloneValue = cloneDeep(value);
        }

        noProxy[propertyAccessStr] = cloneValue;

        // console.log('noProxy[propertyAccessStr]', noProxy[propertyAccessStr]);

        // 如果不是私有属性且是对象或数组继续loop，给value进行代理
        if ((Util.isObject(value) || Util.isArray(value)) && !(PATH_SYMBOLS[0] in value)) {
          value = createProxy(value, noProxy, events);
          // 创建value的上下级关系(留着在watch中在原始对象中通过上下级关系找到变量)
          value[PATH_SYMBOLS[0]] = key;
          value[PATH_SYMBOLS[1]] = target /* [key] */;
        }

        // console.log('对象完成');
        return Reflect.set(target, key, value, receiver);
      }

      // console.log('完成');
      return Reflect.set(target, key, value, receiver);
    },
    /**
     * deleteProperty - 对象删除属性
     * @param target - 目标对象
     * @param property - 删除的属性
     * @return Object
     */
    deleteProperty(target, property) {
      if (!isProxyProperty(property)) {
        return Reflect.deleteProperty(target, property);
      }

      // 不处理数组的删除
      if (Util.isArray(target)) {
        return Reflect.deleteProperty(target, property);
      }

      const propertyAccessStr = Util.getPropertyVisitPathStr(target, property);

      // watch监听
      events.trigger(propertyAccessStr, property);

      delete noProxy[propertyAccessStr];

      return Reflect.deleteProperty(target, property);
    },
  });

  /**
   * 继续进行迭代，迭代srcObj的所有属性，为srcObj的所有属性都进行代理
   */
  for (const p in srcObj) {
    // obj是Array, 迭代数组
    // p是0,1,2,3...等索引
    const objItem = srcObj[p];
    if (isProxyProperty(p) && (Util.isObject(objItem) || Util.isArray(objItem))) {
      srcObj[p] = createProxy(objItem, noProxy, events);
      // 创建value的上下级关系
      // 如果srcObj是数组则记录数组的索引
      objItem[PATH_SYMBOLS[0]] = Util.isArray(srcObj) ? `[${p}]` : p;
      objItem[PATH_SYMBOLS[1]] = srcObj;
    }
  }

  return proxy;
}

/**
 * WatchMemoized
 */
const WatchMemoized: IWatchMemoized = {
  /**
   * createRef - 创建一个值(其实就是在srcObj中创建一个属性)
   * @param defaultValue
   */
  createRef(defaultValue) {
    const property = Symbol.for(Util.uuid());

    let value = defaultValue;

    // 在srcObj中创建这个值的property
    Object.defineProperty(srcObj, property, {
      enumerable: true,
      configurable: true,
      set(curValue: any) {
        const preVal = value;

        // console.log('preValue', preVal);

        value = curValue;

        // console.log('curValue', curValue);

        Emitter.trigger(Symbol.keyFor(property) as string, {
          oldValue: preVal,
          newValue: curValue,
        });
      },
      get(): any {
        // console.log('get', value);
        return value;
      },
    });

    return [
      // 获取值
      () => srcObj[property],
      // 设置值
      (value) => {
        srcObj[property] = value;
      },
      // 值在srcObj中的property
      property,
    ];
  },
  // 缓存
  memoized: {
    // 监控
    watch: {
      /**
       * watchAll - 对依赖项的监控(所有依赖项全部发生改变才执行handler)
       * @param handler
       * @param depends - 依赖项数组(这个数组中的值是createRef返回值中的第三个参数)
       */
      all(handler, depends) {
        // 依赖项可能重复，去重的操作
        depends = Array.from(new Set([...depends]));

        // 所有订阅的句柄
        const subscriptionHandlers: Array<{ type: string; handler: Function }> = [];

        // 记录有个少个改变
        let changelog: Array<{ type: string; isChange: boolean }> = [];

        // 改变的处理
        function changeDetail(type) {
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
          let type;

          // 获取订阅的type，订阅的type就是depend符号的字符串值
          if (Util.isSymbol(depend)) {
            type = Symbol.keyFor(depend as symbol);
          } else {
            type = Symbol.keyFor((depend as ICompareConfig).property as symbol);
          }

          // changelog赋初值
          changelog.push({
            type,
            isChange: false,
          });

          /**
           * onSubscription - 订阅
           * @param oldValue
           * @param newValue
           */
          function onSubscription({ oldValue, newValue }) {
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
                if (oldValue !== newValue) {
                  changeDetail(type);
                }
              } else if (config.mode === 'deep') {
                // 如果是深比较
                if (Util.isRef(oldValue) && Util.isRef(newValue)) {
                  // 只有oldValue和newValue同时为引用类型的时候才进行深度比较(这里的引用类型是obj或者array，并没有function)
                  if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    changeDetail(type);
                  }
                } else {
                  // 否则进行浅比较
                  if (oldValue !== newValue) {
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
       * watchRace - 对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)
       * @param handler
       * @param depends - 依赖项数组(这个数组中的值是createRef返回值中的第三个参数)
       */
      race(handler, depends) {
        // 依赖项可能重复，去重的操作
        depends = Array.from(new Set([...depends]));

        // 所有订阅的句柄
        const subscriptionHandlers: Array<{ type: string; handler: Function }> = [];

        // 迭代进行订阅操作
        depends.forEach((depend) => {
          let type;

          // 获取订阅的type，订阅的type就是depend符号的字符串值
          if (Util.isSymbol(depend)) {
            type = Symbol.keyFor(depend as symbol);
          } else {
            type = Symbol.keyFor((depend as ICompareConfig).property as symbol);
          }

          /**
           * onSubscription - 订阅
           * @param oldValue
           * @param newValue
           */
          function onSubscription({ oldValue, newValue }) {
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
                if (oldValue !== newValue) {
                  handler();
                }
              } else if (config.mode === 'deep') {
                // 如果是深比较
                if (Util.isRef(oldValue) && Util.isRef(newValue)) {
                  // 只有oldValue和newValue同时为引用类型的时候才进行深度比较(这里的引用类型是obj或者array，并没有function)
                  if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                    handler();
                  }
                } else {
                  // 否则进行浅比较
                  if (oldValue !== newValue) {
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
     * createMemoFun - 创建一个memo的Function
     * @param handler
     * @param stackMaxSize 最大保存栈
     * @return Function
     */
    createMemoFun(handler, stackMaxSize = 10) {
      // 缓存的值
      const memoized: Array<{ resultVal: any; depends: Array<any> }> = [];

      // 校验连
      const checkChain = [
        /**
         * 判断长度
         * @param depends
         * @param params
         * @return boolean
         */
        (depends, params) => {
          return depends.length === params.length;
        },
        /**
         * 深比较 depends和params一个一个的比较
         * @param depends
         * @param params
         * @return boolean
         */
        (depends, params) => {
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
       * check - 校验
       * @param depends
       * @param params
       * @return boolean
       */
      function check(depends, params) {
        let result = true;

        for (let i = 0; i < checkChain.length; i++) {
          const chain = checkChain[i];
          result = chain(depends, params);

          if (!result) break;
        }

        return result;
      }

      /**
       * find - 对params进行校验
       * @param params
       * @return boolean
       */
      function find(params: any[] = []) {
        let result = null;

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
       * getMemoized - 校验是否有符合的memoized
       * @param arv
       * @return object
       */
      function getMemoized(arv: any[] = []) {
        let result = find(arv);

        // console.log('find', result);

        // 没找到返回值
        if (!result) {
          // 调用函数
          // @ts-ignore
          result = handler.apply(this, arv);

          // console.log('callfinish', result);

          // 如果memoized大于stackMaxSize
          if (memoized.length >= stackMaxSize) {
            memoized.shift();
          }

          // @ts-ignore
          if (result instanceof Promise) {
            // console.log('函数返回值是Promise');

            const p = (result as Promise<void>).then((res) => {
              // console.log('返回res', res);
              return res;
            });

            memoized.push({
              depends: arv,
              resultVal: p,
            });

            return p;
          } else {
            memoized.push({
              depends: arv,
              resultVal: result,
            });
          }
        }

        return result;
      }

      return function (...params) {
        // @ts-ignore
        return getMemoized.call(this, params || []);
      };
    },
  },
  // 监控
  watch: {
    /**
     * create - 创建一个watch对象
     * @param srcObj
     * @param listeners
     * @return Function
     */
    create(srcObj, listeners) {
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
        on(expression, handler) {
          events.on(expression, handler);
        },
        remove(expression, handler) {
          events.remove(expression, handler);
        },
      };
    },
  },
  // createMemoFun(fun, depends) {},
};

export default WatchMemoized;
