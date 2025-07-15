import { type ReactElement } from 'react';
import Suspense from './Suspense';
import type { ISuspenseSync, SuspenseSyncProps, SuspenseSyncState } from './types';
/**
 * SuspenseSync - 同步 Suspense 组件
 *
 * 用于处理同步数据的 Suspense 组件，当数据发生变化时会自动更新加载状态。
 * 适用于数据已经存在，只需要根据数据变化来控制加载状态的场景。
 *
 * @class SuspenseSync
 * @extends {Suspense<SuspenseSyncProps, SuspenseSyncState>}
 * @implements {ISuspenseSync}
 */
declare class SuspenseSync extends Suspense<SuspenseSyncProps, SuspenseSyncState> implements ISuspenseSync {
    static displayName: string;
    /** 组件状态 */
    state: SuspenseSyncState;
    /** 是否正在加载 */
    isLoading: boolean;
    /**
     * 组件即将接收新属性时的生命周期方法
     * @param nextProps - 新的属性对象
     */
    componentWillReceiveProps(nextProps: SuspenseSyncProps): void;
    /**
     * 判断数据是否发生变化
     * @param data - 当前数据
     * @param nextData - 新数据
     * @returns boolean 如果数据发生变化返回 true，否则返回 false
     */
    isDataDirty(data: any, nextData: any): boolean;
    /**
     * 重置组件状态
     * @description 重置组件到初始加载状态
     * @returns Promise<void> 返回一个 Promise，在重置完成后解析
     */
    reset(): Promise<void>;
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
     * 数据获取方法
     * @description 同步组件不需要实际获取数据，直接返回已解析的 Promise
     * @returns Promise<any> 返回一个已解析的 Promise
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
export default SuspenseSync;
