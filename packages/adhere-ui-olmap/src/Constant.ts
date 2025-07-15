/**
 * 地图类型常量
 */
export const MAP_TYPE_ADMINISTRATIVE = 'administrative' as const;
export const MAP_TYPE_SATELLITE = 'satellite' as const;

/**
 * 地图类型枚举
 */
export type MapType = typeof MAP_TYPE_ADMINISTRATIVE | typeof MAP_TYPE_SATELLITE;

/**
 * 地图常量配置
 */
const Constant = {
  /** 行政地图类型 */
  MAP_TYPE_ADMINISTRATIVE,
  /** 卫星地图类型 */
  MAP_TYPE_SATELLITE,
} as const;

export default Constant;
