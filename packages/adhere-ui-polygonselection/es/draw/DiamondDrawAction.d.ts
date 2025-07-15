import { IDiamondData, IPoint, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * 菱形绘制Action类
 * @class DiamondDrawAction
 * @classdesc 菱形选取绘制功能，支持绘制菱形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个菱形
 */
declare class DiamondDrawAction extends DrawAction {
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
     * @description 初始化菱形绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 判断点是否在菱形数据内
     * @param point - 待判断的点
     * @param data - 菱形数据
     * @returns 点是否在菱形内
     * @description 使用turf库判断点是否在菱形多边形内
     */
    static booleanPointInData(point: IPoint, data: IDiamondData): boolean;
    /**
     * 绘制菱形
     * @param e - 鼠标事件
     * @description 根据鼠标位置绘制菱形
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
     * @description 实时绘制菱形并触发绘制中事件
     */
    private onCanvasMouseMove;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件
     * @description 结束绘制过程
     */
    private onCanvasMouseUp;
    /**
     * 绘制菱形
     * @param ctx - Canvas上下文
     * @param data - 菱形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: IDiamondData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 菱形数据
     * @description 绘制历史菱形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IDiamondData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始菱形绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @param e - 鼠标事件
     * @description 结束菱形绘制Action，保存数据
     */
    end(e?: MouseEvent): void;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
}
export default DiamondDrawAction;
