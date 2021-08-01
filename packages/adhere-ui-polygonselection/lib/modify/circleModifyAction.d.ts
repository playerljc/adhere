import { ICircleData, IPoint, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * CircleModifyAction
 * @class CircleModifyAction
 * @classdesc - 圆形修改
 * @remark:
 */
declare class CircleModifyAction extends ModifyAction {
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
     * draw
     * @param targetPoint
     */
    protected draw(targetPoint: IPoint): void;
    /**
     * getSelectType
     */
    protected getSelectType(): SelectType;
}
export default CircleModifyAction;
