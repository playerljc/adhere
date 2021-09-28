import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';
import point from './point_y.png';
import geoJson from './guangxi.geo.json';
import data from './config';
import sectorImg from './shape.png';
import styles from './index.less';

// 绘制地图
echarts.registerMap('guangxi', geoJson);

const mapColor = {
  shadowColor1: '#8DFFFF',
  shadowColor2: '#1E3C55',
  effectScatterColor: '#00FFFF',
};

const geoCoordMap = {};
if (data) {
  data.forEach((item) => {
    geoCoordMap[item.name] = item.centroid;
  });
}

// 涟漪
const scatterRiff = () => {
  return data.map((item) => {
    return {
      name: item.name,
      value: item.centroid,
    };
  });
};

// 扇形
const scatterSector = () => {
  return data.map((item) => {
    return [item.centroid[0], item.centroid[1] + 0.3];
  });
};

// 路线
const formtGCData = (geoData, data, srcNam, dest) => {
  var tGeoDt = [];
  if (dest) {
    for (var i = 0, len = data.length; i < len; i++) {
      if (srcNam != data[i].name) {
        tGeoDt.push({
          coords: [geoData[srcNam], geoData[data[i].name]],
        });
      }
    }
  } else {
    for (var i = 0, len = data.length; i < len; i++) {
      if (srcNam != data[i].name) {
        tGeoDt.push({
          coords: [geoData[data[i].name], geoData[srcNam]],
        });
      }
    }
  }
  return tGeoDt;
};

const option = {
  geo: [
    {
      map: 'guangxi',
      aspectScale: 0.75, //长宽比
      zoom: 1,
      roam: false,
      label: {
        show: false,
      },
      itemStyle: {
        normal: {
          areaColor: '#013C62',
          shadowColor: '#000',
          shadowOffsetX: 0,
          shadowOffsetY: 5,
          borderWidth: 0,
        },
        emphasis: {
          areaColor: '#2AB8FF',
          borderWidth: 0,
        },
      },
      z: 5,
      silent: true,
      left: 20,
      top: 10,
      bottom: 10,
      right: 20,
    },
    {
      map: 'guangxi',
      aspectScale: 0.75, //长宽比
      zoom: 1.1,
      roam: false,
      label: {
        show: false,
      },
      itemStyle: {
        normal: {
          areaColor: '#013C62',
          shadowColor: mapColor.shadowColor1,
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          borderWidth: 0,
        },
        emphasis: {
          areaColor: '#2AB8FF',
          borderWidth: 0,
        },
      },
      z: 4,
      silent: true,
      left: 20,
      top: 10,
      bottom: 10,
      right: 20,
    },
    {
      map: 'guangxi',
      aspectScale: 0.75, //长宽比
      zoom: 1.1,
      roam: false,
      label: {
        show: false,
      },
      itemStyle: {
        normal: {
          areaColor: '#013C62',
          shadowColor: '#020925',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          borderWidth: 0,
        },
        emphasis: {
          areaColor: '#2AB8FF',
          borderWidth: 0,
        },
      },
      z: 3,
      silent: true,
      left: 20,
      top: 10,
      bottom: 10,
      right: 20,
    },
    {
      map: 'guangxi',
      aspectScale: 0.75, //长宽比
      zoom: 1.1,
      roam: false,
      label: {
        show: false,
      },
      itemStyle: {
        normal: {
          areaColor: '#013C62',
          shadowColor: mapColor.shadowColor2,
          shadowOffsetX: 0,
          shadowOffsetY: 20,
          borderWidth: 0,
        },
        emphasis: {
          areaColor: '#2AB8FF',
          borderWidth: 0,
        },
      },
      z: 2,
      silent: true,
      left: 20,
      top: 10,
      bottom: 10,
      right: 20,
    },
  ],
  series: [
    // map
    {
      type: 'map',
      label: {
        show: false,
      },
      emphasis: {
        label: false,
      },
      itemStyle: {
        normal: {
          borderColor: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#F68604',
              },
              {
                offset: 1,
                color: '#FFBC00',
              },
            ],
            false,
          ),
          borderWidth: 1.5,
          areaColor: 'rgba(3, 42, 76, 1)',
        },
        emphasis: {
          areaColor: 'rgba(3, 42, 76, 1)',
          borderWidth: 1.5,
        },
      },
      zoom: 1.1,
      roam: false,
      map: 'guangxi',
      z: 6,
      data,
      silent: true,
      left: 20,
      top: 10,
      bottom: 10,
      right: 20,
    },
    // 带涟漪特效的气泡
    {
      tooltip: {
        show: false,
      },
      type: 'effectScatter',
      coordinateSystem: 'geo',
      rippleEffect: {
        scale: 10,
        brushType: 'stroke',
      },
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          shadowColor: '#fff',
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          color: mapColor.effectScatterColor,
        },
      },
      label: {
        show: true,
        color: '#fff',
        position: 'bottom',
        distance: 15,
        formatter: (a) => {
          return a.name;
        },
        fontSize: 10,
      },
      emphasis: {
        label: {
          show: true,
          color: '#fff',
        },
      },
      symbol: 'circle',
      symbolSize: [10, 3],
      data: scatterRiff(),
      z: 7,
      silent: true,
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      z: 8,
      label: {
        show: false,
      },
      symbol: `image://${sectorImg}`,
      symbolSize: [26.3, 30],
      silent: true,
      data: scatterSector(),
    },
    {
      type: 'lines',
      z: 9,
      effect: {
        show: true,
        period: 4,
        trailLength: 0.1,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#fac12c', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#fac12c4c', // 100% 处的颜色
            },
          ],
        },
        symbol: 'pin',
        symbolSize: [10, 20],
      },
      lineStyle: {
        normal: {
          type: 'dashed',
          dashOffset: 5,
          color: '#FAC12C',
          width: 2,
          opacity: 0.8,
          curveness: 0.2,
        },
      },
      data: formtGCData(geoCoordMap, data, '南宁市', true),
      silent: true,
    },
    {
      type: 'lines',
      z: 9,
      effect: {
        show: true,
        period: 4,
        trailLength: 0.1,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#E60012', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#e600124c', // 100% 处的颜色
            },
          ],
        },
        symbol: 'pin',
        symbolSize: [10, 20],
      },
      lineStyle: {
        normal: {
          type: 'dashed',
          dashOffset: 5,
          color: '#E60012',
          width: 2,
          opacity: 0.8,
          curveness: 0.2,
        },
      },
      data: formtGCData(geoCoordMap, data, '南宁市', false),
      silent: true,
    },
  ],
};

export default () => {
  const echartMap = useRef(null);

  // 页面加载完毕
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFlag(flag);
  }, [flag]);

  useEffect(() => {
    setFlag(true);
    // 将某一项高亮
    let instance = echartMap.current.getEchartsInstance();
    let result = instance.getOption();
    result.series[0].data = data.map((item) => {
      return {
        name: item.name,
        itemStyle:
          item.name === '南宁市'
            ? {
                borderColor: '#FFF100',
                areaColor: 'rgba(255, 241, 0, .5)',
              }
            : {},
      };
    });
    instance.setOption(result, true);
  }, []);

  // 经纬度变成坐标点
  const getPoint = (current) => {
    if (!echartMap.current || !option) return;
    const echarts = echartMap.current.getEchartsInstance();
    // 获取系列
    var seriesModel = echarts.getModel().getSeriesByIndex(option?.series?.length - 1);
    // 获取地理坐标系实例
    var coordSys = seriesModel?.coordinateSystem;
    // dataToPoint 相当于 getPosByGeo
    var point = coordSys?.dataToPoint([current[0], current[1]]);
    return point ? { x: point[0], y: point[1] } : { x: 0, y: 0 };
  };

  // 渲染钻石
  const renderDiamonds = () => {
    if (!echartMap.current || !option) return;
    const { x, y } = getPoint([108.467546, 23.055985]);
    const top = y - 20;
    const left = x - 25;
    return (
      <div className="echart-map-tooltip" style={{ top, left, zIndex: 10 }}>
        <img src={point} />
      </div>
    );
  };
  return (
    <>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
      import React from 'react';
      import ReactECharts from 'echarts-for-react';
      
      const option = ${JSON.stringify(option, null, 2)}
      
      <ReactECharts option={option} />
        `}
      >
        <div className={styles.Map}>
          <ReactECharts option={option} ref={echartMap} />
          {/* 渲染钻石 */}
          {flag ? renderDiamonds() : <></>}
        </div>
      </Playground>
    </>
  );
};
