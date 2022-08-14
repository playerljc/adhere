import React from 'react';
import { IBMapProps, IBMapState } from './types';
/**
 * BMap
 * @class BMap
 * @classdesc 百度地图的React组件
 */
declare class BMap extends React.Component<IBMapProps, IBMapState> {
    static defaultProps: any;
    static propTypes: any;
    protected BMap: any;
    protected map: any;
    protected isLoad: boolean;
    state: IBMapState;
    ref: React.RefObject<unknown>;
    /**
     * getMap
     */
    getMap(): any;
    /**
     * componentDidMount
     */
    protected componentDidMount(): void;
    /**
     * initMap
     */
    protected initMap(): void;
    protected initMapControl(): void;
    /**
     * renderLoading
     */
    protected renderLoading(): JSX.Element;
    /**
     * render
     */
    protected render(): JSX.Element;
}
export default BMap;
