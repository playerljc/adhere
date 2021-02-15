import React from 'react';
import { IStickupLayoutProps } from './types';
import StickupLayoutItem from './item';
/**
 * StickupLayout
 * @class StickupLayout
 * @classdesc StickupLayout
 */
declare class StickupLayout extends React.Component<IStickupLayoutProps> {
    static defaultProps: any;
    static propTypes: any;
    static Item: typeof StickupLayoutItem;
    private el;
    private fixedEl;
    private innerEl;
    private key;
    private index;
    private headerEls;
    private preScrollObj;
    private maskEl;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<IStickupLayoutProps>, nextContext: any): void;
    componentWillUnmount(): void;
    private onScroll;
    private initial;
    private createIndex;
    private position;
    /**
     * scrollAnimationTo
     * @access private
     * @param {number} targetTop
     * @param {number} duration
     */
    private scrollAnimationTo;
    /**
     * scrollTo
     * @access private
     * @param {Object} item
     * @param {number} duration
     */
    private scrollTo;
    /**
     * initMask
     * @access private
     */
    private initMask;
    /**
     * scrollToByIndex
     * @param {number} index
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByIndex(index: any, duration?: number): false | undefined;
    render(): JSX.Element;
}
export default StickupLayout;
