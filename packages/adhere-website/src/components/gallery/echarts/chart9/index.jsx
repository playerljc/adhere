import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';
import point from './point_y.png';
import geoJson from './guangxi.geo.json';
import styles from './index.less';
import data from './config';

// 绘制地图
echarts.registerMap('guangxi', geoJson);

const mapColor = {
  shadowColor1: '#8DFFFF',
  shadowColor2: '#1E3C55',
  effectScatterColor: '#00FFFF',
};

let maxValue = 0;
if (data.length) {
  maxValue =
    0.9 /
    Math.max(
      ...data.map((item) => item.accidentNum || 0).concat(data.map((item) => item.dieNum || 0)),
    );
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
// 柱状体的主干
const lineTrunk1 = () => {
  return data
    .filter((item) => item.accidentNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        coords: [
          [val1 - 0.06, val2],
          [val1 - 0.06, val2 + item.accidentNum * maxValue],
        ],
      };
    });
};

// 柱状体的顶部
const scatterTop1 = () => {
  return data
    .filter((item) => item.accidentNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        value: [val1 - 0.06, val2 + item.accidentNum * maxValue],
        number: item.accidentNum,
      };
    });
};

// 柱状体的底部
const scatterBottom1 = () => {
  return data
    .filter((item) => item.accidentNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        name: item.name,
        value: [val1 - 0.06, val2],
      };
    });
};

// 柱状体的主干
const lineTrunk2 = () => {
  return data
    .filter((item) => item.dieNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        coords: [
          [val1 + 0.06, val2],
          [val1 + 0.06, val2 + item.dieNum * maxValue],
        ],
      };
    });
};

// 柱状体的顶部
const scatterTop2 = () => {
  return data
    .filter((item) => item.dieNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        value: [val1 + 0.06, val2 + item.dieNum * maxValue],
        number: item.dieNum,
      };
    });
};

// 柱状体的底部
const scatterBottom2 = () => {
  return data
    .filter((item) => item.dieNum)
    .map((item) => {
      const val1 = Number(item.centroid[0]);
      const val2 = Number(item.centroid[1]);
      return {
        name: item.name,
        value: [val1 + 0.06, val2],
      };
    });
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
    // 蓝色柱
    // 柱状体的主干
    {
      type: 'lines',
      z: 9,
      lineStyle: {
        width: 10, // 尾迹线条宽度
        color: 'rgba(0, 244, 251, 0.51)',
        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        // color: {
        //     type: 'radial',
        //     x: 0.5,
        //     y: 0.5,
        //     r: 0.5,
        //     colorStops: [{
        //         offset: 0, color: 'rgba(0, 244, 251, 0.51)' // 0% 处的颜色
        //     }, {
        //         offset: 1, color: 'rgba(6, 147, 255, 0.51)' // 100% 处的颜色
        //     }],
        //     global: false // 缺省为 false
        // },
        opacity: 1, // 尾迹线条透明度
        curveness: 0, // 尾迹线条曲直度
      },
      label: {
        show: false,
      },
      silent: true,
      data: lineTrunk1(),
    },
    // 柱状体的顶部
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      z: 10,
      label: {
        show: true,
        color: '#fff',
        formatter: (a) => {
          return a.data.number;
        },
        position: 'top',
        fontSize: 10,
      },
      symbol: 'circle',
      symbolSize: [10, 5],
      itemStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: '#00F4FB', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#0693FF', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 1,
      },
      silent: true,
      data: scatterTop1(),
    },
    // 柱状体的底部
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      z: 8,
      label: {
        show: false,
      },
      symbol: 'circle',
      symbolSize: [10, 5],
      itemStyle: {
        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: '#00F4FB', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#0693FF', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 1,
      },
      silent: true,
      data: scatterBottom1(),
    },
    // 紫色柱
    {
      type: 'lines',
      z: 9,
      lineStyle: {
        width: 10, // 尾迹线条宽度
        color: 'rgba(75, 38, 246, 0.52)',
        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        // color: {
        //     type: 'radial',
        //     x: 0.5,
        //     y: 0.5,
        //     r: 0.5,
        //     colorStops: [{
        //         offset: 0, color: 'rgba(75, 38, 246, 0.52)' // 0% 处的颜色
        //     }, {
        //         offset: 1, color: 'rgba(77, 37, 253, 0.89)' // 100% 处的颜色
        //     }],
        //     global: false // 缺省为 false
        // },
        opacity: 1, // 尾迹线条透明度
        curveness: 0, // 尾迹线条曲直度
      },
      label: {
        show: false,
      },
      silent: true,
      data: lineTrunk2(),
    },
    // 柱状体的顶部
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      z: 10,
      label: {
        show: true,
        color: '#fff',
        formatter: (a) => {
          return a.data.number;
        },
        position: 'top',
        fontSize: 10,
      },
      symbol: 'circle',
      symbolSize: [10, 5],
      itemStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: '#4B26F6', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#4D25FD', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 1,
      },
      silent: true,
      data: scatterTop2(),
    },
    // 柱状体的底部
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      z: 8,
      label: {
        show: false,
      },
      symbol: 'circle',
      symbolSize: [10, 5],
      itemStyle: {
        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: '#4B26F6', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#4D25FD', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 1,
      },
      silent: true,
      data: scatterBottom2(),
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
                borderColor: '#FF0000',
                areaColor: 'rgba(255, 0, 0, .5)',
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
