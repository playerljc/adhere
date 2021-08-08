import * as turf from '@turf/turf';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IStartData,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './drawAction';

/**
 * StartDrawAction
 * @class
 * @classdesc - 五角星选取
 * @remark: - 一个start - end的周期中只能绘制一个五角星
 */
class StartDrawAction extends DrawAction {
  // 中心点
  protected centerPoint: IPoint | null = null;

  // 外圆半径
  protected outRadius: number = 0;

  // 内圆半径
  protected innerRadius: number = 0;

  protected isMove = false;

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
   * @param point
   * @param data
   */
  static booleanPointInData(point: IPoint, data: IStartData): boolean {
    const {
      // 圆的中心点
      center,
      // 外半径
      outRadius,
      // 内半径(外半径的一半)
      innerRadius,
    } = data.data;

    const pt = turf.point([point.x, point.y]);

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    const points: IPoint[] = [];

    for (let i = 0; i < startCount; i++) {
      points.push({
        x: Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        y: -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      });

      points.push({
        x: Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        y: -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      });
    }

    const polygon = points.map((point) => [point.x, point.y]);
    polygon.push(polygon[0]);
    const poly = turf.polygon([polygon]);

    return turf.booleanPointInPolygon(pt, poly);
  }

  /**
   * drawStart
   * @param ctx
   * @param data
   */
  static drawStart({ ctx, data }: { ctx: CanvasRenderingContext2D; data: IStartData }): void {
    if (!data || !ctx) return;

    const {
      data: { center, outRadius, innerRadius },
      style,
    } = data;

    ctx.beginPath();

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    for (let i = 0; i < startCount; i++) {
      if (style) {
        ctx.lineWidth = style.lineWidth;
        ctx.lineJoin = style.lineJoin;
        ctx.lineCap = style.lineCap;
        ctx.setLineDash(style.lineDash);
        ctx.lineDashOffset = style.lineDashOffset;
        ctx.strokeStyle = style.strokeStyle;
        ctx.fillStyle = style.fillStyle;
      }

      ctx.lineTo(
        Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      );
      ctx.lineTo(
        Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      );
    }

    ctx.stroke();
    ctx.fill();
  }

  /**
   * draw
   * @param e
   */
  private draw(e): void {
    const { context, centerPoint } = this;

    const ctx = context?.getCtx();

    if (!context || !centerPoint || !ctx) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl || !this.centerPoint) return;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context.clearDraw();

    context.drawHistoryData();

    this.outRadius = MathUtil.getDistanceByBetweenPoint({ p1: centerPoint, p2: targetPoint });

    this.innerRadius = this.outRadius / 2;

    StartDrawAction.drawStart({
      ctx,
      data: {
        data: {
          center: this.centerPoint,
          outRadius: this.outRadius,
          innerRadius: this.innerRadius,
        },
        style: this.style,
      },
    });
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
  static draw(ctx: CanvasRenderingContext2D, data: IStartData) {
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

    this.drawHistoryPath(
      ctx,
      data.data as {
        // 圆的中心点
        center: IPoint;
        // 外半径
        outRadius: number;
        // 内半径(外半径的一半)
        innerRadius: number;
      },
    );

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
      // 圆的中心点
      center: IPoint;
      // 外半径
      outRadius: number;
      // 内半径(外半径的一半)
      innerRadius: number;
    },
  ): void {
    if (!data) return;

    StartDrawAction.drawStart({
      ctx,
      data: {
        data,
      },
    });
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
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: SelectType.Start,
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

    if (!canvasEl || !this.centerPoint || !this.outRadius || !this.innerRadius) {
      super.end(e);
      return;
    }

    canvasEl?.removeEventListener('mousedown', this.onCanvasMouseDown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseUp);

    e && this.draw(e);

    this.status = ActionStatus.End;

    const data: IStartData = {
      id: BaseUtil.uuid(),
      type: SelectType.Start,
      data: {
        center: this.centerPoint,
        outRadius: this.outRadius,
        innerRadius: this.innerRadius,
      },
      style: this.style,
    };

    context.addHistoryData(data);

    this.centerPoint = null;

    this.outRadius = 0;

    this.innerRadius = 0;

    this.isMove = false;

    this.trigger(ActionEvents.End, {
      selectType: SelectType.Start,
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

    this.outRadius = 0;

    this.innerRadius = 0;

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default StartDrawAction;
