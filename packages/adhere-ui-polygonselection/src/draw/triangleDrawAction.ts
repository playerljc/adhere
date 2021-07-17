import MathUtil from '@baifendian/adhere-util/lib/math';
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  IAction,
  IPoint,
  ITriangleData,
  IPolygonSelection,
  IStyle,
  SelectType,
} from '../types';
import DefaultStyle from '../defaultStyle';

/**
 * TriangleDrawAction
 * @class
 * @classdesc - 三角形选取
 * @remark: - 一个start - end的周期中只能绘制一个三角形
 */
class TriangleDrawAction implements IAction {
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

  // 三角形三个点
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
   */
  private draw(e) {
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

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    this.points = this.triangle({ startPoint, targetPoint });
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
   * getPoint
   * @param startPoint
   * @param targetPoint
   */
  private getPoint({ startPoint, targetPoint }): IPoint | null {
    if (targetPoint.x <= startPoint.x && targetPoint.y <= startPoint.y) {
      // leftTop
      return targetPoint;
    } else if (targetPoint.x <= startPoint.x && targetPoint.y >= startPoint.y) {
      // leftBottom
      return {
        x: targetPoint.x,
        y: startPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y <= startPoint.y) {
      // rightTop
      return {
        x: startPoint.x,
        y: targetPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y >= startPoint.y) {
      // rightBottom
      return startPoint;
    }

    return null;
  }

  /**
   * triangle - 判断target在start的四个方向
   * @param startPoint
   * @param targetPoint
   */
  private triangle({ startPoint, targetPoint }): IPoint[] {
    const s = this.getPoint({ startPoint, targetPoint });

    if (!s) return [];

    const w = Math.abs(targetPoint.x - startPoint.x);
    const h = Math.abs(targetPoint.y - startPoint.y);

    const point1 = {
      x: s.x,
      y: s.y + h,
    };

    const point2 = {
      x: s.x + w / 2,
      y: s.y,
    };

    const point3 = {
      x: s.x + w,
      y: s.y + h,
    };

    return [point1, point2, point3];
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

export default TriangleDrawAction;
