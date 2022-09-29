import { IGeometryStyle } from '../../types';
import { IInteractionLayer, IPoint, IStyle, SelectType } from '../types';
import PolygonDrawAction from './PolygonDrawAction';
/**
 * DistanceDrawAction
 * @class DistanceDrawAction
 * @classdesc 测距
 */
declare class DistanceDrawAction extends PolygonDrawAction {
    protected style: IStyle;
    constructor();
    /**
     * onCursorMouseMove
     * @description - 监控光标移动的事件
     * @param e
     */
    protected onCursorMouseMove(e: any): void;
    /**
     * drawHistoryPath - 绘制历史数据
     * @param context
     * @param ctx
     * @param data
     */
    static drawHistoryPath(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data?: IPoint[]): void;
    /**
     * drawStartPoint
     * @param context
     * @param ctx
     * @param style
     * @param pointStack
     * @param toPoint
     */
    static drawStartPoint({ context, ctx, style, pointStack, toPoint, }: {
        context: IInteractionLayer;
        pointStack: IPoint[];
        toPoint: IPoint;
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
    }): void;
    /**
     * drawStartPoint
     * @description - 绘制开始点和点的提示框
     */
    protected drawStartPoint(): void;
    /**
     * fill
     * @override
     */
    protected fill(): void;
    /**
     * drawStack
     * @override
     */
    protected drawStack(): void;
    /**
     * getCanvasClick
     * @override
     */
    protected getCanvasClick(): (e: any) => void;
    /**
     * getCanvasMousemove
     * @override
     */
    protected getCanvasMousemove(): (e: any) => void;
    /**
     * getCanvasDbClick
     * @override
     */
    protected getCanvasDbClick(): (e: any) => void;
    /**
     * onCanvasClick
     * @override
     * @param e
     */
    protected onCanvasClick(e: any): void;
    /**
     * onCanvasMousemove
     * @override
     * @param e
     */
    protected onCanvasMousemove(e: any): void;
    /**
     * onCanvasDbClick
     * @override
     * @param e
     */
    protected onCanvasDbClick(e: any): void;
    /**
     * onDelete
     * @param deleteMarker - mark
     * @param id - 删除数据的id
     */
    protected onDelete(deleteMarker: any, id: number | string): void;
    /**
     * drawDeleteMark
     * @param context
     * @param point
     * @param onDelete
     */
    static drawDeleteMark({ context, point, onDelete, }: {
        context: IInteractionLayer;
        point: IPoint;
        onDelete: Function;
    }): any;
    getSelectType(): SelectType;
    start(style: IStyle): void;
    /**
     * end
     * @override
     */
    end(): void;
    /**
     * destroy
     * @override
     */
    destroy(): void;
    /**
     * setCursor
     * @override
     * @description 设置光标
     */
    setCursor(): void;
}
export default DistanceDrawAction;
