import { IPoint, IPolygonData, SelectType, IAnchorInfo, IActionData } from '../types';
import ModifyAction from './ModifyAction';
/**
 * 多边形修改Action类
 * @class PolygonModifyAction
 * @classdesc 多边形几何图形的修改功能，支持调整多边形顶点位置和整体移动
 * @extends {ModifyAction}
 * @remark 提供每个顶点的控制点，用于调整多边形形状
 */
declare class PolygonModifyAction extends ModifyAction {
    /** 起始点的索引 */
    protected startIndex: number;
    /**
     * 构造函数
     * @param data - 多边形数据
     * @description 初始化多边形修改Action
     */
    constructor(data: IPolygonData);
    /**
     * 绘制锚点
     * @description 在多边形的每个顶点绘制控制锚点
     */
    protected drawAnchors(): void;
    /**
     * 获取点是否在锚点内
     * @param targetPoint - 目标点坐标
     * @returns 锚点信息和索引，如果不在任何锚点内则返回null
     * @description 检测目标点是否在多边形的某个控制锚点内
     */
    protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null;
    /**
     * 根据索引设置调整大小的光标
     * @param index - 锚点索引
     * @description 设置多边形顶点调整时的光标样式
     */
    protected setResizeCursorByIndex(index: number): void;
    /**
     * 绘制修改
     * @param targetPoint - 目标点坐标
     * @description 根据目标点修改多边形的顶点位置
     */
    protected drawModify(targetPoint: IPoint): void;
    /**
     * 绘制移动
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @description 移动整个多边形到新位置
     */
    protected drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * 获取选择类型
     * @returns 多边形选择类型
     * @description 返回当前Action的选择类型
     */
    protected getSelectType(): SelectType;
    /**
     * 判断是否可以移动
     * @param targetPoint - 目标点坐标
     * @returns 是否可以移动到目标点
     * @description 检查目标点是否在多边形内部且不在控制锚点内
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * 绘制移动时的几何图形
     * @description 在辅助Canvas上绘制移动中的多边形
     */
    drawMoveGeometry(): void;
    /**
     * 绘制移动时的几何图形
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @returns 移动后的多边形数据，如果无法移动则返回null
     * @description 在辅助Canvas上绘制移动中的多边形，并返回移动后的数据
     */
    drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
}
export default PolygonModifyAction;
