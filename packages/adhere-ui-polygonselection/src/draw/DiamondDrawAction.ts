import BaseUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import Util from '../Util';
import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IDiamondData,
  IPoint,
  IStyle,
  SelectType,
} from '../types';
import DrawAction from './DrawAction';

/**
 * 菱形绘制Action类
 * @class DiamondDrawAction
 * @classdesc 菱形选取绘制功能，支持绘制菱形几何图形
 * @extends {DrawAction}
 * @remark 一个start - end的周期中只能绘制一个菱形
 */
class DiamondDrawAction extends DrawAction {
  /** 起始点 */
  protected startPoint: IPoint | null = null;

  /** 左上角坐标 */
  protected leftTopPoint: IPoint | null = null;

  /** 宽度 */
  protected width: number = 0;

  /** 高度 */
  protected height: number = 0;

  /** 是否移动过 */
  protected isMove = false;

  /**
   * 构造函数
   * @description 初始化菱形绘制Action，绑定事件处理方法
   */
  constructor() {
    super();
    this.onCanvasMouseDown = this.onCanvasMouseDown.bind(this);
    this.onCanvasMouseMove = this.onCanvasMouseMove.bind(this);
    this.onCanvasMouseUp = this.onCanvasMouseUp.bind(this);
  }

  /**
   * 判断点是否在菱形数据内
   * @param point - 待判断的点
   * @param data - 菱形数据
   * @returns 点是否在菱形内
   * @description 使用turf库判断点是否在菱形多边形内
   */
  static booleanPointInData(point: IPoint, data: IDiamondData): boolean {
    const { leftTopPoint, width, height } = data.data;

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
   * 绘制菱形
   * @param e - 鼠标事件
   * @description 根据鼠标位置绘制菱形
   */
  private draw(e: MouseEvent): void {
    const { context, startPoint, style } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx) return;

    const canvasEl = context?.getCanvasEl();

    if (!canvasEl) return;

    const targetPoint: IPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    context?.clearDraw();

    context?.drawHistoryData();

    ctx.beginPath();

    if (!startPoint) return;

    const leftTopPoint = Util.getRectLeftTopPoint({ startPoint, targetPoint });

    if (!leftTopPoint) return;

    this.leftTopPoint = leftTopPoint;

    this.width = Math.abs(targetPoint.x - (startPoint?.x || 0));
    this.height = Math.abs(targetPoint.y - (startPoint?.y || 0));

    const widthHalf = this.width / 2;
    const heightHalf = this.height / 2;

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    style.lineDash && ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;
    ctx.globalAlpha = style.globalAlpha;

    // 顺时针方向绘制
    ctx.moveTo(this.leftTopPoint.x, this.leftTopPoint.y + heightHalf);
    ctx.lineTo(this.leftTopPoint.x + widthHalf, this.leftTopPoint.y);
    ctx.lineTo(this.leftTopPoint.x + this.width, this.leftTopPoint.y + heightHalf);
    ctx.lineTo(this.leftTopPoint.x + widthHalf, this.leftTopPoint.y + this.height);

    ctx.closePath();

    ctx.stroke();
    ctx.fill();
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

    this.startPoint = BaseUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    canvasEl?.addEventListener('mousemove', this.onCanvasMouseMove);
    canvasEl?.addEventListener('mouseup', this.onCanvasMouseUp);
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件
   * @description 实时绘制菱形并触发绘制中事件
   */
  private onCanvasMouseMove(e: MouseEvent): void {
    const { context } = this;

    if (!context) return;

    this.isMove = true;

    this.draw(e);

    this.trigger(ActionEvents.Drawing, {
      selectType: SelectType.Diamond,
      actionType: ActionType.Draw,
      data: {
        id: BaseUtil.uuid(),
        type: SelectType.Diamond,
        data: {
          leftTopPoint: this.leftTopPoint!,
          width: this.width,
          height: this.height,
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
   * 绘制菱形
   * @param ctx - Canvas上下文
   * @param data - 菱形数据
   * @description 静态方法，用于绘制历史数据
   */
  static draw(ctx: CanvasRenderingContext2D, data: IDiamondData): void {
    if (!ctx || !data) return;

    this.drawHistoryPath(ctx, data);
  }

  /**
   * 绘制历史路径
   * @param ctx - Canvas上下文
   * @param data - 菱形数据
   * @description 绘制历史菱形数据
   */
  static drawHistoryPath(
    ctx: CanvasRenderingContext2D,
    data: IDiamondData,
  ): void {
    if (!data || !data.data.leftTopPoint) return;

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

    const widthHalf = data.data.width / 2;
    const heightHalf = data.data.height / 2;

    // 顺时针方向绘制
    ctx.moveTo(data.data.leftTopPoint.x, data.data.leftTopPoint.y + heightHalf);
    ctx.lineTo(data.data.leftTopPoint.x + widthHalf, data.data.leftTopPoint.y);
    ctx.lineTo(data.data.leftTopPoint.x + data.data.width, data.data.leftTopPoint.y + heightHalf);
    ctx.lineTo(data.data.leftTopPoint.x + widthHalf, data.data.leftTopPoint.y + data.data.height);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 开始绘制
   * @param style - 样式对象
   * @description 开始菱形绘制Action
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
      selectType: SelectType.Diamond,
      actionType: ActionType.Draw,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMouseDown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.DrawStart, {
      selectType: SelectType.Diamond,
      actionType: ActionType.Draw,
    });
  }

  /**
   * 结束绘制
   * @param e - 鼠标事件
   * @description 结束菱形绘制Action，保存数据
   */
  end(e?: MouseEvent): void {
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

    this.trigger(ActionEvents.DrawEnd, {
      selectType: SelectType.Diamond,
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
