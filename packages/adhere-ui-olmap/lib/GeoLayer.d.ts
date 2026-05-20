import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import type { StyleFunction } from 'ol/style/Style';
/**
 * GeoLayer类
 * @class GeoLayer
 * @classdesc OpenLayers中的GeoJSON图层类
 */
declare class GeoLayer extends VectorLayer<any> {
    private vectorSource;
    /**
     * 构造函数
     * @param geoJsonObject - GeoJSON数据对象
     * @param onStyle - 样式函数
     * @param zIndex - 图层层级
     */
    constructor(geoJsonObject: any, onStyle: StyleFunction, zIndex?: number);
    /**
     * 获取向量源
     * @returns 向量源实例
     */
    getVectorSource(): VectorSource;
    /**
     * 更新GeoJSON数据
     * @param geoJsonObject - 新的GeoJSON数据
     */
    updateGeoJSON(geoJsonObject: any): void;
    /**
     * 清空图层数据
     */
    clear(): void;
}
export default GeoLayer;
