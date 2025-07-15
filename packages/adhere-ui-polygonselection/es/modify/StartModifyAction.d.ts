import { IPoint, IStartData, SelectType, IAnchorInfo, ICursorMapping, IActionData } from '../types';
import ModifyAction from './ModifyAction';
/**
 * 星形修改Action类
 * @class StartModifyAction
 * @classdesc 五角星几何图形的修改功能，支持调整星形大小和位置
 * @extends {ModifyAction}
 * @remark 提供4个控制点：上、右、下、左，用于调整星形大小
 */
declare class StartModifyAction extends ModifyAction {
    /** 调整大小的光标映射 */
    protected ResizeCursorMapping: ICursorMapping;
    /**
     * 构造函数
     * @param data - 星形数据
     * @description 初始化星形修改Action
     */
    constructor(data: IStartData);
    /**
     * 绘制锚点
     * @description 在星形的4个控制点绘制锚点：上、右、下、左
     */
    protected drawAnchors(): void;
    /**
     * 获取点是否在锚点内
     * @param targetPoint - 目标点坐标
     * @returns 锚点信息和索引，如果不在任何锚点内则返回null
     * @description 检测目标点是否在星形的某个控制锚点内
     */
    protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null;
    /**
     * 根据索引设置调整大小的光标
     * @param index - 锚点索引
     * @description 设置星形调整大小时的光标样式
     */
    protected setResizeCursorByIndex(index: number): void;
    /**
     * 绘制修改
     * @param targetPoint - 目标点坐标
     * @description 根据目标点修改星形的大小
     */
    protected drawModify(targetPoint: IPoint): void;
    /**
     * 绘制移动
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @description 移动整个星形到新位置
     */
    protected drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * 获取选择类型
     * @returns 星形选择类型
     * @description 返回当前Action的选择类型
     */
    protected getSelectType(): SelectType;
    /**
     * 判断是否可以移动
     * @param targetPoint - 目标点坐标
     * @returns 是否可以移动到目标点
     * @description 检查目标点是否在星形内部且不在控制锚点内
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * 绘制移动时的几何图形
     * @description 在辅助Canvas上绘制移动中的星形
     */
    drawMoveGeometry(): void;
    /**
     * 绘制移动时的几何图形
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @returns 移动后的星形数据，如果无法移动则返回null
     * @description 在辅助Canvas上绘制移动中的星形，并返回移动后的数据
     */
    drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
}
export default StartModifyAction;
