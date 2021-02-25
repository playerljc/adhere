import React from 'react';
import { ICascadeComparedProps } from './types';
/**
 * CascadeCompared
 * @class CascadeCompared
 * @classdesc CascadeCompared
 */
declare class CascadeCompared extends React.Component<ICascadeComparedProps> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    private scrolls;
    private stickup;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private initScroll;
    private getFixedColumnConfig;
    private renderCell;
    private renderIndicator;
    private renderMastGroupContent;
    private renderMasterGroup;
    private renderMaster;
    /**
     * scrollToByIndex
     * @param {number} index
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByIndex(index: number, duration?: number): void;
    /**
     * scrollToByHeaderEl
     * @param {HtmlElement} headerEl
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByHeaderEl(headerEl: HTMLElement, duration?: number): void;
    /**
     * scrollToByColumn
     * @param {number} columnIndex
     */
    scrollToByColumn(columnIndex: number): void;
    render(): JSX.Element;
}
export default CascadeCompared;
