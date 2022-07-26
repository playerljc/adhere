import { ICircleData, IPoint, SelectType } from '../types';
import ModifyAction from './ModifyAction';
/**
 * CircleModifyAction
 * @class CircleModifyAction
 * @classdesc - 圆形修改
 * @remark:
 */
declare class CircleModifyAction extends ModifyAction {
    protected ResizeCursorMapping: Map<number, string>;
    constructor(data: ICircleData);
    /**
     * drawAnchors
     * circle有4个anchor，上，下，左，右
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
    /**
     * isCanMove
     * @param targetPoint
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
}
export default CircleModifyAction;
