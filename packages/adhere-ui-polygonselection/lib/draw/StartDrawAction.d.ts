import { IPoint, IStartData, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * StartDrawAction
 * @class
 * @classdesc - 五角星选取
 * @remark: - 一个start - end的周期中只能绘制一个五角星
 */
declare class StartDrawAction extends DrawAction {
    protected centerPoint: IPoint | null;
    protected outRadius: number;
    protected innerRadius: number;
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
    static booleanPointInData(point: IPoint, data: IStartData): boolean;
    /**
     * drawStart
     * @param ctx
     * @param data
     */
    static drawStart({ ctx, data }: {
        ctx: CanvasRenderingContext2D;
        data: IStartData;
    }): void;
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
    static draw(ctx: CanvasRenderingContext2D, data: IStartData): void;
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
export default StartDrawAction;
