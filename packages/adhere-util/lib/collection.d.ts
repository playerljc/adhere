import type { ProcessAsyncQueueItem } from './types';
declare const _default: {
    /**----------------------------集合相关---------------------------**/
    /**
     * processAsyncQueue
     * @description 异步执行的队列
     * @param {ProcessAsyncQueueItem[]} tasks 执行的任务
     * @return {Promise<any>}
     */
    processAsyncQueue(tasks?: ProcessAsyncQueueItem[]): Promise<void>;
};
export default _default;
