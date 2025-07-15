import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import type { StyleFunction } from 'ol/style/Style';

import Resource from '@baifendian/adhere-util-resource';

/**
 * GeoLayer构造函数参数接口
 */
interface GeoLayerParams {
  /** GeoJSON数据对象 */
  geoJsonObject: any;
  /** 样式函数 */
  onStyle: StyleFunction;
  /** 图层层级 */
  zIndex?: number;
}

/**
 * GeoLayer类
 * @class GeoLayer
 * @classdesc OpenLayers中的GeoJSON图层类
 */
class GeoLayer extends VectorLayer<any> {
  private vectorSource: VectorSource;

  /**
   * 构造函数
   * @param geoJsonObject - GeoJSON数据对象
   * @param onStyle - 样式函数
   * @param zIndex - 图层层级
   */
  constructor(geoJsonObject: any, onStyle: StyleFunction, zIndex: number = 0) {
    const geoSource = new VectorSource({
      features: new GeoJSON({
        dataProjection: Resource?.Dict?.value?.ResourceGisEpsg4326?.value,
        featureProjection: Resource?.Dict?.value?.ResourceGisEpsg3857?.value,
      }).readFeatures(geoJsonObject),
    });

    super({ 
      source: geoSource, 
      style: onStyle, 
      zIndex 
    });

    this.vectorSource = geoSource;
  }

  /**
   * 获取向量源
   * @returns 向量源实例
   */
  getVectorSource(): VectorSource {
    return this.vectorSource;
  }

  /**
   * 更新GeoJSON数据
   * @param geoJsonObject - 新的GeoJSON数据
   */
  updateGeoJSON(geoJsonObject: any): void {
    const features = new GeoJSON({
      dataProjection: Resource?.Dict?.value?.ResourceGisEpsg4326?.value,
      featureProjection: Resource?.Dict?.value?.ResourceGisEpsg3857?.value,
    }).readFeatures(geoJsonObject);

    this.vectorSource.clear();
    this.vectorSource.addFeatures(features);
  }

  /**
   * 清空图层数据
   */
  clear(): void {
    this.vectorSource.clear();
  }
}

export default GeoLayer;
