import BaseUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IPolygonData,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './DrawAction';

/**
 * 多边形绘制Action类
 * @class PolygonDrawAction
 * @classdesc 多边形选取绘制功能，支持绘制任意多边形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个多边形
 */
class PolygonDrawAction extends DrawAction {
  /** 开始点 */
  private startPoint: IPoint | null = null;

  /** 点的集合 */
  private pointStack: IPoint[] = [];

  /** 是否移动过 */
  protected isMove = false;

  /**
   * 构造函数
   * @description 初始化多边形绘制Action，绑定事件处理方法
   */
  constructor() {
    super();
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasDbClick = this.onCanvasDbClick.bind(this);
  }

  /**
   * 判断点是否在多边形数据内
   * @param point - 待判断的点
   * @param data - 多边形数据
   * @returns 点是否在多边形内
   * @description 使用turf库判断点是否在多边形内
   */
  static booleanPointInData(point: IPoint, data: IPolygonData): boolean {
    const points = [...data.data];
    points.push(points[0]);

    const pt = turf.point([point.x, point.y]);
    const poly = turf.polygon([points.map((point) => [point.x, point.y])]);

    return turf.booleanPointInPolygon(pt, poly);
  }

  /**
   * Canvas点击事件处理
   * @param e - 鼠标事件
   * @description 处理多边形绘制过程中的点击事件
   */
  private onCanvasClick(e: MouseEvent): void {
    e.stopPropagation();

    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    // 第一次
    if (!this.startPoint) {
      canvasEl?.addEventListener('mousemove', this.onCanvasMousemove);
      canvasEl?.addEventListener('dblclick', this.onCanvasDbClick);

      this.startPoint = BaseUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      if (!this.startPoint) return;

      this.pointStack.push(this.startPoint);

      // 触发开始事件
      this.trigger(ActionEvents.DrawStart, {
        selectType: SelectType.Polygon,
        actionType: ActionType.Draw,
      });
    } else {
      // 不是第一次
      // 画一条直线
      // 当前点
      const curPoint = BaseUtil.clientToCtxPoint({
        event: e,
        rect: canvasEl?.getBoundingClientRect(),
      });

      if (!curPoint) return;

      this.drawLine(this.startPoint, curPoint);

      this.startPoint = curPoint;

      if (this.startPoint) {
        this.pointStack.push(this.startPoint);
      }
    }
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件
   * @description 处理多边形绘制过程中的鼠标移动事件
   */
  private onCanvasMousemove(e: MouseEvent): void {
    if (!this.context) return;
    if (!this.startPoint) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    this.isMove = true;

    // 如果有startPoint,擦除绘制直线
    this.context.clearDraw();

    // 绘制历史数据
    this.context.drawHistoryData();

    // 绘制stack数据
    this.drawStack();

    // drawLine
    const curPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    if (curPoint) {
      this.drawLine(this.startPoint, curPoint);
    }
  }

  /**
   * Canvas双击事件处理 - 结束绘制
   * @param e - 鼠标事件
   * @description 双击结束多边形绘制
   */
  private onCanvasDbClick(e: MouseEvent): void {
    if (!this.isMove) return;
    this.end();
    e.stopPropagation();
  }

  /**
   * 绘制点栈
   * @description 绘制已确定的点之间的连线
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
   * 填充多边形
   * @description 填充已绘制的多边形
   */
  private fill(): void {
    if (!this.context) return;

    const { pointStack } = this;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    if (pointStack.length <= 1) return;

    ctx?.beginPath();

    ctx.lineWidth = this.style.lineWidth;
    ctx.lineJoin = this.style.lineJoin;
    ctx.lineCap = this.style.lineCap;
    this.style.lineDash && ctx.setLineDash(this.style.lineDash);
    ctx.lineDashOffset = this.style.lineDashOffset;
    ctx.strokeStyle = this.style.strokeStyle;
    ctx.fillStyle = this.style.fillStyle;
    ctx.globalAlpha = this.style.globalAlpha;

    for (let i = 0; i < pointStack.length; i++) {
      const point = pointStack[i];

      if (i === 0) {
        ctx?.moveTo(point.x, point.y);
      } else {
        ctx?.lineTo(point.x, point.y);
      }
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 绘制直线
   * @param sP - 起始点
   * @param eP - 结束点
   * @description 绘制两点之间的直线
   */
  private drawLine(sP: IPoint, eP: IPoint): void {
    if (!this.context) return;

    const { style } = this;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    ctx.beginPath();

    ctx.moveTo(sP.x, sP.y);
    ctx.lineTo(eP.x, eP.y);

    ctx.strokeStyle = style.strokeStyle;
    style.lineDash && ctx.setLineDash(style.lineDash);
    ctx.lineWidth = style.lineWidth / 2;
    ctx.lineCap = style.lineCap;
    ctx.lineJoin = style.lineJoin;
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.globalAlpha = 1;

    ctx.closePath();
    ctx.stroke();
  }

  /**
   * 绘制多边形
   * @param ctx - Canvas上下文
   * @param data - 多边形数据
   * @description 静态方法，用于绘制历史数据
   */
  static draw(ctx: CanvasRenderingContext2D, data: IPolygonData): void {
    if (!ctx || !data) return;

    this.drawHistoryPath(ctx, data);
  }

  /**
   * 绘制历史路径
   * @param ctx - Canvas上下文
   * @param data - 多边形数据
   * @description 绘制历史多边形数据
   */
  static drawHistoryPath(ctx: CanvasRenderingContext2D, data: IPolygonData): void {
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

    (data?.data || []).forEach((point: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 开始绘制
   * @param style - 样式对象
   * @description 开始多边形绘制Action
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.DrawBeforeStart, {
      selectType: SelectType.Polygon,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mouseup', this.onCanvasClick);

    // 修改状态
    this.status = ActionStatus.Running;
  }

  /**
   * 结束绘制
   * @description 结束多边形绘制Action，保存数据
   */
  end(): void {
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

    canvasEl?.removeEventListener('mouseup', this.onCanvasClick);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl?.removeEventListener('dblclick', this.onCanvasDbClick);

    context.clearDraw();

    context.drawHistoryData();

    this.fill();

    this.status = ActionStatus.End;

    const data: IPolygonData = {
      id: BaseUtil.uuid(),
      type: SelectType.Polygon,
      data: [...this.pointStack],
      style: this.style,
    };

    this.startPoint = null;

    this.pointStack = [];

    this.isMove = false;

    context.addHistoryData(data);

    this.trigger(ActionEvents.DrawEnd, {
      selectType: SelectType.Polygon,
      actionType: ActionType.Draw,
      data,
    });

    super.end();
  }

  /**
   * 销毁Action
   * @description 清理资源，移除事件监听器
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
      selectType: SelectType.Polygon,
      actionType: ActionType.Draw,
    });

    super.destroy();
  }
}

export default PolygonDrawAction;
