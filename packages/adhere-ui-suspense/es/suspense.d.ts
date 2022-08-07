import React from 'react';
import { ISuspense, ISuspenseProps, ISuspenseState } from './types';
/**
 * Suspense
 * @class Suspense
 * @classdesc Suspense
 *
 * 需要重写的方法
 * fetchData
 * renderInner
 * showLoading
 */
declare abstract class Suspense<T extends ISuspenseProps, P extends ISuspenseState> extends React.Component<T, P> implements ISuspense {
    isFirst: boolean;
    isFirstLoading: boolean;
    static defaultProps: any;
    static propTypes: any;
    static Sync: Function;
    static ASync: Function;
    /**
     * fetchData - 加载数据
     */
    abstract fetchData(): void;
    /**
     * renderInner - 渲染实际内容
     * @return React.ReactElement
     */
    abstract renderInner(): React.ReactElement | null;
    /**
     * showLoading - 是否显示遮罩
     * @return boolean
     */
    abstract showLoading(): boolean;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    /**
     * renderNormalFirstLoading
     * @return React.ReactElement
     */
    private static renderNormalFirstLoading;
    /**
     * renderFirstLoading - 渲染第一次Loading的UI
     * @return {React.Element}
     */
    private renderFirstLoading;
    /**
     * renderNormal - 渲染正常的UI
     * @return {React.Element}
     */
    private renderNormal;
    /**
     * renderDispatch
     * @return {React.Element|*}
     */
    private renderDispatch;
    render(): JSX.Element;
}
export default Suspense;
