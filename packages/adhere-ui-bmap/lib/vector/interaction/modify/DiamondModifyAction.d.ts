import { IPoint, IDiamondData, SelectType } from '../types';
import ModifyAction from './ModifyAction';
/**
 * DiamondModifyAction
 * @class DiamondModifyAction
 * @classdesc - 菱形修改
 * @remark:
 */
declare class DiamondModifyAction extends ModifyAction {
    private rectangleAnchorPoints;
    private indexToModifyHandlerMapping;
    protected ResizeCursorMapping: Map<number, string>;
    constructor(data: IDiamondData);
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
     * @param startPixel
     * @param targetPixel
     */
    protected drawMove(startPixel: IPoint, targetPixel: IPoint): void;
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
    /**
     *
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
    /**
     * isCanMove
     * @param targetPixel
     */
    isCanMove(targetPixel: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
    destroy(): void;
}
export default DiamondModifyAction;
