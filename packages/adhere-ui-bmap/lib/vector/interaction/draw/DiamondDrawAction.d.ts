import { IPoint, IDiamondData, IStyle, SelectType, IInteractionLayer } from '../types';
import DrawAction from './DrawAction';
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
    protected isMove: boolean;
    /**
     * context
     */
    constructor();
    /**
     * booleanPointInData
     * @description 判断点是否在
     * @param context
     * @param point
     * @param data
     */
    static booleanPointInData(context: IInteractionLayer, point: IPoint, data: IDiamondData): boolean;
    /**
     * draw
     * @param e
     */
    protected draw(e: any): void;
    /**
     * draw
     * @description
     * @param context
     * @param ctx
     * @param data
     */
    static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IDiamondData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: {
        leftTopPoint: IPoint | null;
        width: number;
        height: number;
    }): void;
    /**
     * onCanvasMouseDown
     * @param e
     */
    protected onCanvasMouseDown(e: any): void;
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
     * transformOriginToReal - 原始数据转换成实际数据
     * @param context
     * @param data
     */
    static transformOriginToReal(context: IInteractionLayer, data: {
        leftTopPoint: IPoint;
        width: number;
        height: number;
    }): {
        leftTopPoint: IPoint;
        width: number;
        height: number;
    };
    /**
     * transformRealToOrigin - 实际数据转换成原始数据
     * @param context
     * @param data
     */
    static transformRealToOrigin(context: IInteractionLayer, data: {
        leftTopPoint: IPoint;
        width: number;
        height: number;
    }): {
        leftTopPoint: IPoint;
        width: number;
        height: number;
    };
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
export default DiamondDrawAction;
