import { CircleData, IPoint, RectangleData } from './types';
/**
 * 工具类
 * @class Util
 * @classdesc 提供多边形选择相关的工具方法
 */
declare class Util {
    /**
     * 获取矩形的左上角坐标
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @returns 左上角坐标点，如果参数无效则返回null
     * @description 根据两个点计算矩形的左上角坐标
     */
    static getRectLeftTopPoint({ startPoint, targetPoint, }: {
        startPoint: IPoint;
        targetPoint: IPoint;
    }): IPoint | null;
    /**
     * 计算两点之间的距离
     * @param p1 - 第一个点
     * @param p2 - 第二个点
     * @returns 两点之间的距离
     * @description 使用欧几里得距离公式计算两点间距离
     */
    static getDistance(p1: IPoint, p2: IPoint): number;
    /**
     * 计算两点之间的中点
     * @param p1 - 第一个点
     * @param p2 - 第二个点
     * @returns 中点坐标
     * @description 计算两个点的中点坐标
     */
    static getMidPoint(p1: IPoint, p2: IPoint): IPoint;
    /**
     * 计算三角形三个顶点
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @returns 三角形三个顶点的数组
     * @description 根据起始点和目标点计算等边三角形的三个顶点
     */
    static triangle({ startPoint, targetPoint, }: {
        startPoint: IPoint;
        targetPoint: IPoint;
    }): IPoint[];
    /**
     * 计算星形的顶点
     * @param center - 星形中心点
     * @param outRadius - 外半径
     * @param innerRadius - 内半径
     * @param points - 星形顶点数量，默认为5
     * @returns 星形顶点数组
     * @description 根据中心点和半径计算星形的所有顶点
     */
    static calculateStarPoints(center: IPoint, outRadius: number, innerRadius: number, points?: number): IPoint[];
    /**
     * 计算菱形的顶点
     * @param leftTopPoint - 左上角点
     * @param width - 宽度
     * @param height - 高度
     * @returns 菱形顶点数组
     * @description 根据矩形的左上角点和尺寸计算菱形的四个顶点
     */
    static calculateDiamondPoints(leftTopPoint: IPoint, width: number, height: number): IPoint[];
    /**
     * 判断点是否在矩形内
     * @param point - 待判断的点
     * @param rect - 矩形数据
     * @returns 点是否在矩形内
     * @description 判断指定点是否在矩形区域内
     */
    static isPointInRectangle(point: IPoint, rect: RectangleData): boolean;
    /**
     * 判断点是否在圆形内
     * @param point - 待判断的点
     * @param circle - 圆形数据
     * @returns 点是否在圆形内
     * @description 判断指定点是否在圆形区域内
     */
    static isPointInCircle(point: IPoint, circle: CircleData): boolean;
    /**
     * 获取矩形的边界框
     * @param rect - 矩形数据
     * @returns 边界框对象
     * @description 获取矩形的边界框信息
     */
    static getRectangleBounds(rect: RectangleData): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    /**
     * 获取圆形的边界框
     * @param circle - 圆形数据
     * @returns 边界框对象
     * @description 获取圆形的边界框信息
     */
    static getCircleBounds(circle: CircleData): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    /**
     * 计算点到线段的距离
     * @param point - 点坐标
     * @param lineStart - 线段起点
     * @param lineEnd - 线段终点
     * @returns 点到线段的距离
     * @description 计算点到线段的最短距离
     */
    static pointToLineDistance(point: IPoint, lineStart: IPoint, lineEnd: IPoint): number;
    /**
     * 判断点是否在多边形内（射线法）
     * @param point - 待判断的点
     * @param polygon - 多边形顶点数组
     * @returns 点是否在多边形内
     * @description 使用射线法判断点是否在多边形内
     */
    static isPointInPolygon(point: IPoint, polygon: IPoint[]): boolean;
    /**
     * 计算多边形的面积
     * @param polygon - 多边形顶点数组
     * @returns 多边形面积
     * @description 使用鞋带公式计算多边形面积
     */
    static calculatePolygonArea(polygon: IPoint[]): number;
    /**
     * 计算多边形的重心
     * @param polygon - 多边形顶点数组
     * @returns 重心坐标
     * @description 计算多边形的重心坐标
     */
    static calculatePolygonCentroid(polygon: IPoint[]): IPoint;
}
export default Util;
