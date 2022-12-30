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

import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
import WindLayer from './windlayer';

const EARTH_RADIUS = Resource.Dict.value.ResourceGisEarthRadius.value; // 单位M

const DEFAULT_COLOE = '#1788F3';

/**
 * getMinZoom
 * @param target
 */
function getMinZoom(target) {
  const width = target.clientWidth;
  return Math.ceil(Math.LOG2E * Math.log(width / 256));
}

/**
 * transformLonLat
 * @param point
 */
function transformLonLat(point?: Array<number>) {
  return transform(
    <any>point,
    Resource.Dict.value.ResourceGisEpsg3857.value,
    Resource.Dict.value.ResourceGisEpsg4326.value,
  );
}

export default {
  SHOWBASESTATION_MINZOOM: 5,
  /**
   * createMap - 创建地图
   * @param Config
   */
  createMap(Config) {
    const {
      config,
      fitZoom,
      zoom = getMinZoom(config.target) || 3,
      minZoom = getMinZoom(config.target) || 3,
      maxZoom = Resource.Dict.value.ResourceGisMapMaxZoom.value,
      center = Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value,
      extent = Resource.Dict.value.ResourceGisXinbeiquMapExtent.value,
      layers = [TitleLayer.getOSMTileLayer()],
    } = Config;

    // console.log(layers);
    // @ts-ignore
    const map = new Map({
      ...config,
      controls: defaultControls({
        attributionOptions: {
          collapsible: false,
        },
      }).extend([
        new Zoom(),
        new ScaleLine(),
        new MousePosition({
          coordinateFormat: createStringXY(5),
          projection: Resource.Dict.value.ResourceGisEpsg4326.value,
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
          Resource.Dict.value.ResourceGisEpsg4326.value,
          Resource.Dict.value.ResourceGisEpsg3857.value,
        ),
        // zoom: 13,
        // projection : 'EPSG:3857',
        // projection: 'EPSG:4326',
      }),
      layers: layers,
    });

    setTimeout(() => {
      let zoom;

      if (fitZoom) {
        zoom = fitZoom;
      } else {
        // @ts-ignore
        const mapExtentTransform = [].concat(fromLonLat(extent[0])).concat(fromLonLat(extent[1]));
        const resolution = map.getView().getResolutionForExtent(mapExtentTransform);
        zoom = map.getView().getZoomForResolution(resolution);
        // zoom = 11.5;
      }

      map.getView().setZoom(zoom);
    }, 100);

    return map;
  },

  /**
   * setOverlayState - 给overlay赋予状态
   * @param overlay
   * @param point
   */
  setOverlayState: (overlay, point) => {
    overlay.setPosition(/* fromLonLat(point) */ point);
  },

  /**
   * addClickListener
   * 给地图实例添加 click 监听者
   * 此方法仅监听了单击
   * @param {Object} mapInstance map实例对象
   * @param {Object} listeningLayer 监听的layer
   * @param {Function=} hitCallback 可选 选中的回调
   * @param {Function=} unHitCallback 可选 未选中的回调
   * @param {Function} setCursor 设置鼠标滑过当前图层的鼠标样式
   */
  addClickListener: (function () {
    let onClick;
    let onPointerMove;

    return function (
      mapInstance,
      listeningLayer,
      hitCallback = (feature: any) => {},
      unHitCallback = (feature: any) => {},
      setCursor,
    ) {
      const displayFeatureInfo = (pixel) => {
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

      onClick = (evt) => {
        if (evt.dragging) return;
        displayFeatureInfo(evt.pixel);
      };

      onPointerMove = (evt) => {
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
   * addHoverListener - 给地图实例上的指定layer添加hover监听者
   * @param {Object} mapInstance map实例对象
   * @param {Object} listeningLayer 监听的layer
   * @param {Function=} hitCallback 可选 选中的回调
   * @param {Function=} unHitCallback 可选 未选中的回调
   */
  addHoverListener: (function () {
    let onPointermove;

    return function (mapInstance, listeningLayer, hitCallback, unHitCallback) {
      const displayFeatureInfo = (pixel) => {
        // 是否在像素中
        let inPixel = false;

        mapInstance.forEachFeatureAtPixel(pixel, (feature, layer) => {
          inPixel = true;
          if (layer === listeningLayer) {
            mapInstance.getTarget().style.cursor = 'pointer';
            hitCallback(feature);
          } else {
            mapInstance.getTarget().style.cursor = '';
            unHitCallback(feature);
          }
          return true;
        });

        if (!inPixel) {
          unHitCallback();
        }
      };

      if (onPointermove) {
        mapInstance.un('pointermove', onPointermove);
      }

      onPointermove = (evt) => {
        if (evt.dragging) return;
        const pixel = mapInstance.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
      };

      mapInstance.on('pointermove', onPointermove);
    };
  })(),

  /**
   * addGeoLayer - 给地图实例添加一个geojson格式的 VectorLayer
   * @param {Object} mapInstance map实例对象
   * @param geojsonData
   * @param {Function=} getStyleConfig 获取该geoJSON的样式
   * @param {number=} zIndex 该 Layer 的层级 可选, 默认为0
   * @returns geoLayer 此次生成的layer
   */
  addGeoLayer: (mapInstance, geojsonData, getStyleConfig = () => {}, zIndex = 0) => {
    const geoLayer = new GeoLayer(geojsonData, getStyleConfig, zIndex);
    mapInstance.addLayer(geoLayer);
    return geoLayer;
  },

  /**
   * addWindLayer - 添加风场层
   * @param mapInstance
   * @param data
   * @param config
   * @param zIndex
   * @return WindLayer
   */
  addWindLayer: (mapInstance, data, config, zIndex = 0) => {
    const windLayer = new WindLayer(data, config);
    mapInstance.addLayer(windLayer);
    return windLayer;
  },

  /**
   * addVectorLayer - 添加一个向量层
   * @param map
   * @param zIndex
   */
  addVectorLayer(map, zIndex) {
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
   * createHeatMapLayer - 创建一个热力层
   * @param layoutConfig
   */
  createHeatMapLayer(layoutConfig) {
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
   * drawCircle - 创建一个圆形
   * @param center
   * @param radius
   * @param color
   * @param strokeColor
   * @param strokeWidth
   * @param zIndex
   * @param id
   * @param propertys
   */
  drawCircle({
    center,
    radius,
    color = 'rgba(23,136,243,.2)',
    strokeColor = DEFAULT_COLOE,
    strokeWidth = 2,
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value,
    id = v4(),
    propertys = {},
  }) {
    const f = new Feature({
      zIndex,
      geometry: new Circle(center, radius),
      ...propertys,
    });

    f.setId(id);

    f.setStyle(
      new Style({
        fill: new Fill({
          color,
        }),
        stroke: new Stroke({
          width: strokeWidth,
          color: strokeColor,
        }),
      }),
    );

    return f;
  },
  /**
   * drawPolygon - 创建一个多边形
   * @param points
   * @param color
   * @param strokeColor
   * @param strokeWidth
   * @param zIndex
   * @param id
   * @param propertys
   */
  drawPolygon({
    points,
    color = 'rgba(23,136,243,.2)',
    strokeColor = DEFAULT_COLOE,
    strokeWidth = 2,
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value,
    id = v4(),
    propertys = {},
  }) {
    const f = new Feature({
      zIndex,
      geometry: new Polygon(points),
      ...propertys,
    });

    f.setId(id);

    f.setStyle(
      new Style({
        fill: new Fill({
          color,
        }),
        stroke: new Stroke({
          width: strokeWidth,
          color: strokeColor,
        }),
      }),
    );

    return f;
  },
  /**
   * drawCirclePoint - 创建一个圆的点
   * @param id
   * @param pos
   * @param fillOpt
   * @param strokeOpt
   * @param radius
   * @param textOpt
   * @param zIndex
   * @param text
   * @param propertys
   */
  drawCirclePoint({
    id,
    pos,
    fillOpt = {
      color: 'rgba(23,136,243,.2)',
    },
    strokeOpt = {
      width: 2,
      color: DEFAULT_COLOE,
    },
    radius = 10,
    textOpt = {},
    zIndex = 1,
    text = '',
    propertys = {},
  }) {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new Point(pos),
      ...propertys,
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
          fill: new Fill({
            color: '#fff',
          }),
          ...textOpt,
        }),
        zIndex,
      }),
    );

    return point;
  },
  /**
   * drawRegularShapePoint - 创建一个多边形的点
   * @param id
   * @param pos
   * @param fillOpt
   * @param strokeOpt
   * @param text
   * @param textOpt
   * @param zIndex
   * @param propertys
   * @param others
   */
  drawRegularShapePoint({
    id,
    pos,
    fillOpt = { color: 'rgba(23,136,243,.2)' },
    strokeOpt = {
      width: 2,
      color: DEFAULT_COLOE,
    },
    // points = 3,
    // radius = 10,
    // radius2 = 0,
    // rotation = Math.PI / 4,
    // angle = 0,
    text = '',
    textOpt = {},
    zIndex = 1,
    propertys = {},
    ...others
  }) {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new Point(pos),
      ...propertys,
    });

    point.setId(id);

    point.setStyle(
      new Style({
        // @ts-ignore
        image: new RegularShape({
          fill: new Fill(fillOpt),
          stroke: new Stroke(strokeOpt),
          ...others,
          // points,
          // radius,
          // radius2,
          // rotation,
          // angle,
        }),
        text: new Text({
          text,
          textAlign: 'center',
          fill: new Fill({
            color: '#fff',
          }),
          ...textOpt,
        }),
        zIndex,
      }),
    );

    return point;
  },

  /**
   * drawImagePoint - 创建一个图片的点
   * @param id
   * @param pos
   * @param zIndex
   * @param color
   * @param src
   * @param opacity
   * @param scale
   * @param anchor
   * @param rotation
   * @param offset
   * @param offsetOrigin
   * @param size
   * @param text
   * @param textOpt
   * @param propertys
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
    propertys = {},
  }) {
    const point = new Feature({
      zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
      geometry: new Point(pos),
      ...propertys,
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
        fill: new Fill({
          color: '#fff',
        }),
        text: new Text({
          text,
          textAlign: 'center',
          fill: new Fill({
            color: '#fff',
          }),
          ...textOpt,
        }),
        zIndex,
      }),
    );

    return point;
  },
  /**
   * createRegularPolygonCurve - 扇形
   * @param origin 圆心
   * @param radius 半径
   * @param sides 边数
   * @param r 弧度
   * @param angel 方向角(以y周围0)(可以自定义自己的x周一样)
   * @return {Polygon}
   */
  createRegularPolygonCurve(origin, radius, sides, r, angel) {
    const rotation = 360 - r;
    let angle = Math.PI * (1 / sides - 1 / 2);
    if (rotation) {
      angle += (rotation / 180) * Math.PI;
    }
    let rotatedAngle;
    let x;
    let y;
    const points = [];
    for (let i = 0; i < sides; ++i) {
      const an = i * ((360 - rotation) / 360);
      rotatedAngle = angle + (an * 2 * Math.PI) / sides;
      x = origin[0] + radius * Math.cos(rotatedAngle);
      y = origin[1] + radius * Math.sin(rotatedAngle);
      // @ts-ignore
      points.push([x, y]);
    }
    if (rotation !== 0) {
      // @ts-ignore
      points.push(origin);
    }
    const ring = new LinearRing(points);
    ring.rotate(Math.PI - ((angel - r / 2) / 180) * Math.PI, origin);
    const poy = new Polygon([points]);
    // @ts-ignore
    const a = ring.A;
    // @ts-ignore
    poy.A = a;

    return poy;
  },

  /**
   * removeFeature - 删除一个feature
   * @param vectorSource
   * @param feature
   */
  removeFeature(vectorSource, feature) {
    vectorSource.removeFeature(feature);
  },
  /**
   * removeAllFeature - 删除所有feature
   * @param vectorSource
   */
  removeAllFeature(vectorSource) {
    vectorSource.clear();
  },
  /**
   * removeAllOverlay - 删除所有覆盖物
   * @param map
   */
  removeAllOverlay(map) {
    map.getOverlays().clear();
  },
  /**
   * setMapCenterAnimate - 移动地图到指定位置(动画)
   * @param map
   * @param point
   * @param duration
   */
  setMapCenterAnimate({ map, point, duration = 600 }) {
    map.getView().animate({
      center: point,
      duration,
    });
  },
  /**
   * drawLine - 创建线
   * @param points
   * @param width
   * @param color
   * @param lineCap
   * @param lineJoin
   */
  drawLine({ points, width, color, lineCap = 'square', lineJoin = 'round' }) {
    const line = new Feature({
      geometry: new LineString(points),
    });

    line.setStyle(
      new Style({
        stroke: new Stroke({
          width,
          color,
          lineCap: lineCap as CanvasLineCap,
          lineJoin: lineJoin as CanvasLineJoin,
        }),
      }),
    );

    return line;
  },
  /**
   * createInteraction
   * @param map
   * @param config
   */
  createInteraction(map, config) {
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
   * polygonInteraction - 框多边形
   * @param map
   * @param vectorSource
   * @param onDrawStart
   * @param onDrawEnd
   */
  polygonInteraction({ map, freehand = true, vectorSource, onDrawEnd, ...other }) {
    const drawPolygonInteraction = this.createInteraction(map, {
      source: vectorSource,
      type: 'Polygon',
      freehand,
      ...other,
    });

    drawPolygonInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const lonlats = [];
      const coordinates = geometry.getCoordinates()[0].map((v) => {
        // @ts-ignore
        lonlats.push(transformLonLat(v));
        return v;
      });
      const centerp = map.getView().getCenter();

      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          lonlats,
          centerp,
          transformCenterp: transformLonLat(centerp),
        });
      }
    });

    return drawPolygonInteraction;
  },
  /**
   * circleInteraction - 框圆形
   * @param map
   * @param vectorSource
   * @param onDrawStart
   * @param onDrawEnd
   */
  circleInteraction({ map, vectorSource, onDrawEnd, ...other }) {
    const drawCircleInteraction = this.createInteraction(map, {
      source: vectorSource,
      type: 'Circle',
      freehand: true,
      ...other,
    });

    drawCircleInteraction.on('drawend', (e) => {
      const geometry = e.feature.getGeometry() as any;
      // 半径
      const radius = geometry.getRadius();
      // 中心点
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
   * boxInteraction - 框线框
   * @param map
   * @param vectorSource
   * @param onDrawEnd
   * @param other
   */
  boxInteraction({ map, vectorSource, onDrawEnd, ...other }) {
    const drawBoxInteraction = this.createInteraction(map, {
      source: vectorSource,
      type: 'Circle',
      freehand: true,
      geometryFunction: createBox(),
      ...other,
    });

    drawBoxInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const coordinates = geometry.getCoordinates()[0].map((v) => {
        return v;
      });
      const centerp = map.getView().getCenter();

      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          centerp,
        });
      }
    });

    return drawBoxInteraction;
  },
  /**
   * linStringInteraction - 线路
   * @param map
   * @param vectorSource
   * @param onDrawStart
   * @param onDrawEnd
   */
  linStringInteraction({ map, freehand = true, vectorSource, onDrawEnd, ...other }) {
    const drawPolygonInteraction = this.createInteraction(map, {
      source: vectorSource,
      type: 'LineString',
      freehand,
      ...other,
    });

    drawPolygonInteraction.on('drawend', (e) => {
      e.feature.setId(v4());
      const geometry = e.feature.getGeometry() as any;
      const lonlats = [];
      const coordinates = geometry.getCoordinates().map((v) => {
        // @ts-ignore
        lonlats.push(transformLonLat(v));
        return v;
      });
      const centerp = map.getView().getCenter();
      const mileage = geometry.getLength().toFixed(3);

      if (onDrawEnd) {
        onDrawEnd({
          e,
          geometry,
          coordinates,
          lonlats,
          centerp,
          mileage,
          transformCenterp: transformLonLat(centerp),
        });
      }
    });

    return drawPolygonInteraction;
  },
  /**
   * createModifyInteraction
   * @param map
   * @param vectorSource
   * @param onModifyEnd
   * @return {Modify|Modify}
   */
  createModifyInteraction({ map, vectorSource, onModifyEnd }) {
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
   * removeInteraction - 移除interaction
   * @param map
   * @param interaction
   */
  removeInteraction(map, interaction) {
    map.removeInteraction(interaction);
  },
  /**
   * removeInteractionAll - 移除所有的Interaction
   * @param map
   */
  removeInteractionAll(map) {
    map.getInteractions().clear();
  },
  /**
   * mapFit - 地图自适应
   * @param extent
   * @param option
   * @param map
   */
  mapFit(extent = [], option = {}, map) {
    // if (extent.length === 0) return;
    // const resolution = map.getView().getResolutionForExtent(extent);
    // if (resolution === 0) return;
    // map.getView().setResolution(resolution);
    // map.getView().fit(extent, Object.assign({
    //   padding: [10, 10, 10, 10],
    //   constrainResolution: true,
    //   nearest: true,
    //   duration: 500,
    // }, option));

    if (extent.length === 0) return;
    // const resolution = map.getView().getResolutionForExtent(extent);
    // if(resolution === 0) return;
    // map.getView().setResolution(resolution);
    map.getView().fit(extent, {
      padding: [40, 40, 40, 40],
      constrainResolution: false,
      nearest: true,
      duration: 200,
      ...option,
    });
  },
  /**
   * addArrowsSource - 为一系列点创建箭头
   * @param points
   * @param color
   * @param icon
   * @return {Array}
   */
  addArrowsSource({ points, color, icon }) {
    const arrows = [];
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];

      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
      const rotation = Math.atan2(dy, dx);

      const arrow = new Feature({
        geometry: new Point(end),
      });

      arrow.setStyle(
        new Style({
          image: new Icon({
            color,
            src: icon,
            anchor: [0.5, 0.5],
            rotateWithView: true,
            rotation: -rotation,
          }),
        }),
      );

      // @ts-ignore
      arrows.push(arrow);
    }
    return arrows;
  },
  /**
   * addArrowsOverlay
   * @param map
   * @param parentDom
   * @param color
   * @param points
   */
  addArrowsOverlay(map, parentDom, color, points) {
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];

      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
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
   * addOverlay - 添加覆盖物
   * @param map
   * @param config
   * @param div
   */
  addOverlay: (map, config, div: HTMLDivElement | null) => {
    const overlay = new Overlay(config);
    map.addOverlay(overlay);
    return overlay;
  },

  /**
   * getRad
   * @param d
   */
  getRad(d) {
    return (d * Math.PI) / 180.0;
  },

  /**
   * getExtentByCoordinates - 获取coordinates中的矩形数据
   * @param coordinates
   * @return {*}
   */
  getExtentByCoordinates(coordinates) {
    if (coordinates.length === 0) {
      return [];
    }
    if (coordinates.length === 1) {
      return [].concat(coordinates[0], coordinates[0]);
    }

    const lons = [];
    const lats = [];
    for (let i = 0; i < coordinates.length; i++) {
      const point = coordinates[i];
      // @ts-ignore
      lons.push(point[0]);
      // @ts-ignore
      lats.push(point[1]);
    }

    lons.sort((t1, t2) => {
      if (t1 < t2) return -1;
      if (t1 > t2) return 1;
      return 0;
    });

    lats.sort((t1, t2) => {
      if (t1 < t2) return -1;
      if (t1 > t2) return 1;
      return 0;
    });

    return [lons[0], lats[0], lons[lons.length - 1], lats[lats.length - 1]];
  },
  /**
   * getExtentByVectorSource - 获取vectorSource中的矩形数据
   * @param vectorSource
   * @param type
   * @return {*}
   */
  getExtentByVectorSource(vectorSource, type = 'Point') {
    const coordinates = this.getCectorSourceCoordinates(vectorSource, type);
    return this.getExtentByCoordinates(coordinates);
  },
  /**
   * getCectorSourceCoordinates - 获取向量层中的所有点
   * @param vectorSource
   * @param type
   */
  getCectorSourceCoordinates(vectorSource, type = 'Point') {
    let points = [];
    vectorSource
      .getFeatures()
      .filter((f) => {
        const geometry = f.getGeometry();
        return geometry.getType() === type;
      })
      .map((f) => {
        const geometry = f.getGeometry();
        if (type === 'Circle') {
          const extent = geometry.getExtent();
          // @ts-ignore
          points.push([extent[0], extent[1]]);
          // @ts-ignore
          points.push([extent[2], extent[3]]);
        } else if (type === 'Point') {
          const coordinates = geometry.getCoordinates();
          // @ts-ignore
          points.push(coordinates);
        } else {
          const coordinates = geometry.getCoordinates();
          points = points.concat(coordinates);
        }
      });
    return points;
  },
  /**
   * getCenterByCoordinates - 获取source中所有Point的中心点
   * @param vectorSource
   * @param type
   * @return {{centerLon: number, centerLat: number}}
   */
  getCenterByCoordinates(vectorSource, type = 'Point') {
    // 获取所有点的数据
    let points = [];
    vectorSource
      .getFeatures()
      .filter((f) => {
        const geometry = f.getGeometry();
        return geometry.getType() === type;
      })
      .map((f) => {
        const geometry = f.getGeometry();
        if (type === 'Circle') {
          const extent = geometry.getExtent();
          // @ts-ignore
          points.push([extent[0], extent[1]]);
          // @ts-ignore
          points.push([extent[2], extent[3]]);
        } else if (type === 'Point') {
          const coordinates = geometry.getCoordinates();
          // @ts-ignore
          points.push(coordinates);
        } else {
          const coordinates = geometry.getCoordinates();
          points = points.concat(coordinates);
        }
      });

    return this.getCenterByPoints(points);
  },
  /**
   * getCenterByPoints - 获取一系列点中的中心点
   * @param points
   * @return {{centerLon: number, centerLat: number}}
   */
  getCenterByPoints(points) {
    const lons = [];
    const lats = [];
    for (let i = 0; i < points.length; i++) {
      const lonlat = transform(
        points[i],
        Resource.Dict.value.ResourceGisEpsg3857.value,
        Resource.Dict.value.ResourceGisEpsg4326.value,
      );
      // @ts-ignore
      lons.push(lonlat[0]);
      // @ts-ignore
      lats.push(lonlat[1]);
    }

    return {
      centerLon: Math.min(...lons) + (Math.max(...lons) - Math.min(...lons)) / 2,
      centerLat: Math.min(...lats) + (Math.max(...lats) - Math.min(...lats)) / 2,
    };
  },
  /**
   * getPointsExtent - 获取一些列点的矩形范围(左上角[x,y]，右下角[x,y])
   * @param points
   * @return {{centerLon: number, centerLat: number}}
   */
  getPointsExtent(points) {
    const lons = [];
    const lats = [];
    for (let i = 0; i < points.length; i++) {
      const lonlat = transform(
        points[i],
        Resource.Dict.value.ResourceGisEpsg4326.value,
        Resource.Dict.value.ResourceGisEpsg3857.value,
      );
      // @ts-ignore
      lons.push(lonlat[0]);
      // @ts-ignore
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
   * getFlatternDistance - 计算连个经纬度之间的距离(m)
   * approx distance between two points on earth ellipsoid
   * @param {Object} lat1
   * @param {Object} lng1
   * @param {Object} lat2
   * @param {Object} lng2
   */
  getFlatternDistance(lat1, lng1, lat2, lng2) {
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
  /**
   * wrapLon
   * @param value
   */
  wrapLon(value) {
    const worlds = Math.floor((value + 180) / 360);
    return value - worlds * 360;
  },
  /**
   * getMapExtent - 获取地图的矩形范围
   * @param map
   */
  getMapExtent(map) {
    if (!map) return false;
    const extent = map.getView().calculateExtent(map.getSize());
    const bottomLeft = toLonLat(getBottomLeft(extent));
    const topRight = toLonLat(getTopRight(extent));

    const top = topRight[1];
    const right = this.wrapLon(topRight[0]);
    const left = this.wrapLon(bottomLeft[0]);
    const bottom = bottomLeft[1];

    return [
      {
        lon: left,
        lat: top,
      },
      {
        lon: right,
        lat: top,
      },
      {
        lon: right,
        lat: bottom,
      },
      {
        lon: left,
        lat: bottom,
      },
      {
        lon: left,
        lat: top,
      },
    ];
  },
  /**
   * getFeaturesInExtent
   * @param map
   * @param feature
   */
  getFeaturesInExtent(map, feature) {
    const geometry = feature.getGeometry();
    const extent = geometry.getExtent();
    return map.getLayers().getArray()[1].getSource().getFeaturesInExtent(extent);
  },
  /**
   * getLayersCount - 获取地图的Layers数量
   * @param map
   * @return {number}
   */
  getLayersCount(map) {
    return map.getLayers().getLength();
  },
  rgb() {
    //rgb颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return '(' + r + ',' + g + ',' + b + ')';
  },
  color16() {
    //十六进制颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  },
  getLineColor(index) {
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
  downLoadMap(map) {
    map.once('postcompose', function (event) {
      const canvas = event.context.canvas;
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
};
