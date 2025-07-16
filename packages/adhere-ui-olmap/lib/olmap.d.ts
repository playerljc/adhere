import { Style } from 'ol/style.js';
import PropTypes from 'prop-types';
import React from 'react';
import GeoLayer from './GeoLayer';
import type { GeoJSONStyle, MapInstance, OLMapProps, OLMapState } from './types';
/**
 * OLMap组件
 * @class OlMap
 * @classdesc OpenLayers地图组件，提供地图显示和交互功能
 */
export declare class OlMap extends React.Component<OLMapProps, OLMapState> implements MapInstance {
    mainGeoLayer: GeoLayer | undefined;
    readonly el: React.RefObject<HTMLDivElement>;
    map: any;
    static defaultProps: Partial<OLMapProps>;
    static propTypes: {
        type: PropTypes.Requireable<"administrative" | "satellite">;
        mapConfig: PropTypes.Requireable<object>;
        maxZoom: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        zoom: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        fitZoom: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        minZoom: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        center: PropTypes.Requireable<(number | null | undefined)[]>;
        extent: PropTypes.Requireable<((number | null | undefined)[] | null | undefined)[]>;
        layers: PropTypes.Requireable<any[]>;
        onAllTileloadend: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: OLMapProps);
    /**
     * 组件挂载后初始化地图
     */
    componentDidMount(): void;
    /**
     * 添加主GeoJSON图层
     * @param params - 图层参数
     * @param params.geoJSONStyle - GeoJSON样式配置
     * @param params.geoJSONData - GeoJSON数据
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData, }: {
        geoJSONStyle: GeoJSONStyle;
        geoJSONData: any;
    }): void;
    /**
     * 添加GeoJSON图层
     * @param geojsonData - GeoJSON数据
     * @param getStyleConfig - 样式配置函数
     * @param zIndex - 图层层级
     * @returns GeoLayer实例
     */
    addGeoLayer(geojsonData: any, getStyleConfig: () => Style, zIndex?: number): GeoLayer;
    /**
     * 添加风场图层
     * @param data - 风场数据
     * @param config - 配置参数
     * @param zIndex - 图层层级
     * @returns 风场图层实例
     */
    addWindLayer(data: any, config: any, zIndex?: number): any;
    /**
     * 添加数据图层
     * @param zIndex - 图层层级
     * @returns 向量图层和源对象
     */
    addDataLayer(zIndex: number): {
        vectorLayer: any;
        vectorSource: any;
    };
    /**
     * 给地图实例添加悬停监听器
     * @param layer - 图层
     * @param hit - 悬停回调
     * @param unHit - 离开回调
     */
    addHoverListener(layer: any, hit: (feature: any) => void, unHit: (feature?: any) => void): void;
    /**
     * 添加缩放事件监听器
     * @param handler - 缩放回调函数
     */
    addZoomListener(handler: (zoom: number) => void): void;
    /**
     * 给地图实例添加点击监听器
     * @param layer - 图层
     * @param hit - 点击回调
     * @param unHit - 未点击回调
     */
    addClickListener: (layer: any, hit: (feature: any) => void, unHit: (feature?: any) => void) => void;
    /**
     * 添加一个Overlay对象
     * @param config - 覆盖物配置
     * @returns Overlay实例
     */
    addOverlay(config: any): any;
    /**
     * 给Overlay对象配置状态
     * @param overlay - Overlay实例
     * @param state - 状态配置
     */
    setOverlayState(overlay: any, state: any): void;
    /**
     * 设置鼠标样式
     * @param style - 鼠标样式
     */
    setCursor: (style: string) => void;
    /**
     * 获取瓦片图层
     * @returns 瓦片图层
     */
    getTileLayer(): any;
    /**
     * 所有瓦片加载完成事件处理
     * @description 监听所有瓦片加载完成的时间
     */
    onAllTileloadend(): void;
    /**
     * 清空所有图层，除了底图和主GeoJSON层
     */
    clear(): void;
    /**
     * 获取地图实例
     * @returns 地图实例
     */
    getMap(): any;
    render(): React.ReactElement;
}
declare const _default: React.ForwardRefExoticComponent<OLMapProps & React.RefAttributes<OlMap>>;
export default _default;
