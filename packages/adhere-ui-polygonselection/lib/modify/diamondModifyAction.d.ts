import { IPoint, IDiamondData, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * DiamondModifyAction
 * @class DiamondModifyAction
 * @classdesc - 菱形修改
 * @remark:
 */
declare class DiamondModifyAction extends ModifyAction {
    private rectangleAnchorPoints;
    private indexToModifyHandlerMapping;
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
export default DiamondModifyAction;
