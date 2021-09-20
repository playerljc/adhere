import { IFreeData, IInteractionLayer, IPoint, IStyle, SelectType } from '../types';
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
     * @param context
     * @param ctx
     * @param data
     */
    static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IFreeData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: {
        points: IPoint[];
    }): void;
    /**
     * transformRealToOrigin - 实际数据转换成原始数据
     * @param context
     * @param data
     */
    static transformRealToOrigin(context: IInteractionLayer, data: IPoint[]): IPoint[];
    /**
     * transformOriginToReal - 原始数据转换成实际数据
     * @param context
     * @param data
     */
    static transformOriginToReal(context: IInteractionLayer, data: IPoint[]): IPoint[];
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
