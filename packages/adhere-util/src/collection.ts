import type { ProcessAsyncQueueItem } from './types';

export default {
  /**----------------------------集合相关---------------------------**/
  /**
   * processAsyncQueue
   * @description 异步执行的队列
   * @param {ProcessAsyncQueueItem[]} tasks 执行的任务
   * @return {Promise<any>}
   */
  processAsyncQueue(tasks?: ProcessAsyncQueueItem[]) {
    // 执行队列的索引
    let _index = 0;

    // 队列的所有任务
    const _tasks = tasks ?? [];

    /**
     * loopTask
     * @return {Promise}
     */
    function loopTask() {
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
            reject();
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
