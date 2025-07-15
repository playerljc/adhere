# Adhere UI OLMap

基于 OpenLayers 的地图组件库，提供完整的地图显示、交互和动画功能。

## 特性

- 🗺️ 支持多种地图类型（行政地图、卫星地图）
- 🎨 完整的 TypeScript 类型支持
- 🔧 丰富的图层管理功能
- 🎭 热力图支持
- 🚀 轨迹动画功能
- 📱 响应式设计
- 🎯 完善的 JSDoc 文档

## 安装

```bash
npm install @baifendian/adhere-ui-olmap
```

## 基本使用

```tsx
import React from 'react';
import OLMap, { MapType } from '@baifendian/adhere-ui-olmap';

const MapComponent: React.FC = () => {
  const handleTileLoadEnd = () => {
    console.log('地图瓦片加载完成');
  };

  return (
    <OLMap
      type={MapType.ADMINISTRATIVE}
      zoom={12}
      center={[116.3974, 39.9093]}
      onAllTileloadend={handleTileLoadEnd}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default MapComponent;
```

## API 文档

### OLMap Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| type | MapType | 'administrative' | 地图类型 |
| mapConfig | MapConfig | {} | 地图配置 |
| maxZoom | number \| string | 18 | 最大缩放级别 |
| minZoom | number \| string | 3 | 最小缩放级别 |
| zoom | number \| string | 12 | 当前缩放级别 |
| fitZoom | number \| string | - | 适应缩放级别 |
| layers | any[] | - | 图层数组 |
| center | number[] | [0, 0] | 地图中心点 |
| geoJSONStyle | GeoJSONStyle | - | GeoJSON样式配置 |
| geoJSONData | object | - | GeoJSON数据 |
| extent | number[][] | - | 地图范围 |
| onAllTileloadend | () => void | - | 瓦片加载完成回调 |

### 地图类型

```tsx
enum MapType {
  ADMINISTRATIVE = 'administrative', // 行政地图
  SATELLITE = 'satellite'           // 卫星地图
}
```

### 图层管理

```tsx
import { useRef } from 'react';
import OLMap from '@baifendian/adhere-ui-olmap';

const MapWithLayers: React.FC = () => {
  const mapRef = useRef<any>(null);

  const addGeoJSONLayer = () => {
    if (mapRef.current) {
      const geoJSONData = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [116.3974, 39.9093]
            },
            properties: { name: '北京' }
          }
        ]
      };

      const geoJSONStyle = {
        stroke: { color: '#ff0000', width: 2 },
        fill: { color: 'rgba(255, 0, 0, 0.3)' },
        text: { 
          color: '#000000',
          text: '北京',
          font: '14px Arial'
        }
      };

      mapRef.current.addMainGeoJSONLayer({
        geoJSONStyle,
        geoJSONData
      });
    }
  };

  return (
    <div>
      <button onClick={addGeoJSONLayer}>添加GeoJSON图层</button>
      <OLMap
        ref={mapRef}
        type={MapType.ADMINISTRATIVE}
        zoom={10}
        center={[116.3974, 39.9093]}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
};
```

### 热力图

```tsx
import HeatMap from '@baifendian/adhere-ui-olmap/HeatMap';

const HeatMapComponent: React.FC = () => {
  const heatMapRef = useRef<any>(null);

  const addHeatMap = () => {
    if (heatMapRef.current) {
      const heatMapConfig = {
        radius: 20,
        blur: 15,
        gradient: {
          0.4: 'blue',
          0.6: 'lime',
          0.8: 'orange',
          1.0: 'red'
        }
      };

      heatMapRef.current.addLayer(heatMapConfig);
    }
  };

  return (
    <div>
      <button onClick={addHeatMap}>添加热力图</button>
      <HeatMap
        ref={heatMapRef}
        type={MapType.ADMINISTRATIVE}
        zoom={10}
        center={[116.3974, 39.9093]}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
};
```

### 动画管理器

```tsx
import { AnimationManager } from '@baifendian/adhere-ui-olmap';

const AnimationComponent: React.FC = () => {
  const animationManager = new AnimationManager(vectorSource, {
    arrowImg: '/path/to/arrow.png',
    pointImg: '/path/to/point.png',
    lineWidth: 8,
    lineColor: '#FF5D00'
  });

  const startAnimation = () => {
    const lineData = [
      [116.3974, 39.9093],
      [116.4074, 39.9193],
      [116.4174, 39.9293]
    ];

    const pointsMapIndex = {
      'point1': { id: 'point1', zIndex: 1 },
      'point2': { id: 'point2', zIndex: 2 }
    };

    animationManager.run(lineData, pointsMapIndex);
  };

  return (
    <button onClick={startAnimation}>开始动画</button>
  );
};
```

## 工具类

### TitleLayer

提供各种瓦片图层的创建方法：

```tsx
import { TitleLayer } from '@baifendian/adhere-ui-olmap';

// 创建OSM图层
const osmLayer = TitleLayer.getOSMTileLayer();

// 创建XYZ图层
const xyzLayer = TitleLayer.getXYZTileLayer({
  sourceOptions: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  }
});

// 创建WMTS图层
const wmtsLayer = TitleLayer.getWMTSTileLayer({
  sourceOptions: {
    url: 'https://wmts.example.com/wmts',
    layer: 'layer_name',
    matrixSet: 'EPSG:3857'
  }
});
```

### Util

提供地图操作的工具方法：

```tsx
import { Util } from '@baifendian/adhere-ui-olmap';

// 绘制圆形
const circle = Util.drawCircle({
  center: [116.3974, 39.9093],
  radius: 1000,
  color: 'rgba(255, 0, 0, 0.3)',
  strokeColor: '#ff0000',
  strokeWidth: 2
});

// 绘制多边形
const polygon = Util.drawPolygon({
  points: [[[116.3974, 39.9093], [116.4074, 39.9093], [116.4074, 39.9193]]],
  color: 'rgba(0, 255, 0, 0.3)',
  strokeColor: '#00ff00'
});

// 绘制图片点
const imagePoint = Util.drawImagePoint({
  id: 'point1',
  pos: [116.3974, 39.9093],
  src: '/path/to/icon.png',
  scale: 1,
  rotation: 0
});
```

## 类型定义

所有组件和工具类都提供完整的 TypeScript 类型定义：

```tsx
import type {
  OLMapProps,
  MapType,
  MapConfig,
  GeoJSONStyle,
  HeatMapConfig,
  AnimationConfig,
  DrawParams,
  PointDrawParams,
  ImagePointParams,
  InteractionConfig,
  MapEventCallbacks,
  MapInstance
} from '@baifendian/adhere-ui-olmap';
```

## 开发

### 构建

```bash
npm run build
```

### 测试

```bash
npm run test
```

### 类型检查

```bash
npm run type-check
```

## 许可证

MIT License

