import { ICircleData, IInteractionLayer, IPoint, IStyle, SelectType } from '../types';
import DrawAction from './DrawAction';
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
     * @param context
     * @param point
     * @param data
     */
    static booleanPointInData(context: IInteractionLayer, point: IPoint, data: ICircleData): boolean;
    /**
     * draw - 移动的时候绘制
     * @param e
     */
    protected draw(e: any): void;
    /**
     * draw
     * @description 绘制
     * @param context IInteractionLayer
     * @param ctx
     * @param data
     */
    static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: ICircleData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: {
        center: IPoint;
        radius: number;
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
     * transformRealToOrigin - 实际数据转换成原始数据
     * @param context
     * @param data
     */
    static transformRealToOrigin(context: IInteractionLayer, data: {
        center: IPoint;
        radius: number;
    }): {
        center: IPoint;
        radius: number;
    };
    /**
     * transformOriginToReal - 原始数据转换成实际数据
     * @param context
     * @param data
     */
    static transformOriginToReal(context: IInteractionLayer, data: {
        center: IPoint;
        radius: number;
    }): {
        center: IPoint;
        radius: number;
    };
    /**
     * getSelectType
     * @return SelectType
     */
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
export default CircleDrawAction;
