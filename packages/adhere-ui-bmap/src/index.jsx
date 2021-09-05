import React from 'react';
import ReactDOM from 'react-dom';

import BMap from './bmap';

import styles from './temp.less';

import './index.less';

import citys from './citys.json';

import isoline from './isoline';

import icon from './站点.svg';

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
  PolygonSelectionModule,
  PolygonSelection,
  PolygonDrawAction,
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
  PolygonSelectionActions,
  ActionEvents;

let polygonSelection;

// ActionType
let typeActionMap;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

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
              paneName: 'floatShadow',
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

          // const pointGeom = new PointGeometry({ lng: 121.487899486, lat: 31.24916171 });

          const mulitPointGemo = new MulitPointGeometry(
            citys.map((city) => ({
              lng: city[0],
              lat: city[1],
            })),
          );

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

          const feature = new /*InnerText*/ Feature({
            name: 'f1',
            id: 'f1',
            geometry: mulitPointGemo,
            text: '蜜雪冰城',
            textStyle: {
              font: '10px sans-serif',
              textAlign: 'center',
              textBaseline: 'middle',
              direction: 'inherit',
              strokeStyle: 'yellow',
              fillStyle: 'yellow',
            },
            /*{
              // radius: 10,
              lineWidth: 2,
              strokeStyle: 'blue',
              fillStyle: 'red',
            }*/
            style: {
              lineWidth: 1,
              strokeStyle: 'yellow',
              fillStyle: 'red',
              radius: 30,
              img: {
                src: icon,
                width: 32,
                height: 32,
              },
              regularPolygon: {
                n: 3,
                size: 10,
              },
              start: {
                innerRadius: 20 / 2,
                outRadius: 20,
              },
              sector: {
                radius: 20,
                angle1: 180,
                angle2: 360,
              },
              rect: {
                width: 50,
                height: 50,
              },
              radiusRect: {
                width: 30,
                height: 20,
                radius: 3,
              },
              leaf: {
                n: 4,
                size: 15,
                length: 60,
              },
              pointType: 'image', // 'circle' | 'image' | 'regularPolygon' | 'start' | 'sector' | 'rect' | 'radiusRect' | 'leaf';
              arrow: {
                // 是否绘制
                draw: true,
                // 箭头方向 箭头绘制在开始 | 结束 | 双向
                direction: 'bothEnds' /* | 'end' | 'bothEnds';*/,
                // 箭头的类型 尖的箭头，还是方形的箭头
                type: 'normal' /* | 'square';*/,
                // 箭头的大小 小 | 中 | 大
                size: 'normal' /* | 'normal' | 'large';*/,
              },
              // font: 'bold 30px sans-serif',
              // textAlign: 'center',
              // textBaseline: 'middle',
              // direction: 'inherit',
              // strokeStyle: 'red',
              // fillStyle: 'red',
            },
          });

          vectorSource = new VectorSource([feature]);

          const vectorLayer = new VectorLayer(map, {
            paneName: 'vertexPane',
            zIndex: 9999,
            source: vectorSource,
          });

          map.addOverlay(vectorLayer);

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
                  direction: 'bothEnds' /* | 'end' | 'bothEnds';*/,
                  // 箭头的类型 尖的箭头，还是方形的箭头
                  type: 'normal' /* | 'square';*/,
                  // 箭头的大小 小 | 中 | 大
                  size: 'normal' /* | 'normal' | 'large';*/,
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

          if (!polygonSelection) {
            polygonSelection = new PolygonSelection(map, [], {
              [PolygonSelectionActions.CanvasMount]: () => {
                const action = new TriangleDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.changeAction(action);
                action.start();
              },
            });

            // 点击了画布中的几何图形
            polygonSelection.emitter.on(PolygonSelectionActions.CanvasClickGeometry, (data) => {
              const Component = typeActionMap.get(data.type);

              const action = new Component({
                selectType: data.type,
                actionType: 'Draw',
                data,
              });

              action.on(ActionEvents.End, () => {
                action.start();
              });

              polygonSelection.changeAction(action);

              action.start();
            });

            // 点击了画布的空位置
            polygonSelection.emitter.on(PolygonSelectionActions.CanvasClickEmpty, () => {
              polygonSelection.changeAction(null);
            });

            map.addOverlay(polygonSelection);
          } else {
            const action = new TriangleDrawAction();
            action.on(ActionEvents.End, (data) => {
              // action.start();
            });
            polygonSelection.changeAction(action);
            action.start();
          }
        }}
      >
        绘制圆形
      </button>
    </div>

    <div className={styles.Auto}>
      <BMap
        ref={ref}
        ak="bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp"
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

          import('./vector/interaction').then((res) => {
            PolygonSelectionModule = res.default;

            PolygonSelection = PolygonSelectionModule.PolygonSelection;
            PolygonDrawAction = PolygonSelectionModule.PolygonDrawAction;
            CircleDrawAction = PolygonSelectionModule.CircleDrawAction;
            RectangleDrawAction = PolygonSelectionModule.RectangleDrawAction;
            TriangleDrawAction = PolygonSelectionModule.TriangleDrawAction;
            DiamondDrawAction = PolygonSelectionModule.DiamondDrawAction;
            StartDrawAction = PolygonSelectionModule.StartDrawAction;
            FreeDrawAction = PolygonSelectionModule.FreeDrawAction;
            CircleModifyAction = PolygonSelectionModule.CircleModifyAction;
            DiamondModifyAction = PolygonSelectionModule.DiamondModifyAction;
            PolygonModifyAction = PolygonSelectionModule.PolygonModifyAction;
            RectangleModifyAction = PolygonSelectionModule.RectangleModifyAction;
            TriangleModifyAction = PolygonSelectionModule.TriangleModifyAction;
            StartModifyAction = PolygonSelectionModule.StartModifyAction;
            Types = PolygonSelectionModule.Types;

            PolygonSelectionActions = Types.PolygonSelectionActions;
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
