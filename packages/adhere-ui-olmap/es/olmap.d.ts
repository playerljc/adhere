import React from 'react';
import GeoLayer from './geolayer';
import { OLMapProps } from './types';
/**
 * OlMap
 * @class OlMap
 * @classdesc openlayers的地图组件
 */
declare class OlMap extends React.Component<OLMapProps, any> {
    private mainGeoLayer;
    private el;
    private zoom;
    protected map: any;
    private props;
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    componentDidMount(): void;
    /**
     * addMainGeoJSONLayer - 添加主的geoJSON层
     * @param geoJSONStyle
     * @param geoJSONData
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: {
        geoJSONStyle: any;
        geoJSONData: any;
    }): void;
    /**
     * 添加GeoJSONLayer
     * @param geojsonData
     * @param getStyleConfig
     * @param zIndex
     */
    addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex?: number): GeoLayer;
    /**
     * addWindLayer - 添加风场层
     * @param data
     * @param config
     * @param zIndex
     */
    addWindLayer(data: any, config: any, zIndex?: number): import("./windlayer").default;
    /**
     * 添加数据层
     * @return {*|{vectorLayer, vectorSource}}
     */
    addDataLayer(zIndex: any): {
        vectorLayer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
        vectorSource: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
    };
    /**
     * 给地图实例添加 hover监听者
     */
    addHoverListener(layer: any, hit: any, unHit: any): void;
    /**
     * 添加缩放事件
     * @param handler
     */
    addZoomListener(handler: any): void;
    /**
     * 给地图实例添加 单击监听者
     */
    addClickListener: (layer: any, hit: any, unHit: any) => void;
    /**
     * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
     */
    addOverlay(config: any): import("ol/Overlay").default;
    /**
     * 给Overlay对象 配置状态
     */
    setOverlayState(overlay: any, state: any): void;
    /**
     * 将此处鼠标点样式
     */
    setCursor: (style: any) => void;
    /**
     * 清空所有层，除了底图和常州geoJSOn层
     */
    clear(): void;
    /**
     * getMap
     * @return {*|Map}
     */
    getMap(): any;
    render(): React.JSX.Element;
}
export default OlMap;
