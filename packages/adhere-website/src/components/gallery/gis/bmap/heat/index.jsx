import React, { useEffect, useRef } from 'react';

import PlaygroundMulit from '@/lib/PlaygroundMulit';

import HeatMapLayer from './HeatMapLayer';

import styles from './index.less';

const indexJsCodeText = `
 import React, { useEffect, useRef } from 'react';
 import HeatMapLayer from './HeatMapLayer';
 import styles from './index.less';
 
 function Heat() {
   const ref = useRef();

  useEffect(() => {
    const map = new BMap.Map(ref.current); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      }),
    );
    map.setZoom(2);
    // map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    map.addOverlay(new HeatMapLayer(map));
  }, []);
  
  return <div className={styles.Wrap} ref={ref} />;
 }
 
 export default Heat;
`;

const indexLessCodeText = `
 .Wrap {
   width: 100%;
   height: 400px;
 }
`;

const heatMapLayerCodeText = `
import citys from './data.json';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class HeatMapLayer {
  constructor(map) {
    this.map = map;
    this.init();
  }


  init() {
    const points = citys.map((t) => {
      return {
        lng: t[0],
        lat: t[1],
        count: getRandomArbitrary(1, 100),
      };
    });
    this.heatmapOverlay = new BMapLib.HeatmapOverlay({ radius: 20 });
    this.map.addOverlay(this.heatmapOverlay);
    this.heatmapOverlay.setDataSet({ data: points, max: 100 });
    this.heatmapOverlay.show();
  };
}

export default HeatMapLayer;
`;

function Heat() {
  const ref = useRef();

  useEffect(() => {
    const map = new BMap.Map(ref.current); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      }),
    );
    map.setZoom(2);
    // map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    map.addOverlay(new HeatMapLayer(map));
  }, []);

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
        {
          title: 'HeatMapLayer.js',
          mode: 'code',
          scope: { React },
          codeText: heatMapLayerCodeText,
        },
      ]}
    >
      <div className={styles.Wrap} ref={ref} />
    </PlaygroundMulit>
  );
}

export default Heat;
