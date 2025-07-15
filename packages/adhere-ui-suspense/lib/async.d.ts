import { type ReactElement } from 'react';
import Suspense from './Suspense';
import type { SuspenseASyncProps, SuspenseASyncState } from './types';
/**
 * SuspenseAsync - 异步 Suspense 组件
 *
 * 用于处理异步数据加载的 Suspense 组件，通过 fetchData 函数获取数据。
 * 适用于需要从服务器或异步源获取数据的场景。
 *
 * @class SuspenseAsync
 * @extends {Suspense<SuspenseASyncProps, SuspenseASyncState>}
 */
declare class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
    static displayName: string;
    /** 组件状态 */
    state: SuspenseASyncState;
    /**
     * 是否显示加载状态
     * @returns boolean 当前加载状态
     */
    showLoading(): boolean;
    /**
     * 渲染内部内容
     * @description 根据数据是否为空来决定渲染内容或空状态
     * @returns ReactElement | null 渲染的内容
     */
    renderInner(): ReactElement | null;
    /**
     * 重置组件状态
     * @description 重置组件到初始加载状态并重新获取数据
     * @returns Promise<any> 返回数据获取的 Promise
     */
    reset(): Promise<any>;
    /**
     * 数据获取方法
     * @description 调用 props 中的 fetchData 函数获取数据
     * @returns Promise<any> 返回数据获取的 Promise
     */
    fetchData(): Promise<any>;
    /**
     * 第一次数据获取后的回调
     * @param res - 数据获取的结果
     * @returns Promise<any> 返回一个已解析的 Promise
     */
    onFirstFetchDataAfter(res: any): Promise<any>;
    /**
     * 第一次数据获取前的回调
     * @returns Promise<any> 返回一个已解析的 Promise
     */
    onFirstFetchDataBefore(): Promise<any>;
}
export default SuspenseAsync;
