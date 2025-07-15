import { IPoint, IStartData, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * 星形绘制Action类
 * @class StartDrawAction
 * @classdesc 五角星选取绘制功能，支持绘制五角星几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个五角星
 */
declare class StartDrawAction extends DrawAction {
    /** 中心点 */
    protected centerPoint: IPoint | null;
    /** 外圆半径 */
    protected outRadius: number;
    /** 内圆半径 */
    protected innerRadius: number;
    /** 是否移动过 */
    protected isMove: boolean;
    /**
     * 构造函数
     * @description 初始化星形绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 判断点是否在星形数据内
     * @param point - 待判断的点
     * @param data - 星形数据
     * @returns 点是否在星形内
     * @description 使用turf库判断点是否在星形多边形内
     */
    static booleanPointInData(point: IPoint, data: IStartData): boolean;
    /**
     * 绘制星形
     * @param ctx - Canvas上下文
     * @param data - 星形数据
     * @description 静态方法，用于绘制星形
     */
    static drawStart({ ctx, data }: {
        ctx: CanvasRenderingContext2D;
        data: IStartData;
    }): void;
    /**
     * 绘制星形
     * @param e - 鼠标事件
     * @description 根据鼠标位置绘制星形
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
     * @description 实时绘制星形并触发绘制中事件
     */
    private onCanvasMouseMove;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件
     * @description 结束绘制过程
     */
    private onCanvasMouseUp;
    /**
     * 绘制星形
     * @param ctx - Canvas上下文
     * @param data - 星形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: IStartData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 星形数据
     * @description 绘制历史星形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IStartData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始星形绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @param e - 鼠标事件
     * @description 结束星形绘制Action，保存数据
     */
    end(e?: MouseEvent): void;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
}
export default StartDrawAction;
