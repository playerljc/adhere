import React, { useEffect, useRef } from 'react';

import PlaygroundMulit from '@/lib/PlaygroundMulit';

import Util from '../util';

import styles from './index.less';

/**
 * Temperature
 * @return {JSX.Element}
 * @constructor
 * @classdesc 温度
 */
function Temperature() {
  const ref = useRef();

  const map = useRef();

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

    const tileLayer = new BMap.TileLayer({
      transparentPng: true,
      zIndex: 9999999,
    });

    tileLayer.getTilesUrl = (tileCoord, zoom) => {
      const x = tileCoord.x;
      const y = tileCoord.y;

      //方法一，通过baiduMap API提供的方法将平面坐标转成经纬度坐标
      const PointConvert = new Util.BaiduPointConvert(map.current);
      const lonlat_0 = PointConvert.tileToLngLat(tileCoord); //瓦片左下角坐标；
      const tileCoord2 = {};
      tileCoord2.x = x + 1;
      tileCoord2.y = y + 1;
      const lonlat2_0 = PointConvert.tileToLngLat(tileCoord2); //瓦片右上角坐标；

      const p1 = Util.lonLat2Mercator(lonlat_0);
      const p2 = Util.lonLat2Mercator(lonlat2_0);

      // 温度
      return `http://139.9.181.182:8080/geoserver/kylin/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=kylin%3Adpt-5km-export&exceptions=application%2Fvnd.ogc.se_inimage&SRS=EPSG%3A3857&STYLES=&WIDTH=769&HEIGHT=569&BBOX=${[
        p1.x,
        p1.y,
        p2.x,
        p2.y,
      ].join(',')}`;
    };

    map.current.addTileLayer(tileLayer);
  }, []);

  return (
    <PlaygroundMulit
      config={[
        {
          title: 'index.jsx',
          mode: 'code',
          scope: { React },
          codeText: `
  import React, { useEffect, useRef } from 'react';

  import Util from '../util';
  import styles from './index.less';

  function Temperature() {
    const ref = useRef();

    const map = useRef();

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

      const tileLayer = new BMap.TileLayer({
        transparentPng: true,
        zIndex: 9999999,
      });

      tileLayer.getTilesUrl = (tileCoord, zoom) => {
        const x = tileCoord.x;
        const y = tileCoord.y;

        //方法一，通过baiduMap API提供的方法将平面坐标转成经纬度坐标
        const PointConvert = new Util.BaiduPointConvert(map.current);
        const lonlat_0 = PointConvert.tileToLngLat(tileCoord); //瓦片左下角坐标；
        const tileCoord2 = {};
        tileCoord2.x = x + 1;
        tileCoord2.y = y + 1;
        const lonlat2_0 = PointConvert.tileToLngLat(tileCoord2); //瓦片右上角坐标；

        const p1 = Util.lonLat2Mercator(lonlat_0);
        const p2 = Util.lonLat2Mercator(lonlat2_0);

        // 温度
        return \`http://139.9.181.182:8080/geoserver/kylin/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=kylin%3Adpt-5km-export&exceptions=application%2Fvnd.ogc.se_inimage&SRS=EPSG%3A3857&STYLES=&WIDTH=769&HEIGHT=569&BBOX=\${[
              p1.x,
              p1.y,
              p2.x,
              p2.y,
            ].join(',')}\`;
      };

      map.current.addTileLayer(tileLayer);
    }, []);

    return <div className={styles.Wrap} ref={ref} />
  }
          `,
        },
        {
          title: 'index.less',
          mode: 'code',
          scope: { React },
          codeText: `
  .Wrap {
    width: 100%;
    height: 400px;
  }
          `,
        },
      ]}
    >
      <div className={styles.Wrap} ref={ref} />
    </PlaygroundMulit>
  );
}

export default Temperature;
