import React, { type ReactElement, type RefObject } from 'react';
import type { ConfigProviderContext } from '@baifendian/adhere-ui-configprovider/es/types';
import type { ISuspense, SuspenseProps, SuspenseState } from './types';
/**
 * Suspense - 抽象基类组件
 *
 * 这是一个抽象基类，提供了 Suspense 组件的核心功能。
 * 子类需要实现以下抽象方法：
 * - fetchData: 数据获取方法
 * - renderInner: 渲染实际内容
 * - showLoading: 是否显示加载状态
 * - onFirstFetchDataBefore: 第一次数据获取前的回调
 * - onFirstFetchDataAfter: 第一次数据获取后的回调
 *
 * @template P - 属性类型，继承自 SuspenseProps
 * @template S - 状态类型，继承自 SuspenseState
 * @abstract
 */
declare abstract class Suspense<P extends SuspenseProps = SuspenseProps, S extends SuspenseState = SuspenseState> extends React.PureComponent<P, S> implements ISuspense {
    /** 是否为第一次加载 */
    isFirst: boolean;
    /** 是否为第一次加载状态 */
    isFirstLoading: boolean;
    /** 子组件包装器的引用 */
    protected childrenWrapRef: RefObject<HTMLDivElement>;
    /** 配置提供者上下文 */
    protected _context: ConfigProviderContext | undefined;
    static displayName: string;
    static defaultProps: any;
    static propTypes: any;
    /**
     * 数据获取方法
     * @description 抽象方法，子类必须实现
     * @param params - 可选的参数
     * @returns Promise<any> 数据获取的 Promise
     */
    abstract fetchData(params?: any): Promise<any>;
    /**
     * 渲染实际内容
     * @description 抽象方法，子类必须实现
     * @returns ReactNode 渲染的内容
     */
    abstract renderInner(): React.ReactNode;
    /**
     * 是否显示加载状态
     * @description 抽象方法，子类必须实现
     * @returns boolean 是否显示加载状态
     */
    abstract showLoading(): boolean;
    /**
     * 第一次数据获取前的回调
     * @description 抽象方法，子类必须实现
     * @returns Promise<any> 回调的 Promise
     */
    abstract onFirstFetchDataBefore(): Promise<any>;
    /**
     * 第一次数据获取后的回调
     * @description 抽象方法，子类必须实现
     * @param res - 数据获取的结果
     * @returns Promise<any> 回调的 Promise
     */
    abstract onFirstFetchDataAfter(res?: any): Promise<any>;
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: P);
    /**
     * 组件即将接收新属性时的生命周期方法
     * @param nextProps - 新的属性对象
     */
    componentWillReceiveProps(nextProps: P): void;
    /**
     * 组件挂载后的生命周期方法
     */
    componentDidMount(): void;
    /**
     * 更新主题配置
     * @private
     */
    private updateTheme;
    /**
     * 初始化数据获取
     * @private
     */
    private initializeDataFetch;
    /**
     * 渲染默认的首次加载状态
     * @description 创建 7 个骨架屏组件
     * @returns ReactElement 首次加载的 UI
     * @private
     * @static
     */
    private static renderNormalFirstLoading;
    /**
     * 渲染首次加载状态
     * @description 根据 props 中的 firstLoading 或默认样式渲染
     * @returns ReactElement 首次加载的 UI
     * @private
     */
    private renderFirstLoading;
    /**
     * 渲染正常状态
     * @description 根据是否自定义 normalLoading 来决定渲染方式
     * @returns ReactNode 正常状态的 UI
     * @private
     */
    private renderNormal;
    /**
     * 渲染分发器
     * @description 根据加载状态决定渲染首次加载还是正常状态
     * @returns ReactNode 渲染的内容
     * @private
     */
    private renderDispatch;
    /**
     * 渲染组件
     * @returns ReactElement 组件的 JSX
     */
    render(): ReactElement;
}
export default Suspense;
