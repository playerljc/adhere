import { Events } from '@baifendian/adhere-util-emitter';
import { IActionData, IModifyAction, IMoveAction, IPoint, IPolygonSelection, IStyle, SelectType } from '../types';
/**
 * 修改Action抽象基类
 * @abstract
 * @class ModifyAction
 * @classdesc 所有修改Action的基类，提供基础的修改和移动功能
 * @implements {IModifyAction}
 * @implements {IMoveAction}
 * @extends {Events}
 * @remark 提供统一的修改和移动操作接口，子类需要实现具体的几何图形修改逻辑
 */
declare abstract class ModifyAction extends Events implements IModifyAction, IMoveAction {
    /** 上下文对象，提供Canvas操作和事件管理 */
    context: IPolygonSelection | null;
    /** 起始点坐标，用于记录修改操作的起始位置 */
    protected startPoint: IPoint | null;
    /** 起始点的索引，用于标识当前操作的锚点 */
    protected startIndex: number;
    /** 当前操作的Action数据 */
    protected data: IActionData | null;
    /** 当前状态，用于跟踪Action的生命周期 */
    protected status: number;
    /** 内部事件类型常量 */
    protected readonly EmitActions: {
        readonly CONTEXT: "CONTEXT";
    };
    /** 锚点的半径，用于绘制控制点 */
    protected anchorRadius: number;
    /** 锚点线条宽度，用于绘制控制点边框 */
    protected anchorLineWidth: number;
    /** 移动的起始点坐标 */
    moveStartPoint: IPoint | null;
    /** 是否可以移动的标志 */
    canMove: boolean;
    /** 是否已经移动的标志 */
    isMoved: boolean;
    /** 绘制样式对象 */
    style: IStyle;
    /** 修改时控制点的样式对象 */
    anchorStyle: IStyle;
    /** 移动几何图形的样式对象 */
    moveGemStyle: IStyle;
    /**
     * 获取锚点样式
     * @returns 锚点样式对象的深拷贝
     * @description 返回当前锚点样式的副本，避免外部修改影响内部状态
     */
    getAnchorStyle(): IStyle;
    /**
     * 获取绘制样式
     * @returns 绘制样式对象的深拷贝
     * @description 返回当前绘制样式的副本，避免外部修改影响内部状态
     */
    getStyle(): IStyle;
    /**
     * 获取移动几何图形样式
     * @returns 移动几何图形样式对象的深拷贝
     * @description 返回当前移动几何图形样式的副本，避免外部修改影响内部状态
     */
    getMoveGemStyle(): IStyle;
    /**
     * 设置锚点样式
     * @param style - 部分样式属性，将与默认样式合并
     * @description 更新锚点样式，未提供的属性将使用默认值
     */
    setAnchorStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 设置绘制样式
     * @param style - 部分样式属性，将与默认样式合并
     * @description 更新绘制样式，未提供的属性将使用默认值
     */
    setStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 设置移动几何图形样式
     * @param style - 部分样式属性，将与默认样式合并
     * @description 更新移动几何图形样式，未提供的属性将使用默认值
     */
    setMoveGemStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 绘制修改操作
     * @param targetPoint - 目标点坐标
     * @description 抽象方法，子类需要实现具体的修改绘制逻辑
     * @abstract
     */
    protected abstract drawModify(targetPoint: IPoint): void;
    /**
     * 绘制移动操作
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @description 抽象方法，子类需要实现具体的移动绘制逻辑
     * @abstract
     */
    protected abstract drawMove(startPoint: IPoint, targetPoint: IPoint): void;
    /**
     * 绘制锚点
     * @description 抽象方法，子类需要实现具体的锚点绘制逻辑
     * @abstract
     */
    protected abstract drawAnchors(): void;
    /**
     * 获取点是否在锚点内
     * @param targetPoint - 目标点坐标
     * @returns 锚点信息和索引，如果不在任何锚点内则返回null
     * @description 抽象方法，子类需要实现具体的锚点检测逻辑
     * @abstract
     */
    protected abstract getPointInAnchor(targetPoint: IPoint): {
        point: IPoint;
        index: number;
    } | null;
    /**
     * 根据索引设置调整大小的光标
     * @param index - 锚点索引
     * @description 抽象方法，子类需要实现具体的光标设置逻辑
     * @abstract
     */
    protected abstract setResizeCursorByIndex(index: number): void;
    /**
     * 判断是否可以移动
     * @param targetPoint - 目标点坐标
     * @returns 是否可以移动到目标点
     * @description 抽象方法，子类需要实现具体的移动判断逻辑
     * @abstract
     */
    abstract isCanMove(targetPoint: IPoint): boolean;
    /**
     * 绘制移动当中的几何图形
     * @description 抽象方法，子类需要实现具体的移动几何图形绘制逻辑
     * @abstract
     */
    abstract drawMoveGeometry(): void;
    /**
     * 绘制移动当中的几何图形
     * @param startPoint - 起始点坐标
     * @param targetPoint - 目标点坐标
     * @returns 移动后的数据，如果无法移动则返回null
     * @description 抽象方法，子类需要实现具体的移动几何图形绘制逻辑
     * @abstract
     */
    abstract drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
    /**
     * 获取选择类型
     * @returns 选择类型枚举值
     * @description 抽象方法，子类需要返回对应的选择类型
     * @abstract
     */
    protected abstract getSelectType(): SelectType;
    /**
     * 构造函数
     * @param data - Action数据对象
     * @description 初始化修改Action，绑定事件处理方法
     * @protected
     */
    protected constructor(data: IActionData);
    /**
     * 设置锚点圆形样式
     * @description 设置Canvas上下文为锚点圆形绘制样式
     * @protected
     */
    protected setAnchorCircleStyle(): void;
    /**
     * 设置锚点线条样式
     * @description 设置Canvas上下文为锚点线条绘制样式
     * @protected
     */
    protected setAnchorLineStyle(): void;
    /**
     * 上下文事件处理
     * @description 当上下文设置完成时绘制锚点
     * @protected
     */
    protected onContext(): void;
    /**
     * Canvas鼠标按下事件处理
     * @param e - 鼠标事件对象
     * @description 检测是否点击了锚点，如果是则开始修改操作
     * @protected
     */
    protected onCanvasMousedown(e: MouseEvent): void;
    /**
     * Canvas鼠标移动事件处理
     * @param e - 鼠标事件对象
     * @description 实时修改几何图形
     * @protected
     */
    protected onCanvasMousemove(e: MouseEvent): void;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件对象
     * @description 结束修改过程
     * @protected
     */
    protected onCanvasMouseup(e: MouseEvent): void;
    /**
     * Canvas是否可以修改的鼠标移动事件处理
     * @param e - 鼠标事件对象
     * @description 控制移动到锚点上的时候鼠标指针显示为可以修改的形状
     * @protected
     */
    protected onCanvasIsModifyMousemove(e: MouseEvent): void;
    /**
     * 初始化移动相关的事件
     * @description 注册移动相关的事件监听器
     */
    initMoveEvents(): void;
    /**
     * 清除移动相关的事件
     * @description 移除移动相关的事件监听器
     */
    clearMoveEvents(): void;
    /**
     * 移动鼠标按下事件处理
     * @param e - 鼠标事件对象，可选
     * @description 开始移动过程
     */
    onMoveMousedown(e?: MouseEvent): void;
    /**
     * 移动鼠标移动事件处理
     * @param e - 鼠标事件对象，可选
     * @description 处理移动过程中的实时更新
     */
    onMoveMousemove(e?: MouseEvent): void;
    /**
     * 移动鼠标抬起事件处理
     * @param e - 鼠标事件对象，可选
     * @description 结束移动过程
     */
    onMoveMouseup(e?: MouseEvent): void;
    /**
     * 开始Action
     * @description 开始执行修改Action，绑定相关事件监听器
     */
    start(): void;
    /**
     * 结束Action
     * @param e - 鼠标事件对象，可选
     * @description 结束执行修改Action，清理事件监听器
     */
    end(e?: MouseEvent): void;
    /**
     * 销毁Action
     * @description 销毁Action并清理所有资源
     */
    destroy(): void;
    /**
     * 设置上下文对象
     * @param context - 多边形选择上下文对象
     * @description 设置Action的上下文环境并触发上下文事件
     */
    setContext(context: IPolygonSelection): void;
    /**
     * 获取当前状态
     * @returns 当前状态值
     * @description 获取Action的当前生命周期状态
     */
    getStatus(): number;
}
export default ModifyAction;
