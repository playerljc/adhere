import type { ProcessAsyncQueueItem } from './types';
/**
 * 集合工具类
 * @description 提供集合操作相关的工具函数
 */
declare const _default: {
    /**----------------------------集合相关---------------------------**/
    /**
     * 异步执行队列
     * @description 按顺序执行异步任务队列，支持成功和失败回调
     * @param tasks - 要执行的任务数组，可选
     * @returns Promise，当所有任务执行完成时 resolve
     * @example
     * ```typescript
     * const tasks: ProcessAsyncQueueItem[] = [
     *   {
     *     run: () => Promise.resolve('task1'),
     *     success: (result) => console.log('Task 1 success:', result),
     *     fail: (error) => console.error('Task 1 failed:', error)
     *   },
     *   {
     *     run: () => Promise.resolve('task2'),
     *     success: (result) => console.log('Task 2 success:', result)
     *   }
     * ];
     *
     * processAsyncQueue(tasks).then(() => {
     *   console.log('All tasks completed');
     * });
     * ```
     */
    processAsyncQueue(tasks?: ProcessAsyncQueueItem[]): Promise<void>;
};
export default _default;
