// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math.js';
// @ts-ignore
import BaseUtil from '@baifendian/adhere-util/lib/base';

import {
  ActionEvents,
  ActionStatus,
  IPolygonData,
  IPoint,
  IStyle,
  SelectType,
  ActionType,
} from '../types';
import DrawAction from './drawAction';

/**
 * PolygonAction
 * @class PolygonAction
 * @classdesc  - 多边形选取
 * @remark: 一个start - end的周期中只能绘制一个多边形
 */
class PolygonDrawAction extends DrawAction {
  // 开始点
  private startPoint: IPoint | null = null;

  // 点的集合
  private pointStack: IPoint[] = [];

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
   * onCanvasClick
   * @param e
   */
  private onCanvasClick(e): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    // 第一次
    if (!this.startPoint) {
      canvasEl?.addEventListener('mousemove', this.onCanvasMousemove);
      canvasEl?.addEventListener('dblclick', this.onCanvasDbClick);

      this.startPoint = MathUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      if (!this.startPoint) return;

      this.pointStack.push(this.startPoint);

      // 触发开始事件
      this.emit.trigger(ActionEvents.Start, {
        selectType: SelectType.Polygon,
        actionType: ActionType.Draw,
      });
    } else {
      // 不是第一次
      // 画一条直线
      // 当前点
      const curPoint = MathUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      this.drawLine(this.startPoint, curPoint);

      this.startPoint = curPoint;

      if (this.startPoint) {
        this.pointStack.push(this.startPoint);
      }
    }
  }

  /**
   * onCanvasMousemove
   * @param e
   */
  private onCanvasMousemove(e): void {
    if (!this.context) return;
    if (!this.startPoint) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    // 如果有startPoint,擦除绘制直线
    this.context.clear();

    // 绘制历史数据
    this.context.drawHistoryData();

    // 绘制stack数据
    this.drawStack();

    // drawLine
    this.drawLine(
      this.startPoint,
      MathUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      }),
    );
  }

  /**
   * onCanvasDbClick - 结束绘制
   */
  private onCanvasDbClick(): void {
    this.end();
  }

  /**
   * drawStack
   */
  private drawStack(): void {
    const { pointStack } = this;

    if (pointStack.length <= 1) return;

    let index = 0;

    do {
      this.drawLine(pointStack[index], pointStack[index + 1]);

      index++;
    } while (index !== pointStack.length - 1);
  }

  /**
   * fill
   */
  private fill(): void {
    if (!this.context) return;

    const { pointStack } = this;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    if (pointStack.length <= 1) return;

    ctx?.beginPath();

    for (let i = 0; i < pointStack.length; i++) {
      const point = pointStack[i];

      if (i === 0) {
        ctx?.moveTo(point.x, point.y);
      } else {
        ctx?.lineTo(point.x, point.y);
      }
    }

    ctx?.closePath();

    ctx.fillStyle = this.style.fillStyle;

    ctx.fill();
  }

  /**
   * drawLine
   * @param sP
   * @param eP
   */
  private drawLine(sP: IPoint, eP: IPoint): void {
    if (!this.context) return;

    const { style } = this;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    ctx.beginPath();

    ctx.moveTo(sP.x, sP.y);

    ctx.lineTo(eP.x, eP.y);

    ctx.lineWidth = style.lineWidth;

    ctx.lineCap = style.lineCap;

    ctx.lineJoin = style.lineJoin;

    ctx.lineDashOffset = style.lineDashOffset;

    ctx.setLineDash(style.lineDash);

    ctx.stroke();
  }

  /**
   * addHistoryPath - 绘制历史数据
   * @param ctx
   * @param data
   */
  static addHistoryPath(ctx: CanvasRenderingContext2D, data: IPoint[] = []): void {
    ctx.beginPath();

    (data || []).forEach((point: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.closePath();
  }

  /**
   * start - 开始
   * @param style
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    style && (this.style = style);

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    // 触发开始之前事件
    this.emit.trigger(ActionEvents.BeforeStart, {
      selectType: SelectType.Polygon,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('click', this.onCanvasClick);

    // 修改状态
    this.status = ActionStatus.Running;
  }

  /**
   * end - 结束
   */
  end(): void {
    // 结束
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl?.removeEventListener('click', this.onCanvasClick);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl?.removeEventListener('dblclick', this.onCanvasDbClick);

    context.clear();

    context.drawHistoryData();

    this.fill();

    this.startPoint = null;

    this.pointStack = [];

    this.status = ActionStatus.End;

    const data: IPolygonData = {
      id: BaseUtil.uuid(),
      type: SelectType.Polygon,
      data: [...this.pointStack],
      style: this.style,
    };

    context.addHistoryData(data);

    this.emit.trigger(ActionEvents.End, {
      selectType: SelectType.Polygon,
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

    canvasEl?.removeEventListener('click', this.onCanvasClick);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl?.removeEventListener('dblclick', this.onCanvasDbClick);

    this.startPoint = null;

    this.pointStack = [];

    this.status = ActionStatus.Destroy;

    this.emit.trigger(ActionEvents.Destroy, {
      selectType: SelectType.Polygon,
      actionType: ActionType.Draw,
    });
  }
}

export default PolygonDrawAction;
