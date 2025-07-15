import { ICircleData, IPoint, SelectType, IModifyContext, IActionData } from '../types';
import ModifyAction from './ModifyAction';
/**
 * 圆形修改Action类
 * @class CircleModifyAction
 * @classdesc 圆形几何图形的修改功能，支持调整圆形大小和位置
 * @extends {ModifyAction}
 * @remark 提供4个控制点：上、右、下、左，用于调整圆形大小
 */
declare class CircleModifyAction extends ModifyAction {
    /** 调整大小的光标映射 */
    protected ResizeCursorMapping: Map<number, string>;
    /**
     * 构造函数
     * @param data - 圆形数据
     * @description 初始化圆形修改Action
     */
    constructor(data: ICircleData);
    /**
     * 绘制锚点
     * @description 绘制圆形的4个控制点：上、右、下、左
     */
    protected drawAnchors(): void;
    /**
     * 获取点击的锚点
     * @param targetPoint - 目标点
     * @returns 锚点信息和索引，如果未点击到锚点则返回null
     * @description 检测目标点是否在某个锚点范围内
     */
    protected getPointInAnchor(targetPoint: IPoint): {
        point: IPoint;
        index: number;
    } | null;
    /**
     * 根据索引设置调整大小的光标
     * @param index - 锚点索引
     * @description 根据锚点索引设置相应的光标样式
     */
    protected setResizeCursorByIndex(index: number): void;
    /**
     * 绘制修改过程
     * @param targetPoint - 目标点
     * @description 根据目标点调整圆形大小
     */
    protected drawModify(targetPoint: IPoint): void;
    /**
     * 绘制移动过程
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @description 根据起始点和目标点移动圆形位置
     */
    protected drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * 获取选择类型
     * @returns 选择类型
     * @description 返回圆形的选择类型
     */
    protected getSelectType(): SelectType;
    /**
     * 判断是否可以移动
     * @param targetPoint - 目标点
     * @returns 是否可以移动
     * @description 判断目标点是否在圆形内部且不在锚点上
     */
    isCanMove(targetPoint: IPoint): boolean;
    /**
     * 绘制移动当中的几何图形
     * @description 绘制当前状态的几何图形
     */
    drawMoveGeometry(): void;
    /**
     * 绘制移动当中的几何图形
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @returns 移动后的数据
     * @description 根据起始点和目标点绘制移动中的几何图形
     */
    drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
    /**
     * 获取修改上下文
     * @returns 修改上下文对象
     * @description 获取当前修改操作的上下文信息
     */
    getModifyContext(): IModifyContext;
    /**
     * 验证圆形数据
     * @param data - 圆形数据
     * @returns 数据是否有效
     * @description 验证圆形数据的完整性
     */
    static validateCircleData(data: ICircleData): boolean;
    /**
     * 计算圆形的边界框
     * @param data - 圆形数据
     * @returns 边界框对象
     * @description 获取圆形的边界框信息
     */
    static getCircleBounds(data: ICircleData): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    } | null;
}
export default CircleModifyAction;
