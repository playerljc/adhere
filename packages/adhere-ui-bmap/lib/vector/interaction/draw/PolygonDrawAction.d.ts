import { IPolygonData, IPoint, IStyle, SelectType, IInteractionLayer } from '../types';
import DrawAction from './DrawAction';
/**
 * PolygonAction
 * @class PolygonAction
 * @classdesc  - 多边形选取
 * @remark: 一个start - end的周期中只能绘制一个多边形
 */
declare class PolygonDrawAction extends DrawAction {
    protected startPoint: IPoint | null;
    protected pointStack: IPoint[];
    protected isMove: boolean;
    /**
     * constructor
     */
    constructor();
    /**
     * booleanPointInData
     * @description 判断点是否在
     * @param context
     * @param point
     * @param data
     */
    static booleanPointInData(context: IInteractionLayer, point: IPoint, data: IPolygonData): boolean;
    /**
     * draw
     * @description
     * @param context
     * @param ctx
     * @param data
     */
    static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IPolygonData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data?: IPoint[]): void;
    /**
     * transformOriginToReal - 原始数据转换成实际数据
     * @param context
     * @param data
     */
    static transformOriginToReal(context: IInteractionLayer, data: IPoint[]): IPoint[];
    /**
     * transformRealToOrigin - 实际数据转换成原始数据
     * @param context
     * @param data
     */
    static transformRealToOrigin(context: IInteractionLayer, data: IPoint[]): IPoint[];
    /**
     * fill
     */
    protected fill(): void;
    /**
     * drawLine
     * @param sP
     * @param eP
     */
    protected drawLine(sP: IPoint, eP: IPoint): void;
    /**
     * drawStack
     */
    protected drawStack(): void;
    protected getCanvasClick(): (e: any) => void;
    protected getCanvasMousemove(): (e: any) => void;
    protected getCanvasDbClick(): (e: any) => void;
    /**
     * onCanvasClick
     * @param e
     */
    protected onCanvasClick(e: any): void;
    /**
     * onCanvasMousemove
     * @param e
     */
    protected onCanvasMousemove(e: any): void;
    /**
     * onCanvasDbClick - 结束绘制
     */
    protected onCanvasDbClick(e: any): void;
    /**
     * getSelectType
     * @return SelectType
     */
    getSelectType(): SelectType;
    /**
     * start - 开始
     * @param style
     */
    start(style: IStyle): void;
    /**
     * end - 结束
     */
    end(): void | string;
    /**
     * destroy
     */
    destroy(): void;
}
export default PolygonDrawAction;
