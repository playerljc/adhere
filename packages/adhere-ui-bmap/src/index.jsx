import React from 'react';
import ReactDOM from 'react-dom';

import BMap from './bmap';

import styles from './temp.less';

import './index.less';

import citys from './citys.json';

import isoline from './isoline';

const ref = React.createRef();

let WindLayer,
  HeatMpLayer,
  BMapAirPressureLayer,
  VectorLayer,
  VectorSource,
  Feature,
  PointGeometry,
  MulitPointGeometry,
  CircleGeometry,
  LineStringGeometry,
  MulitLineStringGeometry,
  PolygonGeometry,
  MulitPolygonGeometry,
  RectGeometry,
  MulitRectGeometry

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

          // const mulitGemo = new MulitPointGeometry(citys.map(city => ({
          //   lng: city[0],
          //   lat: city[1],
          // })));

          // const circleGemo = new CircleGeometry({
          //   center: { lng: 121.487899486, lat: 31.24916171 },
          //   radius: 20000
          // });

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

          const mulitRectGeom = new MulitRectGeometry([
            {
              leftTop: {
                lng: 121.487899486,
                lat: 31.24916171,
              },
              width: 200000000,
              height: 30000000,
            },
            {
              leftTop: {
                lng: 106.635720331,
                lat: 30.4639838879,
              },
              width: 200000000,
              height: 30000000,
            },
            {
              leftTop: {
                lng: 116.988692412,
                lat: 33.6367723858,
              },
              width: 200000000,
              height: 30000000,
            },
          ]);

          const feature = new Feature({
            name: 'f1',
            id: 'f1',
            geometry: mulitRectGeom,
            /*{
              // radius: 10,
              lineWidth: 2,
              strokeStyle: 'blue',
              fillStyle: 'red',
            }*/
            style: {
              lineWidth: 3,
              strokeStyle: 'yellow',
              fillStyle: 'red',
              // arrow: {
              //   // 是否绘制
              //   draw: true,
              //   // 箭头方向 箭头绘制在开始 | 结束 | 双向
              //   direction: 'bothEnds' /* | 'end' | 'bothEnds';*/,
              //   // 箭头的类型 尖的箭头，还是方形的箭头
              //   type: 'normal' /* | 'square';*/,
              //   // 箭头的大小 小 | 中 | 大
              //   size: 'normal' /* | 'normal' | 'large';*/,
              // },
            },
          });

          const vectorSource = new VectorSource([feature]);

          const vectorLayer = new VectorLayer(map, {
            paneName: 'floatShadow',
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
    </div>

    <div className={styles.Auto}>
      <BMap
        ref={ref}
        ak="bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp"
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
          import('./vector/geom/PointGeometry').then((res) => {
            PointGeometry = res.default;
          });
          import('./vector/geom/MulitPointGeometry').then((res) => {
            MulitPointGeometry = res.default;
          });
          import('./vector/geom/CircleGeometry').then((res) => {
            CircleGeometry = res.default;
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
        }}
      />
    </div>
  </div>,
  document.getElementById('app'),
);
