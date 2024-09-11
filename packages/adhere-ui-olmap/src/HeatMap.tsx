import { Heatmap as HeatMapLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source.js';
import React from 'react';

import OlMap from './OLMap';
import Util from './Util';

/**
 * HeatMap
 * @class HeatMap
 * @classdesc openlayers中的热力图
 */
class HeatMap extends OlMap {
  static defaultProps: any;
  static propTypes: any;
  private vectorSource: VectorSource | undefined;
  private layer: HeatMapLayer | undefined;

  /**
   * addLayer - 添加一个热力图图层
   */
  addLayer(heatMapLayerConfig = {}) {
    const { layer, vectorSource } = Util.createHeatMapLayer(heatMapLayerConfig ?? {});

    this.layer = layer;
    this.vectorSource = vectorSource;

    this.map.addLayer(this.layer);
  }

  getHeatMapLayer(): HeatMapLayer {
    return this.layer as HeatMapLayer;
  }
}

export default HeatMap;
