import type { Use } from './types';
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
declare const use: Use;
export default use;
