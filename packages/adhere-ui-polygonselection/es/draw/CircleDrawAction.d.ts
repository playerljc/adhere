import { ICircleData, IPoint, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * 圆形绘制Action类
 * @class CircleDrawAction
 * @classdesc 圆形选取绘制功能
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个圆形
 */
declare class CircleDrawAction extends DrawAction {
    /** 中心点 */
    protected centerPoint: IPoint | null;
    /** 是否移动过 */
    protected isMove: boolean;
    /** 半径 */
    protected radius: number;
    /**
     * 构造函数
     * @description 初始化圆形绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 判断点是否在圆形数据内
     * @param point - 待判断的点
     * @param data - 圆形数据
     * @returns 点是否在圆形内
     */
    static booleanPointInData(point: IPoint, data: ICircleData): boolean;
    /**
     * 绘制圆形
     * @param e - 鼠标事件
     * @description 根据鼠标位置绘制圆形
     */
    private draw;
    /**
     * Canvas鼠标按下事件处理
     * @param e - 鼠标事件
     * @description 记录起始点并注册移动和抬起事件
     */
    private onCanvasMouseDown;
    /**
     * Canvas鼠标移动事件处理
     * @param e - 鼠标事件
     * @description 实时绘制圆形并触发绘制中事件
     */
    private onCanvasMouseMove;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件
     * @description 结束绘制过程
     */
    private onCanvasMouseUp;
    /**
     * 绘制圆形
     * @param ctx - Canvas上下文
     * @param data - 圆形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: ICircleData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 圆形数据
     * @description 绘制历史圆形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: ICircleData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始圆形绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @param e - 鼠标事件
     * @description 结束圆形绘制Action，保存数据
     */
    end(e?: MouseEvent): void;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
}
export default CircleDrawAction;
