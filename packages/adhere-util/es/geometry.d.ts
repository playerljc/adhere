/**
 * 集合图形绘制工具类
 * @description 提供常用的集合图形绘制和几何变换工具
 */
import { IPoint } from './types';
declare const _default: {
    /**
     * 绘制星形
     * @param ctx - Canvas 2D 上下文
     * @param config - 星形配置项
     * @param onDraw - 绘制回调
     * @returns void
     */
    drawStart(ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    /**
     * 绘制扇形
     * @param ctx - Canvas 2D 上下文
     * @param config - 扇形配置项
     * @param onDraw - 绘制回调
     * @returns void
     */
    drawSector(ctx: CanvasRenderingContext2D, config: {
        center: IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    /**
     * 绘制 n 叶草
     * @param ctx - Canvas 2D 上下文
     * @param config - n 叶草配置项
     * @param onDraw - 绘制回调
     * @returns void
     */
    drawLeaf(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    /**
     * 绘制正多边形
     * @param ctx - Canvas 2D 上下文
     * @param config - 正多边形配置项
     * @param onDraw - 绘制回调
     * @returns void
     */
    drawRegularPolygon(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    /**
     * 绘制圆角矩形
     * @param ctx - Canvas 2D 上下文
     * @param config - 圆角矩形配置项
     * @param onDraw - 绘制回调
     * @returns void
     */
    drawRadiusRect(ctx: CanvasRenderingContext2D, config: {
        leftTop: IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => void): void;
    /**
     * 计算图片缩放后元素的新位置和宽高
     * @param params - 元素原始信息和图片尺寸信息
     * @returns 新位置和宽高数组
     */
    calculateNewElementsInfo({ elementsInfo, widthOrigin, heightOrigin, widthNew, heightNew, }: {
        elementsInfo: {
            x: number;
            y: number;
            width: number;
            height: number;
        }[];
        widthOrigin: number;
        heightOrigin: number;
        widthNew: number;
        heightNew: number;
    }): {
        newX: number;
        newY: number;
        newWidth: number;
        newHeight: number;
    }[];
};
export default _default;
