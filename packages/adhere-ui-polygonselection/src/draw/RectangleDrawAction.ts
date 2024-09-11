import BaseUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IRectangleData,
  IStyle,
  SelectType
} from '../types';
import Util from '../Util';
import DrawAction from './DrawAction';

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
   * @param point
   * @param data
   */
  static booleanPointInData(point: IPoint, data: IRectangleData): boolean {
    const { leftTopPoint, width, height } = data.data;

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
  private draw(e): void {
    const { context, startPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context ||  !ctx) return;

    const canvasEl = context?.getCanvasEl?.();

    if (!canvasEl) return;

    const targetPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context?.clearDraw?.();

    context?.drawHistoryData?.();

    ctx.beginPath();

    this.leftTopPoint = Util.getRectLeftTopPoint({ startPoint, targetPoint });
    this.width = Math.abs(targetPoint.x - (startPoint?.x ||  0));
    this.height = Math.abs(targetPoint.y - (startPoint?.y ||  0));

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    style.lineDash && ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;
    ctx.globalAlpha = style.globalAlpha;

    ctx.rect(this.leftTopPoint?.x ||  0, this.leftTopPoint?.y ||  0, this.width, this.height);

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

    this.startPoint = BaseUtil.clientToCtxPoint({
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

    this.trigger(ActionEvents.Drawing, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
      data: {
        id: BaseUtil.uuid(),
        type: SelectType.Rectangle,
        data: {
          leftTopPoint: this.leftTopPoint as IPoint,
          width: this.width,
          height: this.height,
        },
        style: this.style,
      },
    });
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
  static draw(ctx: CanvasRenderingContext2D, data: IRectangleData) {
    if (!ctx ||  !data) return;


    this.drawHistoryPath(
      ctx,
      data,
      // data.data as { leftTopPoint: IPoint | null; width: number; height: number },
    );

  }

  /**
   * drawHistoryPath - 绘制历史数据
   * @param ctx
   * @param data
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data
    // data: {
    //   leftTopPoint: IPoint | null;
    //   width: number;
    //   height: number;
    // },
  ): void {
    ctx.beginPath();

    if (data.style) {
      // 设置上下文属性
      ctx.lineWidth = data.style.lineWidth;
      ctx.lineJoin = data.style.lineJoin;
      ctx.lineCap = data.style.lineCap;
      data.style.lineDash && ctx.setLineDash(data.style.lineDash);
      ctx.lineDashOffset = data.style.lineDashOffset;
      ctx.strokeStyle = data.style.strokeStyle;
      ctx.fillStyle = data.style.fillStyle;
      ctx.globalAlpha = data.style.globalAlpha ?? 1;
    }

    ctx.rect(data?.data?.leftTopPoint?.x || 0, data?.data?.leftTopPoint?.y || 0, <number>data?.data?.width, <number>data?.data?.height);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * start
   * @param style
   */
  start(style: IStyle): void {
    if (!this.context ||  [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context?.getCanvasEl?.();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.DrawBeforeStart, {
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.DrawStart, {
      selectType: SelectType.Rectangle,
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
      type: SelectType.Rectangle,
      data: {
        leftTopPoint: this.leftTopPoint as IPoint,
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

    this.isMove = false;

    // 1.绘制中
    // 2.绘制完成

    // 3.修改中
    // 4.修改完成

    // 5.移动中
    // 6.移动完成

    this.trigger(ActionEvents.DrawEnd, {
      selectType: SelectType.Rectangle,
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
      selectType: SelectType.Rectangle,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default RectangleDrawAction;
