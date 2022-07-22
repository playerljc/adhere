import React, { useEffect, useRef } from 'react';

import PlaygroundMulit from '@/lib/PlaygroundMulit';
import styles from './index.less';

/**
 * humidity
 * @return {JSX.Element}
 * @constructor
 * @classdesc 湿度
 */
function humidity() {
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
      const y = -(tileCoord.y + 1);
      const partx = Math.floor(x / 128);
      const party = Math.floor(y / 128);
      let tmp = 'http://139.9.181.182:8080/map/{Z}/{party}/{partx}/{Y}x{X}.png';

      tmp = tmp
        .replace('{Z}', zoom)
        .replace('{partx}', partx)
        .replace('{party}', party)
        .replace('{X}', x)
        .replace('{Y}', y);
      return tmp;
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

  import styles from './index.less';
  
  function humidity() {
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
        const y = -(tileCoord.y + 1);
        const partx = Math.floor(x / 128);
        const party = Math.floor(y / 128);
        let tmp = 'http://139.9.181.182:8080/map/{Z}/{party}/{partx}/{Y}x{X}.png';
  
        tmp = tmp
          .replace('{Z}', zoom)
          .replace('{partx}', partx)
          .replace('{party}', party)
          .replace('{X}', x)
          .replace('{Y}', y);
        return tmp;
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

export default humidity;
