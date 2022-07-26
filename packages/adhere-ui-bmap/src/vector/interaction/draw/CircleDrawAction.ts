// @ts-ignore
import Util from '@baifendian/adhere-util';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  ICircleData,
  IInteractionLayer,
  IPoint,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './DrawAction';

/**
 * CircleDrawAction
 * @class
 * @classdesc - 圆形选取
 * @remark: - 一个start - end的周期中只能绘制一个圆形
 */
class CircleDrawAction extends DrawAction {
  // 中心点
  protected centerPoint: IPoint | null = null;

  protected isMove = false;

  // 半径
  protected radius: number = 0;

  /**
   * context
   */
  constructor() {
    super();
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * booleanPointInData
   * @description 判断点是否在
   * @param context
   * @param point
   * @param data
   */
  static booleanPointInData(context: IInteractionLayer, point: IPoint, data: ICircleData): boolean {
    return Util.isPointInCircle(point, CircleDrawAction.transformOriginToReal(context, data.data));
  }

  /**
   * draw - 移动的时候绘制
   * @param e
   */
  protected draw(e): void {
    const { context, centerPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !centerPoint) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    const targetPoint: IPoint = Util.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (!targetPoint) return;

    context.clearDraw();

    context.drawHistoryData();

    ctx.beginPath();

    this.radius = Util.getDistanceByBetweenPoint({ p1: centerPoint, p2: targetPoint });

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    ctx.ellipse(
      centerPoint?.x || 0,
      centerPoint?.y || 0,
      this.radius,
      this.radius,
      (45 * Math.PI) / 180,
      0,
      2 * Math.PI,
    );

    ctx.stroke();
    ctx.fill();
  }

  /**
   * draw
   * @description 绘制
   * @param context IInteractionLayer
   * @param ctx
   * @param data
   */
  static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: ICircleData): void {
    if (!ctx || !data) return;

    if (data.style) {
      // 设置上下文属性
      ctx.lineWidth = data.style.lineWidth;
      ctx.lineJoin = data.style.lineJoin;
      ctx.lineCap = data.style.lineCap;
      ctx.setLineDash(data.style.lineDash);
      ctx.lineDashOffset = data.style.lineDashOffset;
      ctx.strokeStyle = data.style.strokeStyle;
      ctx.fillStyle = data.style.fillStyle;
      ctx.globalAlpha = data.style.globalAlpha || 1;
    }

    CircleDrawAction.drawHistoryPath(context, ctx, data.data as { center: IPoint; radius: number });

    // 描边
    ctx.stroke();
    // 填充
    ctx.fill();
  }

  /**
   * drawHistoryPath - 绘制历史数据
   * @param context
   * @param ctx
   * @param data
   */
  static drawHistoryPath(
    context: IInteractionLayer,
    ctx: CanvasRenderingContext2D,
    data: {
      center: IPoint;
      radius: number;
    },
  ): void {
    const centerPixel = context.pointToPixel(data.center);
    const radius = context.actualToDistance(data.radius);

    ctx.save();
    ctx.beginPath();

    // 需要转换
    ctx.ellipse(centerPixel.x, centerPixel.y, radius, radius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    // 描边
    ctx.stroke();
    // 填充
    ctx.fill();
    ctx.restore();
  }

  /**
   * onCanvasMouseDown
   * @param e
   */
  protected onCanvasMouseDown(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    this.centerPoint = Util.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);

    e.stopPropagation();
  }

  /**
   * onCanvasMouseMove
   * @param e
   */
  protected onCanvasMouseMove(e) {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    this.isMove = true;

    this.draw(e);

    e.stopPropagation();
  }

  /**
   * onCanvasMouseUp
   * @param e
   */
  protected onCanvasMouseUp(e) {
    if (!this.isMove) return;

    this.end(e);

    e.stopPropagation();
  }

  /**
   * transformRealToOrigin - 实际数据转换成原始数据
   * @param context
   * @param data
   */
  static transformRealToOrigin(
    context: IInteractionLayer,
    data: { center: IPoint; radius: number },
  ): { center: IPoint; radius: number } {
    return {
      center: context.pixelToPoint(data.center),
      radius: context.distanceToActual(data.radius),
    };
  }

  /**
   * transformOriginToReal - 原始数据转换成实际数据
   * @param context
   * @param data
   */
  static transformOriginToReal(
    context: IInteractionLayer,
    data: { center: IPoint; radius: number },
  ): { center: IPoint; radius: number } {
    return {
      center: context.pointToPixel(data.center),
      radius: context.actualToDistance(data.radius),
    };
  }

  /**
   * getSelectType
   * @return SelectType
   */
  getSelectType(): SelectType {
    return SelectType.Circle;
  }

  /**
   * start
   * @param style
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.BeforeStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
    });
  }

  /**
   * end
   */
  end(e): void {
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
      id: Util.uuid(),
      type: this.getSelectType() as SelectType.Circle,
      data: CircleDrawAction.transformRealToOrigin(context, {
        center: this.centerPoint as IPoint,
        radius: this.radius,
      }),
      style: this.style,
    };

    context.addHistoryData(data);

    this.centerPoint = null;

    this.radius = 0;

    this.isMove = false;

    this.trigger(ActionEvents.End, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
      data,
    });

    super.end(e);
  }

  /**
   * destroy
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
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default CircleDrawAction;
