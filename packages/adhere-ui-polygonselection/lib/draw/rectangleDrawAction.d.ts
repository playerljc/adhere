import { IPoint, IRectangleData, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * RectangleDrawAction
 * @class
 * @classdesc - 矩形选取
 * @remark: - 一个start - end的周期中只能绘制一个矩形
 */
declare class RectangleDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected leftTopPoint: IPoint | null;
    protected width: number;
    protected height: number;
    protected isMove: boolean;
    /**
     * context
     */
    constructor();
    /**
     * booleanPointInData
     * @description 判断点是否在
     * @param point
     * @param data
     */
    static booleanPointInData(point: IPoint, data: IRectangleData): boolean;
    /**
     * draw
     * @param e
     */
    private draw;
    /**
     * onCanvasMouseDown
     * @param e
     */
    private onCanvasMouseDown;
    /**
     * onCanvasMouseMove
     * @param e
     */
    private onCanvasMouseMove;
    /**
     * onCanvasMouseUp
     * @param e
     */
    private onCanvasMouseUp;
    /**
     * draw
     * @description
     * @param ctx
     * @param data
     */
    static draw(ctx: CanvasRenderingContext2D, data: IRectangleData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: any): void;
    /**
     * start
     * @param style
     */
    start(style: IStyle): void;
    /**
     * end
     */
    end(e: any): void;
    /**
     * destroy
     */
    destroy(): void;
}
export default RectangleDrawAction;
