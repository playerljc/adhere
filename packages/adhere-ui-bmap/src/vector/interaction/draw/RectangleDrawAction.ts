import * as turf from '@turf/turf';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IInteractionLayer,
  IPoint,
  IRectangleData,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './DrawAction';
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
    context: IInteractionLayer,
    point: IPoint,
    data: IRectangleData,
  ): boolean {
    const { leftTopPoint, width, height } = RectangleDrawAction.transformOriginToReal(
      context,
      data.data,
    );

    const pt = turf.point([point.x, point.y]);
    const poly = turf.polygon([
      [
        [leftTopPoint.x, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y],
      ],
    ]);

    return turf.booleanPointInPolygon(pt, poly);
  }

  /**
   * draw
   * @param e
   */
  protected draw(e): void {
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
   * draw
   * @description
   * @param context
   * @param ctx
   * @param data
   */
  static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IRectangleData) {
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
    context: IInteractionLayer,
    ctx: CanvasRenderingContext2D,
    data: {
      leftTopPoint: IPoint | null;
      width: number;
      height: number;
    },
  ): void {
    ctx.save();
    ctx.beginPath();

    const realData = RectangleDrawAction.transformOriginToReal(
      context,
      data as {
        leftTopPoint: IPoint;
        width: number;
        height: number;
      },
    );

    ctx.rect(
      realData?.leftTopPoint?.x || 0,
      realData?.leftTopPoint?.y || 0,
      realData?.width,
      realData?.height,
    );

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
  protected onCanvasMouseMove(e) {
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
  protected onCanvasMouseUp(e) {
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
    context: IInteractionLayer,
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
    context: IInteractionLayer,
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

  getSelectType(): SelectType {
    return SelectType.Rectangle;
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

    const data: IRectangleData = {
      id: BaseUtil.uuid(),
      type: this.getSelectType() as SelectType.Rectangle,
      data: RectangleDrawAction.transformRealToOrigin(context, {
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

    this.startPoint = null;

    this.leftTopPoint = null;

    this.width = 0;

    this.height = 0;

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default RectangleDrawAction;
