/**
 * 地图类型常量
 */
export declare const MAP_TYPE_ADMINISTRATIVE: "administrative";
export declare const MAP_TYPE_SATELLITE: "satellite";
/**
 * 地图类型枚举
 */
export type MapType = typeof MAP_TYPE_ADMINISTRATIVE | typeof MAP_TYPE_SATELLITE;
/**
 * 地图常量配置
 */
declare const Constant: {
    /** 行政地图类型 */
    readonly MAP_TYPE_ADMINISTRATIVE: "administrative";
    /** 卫星地图类型 */
    readonly MAP_TYPE_SATELLITE: "satellite";
};
export default Constant;
