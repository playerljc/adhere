import { IFreeData, IPoint, IStyle } from '../types';
import DrawAction from './DrawAction';
/**
 * 自由绘制Action类
 * @class FreeDrawAction
 * @classdesc 自由绘制选取功能，支持用户自由绘制任意形状
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个自由图形
 */
declare class FreeDrawAction extends DrawAction {
    /** 起始点 */
    protected startPoint: IPoint | null;
    /** 是否移动过 */
    protected isMove: boolean;
    /** 除了第一个点的所有点 */
    protected points: IPoint[];
    /**
     * 构造函数
     * @description 初始化自由绘制Action，绑定事件处理方法
     */
    constructor();
    /**
     * 绘制自由图形
     * @param e - 鼠标事件
     * @param isEnd - 是否结束绘制
     * @description 根据鼠标位置绘制自由图形路径
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
     * @description 实时绘制自由图形并触发绘制中事件
     */
    private onCanvasMouseMove;
    /**
     * Canvas鼠标抬起事件处理
     * @param e - 鼠标事件
     * @description 结束绘制过程
     */
    private onCanvasMouseUp;
    /**
     * 绘制自由图形
     * @param ctx - Canvas上下文
     * @param data - 自由图形数据
     * @description 静态方法，用于绘制历史数据
     */
    static draw(ctx: CanvasRenderingContext2D, data: IFreeData): void;
    /**
     * 绘制历史路径
     * @param ctx - Canvas上下文
     * @param data - 自由图形数据
     * @description 绘制历史自由图形数据
     */
    static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IFreeData): void;
    /**
     * 开始绘制
     * @param style - 样式对象
     * @description 开始自由绘制Action
     */
    start(style: IStyle): void;
    /**
     * 结束绘制
     * @param e - 鼠标事件
     * @description 结束自由绘制Action，保存数据
     */
    end(e?: MouseEvent): void;
    /**
     * 销毁Action
     * @description 清理资源，移除事件监听器
     */
    destroy(): void;
}
export default FreeDrawAction;
