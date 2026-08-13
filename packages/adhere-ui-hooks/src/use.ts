import { useMount } from 'ahooks';
import { useRef, useState } from 'react';

import type { Use, UseResult, UseType } from './types';

/**
 * 默认状态
 */
const DEFAULT_STATUS = {
  data: null,
  isPending: true,
  isValidate: false,
} as const;

/**
 * 成功状态
 */
const SUCCESS_STATUS = {
  isPending: false,
  isValidate: false,
} as const;

/**
 * 失败状态
 */
const FAIL_STATUS = {
  isPending: false,
  isValidate: true,
} as const;

/**
 * use hook
 * @description 用于处理异步 Promise 的 React Hook，提供加载状态、错误处理和重试功能
 * @template T - Promise 返回的数据类型
 * @template Args - Promise 函数的参数类型
 * @param {(...args: Args) => Promise<T>} p - 要执行的 Promise 函数
 * @param {Args} [defaultArgs] - 默认参数，组件挂载时自动执行
 * @returns {UseResult<T>} 返回包含数据、状态和操作函数的对象
 *
 * @example
 * ```tsx
 * const { data, isPending, isValidate, reset, reload } = use(fetchUserData, [userId]);
 *
 * if (isPending) return <Loading />;
 * if (isValidate) return <Error />;
 * return <UserInfo data={data} />;
 * ```
 */
const use: Use = <T = any, Args extends any[] = any[]>(
  p: (...args: Args) => Promise<T>,
  defaultArgs?: Args,
): UseResult<T> => {
  const requestIdRef = useRef(0);

  const [result, setResult] = useState<Omit<UseResult<T>, 'type' | 'reset' | 'reload'>>({
    ...DEFAULT_STATUS,
  });

  const [type, setType] = useState<UseType>('reset');

  /**
   * 执行 Promise
   * @description 执行传入的 Promise 函数并更新状态
   * @param {Args} _defaultArgs - 执行参数
   * @returns {Promise<T>} Promise 执行结果
   */
  function executePromise(_defaultArgs: Args): Promise<T> {
    const requestId = ++requestIdRef.current;

    return (
      p
        ?.apply?.(undefined, _defaultArgs)
        ?.then((res: T) => {
          if (requestId === requestIdRef.current) {
            setResult({
              data: res,
              ...SUCCESS_STATUS,
            });
          }

          return res;
        })
        .catch((err: any) => {
          if (requestId === requestIdRef.current) {
            setResult({
              data: err,
              ...FAIL_STATUS,
            });
          }

          throw err;
        })
    );
  }

  /**
   * 重置函数
   * @description 重置状态并重新调用接口
   * @param {...Args} args - 执行参数
   * @returns {Promise<T>} Promise 执行结果
   */
  function reset(...args: Args): Promise<T> {
    setResult({
      ...DEFAULT_STATUS,
    });

    setType('reset');

    return executePromise(args);
  }

  /**
   * 重新加载函数
   * @description 保持当前数据，重新调用接口
   * @param {...Args} args - 执行参数
   * @returns {Promise<T>} Promise 执行结果
   */
  function reload(...args: Args): Promise<T> {
    setResult((prev) => ({
      ...DEFAULT_STATUS,
      data: prev.data,
    }));

    setType('reload');

    return executePromise(args);
  }

  // 组件挂载时自动执行
  useMount(() => {
    if (defaultArgs) {
      executePromise(defaultArgs);
    }
  });

  return {
    ...result,
    type,
    reset,
    reload,
  };
};

export default use;
