// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util/lib/base';

import DrawAction from './drawAction';
import {
  ActionEvents,
  ActionStatus,
  IPoint,
  ICircleData,
  IStyle,
  SelectType,
  ActionType,
} from '../types';

/**
 * CircleDrawAction
 * @class
 * @classdesc - 圆形选取
 * @remark: - 一个start - end的周期中只能绘制一个圆形
 */
class CircleDrawAction extends DrawAction {
  // 中心点
  protected centerPoint: IPoint | null = null;

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
   * draw
   * @param e
   */
  private draw(e): void {
    const { context, centerPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !centerPoint) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if(!targetPoint) return;

    context.clearDraw();

    context.drawHistoryData();

    ctx.beginPath();

    this.radius = MathUtil.getDistanceByBetweenPoint({ p1: centerPoint, p2: targetPoint });

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
   * onCanvasMouseDown
   * @param e
   */
  private onCanvasMouseDown(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    this.centerPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);
  }

  /**
   * onCanvasMouseMove
   * @param e
   */
  private onCanvasMouseMove(e) {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    this.draw(e);
  }

  /**
   * onCanvasMouseUp
   * @param e
   */
  private onCanvasMouseUp(e) {
    this.end(e);
  }

  /**
   * drawHistoryPath - 绘制历史数据
   * @param ctx
   * @param data
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: {
      center: IPoint;
      radius: number;
    },
  ): void {
    ctx.beginPath();

    ctx.ellipse(
      data.center.x,
      data.center.y,
      data.radius,
      data.radius,
      (45 * Math.PI) / 180,
      0,
      2 * Math.PI,
    );
  }

  /**
   * start
   * @param style
   */
  start(style: IStyle) {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.BeforeStart, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });
  }

  /**
   * end
   */
  end(e) {
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
        center: this.centerPoint,
        radius: this.radius,
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.centerPoint = null;

    this.radius = 0;

    this.trigger(ActionEvents.End, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
      data,
    });

    super.end(e);
  }

  /**
   * destroy
   */
  destroy() {
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

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Circle,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default CircleDrawAction;
