import { IPoint, ITriangleData, SelectType, IAnchorInfo, IRectangleBox, ICursorMapping, IActionData } from '../types';
import ModifyAction from './ModifyAction';
/**
 * 三角形修改Action类
 * @class TriangleModifyAction
 * @classdesc 三角形几何图形的修改功能，支持调整三角形大小和位置
 * @extends {ModifyAction}
 * @remark 提供8个控制点：4个角和4条边的中心点，用于调整三角形大小
 */
declare class TriangleModifyAction extends ModifyAction {
    /** 矩形锚点数组 */
    private rectangleAnchorPoints;
    /** 索引到修改处理器的映射 */
    private indexToModifyHandlerMapping;
    /** 调整大小的光标映射 */
    protected ResizeCursorMapping: ICursorMapping;
    /**
     * 构造函数
     * @param data - 三角形数据
     * @description 初始化三角形修改Action
     */
    constructor(data: ITriangleData);
    /**
     * 绘制锚点
     * @description 在三角形的8个控制点绘制锚点：4个角和4条边的中心点
     */
    protected drawAnchors(): void;
    /**
     * 获取点是否在锚点内
     * @param targetPoint - 目标点坐标
     * @returns 锚点信息和索引，如果不在任何锚点内则返回null
     * @description 检测目标点是否在三角形的某个控制锚点内
     */
    protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null;
    /**
     * 根据索引设置调整大小的光标
     * @param index - 锚点索引
     * @description 设置三角形调整大小时的光标样式
     */
    protected setResizeCursorByIndex(index: number): void;
    /**
     * 绘制修改
     * @param targetPoint - 目标点坐标
     * @description 根据目标点和当前索引修改三角形的大小和位置
     */
    protected drawModify(targetPoint: IPoint): void;
    /**
     * 绘制移动
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @description 移动整个三角形到新位置
     */
    protected drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * 获取选择类型
     * @returns 三角形选择类型
     * @description 返回当前Action的选择类型
     */
    protected getSelectType(): SelectType;
    /**
     * 获取三角形边界框
     * @returns 三角形的四个角点坐标，如果无法获取则返回null
     * @description 计算三角形的四个角点坐标
     */
    protected getBox(): IRectangleBox | null;
    /**
     * 通过左上角修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整左上角来修改三角形的大小和位置
     */
    protected modifyDataByLeftTop(targetPoint: IPoint): boolean;
    /**
     * 通过上边中心修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整上边中心来修改三角形的高度
     */
    protected modifyDataByCenterTop(targetPoint: IPoint): boolean;
    /**
     * 通过右上角修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整右上角来修改三角形的宽度和高度
     */
    protected modifyDataByRightTop(targetPoint: IPoint): boolean;
    /**
     * 通过右边中心修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整右边中心来修改三角形的宽度
     */
    protected modifyDataByRightCenter(targetPoint: IPoint): boolean;
    /**
     * 通过右下角修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整右下角来修改三角形的宽度和高度
     */
    protected modifyDataByRightBottom(targetPoint: IPoint): boolean;
    /**
     * 通过下边中心修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整下边中心来修改三角形的高度
     */
    protected modifyDataByCenterBottom(targetPoint: IPoint): boolean;
    /**
     * 通过左下角修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整左下角来修改三角形的宽度和高度
     */
    protected modifyDataByLeftBottom(targetPoint: IPoint): boolean;
    /**
     * 通过左边中心修改数据
     * @param targetPoint - 目标点坐标
     * @returns 修改是否成功
     * @description 通过调整左边中心来修改三角形的宽度
     */
    protected modifyDataByLeftCenter(targetPoint: IPoint): boolean;
    /**
     * 判断是否可以移动
     * @param targetPoint - 目标点坐标
     * @returns 是否可以移动到目标点
     * @description 检查目标点是否在三角形内部且不在控制锚点内
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * 绘制移动时的几何图形
     * @description 在辅助Canvas上绘制移动中的三角形
     */
    drawMoveGeometry(): void;
    /**
     * 绘制移动时的几何图形
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @returns 移动后的三角形数据，如果无法移动则返回null
     * @description 在辅助Canvas上绘制移动中的三角形，并返回移动后的数据
     */
    drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
    /**
     * 销毁Action
     * @description 清理资源，重置起始索引
     */
    destroy(): void;
}
export default TriangleModifyAction;
