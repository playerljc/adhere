import { IPoint, IPolygonData, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * PolygonAction
 * @class PolygonAction
 * @classdesc  - 多边形选取
 * @remark: 一个start - end的周期中只能绘制一个多边形
 */
declare class PolygonDrawAction extends DrawAction {
    private startPoint;
    private pointStack;
    protected isMove: boolean;
    /**
     * constructor
     */
    constructor();
    /**
     * booleanPointInData
     * @description 判断点是否在
     * @param point
     * @param data
     */
    static booleanPointInData(point: IPoint, data: IPolygonData): boolean;
    /**
     * onCanvasClick
     * @param e
     */
    private onCanvasClick;
    /**
     * onCanvasMousemove
     * @param e
     */
    private onCanvasMousemove;
    /**
     * onCanvasDbClick - 结束绘制
     */
    private onCanvasDbClick;
    /**
     * drawStack
     */
    private drawStack;
    /**
     * fill
     */
    private fill;
    /**
     * drawLine
     * @param sP
     * @param eP
     */
    private drawLine;
    /**
     * draw
     * @description
     * @param ctx
     * @param data
     */
    static draw(ctx: CanvasRenderingContext2D, data: IPolygonData): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: any): void;
    /**
     * start - 开始
     * @param style
     */
    start(style: IStyle): void;
    /**
     * end - 结束
     */
    end(): void;
    /**
     * destroy
     */
    destroy(): void;
}
export default PolygonDrawAction;
