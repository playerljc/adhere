import MathUtil from '@baifendian/adhere-util/lib/math';
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IRectangleData,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './drawAction';
import Util from '../util';

/**
 * RectangleDrawAction
 * @class
 * @classdesc - 矩形选取
 * @remark: - 一个start - end的周期中只能绘制一个矩形
 */
class RectangleDrawAction extends DrawAction {
  // startPoint
  protected startPoint: IPoint | null = null;

  // 左上角坐标
  protected leftTopPoint: IPoint | null = null;

  // 宽度
  protected width: number = 0;

  // 高度
  protected height: number = 0;

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
    const { context, startPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx) return;

    const canvasEl = context.getCanvasEl();

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context.clear();

    context.drawHistoryData();

    ctx.beginPath();

    this.leftTopPoint = Util.getRectLeftTopPoint({ startPoint, targetPoint });
    this.width = Math.abs(targetPoint.x - (startPoint?.x || 0));
    this.height = Math.abs(targetPoint.y - (startPoint?.y || 0));

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    ctx.rect(this.leftTopPoint?.x || 0, this.leftTopPoint?.y || 0, this.width, this.height);

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

    this.startPoint = MathUtil.clientToCtxPoint({
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
   * addHistoryPath - 绘制历史数据
   * @param ctx
   * @param data
   */
  static addHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: {
      leftTopPoint: IPoint | null;
      width: number;
      height: number;
    },
  ): void {
    ctx.beginPath();

    ctx.rect(data?.leftTopPoint?.x || 0, data?.leftTopPoint?.y || 0, data?.width, data?.height);
  }

  /**
   * start
   * @param style
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    style && (this.style = style);

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    // 触发开始之前事件
    this.emit.trigger(ActionEvents.BeforeStart, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.emit.trigger(ActionEvents.Start, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    });
  }

  /**
   * end
   */
  end(e) {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    e && this.draw(e);

    this.status = ActionStatus.End;

    const data: IRectangleData = {
      id: BaseUtil.uuid(),
      type: SelectType.Rectangle,
      data: {
        leftTopPoint: this.leftTopPoint,
        width: this.width,
        height: this.height,
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.startPoint = null;

    this.leftTopPoint = null;

    this.width = 0;

    this.height = 0;

    this.emit.trigger(ActionEvents.End, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
      data,
    });
  }

  /**
   * destroy
   */
  destroy(): void {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    this.startPoint = null;

    this.leftTopPoint = null;

    this.width = 0;

    this.height = 0;

    this.status = ActionStatus.Destroy;

    this.emit.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    });
  }
}

export default RectangleDrawAction;
