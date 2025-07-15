import BaseUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IRectangleData,
  IStyle,
  SelectType,
  IEventParams,
  IDrawContext
} from '../types';
import Util from '../Util';
import DrawAction from './DrawAction';

/**
 * 矩形绘制Action类
 * @class RectangleDrawAction
 * @classdesc 矩形选取绘制功能，支持绘制矩形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个矩形
 */
class RectangleDrawAction extends DrawAction {
  /** 起始点 */
  protected startPoint: IPoint | null = null;

  /** 左上角坐标 */
  protected leftTopPoint: IPoint | null = null;

  /** 宽度 */
  protected width: number = 0;

  /** 高度 */
  protected height: number = 0;

  /** 是否移动过 */
  protected isMove: boolean = false;

  /**
   * 构造函数
   * @description 初始化矩形绘制Action，绑定事件处理方法
   */
  constructor() {
    super();
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * 判断点是否在矩形数据内
   * @param point - 待判断的点
   * @param data - 矩形数据
   * @returns 点是否在矩形内
   * @description 使用turf库判断点是否在矩形多边形内
   */
  static booleanPointInData(point: IPoint, data: IRectangleData): boolean {
    if (!data?.data?.leftTopPoint || !data?.data?.width || !data?.data?.height) {
      return false;
    }

    const { leftTopPoint, width, height } = data.data;

    const pt = turf.point([point.x, point.y]);
    const poly = turf.polygon([
      [
        [leftTopPoint.x, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y],
      ],
    ]);

    return turf.booleanPointInPolygon(pt, poly);
  }

  /**
   * 绘制矩形
   * @param e - 鼠标事件
   * @description 根据鼠标位置绘制矩形
   */
  private draw(e: MouseEvent): void {
    const { context, startPoint, style } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx) return;

    const canvasEl = context?.getCanvasEl();
    if (!canvasEl) return;

    const targetPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context?.clearDraw?.();
    context?.drawHistoryData?.();

    ctx.beginPath();

    if (!startPoint) return;

    const leftTopPoint = Util.getRectLeftTopPoint({ startPoint, targetPoint });
    if (!leftTopPoint) return;

    this.leftTopPoint = leftTopPoint;
    this.width = Math.abs(targetPoint.x - startPoint.x);
    this.height = Math.abs(targetPoint.y - startPoint.y);

    // 应用样式
    this.applyStyle(ctx, style);

    ctx.rect(this.leftTopPoint.x, this.leftTopPoint.y, this.width, this.height);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 应用绘制样式到Canvas上下文
   * @param ctx - Canvas渲染上下文
   * @param style - 样式对象
   * @description 将样式属性应用到Canvas上下文
   */
  private applyStyle(ctx: CanvasRenderingContext2D, style: IStyle): void {
    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    if (style.lineDash && style.lineDash.length > 0) {
      ctx.setLineDash(style.lineDash);
    }
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;
    ctx.globalAlpha = style.globalAlpha;
  }

  /**
   * Canvas鼠标按下事件处理
   * @param e - 鼠标事件
   * @description 记录起始点并注册移动和抬起事件
   */
  private onCanvasMouseDown(e: MouseEvent): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();
    if (!canvasEl) return;

    this.startPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件
   * @description 实时绘制矩形并触发绘制中事件
   */
  private onCanvasMouseMove(e: MouseEvent): void {
    const { context } = this;
    if (!context) return;

    this.isMove = true;
    this.draw(e);

    const eventParams: IEventParams = {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
      data: {
        id: BaseUtil.uuid(),
        type: SelectType.Rectangle,
        data: {
          leftTopPoint: this.leftTopPoint!,
          width: this.width,
          height: this.height,
        },
        style: this.style,
      },
    };

    this.trigger(ActionEvents.Drawing, eventParams);
  }

  /**
   * Canvas鼠标抬起事件处理
   * @param e - 鼠标事件
   * @description 结束绘制过程
   */
  private onCanvasMouseUp(e: MouseEvent): void {
    if (!this.isMove) return;

    this.end(e);
    e.stopPropagation();
  }

  /**
   * 绘制矩形
   * @param ctx - Canvas上下文
   * @param data - 矩形数据
   * @description 静态方法，用于绘制历史数据
   */
  static draw(ctx: CanvasRenderingContext2D, data: IRectangleData): void {
    if (!ctx || !data) return;

    this.drawHistoryPath(ctx, data);
  }

  /**
   * 绘制历史路径
   * @param ctx - Canvas上下文
   * @param data - 矩形数据
   * @description 绘制历史矩形数据
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: IRectangleData,
  ): void {
    if (!ctx || !data?.data) return;

    ctx.beginPath();

    if (data.style) {
      // 设置上下文属性
      ctx.lineWidth = data.style.lineWidth;
      ctx.lineJoin = data.style.lineJoin;
      ctx.lineCap = data.style.lineCap;
      if (data.style.lineDash && data.style.lineDash.length > 0) {
        ctx.setLineDash(data.style.lineDash);
      }
      ctx.lineDashOffset = data.style.lineDashOffset;
      ctx.strokeStyle = data.style.strokeStyle;
      ctx.fillStyle = data.style.fillStyle;
      ctx.globalAlpha = data.style.globalAlpha ?? 1;
    }

    const { leftTopPoint, width, height } = data.data;
    ctx.rect(
      leftTopPoint?.x || 0, 
      leftTopPoint?.y || 0, 
      width || 0, 
      height || 0
    );

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 开始绘制
   * @param style - 样式对象
   * @description 开始矩形绘制Action
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) {
      return;
    }

    const { context } = this;
    const canvasEl = context?.getCanvasEl?.();
    if (!canvasEl) return;

    super.start(style);

    if (style) {
      this.style = style;
    }

    // 触发开始之前事件
    const beforeStartParams: IEventParams = {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    };
    this.trigger(ActionEvents.DrawBeforeStart, beforeStartParams);

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    const startParams: IEventParams = {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    };
    this.trigger(ActionEvents.DrawStart, startParams);
  }

  /**
   * 结束绘制
   * @param e - 鼠标事件
   * @description 结束矩形绘制Action，保存数据
   */
  end(e?: MouseEvent): void {
    const { context } = this;

    if (!context) {
      super.end(e);
      return;
    }

    const canvasEl = context.getCanvasEl();
    if (!canvasEl) {
      super.end(e);
      return;
    }

    // 移除事件监听器
    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    // 最终绘制
    if (e) {
      this.draw(e);
    }

    this.status = ActionStatus.End;

    // 创建数据对象
    const data: IRectangleData = {
      id: BaseUtil.uuid(),
      type: SelectType.Rectangle,
      data: {
        leftTopPoint: this.leftTopPoint!,
        width: this.width,
        height: this.height,
      },
      style: this.style,
    };

    // 添加到历史数据
    context.addHistoryData(data);

    // 重置状态
    this.resetState();

    // 触发结束事件
    const endParams: IEventParams = {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
      data,
    };
    this.trigger(ActionEvents.DrawEnd, endParams);

    super.end(e);
  }

  /**
   * 重置状态
   * @description 重置所有内部状态变量
   */
  private resetState(): void {
    this.startPoint = null;
    this.leftTopPoint = null;
    this.width = 0;
    this.height = 0;
    this.isMove = false;
  }

  /**
   * 销毁Action
   * @description 清理资源，移除事件监听器
   */
  destroy(): void {
    const { context } = this;

    if (!context) {
      super.destroy();
      return;
    }

    const canvasEl = context.getCanvasEl();
    if (!canvasEl) {
      super.destroy();
      return;
    }

    // 如果是运行状态则删除之前的绘制
    if (this.status === ActionStatus.Running) {
      context.clearDraw();
      context.drawHistoryData();
    }

    // 移除事件监听器
    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    // 重置状态
    this.resetState();

    this.status = ActionStatus.Destroy;

    // 触发销毁事件
    const destroyParams: IEventParams = {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    };
    this.trigger(ActionEvents.Destroy, destroyParams);

    super.destroy();
  }

  /**
   * 获取绘制上下文
   * @returns 绘制上下文对象
   * @description 获取当前绘制操作的上下文信息
   */
  getDrawContext(): IDrawContext {
    return {
      context: this.context,
      startPoint: this.startPoint,
      style: this.style,
    };
  }

  /**
   * 验证矩形数据
   * @param data - 矩形数据
   * @returns 数据是否有效
   * @description 验证矩形数据的完整性
   */
  static validateRectangleData(data: IRectangleData): boolean {
    return !!(
      data?.data?.leftTopPoint &&
      typeof data.data.width === 'number' &&
      typeof data.data.height === 'number' &&
      data.data.width >= 0 &&
      data.data.height >= 0
    );
  }
}

export default RectangleDrawAction;
