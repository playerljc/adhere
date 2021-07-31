// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  IPoint,
  ITriangleData,
  IStyle,
  SelectType,
  ActionType,
} from '../types';
import DrawAction from './drawAction';
import Util from '../util';

/**
 * TriangleDrawAction
 * @class
 * @classdesc - 三角形选取
 * @remark: - 一个start - end的周期中只能绘制一个三角形
 */
class TriangleDrawAction extends DrawAction {
  // startPoint
  protected startPoint: IPoint | null = null;

  // 三角形三个点
  protected points: IPoint[] = [];

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
  private draw(e) {
    const { context, startPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx) return;

    const canvasEl = context.getCanvasEl();

    if(!canvasEl) return;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context.clear();

    context.drawHistoryData();

    ctx.beginPath();

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    this.points = Util.triangle({ startPoint, targetPoint });
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.lineTo(this.points[1].x, this.points[1].y);
    ctx.lineTo(this.points[2].x, this.points[2].y);

    ctx.closePath();

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
      points: IPoint[];
    },
  ): void {
    ctx.beginPath();

    ctx.moveTo(data.points[0].x, data.points[0].y);
    ctx.lineTo(data.points[1].x, data.points[1].y);
    ctx.lineTo(data.points[2].x, data.points[2].y);
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
      selectType: SelectType.Triangle,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.emit.trigger(ActionEvents.Start, {
      selectType: SelectType.Triangle,
      actionType: ActionType.Draw,
    });
  }

  /**
   * end
   */
  end(e): void {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    e && this.draw(e);

    this.status = ActionStatus.End;

    const data: ITriangleData = {
      id: BaseUtil.uuid(),
      type: SelectType.Triangle,
      data: {
        points: JSON.parse(JSON.stringify(this.points)),
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.startPoint = null;

    this.points = [];

    this.emit.trigger(ActionEvents.End, {
      selectType: SelectType.Triangle,
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

    // 如果是运行状态则删除之前的绘制
    if (this.status === ActionStatus.Running) {
      context.clear();
      context.drawHistoryData();
    }

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    this.startPoint = null;

    this.points = [];

    this.status = ActionStatus.Destroy;

    this.emit.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Triangle,
      actionType: ActionType.Draw,
    });
  }
}

export default TriangleDrawAction;
