import { IPoint } from './types';
/**
 * 集合图形绘制
 */
declare const _default: {
    /**
     * drawStart - 绘制星
     * @param ctx
     * @param config
     * @param onDraw
     * @return IPoint []
     */
    drawStart(ctx: CanvasRenderingContext2D, config: {
        startCount: number;
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    /**
     * drawSector - 扇形
     * @param ctx
     * @param config
     * @param onDraw
     */
    drawSector(ctx: CanvasRenderingContext2D, config: {
        center: IPoint;
        radius: number;
        angle1: number;
        angle2: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    /**
     * drawLeaf - n叶草
     * @param ctx
     * @param config
     * @param onDraw
     */
    drawLeaf(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: IPoint;
        size: number;
        length: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    /**
     * drawRegularPolygon - 正多边形
     * @param ctx
     * @param config
     * @param onDraw
     */
    drawRegularPolygon(ctx: CanvasRenderingContext2D, config: {
        n: number;
        center: IPoint;
        size: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    /**
     * drawRadiusRect - 圆角矩形
     * @param ctx
     * @param config
     * @param onDraw
     */
    drawRadiusRect(ctx: CanvasRenderingContext2D, config: {
        leftTop: IPoint;
        width: number;
        height: number;
        radius: number;
    }, onDraw: (ctx: CanvasRenderingContext2D) => {}): void;
    /**
     * calculateNewElementsInfo
     * @description 计算图片大小变化后元素的新位置和宽高
     * @param {{x:number;y:number;width:number;height:number;}[]} elementsInfo - 元素原始信息数组，每个元素是一个包含x、y、width、height的对象
     * @param {number} widthOrigin - 原始图片宽度
     * @param {number} heightOrigin - 原始图片高度
     * @param {number} widthNew - 新的图片宽度
     * @param {number} heightNew - 新的图片高度
     * @returns {{
     *   newX:number;
     *   newY:number;
     *   newWidth:number;
     *   newHeight:number;
     * }[]} - 元素的新位置和宽高信息数组
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
