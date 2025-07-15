import Dict from '@baifendian/adhere-util-dict';
import type { GisConfigDict, GisCoordinate, GisMapExtent } from '../types';

/**
 * GIS配置字典
 * 提供地理信息系统相关的配置参数
 */
const GisConfig: GisConfigDict = {
  /**
   * 初始化静态GIS配置
   * 设置坐标系统、地图范围和中心点等参数
   */
  initStatic(): void {
    /**
     * EPSG:4326坐标系统
     * WGS84地理坐标系统
     */
    Dict.handlers.ResourceGisEpsg4326 = (): string => 'EPSG:4326';

    /**
     * EPSG:3857坐标系统
     * Web墨卡托投影坐标系统
     */
    Dict.handlers.ResourceGisEpsg3857 = (): string => 'EPSG:3857';

    /**
     * 地球半径
     * 单位：米
     */
    Dict.handlers.ResourceGisEarthRadius = (): number => 6378137.0;

    /**
     * 地图最大缩放级别
     */
    Dict.handlers.ResourceGisMapMaxZoom = (): number => 17;

    /**
     * 地图最小缩放级别
     */
    Dict.handlers.ResourceGisMapMinZoom = (): number => 11;

    /**
     * 常州市新北区地图范围
     * 西南角和东北角坐标
     */
    Dict.handlers.ResourceGisXinbeiquMapExtent = (): GisMapExtent => [
      [119.438, 32.13607],
      [120.33419, 31.74221],
    ];

    /**
     * 最大最小范围
     * 全球范围
     */
    Dict.handlers.ResourceGisDefaultExtent = (): GisMapExtent => [
      [-180, -90],
      [180, 90],
    ];

    /**
     * 常州市新北区中心点
     * 经纬度坐标
     */
    Dict.handlers.ResourceGisXinbeiquCenterPoint = (): GisCoordinate => [119.879673, 31.933156];
  },

  /**
   * 初始化远程GIS配置
   * 预留接口，用于加载远程GIS数据
   */
  initRemote(): void {
    // 预留接口，用于加载远程GIS数据
  },
};

export default GisConfig;
