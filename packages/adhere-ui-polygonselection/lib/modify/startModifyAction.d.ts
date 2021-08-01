import { IStartData, IPoint, SelectType } from '../types';
import ModifyAction from './modifyAction';
/**
 * StartModifyAction
 * @class StartModifyAction
 * @classdesc - 五角星修改
 * @remark:
 */
declare class StartModifyAction extends ModifyAction {
    constructor(data: IStartData);
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
export default StartModifyAction;
