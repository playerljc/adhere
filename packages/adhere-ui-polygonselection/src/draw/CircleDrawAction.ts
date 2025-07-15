import BaseUtil from '@baifendian/adhere-util';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  ICircleData,
  IPoint,
  IStyle,
  SelectType
} from '../types';
import DrawAction from './DrawAction';

/**
 * 圆形绘制Action类
 * @class CircleDrawAction
 * @classdesc 圆形选取绘制功能
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个圆形
 */
class CircleDrawAction extends DrawAction {
  /** 中心点 */
  protected centerPoint: IPoint | null = null;

  /** 是否移动过 */
  protected isMove = false;

  /** 半径 */
  protected radius: number = 0;

  /**
   * 构造函数
   * @description 初始化圆形绘制Action，绑定事件处理方法
   */
  constructor() {
    super();
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * 判断点是否在圆形数据内
   * @param point - 待判断的点
   * @param data - 圆形数据
   * @returns 点是否在圆形内
   */
  static booleanPointInData(point: IPoint, data: ICircleData): boolean {
    return BaseUtil.isPointInCircle(point, data.data);
  }

  /**
   * 绘制圆形
   * @param e - 鼠标事件
   * @description 根据鼠标位置绘制圆形
   */
  private draw(e: MouseEvent): void {
    const { context, centerPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !centerPoint) return;

    const canvasEl = context?.getCanvasEl();

    if (!canvasEl) return;

    const targetPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (!targetPoint) return;

    context?.clearDraw();

    context?.drawHistoryData();

    ctx.beginPath();

    this.radius = BaseUtil.getDistanceByBetweenPoint({ p1: centerPoint, p2: targetPoint });

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    style.lineDash && ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;
    ctx.globalAlpha = style.globalAlpha;

    ctx.ellipse(
      centerPoint?.x || 0,
      centerPoint?.y || 0,
      this.radius,
      this.radius,
      (45 * Math.PI) / 180,
      0,
      2 * Math.PI,
    );

    ctx.closePath();

    ctx.stroke();
    ctx.fill();
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

    this.centerPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件
   * @description 实时绘制圆形并触发绘制中事件
   */
  private onCanvasMouseMove(e: MouseEvent): void {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    this.isMove = true;

    this.draw(e);

    this.trigger(ActionEvents.Drawing, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
      data: {
        id: BaseUtil.uuid(),
        type: SelectType.Circle,
        data: {
          center: this.centerPoint as IPoint,
          radius: this.radius,
        },
        style: this.style,
      },
    });
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
   * 绘制圆形
   * @param ctx - Canvas上下文
   * @param data - 圆形数据
   * @description 静态方法，用于绘制历史数据
   */
  static draw(ctx: CanvasRenderingContext2D, data: ICircleData): void {
    if (!ctx || !data) return;

    this.drawHistoryPath(ctx, data);
  }

  /**
   * 绘制历史路径
   * @param ctx - Canvas上下文
   * @param data - 圆形数据
   * @description 绘制历史圆形数据
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: ICircleData,
  ): void {
    ctx.beginPath();

    if (data.style) {
      // 设置上下文属性
      ctx.lineWidth = data.style.lineWidth;
      ctx.lineJoin = data.style.lineJoin;
      ctx.lineCap = data.style.lineCap;
      data.style.lineDash && ctx.setLineDash(data.style.lineDash);
      ctx.lineDashOffset = data.style.lineDashOffset;
      ctx.strokeStyle = data.style.strokeStyle;
      ctx.fillStyle = data.style.fillStyle;
      ctx.globalAlpha = data.style.globalAlpha ?? 1;
    }

    ctx.ellipse(
      data.data.center.x,
      data.data.center.y,
      data.data.radius,
      data.data.radius,
      (45 * Math.PI) / 180,
      0,
      2 * Math.PI,
    );

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 开始绘制
   * @param style - 样式对象
   * @description 开始圆形绘制Action
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context?.getCanvasEl?.();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.DrawBeforeStart, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.DrawStart, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });
  }

  /**
   * 结束绘制
   * @param e - 鼠标事件
   * @description 结束圆形绘制Action，保存数据
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

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    e && this.draw(e);

    this.status = ActionStatus.End;

    const data: ICircleData = {
      id: BaseUtil.uuid(),
      type: SelectType.Circle,
      data: {
        center: this.centerPoint as IPoint,
        radius: this.radius,
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.centerPoint = null;

    this.radius = 0;

    this.isMove = false;

    this.trigger(ActionEvents.DrawEnd, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
      data,
    });

    super.end(e);
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

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    this.centerPoint = null;

    this.radius = 0;

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default CircleDrawAction;
