import * as turf from '@turf/turf';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util';

import {
  ActionEvents,
  ActionStatus,
  IPolygonData,
  IPoint,
  IStyle,
  SelectType,
  ActionType,
  IInteractionLayer,
} from '../types';
import DrawAction from './DrawAction';

/**
 * PolygonAction
 * @class PolygonAction
 * @classdesc  - 多边形选取
 * @remark: 一个start - end的周期中只能绘制一个多边形
 */
class PolygonDrawAction extends DrawAction {
  // 开始点
  protected startPoint: IPoint | null = null;

  // 点的集合
  protected pointStack: IPoint[] = [];

  protected isMove = false;

  /**
   * constructor
   */
  constructor() {
    super();
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasDbClick = this.onCanvasDbClick.bind(this);
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
    data: IPolygonData,
  ): boolean {
    let points = [...data.data];
    points.push(points[0]);

    points = PolygonDrawAction.transformOriginToReal(context, points);

    const pt = turf.point([point.x, point.y]);
    const poly = turf.polygon([points.map((point) => [point.x, point.y])]);

    return turf.booleanPointInPolygon(pt, poly);
  }

  /**
   * draw
   * @description
   * @param context
   * @param ctx
   * @param data
   */
  static draw(context: IInteractionLayer, ctx: CanvasRenderingContext2D, data: IPolygonData) {
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

    this.drawHistoryPath(context, ctx, data.data as IPoint[]);

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
    data: IPoint[] = [],
  ): void {
    ctx.save();
    ctx.beginPath();

    const realData = PolygonDrawAction.transformOriginToReal(context, data);

    (realData || []).forEach((point: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.closePath();

    // 描边
    ctx.stroke();
    // 填充
    ctx.fill();
    ctx.restore();
  }

  /**
   * transformOriginToReal - 原始数据转换成实际数据
   * @param context
   * @param data
   */
  static transformOriginToReal(context: IInteractionLayer, data: IPoint[]): IPoint[] {
    return data.map((point) => context.pointToPixel(point));
  }

  /**
   * transformRealToOrigin - 实际数据转换成原始数据
   * @param context
   * @param data
   */
  static transformRealToOrigin(context: IInteractionLayer, data: IPoint[]): IPoint[] {
    return data.map((point) => context.pixelToPoint(point));
  }

  /**
   * fill
   */
  protected fill(): void {
    if (!this.context) return;

    const { pointStack } = this;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    if (pointStack.length <= 1) return;

    ctx.save();
    ctx.beginPath();

    for (let i = 0; i < pointStack.length; i++) {
      const point = pointStack[i];

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.closePath();
    ctx.fillStyle = this.style.fillStyle;
    ctx.fill();
    ctx.restore();
  }

  /**
   * drawLine
   * @param sP
   * @param eP
   */
  protected drawLine(sP: IPoint, eP: IPoint): void {
    const { context } = this;

    if (!context) return;

    const { style } = this;

    const ctx = context.getCtx();

    if (!ctx) return;

    ctx.beginPath();

    ctx.moveTo(sP.x, sP.y);

    ctx.lineTo(eP.x, eP.y);

    ctx.strokeStyle = style.strokeStyle;

    ctx.fillStyle = style.fillStyle;

    ctx.lineWidth = style.lineWidth;

    ctx.lineCap = style.lineCap;

    ctx.lineJoin = style.lineJoin;

    ctx.lineDashOffset = style.lineDashOffset;

    ctx.setLineDash(style.lineDash);

    ctx.stroke();
  }

  /**
   * drawStack
   */
  protected drawStack(): void {
    const { pointStack } = this;

    if (pointStack.length <= 1) return;

    let index = 0;

    do {
      this.drawLine(pointStack[index], pointStack[index + 1]);

      index++;
    } while (index !== pointStack.length - 1);
  }

  protected getCanvasClick() {
    return this.onCanvasClick;
  }

  protected getCanvasMousemove() {
    return this.onCanvasMousemove;
  }

  protected getCanvasDbClick() {
    return this.onCanvasDbClick;
  }

  /**
   * onCanvasClick
   * @param e
   */
  protected onCanvasClick(e): void {
    console.log('多边形Click');
    if (!this.context) {
      return;
    }

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) {
      return;
    }

    if (e.detail >= 2) {
      return;
    }

    // 第一次
    if (!this.startPoint) {
      canvasEl?.addEventListener('mousemove', this.getCanvasMousemove());
      canvasEl?.addEventListener('dblclick', this.getCanvasDbClick());

      this.startPoint = BaseUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      if (!this.startPoint) return;

      this.pointStack.push(this.startPoint);

      // 触发开始事件
      this.trigger(ActionEvents.Start, {
        selectType: this.getSelectType(),
        actionType: ActionType.Draw,
      });
    }
    // 不是第一次
    else {
      // 画一条直线
      // 当前点
      const targetPoint = BaseUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      this.drawLine(this.startPoint, targetPoint);

      this.startPoint = targetPoint;

      if (this.startPoint) {
        this.pointStack.push(this.startPoint);
      }
    }

    e.stopPropagation();
  }

  /**
   * onCanvasMousemove
   * @param e
   */
  protected onCanvasMousemove(e): void {
    const { context, startPoint } = this;

    if (!context) return;
    if (!startPoint) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    this.isMove = true;

    // 如果有startPoint,擦除绘制直线
    context.clearDraw();

    // 绘制历史数据
    context.drawHistoryData();

    // 绘制stack数据
    this.drawStack();

    // drawLine
    this.drawLine(
      startPoint,
      BaseUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      }),
    );

    e.stopPropagation();
  }

  /**
   * onCanvasDbClick - 结束绘制
   */
  protected onCanvasDbClick(e): void {
    if (!this.isMove) return;

    this.end();

    e.stopPropagation();
  }

  /**
   * getSelectType
   * @return SelectType
   */
  getSelectType(): SelectType {
    return SelectType.Polygon;
  }

  /**
   * start - 开始
   * @param style
   */
  start(style: IStyle): void {
    const { context, status } = this;

    if (!context || [ActionStatus.Running, ActionStatus.Destroy].includes(status)) return;

    if (!context) return;

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
    canvasEl?.addEventListener('mouseup', this.getCanvasClick());

    // 修改状态
    this.status = ActionStatus.Running;
  }

  /**
   * end - 结束
   */
  end(): void | string {
    // 结束
    const { context } = this;

    if (!context) {
      super.end();
      return;
    }

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) {
      super.end();
      return;
    }

    canvasEl?.removeEventListener('mouseup', this.getCanvasClick());
    canvasEl?.removeEventListener('mousemove', this.getCanvasMousemove());
    canvasEl?.removeEventListener('dblclick', this.getCanvasDbClick());

    context.clearDraw();

    context.drawHistoryData();

    this.fill();

    this.status = ActionStatus.End;

    const id = BaseUtil.uuid();

    const data: IPolygonData = {
      id,
      type: this.getSelectType() as SelectType.Polygon,
      data: PolygonDrawAction.transformRealToOrigin(context, this.pointStack),
      style: this.style,
    };

    this.startPoint = null;

    this.pointStack = [];

    this.isMove = false;

    context.addHistoryData(data);

    this.trigger(ActionEvents.End, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
      data,
    });

    super.end();

    return id;
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

    canvasEl?.removeEventListener('mouseup', this.onCanvasClick);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl?.removeEventListener('dblclick', this.onCanvasDbClick);

    this.startPoint = null;

    this.pointStack = [];

    this.isMove = false;

    this.status = ActionStatus.Destroy;

    this.trigger(ActionEvents.Destroy, {
      selectType: this.getSelectType(),
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default PolygonDrawAction;
