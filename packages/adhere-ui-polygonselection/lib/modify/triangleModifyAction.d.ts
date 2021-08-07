import { IPoint, ITriangleData, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * TriangleModifyAction
 * @class TriangleModifyAction
 * @classdesc - 三角形修改
 * @remark:
 */
declare class TriangleModifyAction extends ModifyAction {
    private rectangleAnchorPoints;
    private indexToModifyHandlerMapping;
    protected ResizeCursorMapping: Map<number, string>;
    constructor(data: ITriangleData);
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
     * getBox
     */
    protected getBox(): {
        leftTop: IPoint;
        rightTop: IPoint;
        rightBottom: IPoint;
        leftBottom: IPoint;
    } | null;
    protected modifyDataByLeftTop(targetPoint: IPoint): boolean;
    protected modifyDataByCenterTop(targetPoint: IPoint): boolean;
    protected modifyDataByRightTop(targetPoint: IPoint): boolean;
    protected modifyDataByRightCenter(targetPoint: IPoint): boolean;
    protected modifyDataByRightBottom(targetPoint: IPoint): boolean;
    protected modifyDataByCenterBottom(targetPoint: IPoint): boolean;
    protected modifyDataByLeftBottom(targetPoint: IPoint): boolean;
    protected modifyDataByLeftCenter(targetPoint: IPoint): boolean;
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
    destroy(): void;
}
export default TriangleModifyAction;
