import { Events } from '@baifendian/adhere-util-emitter';
import { IAction, IPolygonSelection, IStyle } from '../types';
/**
 * 绘制Action抽象基类
 * @abstract
 * @class DrawAction
 * @classdesc 所有绘制Action的基类，提供基础的绘制功能
 * @implements {IAction}
 * @extends {Events}
 */
declare abstract class DrawAction extends Events implements IAction {
    /** 上下文对象 */
    protected context: IPolygonSelection | null;
    /** 当前状态 */
    protected status: number;
    /** 样式对象 */
    style: IStyle;
    /** 修改样式对象 */
    anchorStyle: IStyle;
    /** 移动样式对象 */
    moveGemStyle: IStyle;
    /**
     * 获取锚点样式
     * @returns 锚点样式对象的副本
     */
    getAnchorStyle(): IStyle;
    /**
     * 获取样式
     * @returns 样式对象的副本
     */
    getStyle(): IStyle;
    /**
     * 获取移动几何图形样式
     * @returns 移动几何图形样式对象的副本
     */
    getMoveGemStyle(): IStyle;
    /**
     * 设置锚点样式
     * @param style - 样式对象
     */
    setAnchorStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 设置样式
     * @param style - 样式对象
     */
    setStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 设置移动几何图形样式
     * @param style - 样式对象
     */
    setMoveGemStyle(style: Partial<IStyle> | undefined): void;
    /**
     * 销毁Action
     * @description 清理资源并重置状态
     */
    destroy(): void;
    /**
     * 结束Action
     * @param e - 鼠标事件
     * @description 结束当前Action并重置光标样式
     */
    end(e?: MouseEvent): void;
    /**
     * 开始Action
     * @param style - 样式对象
     * @description 开始绘制Action，设置光标样式
     */
    start(style?: IStyle): void;
    /**
     * 设置上下文对象
     * @param context - 多边形选择上下文
     */
    setContext(context: IPolygonSelection): void;
    /**
     * 获取状态
     * @returns 当前状态值
     */
    getStatus(): number;
}
export default DrawAction;
