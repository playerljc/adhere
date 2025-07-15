import type { ReactNode } from 'react';

import SuspenseAsync from './Async';
import Suspense from './Suspense';
import SuspenseSync from './Sync';
import type { SuspenseProps, SuspenseState } from './types';

/**
 * SuspenseImpl - Suspense 组件实现类
 * 
 * 这是一个抽象基类，提供了 Suspense 组件的基础实现。
 * 通过静态属性 Sync 和 ASync 提供同步和异步两种使用方式。
 * 
 * @template P - 属性类型，继承自 SuspenseProps
 * @template S - 状态类型，继承自 SuspenseState
 */
class SuspenseImpl<
  P extends SuspenseProps = SuspenseProps,
  S extends SuspenseState = SuspenseState,
> extends Suspense<P, S> {
  static displayName = 'SuspenseImpl';

  /** 同步 Suspense 组件 */
  static Sync = SuspenseSync;
  
  /** 异步 Suspense 组件 */
  static ASync = SuspenseAsync;

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: P) {
    super(props);
  }

  /**
   * 数据获取方法
   * @description 默认实现，返回一个已解析的 Promise
   * @returns Promise<any> 返回一个已解析的 Promise
   */
  fetchData(): Promise<any> {
    return Promise.resolve();
  }

  /**
   * 渲染内部内容
   * @description 默认实现，返回 null
   * @returns ReactNode 返回 null
   */
  renderInner(): ReactNode {
    return null;
  }

  /**
   * 是否显示加载状态
   * @description 默认实现，始终返回 true
   * @returns boolean 始终返回 true
   */
  showLoading(): boolean {
    return true;
  }

  /**
   * 第一次数据获取后的回调
   * @description 默认实现，返回一个已解析的 Promise
   * @param res - 数据获取的结果
   * @returns Promise<any> 返回一个已解析的 Promise
   */
  onFirstFetchDataAfter(res: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  /**
   * 第一次数据获取前的回调
   * @description 默认实现，返回一个已解析的 Promise
   * @returns Promise<any> 返回一个已解析的 Promise
   */
  onFirstFetchDataBefore(): Promise<any> {
    return Promise.resolve(undefined);
  }
}

export default SuspenseImpl;
