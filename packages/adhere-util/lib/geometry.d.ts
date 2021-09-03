import { IPoint } from './types';
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
};
/**
 * 集合图形绘制
 */
export default _default;
