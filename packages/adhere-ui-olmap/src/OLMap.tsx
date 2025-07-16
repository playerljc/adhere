import classNames from 'classnames';
import { Fill, Stroke, Style, Text } from 'ol/style.js';
import PropTypes from 'prop-types';
import React, { ForwardedRef, createRef, forwardRef, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Resource from '@baifendian/adhere-util-resource';

import Constant from './Constant';
import GeoLayer from './GeoLayer';
import Util from './Util';
import type { GeoJSONStyle, MapInstance, OLMapProps, OLMapState } from './types';

const selectorPrefix = 'adhere-ui-ol-map';

const { useTheme } = ConfigProvider;

/**
 * OLMap组件
 * @class OlMap
 * @classdesc OpenLayers地图组件，提供地图显示和交互功能
 */
export class OlMap extends React.Component<OLMapProps, OLMapState> implements MapInstance {
  public mainGeoLayer: GeoLayer | undefined;
  public readonly el: React.RefObject<HTMLDivElement>;
  public map: any;

  static defaultProps: Partial<OLMapProps> = {
    type: 'administrative' as const,
    mapConfig: {},
    maxZoom: Resource.Dict.value.ResourceGisMapMaxZoom?.value,
    zoom: Resource.Dict.value.ResourceGisMapMaxZoom?.value,
    minZoom: Resource.Dict.value.ResourceGisMapMinZoom?.value,
    center: Resource.Dict.value.ResourceGisXinbeiquCenterPoint?.value,
    extent: Resource.Dict.value.ResourceGisXinbeiquMapExtent?.value,
    layers: undefined,
  };

  static propTypes = {
    type: PropTypes.oneOf([Constant.MAP_TYPE_ADMINISTRATIVE, Constant.MAP_TYPE_SATELLITE]),
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

  constructor(props: OLMapProps) {
    super(props);

    this.el = createRef<HTMLDivElement>();

    this.state = {
      isLoading: true,
      zoom: null,
    };
  }

  /**
   * 组件挂载后初始化地图
   */
  componentDidMount(): void {
    const {
      mapConfig,
      type,
      maxZoom,
      minZoom,
      zoom,
      layers,
      center,
      extent,
      fitZoom,
      onAllTileloadend,
    } = this.props;

    this.map = Util.createMap({
      config: {
        target: this.el.current!,
      },
      fitZoom: typeof fitZoom === 'string' ? parseFloat(fitZoom) : fitZoom,
      maxZoom: typeof maxZoom === 'string' ? parseFloat(maxZoom) : maxZoom,
      zoom: typeof zoom === 'string' ? parseFloat(zoom) : zoom,
      minZoom: typeof minZoom === 'string' ? parseFloat(minZoom) : minZoom,
      center,
      extent,
      layers,
      ...mapConfig,
    });

    this.setState({ zoom: this.map.getView().getZoom() });

    // 注册所有瓦片加载完成事件
    this.onAllTileloadend();

    // 添加主GeoJSON的Layer
    // this.addMainGeoJSONLayer();
  }

  /**
   * 添加主GeoJSON图层
   * @param params - 图层参数
   * @param params.geoJSONStyle - GeoJSON样式配置
   * @param params.geoJSONData - GeoJSON数据
   */
  addMainGeoJSONLayer({
    geoJSONStyle,
    geoJSONData,
  }: {
    geoJSONStyle: GeoJSONStyle;
    geoJSONData: any;
  }): void {
    const { stroke, fill, text } = geoJSONStyle;

    this.mainGeoLayer = this.addGeoLayer(geoJSONData, () => {
      return new Style({
        fill: new Fill({ ...fill }),
        stroke: new Stroke({ ...stroke }),
        text: new Text({
          ...text,
          fill: new Fill({ color: text?.color }),
          overflow: true,
        }),
      });
    });
  }

  /**
   * 添加GeoJSON图层
   * @param geojsonData - GeoJSON数据
   * @param getStyleConfig - 样式配置函数
   * @param zIndex - 图层层级
   * @returns GeoLayer实例
   */
  addGeoLayer(geojsonData: any, getStyleConfig: () => Style, zIndex: number = 0): GeoLayer {
    return Util.addGeoLayer(this.map, geojsonData, getStyleConfig, zIndex);
  }

  /**
   * 添加风场图层
   * @param data - 风场数据
   * @param config - 配置参数
   * @param zIndex - 图层层级
   * @returns 风场图层实例
   */
  addWindLayer(data: any, config: any, zIndex: number = 0): any {
    return Util.addWindLayer(this.map, data, config, zIndex);
  }

  /**
   * 添加数据图层
   * @param zIndex - 图层层级
   * @returns 向量图层和源对象
   */
  addDataLayer(zIndex: number): { vectorLayer: any; vectorSource: any } {
    return Util.addVectorLayer(this.map, zIndex);
  }

  /**
   * 给地图实例添加悬停监听器
   * @param layer - 图层
   * @param hit - 悬停回调
   * @param unHit - 离开回调
   */
  addHoverListener(layer: any, hit: (feature: any) => void, unHit: (feature?: any) => void): void {
    Util.addHoverListener(this.map, layer, hit, unHit);
  }

  /**
   * 添加缩放事件监听器
   * @param handler - 缩放回调函数
   */
  addZoomListener(handler: (zoom: number) => void): void {
    this.map.on('moveend', (evt: any) => {
      const zoom = this.map.getView().getZoom();

      if (zoom !== this.state.zoom) {
        handler(zoom);
      }

      this.setState({ zoom });
    });
  }

  /**
   * 给地图实例添加点击监听器
   * @param layer - 图层
   * @param hit - 点击回调
   * @param unHit - 未点击回调
   */
  addClickListener = (
    layer: any,
    hit: (feature: any) => void,
    unHit: (feature?: any) => void,
  ): void => {
    Util.addClickListener(this.map, layer, hit, unHit, this.setCursor);
  };

  /**
   * 添加一个Overlay对象
   * @param config - 覆盖物配置
   * @returns Overlay实例
   */
  addOverlay(config: any): any {
    return Util.addOverlay(this.map, config, null);
  }

  /**
   * 给Overlay对象配置状态
   * @param overlay - Overlay实例
   * @param state - 状态配置
   */
  setOverlayState(overlay: any, state: any): void {
    Util.setOverlayState(overlay, state);
  }

  /**
   * 设置鼠标样式
   * @param style - 鼠标样式
   */
  setCursor = (style: string): void => {
    if (this.map?.getTarget()) {
      this.map.getTarget().style.cursor = style;
    }
  };

  /**
   * 获取瓦片图层
   * @returns 瓦片图层
   */
  getTileLayer(): any {
    return this.map.getLayers().getArray()[0];
  }

  /**
   * 所有瓦片加载完成事件处理
   * @description 监听所有瓦片加载完成的时间
   */
  public onAllTileloadend(): void {
    const tileLayer = this.getTileLayer();
    const { onAllTileloadend } = this.props;

    if (!tileLayer || !onAllTileloadend) {
      return;
    }

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
        this.setState({ isLoading: false });
        onAllTileloadend();
      }
    });
  }

  /**
   * 清空所有图层，除了底图和主GeoJSON层
   */
  clear(): void {
    const layers = this.map.getLayers();

    for (let i = 1; i < layers.getLength(); i++) {
      this.map.removeLayer(layers.item(i));
    }
  }

  /**
   * 获取地图实例
   * @returns 地图实例
   */
  getMap(): any {
    return this.map;
  }

  render(): React.ReactElement {
    return <div ref={this.el} className={selectorPrefix} />;
  }
}

/**
 * OLMap主题高阶组件
 * @param props - 组件属性
 * @param ref - 转发引用
 * @returns 带主题的OLMap组件
 */
function OLMapThemeHOC(props: OLMapProps, ref: ForwardedRef<OlMap>): React.ReactElement {
  const { className, style, ...rest } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'OLMap',
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(`${selectorPrefix}-theme-wrapper`, className)}
      style={style ?? {}}
    >
      <OlMap {...rest} ref={ref} />
    </div>
  );
}

export default forwardRef<OlMap, OLMapProps>(OLMapThemeHOC);
