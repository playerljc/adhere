import BaseUtil from '@baifendian/adhere-util';

import {
  ActionEvents,
  ActionStatus,
  IPoint,
  IFreeData,
  IStyle,
  SelectType,
  ActionType,
} from '../types';
import DrawAction from './DrawAction';

/**
 * FreeDrawAction
 * @class
 * @classdesc - 自由绘制选取
 * @remark: - 一个start - end的周期中只能绘制一个自由图形
 */
class FreeDrawAction extends DrawAction {
  // startPoint
  protected startPoint: IPoint | null = null;

  protected isMove = false;

  // 除了第一个点的所有点
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
   * @param isEnd
   */
  private draw(e, isEnd = false) {
    const { context, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    const curPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (!curPoint) return;

    this.points.push(curPoint);

    context.clearDraw();

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

    this.startPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (!this.startPoint) return;

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

    this.isMove = true;

    this.draw(e);
  }

  /**
   * onCanvasMouseUp
   * @param e
   */
  private onCanvasMouseUp(e) {
    if (!this.isMove) return;
    this.end(e);
    e.stopPropagation();
  }

  /**
   * draw
   * @description
   * @param ctx
   * @param data
   */
  static draw(ctx: CanvasRenderingContext2D, data: IFreeData) {
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

    this.drawHistoryPath(ctx, data.data as { points: IPoint[] });

    // 描边
    ctx.stroke();
    // 填充
    ctx.fill();
  }

  /**
   * drawHistoryPath - 绘制历史数据
   * @param ctx
   * @param data
   */
  static drawHistoryPath(
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
      selectType: SelectType.Free,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: SelectType.Free,
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

    this.isMove = false;

    this.trigger(ActionEvents.End, {
      selectType: SelectType.Free,
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

    this.startPoint = null;

    this.points = [];

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Free,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default FreeDrawAction;
