import React, { useRef, useState } from 'react';
import { Button, Select } from 'antd';
import { v1 } from 'uuid';
import { BMap, MessageDialog } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import citys from './data/citys.json';
import isoline from './data/isoline';

import styles from './index.less';
import icon from './站点.svg';

const { Option } = Select;

const {
  BMap: BMapComponent,
  BMapWindLayer,
  BMapAirPressureLayer,
  HeatMapLayer,
  Vector: {
    Feature,
    InnerTextFeature,
    VectorLayer,
    VectorSource,
    Trajectory: { Trajectory, TrajectoryPlayBackLayer },
    Interaction: {
      InteractionLayer,
      CircleDrawAction,
      DiamondDrawAction,
      FreeDrawAction,
      PolygonDrawAction,
      DistanceDrawAction,
      RectangleDrawAction,
      StartDrawAction,
      TriangleDrawAction,
      CircleModifyAction,
      DiamondModifyAction,
      PolygonModifyAction,
      RectangleModifyAction,
      StartModifyAction,
      TriangleModifyAction,
      Types: InteractionTypes,
    },
    Geom: {
      PointGeometry,
      MulitPointGeometry,
      PolygonGeometry,
      MulitPolygonGeometry,
      LineStringGeometry,
      // 正多边形
      RegularPolygonGeometry,
      // 矩形
      RectGeometry,
      // 圆角矩形
      RadiusRectGeometry,
      // 圆形
      CircleGeometry,
      // 扇形
      SectorGeometry,
      // 五角星
      StartGeometry,
      // n叶草
      LeafGeometry,
      // 文字
      TextGeometry,
    },
  },
  Util,
} = BMap;

const defaultStyle = {
  lineWidth: 1,
  strokeStyle: 'yellow',
  fillStyle: 'red',
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default () => {
  const baseMapRef = useRef();

  const winLayerRef = useRef();
  const windLayerOverlay = useRef();

  const hotLayerRef = useRef();
  const hotLayerOverlay = useRef();

  const airPressureRef = useRef();
  const airPressureOverlay = useRef();

  const pointLayerRef = useRef();
  const pointLayerOverlay = useRef();
  const pointLayerSource = useRef();
  const [pointType, setPointType] = useState('-1');

  const mulitPointLayerRef = useRef();
  const mulitPointLayerOverlay = useRef();
  const mulitPointLayerSource = useRef();
  const preMulitPointFeature = useRef(null);
  const [mulitPointType, setMulitPointType] = useState('-1');

  const geometryLayerRef = useRef();
  const geometryLayerOverlay = useRef();
  const geometryLayerSource = useRef();

  const polygonLayerRef = useRef();
  const polygonLayerOverlay = useRef();
  const polygonLayerSource = useRef();

  const mulitPolygonLayerRef = useRef();
  const mulitPolygonOverlay = useRef();
  const mulitPolygonSource = useRef();

  const lineStringRef = useRef();
  const lineStringOverlay = useRef();
  const lineStringSource = useRef();
  const preLineStringFeature = useRef(null);
  const [lineStringType, setLineStringType] = useState('-1');

  const regularPolygonRef = useRef();
  const regularPolygonOverlay = useRef();
  const regularPolygonSource = useRef();
  const preRegularPolygonFeature = useRef(null);
  const [regularPolygonCount, setRegularPolygonCount] = useState('-1');

  const leafRef = useRef();
  const leafOverlay = useRef();
  const leafSource = useRef();
  const preLeafFeature = useRef(null);
  const [leafCount, setLeafCount] = useState('-1');

  const textRef = useRef();
  const textOverlay = useRef();
  const textSource = useRef();
  const preTextFeature = useRef(null);
  const [textCount, setTextCount] = useState('-1');

  const geoJSONRef = useRef();
  const geoJSONOverlay = useRef();
  const geoJSONSource = useRef();

  const rangingRef = useRef();
  const rangingOverlay = useRef();

  const trajectoryPlayBackLayerRef = useRef();
  const trajectoryRef = useRef();
  const trajector = useRef();
  const trajectorDuration = useRef(60 * 2);
  const [isTrajectorPause, setTrajecorPause] = useState(false);

  const interactionRef = useRef();
  const interactionLayer = useRef();
  const [interactionValue, setInteractionValue] = useState('-1');
  const interactionModifyTypeActionMap = useRef(
    new Map([
      ['Polygon', PolygonModifyAction],
      ['Circle', CircleModifyAction],
      ['Rectangle', RectangleModifyAction],
      ['Triangle', TriangleModifyAction],
      ['Diamond', DiamondModifyAction],
      ['Start', StartModifyAction],
    ]),
  );

  const interactionDrawTypeActionMap = useRef(
    new Map([
      ['Polygon', PolygonDrawAction],
      ['Circle', CircleDrawAction],
      ['Rectangle', RectangleDrawAction],
      ['Triangle', TriangleDrawAction],
      ['Diamond', DiamondDrawAction],
      ['Free', FreeDrawAction],
      ['Start', StartDrawAction],
    ]),
  );

  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    // eslint-disable-next-line no-param-reassign
    source.current = new VectorSource([]);
    // eslint-disable-next-line no-param-reassign
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }

  function createInteractionLayer({ overlay, ref, defaultData, listeners }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    // eslint-disable-next-line no-param-reassign
    overlay.current = new InteractionLayer(map, defaultData || [], listeners || {});

    map.addOverlay(overlay.current);
  }

  return (
    <div className="Page BMap">
      <h1>BMap</h1>
      <h2>百度地图</h2>
      <ul className="list">
        <li>
          VectorLayer
          <ul className="list">
            <li>VectorSource</li>
            <li>
              Geometry
              <ul className="list">
                <li>CircleGeometry</li>
                <li>LeafGeometry</li>
                <li>LineStringGeometry</li>
                <li>MulitCircleGeometry</li>
                <li>MulitLeafGeometry</li>
                <li>MulitLineStringGeometry</li>
                <li>MulitPointGeometry</li>
                <li>MulitPolygonGeometry</li>
                <li>MulitRadiusRectGeometry</li>
                <li>MulitRectGeometry</li>
                <li>MulitRegularPolygonGeometry</li>
                <li>MulitSectorGeometry</li>
                <li>MulitStartGeometry</li>
                <li>PointGeometry</li>
                <li>PolygonGeometry</li>
                <li>RadiusRectGeometry</li>
                <li>RectGeometry</li>
                <li>RegularPolygonGeometry</li>
                <li>SectorGeometry</li>
                <li>StartGeometry</li>
                <li>TextGeometry</li>
              </ul>
            </li>
            <li>
              Format
              <ul className="list">
                <li>GeoJSON</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          interaction(交互式绘制)
          <ul className="list">
            <li>
              DrawAction
              <ul className="list">
                <li>CircleDrawAction</li>
                <li>DiamondDrawAction</li>
                <li>DistanceDrawAction</li>
                <li>FreeDrawAction</li>
                <li>PolygonDrawAction</li>
                <li>RectangleDrawAction</li>
                <li>StartDrawAction</li>
                <li>TriangleDrawAction</li>
              </ul>
            </li>
            <li>
              ModifyAction
              <ul className="list">
                <li>CircleModifyAction</li>
                <li>DiamondModifyAction</li>
                <li>PolygonModifyAction</li>
                <li>RectangleModifyAction</li>
                <li>StartModifyAction</li>
                <li>TriangleModifyAction</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>WindLayer(风场)</li>
        <li>AirPressureLayer(气压)</li>
        <li>热力图-温度、湿度</li>
        <li>轨迹回放</li>
        <li>Util</li>
      </ul>

      <h3>基本地图组件</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
  } = BMap;
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <BMapComponent
        zoom={6}
        externalImportBMapScript={true}
        onBMapInitReady={() => {}}
      />
    </div>,
    mountNode,
  );
        `}
      >
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={baseMapRef}
            zoom={6}
            externalImportBMapScript={true}
            onBMapInitReady={() => {}}
          />
        </div>
      </Playground>

      <h3>风场</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Button } from 'antd';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
    BMapWindLayer
  } = BMap;
  
  const winLayerRef = useRef();
  const windLayerOverlay = useRef();
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <div className={styles.ToolBar}>
        <Button
          type="primary"
          onClick={() => {
            const map = winLayerRef.current.getMap();

            if (windLayerOverlay.current) {
              map.removeOverlay(windLayerOverlay.current);
              windLayerOverlay.current = null;
            }

            windLayerOverlay.current = new BMapWindLayer();
            map.addOverlay(windLayerOverlay.current);
          }}
        >
          加入风场
        </Button>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={winLayerRef}
          zoom={2}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            winLayerRef.current.getMap().enableScrollWheelZoom(true);
          }}
        />
      </div>
    </div>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Button
            type="primary"
            onClick={() => {
              const map = winLayerRef.current.getMap();

              if (windLayerOverlay.current) {
                map.removeOverlay(windLayerOverlay.current);
                windLayerOverlay.current = null;
              }

              windLayerOverlay.current = new BMapWindLayer();
              map.addOverlay(windLayerOverlay.current);
            }}
          >
            加入风场
          </Button>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={winLayerRef}
            zoom={2}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              winLayerRef.current.getMap().enableScrollWheelZoom(true);
            }}
          />
        </div>
      </Playground>

      <h3>热力图</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Button } from 'antd';
  import { BMap } from '@baifendian/adhere';
  
  import citys from './data/citys.json';
  
  const {
    BMap: BMapComponent,
    HeatMapLayer
  } = BMap;
  
  const hotLayerRef = useRef();
  const hotLayerOverlay = useRef();
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <div className={styles.ToolBar}>
        <Button
          type="primary"
          onClick={() => {
            const map = hotLayerRef.current.getMap();

            if (hotLayerOverlay.current) {
              map.removeOverlay(hotLayerOverlay.current);
              hotLayerOverlay.current = null;
            }

            const points = citys.map((t) => {
              return {
                lng: t[0],
                lat: t[1],
                count: getRandomArbitrary(1, 100),
              };
            });

            hotLayerOverlay.current = new HeatMapLayer({ radius: 10, visible: true });

            map.addOverlay(hotLayerOverlay.current);

            hotLayerOverlay.current.setDataSet({ data: points, max: 100 });
          }}
        >
          加入热力图
        </Button>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={hotLayerRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            hotLayerRef.current.getMap().enableScrollWheelZoom(true);
          }}
        />
      </div>
    </div>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Button
            type="primary"
            onClick={() => {
              const map = hotLayerRef.current.getMap();

              if (hotLayerOverlay.current) {
                map.removeOverlay(hotLayerOverlay.current);
                hotLayerOverlay.current = null;
              }

              const points = citys.map((t) => {
                return {
                  lng: t[0],
                  lat: t[1],
                  count: getRandomArbitrary(1, 100),
                };
              });

              hotLayerOverlay.current = new HeatMapLayer({ radius: 10, visible: true });

              map.addOverlay(hotLayerOverlay.current);

              hotLayerOverlay.current.setDataSet({ data: points, max: 100 });
            }}
          >
            加入热力图
          </Button>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={hotLayerRef}
            zoom={5}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              hotLayerRef.current.getMap().enableScrollWheelZoom(true);
            }}
          />
        </div>
      </Playground>

      <h3>气压</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Button } from 'antd';
  import { BMap } from '@baifendian/adhere';
  
  import isoline from './data/isoline';
  
  const {
    BMap: BMapComponent,
    BMapAirPressureLayer
  } = BMap;
  
  const airPressureRef = useRef();
  const airPressureOverlay = useRef();
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <div className={styles.ToolBar}>
        <Button
          type="primary"
          onClick={() => {
            const map = airPressureRef.current.getMap();

            if (airPressureOverlay.current) {
              map.removeOverlay(airPressureOverlay.current);
              airPressureOverlay.current = null;
            }

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

            airPressureOverlay.current = new BMapAirPressureLayer({
              map,
              data,
              paneName: 'markerShadow',
              zIndex: 2,
              style: {
                strokeStyle: '#ccc',
                lineJoin: 'round',
                lineWidth: 1,
              },
            });

            map.addOverlay(airPressureOverlay.current);
          }}
        >
          加入风场
        </Button>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={airPressureRef}
          zoom={2}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            airPressureRef.current.getMap().enableScrollWheelZoom(true);
          }}
        />
      </div>
    </div>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Button
            type="primary"
            onClick={() => {
              const map = airPressureRef.current.getMap();

              if (airPressureOverlay.current) {
                map.removeOverlay(airPressureOverlay.current);
                airPressureOverlay.current = null;
              }

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

              airPressureOverlay.current = new BMapAirPressureLayer({
                map,
                data,
                paneName: 'markerShadow',
                zIndex: 2,
                style: {
                  strokeStyle: '#ccc',
                  lineJoin: 'round',
                  lineWidth: 1,
                },
              });

              map.addOverlay(airPressureOverlay.current);
            }}
          >
            加入气压
          </Button>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={airPressureRef}
            zoom={2}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              airPressureRef.current.getMap().enableScrollWheelZoom(true);
            }}
          />
        </div>
      </Playground>

      <dl>
        <dt>
          <h1>几何图形绘制</h1>
        </dt>
        <dd>
          <h3>绘制点</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        PointGeometry,
      },
    },
  } = BMap;
  
  const pointLayerRef = useRef();
  const pointLayerOverlay = useRef();
  const pointLayerSource = useRef();
  const [pointType, setPointType] = useState('-1');
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <div className={styles.ToolBar}>
        <span>点的类型：</span>
        <Select
          style={{ width: 200 }}
          value={pointType}
          onSelect={(value) => {
            setPointType(value);
  
            if (value === '-1') return;
  
            createVectorLayer({
              overlay: pointLayerOverlay,
              ref: pointLayerRef,
              source: pointLayerSource,
              zIndex: 9999,
            });
  
            const pointGeom = new PointGeometry({ lng: 121.487899486, lat: 31.24916171 });
  
            const id = \`${new Date().getTime()}\`;
            const feature = new Feature({
              name: id,
              id,
              geometry: pointGeom,
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
                pointType: value,
              },
            });
  
            pointLayerSource.current.addFeature(feature);
  
            const map = pointLayerRef.current.getMap();
            map.panTo(new window.BMap.Point(121.487899486, 31.24916171));
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="circle">圆形点</Option>
          <Option value="image">image</Option>
          <Option value="regularPolygon">regularPolygon</Option>
          <Option value="start">start</Option>
          <Option value="sector">sector</Option>
          <Option value="rect">rect</Option>
          <Option value="radiusRect">radiusRect</Option>
          <Option value="leaf">leaf</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={pointLayerRef}
          zoom={12}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            pointLayerRef.current.getMap().enableScrollWheelZoom(true);
          }}
        />
      </div>
    </div>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <span>点的类型：</span>
              <Select
                style={{ width: 200 }}
                value={pointType}
                onSelect={(value) => {
                  setPointType(value);

                  if (value === '-1') return;

                  createVectorLayer({
                    overlay: pointLayerOverlay,
                    ref: pointLayerRef,
                    source: pointLayerSource,
                    zIndex: 9999,
                  });

                  const pointGeom = new PointGeometry({ lng: 121.487899486, lat: 31.24916171 });

                  const id = `${new Date().getTime()}`;
                  const feature = new /* InnerText */ Feature({
                    name: id,
                    id,
                    geometry: pointGeom,
                    // text: '蜜雪冰城',
                    // textStyle: {
                    //   font: '10px sans-serif',
                    //   textAlign: 'center',
                    //   textBaseline: 'middle',
                    //   direction: 'inherit',
                    //   strokeStyle: 'yellow',
                    //   fillStyle: 'yellow',
                    // },
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
                      pointType: value,
                    },
                  });

                  pointLayerSource.current.addFeature(feature);

                  const map = pointLayerRef.current.getMap();
                  map.panTo(new window.BMap.Point(121.487899486, 31.24916171));
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="circle">圆形点</Option>
                <Option value="image">image</Option>
                <Option value="regularPolygon">regularPolygon</Option>
                <Option value="start">start</Option>
                <Option value="sector">sector</Option>
                <Option value="rect">rect</Option>
                <Option value="radiusRect">radiusRect</Option>
                <Option value="leaf">leaf</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={pointLayerRef}
                zoom={12}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  pointLayerRef.current.getMap().enableScrollWheelZoom(true);
                }}
              />
            </div>
          </Playground>

          <h3>多个点</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        MulitPointGeometry,
      },
    },
  } = BMap;
  
  const mulitPointLayerRef = useRef();
  const mulitPointLayerOverlay = useRef();
  const mulitPointLayerSource = useRef();
  const preMulitPointFeature = useRef(null);
  const [mulitPointType, setMulitPointType] = useState('-1');
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <span>点的类型：</span>
        <Select
          style={{ width: 200 }}
          value={mulitPointType}
          onSelect={(value) => {
            setMulitPointType(value);
            if (value === '-1') return;

            createVectorLayer({
              overlay: mulitPointLayerOverlay,
              ref: mulitPointLayerRef,
              source: mulitPointLayerSource,
              zIndex: 9999,
            });

            if (preMulitPointFeature.current) {
              mulitPointLayerSource.current.removeFeature(preMulitPointFeature.current);
            }

            const mulitPointGemo = new MulitPointGeometry(
              citys.map((city) => ({
                lng: city[0],
                lat: city[1],
              })),
            );

            const id = \`${new Date().getTime()}\`;
            preMulitPointFeature.current = new Feature({
              name: id,
              id,
              geometry: mulitPointGemo,
              style: {
                lineWidth: 1,
                strokeStyle: 'yellow',
                fillStyle: 'red',
                radius: 10,
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
                  width: 30,
                  height: 20,
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
                pointType: value,
              },
            });

            mulitPointLayerSource.current.addFeature(preMulitPointFeature.current);
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="circle">圆形点</Option>
          <Option value="image">image</Option>
          <Option value="regularPolygon">regularPolygon</Option>
          <Option value="start">start</Option>
          <Option value="sector">sector</Option>
          <Option value="rect">rect</Option>
          <Option value="radiusRect">radiusRect</Option>
          <Option value="leaf">leaf</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={mulitPointLayerRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            mulitPointLayerRef.current.getMap().enableScrollWheelZoom(true);
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <span>点的类型：</span>
              <Select
                style={{ width: 200 }}
                value={mulitPointType}
                onSelect={(value) => {
                  setMulitPointType(value);
                  if (value === '-1') return;

                  createVectorLayer({
                    overlay: mulitPointLayerOverlay,
                    ref: mulitPointLayerRef,
                    source: mulitPointLayerSource,
                    zIndex: 9999,
                  });

                  if (preMulitPointFeature.current) {
                    mulitPointLayerSource.current.removeFeature(preMulitPointFeature.current);
                  }

                  const mulitPointGemo = new MulitPointGeometry(
                    citys.map((city) => ({
                      lng: city[0],
                      lat: city[1],
                    })),
                  );

                  const id = `${new Date().getTime()}`;
                  preMulitPointFeature.current = new /* InnerText */ Feature({
                    name: id,
                    id,
                    geometry: mulitPointGemo,
                    // text: '蜜雪冰城',
                    // textStyle: {
                    //   font: '10px sans-serif',
                    //   textAlign: 'center',
                    //   textBaseline: 'middle',
                    //   direction: 'inherit',
                    //   strokeStyle: 'yellow',
                    //   fillStyle: 'yellow',
                    // },
                    style: {
                      lineWidth: 1,
                      strokeStyle: 'yellow',
                      fillStyle: 'red',
                      radius: 10,
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
                        width: 30,
                        height: 20,
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
                      pointType: value,
                    },
                  });

                  mulitPointLayerSource.current.addFeature(preMulitPointFeature.current);
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="circle">圆形点</Option>
                <Option value="image">image</Option>
                <Option value="regularPolygon">regularPolygon</Option>
                <Option value="start">start</Option>
                <Option value="sector">sector</Option>
                <Option value="rect">rect</Option>
                <Option value="radiusRect">radiusRect</Option>
                <Option value="leaf">leaf</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={mulitPointLayerRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  mulitPointLayerRef.current.getMap().enableScrollWheelZoom(true);
                }}
              />
            </div>
          </Playground>

          <h3>各种几何图形</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  import citys from './data/citys.json';
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        RegularPolygonGeometry,
        RectGeometry,
        RadiusRectGeometry,
        CircleGeometry,
        SectorGeometry,
        StartGeometry,
        LeafGeometry
      },
    },
  } = BMap;
  
  const geometryLayerRef = useRef();
  const geometryLayerOverlay = useRef();
  const geometryLayerSource = useRef();
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  const defaultStyle = {
    lineWidth: 1,
    strokeStyle: 'yellow',
    fillStyle: 'red',
  };
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <BMapComponent
        ref={geometryLayerRef}
        zoom={5}
        externalImportBMapScript={true}
        onBMapInitReady={() => {
          geometryLayerRef.current.getMap().enableScrollWheelZoom(true);
  
          createVectorLayer({
            overlay: geometryLayerOverlay,
            ref: geometryLayerRef,
            source: geometryLayerSource,
            zIndex: 9999,
          });
  
          const geom = new Map([
            // 正多边形
            [
              0,
              {
                getGeom: (point) =>
                  new RegularPolygonGeometry({
                    n: [4, 5, 6, 7][Math.floor(Math.random() * 4)],
                    center: point,
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
                    leftTop: point,
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
                    leftTop: point,
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
                    center: point,
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
                    center: point,
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
                    center: point,
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
                    center: point,
                    n: [6, 7, 8, 9, 10][Math.floor(Math.random() * 5)],
                    size: 800,
                    length: 800 * 4,
                  }),
                getStyle: () => ({ ...defaultStyle }),
              },
            ],
          ]);
  
          const features = citys.map(
            (city, i) =>
              new Feature({
                id: v1(),
                name: v1(),
                geometry: geom.get(i % geom.size).getGeom({
                  lng: city[0],
                  lat: city[1],
                }),
                style: geom.get(i % geom.size).getStyle(),
              }),
          );
  
          geometryLayerSource.current.addFeatures(features);
        }}
      />
    </div>,
    mountNode,
  );
        `}
          >
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={geometryLayerRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  geometryLayerRef.current.getMap().enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: geometryLayerOverlay,
                    ref: geometryLayerRef,
                    source: geometryLayerSource,
                    zIndex: 9999,
                  });

                  const geom = new Map([
                    // 正多边形
                    [
                      0,
                      {
                        getGeom: (point) =>
                          new RegularPolygonGeometry({
                            n: [4, 5, 6, 7][Math.floor(Math.random() * 4)],
                            center: point,
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
                            leftTop: point,
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
                            leftTop: point,
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
                            center: point,
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
                            center: point,
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
                            center: point,
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
                            center: point,
                            n: [6, 7, 8, 9, 10][Math.floor(Math.random() * 5)],
                            size: 800,
                            length: 800 * 4,
                          }),
                        getStyle: () => ({ ...defaultStyle }),
                      },
                    ],
                  ]);

                  const features = citys.map(
                    (city, i) =>
                      new Feature({
                        id: v1(),
                        name: v1(),
                        geometry: geom.get(i % geom.size).getGeom({
                          lng: city[0],
                          lat: city[1],
                        }),
                        style: geom.get(i % geom.size).getStyle(),
                      }),
                  );

                  geometryLayerSource.current.addFeatures(features);
                }}
              />
            </div>
          </Playground>

          <h3>多边形</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        PolygonGeometry,
      },
    },
    Util
  } = BMap;
  
  const polygonLayerRef = useRef();
  const polygonLayerOverlay = useRef();
  const polygonLayerSource = useRef();
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <BMapComponent
        ref={polygonLayerRef}
        zoom={5}
        externalImportBMapScript={true}
        onBMapInitReady={() => {
          const map = polygonLayerRef.current.getMap();
          map.enableScrollWheelZoom(true);

          createVectorLayer({
            overlay: polygonLayerOverlay,
            ref: polygonLayerRef,
            source: polygonLayerSource,
            zIndex: 9999,
          });

          const points = [
            [116.387112, 39.920977],
            [116.385243, 39.913063],
            [116.394226, 39.917988],
            [116.401772, 39.921364],
            [116.41248, 39.927893],
          ];

          const polygonGeom = new PolygonGeometry(
            points.map((point) => {
              return {
                lng: point[0],
                lat: point[1],
              };
            }),
          );

          const feature = new Feature({
            id: v1(),
            name: v1(),
            geometry: polygonGeom,
            style: {
              lineWidth: 1,
              strokeStyle: 'yellow',
              fillStyle: 'red',
            },
          });

          polygonLayerSource.current.addFeature(feature);

          Util.fit(
            map,
            points.map((p) => new window.BMap.Point(p[0], p[1])),
          );
        }}
      />
    </div>,
    mountNode,
  );
        `}
          >
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={polygonLayerRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = polygonLayerRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: polygonLayerOverlay,
                    ref: polygonLayerRef,
                    source: polygonLayerSource,
                    zIndex: 9999,
                  });

                  const points = [
                    [116.387112, 39.920977],
                    [116.385243, 39.913063],
                    [116.394226, 39.917988],
                    [116.401772, 39.921364],
                    [116.41248, 39.927893],
                  ];

                  const polygonGeom = new PolygonGeometry(
                    points.map((point) => {
                      return {
                        lng: point[0],
                        lat: point[1],
                      };
                    }),
                  );

                  const feature = new Feature({
                    id: v1(),
                    name: v1(),
                    geometry: polygonGeom,
                    style: {
                      lineWidth: 1,
                      strokeStyle: 'yellow',
                      fillStyle: 'red',
                    },
                  });

                  polygonLayerSource.current.addFeature(feature);

                  Util.fit(
                    map,
                    points.map((p) => new window.BMap.Point(p[0], p[1])),
                  );
                }}
              />
            </div>
          </Playground>

          <h3>多个多边形</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        MulitPolygonGeometry,
      },
    },
    Util
  } = BMap;
  
  const mulitPolygonLayerRef = useRef();
  const mulitPolygonOverlay = useRef();
  const mulitPolygonSource = useRef();
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <BMapComponent
        ref={mulitPolygonLayerRef}
        zoom={5}
        externalImportBMapScript={true}
        onBMapInitReady={() => {
          const map = mulitPolygonLayerRef.current.getMap();
          map.enableScrollWheelZoom(true);

          createVectorLayer({
            overlay: mulitPolygonOverlay,
            ref: mulitPolygonLayerRef,
            source: mulitPolygonSource,
            zIndex: 9999,
          });

          const polygon = [
            [
              {
                lng: 121.487899486,
                lat: 31.24916171,
              },
              {
                lng: 103.725020656,
                lat: 27.3406329636,
              },
              {
                lng: 99.7136815989,
                lat: 27.8310294612,
              },
              {
                lng: 121.487899486,
                lat: 31.24916171,
              },
            ],
            [
              {
                lng: 109.993706251,
                lat: 39.8164895606,
              },
              {
                lng: 121.360525873,
                lat: 38.9658447898,
              },
              {
                lng: 124.832994532,
                lat: 45.1360489701,
              },
              {
                lng: 109.993706251,
                lat: 39.8164895606,
              },
            ],
            [
              {
                lng: 106.757915842,
                lat: 31.8691891592,
              },
              {
                lng: 104.776071339,
                lat: 29.3591568895,
              },
              {
                lng: 106.285267996,
                lat: 36.0215234807,
              },
              {
                lng: 106.757915842,
                lat: 31.8691891592,
              },
            ],
          ];

          const mulitPolygonGemo = new MulitPolygonGeometry(polygon);

          const feature = new Feature({
            id: v1(),
            name: v1(),
            geometry: mulitPolygonGemo,
            style: {
              lineWidth: 1,
              strokeStyle: 'yellow',
              fillStyle: 'red',
            },
          });

          mulitPolygonSource.current.addFeature(feature);

          Util.fit(
            map,
            polygon.flat().map((p) => new window.BMap.Point(p.lng, p.lat)),
          );
        }}
      />
    </div>,
    mountNode,
  );
        `}
          >
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={mulitPolygonLayerRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = mulitPolygonLayerRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: mulitPolygonOverlay,
                    ref: mulitPolygonLayerRef,
                    source: mulitPolygonSource,
                    zIndex: 9999,
                  });

                  const polygon = [
                    [
                      {
                        lng: 121.487899486,
                        lat: 31.24916171,
                      },
                      {
                        lng: 103.725020656,
                        lat: 27.3406329636,
                      },
                      {
                        lng: 99.7136815989,
                        lat: 27.8310294612,
                      },
                      {
                        lng: 121.487899486,
                        lat: 31.24916171,
                      },
                    ],
                    [
                      {
                        lng: 109.993706251,
                        lat: 39.8164895606,
                      },
                      {
                        lng: 121.360525873,
                        lat: 38.9658447898,
                      },
                      {
                        lng: 124.832994532,
                        lat: 45.1360489701,
                      },
                      {
                        lng: 109.993706251,
                        lat: 39.8164895606,
                      },
                    ],
                    [
                      {
                        lng: 106.757915842,
                        lat: 31.8691891592,
                      },
                      {
                        lng: 104.776071339,
                        lat: 29.3591568895,
                      },
                      {
                        lng: 106.285267996,
                        lat: 36.0215234807,
                      },
                      {
                        lng: 106.757915842,
                        lat: 31.8691891592,
                      },
                    ],
                  ];

                  const mulitPolygonGemo = new MulitPolygonGeometry(polygon);

                  const feature = new Feature({
                    id: v1(),
                    name: v1(),
                    geometry: mulitPolygonGemo,
                    style: {
                      lineWidth: 1,
                      strokeStyle: 'yellow',
                      fillStyle: 'red',
                    },
                  });

                  mulitPolygonSource.current.addFeature(feature);

                  Util.fit(
                    map,
                    polygon.flat().map((p) => new window.BMap.Point(p.lng, p.lat)),
                  );
                }}
              />
            </div>
          </Playground>

          <h3>线</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        LineStringGeometry,
      },
    },
    Util
  } = BMap;
  
  const lineStringRef = useRef();
  const lineStringOverlay = useRef();
  const lineStringSource = useRef();
  const preLineStringFeature = useRef(null);
  const [lineStringType, setLineStringType] = useState('-1');
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Select
          style={{ width: 200 }}
          value={lineStringType}
          onChange={(value) => {
            const map = lineStringRef.current.getMap();
  
            setLineStringType(value);
  
            if (value === '-1') return;
  
            if (preLineStringFeature.current) {
              lineStringSource.current.removeFeature(preLineStringFeature.current);
            }
  
            let style;
            const fromPoint = [123.47052, 41.684476];
            const toPoint = [116.401889, 39.917344];
  
            const lineStringGemo = new LineStringGeometry({
              point1: {
                lng: fromPoint[0],
                lat: fromPoint[1],
              },
              point2: {
                lng: toPoint[0],
                lat: toPoint[1],
              },
            });
  
            // 设置几何形状
            if (value === 'base') {
              // 无箭头
              style = {
                lineWidth: 2,
                strokeStyle: 'red',
                fillStyle: 'red',
                arrow: {
                  // 是否绘制
                  draw: false,
                },
              };
            } else if (value === 'fromArrow') {
              // 开始箭头
              style = {
                lineWidth: 2,
                strokeStyle: 'red',
                fillStyle: 'red',
                arrow: {
                  draw: true,
                  direction: 'start',
                  type: 'normal',
                  size: 'normal',
                },
              };
            } else if (value === 'toArrow') {
              // 结束箭头
              style = {
                lineWidth: 2,
                strokeStyle: 'red',
                fillStyle: 'red',
                arrow: {
                  draw: true,
                  direction: 'end',
                  type: 'normal',
                  size: 'normal',
                },
              };
            } else if (value === 'betweenArrow') {
              // 双向箭头
              style = {
                lineWidth: 2,
                strokeStyle: 'red',
                fillStyle: 'red',
                arrow: {
                  draw: true,
                  direction: 'bothEnds',
                  type: 'normal',
                  size: 'normal',
                },
              };
            }
  
            preLineStringFeature.current = new Feature({
              id: v1(),
              name: v1(),
              geometry: lineStringGemo,
              style,
            });
  
            lineStringSource.current.addFeature(preLineStringFeature.current);
  
            Util.fit(map, [
              new window.BMap.Point(fromPoint[0], fromPoint[1]),
              new window.BMap.Point(toPoint[0], toPoint[1]),
            ]);
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="base">无箭头</Option>
          <Option value="fromArrow">开始剪头</Option>
          <Option value="toArrow">结束箭头</Option>
          <Option value="betweenArrow">双向箭头</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={lineStringRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = lineStringRef.current.getMap();
            map.enableScrollWheelZoom(true);
  
            createVectorLayer({
              overlay: lineStringOverlay,
              ref: lineStringRef,
              source: lineStringSource,
              zIndex: 9999,
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <Select
                style={{ width: 200 }}
                value={lineStringType}
                onChange={(value) => {
                  const map = lineStringRef.current.getMap();

                  setLineStringType(value);

                  if (value === '-1') return;

                  if (preLineStringFeature.current) {
                    lineStringSource.current.removeFeature(preLineStringFeature.current);
                  }

                  let style;
                  const fromPoint = [123.47052, 41.684476];
                  const toPoint = [116.401889, 39.917344];

                  const lineStringGemo = new LineStringGeometry({
                    point1: {
                      lng: fromPoint[0],
                      lat: fromPoint[1],
                    },
                    point2: {
                      lng: toPoint[0],
                      lat: toPoint[1],
                    },
                  });

                  // 设置几何形状
                  if (value === 'base') {
                    // 无箭头
                    style = {
                      lineWidth: 2,
                      strokeStyle: 'red',
                      fillStyle: 'red',
                      arrow: {
                        // 是否绘制
                        draw: false,
                      },
                    };
                  } else if (value === 'fromArrow') {
                    // 开始箭头
                    style = {
                      lineWidth: 2,
                      strokeStyle: 'red',
                      fillStyle: 'red',
                      arrow: {
                        draw: true,
                        direction: 'start',
                        type: 'normal',
                        size: 'normal',
                      },
                    };
                  } else if (value === 'toArrow') {
                    // 结束箭头
                    style = {
                      lineWidth: 2,
                      strokeStyle: 'red',
                      fillStyle: 'red',
                      arrow: {
                        draw: true,
                        direction: 'end',
                        type: 'normal',
                        size: 'normal',
                      },
                    };
                  } else if (value === 'betweenArrow') {
                    // 双向箭头
                    style = {
                      lineWidth: 2,
                      strokeStyle: 'red',
                      fillStyle: 'red',
                      arrow: {
                        draw: true,
                        direction: 'bothEnds',
                        type: 'normal',
                        size: 'normal',
                      },
                    };
                  }

                  preLineStringFeature.current = new Feature({
                    id: v1(),
                    name: v1(),
                    geometry: lineStringGemo,
                    style,
                  });

                  lineStringSource.current.addFeature(preLineStringFeature.current);

                  Util.fit(map, [
                    new window.BMap.Point(fromPoint[0], fromPoint[1]),
                    new window.BMap.Point(toPoint[0], toPoint[1]),
                  ]);
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="base">无箭头</Option>
                <Option value="fromArrow">开始剪头</Option>
                <Option value="toArrow">结束箭头</Option>
                <Option value="betweenArrow">双向箭头</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={lineStringRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = lineStringRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: lineStringOverlay,
                    ref: lineStringRef,
                    source: lineStringSource,
                    zIndex: 9999,
                  });
                }}
              />
            </div>
          </Playground>

          <h3>正多边形</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        RegularPolygonGeometry,
      },
    },
    Util
  } = BMap;
  
  const regularPolygonRef = useRef();
  const regularPolygonOverlay = useRef();
  const regularPolygonSource = useRef();
  const preRegularPolygonFeature = useRef(null);
  const [regularPolygonCount, setRegularPolygonCount] = useState('-1');
  
  const defaultStyle = {
    lineWidth: 1,
    strokeStyle: 'yellow',
    fillStyle: 'red',
  };

  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Select
          style={{ width: 200 }}
          value={regularPolygonCount}
          onChange={(value) => {
            setRegularPolygonCount(value);

            if (value === '-1') return;

            if (preRegularPolygonFeature.current) {
              regularPolygonSource.current.removeFeature(preRegularPolygonFeature.current);
            }

            const regularPolygonGemo = new RegularPolygonGeometry({
              n: parseInt(value),
              center: {
                lng: 121.487899486,
                lat: 31.24916171,
              },
              size: 20000,
            });

            preRegularPolygonFeature.current = new Feature({
              id: v1(),
              name: v1(),
              geometry: regularPolygonGemo,
              style: { ...defaultStyle },
            });

            regularPolygonSource.current.addFeature(preRegularPolygonFeature.current);
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={regularPolygonRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = regularPolygonRef.current.getMap();
            map.enableScrollWheelZoom(true);

            createVectorLayer({
              overlay: regularPolygonOverlay,
              ref: regularPolygonRef,
              source: regularPolygonSource,
              zIndex: 9999,
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <Select
                style={{ width: 200 }}
                value={regularPolygonCount}
                onChange={(value) => {
                  setRegularPolygonCount(value);

                  if (value === '-1') return;

                  if (preRegularPolygonFeature.current) {
                    regularPolygonSource.current.removeFeature(preRegularPolygonFeature.current);
                  }

                  const regularPolygonGemo = new RegularPolygonGeometry({
                    // eslint-disable-next-line radix
                    n: parseInt(value),
                    center: {
                      lng: 121.487899486,
                      lat: 31.24916171,
                    },
                    size: 20000,
                  });

                  preRegularPolygonFeature.current = new Feature({
                    id: v1(),
                    name: v1(),
                    geometry: regularPolygonGemo,
                    style: { ...defaultStyle },
                  });

                  regularPolygonSource.current.addFeature(preRegularPolygonFeature.current);
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={regularPolygonRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = regularPolygonRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: regularPolygonOverlay,
                    ref: regularPolygonRef,
                    source: regularPolygonSource,
                    zIndex: 9999,
                  });
                }}
              />
            </div>
          </Playground>

          <h3>n叶草</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  
  const {
    BMap: BMapComponent,
      Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Geom: {
        LeafGeometry,
      },
    },
    Util
  } = BMap;
  
  const leafRef = useRef();
  const leafOverlay = useRef();
  const leafSource = useRef();
  const preLeafFeature = useRef(null);
  const [leafCount, setLeafCount] = useState('-1');
  
  const defaultStyle = {
    lineWidth: 1,
    strokeStyle: 'yellow',
    fillStyle: 'red',
  };

  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Select
          style={{ width: 200 }}
          value={leafCount}
          onChange={(value) => {
            setLeafCount(value);

            if (value === '-1') return;

            if (preLeafFeature.current) {
              leafSource.current.removeFeature(preLeafFeature.current);
            }

            const leafGemo = new LeafGeometry({
              center: {
                lng: 121.487899486,
                lat: 31.24916171,
              },
              n: parseInt(value),
              size: 2000,
              length: 2000 * 4,
            });

            preLeafFeature.current = new Feature({
              id: v1(),
              name: v1(),
              geometry: leafGemo,
              style: { ...defaultStyle },
            });

            leafSource.current.addFeature(preLeafFeature.current);
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={leafRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = leafRef.current.getMap();
            map.enableScrollWheelZoom(true);

            createVectorLayer({
              overlay: leafOverlay,
              ref: leafRef,
              source: leafSource,
              zIndex: 9999,
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <Select
                style={{ width: 200 }}
                value={leafCount}
                onChange={(value) => {
                  setLeafCount(value);

                  if (value === '-1') return;

                  if (preLeafFeature.current) {
                    leafSource.current.removeFeature(preLeafFeature.current);
                  }

                  const leafGemo = new LeafGeometry({
                    center: {
                      lng: 121.487899486,
                      lat: 31.24916171,
                    },
                    // eslint-disable-next-line radix
                    n: parseInt(value),
                    size: 2000,
                    length: 2000 * 4,
                  });

                  preLeafFeature.current = new Feature({
                    id: v1(),
                    name: v1(),
                    geometry: leafGemo,
                    style: { ...defaultStyle },
                  });

                  leafSource.current.addFeature(preLeafFeature.current);
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
                <Option value="10">10</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={leafRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = leafRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: leafOverlay,
                    ref: leafRef,
                    source: leafSource,
                    zIndex: 9999,
                  });
                }}
              />
            </div>
          </Playground>

          <h3>文字</h3>
          <Playground
            mode="code"
            scope={{ React }}
            codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { Select } from 'antd';
  import { v1 } from 'uuid';
  import { BMap } from '@baifendian/adhere';
  
  const { Option } = Select;
  
  const {
    BMap: BMapComponent,
    Vector: {
      Feature,
      InnerTextFeature,
      VectorLayer,
      VectorSource,
      Geom: {
        TextGeometry,
        PointGeometry
      },
    },
    Util
  } = BMap;
  
  const textRef = useRef();
  const textOverlay = useRef();
  const textSource = useRef();
  const preTextFeature = useRef(null);
  const [textCount, setTextCount] = useState('-1');
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Select
          style={{ width: 200 }}
          value={textCount}
          onChange={(value) => {
            const map = textRef.current.getMap();

            setTextCount(value);

            if (value === '-1') return;

            if (preTextFeature.current) {
              textSource.current.removeFeature(preTextFeature.current);
            }

            let textGemo;
            const style = {
              font: 'bold 24px sans-serif',
              textAlign: 'center',
              textBaseline: 'middle',
              direction: 'inherit',
              strokeStyle: 'red',
              fillStyle: 'red',
            };
            const point = [121.487899486, 31.24916171];

            if (value === 'text') {
              textGemo = new TextGeometry({
                point: {
                  lng: point[0],
                  lat: point[1],
                },
                text: '我爱北京天安门',
              });

              preTextFeature.current = new Feature({
                id: v1(),
                name: v1(),
                geometry: textGemo,
                style,
              });
            } else {
              textGemo = new PointGeometry({ lng: point[0], lat: point[1] });

              preTextFeature.current = new InnerTextFeature({
                id: v1(),
                name: v1(),
                geometry: textGemo,
                text: '我爱北京天安门',
                textStyle: { ...style },
                style: {
                  lineWidth: 6,
                  strokeStyle: 'yellow',
                  fillStyle: 'blue',
                  radius: 60,
                  pointType: 'circle',
                },
              });
            }

            textSource.current.addFeature(preTextFeature.current);

            Util.fit(map, [new window.BMap.Point(point[0], point[1])]);
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="text">文字</Option>
          <Option value="geomText">几何图形中的文字</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={textRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = textRef.current.getMap();
            map.enableScrollWheelZoom(true);

            createVectorLayer({
              overlay: textOverlay,
              ref: textRef,
              source: textSource,
              zIndex: 9999,
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
          >
            <div className={styles.ToolBar}>
              <Select
                style={{ width: 200 }}
                value={textCount}
                onChange={(value) => {
                  const map = textRef.current.getMap();

                  setTextCount(value);

                  if (value === '-1') return;

                  if (preTextFeature.current) {
                    textSource.current.removeFeature(preTextFeature.current);
                  }

                  let textGemo;
                  const style = {
                    font: 'bold 24px sans-serif',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    direction: 'inherit',
                    strokeStyle: 'red',
                    fillStyle: 'red',
                  };
                  const point = [121.487899486, 31.24916171];

                  if (value === 'text') {
                    textGemo = new TextGeometry({
                      point: {
                        lng: point[0],
                        lat: point[1],
                      },
                      text: '我爱北京天安门',
                    });

                    preTextFeature.current = new Feature({
                      id: v1(),
                      name: v1(),
                      geometry: textGemo,
                      style,
                    });
                  } else {
                    textGemo = new PointGeometry({ lng: point[0], lat: point[1] });

                    preTextFeature.current = new InnerTextFeature({
                      id: v1(),
                      name: v1(),
                      geometry: textGemo,
                      text: '我爱北京天安门',
                      textStyle: { ...style },
                      style: {
                        lineWidth: 6,
                        strokeStyle: 'yellow',
                        fillStyle: 'blue',
                        radius: 60,
                        pointType: 'circle',
                      },
                    });
                  }

                  textSource.current.addFeature(preTextFeature.current);

                  Util.fit(map, [new window.BMap.Point(point[0], point[1])]);
                }}
              >
                <Option value="-1">请选择</Option>
                <Option value="text">文字</Option>
                <Option value="geomText">几何图形中的文字</Option>
              </Select>
            </div>
            <div className={styles.BMapWrap}>
              <BMapComponent
                ref={textRef}
                zoom={5}
                externalImportBMapScript={true}
                onBMapInitReady={() => {
                  const map = textRef.current.getMap();
                  map.enableScrollWheelZoom(true);

                  createVectorLayer({
                    overlay: textOverlay,
                    ref: textRef,
                    source: textSource,
                    zIndex: 9999,
                  });
                }}
              />
            </div>
          </Playground>
        </dd>
      </dl>

      <h3>GeoJSON</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
    Vector: {
      Feature,
      VectorLayer,
      VectorSource,
    },
  } = BMap;
  
  const geoJSONRef = useRef();
  const geoJSONOverlay = useRef();
  const geoJSONSource = useRef();
  
  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    source.current = new VectorSource([]);
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <div className={styles.BMapWrap}>
      <BMapComponent
        ref={geoJSONRef}
        zoom={5}
        externalImportBMapScript={true}
        onBMapInitReady={() => {
          const map = geoJSONRef.current.getMap();
          map.enableScrollWheelZoom(true);
  
          createVectorLayer({
            overlay: geoJSONOverlay,
            ref: geoJSONRef,
            source: geoJSONSource,
            zIndex: 9999,
          });
  
          geoJSONSource.current.appendGeoJSON(
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
                  direction: 'bothEnds',
                  // 箭头的类型 尖的箭头，还是方形的箭头
                  type: 'normal',
                  // 箭头的大小 小 | 中 | 大
                  size: 'normal',
                },
              });
  
              return feature;
            },
          );
        }}
      />
    </div>,
    mountNode,
  );
        `}
      >
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={geoJSONRef}
            zoom={5}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              const map = geoJSONRef.current.getMap();
              map.enableScrollWheelZoom(true);

              createVectorLayer({
                overlay: geoJSONOverlay,
                ref: geoJSONRef,
                source: geoJSONSource,
                zIndex: 9999,
              });

              geoJSONSource.current.appendGeoJSON(
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
                      direction: 'bothEnds',
                      // 箭头的类型 尖的箭头，还是方形的箭头
                      type: 'normal',
                      // 箭头的大小 小 | 中 | 大
                      size: 'normal',
                    },
                  });

                  return feature;
                },
              );
            }}
          />
        </div>
      </Playground>

      <h3>交互式绘制</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
    Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Interaction: {
        InteractionLayer,
        CircleDrawAction,
        DiamondDrawAction,
        FreeDrawAction,
        PolygonDrawAction,
        DistanceDrawAction,
        RectangleDrawAction,
        StartDrawAction,
        TriangleDrawAction,
        CircleModifyAction,
        DiamondModifyAction,
        PolygonModifyAction,
        RectangleModifyAction,
        StartModifyAction,
        TriangleModifyAction,
        Types: InteractionTypes,
      },
    },
  } = BMap;
  
  const interactionRef = useRef();
  const interactionLayer = useRef();
  const [interactionValue, setInteractionValue] = useState('-1');
  const interactionModifyTypeActionMap = useRef(
    new Map([
      ['Polygon', PolygonModifyAction],
      ['Circle', CircleModifyAction],
      ['Rectangle', RectangleModifyAction],
      ['Triangle', TriangleModifyAction],
      ['Diamond', DiamondModifyAction],
      ['Start', StartModifyAction],
    ]),
  );

  const interactionDrawTypeActionMap = useRef(
    new Map([
      ['Polygon', PolygonDrawAction],
      ['Circle', CircleDrawAction],
      ['Rectangle', RectangleDrawAction],
      ['Triangle', TriangleDrawAction],
      ['Diamond', DiamondDrawAction],
      ['Free', FreeDrawAction],
      ['Start', StartDrawAction],
    ]),
  );

  function createVectorLayer({ overlay, ref, source, zIndex }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    // eslint-disable-next-line no-param-reassign
    source.current = new VectorSource([]);
    // eslint-disable-next-line no-param-reassign
    overlay.current = new VectorLayer(map, {
      paneName: 'vertexPane',
      zIndex,
      source: source.current,
    });

    map.addOverlay(overlay.current);
  }

  function createInteractionLayer({ overlay, ref, defaultData, listeners }) {
    if (overlay.current) return;

    const map = ref.current.getMap();

    // eslint-disable-next-line no-param-reassign
    overlay.current = new InteractionLayer(map, defaultData || [], listeners || {});

    map.addOverlay(overlay.current);
  }
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Select
          style={{ width: 200 }}
          value={interactionValue}
          onChange={(value) => {
            setInteractionValue(value);

            if (value === '-1') {
              interactionLayer.current.changeAction(null);
              return;
            }
            interactionLayer.current.changeAction(null);

            const DrawActionComponent = interactionDrawTypeActionMap.current.get(value);
            const action = new DrawActionComponent();
            action.on(InteractionTypes.ActionEvents.End, ({ data }) => {
              const Component = interactionModifyTypeActionMap.current.get(data.type);
              const mAction = new Component({
                selectType: data.type,
                actionType: 'Draw',
                data,
              });

              mAction.on(InteractionTypes.ActionEvents.End, () => {
                mAction.start();
              });

              interactionLayer.current.changeAction(mAction);

              mAction.start();
            });
            interactionLayer.current.changeAction(action);
            action.start();
          }}
        >
          <Option value="-1">请选择</Option>
          <Option value="Circle">圆</Option>
          <Option value="Diamond">菱形</Option>
          <Option value="Free">自由绘制</Option>
          <Option value="Polygon">多边形</Option>
          <Option value="Rectangle">矩形</Option>
          <Option value="Start">五角星</Option>
          <Option value="Triangle">三角形</Option>
        </Select>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={interactionRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = interactionRef.current.getMap();
            map.enableScrollWheelZoom(true);

            createInteractionLayer({
              overlay: interactionLayer,
              ref: interactionRef,
              defaultData: [],
              listeners: {
                [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {
                  // 点击了画布中的几何图形
                  interactionLayer.current.emitter.on(
                    InteractionTypes.InteractionLayerActions.CanvasClickGeometry,
                    (data) => {
                      const Component = interactionModifyTypeActionMap.current.get(data.type);

                      const action = new Component({
                        selectType: data.type,
                        actionType: 'Draw',
                        data,
                      });

                      action.on(InteractionTypes.ActionEvents.End, () => {
                        action.start();
                      });

                      interactionLayer.current.changeAction(action);

                      action.start();
                    },
                  );

                  // 点击了画布的空位置
                  interactionLayer.current.emitter.on(
                    InteractionTypes.InteractionLayerActions.CanvasClickEmpty,
                    () => {
                      interactionLayer.current.changeAction(null);
                    },
                  );
                },
              },
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Select
            style={{ width: 200 }}
            value={interactionValue}
            onChange={(value) => {
              setInteractionValue(value);

              if (value === '-1') {
                interactionLayer.current.changeAction(null);
                return;
              }
              interactionLayer.current.changeAction(null);

              const DrawActionComponent = interactionDrawTypeActionMap.current.get(value);
              const action = new DrawActionComponent();
              action.on(InteractionTypes.ActionEvents.End, ({ data }) => {
                const Component = interactionModifyTypeActionMap.current.get(data.type);
                const mAction = new Component({
                  selectType: data.type,
                  actionType: 'Draw',
                  data,
                });

                mAction.on(InteractionTypes.ActionEvents.End, () => {
                  mAction.start();
                });

                interactionLayer.current.changeAction(mAction);

                mAction.start();
              });
              interactionLayer.current.changeAction(action);
              action.start();
            }}
          >
            <Option value="-1">请选择</Option>
            <Option value="Circle">圆</Option>
            <Option value="Diamond">菱形</Option>
            <Option value="Free">自由绘制</Option>
            <Option value="Polygon">多边形</Option>
            <Option value="Rectangle">矩形</Option>
            <Option value="Start">五角星</Option>
            <Option value="Triangle">三角形</Option>
          </Select>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={interactionRef}
            zoom={5}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              const map = interactionRef.current.getMap();
              map.enableScrollWheelZoom(true);

              createInteractionLayer({
                overlay: interactionLayer,
                ref: interactionRef,
                defaultData: [],
                listeners: {
                  [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {
                    // 点击了画布中的几何图形
                    interactionLayer.current.emitter.on(
                      InteractionTypes.InteractionLayerActions.CanvasClickGeometry,
                      (data) => {
                        const Component = interactionModifyTypeActionMap.current.get(data.type);

                        const action = new Component({
                          selectType: data.type,
                          actionType: 'Draw',
                          data,
                        });

                        action.on(InteractionTypes.ActionEvents.End, () => {
                          action.start();
                        });

                        interactionLayer.current.changeAction(action);

                        action.start();
                      },
                    );

                    // 点击了画布的空位置
                    interactionLayer.current.emitter.on(
                      InteractionTypes.InteractionLayerActions.CanvasClickEmpty,
                      () => {
                        interactionLayer.current.changeAction(null);
                      },
                    );
                  },
                },
              });
            }}
          />
        </div>
      </Playground>

      <h3>测距</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
    Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Interaction: {
        DistanceDrawAction,
        Types: InteractionTypes,
      },
    },
  } = BMap;
  
  const rangingRef = useRef();
  const rangingOverlay = useRef();
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Button
          type="primary"
          onClick={() => {
            rangingOverlay.current.changeAction(null);

            const action = new DistanceDrawAction();
            action.on(InteractionTypes.ActionEvents.End, (data) => {
              // action.start();
            });
            rangingOverlay.current.changeAction(action);
            action.start();
          }}
        >
          开始
        </Button>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={rangingRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = rangingRef.current.getMap();
            map.enableScrollWheelZoom(true);

            createInteractionLayer({
              overlay: rangingOverlay,
              ref: rangingRef,
              defaultData: [],
              listeners: {
                [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {},
              },
            });
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Button
            type="primary"
            onClick={() => {
              rangingOverlay.current.changeAction(null);

              const action = new DistanceDrawAction();
              action.on(InteractionTypes.ActionEvents.End, (data) => {
                // action.start();
              });
              rangingOverlay.current.changeAction(action);
              action.start();
            }}
          >
            开始
          </Button>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={rangingRef}
            zoom={5}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              const map = rangingRef.current.getMap();
              map.enableScrollWheelZoom(true);

              createInteractionLayer({
                overlay: rangingOverlay,
                ref: rangingRef,
                defaultData: [],
                listeners: {
                  [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {},
                },
              });
            }}
          />
        </div>
      </Playground>

      <h3>轨迹回放</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React,{ useRef } from 'react';
  import ReactDOM from 'react-dom';
  import { BMap } from '@baifendian/adhere';
  
  const {
    BMap: BMapComponent,
    Vector: {
      Feature,
      VectorLayer,
      VectorSource,
      Trajectory: { Trajectory, TrajectoryPlayBackLayer },
    },
  } = BMap;
  
  const trajectoryPlayBackLayerRef = useRef();
  const trajectoryRef = useRef();
  const trajector = useRef();
  const trajectorDuration = useRef(60 * 2);
  const [isTrajectorPause, setTrajecorPause] = useState(false);
  
  ReactDOM.render(
    <>
      <div className={styles.ToolBar}>
        <Button
          type="primary"
          onClick={() => {
            MessageDialog.NumberPrompt({
              title: '提示',
              config: {
                label: '完成事件(秒)',
                initialValue: \`${60 * 2}\`,
              },
              width: 300,
              zIndex: 1000,
              local: 'zh_CN',
              onSuccess: (value) => {
                return new Promise((resolve) => {
                  if (trajector.current) {
                    setTrajecorPause(false);
                    trajectoryPlayBackLayerRef.current.removeTrajectory(trajector.current);
                  }

                  // eslint-disable-next-line radix
                  trajectorDuration.current = parseInt(value);

                  trajector.current = new Trajectory({
                    context: trajectoryPlayBackLayerRef.current,
                    id: '1',
                    coordinates: citys.map((t) => ({ lng: t[0], lat: t[1] })),
                    duration: trajectorDuration.current,
                  });

                  trajectoryPlayBackLayerRef.current.addTrajectory(trajector.current);
                  trajector.current.start();

                  resolve();
                });
              },
            });
          }}
        >
          开始
        </Button>
        <Button
          onClick={() => {
            if (!trajector.current) return;

            if (isTrajectorPause) {
              trajector.current.resume();
            } else {
              trajector.current.pause();
            }

            setTrajecorPause(!isTrajectorPause);
          }}
        >
          {isTrajectorPause ? '恢复' : '暂停'}
        </Button>
      </div>
      <div className={styles.BMapWrap}>
        <BMapComponent
          ref={trajectoryRef}
          zoom={5}
          externalImportBMapScript={true}
          onBMapInitReady={() => {
            const map = trajectoryRef.current.getMap();
            trajectoryPlayBackLayerRef.current = new TrajectoryPlayBackLayer(map, {
              paneName: 'floatPane',
              zIndex: 20001,
            });

            map.addOverlay(trajectoryPlayBackLayerRef.current);
          }}
        />
      </div>
    </>,
    mountNode,
  );
        `}
      >
        <div className={styles.ToolBar}>
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.NumberPrompt({
                title: '提示',
                config: {
                  label: '完成事件(秒)',
                  initialValue: `${60 * 2}`,
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    if (trajector.current) {
                      setTrajecorPause(false);
                      trajectoryPlayBackLayerRef.current.removeTrajectory(trajector.current);
                    }

                    // eslint-disable-next-line radix
                    trajectorDuration.current = parseInt(value);

                    trajector.current = new Trajectory({
                      context: trajectoryPlayBackLayerRef.current,
                      id: '1',
                      coordinates: citys.map((t) => ({ lng: t[0], lat: t[1] })),
                      duration: trajectorDuration.current,
                    });

                    trajectoryPlayBackLayerRef.current.addTrajectory(trajector.current);
                    trajector.current.start();

                    resolve();
                  });
                },
              });
            }}
          >
            开始
          </Button>
          <Button
            onClick={() => {
              if (!trajector.current) return;

              if (isTrajectorPause) {
                trajector.current.resume();
              } else {
                trajector.current.pause();
              }

              setTrajecorPause(!isTrajectorPause);
            }}
          >
            {isTrajectorPause ? '恢复' : '暂停'}
          </Button>
        </div>
        <div className={styles.BMapWrap}>
          <BMapComponent
            ref={trajectoryRef}
            zoom={5}
            externalImportBMapScript={true}
            onBMapInitReady={() => {
              const map = trajectoryRef.current.getMap();
              trajectoryPlayBackLayerRef.current = new TrajectoryPlayBackLayer(map, {
                paneName: 'floatPane',
                zIndex: 20001,
              });

              map.addOverlay(trajectoryPlayBackLayerRef.current);
            }}
          />
        </div>
      </Playground>
    </div>
  );
};
