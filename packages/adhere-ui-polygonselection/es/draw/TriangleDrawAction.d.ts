import { IPoint, IStyle, ITriangleData } from '../types';
import DrawAction from './DrawAction';
/**
 * TriangleDrawAction
 * @class
 * @classdesc - 三角形选取
 * @remark: - 一个start - end的周期中只能绘制一个三角形
 */
declare class TriangleDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected points: IPoint[];
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
    static booleanPointInData(point: IPoint, data: ITriangleData): boolean;
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
    static draw(ctx: CanvasRenderingContext2D, data: ITriangleData): void;
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
export default TriangleDrawAction;
