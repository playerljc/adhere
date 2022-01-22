// @ts-ignore
import React from 'react';

/**
 * IBMapProps
 * @interface IBMapProps
 */
export interface IBMapProps {
  className?: string;
  style?: React.CSSProperties;
  ak: string;
  config: IMapOptions;
  zoom?: number;
  center?: {
    lon: number;
    lat: number;
  };
  onBMapInitReady: Function;
  onBMapScriptReady: Function;
  externalImportBMapScript: boolean;
}

export interface IBMapState {
  isReady: boolean;
}

export interface IMapOptions {
  // 地图允许展示的最小级别
  minZoom: number;
  // 地图允许展示的最大级别
  maxZoom: number;
  // 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
  // 地图类型，默认为BMAP_NORMAL_MAP
  mapType: any;
  enableHighResolution: boolean;
  // 是否自动适应地图容器变化，默认启用
  enableAutoResize: boolean;
  // 是否开启底图可点功能，默认启用
  enableMapClick: boolean;
}

export interface IPoint {
  lng: number;
  lat: number;
}

export interface BMapAirPressureLayerConfig {
  map: any;
  data: Array<IPoint[]>;
  paneName:
    | 'floatPane'
    | 'floatShadow'
    | 'labelPane'
    | 'mapPane'
    | 'markerMouseTarget'
    | 'markerPane'
    | 'markerShadow'
    | 'vertexPane';
  zIndex: number;
  style: {
    strokeStyle: string;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
  };
}
