import { IPoint, ITriangleData, SelectType } from '../types';
import ModifyAction from './ModifyAction';
/**
 * TriangleModifyAction
 * @class TriangleModifyAction
 * @classdesc - 三角形修改
 * @remark:
 */
declare class TriangleModifyAction extends ModifyAction {
    setCursor(): void;
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
     * @param targetPixel
     * @return IPoint | null
     */
    protected getPointInAnchor(targetPixel: IPoint): {
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
     * @param targetPixel
     */
    protected drawModify(targetPixel: IPoint): void;
    /**
     * drawMove
     * @param startPixel
     * @param targetPixel
     */
    protected drawMove(startPixel: IPoint, targetPixel: IPoint): void;
    /**
     * getSelectType
     */
    getSelectType(): SelectType;
    /**
     * getBox
     */
    protected getBox(): {
        leftTop: IPoint;
        rightTop: IPoint;
        rightBottom: IPoint;
        leftBottom: IPoint;
    } | null;
    /**
     * modifyDataByLeftTop
     * @param targetPixel
     */
    protected modifyDataByLeftTop(targetPixel: IPoint): boolean;
    /**
     * modifyDataByCenterTop
     * @param targetPixel
     */
    protected modifyDataByCenterTop(targetPixel: IPoint): boolean;
    /**
     * modifyDataByRightTop
     * @param targetPixel
     */
    protected modifyDataByRightTop(targetPixel: IPoint): boolean;
    /**
     * modifyDataByRightCenter
     * @param targetPixel
     */
    protected modifyDataByRightCenter(targetPixel: IPoint): boolean;
    /**
     * modifyDataByRightBottom
     * @param targetPixel
     */
    protected modifyDataByRightBottom(targetPixel: IPoint): boolean;
    /**
     * modifyDataByCenterBottom
     * @param targetPixel
     */
    protected modifyDataByCenterBottom(targetPixel: IPoint): boolean;
    /**
     * modifyDataByLeftBottom
     * @param targetPixel
     */
    protected modifyDataByLeftBottom(targetPixel: IPoint): boolean;
    /**
     * modifyDataByLeftCenter
     * @param targetPixel
     */
    protected modifyDataByLeftCenter(targetPixel: IPoint): boolean;
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
    destroy(): void;
}
export default TriangleModifyAction;
