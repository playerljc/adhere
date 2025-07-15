import { Events } from '@baifendian/adhere-util-emitter';
import { IAction, IActionData, IListeners, IPolygonSelection, IStyle, SelectType } from './types';
/**
 * 多边形选择主组件
 * @class PolygonSelection
 * @classdesc 提供多边形选择功能的核心组件，支持多种几何图形的绘制、修改和移动
 * @extends {Events}
 * @implements {IPolygonSelection}
 */
declare class PolygonSelection extends Events implements IPolygonSelection {
    /** 裁剪组件 */
    static Cropping: import("./types").CroppingComponent;
    /** 父容器元素 */
    protected el: HTMLElement | null;
    /** 事件监听器映射 */
    protected listeners: IListeners | null | undefined;
    /** 当前活动的Action */
    protected curAction: IAction | null;
    /** 主Canvas元素 */
    protected canvasEl: HTMLCanvasElement | null;
    /** 主Canvas渲染上下文 */
    protected ctx: CanvasRenderingContext2D | null;
    /** 辅助Canvas元素 */
    protected assistCanvasEl: HTMLCanvasElement | null;
    /** 辅助Canvas渲染上下文 */
    protected assistCtx: CanvasRenderingContext2D | null;
    /** Canvas上的所有历史数据 */
    protected canvasData: IActionData[];
    /** 选择类型到Action类的映射 */
    protected typeActionMap: Map<SelectType, any>;
    /**
     * 构造函数
     * @param el - 父容器元素
     * @param defaultData - 默认的Action数据数组
     * @param listeners - 事件监听器映射
     * @description 初始化多边形选择组件
     */
    constructor(el: HTMLElement, defaultData?: IActionData[], listeners?: IListeners);
    /**
     * 初始化事件监听器
     * @description 注册用户提供的事件监听器
     */
    protected initListeners(): void;
    /**
     * 初始化事件处理
     * @description 绑定Canvas点击事件，处理几何图形的选择和空白区域点击
     */
    protected initEvents(): void;
    /**
     * 初始化Canvas
     * @description 创建主Canvas和辅助Canvas，并添加到DOM中
     */
    protected initCanvas(): void;
    /**
     * 适配Canvas尺寸
     * @description 根据容器尺寸调整Canvas的宽高
     */
    protected adapterCanvas(): void;
    /**
     * 窗口大小变化处理
     * @description 当窗口大小变化时重新适配Canvas
     */
    protected onResize(): void;
    /**
     * 获取主Canvas渲染上下文
     * @returns Canvas渲染上下文，如果不存在则返回null
     */
    getCtx(): CanvasRenderingContext2D | null;
    /**
     * 获取主Canvas元素
     * @returns Canvas元素，如果不存在则返回null
     */
    getCanvasEl(): HTMLCanvasElement | null;
    /**
     * 获取辅助Canvas元素
     * @returns 辅助Canvas元素，如果不存在则返回null
     */
    getAssistCanvasEl(): HTMLCanvasElement | null;
    /**
     * 获取辅助Canvas渲染上下文
     * @returns 辅助Canvas渲染上下文，如果不存在则返回null
     */
    getAssistCtx(): CanvasRenderingContext2D | null;
    /**
     * 获取组件宽度
     * @returns 组件宽度值
     */
    getWidth(): number;
    /**
     * 获取组件高度
     * @returns 组件高度值
     */
    getHeight(): number;
    /**
     * 添加历史数据
     * @param data - 要添加的Action数据
     * @description 向历史数据中添加新的Action数据
     */
    addHistoryData(data: IActionData): void;
    /**
     * 根据ID移除历史数据
     * @param actionDataId - 要移除的数据ID
     * @returns 被移除的数据数组
     * @description 根据ID从历史数据中移除指定的Action数据
     */
    removeHistoryDataById(actionDataId: string): IActionData[];
    /**
     * 绘制历史数据
     * @description 将所有历史数据重新绘制到Canvas上
     */
    drawHistoryData(): void;
    /**
     * 根据ID获取历史数据
     * @param id - 数据ID
     * @returns 对应的Action数据，如果不存在则返回null或undefined
     * @description 根据ID从历史数据中获取指定的Action数据
     */
    getHistoryDataById(id: string): IActionData | null | undefined;
    /**
     * 获取所有历史数据
     * @returns 所有历史数据的数组副本
     * @description 获取所有历史Action数据
     */
    getHistoryData(): IActionData[];
    /**
     * 设置历史数据
     * @param data - 新的历史数据数组
     * @description 替换所有历史数据
     */
    setHistoryData(data: IActionData[]): void;
    /**
     * 切换Action
     * @param action - 新的Action对象
     * @description 切换到新的Action，销毁当前Action并设置新的Action
     */
    changeAction(action: IAction): void;
    /**
     * 获取当前Action
     * @returns 当前正在执行的Action，如果没有则返回null
     * @description 获取当前正在执行的Action
     */
    getCurAction(): IAction | null;
    /**
     * 开始多边形选择操作
     * @param style - 样式对象，可选
     * @description 开始当前Action的执行
     */
    start(style?: IStyle): void;
    /**
     * 结束当前的多边形选择操作
     * @description 结束当前Action的执行
     */
    end(): void;
    /**
     * 清除当前Canvas上的绘制内容
     * @description 清除主Canvas上的所有绘制内容
     */
    clearDraw(): void;
    /**
     * 清除辅助Canvas上的绘制内容
     * @description 清除辅助Canvas上的所有绘制内容
     */
    clearAssistDraw(): void;
    /**
     * 清除所有历史数据
     * @description 清除所有历史Action数据
     */
    clearHistoryData(): void;
    /**
     * 清除所有Canvas内容
     * @description 清除所有Canvas上的内容和历史数据
     */
    clearCanvasAll(): void;
    /**
     * 设置Canvas层级为前置
     * @param canvasEl - Canvas元素
     * @description 将指定的Canvas设置为前置层级
     */
    setFrontCanvas(canvasEl: HTMLCanvasElement): void;
    /**
     * 设置Canvas层级为后置
     * @param canvasEl - Canvas元素
     * @description 将指定的Canvas设置为后置层级
     */
    setBackCanvas(canvasEl: HTMLCanvasElement): void;
    /**
     * 销毁多边形选择组件
     * @description 销毁组件并清理所有资源
     */
    destroy(): void;
}
export default PolygonSelection;
