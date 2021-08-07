import { IPoint, IPolygonData, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * PolygonModifyAction
 * @class PolygonModifyAction
 * @classdesc - 多边形修改
 * @remark:
 */
declare class PolygonModifyAction extends ModifyAction {
    protected startIndex: number;
    constructor(data: IPolygonData);
    /**
     * drawAnchors
     */
    protected drawAnchors(): void;
    /**
     * getPointInAnchor
     * @param targetPoint
     * @return IPoint | null
     */
    protected getPointInAnchor(targetPoint: IPoint): {
        point: IPoint;
        index: number;
    } | null;
    /**
     * setResizeCursorByIndex
     * @param index
     */
    protected setResizeCursorByIndex(index: number): void;
    /**
     * drawModify
     * @param targetPoint
     */
    protected drawModify(targetPoint: IPoint): void;
    /**
     * drawMove
     * @param startPoint
     * @param targetPoint
     */
    protected drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * getSelectType
     */
    protected getSelectType(): SelectType;
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
}
export default PolygonModifyAction;
