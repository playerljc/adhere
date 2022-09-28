import { IPoint, IStartData, SelectType } from '../types';
import ModifyAction from './ModifyAction';
/**
 * StartModifyAction
 * @class StartModifyAction
 * @classdesc - 五角星修改
 * @remark:
 */
declare class StartModifyAction extends ModifyAction {
    protected ResizeCursorMapping: Map<number, string>;
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
     * isCanMove
     * @param targetPoint
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    drawMoveGeometry(): void;
    setCursor(): void;
}
export default StartModifyAction;
