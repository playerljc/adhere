import { CircleData, IActionData, ICircleData, IDiamondData, IPoint, IPolygonData, IRectangleData, IStartData, ITriangleData, OutCircleData, Points, RectangleData } from '../types';
/**
 * 绘制圆形
 * @param ctx - Canvas上下文
 * @param data - 圆形数据
 * @description 在Canvas上绘制圆形路径
 */
export declare function drawCircle(ctx: CanvasRenderingContext2D, data: ICircleData): void;
/**
 * 获取圆形的外接矩形
 * @param circleData - 圆形数据
 * @returns 外接矩形数据
 * @description 根据圆形数据计算其外接矩形
 */
export declare function getCircleRectangle(circleData: CircleData): RectangleData;
/**
 * 绘制矩形
 * @param ctx - Canvas上下文
 * @param data - 矩形数据
 * @description 在Canvas上绘制矩形路径
 */
export declare function drawRectangle(ctx: CanvasRenderingContext2D, data: IRectangleData): void;
/**
 * 获取矩形的外接矩形（即自身）
 * @param rectangleData - 矩形数据
 * @returns 矩形数据本身
 * @description 矩形的外接矩形就是其自身
 */
export declare function getSelfRectangle(rectangleData: RectangleData): RectangleData;
/**
 * 绘制菱形
 * @param ctx - Canvas上下文
 * @param data - 菱形数据
 * @description 在Canvas上绘制菱形路径
 */
export declare function drawDiamond(ctx: CanvasRenderingContext2D, data: IDiamondData): void;
/**
 * 获取菱形的外接矩形
 * @param diamondData - 菱形数据
 * @returns 外接矩形数据
 * @description 根据菱形数据计算其外接矩形
 */
export declare function getDiamondRectangle(diamondData: RectangleData): RectangleData;
/**
 * 绘制星形
 * @param ctx - Canvas上下文
 * @param data - 星形数据
 * @description 在Canvas上绘制五角星路径
 */
export declare function drawStart(ctx: CanvasRenderingContext2D, data: IStartData): void;
/**
 * 获取星形的外接矩形
 * @param startData - 星形数据
 * @returns 外接矩形数据
 * @description 根据星形数据计算其外接矩形（基于外圆）
 */
export declare function getStartRectangle(startData: OutCircleData): RectangleData;
/**
 * 绘制三角形
 * @param ctx - Canvas上下文
 * @param data - 三角形数据
 * @description 在Canvas上绘制三角形路径
 */
export declare function drawTriangle(ctx: CanvasRenderingContext2D, data: ITriangleData): void;
/**
 * 获取三角形的外接矩形
 * @param triangleData - 三角形数据
 * @returns 外接矩形数据
 * @description 根据三角形数据计算其外接矩形
 */
export declare function getTriangleRectangle(triangleData: Points): RectangleData;
/**
 * 绘制多边形
 * @param ctx - Canvas上下文
 * @param data - 多边形数据
 * @description 在Canvas上绘制多边形路径
 */
export declare function drawPolygon(ctx: CanvasRenderingContext2D, data: IPolygonData): void;
/**
 * 获取多边形的外接矩形
 * @param polygonData - 多边形点数组
 * @returns 外接矩形数据
 * @description 根据多边形点数组计算其外接矩形
 */
export declare function getPolygonRectangle(polygonData: IPoint[]): RectangleData;
/**
 * 获取裁剪数据的URL
 * @param data - Action数据
 * @param clipCtx - 裁剪Canvas上下文
 * @returns base64格式的图片数据URL
 * @description 根据几何图形数据裁剪图片并返回base64格式的数据URL
 */
export declare function getClipDataUrl({ data, clipCtx, }: {
    data: IActionData;
    clipCtx: CanvasRenderingContext2D;
}): string;
/**
 * 排序工具函数
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 * @description 根据sort属性对数组进行排序，没有sort属性的元素保持原位置
 */
export declare function sort(arr: Array<{
    [key: string]: any;
    sort?: number;
}>): Array<any>;
