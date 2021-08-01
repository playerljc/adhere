import { IPoint, IStyle } from '../types';
import DrawAction from './drawAction';
/**
 * PolygonAction
 * @class PolygonAction
 * @classdesc  - 多边形选取
 * @remark: 一个start - end的周期中只能绘制一个多边形
 */
declare class PolygonDrawAction extends DrawAction {
    private startPoint;
    private pointStack;
    /**
     * constructor
     */
    constructor();
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
     * drawHistoryPath - 绘制历史数据
     * @param ctx
     * @param data
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data?: IPoint[]): void;
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
