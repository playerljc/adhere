import React from 'react';
import { ISlideLayoutProps, ISlideLayoutState } from './types';
/**
 * SlideLayout
 * @class SlideLayout
 * @classdesc SlideLayout
 */
declare abstract class SlideLayout<P extends ISlideLayoutProps, S extends ISlideLayoutState> extends React.Component<P, S> {
    protected positionConfig: {
        init: object;
        show: object;
        close: object;
    };
    protected el: HTMLElement | null | undefined;
    protected maskEl: HTMLElement | undefined;
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<P>, prevState: S, snapshot?: any): void;
    componentWillUnmount(): void;
    /**
     * getDuration
     * @param time
     */
    protected getDuration(time: undefined | null | string | number): string | number;
    /**
     * initial
     */
    protected initial(): void;
    /**
     * show
     */
    protected show(): void;
    /**
     * close
     */
    protected close(): void;
}
export default SlideLayout;
