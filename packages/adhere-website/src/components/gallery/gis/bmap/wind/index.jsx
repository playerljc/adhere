import React, { useEffect, useRef } from 'react';

import PlaygroundMulti from '@/lib/PlaygroundMulti';

import BMapWindLayer from './windlayer';

import styles from './index.less';

const indexJsCodeText = `
 import React, { useEffect, useRef } from 'react';
 import BMapWindLayer from './windlayer';
 import styles from './index.less';

 function Wind() {
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

    map.addOverlay(new BMapWindLayer());
  }, []);

  return <div className={styles.Wrap} ref={ref} />;
 }

 export default Wind;
`;

const indexLessCodeText = `
 .Wrap {
   width: 100%;
   height: 400px;
 }
`;

const windLayerCodeText = `
  import { WindLayer } from 'bmap-wind';
  import defaultData from './windData.json';

  const DEFAULT_DATA = defaultData;

  const DEFAULT_CONFIG = {
    windOptions: {
      colorScale: [
        'rgb(36,104, 180)',
        'rgb(60,157, 194)',
        'rgb(128,205,193 )',
        'rgb(151,218,168 )',
        'rgb(198,231,181)',
        'rgb(238,247,217)',
        'rgb(255,238,159)',
        'rgb(252,217,125)',
        'rgb(255,182,100)',
        'rgb(252,150,75)',
        'rgb(250,112,52)',
        'rgb(245,64,32)',
        'rgb(237,45,28)',
        'rgb(220,24,32)',
        'rgb(180,0,35)',
      ],
      frameRate: 250,
      maxAge: 60,
      globalAlpha: 0.9,
      velocityScale: 1 / 30,
      paths: 2000,
    },
    zIndex: 1,
  };

  /**
   * BMapWindLayer
   * @class BMapWindLayer
   * @classdesc BMapWindLayer 风场层
   */
  class BMapWindLayer extends WindLayer {
    constructor(data, config) {
      super(data || DEFAULT_DATA, config || DEFAULT_CONFIG);
    }
  }

  export default BMapWindLayer;
`;

/**
 * Wind
 * @return {*}
 * @constructor
 */
function Wind() {
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

    map.addOverlay(new BMapWindLayer());
  }, []);

  return (
    <PlaygroundMulti
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
          title: 'windlayer.js',
          mode: 'code',
          scope: { React },
          codeText: windLayerCodeText,
        },
      ]}
    >
      <div className={styles.Wrap} ref={ref} />
    </PlaygroundMulti>
  );
}

export default Wind;
