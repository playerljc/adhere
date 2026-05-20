import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';
import { OlMap } from './OLMap';
import type { HeatMapConfig, HeatMapProps } from './types';
/**
 * 热力图图层配置接口
 */
export interface HeatMapLayerConfig extends HeatMapConfig {
    /** 图层层级 */
    zIndex?: number;
    /** 图层是否可见 */
    visible?: boolean;
}
/**
 * 热力图组件
 * @class HeatMap
 * @classdesc OpenLayers中的热力图组件，继承自OlMap
 */
export declare class HeatMap extends OlMap {
    /** 热力图向量源 */
    private vectorSource;
    /** 热力图图层 */
    private layer;
    /** 热力图配置 */
    private readonly heatMapConfig;
    constructor(props: HeatMapProps);
    /**
     * 组件挂载后初始化热力图
     */
    componentDidMount(): void;
    /**
     * addLayer - 添加一个热力图图层
     */
    addLayer(heatMapLayerConfig?: {}): void;
    /**
     * 添加热力图图层
     * @param config - 热力图配置
     * @returns 热力图图层和向量源
     */
    addHeatMapLayer(config: HeatMapConfig): {
        layer: HeatMapLayer;
        vectorSource: VectorSource;
    };
    /**
     * 移除热力图图层
     */
    removeHeatMapLayer(): void;
    /**
     * 获取热力图图层
     * @returns 热力图图层实例
     */
    getHeatMapLayer(): HeatMapLayer | undefined;
    /**
     * 获取热力图向量源
     * @returns 热力图向量源实例
     */
    getHeatMapVectorSource(): VectorSource | undefined;
    /**
     * 更新热力图数据
     * @param features - 要添加的要素数组
     */
    updateHeatMapData(features: any[]): void;
    /**
     * 清空热力图数据
     */
    clearHeatMapData(): void;
    /**
     * 设置热力图图层可见性
     * @param visible - 是否可见
     */
    setHeatMapLayerVisible(visible: boolean): void;
    /**
     * 设置热力图图层透明度
     * @param opacity - 透明度值 (0-1)
     */
    setHeatMapLayerOpacity(opacity: number): void;
    /**
     * 组件卸载时清理资源
     */
    componentWillUnmount(): void;
    /**
     * 重写清空方法，确保热力图也被清空
     */
    clear(): void;
}
export default HeatMap;
