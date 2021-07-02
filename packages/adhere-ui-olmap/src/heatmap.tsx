import React from 'react';
import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';

import OlMap from './olmap';
import Util from './util';

/**
 * HeatMap
 * @class HeatMap
 * @classdesc openlayers中的热力图
 */
class HeatMap extends OlMap {
  static defaultProps: any;
  static propTypes: any;
  private vectorSource: VectorSource;
  private layer: HeatMapLayer;

  /**
   * addLayer - 添加一个热力图图层
   */
  addLayer(heatMapLayerConfig = {}) {
    const { layer, vectorSource } = Util.createHeatMapLayer(
      heatMapLayerConfig || {},
    );

    this.layer = layer;
    this.vectorSource = vectorSource;

    this.map.addLayer(this.layer);
  }

  getHeatMapLayer():HeatMapLayer {
    return this.layer;
  }
}

export default HeatMap;
