import React, { useEffect, useRef } from 'react';

import PlaygroundMulti from '@/lib/PlaygroundMulti';

import VectorLayer from './VectoryLayer';
import data from './data.json';

import styles from './index.less';

const indexJsCodeText = `
 import React, { useEffect, useRef } from 'react';
 import VectorLayer from './VectoryLayer';
 import styles from './index.less';

 function MassivePoints() {
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

    map.addOverlay(
      new VectorLayer(
        map,
        data
          .map((t) => t.geo)
          .flat()
          .map((t) => ({ lng: t[0], lat: t[1] })),
      ),
    );
  }, []);

  return <div className={styles.Wrap} ref={ref} />;
 }

 export default MassivePoints;
`;

const indexLessCodeText = `
 .Wrap {
   width: 100%;
   height: 400px;
 }
`;

const VectoryLayerCodeText = `
import { Util } from '@baifendian/adhere';

const radius = 6;

/**
 * VectoryLayer
 * @param map
 * @constructor
 */
class VectoryLayer extends BMap.CanvasLayer {
  constructor(map, data) {
    super({
      update: () => {
        this.update();
      },
      paneName: 'floatShadow',
      zIndex: 9999,
    });

    this.map = map;
    this.isLoad = false;
    this.isStart = false;
    this.isMove = false;
    this.data = data;
  }

  /**
   * drawSite
   * @description - 绘制站点
   * @param point
   */
  drawSite(point) {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.beginPath();

    const color = Util.color16();

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    const pixel = this.map.pointToPixel(point);

    ctx.ellipse(pixel.x, pixel.y, radius, radius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
  }

  /**
   * openInfoWindow
   */
  openInfoWindow(point) {
    const content = \`<div>info</div>\`;

    const infoWindow = new BMap.InfoWindow(content, {
      enableAutoPan: false,
      enableCloseOnClick: false,
    });

    this.map.openInfoWindow(infoWindow, point);
  }

  /**
   * findPixelToItems
   */
  findPixelToItems(curPixel) {
    const findIndexes = [];

    for (let i = 0; i < this.data.length; i++) {
      const point = this.data[i];

      const itemPixel = this.map.pointToPixel(point);

      const _x = curPixel.x - itemPixel.x;
      const _y = curPixel.y - itemPixel.y;
      if (!(_x * _x + _y * _y > radius * 2.5 * (radius * 2.5))) {
        findIndexes.push(i);
      }
    }

    return findIndexes.map((index) => this.data[index]);
  }

  /**
   * initEvents
   */
  initEvents() {
    this.canvas.addEventListener('touchstart', () => {
      this.isStart = true;
      this.startTime = new Date().getTime();
    });

    this.canvas.addEventListener('touchmove', () => {
      this.isMove = true;
    });

    this.canvas.addEventListener('touchend', (e) => {
      this.endTime = new Date().getTime();

      const step = this.endTime - this.startTime;

      if (
        (this.isStart && !this.isMove) ||
        (this.isStart && this.isMove && step <= 200) /*事件少于200ms*/
      ) {
        const x = e.changedTouches[0].clientX;
        const y = e.changedTouches[0].clientY;

        const curPixel = { x, y };

        const items = this.findPixelToItems(curPixel);

        if (items && items.length) {
          const item = items[items.length - 1];
          this.openInfoWindow(item);
          this.map.panTo(item);
        } else {
          this.map.closeInfoWindow();
        }
      } else {
        this.map.closeInfoWindow();
      }

      this.isStart = this.isMove = false;
      this.endTime = this.startTime = null;
    });
  }

  /**
   * update
   * @description - 绘制的回调函数h
   */
  update() {
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    if (!this.isLoad) {
      this.initEvents();
    }

    this.isLoad = true;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.data.forEach((point) => {
      this.drawSite(point);
    });
  }
}

export default VectoryLayer;
`;

function MassivePoints() {
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

    map.addOverlay(
      new VectorLayer(
        map,
        data
          .map((t) => t.geo)
          .flat()
          .map((t) => ({ lng: t[0], lat: t[1] })),
      ),
    );
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
          title: 'VectoryLayer.js',
          mode: 'code',
          scope: { React },
          codeText: VectoryLayerCodeText,
        },
      ]}
    >
      <div className={styles.Wrap} ref={ref} />
    </PlaygroundMulti>
  );
}

export default MassivePoints;
