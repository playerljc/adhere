import { IPoint, IStyle } from '../types';
import DrawAction from './drawAction';
/**
 * FreeDrawAction
 * @class
 * @classdesc - 自由绘制选取
 * @remark: - 一个start - end的周期中只能绘制一个自由图形
 */
declare class FreeDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected points: IPoint[];
    /**
     * context
     */
    constructor();
    /**
     * draw
     * @param e
     * @param isEnd
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
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: {
        points: IPoint[];
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
export default FreeDrawAction;
