# 简介
&ensp;&ensp;对百度地图的封装
* VectorLayer
  - VectorSource
  * Geometry  
    - CircleGeometry
    - LeafGeometry
    - LineStringGeometry
    - MulitCircleGeometry
    - MulitLeafGeometry
    - MulitLineStringGeometry
    - MulitPointGeometry
    - MulitPolygonGeometry
    - MulitRadiusRectGeometry
    - MulitRectGeometry
    - MulitRegularPolygonGeometry
    - MulitSectorGeometry
    - MulitStartGeometry
    - PointGeometry
    - PolygonGeometry
    - RadiusRectGeometry
    - RectGeometry
    - RegularPolygonGeometry
    - SectorGeometry
    - StartGeometry
    - TextGeometry 
  * Format
    - GeoJSON  
* interaction(交互式绘制)
  * DrawAction
    - CircleDrawAction
    - DiamondDrawAction
    - DistanceDrawAction
    - FreeDrawAction
    - PolygonDrawAction
    - RectangleDrawAction
    - StartDrawAction
    - TriangleDrawAction 
  * ModifyAction
    - CircleModifyAction
    - DiamondModifyAction
    - PolygonModifyAction
    - RectangleModifyAction
    - StartModifyAction
    - TriangleModifyAction
* WindLayer(风场)
* AirPressureLayer(气压)
* 热力图-温度、湿度
* 轨迹回放
* Util

# ✨ 特性
- 支持 react(18.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)

# 🖥 兼容环境
- 现代浏览器，IE11

# 📦 安装
```javascript
npm install @baifendian/adhere-ui-bmap --save
``` 

```javascript
yarn add @baifendian/adhere-ui-bmap
```

# 线上地址(临时)
[https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/bmap](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/bmap)
