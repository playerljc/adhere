import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { Fill, Stroke, Style, Text } from 'ol/style.js';

import Resource from '@baifendian/adhere-util-resource';
// import intl from '@baifendian/adhere-util-intl';

import GeoLayer from './geolayer';
// import * as TitleLayer from './titlelayer';
import { IOLMapProps } from './types';
import Util from './util';
import Constent from './constent';

// import 'ol/ol.css';
// import './olmap.less';

const selectorPrefix = 'adhere-ui-olmap';

// const DEFAULT_STYLE = {
//   stroke: {
//     color: 'rgb(30,144,255)',
//     width: 3,
//     lineDash: [1, 2, 3, 4, 5, 6],
//   },
//   fill: {
//     color: 'rgba(30,144,255,0.1)',
//   },
//   text: {
//     textAlign: 'center',
//     color: '#000',
//     font: '26px sans-serif',
//     text: intl.v('新北区'),
//   },
// };

// @ts-ignore
/**
 * OlMap
 * @class OlMap
 * @classdesc openlayers的地图组件
 */
class OlMap extends React.Component<IOLMapProps, any> {
  private mainGeoLayer: GeoLayer | undefined;
  private el: React.RefObject<unknown>;
  private zoom: number | null;
  protected map;
  // @ts-ignore
  private props: IOLMapProps | undefined;
  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.el = createRef();

    this.zoom = null;
  }

  componentDidMount() {
    // @ts-ignore
    const { mapConfig, type, maxZoom, minZoom, zoom, layers, center, extent } = this.props;

    this.map = Util.createMap({
      config: {
        target: this.el.current,
      },
      type,
      maxZoom,
      zoom,
      minZoom,
      center,
      extent,
      layers,
      ...mapConfig,
    });

    this.zoom = this.map.getView().getZoom();

    // 添加主GeoJSON的Layer
    // this.addMainGeoJSONLayer();
  }

  /**
   * addMainGeoJSONLayer - 添加主的geoJSON层
   * @param geoJSONStyle
   * @param geoJSONData
   */
  addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }) {
    // @ts-ignore
    // const { geoJSONStyle, geoJSONData } = this.props;

    const { stroke, fill, text } = geoJSONStyle; // Dict.value['feature-style-xinbeiqu'];

    this.mainGeoLayer = this.addGeoLayer(geoJSONData /* Dict.value.mainGeoJSONData */, () => {
      return new Style({
        fill: new Fill({ ...fill }),
        stroke: new Stroke({ ...stroke }),
        text: new Text({ ...text, fill: new Fill({ color: text.color }), overflow: true }),
      });
    });
  }

  /**
   * 添加GeoJSONLayer
   * @param geojsonData
   * @param getStyleConfig
   * @param zIndex
   */
  addGeoLayer(geojsonData, getStyleConfig, zIndex = 0) {
    return Util.addGeoLayer(this.map, geojsonData, getStyleConfig, zIndex);
  }

  /**
   * addWindLayer - 添加风场层
   * @param data
   * @param config
   * @param zIndex
   */
  addWindLayer(data, config, zIndex = 0) {
    return Util.addWindLayer(this.map, data, config, zIndex);
  }

  /**
   * 添加数据层
   * @return {*|{vectorLayer, vectorSource}}
   */
  addDataLayer(zIndex) {
    return Util.addVectorLayer(this.map, zIndex);
  }

  /**
   * 给地图实例添加 hover监听者
   */
  addHoverListener(layer, hit, unHit) {
    Util.addHoverListener(this.map, layer, hit, unHit);
  }

  /**
   * 添加缩放事件
   * @param handler
   */
  addZoomListener(handler) {
    this.map.on('moveend', (evt) => {
      const zoom = this.map.getView().getZoom();

      if (zoom !== this.zoom) {
        handler(zoom);
      }

      this.zoom = zoom;
    });
  }

  /**
   * 给地图实例添加 单击监听者
   */
  addClickListener = (layer, hit, unHit) => {
    Util.addClickListener(this.map, layer, hit, unHit, this.setCursor);
  };

  /**
   * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
   */
  addOverlay(config) {
    // @ts-ignore
    return Util.addOverlay(this.map, config);
  }

  /**
   * 给Overlay对象 配置状态
   */
  setOverlayState(overlay, state) {
    Util.setOverlayState(overlay, state);
  }

  /**
   * 将此处鼠标点样式
   */
  setCursor = (style) => {
    this.map.getTarget().style.cursor = style;
  };

  /**
   * 清空所有层，除了底图和常州geoJSOn层
   */
  clear() {
    const layers = this.map.getLayers();

    for (let i = 1; i < layers.getLength(); i++) {
      this.map.removeLayer(layers.item(i));
    }
  }

  /**
   * getMap
   * @return {*|Map}
   */
  getMap() {
    return this.map;
  }

  render() {
    // @ts-ignore
    return <div className={selectorPrefix} ref={this.el} />;
  }
}

// 指定 props 的默认值：
OlMap.defaultProps = {
  type: Constent.MAP_TYPE_ADMINISTRATIVE,
  mapConfig: {},
  // geoJSONStyle: DEFAULT_STYLE,
  // geoJSONData: Resource.Dict.value.ResourceGisXinbeiquGeoJSON.value,
  maxZoom: Resource.Dict.value.ResourceGisMapMaxZoom.value,
  zoom: Resource.Dict.value.ResourceGisMapMaxZoom.value,
  fitZoom: Resource.Dict.value.ResourceGisMapMaxZoom.value,
  minZoom: Resource.Dict.value.ResourceGisMapMinZoom.value,
  center: Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value,
  extent: Resource.Dict.value.ResourceGisXinbeiquMapExtent.value,
  layers: undefined,
};

OlMap.propTypes = {
  type: PropTypes.oneOf([Constent.MAP_TYPE_ADMINISTRATIVE, Constent.MAP_TYPE_SATELLITE]),
  mapConfig: PropTypes.object,
  // geoJSONStyle: PropTypes.object,
  // geoJSONData: PropTypes.object,
  maxZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fitZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  center: PropTypes.arrayOf(PropTypes.number),
  extent: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  layers: PropTypes.array,
};

export default OlMap;
