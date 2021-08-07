import { IPoint, IDiamondData, IStyle } from '../types';
import DrawAction from './drawAction';
/**
 * DiamondDrawAction
 * @class
 * @classdesc - 菱形选取
 * @remark: - 一个start - end的周期中只能绘制一个菱形
 */
declare class DiamondDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected leftTopPoint: IPoint | null;
    protected width: number;
    protected height: number;
    /**
     * context
     */
    constructor();
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
    static draw(ctx: CanvasRenderingContext2D, data: IDiamondData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: {
        leftTopPoint: IPoint | null;
        width: number;
        height: number;
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
export default DiamondDrawAction;
