import { Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { GlobalIndicator, Resource } from '@baifendian/adhere';

import PlaygroundMulit from '@/lib/PlaygroundMulit';

import data from './data.json';

import styles from './index.less';

const { Option } = Select;

const indexJsCodeText = `
import React, { useEffect, useState, useRef } from 'react';
import { Select } from 'antd';
import { GlobalIndicator } from '@baifendian/adhere';

import data from './data.json';

import styles from './index.less';

const { Option } = Select;

const defaultStyle = {
  fillColor: 'rgba(0,0,0,.1)',
  fillOpacity: 0.7,
  strokeWeight: 1,
  strokeOpacity: 0.2,
  strokeColor: '#ddd',
};

function Boundary() {
  const ref = useRef();

  const cityOverlays = useRef([]);

  const cityPoints = useRef([]);

  const map = useRef();

  const indicatorRef = useRef();

  const [city, setCity] = useState();

  useEffect(() => {
    map.current = new BMap.Map(ref.current); // 创建Map实例
    map.current.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.current.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      }),
    );
    map.current.setZoom(2);
    // map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
    map.current.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }, []);

  /**
   * fillCityBoundary - 根据city名字填充城市轮廓
   * @param cityName
   * @param style
   * @param map
   * @return
   */
  function fillCityBoundary(cityName) {
    const style = defaultStyle;

    const overlays = [];
    const points = [];

    return new Promise((resolve) => {
      // 勾勒的轮廓
      const bd = new BMap.Boundary();

      bd.get(cityName, (rs) => {
        for (let i = 0; i < rs.boundaries.length; i++) {
          const boundarieStr = rs.boundaries[i];

          const boundarie = boundarieStr.split(';');

          boundarie.forEach((pointStr) => {
            const point = pointStr.trim().split(',');
            points.push(new BMap.Point(parseFloat(point[0].trim()), parseFloat(point[1].trim())));
          });

          const hole = new BMap.Polygon(boundarieStr, { ...style });

          overlays.push(hole);

          map.current.addOverlay(hole);
        }

        resolve({
          overlays,
          points,
        });
      });
    });
  }

  function fillCitysBoundary(value) {
    return new Promise((resolve) => {
      let count = 0;

      value.city.forEach((city) => {
        fillCityBoundary(city.cityName).then(({ overlays, points }) => {
          cityOverlays.current = [...cityOverlays.current, ...overlays];
          cityPoints.current = [...cityPoints.current, ...points];
          count++;
          if (count >= value.city.length) {
            resolve();
          }
        });
      });
    });
  }

  /**
   * clearCityOverlays - 清除cityOverlays
   */
  function clearCityOverlays() {
    (cityOverlays.current || []).forEach((overlay) => {
      map.current.removeOverlay(overlay);
    });

    cityOverlays.current = [];

    cityPoints.current = [];
  }

  function fitCity() {
    return new Promise((resolve) => {
      const viewport = map.current.getViewport(cityPoints.current);

      map.current.centerAndZoom(viewport.center, viewport.zoom);

      setTimeout(() => {
        resolve();
      }, 200);
    });
  }

  return (
    <PlaygroundMulit
      config={[
        {
          title: 'index.jsx',
          mode: 'code',
          scope: { React },
          codeText: indexJsCodeText,
        },
        {
          title: 'index.less',
          mode: 'code',
          scope: { React },
          codeText: indexLessCodeText,
        },
      ]}
    >
      <div className={styles.Wrap}>
        <div className={styles.Map} ref={ref} />
        <div className={styles.CityOptionsWrap}>
          <Select
            style={{ width: 150 }}
            value={city}
            onChange={(cityCode) => {
              indicatorRef.current = GlobalIndicator.show(ref.current);

              setCity(cityCode);

              clearCityOverlays();

              const entry = data.find((t) => t.cityCode === cityCode);

              fillCitysBoundary(entry).then(() => {
                fitCity().then(() => {
                  GlobalIndicator.hide(indicatorRef.current);
                });
              });
            }}
          >
            {data.map((t) => (
              <Option key={t.cityCode} value={t.cityCode}>
                {t.cityName}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </PlaygroundMulit>
  );
}

export default Boundary;
`;

const indexLessCodeText = `
 .Wrap {
   width: 100%;
   height: 400px;
 }
`;

const defaultStyle = {
  fillColor: 'rgba(0,0,0,.1)',
  fillOpacity: 0.7,
  strokeWeight: 1,
  strokeOpacity: 0.2,
  strokeColor: '#ddd',
};

function Boundary() {
  const ref = useRef();

  const cityOverlays = useRef([]);

  const cityPoints = useRef([]);

  const map = useRef();

  const indicatorRef = useRef();

  const [city, setCity] = useState();

  useEffect(() => {
    map.current = new BMap.Map(ref.current); // 创建Map实例
    map.current.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.current.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      }),
    );
    map.current.setZoom(2);
    // map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
    map.current.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }, []);

  /**
   * fillCityBoundary - 根据city名字填充城市轮廓
   * @param cityName
   * @param style
   * @param map
   * @return
   */
  function fillCityBoundary(cityName) {
    const style = defaultStyle;

    const overlays = [];
    const points = [];

    return new Promise((resolve) => {
      // 勾勒的轮廓
      const bd = new BMap.Boundary();

      bd.get(cityName, (rs) => {
        for (let i = 0; i < rs.boundaries.length; i++) {
          const boundarieStr = rs.boundaries[i];

          const boundarie = boundarieStr.split(';');

          boundarie.forEach((pointStr) => {
            const point = pointStr.trim().split(',');
            points.push(new BMap.Point(parseFloat(point[0].trim()), parseFloat(point[1].trim())));
          });

          const hole = new BMap.Polygon(boundarieStr, { ...style });

          overlays.push(hole);

          map.current.addOverlay(hole);
        }

        resolve({
          overlays,
          points,
        });
      });
    });
  }

  function fillCitysBoundary(value) {
    return new Promise((resolve) => {
      let count = 0;

      value.city.forEach((city) => {
        fillCityBoundary(city.cityName).then(({ overlays, points }) => {
          cityOverlays.current = [...cityOverlays.current, ...overlays];
          cityPoints.current = [...cityPoints.current, ...points];
          count++;
          if (count >= value.city.length) {
            resolve();
          }
        });
      });
    });
  }

  /**
   * clearCityOverlays - 清除cityOverlays
   */
  function clearCityOverlays() {
    (cityOverlays.current || []).forEach((overlay) => {
      map.current.removeOverlay(overlay);
    });

    cityOverlays.current = [];

    cityPoints.current = [];
  }

  function fitCity() {
    return new Promise((resolve) => {
      const viewport = map.current.getViewport(cityPoints.current);

      map.current.centerAndZoom(viewport.center, viewport.zoom);

      setTimeout(() => {
        resolve();
      }, 200);
    });
  }

  return (
    <PlaygroundMulit
      config={[
        {
          title: 'index.jsx',
          mode: 'code',
          scope: { React },
          codeText: indexJsCodeText,
        },
        {
          title: 'index.less',
          mode: 'code',
          scope: { React },
          codeText: indexLessCodeText,
        },
      ]}
    >
      <div className={styles.Wrap}>
        <div className={styles.Map} ref={ref} />
        <div className={styles.CityOptionsWrap}>
          <Select
            style={{ width: 150 }}
            value={city}
            onChange={(cityCode) => {
              indicatorRef.current = GlobalIndicator.show(ref.current);

              setCity(cityCode);

              clearCityOverlays();

              const entry = data.find((t) => t.cityCode === cityCode);

              fillCitysBoundary(entry).then(() => {
                fitCity().then(() => {
                  GlobalIndicator.hide(indicatorRef.current);
                });
              });
            }}
            getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
          >
            {data.map((t) => (
              <Option key={t.cityCode} value={t.cityCode}>
                {t.cityName}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </PlaygroundMulit>
  );
}

export default Boundary;
