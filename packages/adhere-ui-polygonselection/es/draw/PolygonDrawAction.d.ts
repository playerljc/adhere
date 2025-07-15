import { IPoint, IPolygonData, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * 多边形绘制Action类
 * @class PolygonDrawAction
 * @classdesc 多边形选取绘制功能，支持绘制任意多边形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个多边形
 */
declare class PolygonDrawAction extends DrawAction {
    /** 开始点 */
    private startPoint;
    /** 点的集合 */
    private pointStack;
    /** 是否移动过 */
    protected isMove: boolean;
    /**
     * 构造函数
     * @description 初始化多边形绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 判断点是否在多边形数据内
     * @param point - 待判断的点
     * @param data - 多边形数据
     * @returns 点是否在多边形内
     * @description 使用turf库判断点是否在多边形内
     */
    static booleanPointInData(point: IPoint, data: IPolygonData): boolean;
    /**
     * Canvas点击事件处理
     * @param e - 鼠标事件
     * @description 处理多边形绘制过程中的点击事件
     */
    private onCanvasClick;
    /**
     * Canvas鼠标移动事件处理
     * @param e - 鼠标事件
     * @description 处理多边形绘制过程中的鼠标移动事件
     */
    private onCanvasMousemove;
    /**
     * Canvas双击事件处理 - 结束绘制
     * @param e - 鼠标事件
     * @description 双击结束多边形绘制
     */
    private onCanvasDbClick;
    /**
     * 绘制点栈
     * @description 绘制已确定的点之间的连线
     */
    private drawStack;
    /**
     * 填充多边形
     * @description 填充已绘制的多边形
     */
    private fill;
    /**
     * 绘制直线
     * @param sP - 起始点
     * @param eP - 结束点
     * @description 绘制两点之间的直线
     */
    private drawLine;
    /**
     * 绘制多边形
     * @param ctx - Canvas上下文
     * @param data - 多边形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: IPolygonData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 多边形数据
     * @description 绘制历史多边形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IPolygonData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始多边形绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @description 结束多边形绘制Action，保存数据
     */
    end(): void;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
}
export default PolygonDrawAction;
