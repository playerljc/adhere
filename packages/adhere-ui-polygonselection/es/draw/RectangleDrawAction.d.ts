import { IPoint, IRectangleData, IStyle, IDrawContext } from '../types';
import DrawAction from './DrawAction';
/**
 * 矩形绘制Action类
 * @class RectangleDrawAction
 * @classdesc 矩形选取绘制功能，支持绘制矩形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个矩形
 */
declare class RectangleDrawAction extends DrawAction {
    /** 起始点 */
    protected startPoint: IPoint | null;
    /** 左上角坐标 */
    protected leftTopPoint: IPoint | null;
    /** 宽度 */
    protected width: number;
    /** 高度 */
    protected height: number;
    /** 是否移动过 */
    protected isMove: boolean;
    /**
     * 构造函数
     * @description 初始化矩形绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 判断点是否在矩形数据内
     * @param point - 待判断的点
     * @param data - 矩形数据
     * @returns 点是否在矩形内
     * @description 使用turf库判断点是否在矩形多边形内
     */
    static booleanPointInData(point: IPoint, data: IRectangleData): boolean;
    /**
     * 绘制矩形
     * @param e - 鼠标事件
     * @description 根据鼠标位置绘制矩形
     */
    private draw;
    /**
     * 应用绘制样式到Canvas上下文
     * @param ctx - Canvas渲染上下文
     * @param style - 样式对象
     * @description 将样式属性应用到Canvas上下文
     */
    private applyStyle;
    /**
     * Canvas鼠标按下事件处理
     * @param e - 鼠标事件
     * @description 记录起始点并注册移动和抬起事件
     */
    private onCanvasMouseDown;
    /**
     * Canvas鼠标移动事件处理
     * @param e - 鼠标事件
     * @description 实时绘制矩形并触发绘制中事件
     */
    private onCanvasMouseMove;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件
     * @description 结束绘制过程
     */
    private onCanvasMouseUp;
    /**
     * 绘制矩形
     * @param ctx - Canvas上下文
     * @param data - 矩形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: IRectangleData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 矩形数据
     * @description 绘制历史矩形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IRectangleData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始矩形绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @param e - 鼠标事件
     * @description 结束矩形绘制Action，保存数据
     */
    end(e?: MouseEvent): void;
    /**
     * 重置状态
     * @description 重置所有内部状态变量
     */
    private resetState;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
    /**
     * 获取绘制上下文
     * @returns 绘制上下文对象
     * @description 获取当前绘制操作的上下文信息
     */
    getDrawContext(): IDrawContext;
    /**
     * 验证矩形数据
     * @param data - 矩形数据
     * @returns 数据是否有效
     * @description 验证矩形数据的完整性
     */
    static validateRectangleData(data: IRectangleData): boolean;
}
export default RectangleDrawAction;
