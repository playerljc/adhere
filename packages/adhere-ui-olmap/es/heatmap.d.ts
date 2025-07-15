import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';
declare const OlMapClass: any;
import type { HeatMapConfig } from './types';
/**
 * HeatMap组件属性接口
 */
interface HeatMapProps {
    /** 热力图配置 */
    heatMapConfig?: HeatMapConfig;
    /** 继承自OLMap的所有属性 */
    [key: string]: any;
}
/**
 * HeatMap组件
 * @class HeatMap
 * @classdesc OpenLayers中的热力图组件，继承自OLMap
 */
declare class HeatMap extends OlMapClass {
    protected map: any;
    private vectorSource;
    private layer;
    static defaultProps: Partial<HeatMapProps>;
    static propTypes: any;
    /**
     * 添加热力图图层
     * @param heatMapLayerConfig - 热力图图层配置
     */
    addLayer(heatMapLayerConfig?: HeatMapConfig): void;
    /**
     * 获取热力图图层
     * @returns 热力图图层实例
     */
    getHeatMapLayer(): HeatMapLayer;
    /**
     * 获取向量源
     * @returns 向量源实例
     */
    getVectorSource(): VectorSource | undefined;
}
export default HeatMap;
