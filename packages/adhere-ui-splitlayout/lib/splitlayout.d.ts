import React from 'react';
import { ISplitLayoutProps } from './types';
/**
 * SplitLayout
 * @class SplitLayout
 * @classdesc SplitLayout
 */
declare class SplitLayout extends React.Component<ISplitLayoutProps, any> {
    static defaultProps: any;
    static propTypes: any;
    private props;
    private direction;
    private el;
    private situation;
    private directionProp;
    private isEnter;
    private isOut;
    private isDown;
    private isMove;
    private startVal;
    private changeVal;
    private changeBaseVal;
    private fixedValue;
    private maxDimension;
    private fixedEl;
    private autoEl;
    private containerEl;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<ISplitLayoutProps>, nextContext: any): void;
    /**
     * checked
     */
    private checked;
    /**
     * getFixedEl
     */
    private getFixedEl;
    /**
     * getAutoEl
     */
    private getAutoEl;
    /**
     * getFixedElPosition
     */
    private getFixedElPosition;
    /**
     * getMaxDimension
     */
    private getMaxDimension;
    /**
     * getResizeClass
     */
    private getResizeClass;
    /**
     * getProps
     */
    private getProps;
    /**
     * getMaxSize
     */
    private getMaxSize;
    /**
     * getMinSize
     */
    private getMinSize;
    initEvents(): void;
    onMouseenter: (e: any) => void;
    onMousedown: (e: any) => void;
    onMouseup: () => void;
    onMouseleave: (e: any) => void;
    onMousemove: (e: any) => void;
    onMouseout: (e: any) => void;
    renderInner: ({ direction }: {
        direction: any;
    }) => React.ReactElement;
    render(): JSX.Element;
}
export default SplitLayout;
