import React from 'react';
import { ISwipeOutProps } from './types';
/**
 * SwipeOut
 * @class SwipeOut
 * @classdesc SwipeOut
 */
declare class SwipeOut extends React.Component<ISwipeOutProps> {
    static defaultProps: any;
    static propTypes: any;
    private ref;
    private swiper;
    private map;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<ISwipeOutProps>): void;
    private slide;
    /**
     * createSwiper
     * @private
     */
    private createSwiper;
    /**
     * trigger
     * @param action
     * @param params
     * @private
     */
    private trigger;
    render(): JSX.Element;
}
export default SwipeOut;
