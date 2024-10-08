import Emitter from '@baifendian/adhere-util-emitter';
import { IActionData, IModifyAction, IMoveAction, IPoint, IPolygonSelection, IStyle, SelectType } from '../types';
/**
 * ModifyAction
 * @class ModifyAction
 * @classdesc ModifyAction
 */
declare abstract class ModifyAction extends Emitter.Events implements IModifyAction, IMoveAction {
    context: IPolygonSelection | null;
    protected startPoint: IPoint | null;
    protected startIndex: number;
    protected data: IActionData | null;
    protected status: number;
    protected EmitActions: {
        CONTEXT: string;
    };
    protected anchorRadius: number;
    protected anchorLineWidth: number;
    moveStartPoint: IPoint | null;
    canMove: boolean;
    isMoved: boolean;
    style: IStyle;
    anchorStyle: IStyle;
    moveGemStyle: IStyle;
    getAnchorStyle(): IStyle;
    getStyle(): IStyle;
    getMoveGemStyle(): IStyle;
    setAnchorStyle(style: Partial<IStyle> | undefined): void;
    setStyle(style: Partial<IStyle> | undefined): void;
    setMoveGemStyle(style: Partial<IStyle> | undefined): void;
    /**
     * drawModify
     * @param targetPoint
     */
    protected abstract drawModify(targetPoint: IPoint): void;
    /**
     * drawMove
     * @param startPoint
     * @param targetPoint
     */
    protected abstract drawMove(startPoint: IPoint, targetPoint: IPoint): void;
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
    protected abstract setResizeCursorByIndex(index: number): void;
    /**
     * isCanMove
     * @description 是否可以移动
     * @param targetPoint
     */
    abstract isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动当中的几何图形
     */
    abstract drawMoveGeometry(): void;
    /**
     * drawMoveGeometry
     * @description 绘制移动当中的几何图形
     */
    abstract drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
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
     * setAnchorCircleStyle
     */
    protected setAnchorCircleStyle(): void;
    /**
     * setAnchorLineStyle
     */
    protected setAnchorLineStyle(): void;
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
     * onCanvasIsModifyMousemove
     * @description 这个事件主要是用来控制移动到anchor点上的时候鼠标指针显示为可以修改的形状
     * ew-resize
       ns-resize
       nesw-resize
       nwse-resize
     * @param e
     */
    protected onCanvasIsModifyMousemove(e: any): void;
    /**
     * initMoveEvents
     * @description 注册移动相关的事件
     */
    initMoveEvents(): void;
    /**
     * clearMoveEvents
     * @description - 清除移动相关的事件
     */
    clearMoveEvents(): void;
    /**
     * onMoveMouseup
     * @description
     * @param e
     */
    onMoveMousedown(e?: MouseEvent): void;
    /**
     * onMoveMousedown
     * @description
     * @param e
     */
    onMoveMousemove(e?: MouseEvent): void;
    /**
     * onMoveMousemove
     * @description
     * @param e
     */
    onMoveMouseup(e?: MouseEvent): void;
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
