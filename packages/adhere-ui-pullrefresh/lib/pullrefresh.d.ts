import React from 'react';
import { IPullRefreshProps, IPullRefreshState } from './types';
/**
 * PullRefresh
 * @class PullRefresh
 * @classdesc PullRefresh
 */
declare class PullRefresh extends React.Component<IPullRefreshProps, IPullRefreshState> {
    static defaultProps: any;
    static propTypes: any;
    state: IPullRefreshState;
    private isTop;
    private el;
    private scrollEl;
    private iconEl;
    private triggerInnerEl;
    private maskEl;
    private pullHeight;
    private startPageY;
    private isDownPull;
    private refreshHeight;
    private elRef;
    private iconElRef;
    private refreshElRef;
    private scrollElRef;
    private triggerInnerElRef;
    constructor(props: any);
    componentDidMount(): void;
    /**
     * getPullHeight
     * @private
     * @return number
     */
    private getPullHeight;
    /**
     * renderMask
     * @private
     */
    private renderMask;
    /**
     * addEvents
     * @private
     */
    private addEvents;
    /**
     * removeEvents
     * @private
     */
    private removeEvents;
    /**
     * onTouchStart
     * @param e
     * @private
     */
    private onTouchStart;
    /**
     * onTouchMove
     * @param e
     * @private
     */
    private onTouchMove;
    private onTouchEnd;
    private onScroll;
    /**
     * translateY - Y平移
     * @param el
     * @param y
     * @param duration
     * @private
     */
    private translateY;
    /**
     * rotateIcon
     * @param el
     * @param distance
     * @param duration
     * @private
     */
    private rotateIcon;
    /**
     * clear
     * @access private
     */
    private clear;
    /**
     * trigger
     * @param action
     * @param params
     * @private
     */
    private trigger;
    /**
     * refresh
     */
    refresh(): void;
    /**
     * reset
     */
    reset(): void;
    private renderLoadingAnimation;
    /**
     * renderIcon
     * @private
     */
    private renderIcon;
    /**
     * renderLabel
     * @private
     */
    private renderLabel;
    /**
     * renderUpdateTime
     * @private
     */
    private renderUpdateTime;
    render(): JSX.Element;
}
export default PullRefresh;
