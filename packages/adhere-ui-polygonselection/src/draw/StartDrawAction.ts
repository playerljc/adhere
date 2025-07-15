import BaseUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IPoint,
  IStartData,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './DrawAction';

/**
 * 星形绘制Action类
 * @class StartDrawAction
 * @classdesc 五角星选取绘制功能，支持绘制五角星几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个五角星
 */
class StartDrawAction extends DrawAction {
  /** 中心点 */
  protected centerPoint: IPoint | null = null;

  /** 外圆半径 */
  protected outRadius: number = 0;

  /** 内圆半径 */
  protected innerRadius: number = 0;

  /** 是否移动过 */
  protected isMove = false;

  /**
   * 构造函数
   * @description 初始化星形绘制Action，绑定事件处理方法
   */
  constructor() {
    super();
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * 判断点是否在星形数据内
   * @param point - 待判断的点
   * @param data - 星形数据
   * @returns 点是否在星形内
   * @description 使用turf库判断点是否在星形多边形内
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
   * 绘制星形
   * @param ctx - Canvas上下文
   * @param data - 星形数据
   * @description 静态方法，用于绘制星形
   */
  static drawStart({ ctx, data }: { ctx: CanvasRenderingContext2D; data: IStartData }): void {
    if (!data || !ctx) return;

    const {
      data: { center, outRadius, innerRadius },
      style,
    } = data;

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

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    for (let i = 0; i < startCount; i++) {
      if (style) {
        ctx.lineWidth = style.lineWidth;
        ctx.lineJoin = style.lineJoin;
        ctx.lineCap = style.lineCap;
        style.lineDash && ctx.setLineDash(style.lineDash);
        ctx.lineDashOffset = style.lineDashOffset;
        ctx.strokeStyle = style.strokeStyle;
        ctx.fillStyle = style.fillStyle;
        ctx.globalAlpha = style.globalAlpha;
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

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 绘制星形
   * @param e - 鼠标事件
   * @description 根据鼠标位置绘制星形
   */
  private draw(e: MouseEvent): void {
    const { context, centerPoint } = this;

    const ctx = context?.getCtx();

    if (!context || !centerPoint || !ctx) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl || !this.centerPoint) return;

    const targetPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context.clearDraw();

    context.drawHistoryData();

    this.outRadius = BaseUtil.getDistanceByBetweenPoint({ p1: centerPoint, p2: targetPoint });

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
   * Canvas鼠标按下事件处理
   * @param e - 鼠标事件
   * @description 记录起始点并注册移动和抬起事件
   */
  private onCanvasMouseDown(e: MouseEvent): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    this.centerPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件
   * @description 实时绘制星形并触发绘制中事件
   */
  private onCanvasMouseMove(e: MouseEvent): void {
    const { context } = this;

    if (!context) return;

    this.isMove = true;

    this.draw(e);

    this.trigger(ActionEvents.Drawing, {
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
      data: {
        id: BaseUtil.uuid(),
        type: SelectType.Start,
        data: {
          center: this.centerPoint!,
          outRadius: this.outRadius,
          innerRadius: this.innerRadius,
        },
        style: this.style,
      },
    });
  }

  /**
   * Canvas鼠标抬起事件处理
   * @param e - 鼠标事件
   * @description 结束绘制过程
   */
  private onCanvasMouseUp(e: MouseEvent): void {
    if (!this.isMove) return;
    this.end(e);
    e.stopPropagation();
  }

  /**
   * 绘制星形
   * @param ctx - Canvas上下文
   * @param data - 星形数据
   * @description 静态方法，用于绘制历史数据
   */
  static draw(ctx: CanvasRenderingContext2D, data: IStartData): void {
    if (!ctx || !data) return;

    this.drawHistoryPath(ctx, data);
  }

  /**
   * 绘制历史路径
   * @param ctx - Canvas上下文
   * @param data - 星形数据
   * @description 绘制历史星形数据
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: IStartData,
  ): void {
    if (!data) return;

    StartDrawAction.drawStart({
      ctx,
      data,
    });
  }

  /**
   * 开始绘制
   * @param style - 样式对象
   * @description 开始星形绘制Action
   */
  start(style: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context?.getCanvasEl?.();

    if (!canvasEl) return;

    super.start(style);

    style && (this.style = style);

    // 触发开始之前事件
    this.trigger(ActionEvents.DrawBeforeStart, {
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.DrawStart, {
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
    });
  }

  /**
   * 结束绘制
   * @param e - 鼠标事件
   * @description 结束星形绘制Action，保存数据
   */
  end(e?: MouseEvent): void {
    const { context } = this;

    if (!context) {
      super.end(e);
      return;
    }

    const canvasEl = context?.getCanvasEl?.();

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

    this.trigger(ActionEvents.DrawEnd, {
      selectType: SelectType.Start,
      actionType: ActionType.Draw,
      data,
    });

    super.end(e);
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
