import DrawAction from './DrawAction';
import { IPoint, ICircleData, IStyle } from '../types';
/**
 * CircleDrawAction
 * @class
 * @classdesc - 圆形选取
 * @remark: - 一个start - end的周期中只能绘制一个圆形
 */
declare class CircleDrawAction extends DrawAction {
    protected centerPoint: IPoint | null;
    protected isMove: boolean;
    protected radius: number;
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
    static booleanPointInData(point: IPoint, data: ICircleData): boolean;
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
     * @description 绘制
     * @param ctx
     * @param data
     */
    static draw(ctx: CanvasRenderingContext2D, data: ICircleData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: {
        center: IPoint;
        radius: number;
    }): void;
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
export default CircleDrawAction;
