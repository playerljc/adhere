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
  IDiamondData,
  IStyle,
  SelectType,
  IPolygonSelection,
} from '../types';
import DrawAction from './DrawAction';
import Util from '../util';

/**
 * DiamondDrawAction
 * @class
 * @classdesc - 菱形选取
 * @remark: - 一个start - end的周期中只能绘制一个菱形
 */
class DiamondDrawAction extends DrawAction {
  // startPoint
  protected startPoint: IPoint | null = null;

  // 左上角坐标
  protected leftTopPoint: IPoint | null = null;

  // 宽度
  protected width: number = 0;

  // 高度
  protected height: number = 0;

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
   * @param context
   * @param point
   * @param data
   */
  static booleanPointInData(
    context: IPolygonSelection,
    point: IPoint,
    data: IDiamondData,
  ): boolean {
    const { leftTopPoint, width, height } = DiamondDrawAction.transformOriginToReal(
      context,
      data.data,
    );

    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const pt = turf.point([point.x, point.y]);
    const poly = turf.polygon([
      [
        [leftTopPoint.x, leftTopPoint.y + halfHeight],
        [leftTopPoint.x + halfWidth, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y + halfHeight],
        [leftTopPoint.x + halfWidth, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y + halfHeight],
      ],
    ]);

    return turf.booleanPointInPolygon(pt, poly);
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

    if (!canvasEl) return;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context.clearDraw();

    context.drawHistoryData();

    ctx.beginPath();

    this.leftTopPoint = Util.getRectLeftTopPoint({ startPoint, targetPoint });

    if (!this.leftTopPoint) return;

    this.width = Math.abs(targetPoint.x - (startPoint?.x || 0));
    this.height = Math.abs(targetPoint.y - (startPoint?.y || 0));

    const widthHalf = this.width / 2;
    const heightHalf = this.height / 2;

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    // 顺时针方向绘制
    ctx.moveTo(this.leftTopPoint.x, this.leftTopPoint.y + heightHalf);
    ctx.lineTo(this.leftTopPoint.x + widthHalf, this.leftTopPoint.y);
    ctx.lineTo(this.leftTopPoint.x + this.width, this.leftTopPoint.y + heightHalf);
    ctx.lineTo(this.leftTopPoint.x + widthHalf, this.leftTopPoint.y + this.height);

    ctx.stroke();
    ctx.fill();
  }

  /**
   * draw
   * @description
   * @param context
   * @param ctx
   * @param data
   */
  static draw(context: IPolygonSelection, ctx: CanvasRenderingContext2D, data: IDiamondData) {
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
      context,
      ctx,
      data.data as { leftTopPoint: IPoint | null; width: number; height: number },
    );

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
    context: IPolygonSelection,
    ctx: CanvasRenderingContext2D,
    data: {
      leftTopPoint: IPoint | null;
      width: number;
      height: number;
    },
  ): void {
    ctx.beginPath();

    if (!data || !data.leftTopPoint) return;

    const realData = DiamondDrawAction.transformOriginToReal(
      context,
      data as {
        leftTopPoint: IPoint;
        width: number;
        height: number;
      },
    );
    const widthHalf = realData.width / 2;
    const heightHalf = realData.height / 2;

    // 顺时针方向绘制
    ctx.moveTo(realData.leftTopPoint.x, realData.leftTopPoint.y + heightHalf);
    ctx.lineTo(realData.leftTopPoint.x + widthHalf, realData.leftTopPoint.y);
    ctx.lineTo(realData.leftTopPoint.x + realData.width, realData.leftTopPoint.y + heightHalf);
    ctx.lineTo(realData.leftTopPoint.x + widthHalf, realData.leftTopPoint.y + realData.height);
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

    e.stopPropagation();
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

    e.stopPropagation();
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
   * transformOriginToReal - 原始数据转换成实际数据
   * @param context
   * @param data
   */
  static transformOriginToReal(
    context: IPolygonSelection,
    data: {
      leftTopPoint: IPoint;
      width: number;
      height: number;
    },
  ): { leftTopPoint: IPoint; width: number; height: number } {
    return {
      leftTopPoint: context.pointToPixel(data.leftTopPoint),
      width: context.actualToDistance(data.width),
      height: context.actualToDistance(data.height),
    };
  }

  /**
   * transformRealToOrigin - 实际数据转换成原始数据
   * @param context
   * @param data
   */
  static transformRealToOrigin(
    context: IPolygonSelection,
    data: {
      leftTopPoint: IPoint;
      width: number;
      height: number;
    },
  ): {
    leftTopPoint: IPoint;
    width: number;
    height: number;
  } {
    return {
      leftTopPoint: context.pixelToPoint(data.leftTopPoint),
      width: context.distanceToActual(data.width),
      height: context.distanceToActual(data.height),
    };
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
      selectType: SelectType.Diamond,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: SelectType.Diamond,
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

    const data: IDiamondData = {
      id: BaseUtil.uuid(),
      type: SelectType.Diamond,
      data: DiamondDrawAction.transformRealToOrigin(context, {
        leftTopPoint: this.leftTopPoint as IPoint,
        width: this.width,
        height: this.height,
      }),
      style: this.style,
    };

    context.addHistoryData(data);

    this.startPoint = null;

    this.leftTopPoint = null;

    this.width = 0;

    this.height = 0;

    this.isMove = false;

    this.trigger(ActionEvents.End, {
      selectType: SelectType.Diamond,
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

    this.leftTopPoint = null;

    this.width = 0;

    this.height = 0;

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Diamond,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default DiamondDrawAction;
