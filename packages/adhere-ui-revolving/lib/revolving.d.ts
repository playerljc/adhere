import React from 'react';
import { IRevolvingProps } from './types';
import RevolvingItem from './item';
/**
 * Revolving
 * @class Revolving
 * @classdesc Revolving
 */
declare class Revolving extends React.Component<IRevolvingProps> {
    static defaultProps: any;
    static propTypes: any;
    static Item: RevolvingItem;
    private el;
    private wrapperEl;
    private swiper;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<IRevolvingProps>, nextContext: any): void;
    private initial;
    private getDirection;
    /**
     * start
     */
    start(): void;
    /**
     * stop
     */
    stop(): void;
    /**
     * isRunning
     * @return {boolean}
     */
    isRunning(): any;
    render(): JSX.Element;
}
export default Revolving;
