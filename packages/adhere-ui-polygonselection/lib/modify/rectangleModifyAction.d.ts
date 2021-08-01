import { IPoint, IRectangleData, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * RectangleModifyAction
 * @class RectangleModifyAction
 * @classdesc - 矩形修改
 * @remark:
 */
declare class RectangleModifyAction extends ModifyAction {
    private rectangleAnchorPoints;
    private indexToModifyHandlerMapping;
    constructor(data: IRectangleData);
    /**
     * drawAnchors
     * 4个角，四条边的中心点
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
     * draw
     * @param targetPoint
     */
    protected draw(targetPoint: IPoint): void;
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
    destroy(): void;
}
export default RectangleModifyAction;
