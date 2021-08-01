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
     * draw
     * @param targetPoint
     */
    protected draw(targetPoint: IPoint): void;
    /**
     * getSelectType
     */
    protected getSelectType(): SelectType;
}
export default PolygonModifyAction;
