import { Fill, Stroke, Style, Text } from 'ol/style.js';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';

import Resource from '@baifendian/adhere-util-resource';

import Constent from './Constent';
import GeoLayer from './GeoLayer';
import Util from './Util';
import type { OLMapProps } from './types';

const selectorPrefix = 'adhere-ui-ol-map';

/**
 * OlMap
 * @class OlMap
 * @classdesc openlayers的地图组件
 */
class OlMap extends React.Component<OLMapProps, any> {
  private mainGeoLayer: GeoLayer | undefined;
  private el: React.RefObject<HTMLElement | null>;
  private zoom: number | null;
  protected map;
  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.el = createRef() as any;

    this.zoom = null;
  }

  componentDidMount() {
    const { mapConfig, type, maxZoom, minZoom, zoom, layers, center, extent, fitZoom } = this.props;

    this.map = Util.createMap({
      config: {
        target: this.el.current,
      },
      type,
      fitZoom,
      maxZoom,
      zoom,
      minZoom,
      center,
      extent,
      layers,
      ...mapConfig,
    });

    this.zoom = this.map.getView().getZoom();

    // 注册所有瓦片加载完成事件
    this.onAllTileloadend();

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

  getTileLayer() {
    return this.map.getLayers().getArray()[0];
  }
  /**
   * onAllTileloadend
   * @description 所有瓦片加载完成的时间
   */
  private onAllTileloadend() {
    const tileLayer = this.getTileLayer();

    // 追踪加载中的瓦片数
    let loadingTileCount = 0;

    // 监听瓦片加载开始事件
    tileLayer.getSource().on('tileloadstart', () => {
      loadingTileCount++;
    });

    // 监听瓦片加载完成和加载失败事件
    tileLayer.getSource().on(['tileloadend', 'tileloaderror'], () => {
      loadingTileCount--;

      // 当所有瓦片都加载完成时
      if (loadingTileCount === 0) {
        // 所有瓦片加载完成
        this.props?.onAllTileloadend?.();
      }
    });
  }

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
    return <div className={selectorPrefix} ref={this.el as any} />;
  }
}

// 指定 props 的默认值：
OlMap.defaultProps = {
  type: Constent.MAP_TYPE_ADMINISTRATIVE,
  mapConfig: {},
  maxZoom: Resource.Dict.value.ResourceGisMapMaxZoom.value,
  zoom: Resource.Dict.value.ResourceGisMapMaxZoom.value,
  minZoom: Resource.Dict.value.ResourceGisMapMinZoom.value,
  center: Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value,
  extent: Resource.Dict.value.ResourceGisXinbeiquMapExtent.value,
  layers: undefined,
};

OlMap.propTypes = {
  type: PropTypes.oneOf([Constent.MAP_TYPE_ADMINISTRATIVE, Constent.MAP_TYPE_SATELLITE]),
  mapConfig: PropTypes.object,
  maxZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fitZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  center: PropTypes.arrayOf(PropTypes.number),
  extent: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  layers: PropTypes.array,
  onAllTileloadend: PropTypes.func,
};

export default OlMap;
