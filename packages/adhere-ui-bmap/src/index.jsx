import React from 'react';
import ReactDOM from 'react-dom';

import Intl from '@baifendian/adhere-util-intl';
import BaseUtil from '@baifendian/adhere-util/lib/base';

import BMap from './bmap';
import citys from './citys.json';
import isoline from './isoline';
import icon from './站点.svg';

import './index.less';
import styles from './temp.less';

const ref = React.createRef();

let vectorSource = null;

let WindLayer,
  HeatMpLayer,
  BMapAirPressureLayer,
  VectorLayer,
  VectorSource,
  Feature,
  InnerTextFeature,
  PointGeometry,
  MulitPointGeometry,
  CircleGeometry,
  MulitCircleGeometry,
  LineStringGeometry,
  MulitLineStringGeometry,
  PolygonGeometry,
  MulitPolygonGeometry,
  RectGeometry,
  MulitRectGeometry,
  RegularPolygonGeometry,
  MulitRegularPolygonGeometry,
  StartGeometry,
  MulitStartGeometry,
  SectorGeometry,
  MulitSectorGeometry,
  RadiusRectGeometry,
  MulitRadiusRectGeometry,
  LeafGeometry,
  MulitLeafGeometry,
  TextGeometry,
  InteractionLayerModule,
  InteractionLayer,
  PolygonDrawAction,
  DistanceDrawAction,
  CircleDrawAction,
  RectangleDrawAction,
  TriangleDrawAction,
  DiamondDrawAction,
  StartDrawAction,
  FreeDrawAction,
  CircleModifyAction,
  DiamondModifyAction,
  PolygonModifyAction,
  RectangleModifyAction,
  TriangleModifyAction,
  StartModifyAction,
  Types,
  InteractionLayerActions,
  ActionEvents,
  Trajectory,
  TrajectoryPlayBackLayer;

let interactionLayer;
let trajectoryPlayBackLayer;
let trajector;

// ActionType
let typeActionMap;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

Intl.init({
  currentLocale: 'zh_CN',
}).then(() => {
  ReactDOM.render(
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <button
          onClick={() => {
            const map = ref.current.getMap();
            map.addOverlay(new WindLayer());
          }}
        >
          加入风场
        </button>
        <button
          onClick={() => {
            const points = citys.map((t) => {
              return {
                lng: t[0],
                lat: t[1],
                count: getRandomArbitrary(1, 100),
              };
            });

            const map = ref.current.getMap();

            const heatMapOverlay = new HeatMpLayer({ radius: 10, visible: true });

            map.addOverlay(heatMapOverlay);

            heatMapOverlay.setDataSet({ data: points, max: 100 });
          }}
        >
          加入热力图
        </button>
        <button
          onClick={() => {
            const map = ref.current.getMap();

            const data = [];

            for (let i = 0; i < isoline.length; i++) {
              const bPoints = [];

              const { points } = isoline[i];

              points.forEach((p, index) => {
                if (index % 2 === 1) {
                  bPoints.push({ lng: points[index - 1], lat: p });
                }
              });

              data.push(bPoints);
            }

            map.addOverlay(
              new BMapAirPressureLayer({
                map,
                data,
                paneName: 'markerShadow',
                zIndex: 2,
                style: {
                  strokeStyle: '#ccc',
                  lineJoin: 'round',
                  lineWidth: 1,
                },
              }),
            );
          }}
        >
          加入气压
        </button>

        <button
          onClick={() => {
            const map = ref.current.getMap();

            const pointGeom = new PointGeometry({ lng: 121.487899486, lat: 31.24916171 });

            // const mulitPointGemo = new MulitPointGeometry(
            //   citys.map((city) => ({
            //     lng: city[0],
            //     lat: city[1],
            //   })),
            // );

            // const circleGemo = new CircleGeometry({
            //   center: { lng: 121.487899486, lat: 31.24916171 },
            //   radius: 20000
            // });

            // const mulitCircleGemo = new MulitCircleGeometry([
            //   {
            //     center: { lng: 121.487899486, lat: 31.24916171 },
            //     radius: 20000000,
            //   },
            //   {
            //     center: {
            //       lng: 116.988692412,
            //       lat: 33.6367723858,
            //     },
            //     radius: 20000000,
            //   },
            //   {
            //     center: {
            //       lng: 121.360525873,
            //       lat: 38.9658447898,
            //     },
            //     radius: 20000000,
            //   },
            // ]);

            // const lineStringGemo = new LineStringGeometry({
            //   point1: {
            //     lng: 121.48789948,
            //     lat: 31.24916171,
            //   },
            //   point2: {
            //     lng: 123.471095,
            //     lat: 41.6862,
            //   },
            // });

            // const mulitLineStringGemo = new MulitLineStringGeometry([
            //   {
            //     point1: {
            //       lng: 121.48789948,
            //       lat: 31.24916171,
            //     },
            //     point2: {
            //       lng: 123.471095,
            //       lat: 41.6862,
            //     },
            //   },
            //   {
            //     point1: {
            //       lng: 121.623353,
            //       lat: 38.921873,
            //     },
            //     point2: {
            //       lng: 120.380834,
            //       lat: 36.073394,
            //     },
            //   },
            // ]);

            // const polygonGeom = new PolygonGeometry(
            //   citys.map((city) => ({
            //     lng: city[0],
            //     lat: city[1],
            //   })),
            // );

            // const mulitPolygonGemo = new MulitPolygonGeometry([
            //   [
            //     {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     {
            //       lng: 103.725020656,
            //       lat: 27.3406329636,
            //     },
            //     {
            //       lng: 99.7136815989,
            //       lat: 27.8310294612,
            //     },
            //     {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //   ],
            //   [
            //     {
            //       lng: 109.993706251,
            //       lat: 39.8164895606,
            //     },
            //     {
            //       lng: 121.360525873,
            //       lat: 38.9658447898,
            //     },
            //     {
            //       lng: 124.832994532,
            //       lat: 45.1360489701,
            //     },
            //     {
            //       lng: 109.993706251,
            //       lat: 39.8164895606,
            //     },
            //   ],
            //   [
            //     {
            //       lng: 106.757915842,
            //       lat: 31.8691891592,
            //     },
            //     {
            //       lng: 104.776071339,
            //       lat: 29.3591568895,
            //     },
            //     {
            //       lng: 106.285267996,
            //       lat: 36.0215234807,
            //     },
            //     {
            //       lng: 106.757915842,
            //       lat: 31.8691891592,
            //     },
            //   ],
            // ]);

            // const rectGeom = new RectGeometry({
            //   leftTop: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   width: 200000000,
            //   height: 30000000,
            // });

            // const mulitRectGeom = new MulitRectGeometry([
            //   {
            //     leftTop: {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     width: 2000000,
            //     height: 3000000,
            //   },
            //   {
            //     leftTop: {
            //       lng: 106.635720331,
            //       lat: 30.4639838879,
            //     },
            //     width: 2000000,
            //     height: 3000000,
            //   },
            //   {
            //     leftTop: {
            //       lng: 116.988692412,
            //       lat: 33.6367723858,
            //     },
            //     width: 2000000,
            //     height: 3000000,
            //   },
            // ]);

            // const radiusRectGeom = new RadiusRectGeometry({
            //   leftTop: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   width: 100000000,
            //   height: 20000000,
            //   radius: 100000000 / 10
            // });

            // const mulitRadiusRectGeom = new MulitRadiusRectGeometry([
            //   {
            //     leftTop: {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     width: 100000000,
            //     height: 20000000,
            //     radius: 100000000 / 10,
            //   },
            //   {
            //     leftTop: {
            //       lng: 106.635720331,
            //       lat: 30.4639838879,
            //     },
            //     width: 100000000,
            //     height: 20000000,
            //     radius: 100000000 / 10,
            //   },
            //   {
            //     leftTop: {
            //       lng: 116.988692412,
            //       lat: 33.6367723858,
            //     },
            //     width: 100000000,
            //     height: 20000000,
            //     radius: 100000000 / 10,
            //   },
            // ]);

            // const regularPolygonGeom = new RegularPolygonGeometry({
            //   n: 7,
            //   center: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   size: 20000000,
            // });

            // const mulitRegularPolygonGeom = new MulitRegularPolygonGeometry([
            //   {
            //     n: 3,
            //     center: {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     size: 20000000,
            //   },
            //   {
            //     n: 4,
            //     center: {
            //       lng: 118.181882949,
            //       lat: 26.6436264742,
            //     },
            //     size: 20000000,
            //   },
            //   {
            //     n: 5,
            //     center: {
            //       lng: 114.316200103,
            //       lat: 30.5810841269,
            //     },
            //     size: 20000000,
            //   },
            //   {
            //     n: 6,
            //     center: {
            //       lng: 105.564887792,
            //       lat: 30.5574913504,
            //     },
            //     size: 20000000,
            //   }
            // ]);

            // const startGeom = new StartGeometry({
            //   center: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   innerRadius: 20000000 / 2,
            //   outRadius: 20000000,
            // });

            // const mulitStartGeom = new MulitStartGeometry([
            //   {
            //     center: {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     innerRadius: 20000000 / 2,
            //     outRadius: 21000000,
            //   },
            //   {
            //     center: {
            //       lng: 118.181882949,
            //       lat: 26.6436264742,
            //     },
            //     innerRadius: 20000000 / 2,
            //     outRadius: 21000000,
            //   },
            //   {
            //     center: {
            //       lng: 114.316200103,
            //       lat: 30.5810841269,
            //     },
            //     innerRadius: 20000000 / 2,
            //     outRadius: 21000000,
            //   },
            //   {
            //     center: {
            //       lng: 105.564887792,
            //       lat: 30.5574913504,
            //     },
            //     innerRadius: 20000000 / 2,
            //     outRadius: 21000000,
            //   },
            // ]);

            // const sectorGeom = new SectorGeometry({
            //   center: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   radius: 20000000,
            //   angle1: 0,
            //   angle2: 90,
            // });

            // const mulitSectorGeom = new MulitSectorGeometry([
            //   {
            //     center: {
            //       lng: 121.487899486,
            //       lat: 31.24916171,
            //     },
            //     radius: 21000000,
            //     angle1: 0,
            //     angle2: 90,
            //   },
            //   {
            //     center: {
            //       lng: 118.181882949,
            //       lat: 26.6436264742,
            //     },
            //     radius: 21000000,
            //     angle1: 20,
            //     angle2: 180,
            //   },
            //   {
            //     center: {
            //       lng: 114.316200103,
            //       lat: 30.5810841269,
            //     },
            //     radius: 21000000,
            //     angle1: 180,
            //     angle2: 360,
            //   },
            //   {
            //     center: {
            //       lng: 105.564887792,
            //       lat: 30.5574913504,
            //     },
            //     radius: 21000000,
            //     angle1: 90,
            //     angle2: 270,
            //   },
            // ]);

            // const leafGeom = new LeafGeometry({
            //   center: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   n: 10,
            //   size: 20000000,
            //   length: 20000000 * 4,
            // });

            // const mulitLeafGemo = new MulitLeafGeometry(citys.map(city => ({
            //   center: {
            //     lng: city[0],
            //     lat: city[1],
            //   },
            //   n: 10,
            //   size: 2000000,
            //   length: 2000000 * 4,
            // })));

            // const textGemo = new TextGeometry({
            //   point: {
            //     lng: 121.487899486,
            //     lat: 31.24916171,
            //   },
            //   text: '上海',
            // });

            // const feature = new /*InnerText*/ Feature({
            //   name: 'f1',
            //   id: 'f1',
            //   geometry: pointGeom,
            //   text: '蜜雪冰城',
            //   textStyle: {
            //     font: '10px sans-serif',
            //     textAlign: 'center',
            //     textBaseline: 'middle',
            //     direction: 'inherit',
            //     strokeStyle: 'yellow',
            //     fillStyle: 'yellow',
            //   },
            //   /*{
            //     // radius: 10,
            //     lineWidth: 2,
            //     strokeStyle: 'blue',
            //     fillStyle: 'red',
            //   }*/
            //   style: {
            //     lineWidth: 1,
            //     strokeStyle: 'yellow',
            //     fillStyle: 'red',
            //     radius: 30,
            //     img: {
            //       src: icon,
            //       width: 32,
            //       height: 32,
            //     },
            //     regularPolygon: {
            //       n: 3,
            //       size: 10,
            //     },
            //     start: {
            //       innerRadius: 20 / 2,
            //       outRadius: 20,
            //     },
            //     sector: {
            //       radius: 20,
            //       angle1: 180,
            //       angle2: 360,
            //     },
            //     rect: {
            //       width: 50,
            //       height: 50,
            //     },
            //     radiusRect: {
            //       width: 30,
            //       height: 20,
            //       radius: 3,
            //     },
            //     leaf: {
            //       n: 4,
            //       size: 15,
            //       length: 60,
            //     },
            //     pointType: 'image', // 'circle' | 'image' | 'regularPolygon' | 'start' | 'sector' | 'rect' | 'radiusRect' | 'leaf';
            //     arrow: {
            //       // 是否绘制
            //       draw: true,
            //       // 箭头方向 箭头绘制在开始 | 结束 | 双向
            //       direction: 'bothEnds' /* | 'end' | 'bothEnds';*/,
            //       // 箭头的类型 尖的箭头，还是方形的箭头
            //       type: 'normal' /* | 'square';*/,
            //       // 箭头的大小 小 | 中 | 大
            //       size: 'normal' /* | 'normal' | 'large';*/,
            //     },
            //     // font: 'bold 30px sans-serif',
            //     // textAlign: 'center',
            //     // textBaseline: 'middle',
            //     // direction: 'inherit',
            //     // strokeStyle: 'red',
            //     // fillStyle: 'red',
            //   },
            // });

            vectorSource = new VectorSource([
              /* feature */
            ]);

            const vectorLayer = new VectorLayer(map, {
              paneName: 'vertexPane',
              zIndex: 9999,
              source: vectorSource,
            });

            const geom = new Map([
              // 正多边形
              [
                0,
                {
                  getGeom: (point) =>
                    new RegularPolygonGeometry({
                      n: [4, 5, 6, 7][Math.floor(Math.random() * 4)],
                      center: {
                        lng: point.lng,
                        lat: point.lat,
                      },
                      size: 2000,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // 矩形
              [
                1,
                {
                  getGeom: (point) =>
                    new RectGeometry({
                      leftTop: {
                        lng: point.lng,
                        lat: point.lat,
                      },
                      width: 2000,
                      height: 3000,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // 圆角矩形
              [
                2,
                {
                  getGeom: (point) =>
                    new RadiusRectGeometry({
                      leftTop: {
                        lng: point.x,
                        lat: point.y,
                      },
                      width: 1000,
                      height: 2000,
                      radius: 1000 / 10,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // 圆形
              [
                3,
                {
                  getGeom: (point) =>
                    new CircleGeometry({
                      center: { lng: point.lng, lat: point.lat },
                      radius: 2000,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // 扇形
              [
                4,
                {
                  getGeom: (point) =>
                    new SectorGeometry({
                      center: {
                        lng: point.lng,
                        lat: point.lat,
                      },
                      radius: 2000,
                      angle1: 0,
                      angle2: 90,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // 五角星
              [
                5,
                {
                  getGeom: (point) =>
                    new StartGeometry({
                      center: {
                        lng: point.x,
                        lat: point.y,
                      },
                      innerRadius: 2000 / 2,
                      outRadius: 2000,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
              // n叶草
              [
                6,
                {
                  getGeom: (point) =>
                    new LeafGeometry({
                      center: {
                        lng: point.x,
                        lat: point.y,
                      },
                      n: [6, 7, 8, 9, 10][Math.floor(Math.random() * 5)],
                      size: 2000,
                      length: 2000 * 4,
                    }),
                  getStyle: () => ({ ...defaultStyle }),
                },
              ],
            ]);

            // const features = citys.map((city => {
            //   return new Feature({
            //     name: BaseUtil.uuid(),
            //     id: BaseUtil.uuid(),
            //     geometry: new PointGeometry({ lng: city[0], lat: city[1] }),
            //     style: {
            //       lineWidth: 1,
            //       strokeStyle: 'yellow',
            //       fillStyle: 'red',
            //       radius: 30,
            //       img: {
            //         src: icon,
            //         width: 32,
            //         height: 32,
            //       },
            //       regularPolygon: {
            //         n: 3,
            //         size: 10,
            //       },
            //       start: {
            //         innerRadius: 20 / 2,
            //         outRadius: 20,
            //       },
            //       sector: {
            //         radius: 20,
            //         angle1: 180,
            //         angle2: 360,
            //       },
            //       rect: {
            //         width: 50,
            //         height: 50,
            //       },
            //       radiusRect: {
            //         width: 30,
            //         height: 20,
            //         radius: 3,
            //       },
            //       leaf: {
            //         n: 4,
            //         size: 15,
            //         length: 60,
            //       },
            //       pointType: 'image', // 'circle' | 'image' | 'regularPolygon' | 'start' | 'sector' | 'rect' | 'radiusRect' | 'leaf';
            //       arrow: {
            //         // 是否绘制
            //         draw: true,
            //         // 箭头方向 箭头绘制在开始 | 结束 | 双向
            //         direction: 'bothEnds' /* | 'end' | 'bothEnds';*/,
            //         // 箭头的类型 尖的箭头，还是方形的箭头
            //         type: 'normal' /* | 'square';*/,
            //         // 箭头的大小 小 | 中 | 大
            //         size: 'normal' /* | 'normal' | 'large';*/,
            //       },
            //     },
            //   });
            // }));

            const defaultStyle = {
              lineWidth: 1,
              strokeStyle: 'yellow',
              fillStyle: 'red',
            };

            const features = citys.map(
              (city, i) =>
                new Feature({
                  id: BaseUtil.uuid(),
                  name: BaseUtil.uuid(),
                  geometry: geom.get(i % geom.size).getGeom({
                    lng: city[0],
                    lat: city[1],
                  }),
                  style: geom.get(i % geom.size).getStyle(),
                }),
            );

            map.addOverlay(vectorLayer);

            vectorSource.addFeatures(features);

            // setTimeout(() => {
            //   debugger;
            //   feature.getGeometry().setCoordinates({
            //     lng: 123.471095,
            //     lat: 41.6862,
            //   });
            // }, 3000);
          }}
        >
          添加VectorLayer
        </button>

        <button
          onClick={() => {
            if (!vectorSource) {
              alert('没有初始化source');
              return;
            }

            vectorSource.appendGeoJSON(
              {
                type: 'GeometryCollection',
                geometries: [
                  {
                    type: 'Point',
                    coordinates: [100.624066094, 36.2843638038],
                  },
                  {
                    type: 'LineString',
                    coordinates: [
                      [121.48789948, 31.24916171],
                      [123.471095, 41.6862],
                    ],
                  },
                  {
                    type: 'Polygon',
                    coordinates: citys.map((city) => [city[0], city[1]]),
                  },
                ],
              },
              (geom) => {
                const feature = new Feature();
                feature.setGeometry(geom);

                feature.setStyle({
                  lineWidth: 1,
                  strokeStyle: 'yellow',
                  fillStyle: 'red',

                  pointType: 'circle',
                  radius: 30,

                  arrow: {
                    // 是否绘制
                    draw: true,
                    // 箭头方向 箭头绘制在开始 | 结束 | 双向
                    direction: 'bothEnds' /* 'start' | 'end' | 'bothEnds';*/,
                    // 箭头的类型 尖的箭头，还是方形的箭头
                    type: 'normal' /* normal' | 'square */,
                    // 箭头的大小 小 | 中 | 大
                    size: 'normal' /* small' | 'normal' | 'large */,
                  },
                });

                return feature;
              },
            );
          }}
        >
          载入GeoJSON
        </button>

        <button
          onClick={() => {
            const map = ref.current.getMap();

            if (!interactionLayer) {
              interactionLayer = new InteractionLayer(map, [], {
                [InteractionLayerActions.CanvasMount]: () => {
                  const action = new CircleDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  interactionLayer.changeAction(action);
                  action.start();
                },
              });

              // 点击了画布中的几何图形
              interactionLayer.emitter.on(InteractionLayerActions.CanvasClickGeometry, (data) => {
                const Component = typeActionMap.get(data.type);

                const action = new Component({
                  selectType: data.type,
                  actionType: 'Draw',
                  data,
                });

                action.on(ActionEvents.End, () => {
                  action.start();
                });

                interactionLayer.changeAction(action);

                action.start();
              });

              // 点击了画布的空位置
              interactionLayer.emitter.on(InteractionLayerActions.CanvasClickEmpty, () => {
                interactionLayer.changeAction(null);
              });

              map.addOverlay(interactionLayer);
            } else {
              const action = new CircleDrawAction();
              action.on(ActionEvents.End, (data) => {
                // action.start();
              });
              interactionLayer.changeAction(action);
              action.start();
            }
          }}
        >
          交互式绘制
        </button>

        <button
          onClick={() => {
            const map = ref.current.getMap();

            if (!interactionLayer) {
              interactionLayer = new InteractionLayer(map, [], {
                [InteractionLayerActions.CanvasMount]: () => {
                  const action = new DistanceDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  interactionLayer.changeAction(action);
                  action.start();
                },
              });

              // 点击了画布中的几何图形
              interactionLayer.emitter.on(InteractionLayerActions.CanvasClickGeometry, (data) => {
                const Component = typeActionMap.get(data.type);

                const action = new Component({
                  selectType: data.type,
                  actionType: 'Draw',
                  data,
                });

                action.on(ActionEvents.End, () => {
                  action.start();
                });

                interactionLayer.changeAction(action);

                action.start();
              });

              // 点击了画布的空位置
              interactionLayer.emitter.on(InteractionLayerActions.CanvasClickEmpty, () => {
                interactionLayer.changeAction(null);
              });

              map.addOverlay(interactionLayer);
            } else {
              const action = new DistanceDrawAction();
              action.on(ActionEvents.End, (data) => {
                // action.start();
              });
              interactionLayer.changeAction(action);
              action.start();
            }
          }}
        >
          测距
        </button>

        <button
          onClick={() => {
            const map = ref.current.getMap();

            if (!trajectoryPlayBackLayer) {
              trajectoryPlayBackLayer = new TrajectoryPlayBackLayer(map, {
                paneName: 'floatPane',
                zIndex: 20001,
              });

              map.addOverlay(trajectoryPlayBackLayer);

              trajector = new Trajectory({
                context: trajectoryPlayBackLayer,
                id: '1',
                coordinates: citys.map((t) => ({ lng: t[0], lat: t[1] })),
                duration: 60 * 2,
              });

              trajectoryPlayBackLayer.addTrajectory(trajector);

              setTimeout(() => {
                trajector.start();
                // setTimeout(() => {
                //   trajector.pause();
                // },5000);
              }, 3000);
            } else {
              if (trajector) {
                trajectoryPlayBackLayer.removeTrajectory(trajector);
              }
            }
          }}
        >
          轨迹回放
        </button>
      </div>

      <div className={styles.Auto}>
        <BMap
          ref={ref}
          ak="bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp"
          /*zoom={15}*/
          zoom={6}
          onBMapScriptReady={() => {
            import('./windlayer').then((res) => {
              WindLayer = res.default;
            });
            import('./heatmaplayer').then((res) => {
              HeatMpLayer = res.default;
            });
            import('./airpressurelayer').then((res) => {
              BMapAirPressureLayer = res.default;
            });
            import('./vector/VectorLayer').then((res) => {
              VectorLayer = res.default;
            });
            import('./vector/VectorSource').then((res) => {
              VectorSource = res.default;
            });
            import('./vector/Feature').then((res) => {
              Feature = res.default;
            });

            import('./vector/InnerTextFeature').then((res) => {
              InnerTextFeature = res.default;
            });

            import('./vector/geom/PointGeometry').then((res) => {
              PointGeometry = res.default;
            });
            import('./vector/geom/MulitPointGeometry').then((res) => {
              MulitPointGeometry = res.default;
            });
            import('./vector/geom/CircleGeometry').then((res) => {
              CircleGeometry = res.default;
            });
            import('./vector/geom/MulitCircleGeometry').then((res) => {
              MulitCircleGeometry = res.default;
            });
            import('./vector/geom/LineStringGeometry').then((res) => {
              LineStringGeometry = res.default;
            });
            import('./vector/geom/MulitLineStringGeometry').then((res) => {
              MulitLineStringGeometry = res.default;
            });
            import('./vector/geom/PolygonGeometry').then((res) => {
              PolygonGeometry = res.default;
            });
            import('./vector/geom/MulitPolygonGeometry').then((res) => {
              MulitPolygonGeometry = res.default;
            });
            import('./vector/geom/RectGeometry').then((res) => {
              RectGeometry = res.default;
            });
            import('./vector/geom/MulitRectGeometry').then((res) => {
              MulitRectGeometry = res.default;
            });
            import('./vector/geom/RegularPolygonGeometry').then((res) => {
              RegularPolygonGeometry = res.default;
            });
            import('./vector/geom/MulitRegularPolygonGeometry').then((res) => {
              MulitRegularPolygonGeometry = res.default;
            });

            import('./vector/geom/StartGeometry').then((res) => {
              StartGeometry = res.default;
            });
            import('./vector/geom/MulitStartGeometry').then((res) => {
              MulitStartGeometry = res.default;
            });
            import('./vector/geom/SectorGeometry').then((res) => {
              SectorGeometry = res.default;
            });
            import('./vector/geom/MulitSectorGeometry').then((res) => {
              MulitSectorGeometry = res.default;
            });
            import('./vector/geom/RadiusRectGeometry').then((res) => {
              RadiusRectGeometry = res.default;
            });
            import('./vector/geom/MulitRadiusRectGeometry').then((res) => {
              MulitRadiusRectGeometry = res.default;
            });

            import('./vector/geom/LeafGeometry').then((res) => {
              LeafGeometry = res.default;
            });
            import('./vector/geom/MulitLeafGeometry').then((res) => {
              MulitLeafGeometry = res.default;
            });

            import('./vector/geom/TextGeometry').then((res) => {
              TextGeometry = res.default;
            });

            import('./vector/trajectory/playback/Trajectory').then((res) => {
              Trajectory = res.default;
            });

            import('./vector/trajectory/playback/TrajectoryPlayBackLayer').then((res) => {
              TrajectoryPlayBackLayer = res.default;
            });

            import('./vector/interaction').then((res) => {
              InteractionLayerModule = res;

              InteractionLayer = InteractionLayerModule.InteractionLayer;
              PolygonDrawAction = InteractionLayerModule.PolygonDrawAction;
              DistanceDrawAction = InteractionLayerModule.DistanceDrawAction;
              CircleDrawAction = InteractionLayerModule.CircleDrawAction;
              RectangleDrawAction = InteractionLayerModule.RectangleDrawAction;
              TriangleDrawAction = InteractionLayerModule.TriangleDrawAction;
              DiamondDrawAction = InteractionLayerModule.DiamondDrawAction;
              StartDrawAction = InteractionLayerModule.StartDrawAction;
              FreeDrawAction = InteractionLayerModule.FreeDrawAction;
              CircleModifyAction = InteractionLayerModule.CircleModifyAction;
              DiamondModifyAction = InteractionLayerModule.DiamondModifyAction;
              PolygonModifyAction = InteractionLayerModule.PolygonModifyAction;
              RectangleModifyAction = InteractionLayerModule.RectangleModifyAction;
              TriangleModifyAction = InteractionLayerModule.TriangleModifyAction;
              StartModifyAction = InteractionLayerModule.StartModifyAction;
              Types = InteractionLayerModule.Types;

              InteractionLayerActions = Types.InteractionLayerActions;
              ActionEvents = Types.ActionEvents;

              typeActionMap = new Map([
                ['Polygon', PolygonModifyAction],
                ['Circle', CircleModifyAction],
                ['Rectangle', RectangleModifyAction],
                ['Triangle', TriangleModifyAction],
                ['Diamond', DiamondModifyAction],
                ['Start', StartModifyAction],
              ]);
            });
          }}
        />
      </div>
    </div>,
    document.getElementById('app'),
  );
});
