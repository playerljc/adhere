import { IInteractionLayer, IPoint, IStartData, IStyle, SelectType } from '../types';
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
     * @param context
     * @param point
     * @param data
     */
    static booleanPointInData(context: IInteractionLayer, point: IPoint, data: IStartData): boolean;
    /**
     * drawStart
     * @param context
     * @param ctx
     * @param data
     */
    static drawStart({ context, ctx, data, }: {
        context: IInteractionLayer;
        ctx: CanvasRenderingContext2D;
        data: IStartData;
    }): void;
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
    static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IStartData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: {
        center: IPoint;
        outRadius: number;
        innerRadius: number;
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
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    }): {
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    };
    /**
     * transformRealToOrigin - 实际数据转换成原始数据
     * @param context
     * @param data
     */
    static transformRealToOrigin(context: IInteractionLayer, data: {
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    }): {
        center: IPoint;
        outRadius: number;
        innerRadius: number;
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
export default StartDrawAction;
