import Feature from 'ol/Feature.js';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay.js';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition.js';
import ScaleLine from 'ol/control/ScaleLine.js';
import Zoom from 'ol/control/Zoom.js';
import { createStringXY } from 'ol/coordinate';
import { boundingExtent, getBottomLeft, getTopRight } from 'ol/extent.js';
import { LineString, Point } from 'ol/geom';
import Circle from 'ol/geom/Circle';
import LinearRing from 'ol/geom/LinearRing';
import Polygon from 'ol/geom/Polygon';
import Draw, { createBox } from 'ol/interaction/Draw.js';
import Modify from 'ol/interaction/Modify';
import { Heatmap as HeatMapLayer, Vector as VectorLayer } from 'ol/layer.js';
import { fromLonLat, toLonLat, transform, transformExtent } from 'ol/proj.js';
import { Vector as VectorSource } from 'ol/source.js';
import { Circle as CircleStyle, Fill, Icon, RegularShape, Stroke, Style } from 'ol/style.js';
import Text from 'ol/style/Text';
import { v4 } from 'uuid';

import Resource from '@baifendian/adhere-util-resource';

import GeoLayer from './GeoLayer';
import * as TitleLayer from './TitleLayer';
import WindLayer from './WindLayer';
import type {
  AddArrowsSourceParams,
  BoxInteractionParams,
  CircleInteractionParams,
  CreateInteractionParams,
  CreateModifyInteractionParams,
  DrawCircleParams,
  DrawCirclePointParams,
  DrawImagePointParams,
  DrawLineParams,
  DrawPolygonParams,
  DrawRegularShapePointParams,
  LinStringInteractionParams,
  PolygonInteractionParams,
  SetMapCenterAnimateParams,
} from './types';

const EARTH_RADIUS: number = Resource.Dict.value.ResourceGisEarthRadius?.value ?? 6371000;

const DEFAULT_COLOR = '#1788F3';

/**
 * 获取最小缩放级别
 * @param target 地图容器 HTMLElement
 */
function getMinZoom(target: HTMLElement): number {
  const width = target.clientWidth;
  return Math.ceil(Math.LOG2E * Math.log(width / 256));
}

/**
 * 坐标转换：3857 -> 4326
 * @param point 坐标点 [number, number]
 */
function transformLonLat(point: number[]): number[] {
  return transform(
    point,
    Resource.Dict.value.ResourceGisEpsg3857?.value,
    Resource.Dict.value.ResourceGisEpsg4326?.value,
  );
}

// 类型定义
export interface CreateMapConfig {
  config: Record<string, any> & { target: HTMLElement };
  fitZoom?: number;
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  center?: number[];
  extent?: number[][];
  layers?: any[];
}

/**
 * 创建地图
 * @param Config 地图配置
 */
function createMap(Config: CreateMapConfig): Map {
  const {
    config,
    fitZoom,
    zoom = getMinZoom(config.target) || 3,
    minZoom = getMinZoom(config.target) || 3,
    maxZoom = typeof Resource.Dict.value.ResourceGisMapMaxZoom?.value === 'number'
      ? Resource.Dict.value.ResourceGisMapMaxZoom.value
      : 18,
    center = Array.isArray(Resource.Dict.value.ResourceGisXinbeiquCenterPoint?.value)
      ? Resource.Dict.value.ResourceGisXinbeiquCenterPoint?.value
      : [0, 0],
    extent = Array.isArray(Resource.Dict.value.ResourceGisXinbeiquMapExtent?.value)
      ? Resource.Dict.value.ResourceGisXinbeiquMapExtent?.value
      : [
          [0, 0],
          [0, 0],
        ],
    layers = [TitleLayer.getOSMTileLayer()],
  } = Config;

  const map = new Map({
    controls: defaultControls({
      attributionOptions: {
        collapsible: false,
      },
    }).extend([
      new Zoom(),
      new ScaleLine(),
      new MousePosition({
        coordinateFormat: createStringXY(5),
        projection: Resource.Dict.value.ResourceGisEpsg4326?.value,
      }),
    ]),
    pixelRatio: 1,
    view: new View({
      center: fromLonLat(center),
      minZoom,
      maxZoom,
      zoom,
      extent: transformExtent(
        boundingExtent(extent),
        Resource.Dict.value.ResourceGisEpsg4326?.value,
        Resource.Dict.value.ResourceGisEpsg3857?.value,
      ),
    }),
    layers: layers,
    ...config,
  });

  setTimeout(() => {
    let zoomLevel: number = map.getView().getZoom() ?? 3;
    if (fitZoom) {
      zoomLevel = fitZoom;
    } else {
      const mapExtentTransform = [...fromLonLat(extent[0]), ...fromLonLat(extent[1])];
      const resolution = map.getView().getResolutionForExtent(mapExtentTransform);
      const z = map.getView().getZoomForResolution(resolution);
      if (typeof z === 'number') zoomLevel = z;
    }
    map.getView().setZoom(zoomLevel);
  }, 100);

  return map;
}

export default {
  SHOW_BASE_STATION_MIN_ZOOM: 5,
  getMinZoom,
  transformLonLat,
  createMap,
  /**
   * 设置 Overlay 状态
   */
  setOverlayState: (overlay: Overlay, point: number[]): void => {
    overlay.setPosition(point);
  },
  /**
   * 添加点击监听器
   */
  addClickListener: (function () {
    let onClick: ((evt: any) => void) | undefined;
    let onPointerMove: ((evt: any) => void) | undefined;
    return function (
      mapInstance: Map,
      listeningLayer: VectorLayer<any>,
      hitCallback: (feature: Feature | any) => void = () => {},
      unHitCallback: (feature: Feature | any) => void = () => {},
      setCursor: (cursor: string) => void,
    ): void {
      const displayFeatureInfo = (pixel: number[]): void => {
        mapInstance.forEachFeatureAtPixel(pixel, (feature, layer) => {
          if (layer === listeningLayer) {
            hitCallback(feature);
          } else {
            unHitCallback(feature);
          }
          return true;
        });
      };
      if (onClick) {
        mapInstance.un('click', onClick);
      }
      if (onPointerMove) {
        mapInstance.un('pointermove', onPointerMove);
      }
      onClick = (evt: any): void => {
        if (evt.dragging) return;
        displayFeatureInfo(evt.pixel);
      };
      onPointerMove = (evt: any): void => {
        if (evt.dragging) return;
        mapInstance.forEachFeatureAtPixel(evt.pixel, (_, layer) => {
          setCursor(layer === listeningLayer ? 'pointer' : '');
          return true;
        });
      };
      mapInstance.on('click', onClick);
      mapInstance.on('pointermove', onPointerMove);
    };
  })(),
  /**
   * 添加悬停监听器
   */
  addHoverListener: (function () {
    let onPointermove: ((evt: any) => void) | undefined;
    return function (
      mapInstance: Map,
      listeningLayer: VectorLayer<any>,
      hitCallback: (feature: Feature | any) => void,
      unHitCallback: (feature: Feature | any) => void,
    ): void {
      const displayFeatureInfo = (pixel: number[]): void => {
        let inPixel = false;
        mapInstance.forEachFeatureAtPixel(pixel, (feature, layer) => {
          inPixel = true;
          const target = mapInstance.getTarget() as HTMLElement;
          if (layer === listeningLayer) {
            if (target && target.style) target.style.cursor = 'pointer';
            hitCallback(feature);
          } else {
            if (target && target.style) target.style.cursor = '';
            unHitCallback(feature);
          }
          return true;
        });
        if (!inPixel) {
          unHitCallback(undefined as any);
        }
      };
      if (onPointermove) {
        mapInstance.un('pointermove', onPointermove);
      }
      onPointermove = (evt: any): void => {
        if (evt.dragging) return;
        const pixel = mapInstance.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
      };
      mapInstance.on('pointermove', onPointermove);
    };
  })(),
  /**
   * 添加 GeoJSON 图层
   */
  addGeoLayer: (
    mapInstance: Map,
    geoJsonData: any,
    getStyleConfig: any = () => {},
    zIndex = 0,
  ): GeoLayer => {
    const geoLayer = new GeoLayer(geoJsonData, getStyleConfig, zIndex);
    mapInstance.addLayer(geoLayer);
    return geoLayer;
  },
  /**
   * 添加风场图层
   */
  addWindLayer: (mapInstance: Map, data: any, config: any, zIndex = 0): WindLayer => {
    const windLayer = new WindLayer(data, config);
    mapInstance.addLayer(windLayer);
    return windLayer;
  },
  /**
   * 添加向量图层
   */
  addVectorLayer(
    map: Map,
    zIndex: number,
  ): { vectorLayer: VectorLayer<any>; vectorSource: VectorSource } {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      zIndex,
    });
    map.addLayer(vectorLayer);
    return {
      vectorLayer,
      vectorSource,
    };
  },
  /**
   * 创建热力图层
   */
  createHeatMapLayer(layoutConfig: any): { layer: HeatMapLayer; vectorSource: VectorSource } {
    const vectorSource = new VectorSource();
    const layer = new HeatMapLayer({
      source: vectorSource,
      gradient: ['#00005c', '#020288', '#0202c0', '#0ff', '#0f0', '#ff0', '#f00'],
      weight: () => 1,
      shadow: 500,
      blur: 15,
      radius: 20,
      ...layoutConfig,
    });
    return {
      layer,
      vectorSource,
    };
  },
  /**
   * 创建一个圆形 Feature
   */
  drawCircle({
    center,
    radius,
    color = 'rgba(23,136,243,.2)',
    strokeColor = DEFAULT_COLOR,
    strokeWidth = 2,
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex?.value ?? 1,
    id = v4(),
    properties = {},
  }: DrawCircleParams): Feature {
    const f = new Feature({
      zIndex,
      geometry: new Circle(center, radius),
      ...properties,
    });
    f.setId(id);
    f.setStyle(
      new Style({
        fill: new Fill({ color }),
        stroke: new Stroke({ width: strokeWidth, color: strokeColor }),
      }),
    );
    return f;
  },
  /**
   * 创建一个多边形 Feature
   */
  drawPolygon({
    points,
    color = 'rgba(23,136,243,.2)',
    strokeColor = DEFAULT_COLOR,
    strokeWidth = 2,
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex?.value ?? 1,
    id = v4(),
    properties = {},
  }: DrawPolygonParams): Feature {
    const f = new Feature({
      zIndex,
      geometry: new Polygon(points),
      ...properties,
    });
    f.setId(id);
    f.setStyle(
      new Style({
        fill: new Fill({ color }),
        stroke: new Stroke({ width: strokeWidth, color: strokeColor }),
      }),
    );
    return f;
  },
  /**
   * 创建一条线 Feature
   */
  drawLine({
    points,
    width,
    color,
    lineCap = 'round',
    lineJoin = 'round',
    lineDash,
  }: DrawLineParams): Feature {
    const f = new Feature({
      geometry: new LineString(points),
    });
    f.setStyle(
      new Style({
        stroke: new Stroke({
          width,
          color,
          lineCap,
          lineJoin,
          lineDash,
        }),
      }),
    );
    return f;
  },
  /**
   * 创建一个圆的点 Feature
   */
  drawCirclePoint({
    id,
    pos,
    fillOpt = { color: 'rgba(23,136,243,.2)' },
    strokeOpt = { width: 2, color: DEFAULT_COLOR },
    radius = 10,
    textOpt = {},
    zIndex = 1,
    text = '',
    properties = {},
  }: DrawCirclePointParams): Feature {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex?.value ?? 1,
      geometry: new Point(pos),
      ...properties,
    });
    point.setId(id);
    point.setStyle(
      new Style({
        image: new CircleStyle({
          fill: new Fill(fillOpt),
          stroke: new Stroke(strokeOpt),
          radius,
        }),
        text: new Text({
          text,
          textAlign: 'center',
          fill: new Fill({ color: '#fff' }),
          ...textOpt,
        }),
        zIndex,
      }),
    );
    return point;
  },
  /**
   * 创建一个多边形的点 Feature
   */
  drawRegularShapePoint({
    id,
    pos,
    points,
    fillOpt = { color: 'rgba(23,136,243,.2)' },
    strokeOpt = { width: 2, color: DEFAULT_COLOR },
    text = '',
    textOpt = {},
    zIndex = 1,
    properties = {},
    ...rest
  }: DrawRegularShapePointParams): Feature {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex?.value ?? 1,
      geometry: new Point(pos),
      ...properties,
    });
    point.setId(id);
    // 移除rest中的points，防止被覆盖
    const { points: _points, ...restOthers } = rest;
    point.setStyle(
      new Style({
        image: new RegularShape({
          points,
          fill: new Fill(fillOpt),
          stroke: new Stroke(strokeOpt),
          ...restOthers,
        }),
        text: new Text({
          text,
          textAlign: 'center',
          fill: new Fill({ color: '#fff' }),
          ...textOpt,
        }),
        zIndex,
      }),
    );
    return point;
  },
  /**
   * 创建一个图片的点 Feature
   */
  drawImagePoint({
    id,
    pos,
    zIndex = 1,
    src,
    color,
    opacity,
    scale,
    anchor,
    rotation = 0,
    offset = [0, 0],
    offsetOrigin,
    size,
    text = '',
    textOpt = {},
    properties = {},
  }: DrawImagePointParams): Feature {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex?.value ?? 1,
      geometry: new Point(pos),
      ...properties,
    });
    point.setId(id);
    point.setStyle(
      new Style({
        image: new Icon({
          color,
          src,
          anchor,
          opacity,
          scale,
          rotation,
          offset,
          offsetOrigin,
          size,
        }),
        fill: new Fill({ color: '#fff' }),
        text: new Text({
          text,
          textAlign: 'center',
          fill: new Fill({ color: '#fff' }),
          ...textOpt,
        }),
        zIndex,
      }),
    );
    return point;
  },
  /**
   * 创建扇形多边形
   */
  createRegularPolygonCurve(
    origin: number[],
    radius: number,
    sides: number,
    r: number,
    angel: number,
  ): Polygon {
    const rotation = 360 - r;
    let angle = Math.PI * (1 / sides - 1 / 2);
    if (rotation) {
      angle += (rotation / 180) * Math.PI;
    }
    let rotatedAngle: number;
    let x: number;
    let y: number;
    const points: number[][] = [];
    for (let i = 0; i < sides; ++i) {
      const an = i * ((360 - rotation) / 360);
      rotatedAngle = angle + (an * 2 * Math.PI) / sides;
      x = origin[0] + radius * Math.cos(rotatedAngle);
      y = origin[1] + radius * Math.sin(rotatedAngle);
      points.push([x, y]);
    }
    if (rotation !== 0) {
      points.push(origin);
    }
    const ring = new LinearRing(points);
    ring.rotate(Math.PI - ((angel - r / 2) / 180) * Math.PI, origin);
    const poy = new Polygon([points]);
    (poy as any).A = (ring as any).A;
    return poy;
  },
  /**
   * 移动地图到指定位置(动画)
   */
  setMapCenterAnimate({ map, point, duration = 600 }: SetMapCenterAnimateParams): void {
    map.getView().animate({
      center: point,
      duration,
    });
  },
  /**
   * 创建交互
   */
  createInteraction({ map, config }: CreateInteractionParams): Draw {
    const { onDrawStart } = config;
    const drawPolygonInteraction = new Draw(config);
    drawPolygonInteraction.on('drawstart', (e) => {
      if (onDrawStart) {
        onDrawStart(e);
      }
    });
    map.addInteraction(drawPolygonInteraction);
    return drawPolygonInteraction;
  },
  /**
   * 框多边形交互
   */
  polygonInteraction({
    map,
    freehand = true,
    vectorSource,
    onDrawEnd,
    ...rest
  }: PolygonInteractionParams): Draw {
    const drawPolygonInteraction = this.createInteraction({
      map,
      config: {
        source: vectorSource,
        type: 'Polygon',
        freehand,
        ...rest,
      },
    });
    drawPolygonInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const lonLats: number[][] = [];
      const coordinates = geometry.getCoordinates()[0].map((v: number[]) => {
        lonLats.push(transformLonLat(v));
        return v;
      });
      const centerP = map.getView().getCenter();
      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          lonLats,
          centerP,
          transformCenterP: centerP ? transformLonLat(centerP) : undefined,
        });
      }
    });
    return drawPolygonInteraction;
  },
  /**
   * 框圆形交互
   */
  circleInteraction({ map, vectorSource, onDrawEnd, ...rest }: CircleInteractionParams): Draw {
    const drawCircleInteraction = this.createInteraction({
      map,
      config: {
        source: vectorSource,
        type: 'Circle',
        freehand: true,
        ...rest,
      },
    });
    drawCircleInteraction.on('drawend', (e) => {
      const geometry = e.feature.getGeometry() as any;
      const radius = geometry.getRadius();
      const center = geometry.getCenter();
      e.feature.setId(v4());
      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          radius,
          center,
          transformCenter: transformLonLat(center),
        });
      }
    });
    return drawCircleInteraction;
  },
  /**
   * 框线框交互
   */
  boxInteraction({ map, vectorSource, onDrawEnd, ...rest }: BoxInteractionParams): Draw {
    const drawBoxInteraction = this.createInteraction({
      map,
      config: {
        source: vectorSource,
        type: 'Circle',
        freehand: true,
        geometryFunction: createBox(),
        ...rest,
      },
    });
    drawBoxInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const coordinates = geometry.getCoordinates()[0].map((v: number[]) => v);
      const centerP = map.getView().getCenter();
      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          centerP,
        });
      }
    });
    return drawBoxInteraction;
  },
  /**
   * 线路交互
   */
  linStringInteraction({
    map,
    freehand = true,
    vectorSource,
    onDrawEnd,
    ...rest
  }: LinStringInteractionParams): Draw {
    const drawPolygonInteraction = this.createInteraction({
      map,
      config: {
        source: vectorSource,
        type: 'LineString',
        freehand,
        ...rest,
      },
    });
    drawPolygonInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const lonLats: number[][] = [];
      const coordinates = geometry.getCoordinates().map((v: number[]) => {
        lonLats.push(transformLonLat(v));
        return v;
      });
      const centerP = map.getView().getCenter();
      const mileage = geometry.getLength().toFixed(3);
      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          lonLats,
          centerP,
          mileage,
          transformCenterP: centerP ? transformLonLat(centerP) : undefined,
        });
      }
    });
    return drawPolygonInteraction;
  },
  /**
   * 创建修改交互
   */
  createModifyInteraction({
    map,
    vectorSource,
    onModifyEnd,
  }: CreateModifyInteractionParams): Modify {
    const modifyInteraction = new Modify({
      source: vectorSource,
    });
    modifyInteraction.on('modifyend', (e) => {
      const features = e.features.getArray();
      const geometry = features[features.length - 1].getGeometry();
      onModifyEnd({
        e,
        geometry,
      });
    });
    map.addInteraction(modifyInteraction);
    return modifyInteraction;
  },
  /**
   * 删除一个 Feature
   */
  removeFeature(vectorSource: VectorSource, feature: Feature): void {
    vectorSource.removeFeature(feature);
  },
  /**
   * 删除所有 Feature
   */
  removeAllFeature(vectorSource: VectorSource): void {
    vectorSource.clear();
  },
  /**
   * 删除所有 Overlay
   */
  removeAllOverlay(map: Map): void {
    map.getOverlays().clear();
  },
  /**
   * 移除交互
   */
  removeInteraction(map: Map, interaction: any): void {
    map.removeInteraction(interaction);
  },
  /**
   * 移除所有交互
   */
  removeInteractionAll(map: Map): void {
    map.getInteractions().clear();
  },
  /**
   * 地图自适应
   */
  mapFit(extent: number[] = [], option: any = {}, map: Map): void {
    if (extent.length === 0) return;
    map.getView().fit(extent, {
      padding: [40, 40, 40, 40],
      nearest: true,
      duration: 200,
      ...option,
    });
  },
  /**
   * 为一系列点创建箭头 Feature 数组
   */
  addArrowsSource({ points, color, icon, anchor, offset }: AddArrowsSourceParams): Feature[] {
    const arrows: Feature[] = [];
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];
      if (!Array.isArray(start) || !Array.isArray(end) || start.length < 2 || end.length < 2)
        continue;
      const dx = Number(end[0]) - Number(start[0]);
      const dy = Number(end[1]) - Number(start[1]);
      const rotation = Math.atan2(dy, dx);
      const arrow = new Feature({
        geometry: new Point(end),
      });
      arrow.setStyle(
        new Style({
          image: new Icon({
            color,
            src: icon,
            anchor: anchor ?? [0.5, 0.5],
            rotateWithView: true,
            offset: offset ?? [0, 0],
            rotation: -rotation,
          }),
        }),
      );
      arrows.push(arrow);
    }
    return arrows;
  },
  /**
   * 为一系列点创建箭头 Overlay
   */
  addArrowsOverlay(map: Map, parentDom: HTMLElement, color: string, points: number[][]): void {
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];
      if (!Array.isArray(start) || !Array.isArray(end) || start.length < 2 || end.length < 2)
        continue;
      const dx = Number(end[0]) - Number(start[0]);
      const dy = Number(end[1]) - Number(start[1]);
      const rotation = Math.atan2(dy, dx);
      const degrees = rotation * (180 / Math.PI);
      const div = document.createElement('div');
      div.className = 'fa fa-caret-right overleayArrowPoint';
      div.style.transform = `rotate(${-degrees}deg)`;
      div.style.color = color;
      parentDom.appendChild(div);
      this.addOverlay(map, end, div);
    }
  },
  /**
   * 添加覆盖物
   */
  addOverlay: (map: Map, config: any, div: HTMLDivElement | null): Overlay => {
    const overlay = new Overlay(config as any);
    map.addOverlay(overlay);
    return overlay;
  },

  /**
   * rgb颜色随机
   */
  rgb(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `(${r},${g},${b})`;
  },

  /**
   * 十六进制颜色随机
   */
  color16(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  },
  /**
   * 角度转弧度
   */
  getRad(d: number): number {
    return (d * Math.PI) / 180.0;
  },
  /**
   * 经度归一化
   */
  wrapLon(value: number): number {
    const worlds = Math.floor((value + 180) / 360);
    return value - worlds * 360;
  },
  /**
   * 获取地图的矩形范围
   */
  getMapExtent(map: Map): Array<{ lon: number; lat: number }> | false {
    if (!map) return false;
    const extent = map.getView().calculateExtent(map.getSize());
    const bottomLeft = toLonLat(getBottomLeft(extent));
    const topRight = toLonLat(getTopRight(extent));
    const top = topRight[1];
    const right = this.wrapLon(topRight[0]);
    const left = this.wrapLon(bottomLeft[0]);
    const bottom = bottomLeft[1];
    return [
      { lon: left, lat: top },
      { lon: right, lat: top },
      { lon: right, lat: bottom },
      { lon: left, lat: bottom },
      { lon: left, lat: top },
    ];
  },
  /**
   * 获取范围内的 Feature
   */
  getFeaturesInExtent(map: Map, feature: Feature): any[] {
    const geometry = feature.getGeometry();
    if (!geometry) return [];
    const extent = geometry.getExtent();
    const layer = map.getLayers().getArray()[1];
    if (!layer || typeof (layer as any).getSource !== 'function') return [];
    const source = (layer as any).getSource();
    if (!source || typeof source.getFeaturesInExtent !== 'function') return [];
    return source.getFeaturesInExtent(extent);
  },
  /**
   * 获取地图的图层数量
   */
  getLayersCount(map: Map): number {
    return map.getLayers().getLength();
  },
  /**
   * 获取线条颜色
   */
  getLineColor(index: number): string {
    const palette = [
      'red',
      'green',
      'blue',
      'yellow',
      'gray',
      '#0000cc',
      '#99ffff',
      '#000000',
      '#003333',
      '#ff6600',
    ];
    if (index >= 0 && index <= 9) {
      return palette[index];
    } else {
      return this.color16();
    }
  },
  downLoadMap(map: Map): void {
    map.once('postcompose', function (event: any): void {
      if (!event.context) return;
      const canvas = event.context.canvas as HTMLCanvasElement;
      if (!canvas || typeof canvas.toDataURL !== 'function') return;
      const dataURL = canvas.toDataURL();
      const a = document.createElement('a');
      const e = new MouseEvent('click');
      a.download = 'map';
      a.href = dataURL;
      a.dispatchEvent(e);
    });
    map.renderSync();

    // const exportOptions = {
    //   filter: function(element) {
    //     return element.className ? element.className.indexOf('bfd-list-table-wrapselect') === -1 : true;
    //   }
    // };
    //
    // map.once('postcompose', () => {
    //   toPng(map.getTargetElement(), exportOptions)
    //     .then((dataURL) => {
    //       const a = document.createElement('a');
    //       a.href = dataURL;
    //       document.body.appendChild(a);
    //       a.click();
    //       a.parentElement.removeChild(a);
    //     });
    // });
    // map.renderSync();
  },
  /**
   * 根据经纬度和半径获取投影平面半径
   */
  getRadius(center: number[], radius: number): number {
    const R = 6371000;
    const center4326 = center;
    const center3857 = fromLonLat(center4326);
    // 计算出经度方向上距离圆心radius米的点的坐标
    const lat1 = center4326[1] + (radius / R) * (180 / Math.PI);
    const top4236 = [center4326[0], lat1];
    const top3857 = fromLonLat(top4236);
    // 计算出纬度方向上距离圆心radius米的点的坐标
    const lon1 =
      center4326[0] + (radius / (R * Math.cos((Math.PI * center4326[1]) / 180))) * (180 / Math.PI);
    const right4236 = [lon1, center4326[1]];
    const right3857 = fromLonLat(right4236);
    // 计算经度方向上的点和圆心的平面距离
    const dx = top3857[0] - center3857[0];
    const dy = top3857[1] - center3857[1];
    const verticalDistance = Math.sqrt(dx * dx + dy * dy);
    // 计算纬度方向上的点和圆心的平面距离
    const dxR = right3857[0] - center3857[0];
    const dyR = right3857[1] - center3857[1];
    const horizontalDistance = Math.sqrt(dxR * dxR + dyR * dyR);
    // 两个距离选择最大的作为圆的半径
    return Math.max(verticalDistance, horizontalDistance);
  },
  /**
   * 获取坐标范围
   */
  getExtentByCoordinates(coordinates: number[][]): number[] {
    if (coordinates.length === 0) {
      return [];
    }
    if (coordinates.length === 1) {
      return ([] as number[]).concat(...coordinates[0], ...coordinates[0]);
    }
    const lons: number[] = [];
    const lats: number[] = [];
    for (let i = 0; i < coordinates.length; i++) {
      const point = coordinates[i];
      lons.push(point[0]);
      lats.push(point[1]);
    }
    lons.sort((t1, t2) => t1 - t2);
    lats.sort((t1, t2) => t1 - t2);
    return [lons[0], lats[0], lons[lons.length - 1], lats[lats.length - 1]];
  },
  /**
   * 获取向量源中的矩形数据
   */
  getExtentByVectorSource(vectorSource: VectorSource, type = 'Point'): number[] {
    const coordinates = this.getVectorSourceCoordinates(vectorSource, type);
    return this.getExtentByCoordinates(coordinates);
  },
  /**
   * 获取向量层中的所有点
   */
  getVectorSourceCoordinates(vectorSource: VectorSource, type = 'Point'): number[][] {
    let points: number[][] = [];
    vectorSource
      .getFeatures()
      .filter((f) => {
        const geometry = f.getGeometry();
        return geometry && geometry.getType() === type;
      })
      .map((f) => {
        const geometry = f.getGeometry();
        if (!geometry) return;
        if (type === 'Circle') {
          const extent = geometry.getExtent();
          points.push([extent[0], extent[1]]);
          points.push([extent[2], extent[3]]);
        } else if (type === 'Point') {
          if ('getCoordinates' in geometry) {
            const coordinates = (geometry as any).getCoordinates();
            points.push(coordinates);
          }
        } else {
          if ('getCoordinates' in geometry) {
            const coordinates = (geometry as any).getCoordinates();
            points = points.concat(coordinates);
          }
        }
      });
    return points;
  },
  /**
   * 获取向量源中所有 Point 的中心点
   */
  getCenterByCoordinates(
    vectorSource: VectorSource,
    type = 'Point',
  ): { centerLon: number; centerLat: number } {
    let points: number[][] = [];
    vectorSource
      .getFeatures()
      .filter((f) => {
        const geometry = f.getGeometry();
        return geometry && geometry.getType() === type;
      })
      .map((f) => {
        const geometry = f.getGeometry();
        if (!geometry) return;
        if (type === 'Circle') {
          const extent = geometry.getExtent();
          points.push([extent[0], extent[1]]);
          points.push([extent[2], extent[3]]);
        } else if (type === 'Point') {
          if ('getCoordinates' in geometry) {
            const coordinates = (geometry as any).getCoordinates();
            points.push(coordinates);
          }
        } else {
          if ('getCoordinates' in geometry) {
            const coordinates = (geometry as any).getCoordinates();
            points = points.concat(coordinates);
          }
        }
      });
    return this.getCenterByPoints(points);
  },
  /**
   * 获取一系列点中的中心点
   */
  getCenterByPoints(points: number[][]): { centerLon: number; centerLat: number } {
    const lons: number[] = [];
    const lats: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const lonlat = transform(
        points[i] as number[],
        Resource.Dict.value.ResourceGisEpsg3857?.value,
        Resource.Dict.value.ResourceGisEpsg4326?.value,
      );
      lons.push(lonlat[0]);
      lats.push(lonlat[1]);
    }
    return {
      centerLon: Math.min(...lons) + (Math.max(...lons) - Math.min(...lons)) / 2,
      centerLat: Math.min(...lats) + (Math.max(...lats) - Math.min(...lats)) / 2,
    };
  },
  /**
   * 获取一系列点的矩形范围
   */
  getPointsExtent(points: number[][]): { leftTop: number[]; rightBottom: number[] } {
    const lons: number[] = [];
    const lats: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const lonlat = transform(
        points[i] as number[],
        Resource.Dict.value.ResourceGisEpsg4326?.value,
        Resource.Dict.value.ResourceGisEpsg3857?.value,
      );
      lons.push(lonlat[0]);
      lats.push(lonlat[1]);
    }
    const leftTop = [Math.min(...lons), Math.min(...lats)];
    const rightBottom = [Math.max(...lons), Math.max(...lats)];
    return {
      leftTop,
      rightBottom,
    };
  },
  /**
   * 计算连个经纬度之间的距离(m)
   */
  getFlattenDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const f = this.getRad((lat1 + lat2) / 2);
    const g = this.getRad((lat1 - lat2) / 2);
    const l = this.getRad((lng1 - lng2) / 2);
    const a = EARTH_RADIUS;
    const fl = 1 / 298.257;
    let sg = Math.sin(g);
    let sl = Math.sin(l);
    let sf = Math.sin(f);
    sg *= sg;
    sl *= sl;
    sf *= sf;
    const s = sg * (1 - sl) + (1 - sf) * sl;
    const c = (1 - sg) * (1 - sl) + sf * sl;
    const w = Math.atan(Math.sqrt(s / c));
    const r = Math.sqrt(s * c) / w;
    const d = 2 * w * a;
    const h1 = (3 * r - 1) / 2 / c;
    const h2 = (3 * r + 1) / 2 / s;
    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
  },
};
