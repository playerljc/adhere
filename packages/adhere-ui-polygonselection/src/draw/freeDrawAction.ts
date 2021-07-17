import MathUtil from '@baifendian/adhere-util/lib/math';
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  IAction,
  IPoint,
  IFreeData,
  IPolygonSelection,
  IStyle,
  SelectType,
} from '../types';
import DefaultStyle from '../defaultStyle';

/**
 * FreeDrawAction
 * @class
 * @classdesc - 自由绘制选取
 * @remark: - 一个start - end的周期中只能绘制一个自由图形
 */
class FreeDrawAction implements IAction {
  // 上下文对象
  protected context: IPolygonSelection | null = null;

  // 样式对象
  // @ts-ignore
  protected style: IStyle = {
    ...DefaultStyle,
  };

  // 状态对象
  protected status: number = ActionStatus.UnStart;

  // startPoint
  protected startPoint: IPoint | null = null;

  // 除了第一个点的所有点
  protected points: IPoint[] = [];

  /**
   * context
   */
  constructor() {
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * draw
   * @param e
   * @param isEnd
   */
  private draw(e, isEnd = false) {
    const { context, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    const curPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (!curPoint) return;

    this.points.push(curPoint);

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

    this.points.forEach((point: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    isEnd && ctx.closePath();

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

    this.points.push(this.startPoint);

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

    const { points = [] } = data;

    (points || []).forEach((point: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.closePath();
  }

  /**
   * setContext
   * @param context
   */
  setContext(context: IPolygonSelection) {
    this.context = context;
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
    context.trigger(ActionEvents.BeforeStart);

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    context.trigger(ActionEvents.Start);
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

    this.draw(e, true);

    this.status = ActionStatus.End;

    const data: IFreeData = {
      id: BaseUtil.uuid(),
      type: SelectType.Free,
      data: {
        points: JSON.parse(JSON.stringify(this.points)),
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.startPoint = null;

    this.points = [];

    context.trigger(ActionEvents.End, data);
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

    this.points = [];

    this.status = ActionStatus.Destroy;

    context.trigger(ActionEvents.Destroy);
  }

  /**
   * getStatus - 获取状态
   */
  getStatus(): number {
    return this.status;
  }
}

export default FreeDrawAction;
