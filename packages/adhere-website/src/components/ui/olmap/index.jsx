import React, { useRef } from 'react';
import { /* Card, */ Radio, Button } from 'antd';
import { OLMap, Resource } from '@baifendian/adhere';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

import { Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj.js';
// import { Fill, Stroke, Style } from 'ol/style.js';
// import Circle from 'ol/geom/Circle';
// import Feature from 'ol/Feature.js';
import icon from './区控-图例.svg';

// import Map from 'ol/Map';
// import { defaults as defaultControls } from 'ol/control.js';
// import Zoom from 'ol/control/Zoom.js';
// import MousePosition from 'ol/control/MousePosition.js';
// import ScaleLine from 'ol/control/ScaleLine.js';
// import { createStringXY } from 'ol/coordinate';
// import View from 'ol/View';
// import { fromLonLat } from 'ol/proj.js';
// // import { Tile } from 'ol/layer.js';
// import TileLayer from 'ol/layer/Tile';
// import { OSM } from 'ol/source.js';
// import 'ol/ol.css';

// import AnimationManager from './animationmanager';

const {
  /* GeoLayer, */ TitleLayer,
  OLMap: OLMapComponent,
  HeatMap,
  Util,
  AnimationManager,
} = OLMap;

export default () => {
  // useEffect(() => {
  //   const map = new Map({
  //     target: olref.current,
  //     controls: defaultControls({
  //       attributionOptions: {
  //         collapsible: false,
  //       },
  //     }).extend([
  //       new Zoom(),
  //       new ScaleLine(),
  //       new MousePosition({
  //         coordinateFormat: createStringXY(5),
  //         projection: 'EPSG:4326',
  //       }),
  //     ]),
  //     pixelRatio: 1,
  //     view: new View({
  //       center: fromLonLat([119.879673, 31.933156]),
  //       zoom: 17,
  //       // maxZoom: 11,
  //       // center: [0, 0],
  //       // zoom: 2,
  //     }),
  //     layers: [
  //       // 主图层
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     ],
  //   });
  //
  //   // const map = new Map({
  //   //   layers: [
  //   //     new TileLayer({
  //   //       source: new OSM(),
  //   //     }),
  //   //   ],
  //   //   target: olref.current,
  //   //   view: new View({
  //   //     center: [0, 0],
  //   //     zoom: 2,
  //   //   }),
  //   // });
  // }, []);

  const xbqRef = useRef();
  const changeRef = useRef();
  const heatRef = useRef();
  const fRef = useRef();
  const animationRef = useRef();
  const windRef = useRef();

  return (
    <div className="Page">
      <h1>OLMap</h1>
      <p>对openlayers的封装</p>
      <ul>
        <li>- 提供GeoLayer</li>
        <li>- 提供TitleLayer</li>
        <li>- 提供OLMap组件</li>
        <li>- 提供HeatMap组件</li>
        <li>- 提供Util工具</li>
      </ul>

      <h3>GeoLayer - 继承ol/layer/Vector</h3>
      <FunctionProps
        data={[
          {
            name: 'constructor',
            desc: '构造方法',
            modifier: 'private',
            params: [
              {
                name: 'geoJsonObject',
                desc: '代表geoJson的对象',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onStyle',
                desc: 'geoJson节点的样式定义',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'zIndex',
                desc: 'layer的层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <h3>WindLayer - 继承WindLayer</h3>
      <FunctionProps
        data={[
          {
            name: 'constructor',
            desc: '构造方法',
            modifier: 'private',
            params: [
              {
                name: 'data',
                desc: '风场的数据',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'config',
                desc: '风场的配置',
                type: 'IWindLayerConfig',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <h3>IWindLayerConfig</h3>
      <Props
        data={[
          {
            params: 'velocityScale',
            desc: '',
            type: 'number',
            defaultVal: '1 / 20',
          },
          {
            params: 'paths',
            desc: '',
            type: 'number',
            defaultVal: '5000',
          },
          {
            params: 'colorScale',
            desc: '',
            type: 'Array<string>',
            defaultVal: '',
          },
          {
            params: 'lineWidth',
            desc: '',
            type: 'number',
            defaultVal: '2',
          },
          {
            params: 'generateParticleOption',
            desc: '',
            type: 'boolean',
            defaultVal: 'false',
          },
        ]}
      />

      <h3>TitleLayer - 提供各种瓦片层的source和TileLayer实现</h3>
      <FunctionProps
        data={[
          {
            name: 'getOSM',
            desc: '获取OSM的源',
            modifier: 'private',
            params: [
              {
                name: 'options',
                desc: '配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'OSM',
            returnDesc: '',
          },
          {
            name: 'getXYZ',
            desc: '获取XYZ的源',
            modifier: 'private',
            params: [
              {
                name: 'options',
                desc: '配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'XYZ',
            returnDesc: '',
          },
          {
            name: 'getTileWMS',
            desc: '获取TileWMS的源',
            modifier: 'private',
            params: [
              {
                name: 'options',
                desc: '配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'TileWMS',
            returnDesc: '',
          },
          {
            name: 'getWMTS',
            desc: '获取WMTS的源',
            modifier: 'private',
            params: [
              {
                name: 'options',
                desc: '配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'WMTS',
            returnDesc: '',
          },

          {
            name: 'getOSMTileLayer',
            desc: '获取以OSM为源的TileLayer',
            modifier: 'private',
            params: [
              {
                name: 'sourceOptions',
                desc: 'source配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'options',
                desc: 'layer配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Tile',
            returnDesc: '',
          },
          {
            name: 'getXYZTileLayer',
            desc: '获取以XYZ为源的TileLayer',
            modifier: 'private',
            params: [
              {
                name: 'sourceOptions',
                desc: 'source配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'options',
                desc: 'layer配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Tile',
            returnDesc: '',
          },
          {
            name: 'getWMTSTileLayer',
            desc: '获取以WMTS为源的TileLayer',
            modifier: 'private',
            params: [
              {
                name: 'sourceOptions',
                desc: 'source配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'options',
                desc: 'layer配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Tile',
            returnDesc: '',
          },
          {
            name: 'getTileWMSTileLayer',
            desc: '获取以TileWMS为源的TileLayer',
            modifier: 'private',
            params: [
              {
                name: 'sourceOptions',
                desc: 'source配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'options',
                desc: 'layer配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Tile',
            returnDesc: '',
          },
        ]}
      />

      <h3>OLMap</h3>
      <Props
        data={[
          {
            params: 'type',
            desc: '底图类型',
            type: 'string 【administrative(行政) | satellite(卫星)】',
            defaultVal: 'administrative',
          },
          {
            params: 'mapConfig',
            desc: '底图的缺省配置 - ol/map的配置',
            type: 'Object',
            defaultVal: '',
          },
          {
            params: 'geoJSONStyle',
            desc: 'geoJson数据的样式',
            type: 'Object',
            defaultVal: '',
          },
          {
            params: 'geoJSONData',
            desc: 'geoJson的数据',
            type: 'Object',
            defaultVal: '常州市新北区的数据',
          },
          {
            params: 'maxZoom',
            desc: '最大缩放值',
            type: 'number',
            defaultVal: '17',
          },
          {
            params: 'minZoom',
            desc: '最小缩放值',
            type: 'number',
            defaultVal: '11',
          },
          {
            params: 'center',
            desc: '中心点',
            type: 'Array<Array<number,number>>',
            defaultVal: '常州市新北区',
          },
          {
            params: 'extent',
            desc: '显示的范围',
            type: 'Array<Array<number,number>>',
            defaultVal: '常州市新北区',
          },
        ]}
      />

      <h3>OLMap的方法</h3>
      <FunctionProps
        data={[
          {
            name: 'addMainGeoJSONLayer',
            desc: '添加一个GeoJSONLayer层，',
            modifier: 'public',
            params: [
              {
                name: 'geoJSONStyle',
                desc: 'geoJSON数据的样式',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'geoJSONData',
                desc: 'geoJSONLayer的geoJSON数据',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'addGeoLayer',
            desc: '添加一个GeoJSONLayer层',
            modifier: 'public',
            params: [
              {
                name: 'geojsonData',
                desc: 'geoJSONLayer的geoJSON数据',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'getStyleConfig',
                desc: 'geoJSON数据的样式',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层的层级',
                type: 'number',
                defaultVal: '0',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'addDataLayer',
            desc: '添加一个VectorLayer',
            modifier: 'public',
            params: [
              {
                name: 'zIndex',
                desc: '层的层级',
                type: 'number',
                defaultVal: '0',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'addZoomListener',
            desc: '添加地图的Zoom事件',
            modifier: 'public',
            params: [
              {
                name: 'handler',
                desc: '事件的句柄',
                type: 'Function',
                defaultVal: '() => {}',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'addClickListener',
            desc: '添加地图的Click事件',
            modifier: 'public',
            params: [
              {
                name: 'layer',
                desc: '触发click事件的Layer',
                type: 'Layer',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'addOverlay',
            desc: '添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个',
            modifier: 'public',
            params: [
              {
                name: 'config',
                desc: 'Overlay的config',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'overlay',
            returnDesc: '',
          },
          {
            name: 'setOverlayState',
            desc: '给Overlay对象 配置状态',
            modifier: 'public',
            params: [
              {
                name: 'overlay',
                desc: 'overlay对象',
                type: 'overlay',
                defaultVal: '',
                required: '',
              },
              {
                name: 'state',
                desc: '光标的样式',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'setCursor',
            desc: '将此处鼠标点样式',
            modifier: 'public',
            params: [
              {
                name: 'style',
                desc: 'course的样式',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'clear',
            desc: '清空所有层，除了底图层',
            modifier: 'public',
            params: [],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getMap',
            desc: '返回Map对象',
            modifier: 'public',
            params: [],
            returnType: 'map',
            returnDesc: '',
          },
        ]}
      />

      <h3>HeatMap</h3>
      <Props
        data={[
          {
            params: 'heatMapLayerConfig',
            desc: '底图的配置',
            type: 'Object',
            defaultVal: '',
          },
        ]}
      />

      <h3>HeatMap的方法</h3>
      <FunctionProps
        data={[
          {
            name: 'addLayer',
            desc: '添加一个GeoJSONLayer层',
            modifier: 'public',
            params: [
              {
                name: 'geoJSONStyle',
                desc: 'geoJSON数据的样式',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'geoJSONData',
                desc: 'geoJSONLayer的geoJSON数据',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'getHeatmapLayer',
            desc: '获取HearMapLayer',
            modifier: 'public',
            params: [],
            returnType: 'HearMapLayer',
            returnDesc: '',
          },
        ]}
      />

      <h3>Util</h3>
      <FunctionProps
        data={[
          {
            name: 'createMap',
            desc: '创建地图',
            modifier: 'public',
            params: [
              {
                name: 'config',
                desc: 'ol/map地图配置',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'fitZoom',
                desc: '地图fit的zoom值',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'minZoom',
                desc: '最小缩放级别',
                type: 'number',
                defaultVal: '11',
                required: '',
              },
              {
                name: 'maxZoom',
                desc: '最大缩放级别',
                type: 'number',
                defaultVal: '17',
                required: '',
              },
              {
                name: 'center',
                desc: '中心点',
                type: 'Array<Array<number,number>>',
                defaultVal: '常州市新北区',
                required: '',
              },
              {
                name: 'extent',
                desc: '显示的范围',
                type: 'Array<Array<number,number>>',
                defaultVal: '常州市新北区',
                required: '',
              },
            ],
            returnType: 'map',
            returnDesc: '地图对象',
          },

          {
            name: 'setOverlayState',
            desc: '给overlay赋予状态',
            modifier: 'public',
            params: [
              {
                name: 'overlay',
                desc: 'overlay',
                type: 'overlay',
                defaultVal: '',
                required: '',
              },
              {
                name: 'point',
                desc: 'point',
                type: 'point',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'addClickListener',
            desc: '给地图实例添加click监听者',
            modifier: 'public',
            params: [
              {
                name: 'mapInstance',
                desc: 'map实例对象',
                type: 'map',
                defaultVal: '',
                required: '',
              },
              {
                name: 'listeningLayer',
                desc: '监听的layer',
                type: 'Layer',
                defaultVal: '',
                required: '',
              },
              {
                name: 'hitCallback',
                desc: '选中的回调',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'unHitCallback',
                desc: '未选中的回调',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'setCursor',
                desc: '设置鼠标滑过当前图层的鼠标样式',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'addHoverListener',
            desc: '给地图实例上的指定layer添加hover监听者',
            modifier: 'public',
            params: [
              {
                name: 'mapInstance',
                desc: 'map实例对象',
                type: 'map',
                defaultVal: '',
                required: '',
              },
              {
                name: 'listeningLayer',
                desc: '监听的layer',
                type: 'Layer',
                defaultVal: '',
                required: '',
              },
              {
                name: 'hitCallback',
                desc: '选中的回调',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'unHitCallback',
                desc: '未选中的回调',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'setCursor',
                desc: '设置鼠标滑过当前图层的鼠标样式',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'addGeoLayer',
            desc: '给地图实例添加一个geojson格式的 VectorLayer',
            modifier: 'public',
            params: [
              {
                name: 'mapInstance',
                desc: 'map实例对象',
                type: 'map',
                defaultVal: '',
                required: '',
              },
              {
                name: 'geojsonData',
                desc: 'geoJSON数据',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'getStyleConfig',
                desc: '获取该geoJSON的样式',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '该 Layer 的层级',
                type: 'number',
                defaultVal: '0',
                required: '',
              },
            ],
            returnType: 'geoLayer',
            returnDesc: '此次生成的layer',
          },
          {
            name: 'addVectorLayer',
            desc: '添加一个向量层',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '地图实例',
                type: 'map',
                defaultVal: '',
                required: '',
              },
              {
                name: 'zIndex',
                desc: 'layer的层级',
                type: 'number',
                defaultVal: '0',
                required: '',
              },
            ],
            returnType: '{vectorLayer,vectorSource}',
            returnDesc: '返回layer和source',
          },
          {
            name: 'addHeatmapLayer',
            desc: '添加一个热力层',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '地图实例',
                type: 'map',
                defaultVal: '',
                required: '',
              },
              {
                name: 'layoutConfig',
                desc: 'HeatmapLayer的配置',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'vectorSource',
            returnDesc: '',
          },
          {
            name: 'drawCircle',
            desc: '创建一个圆形',
            modifier: 'public',
            params: [
              {
                name: 'center',
                desc: '中心点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'radius',
                desc: '半径',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '颜色',
                type: 'string',
                defaultVal: 'rgba(23,136,243,.2)',
                required: '',
              },
              {
                name: 'strokeColor',
                desc: '描边颜色',
                type: 'string',
                defaultVal: '#1788F3',
                required: '',
              },
              {
                name: 'strokeWidth',
                desc: '描边宽度',
                type: 'number',
                defaultVal: '2',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'id',
                desc: '节点id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'propertys',
                desc: '附加属性',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Feature',
            returnDesc: '',
          },
          {
            name: 'drawPolygon',
            desc: '创建一个多边形',
            modifier: 'public',
            params: [
              {
                name: 'points',
                desc: '所有的点',
                type: 'array<array>',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '颜色',
                type: 'string',
                defaultVal: 'rgba(23,136,243,.2)',
                required: '',
              },
              {
                name: 'strokeColor',
                desc: '描边颜色',
                type: 'string',
                defaultVal: '#1788F3',
                required: '',
              },
              {
                name: 'strokeWidth',
                desc: '描边宽度',
                type: 'number',
                defaultVal: '2',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'id',
                desc: '节点id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'propertys',
                desc: '附加属性',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Feature',
            returnDesc: '',
          },
          {
            name: 'drawCirclePoint',
            desc: '创建一个圆的点',
            modifier: 'public',
            params: [
              {
                name: 'id',
                desc: '节点id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'pos',
                desc: '中心点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'fillOpt',
                desc: '颜色',
                type: 'object',
                defaultVal: "{color: 'rgba(23,136,243,.2)'}",
                required: '',
              },
              {
                name: 'strokeColor',
                desc: '描边颜色',
                type: 'object',
                defaultVal: "{width:2, color: '#1788F3'}",
                required: '',
              },
              {
                name: 'radius',
                desc: '半径',
                type: 'number',
                defaultVal: '10',
                required: '',
              },
              {
                name: 'textOpt',
                desc: '文字配置',
                type: 'Object',
                defaultVal: '{}',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'text',
                desc: '文字',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'propertys',
                desc: '附加属性',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Feature',
            returnDesc: '',
          },
          {
            name: 'drawRegularShapePoint',
            desc: '创建一个多边形的点',
            modifier: 'public',
            params: [
              {
                name: 'id',
                desc: '节点id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'pos',
                desc: '中心点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'fillOpt',
                desc: '颜色',
                type: 'object',
                defaultVal: "{color: 'rgba(23,136,243,.2)'}",
                required: '',
              },
              {
                name: 'strokeColor',
                desc: '描边颜色',
                type: 'object',
                defaultVal: "{width:2, color: '#1788F3'}",
                required: '',
              },
              {
                name: 'textOpt',
                desc: '文字配置',
                type: 'Object',
                defaultVal: '{}',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'text',
                desc: '文字',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'propertys',
                desc: '附加属性',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Feature',
            returnDesc: '',
          },
          {
            name: 'drawImagePoint',
            desc: '创建一个图片的点',
            modifier: 'public',
            params: [
              {
                name: 'id',
                desc: '节点id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'pos',
                desc: '中心点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'zIndex',
                desc: '层级',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'src',
                desc: '图片地址',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '颜色',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'opacity',
                desc: '透明度',
                type: 'number',
                defaultVal: '1',
                required: '',
              },
              {
                name: 'scale',
                desc: '缩放',
                type: 'number',
                defaultVal: '1',
                required: '',
              },
              {
                name: 'anchor',
                desc: '锚点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'rotation',
                desc: '旋转',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'offset',
                desc: '留白',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'offsetOrigin',
                desc: '留白起始位置',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'size',
                desc: '大小',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'text',
                desc: '文字',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'textOpt',
                desc: '文字配置',
                type: 'Object',
                defaultVal: '{}',
                required: '',
              },
              {
                name: 'propertys',
                desc: '附加属性',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'createRegularPolygonCurve',
            desc: '扇形',
            modifier: 'public',
            params: [
              {
                name: 'origin',
                desc: '圆心',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'radius',
                desc: '半径',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'sides',
                desc: '边数',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'r',
                desc: '弧度',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'angel',
                desc: '方向角(以y周围0)(可以自定义自己的x周一样)',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Polygon',
            returnDesc: '',
          },
          {
            name: 'removeFeature',
            desc: '删除一个feature',
            modifier: 'public',
            params: [
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'feature',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'removeAllFeature',
            desc: '删除所有feature',
            modifier: 'public',
            params: [
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'removeAllOverlay',
            desc: '删除所有覆盖物',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '地图实例',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'setMapCenterAnimate',
            desc: '移动地图到指定位置(动画)',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'point',
                desc: '点',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'duration',
                desc: '动画持续事件',
                type: 'number',
                defaultVal: 'duration',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'drawLine',
            desc: '创建线',
            modifier: 'public',
            params: [
              {
                name: 'points',
                desc: '数据',
                type: 'array<array>',
                defaultVal: '',
                required: '',
              },
              {
                name: 'width',
                desc: '线的宽度',
                type: 'number',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '线的颜色',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'lineCap',
                desc: '连接点样式',
                type: 'string',
                defaultVal: 'square',
                required: '',
              },
              {
                name: 'lineJoin',
                desc: '连接点样式',
                type: 'string',
                defaultVal: 'round',
                required: '',
              },
            ],
            returnType: 'Feature',
            returnDesc: '',
          },
          {
            name: 'createInteraction',
            desc: '创建一个交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'config',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Draw',
            returnDesc: '',
          },
          {
            name: 'polygonInteraction',
            desc: '创建一个多边形交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'freehand',
                desc: '',
                type: '',
                defaultVal: 'true',
                required: '',
              },
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onDrawEnd',
                desc: '',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'other',
                desc: '其他的配置',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Draw',
            returnDesc: '',
          },
          {
            name: 'circleInteraction',
            desc: '创建一个圆型的交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'freehand',
                desc: '',
                type: '',
                defaultVal: 'true',
                required: '',
              },
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onDrawEnd',
                desc: '',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'other',
                desc: '其他的配置',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Draw',
            returnDesc: '',
          },
          {
            name: 'boxInteraction',
            desc: '创建一个矩形的交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'freehand',
                desc: '',
                type: '',
                defaultVal: 'true',
                required: '',
              },
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onDrawEnd',
                desc: '',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'other',
                desc: '其他的配置',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Draw',
            returnDesc: '',
          },
          {
            name: 'linStringInteraction',
            desc: '创建一个线型的交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'freehand',
                desc: '',
                type: '',
                defaultVal: 'true',
                required: '',
              },
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onDrawEnd',
                desc: '',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
              {
                name: 'other',
                desc: '其他的配置',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Draw',
            returnDesc: '',
          },
          {
            name: 'createModifyInteraction',
            desc: '创建一个可以修改的交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'vectorSource',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'onModifyEnd',
                desc: '',
                type: 'Function',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: '',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: '',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Modify',
            returnDesc: '',
          },
          {
            name: 'removeInteraction',
            desc: '删除一个交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'interaction',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'removeInteractionAll',
            desc: '删除所有交互',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },

          {
            name: 'mapFit',
            desc: '地图自适应',
            modifier: 'public',
            params: [
              {
                name: 'extent',
                desc: '自适应的范围数据',
                type: 'array',
                defaultVal: '',
                required: '',
              },
              {
                name: 'option',
                desc: '其他配置项',
                type: 'Object',
                defaultVal: '',
                required: '',
              },
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'addArrowsSource',
            desc: 'addArrowsSource',
            modifier: 'public',
            params: [
              {
                name: 'points',
                desc: '数据',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '颜色',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'icon',
                desc: '图片',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'addArrowsOverlay',
            desc: '使用overlay创建箭头',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'parentDom',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'color',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'points',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'addOverlay',
            desc: '添加覆盖物',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'config',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Overlay',
            returnDesc: '',
          },
          {
            name: 'getRad',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'd',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getExtentByCoordinates',
            desc: '获取coordinates中的矩形数据',
            modifier: 'public',
            params: [
              {
                name: 'coordinates',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'getExtentByVectorSource',
            desc: '获取vectorSource中的矩形数据',
            modifier: 'public',
            params: [
              {
                name: 'vectorSource',
                desc: '',
                type: 'vectorSource',
                defaultVal: '',
                required: '',
              },
              {
                name: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'Point',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'getCectorSourceCoordinates',
            desc: '获取向量层中的所有点',
            modifier: 'public',
            params: [
              {
                name: 'vectorSource',
                desc: '',
                type: 'vectorSource',
                defaultVal: '',
                required: '',
              },
              {
                name: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'Point',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'getCenterByCoordinates',
            desc: '获取source中所有Point的中心点',
            modifier: 'public',
            params: [
              {
                name: 'vectorSource',
                desc: '',
                type: 'vectorSource',
                defaultVal: '',
                required: '',
              },
              {
                name: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'Point',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'getCenterByPoints',
            desc: '获取一系列点中的中心点',
            modifier: 'public',
            params: [
              {
                name: 'points',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '{centerLon,centerLat}',
            returnDesc: '',
          },
          {
            name: 'getPointsExtent',
            desc: '获取一些列点的矩形范围(左上角[x,y]，右下角[x,y])',
            modifier: 'public',
            params: [
              {
                name: 'points',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '{leftTop,rightBottom}',
            returnDesc: '',
          },
          {
            name: 'getFlatternDistance',
            desc: '计算连个经纬度之间的距离(m)',
            modifier: 'public',
            params: [
              {
                name: 'lat1',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'lng1',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'lat2',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'lng2',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '距离',
          },
          {
            name: 'wrapLon',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'value',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getMapExtent',
            desc: '获取地图的矩形范围',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'array',
            returnDesc: '',
          },
          {
            name: 'getFeaturesInExtent',
            desc: 'feature是否在在数据中',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
              {
                name: 'feature',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'getLayersCount',
            desc: '获取layer数量',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'rgb',
            desc: 'rgb颜色随机',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'color16',
            desc: '16位随机颜色',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'downLoadMap',
            desc: '下载地图',
            modifier: 'public',
            params: [
              {
                name: 'map',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: '',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: '',
                desc: '',
                type: '',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
        ]}
      />

      <h2>OLMap使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <OLMapComponent zoom={11.5} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <OLMapComponent zoom={11.5} />
        </div>
      </Playground>

      <h2>添加新北区的GeoJSONLayer</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
    HeatMap,
    Util,
    AnimationManager,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <Button
      type="primary"
      style={{ marginBottom: 20 }}
      onClick={() => {
        xbqRef.current.addMainGeoJSONLayer({
          geoJSONStyle: {
            stroke: {
              color: 'rgb(30,144,255)',
              width: 3,
              lineDash: [1, 2, 3, 4, 5, 6],
            },
            fill: {
              color: 'rgba(30,144,255,0.1)',
            },
            text: {
              textAlign: 'center',
              color: '#000',
              font: '26px sans-serif',
              text: '新北区',
            },
          },
          geoJSONData: Resource.Dict.value.ResourceGisXinbeiquGeoJSON.value,
        });
      }}
    >
      添加新北区的GeoJSONLayer
    </Button>
    <OLMapComponent zoom={11.5} ref={xbqRef} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <Button
            type="primary"
            style={{ marginBottom: 20 }}
            onClick={() => {
              xbqRef.current.addMainGeoJSONLayer({
                geoJSONStyle: {
                  stroke: {
                    color: 'rgb(30,144,255)',
                    width: 3,
                    lineDash: [1, 2, 3, 4, 5, 6],
                  },
                  fill: {
                    color: 'rgba(30,144,255,0.1)',
                  },
                  text: {
                    textAlign: 'center',
                    color: '#000',
                    font: '26px sans-serif',
                    text: '新北区',
                  },
                },
                geoJSONData: Resource.Dict.value.ResourceGisXinbeiquGeoJSON.value,
              });
            }}
          >
            添加新北区的GeoJSONLayer
          </Button>
          <OLMapComponent zoom={11.5} ref={xbqRef} />
        </div>
      </Playground>

      <h2>使用不同的source</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
    HeatMap,
    Util,
    AnimationManager,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <Radio.Group
      defaultValue="OSM"
      size="large"
      onChange={(e) => {
        const v = e.target.value;
        const tileLayer = changeRef.current.getMap().getLayers().item(0);

        if (v === 'OSM') {
          tileLayer.setSource(TitleLayer.getOSM());
        } else if (v === 'SatGoogleXYZ') {
          tileLayer.setSource(
            TitleLayer.getXYZ({
              minZoom: 11,
              maxZoom: 17,
              url: 'http://172.26.250.43:80/mapservice/sat_google/{z}/{x}/{y}.png',
            }),
          );
        } else if (v === 'DixingGoogleXYZ') {
          tileLayer.setSource(
            TitleLayer.getXYZ({
              minZoom: 11,
              maxZoom: 17,
              url: 'http://172.26.250.43:80/mapservice/dixing_google/{z}/{x}/{y}.png',
            }),
          );
        } else if (v === 'DianziGaodeXYZ') {
          tileLayer.setSource(
            TitleLayer.getXYZ({
              minZoom: 11,
              maxZoom: 17,
              url: 'http://172.26.250.43:80/mapservice/dianzi_gaode/{z}/{x}/{y}.png',
            }),
          );
        }
      }}
    >
      <Radio.Button value="OSM">OSM</Radio.Button>
      <Radio.Button value="SatGoogleXYZ">谷歌卫星图</Radio.Button>
      <Radio.Button value="DixingGoogleXYZ">谷歌地形</Radio.Button>
      <Radio.Button value="DianziGaodeXYZ">高德电子地图</Radio.Button>
    </Radio.Group>

    <OLMapComponent zoom={11.5} ref={changeRef} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <Radio.Group
            defaultValue="OSM"
            size="large"
            onChange={(e) => {
              const v = e.target.value;
              const tileLayer = changeRef.current.getMap().getLayers().item(0);

              if (v === 'OSM') {
                tileLayer.setSource(TitleLayer.getOSM());
              } else if (v === 'SatGoogleXYZ') {
                tileLayer.setSource(
                  TitleLayer.getXYZ({
                    minZoom: 11,
                    maxZoom: 17,
                    url: 'http://172.26.250.43:80/mapservice/sat_google/{z}/{x}/{y}.png',
                  }),
                );
              } else if (v === 'DixingGoogleXYZ') {
                tileLayer.setSource(
                  TitleLayer.getXYZ({
                    minZoom: 11,
                    maxZoom: 17,
                    url: 'http://172.26.250.43:80/mapservice/dixing_google/{z}/{x}/{y}.png',
                  }),
                );
              } else if (v === 'DianziGaodeXYZ') {
                tileLayer.setSource(
                  TitleLayer.getXYZ({
                    minZoom: 11,
                    maxZoom: 17,
                    url: 'http://172.26.250.43:80/mapservice/dianzi_gaode/{z}/{x}/{y}.png',
                  }),
                );
              }
            }}
          >
            <Radio.Button value="OSM">OSM</Radio.Button>
            <Radio.Button value="SatGoogleXYZ">谷歌卫星图</Radio.Button>
            <Radio.Button value="DixingGoogleXYZ">谷歌地形</Radio.Button>
            <Radio.Button value="DianziGaodeXYZ">高德电子地图</Radio.Button>
          </Radio.Group>

          <OLMapComponent zoom={11.5} ref={changeRef} />
        </div>
      </Playground>

      <h2>热力图(HeatMap)</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
    HeatMap,
    Util,
    AnimationManager,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <Button
      type="primary"
      style={{ marginBottom: 20 }}
      onClick={() => {
        const dataSource = [
          [119.7493459, 31.8885404],
          [119.7497556, 31.8847773],
          [119.7550551, 31.8790072],
          [119.7612496, 31.8736603],
          [119.761142, 31.8647861],
          [119.7586592, 31.861709],
          [119.762329, 31.8558587],
          [119.7641014, 31.8555412],
          [119.7636422, 31.8544483],
          [119.7660109, 31.8504396],
          [119.7701492, 31.8512531],
          [119.7730089, 31.8507856],
        ];
  
        const feas = [];
        for (let i = 0, len = dataSource.length; i < len; i++) {
          const provinceInfo = dataSource[i];
          const fea = {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: fromLonLat(provinceInfo),
            },
          };
          feas.push(fea);
        }
  
        const heatData = {
          type: 'FeatureCollection',
          features: feas,
        };
  
        const vectorSource = new VectorSource({
          features: new GeoJSON().readFeatures(heatData, {
            dataProjection: 'EPSG:3857',
            featureProjection: 'EPSG:3857',
          }),
        });
  
        heatRef.current.addLayer();
  
        const layer = heatRef.current.getHeatmapLayer();
        layer.setSource(vectorSource);
      }}
    >
      添加新北区的GeoJSON数据
    </Button>
    <HeatMap zoom={11.5} ref={heatRef} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <Button
            type="primary"
            style={{ marginBottom: 20 }}
            onClick={() => {
              const dataSource = [
                [119.7493459, 31.8885404],
                [119.7497556, 31.8847773],
                [119.7550551, 31.8790072],
                [119.7612496, 31.8736603],
                [119.761142, 31.8647861],
                [119.7586592, 31.861709],
                [119.762329, 31.8558587],
                [119.7641014, 31.8555412],
                [119.7636422, 31.8544483],
                [119.7660109, 31.8504396],
                [119.7701492, 31.8512531],
                [119.7730089, 31.8507856],
              ];

              const feas = [];
              for (let i = 0, len = dataSource.length; i < len; i++) {
                const provinceInfo = dataSource[i];
                const fea = {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: fromLonLat(provinceInfo),
                  },
                };
                feas.push(fea);
              }

              const heatData = {
                type: 'FeatureCollection',
                features: feas,
              };

              const vectorSource = new VectorSource({
                features: new GeoJSON().readFeatures(heatData, {
                  dataProjection: 'EPSG:3857',
                  featureProjection: 'EPSG:3857',
                }),
              });

              heatRef.current.addLayer();

              const layer = heatRef.current.getHeatMapLayer();
              layer.setSource(vectorSource);
            }}
          >
            添加新北区的GeoJSON数据
          </Button>
          <HeatMap zoom={11.5} ref={heatRef} />
        </div>
      </Playground>

      <h2>Features</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
    HeatMap,
    Util,
    AnimationManager,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <Button
      type="primary"
      style={{ marginBottom: 20 }}
      onClick={() => {
        const { /* vectorLayer, */ vectorSource } = fRef.current.addDataLayer();

        vectorSource.addFeature(
          Util.drawCircle({
            center: fromLonLat([119.7493459, 31.8885404]),
            radius: 1250,
          }),
        );

        vectorSource.addFeature(
          Util.drawCirclePoint({
            id: 1,
            pos: fromLonLat([119.7497556, 31.8847773]),
          }),
        );

        vectorSource.addFeature(
          Util.drawImagePoint({
            id: 2,
            pos: fromLonLat([119.879673, 31.933156]),
            src: icon,
            scale: 2,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            id: 3,
            pos: fromLonLat([119.7730089, 31.8507856]),
            points: 3,
            radius: 10,
            radius2: 0,
            rotation: Math.PI / 4,
            angle: 0,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7641014, 31.8555412]),
            points: 4,
            radius: 10,
            angle: Math.PI / 4,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            radius: 10 / Math.SQRT2,
            radius2: 10,
            points: 4,
            angle: 0,
            scale: [1, 0.5],
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            points: 3,
            radius: 10,
            rotation: Math.PI / 4,
            angle: 0,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            points: 5,
            radius: 10,
            radius2: 4,
            angle: 0,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            points: 4,
            radius: 10,
            radius2: 0,
            angle: 0,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            points: 4,
            radius: 10,
            radius2: 0,
            angle: Math.PI / 4,
          }),
        );

        vectorSource.addFeature(
          Util.drawRegularShapePoint({
            pos: fromLonLat([119.7660109, 31.8504396]),
            points: 4,
            radius: 5,
            angle: Math.PI / 4,
            displacement: [0, 10],
          }),
        );

        vectorSource.addFeature(
          Util.drawPolygon({
            points: [
              [
                fromLonLat([119.7493459, 31.8885404]),
                fromLonLat([119.7497556, 31.8847773]),
                fromLonLat([119.7550551, 31.8790072]),
                fromLonLat([119.7612496, 31.8736603]),
                fromLonLat([119.761142, 31.8647861]),
                fromLonLat([119.7493459, 31.8885404]),
              ],
            ],
          }),
        );

        vectorSource.addFeature(
          Util.drawLine({
            points: [
              fromLonLat([119.7493459, 31.8885404]),
              fromLonLat([119.7497556, 31.8847773]),
              fromLonLat([119.7550551, 31.8790072]),
              fromLonLat([119.7612496, 31.8736603]),
              fromLonLat([119.761142, 31.8647861]),
              fromLonLat([119.7493459, 31.8885404]),
            ],
            width: 6,
            color: 'red',
          }),
        );
      }}
    >
      显示Features
    </Button>
    <OLMapComponent zoom={11.5} ref={fRef} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <Button
            type="primary"
            style={{ marginBottom: 20 }}
            onClick={() => {
              const { /* vectorLayer, */ vectorSource } = fRef.current.addDataLayer();

              vectorSource.addFeature(
                Util.drawCircle({
                  center: fromLonLat([119.7493459, 31.8885404]),
                  radius: 1250,
                }),
              );

              vectorSource.addFeature(
                Util.drawCirclePoint({
                  id: 1,
                  pos: fromLonLat([119.7497556, 31.8847773]),
                }),
              );

              vectorSource.addFeature(
                Util.drawImagePoint({
                  id: 2,
                  pos: fromLonLat([119.879673, 31.933156]),
                  src: icon,
                  scale: 2,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  id: 3,
                  pos: fromLonLat([119.7730089, 31.8507856]),
                  points: 3,
                  radius: 10,
                  radius2: 0,
                  rotation: Math.PI / 4,
                  angle: 0,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7641014, 31.8555412]),
                  points: 4,
                  radius: 10,
                  angle: Math.PI / 4,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  radius: 10 / Math.SQRT2,
                  radius2: 10,
                  points: 4,
                  angle: 0,
                  scale: [1, 0.5],
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  points: 3,
                  radius: 10,
                  rotation: Math.PI / 4,
                  angle: 0,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  points: 5,
                  radius: 10,
                  radius2: 4,
                  angle: 0,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  points: 4,
                  radius: 10,
                  radius2: 0,
                  angle: 0,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  points: 4,
                  radius: 10,
                  radius2: 0,
                  angle: Math.PI / 4,
                }),
              );

              vectorSource.addFeature(
                Util.drawRegularShapePoint({
                  pos: fromLonLat([119.7660109, 31.8504396]),
                  points: 4,
                  radius: 5,
                  angle: Math.PI / 4,
                  displacement: [0, 10],
                }),
              );

              vectorSource.addFeature(
                Util.drawPolygon({
                  points: [
                    [
                      fromLonLat([119.7493459, 31.8885404]),
                      fromLonLat([119.7497556, 31.8847773]),
                      fromLonLat([119.7550551, 31.8790072]),
                      fromLonLat([119.7612496, 31.8736603]),
                      fromLonLat([119.761142, 31.8647861]),
                      fromLonLat([119.7493459, 31.8885404]),
                    ],
                  ],
                }),
              );

              vectorSource.addFeature(
                Util.drawLine({
                  points: [
                    fromLonLat([119.7493459, 31.8885404]),
                    fromLonLat([119.7497556, 31.8847773]),
                    fromLonLat([119.7550551, 31.8790072]),
                    fromLonLat([119.7612496, 31.8736603]),
                    fromLonLat([119.761142, 31.8647861]),
                    fromLonLat([119.7493459, 31.8885404]),
                  ],
                  width: 6,
                  color: 'red',
                }),
              );
            }}
          >
            显示Features
          </Button>
          <OLMapComponent zoom={11.5} ref={fRef} />
        </div>
      </Playground>

      <h2>轨迹播放</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { OLMap, Resource } from '@baifendian/adhere';
  import 'ol/ol.css';
  
  const {
    OLMap: OLMapComponent,
    HeatMap,
    Util,
    AnimationManager,
  } = OLMap;
  
  <div style={{ width: '100%', height: 500 }}>
    <Button
      type="primary"
      style={{ marginBottom: 20 }}
      onClick={() => {
        const { /* vectorLayer, */ vectorSource } = animationRef.current.addDataLayer();

        const lineData = new Map();
        const lines = [];
        
        const ps =
          Resource.Dict.value.ResourceGisXinbeiquGeoJSON.value.features[0].geometry
            .coordinates[0][0];

        const lineCount = 100;

        const count = Math.floor(ps.length / lineCount);

        for (let i = 0; i < lineCount; i++) {
          lines.push(ps.slice(i * count, count * (i + 1)));
        }

        if (ps.length % lineCount !== 0) {
          lines.push(ps.slice(ps.length - (ps.length % lineCount)));
        }

        lines.forEach((line, index) => {
          const points = line.map((t) => fromLonLat(t));

          // 画线
          vectorSource.addFeature(
            Util.drawLine({
              points,
              width: 6,
              color: 'red',
            }),
          );

          lineData.set(index, line);
        });

        const animationManager = new AnimationManager(vectorSource, {
          // eslint-disable-next-line global-require
          arrowImg: require('./Triangle.png'),
          // eslint-disable-next-line global-require
          pointImg: require('./selected.png'),
          lineWidth: 8,
          lineColor: '#ff5d00',
        });

        // 播放
        animationManager.run(lineData, []);
      }}
    >
      轨迹播放
    </Button>
    <OLMapComponent zoom={11.5} ref={animationRef} />
  </div>
      `}
      >
        <div style={{ width: '100%', height: 500 }}>
          <Button
            type="primary"
            style={{ marginBottom: 20 }}
            onClick={() => {
              const { /* vectorLayer, */ vectorSource } = animationRef.current.addDataLayer();

              const lineData = new Map();
              const lines = [
                // [
                //   [119.7493459, 31.8885404],
                //   [119.7497556, 31.8847773],
                //   [119.7550551, 31.8790072],
                //   [119.7612496, 31.8736603],
                //   [119.761142, 31.8647861],
                //   [119.7586592, 31.861709],
                //   [119.762329, 31.8558587],
                //   [119.7641014, 31.8555412],
                //   [119.7636422, 31.8544483],
                //   [119.7660109, 31.8504396],
                // ],
                // [
                //   [119.7701492, 31.8512531],
                //   [119.7730089, 31.8507856],
                //   [119.7768279, 31.8550737],
                //   [119.7844788, 31.8557137],
                //   [119.7836429, 31.8523682],
                //   [119.7894948, 31.8553254],
                //   [119.7937172, 31.8560175],
                // ],
                // [
                //   [119.7947542, 31.8543187],
                //   [119.8034432, 31.8545966],
                //   [119.8066016, 31.8541387],
                //   [119.7996172, 31.8406124],
                //   [119.7951246, 31.8338677],
                //   [119.789886, 31.8310034],
                //   [119.7861563, 31.8304572],
                //   [119.7891152, 31.8238911],
                //   [119.7863096, 31.8209025],
                // ],
                // [
                //   [119.7839392, 31.8231054],
                //   [119.7816476, 31.8199605],
                //   [119.7834554, 31.8140653],
                //   [119.7856429, 31.8137898],
                //   [119.7843156, 31.812184],
                //   [119.7831177, 31.8107599],
                //   [119.7836658, 31.8101545],
                //   [119.7846634, 31.8098657],
                //   [119.7857849, 31.809761],
                //   [119.7874857, 31.8100542],
                //   [119.7883484, 31.8108188],
                // ],
                // [
                //   [119.7892111, 31.8112168],
                //   [119.7917375, 31.8118242],
                //   [119.7925756, 31.8122012],
                //   [119.7929576, 31.8125992],
                //   [119.7936971, 31.8120651],
                // ],
                // [
                //   [119.7936478, 31.811688],
                //   [119.7944612, 31.8113529],
                //   [119.7943133, 31.8110178],
                //   [119.7947323, 31.8105674],
                //   [119.7953276, 31.8105798],
                //   [119.7957016, 31.81087],
                //   [119.795978, 31.8106973],
                //   [119.7963764, 31.8112155],
                //   [119.7966692, 31.8110358],
                //   [119.797035, 31.8114021],
                //   [119.7977099, 31.8123003],
                //   [119.7978481, 31.812093],
                //   [119.7981002, 31.8117475],
                // ],
              ];
              const ps =
                Resource.Dict.value.ResourceGisXinbeiquGeoJSON.value.features[0].geometry
                  .coordinates[0][0];

              const lineCount = 100;

              const count = Math.floor(ps.length / lineCount);

              for (let i = 0; i < lineCount; i++) {
                lines.push(ps.slice(i * count, count * (i + 1)));
              }

              if (ps.length % lineCount !== 0) {
                lines.push(ps.slice(ps.length - (ps.length % lineCount)));
              }

              lines.forEach((line, index) => {
                const points = line.map((t) => fromLonLat(t));

                // 画线
                vectorSource.addFeature(
                  Util.drawLine({
                    points,
                    width: 6,
                    color: 'red',
                  }),
                );

                lineData.set(index, line);
              });

              const animationManager = new AnimationManager(vectorSource, {
                // eslint-disable-next-line global-require
                arrowImg: require('./Triangle.png'),
                // eslint-disable-next-line global-require
                pointImg: require('./selected.png'),
                lineWidth: 8,
                lineColor: '#ff5d00',
              });

              // 播放
              animationManager.run(lineData, []);
            }}
          >
            轨迹播放
          </Button>
          <OLMapComponent zoom={11.5} ref={animationRef} />
        </div>
      </Playground>

      <h3>风场</h3>
      <Playground mode="code" scope={{ React }}>
        <div style={{ width: '100%', height: 500 }}>
          <Button
            type="primary"
            style={{ marginBottom: 20 }}
            onClick={() => {
              windRef.current.addWindLayer();
            }}
          >
            添加风场Layer
          </Button>
          <OLMapComponent zoom={5} ref={windRef} />
        </div>
      </Playground>
    </div>
  );
};
