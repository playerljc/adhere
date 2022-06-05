import React from 'react';
import type { IScrollLoadProps } from './types';
/**
 * ScrollLoad
 * @class ScrollLoad
 * @classdesc ScrollLoad
 */
declare class ScrollLoad extends React.Component<IScrollLoadProps> {
    static defaultProps: any;
    static propTypes: any;
    static EMPTY: string;
    static ERROR: string;
    static NORMAL: string;
    private lock;
    private el;
    private loadEl;
    private emptyEl;
    private errorEl;
    constructor(props: any);
    componentDidMount(): void;
    private getScrollContainer;
    private initEvents;
    private onScroll;
    private onEmptyClick;
    private onErrorClick;
    /**
     * hideAll
     */
    hideAll(): void;
    private renderLoading;
    private renderEmpty;
    private renderError;
    render(): JSX.Element;
}
export default ScrollLoad;
