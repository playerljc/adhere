import React from 'react';
import { ISurnamesProps } from './types';
/**
 * Surnames
 * @class Surnames
 * @classdesc Surnames
 */
declare class Surnames extends React.Component<ISurnamesProps> {
    static defaultProps: any;
    static propTypes: any;
    private key;
    private isMouseClicked;
    private isMouseMoved;
    private startY;
    private startX;
    private curIndexName;
    private indexPositionMap;
    private el;
    private indexEl;
    private indexInnerEl;
    private highlightedEl;
    private maskEl;
    private contentEl;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<ISurnamesProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillUnmount(): void;
    private onClick;
    private onTouchmove;
    private onTouchend;
    private onMousedown;
    private onMousemove;
    private onMouseleave;
    private onMouseup;
    private onResize;
    private clickDetail;
    private moveDetail;
    private initEvent;
    private adapterDimension;
    private createIndexPosition;
    private createMask;
    scrollToAnimation(name: string | undefined, duration?: number): void;
    scrollTo(name: any): void;
    private getDirection;
    private findIndex;
    private update;
    private renderIndex;
    private renderContent;
    render(): JSX.Element;
}
export default Surnames;
