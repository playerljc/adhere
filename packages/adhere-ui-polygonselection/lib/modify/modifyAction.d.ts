import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IModifyAction, IActionData, IPolygonSelection, IPoint, SelectType } from '../types';
/**
 * ModifyAction
 * @class ModifyAction
 * @classdesc ModifyAction
 */
declare abstract class ModifyAction extends Emitter implements IModifyAction {
    protected startPoint: IPoint | null;
    protected startIndex: number;
    protected context: IPolygonSelection | null;
    protected data: IActionData | null;
    protected status: number;
    protected EmitActions: {
        CONTEXT: string;
    };
    protected anchorRadius: number;
    protected anchorLineWidth: number;
    protected anchorStrokeStyle: string;
    protected anchorFillStyle: string;
    /**
     * draw
     * @param targetPoint
     */
    protected abstract draw(targetPoint: IPoint): void;
    /**
     * drawAnchors
     */
    protected abstract drawAnchors(): void;
    /**
     * getPointInAnchor
     * @param targetPoint
     */
    protected abstract getPointInAnchor(targetPoint: IPoint): {
        point: IPoint;
        index: number;
    } | null;
    /**
     * getSelectType
     */
    protected abstract getSelectType(): SelectType;
    /**
     * constructor
     * @param data
     */
    protected constructor(data: IActionData);
    /**
     * setAnchorStyle
     */
    protected setAnchorStyle(): void;
    /**
     * onContext
     */
    protected onContext(): void;
    /**
     * onCanvasMousedown
     * @param e
     */
    protected onCanvasMousedown(e: any): void;
    /**
     * onCanvasMousemove
     * @param e
     */
    protected onCanvasMousemove(e: any): void;
    /**
     * onCanvasMouseup
     * @param e
     */
    protected onCanvasMouseup(e: any): void;
    /**
     * start
     */
    start(): void;
    /**
     * end
     * @param e
     */
    end(e?: MouseEvent): void;
    /**
     * destroy
     */
    destroy(): void;
    /**
     * setContext
     * @param context
     */
    setContext(context: IPolygonSelection): void;
    /**
     * getStatus - 获取状态
     */
    getStatus(): number;
}
export default ModifyAction;
