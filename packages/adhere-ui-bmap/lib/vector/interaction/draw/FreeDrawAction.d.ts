import { IFreeData, IPoint, IStyle, SelectType } from '../types';
import DrawAction from './DrawAction';
/**
 * FreeDrawAction
 * @class
 * @classdesc - 自由绘制选取
 * @remark: - 一个start - end的周期中只能绘制一个自由图形
 */
declare class FreeDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected isMove: boolean;
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
    protected onCanvasMouseMove(e: any): void;
    /**
     * onCanvasMouseUp
     * @param e
     */
    protected onCanvasMouseUp(e: any): void;
    /**
     * draw
     * @description
     * @param ctx
     * @param data
     */
    static draw(ctx: CanvasRenderingContext2D, data: IFreeData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: {
        points: IPoint[];
    }): void;
    getSelectType(): SelectType;
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
