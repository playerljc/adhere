import React from 'react';
import PropTypes from 'prop-types';
import { Vector as VectorSource } from 'ol/source.js';

import OlMap from './olmap';
import Util from './util';
import { Heatmap as HeatmapLayer } from 'ol/layer';

/**
 * HeatMap
 * @class HeatMap
 * @classdesc openlayers中的热力图
 */
class HeatMap extends OlMap {
  static defaultProps: any;
  static propTypes: any;
  private vectorSource: VectorSource;

  addLayer() {
    // @ts-ignore
    const { heatMapLayerConfig } = this.props;

    this.vectorSource = Util.addHeatmapLayer(this.map, heatMapLayerConfig);
  }

  getHeatmapLayer() {
    const layers = this.map.getLayers();

    let result = null;

    for (let i = 1; i < layers.getLength(); i++) {
      const layer = layers.item(i);
      if (layer instanceof HeatmapLayer) {
        result = layer;
        break;
      }
    }

    return result;
  }
}

// 指定 props 的默认值：
HeatMap.defaultProps = {
  heatMapLayerConfig: {},
};

HeatMap.propTypes = {
  heatMapLayerConfig: PropTypes.object,
};

export default HeatMap;
