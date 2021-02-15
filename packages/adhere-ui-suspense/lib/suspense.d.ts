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
declare abstract class Suspense extends React.Component<ISuspenseProps, ISuspenseState> implements ISuspense {
    isFirst: boolean;
    isFirstLoading: boolean;
    static defaultProps: any;
    static propTypes: any;
    abstract fetchData(): void;
    abstract renderInner(): React.ReactElement | null;
    abstract showLoading(): boolean;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    /**
     * renderNormalFirstLoading
     * @return React.ReactElement
     */
    renderNormalFirstLoading(): JSX.Element;
    /**
     * renderFirstLoading - 渲染第一次Loading的UI
     * @return {React.Element}
     */
    renderFirstLoading(): any;
    /**
     * renderNormal - 渲染正常的UI
     * @return {React.Element}
     */
    renderNormal(): JSX.Element;
    /**
     * renderDispatch
     * @return {React.Element|*}
     */
    renderDispatch(): any;
    render(): JSX.Element;
}
export default Suspense;
