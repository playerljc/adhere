import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';
import React from 'react';

import OlMap from './OLMap';

// 获取OlMap类
const OlMapClass = (OlMap as any).default || OlMap;
import Util from './Util';
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
class HeatMap extends OlMapClass {
  protected map: any;
  private vectorSource: VectorSource | undefined;
  private layer: HeatMapLayer | undefined;

  static defaultProps: Partial<HeatMapProps>;
  static propTypes: any;

  /**
   * 添加热力图图层
   * @param heatMapLayerConfig - 热力图图层配置
   */
  addLayer(heatMapLayerConfig: HeatMapConfig = {}): void {
    const { layer, vectorSource } = Util.createHeatMapLayer(heatMapLayerConfig);

    this.layer = layer;
    this.vectorSource = vectorSource;

    this.map.addLayer(this.layer);
  }

  /**
   * 获取热力图图层
   * @returns 热力图图层实例
   */
  getHeatMapLayer(): HeatMapLayer {
    return this.layer as HeatMapLayer;
  }

  /**
   * 获取向量源
   * @returns 向量源实例
   */
  getVectorSource(): VectorSource | undefined {
    return this.vectorSource;
  }
}

export default HeatMap;
