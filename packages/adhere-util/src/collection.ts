import type { ProcessAsyncQueueItem } from './types';

/**
 * 集合工具类
 * @description 提供集合操作相关的工具函数
 */
export default {
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
  processAsyncQueue(tasks: ProcessAsyncQueueItem[] = []): Promise<void> {
    // 执行队列的索引
    let _index = 0;

    // 队列的所有任务
    const _tasks = tasks;

    /**
     * 循环执行任务
     * @returns Promise
     */
    function loopTask(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        // 队列结束
        if (_index >= _tasks.length) {
          resolve();
        }
        // 执行队列任务
        else {
          // 从队列顺序拿出一个任务
          const task = _tasks[_index++];

          // 没拿出任务直接结束
          if (!task) {
            reject(new Error('Task is undefined'));
            return;
          }

          // 执行任务的run方法
          task.run
            .apply(task?.context ?? task.run, task?.argv ?? [])
            // run方法执行成功
            .then((_res) => {
              task?.success?.(_res);

              // 下钻执行其余的任务
              loopTask()
                .then(() => {
                  resolve();
                })
                .catch((_error) => {
                  reject(_error);
                });
            })
            // run方法执行失败
            .catch((_error) => {
              task?.fail?.(_error);

              reject(_error);
            });
        }
      });
    }

    return loopTask();
  },
  /**----------------------------集合相关---------------------------**/
};
