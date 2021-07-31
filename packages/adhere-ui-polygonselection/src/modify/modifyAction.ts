// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
import Emitter from '@baifendian/adhere-util-emitter';

import {
  ActionStatus,
  IModifyAction,
  IActionData,
  IPolygonSelection,
  IPoint,
  ActionEvents,
  SelectType,
  ActionType,
} from '../types';

/**
 * ModifyAction
 * @class ModifyAction
 * @classdesc ModifyAction
 */
abstract class ModifyAction implements IModifyAction {
  // 起始点
  protected startPoint: IPoint | null = null;

  // 上下文对象
  protected context: IPolygonSelection | null = null;

  // 数据
  protected data: IActionData | null = null;

  // 当前状态
  protected status: number = ActionStatus.UnStart;

  // 通知对象
  protected emit = Emitter;

  // EmitActions
  protected EmitActions = {
    CONTEXT: 'CONTEXT',
  };

  // anchor的半径
  protected anchorRadius = 5;

  // anchorWidth
  protected anchorLineWidth = 2;

  // anchorStrokeStyle
  protected anchorStrokeStyle = 'blue';

  // anchorFillStyle
  protected anchorFillStyle = 'rgba(0,0,0,.1)';

  /**
   * draw
   * @param targetPoint
   */
  protected abstract draw(targetPoint: IPoint): void;

  /**
   * drawAnchors
   */
  protected abstract drawAnchors(): void;

  /**
   * getPointInAnchor
   * @param targetPoint
   */
  protected abstract getPointInAnchor(
    targetPoint: IPoint,
  ): IPoint | null | { point: IPoint; index: number };

  /**
   * getSelectType
   */
  protected abstract getSelectType(): SelectType;

  /**
   * constructor
   * @param data
   */
  protected constructor(data: IActionData) {
    this.data = data;

    this.onContext = this.onContext.bind(this);
    this.onCanvasMousedown = this.onCanvasMousedown.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasMouseup = this.onCanvasMouseup.bind(this);

    this.emit.on(this.EmitActions.CONTEXT, this.onContext);
  }

  /**
   * setAnchorStyle
   */
  protected setAnchorStyle(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    // anchor上下文
    ctx.strokeStyle = this.anchorStrokeStyle;
    ctx.fillStyle = this.anchorFillStyle;
    ctx.lineWidth = this.anchorLineWidth;
  }

  /**
   * onContext
   */
  protected onContext(): void {
    this.drawAnchors();
  }

  /**
   * onCanvasMousedown
   * @param e
   */
  protected onCanvasMousedown(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const point = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    // 判断按下的startPoint是否为anchor点
    // 用isPointInPath判断只能判断出point在路径中，但是不能获取anchor的中心点
    // 需要判断point在那个anchor里才可以，这样可以获取命中的圆形中心点
    const findPoint = this.getPointInAnchor(point);

    if (findPoint) {
      // this.startPoint需要赋值为anchor圆形的中心点
      this.startPoint = findPoint as IPoint;
      canvasEl?.addEventListener('mousemove', this.onCanvasMousemove);
      canvasEl?.addEventListener('mouseup', this.onCanvasMouseup);
    }
  }

  /**
   * onCanvasMousemove
   * @param e
   */
  protected onCanvasMousemove(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    if (!this.startPoint) return;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    this.draw(targetPoint);
  }

  /**
   * onCanvasMouseup
   * @param e
   */
  protected onCanvasMouseup(e) {
    this.end(e);
  }

  /**
   * start
   */
  start(): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    // 触发开始之前事件
    this.emit.trigger(ActionEvents.BeforeStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });

    // 注册事件
    canvasEl?.addEventListener('mousedown', this.onCanvasMousedown);

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.emit.trigger(ActionEvents.Start, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });
  }

  /**
   * end
   * @param e
   */
  end(e?: MouseEvent): void {
    if(!e) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    this.draw(targetPoint);

    this.status = ActionStatus.End;

    this.startPoint = null;

    this.emit.trigger(ActionEvents.End, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: targetPoint,
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

    this.emit.remove(this.EmitActions.CONTEXT, this.onContext);
    canvasEl?.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl?.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl?.removeEventListener('mouseup', this.onCanvasMouseup);

    context.clear();

    context.drawHistoryData();

    this.status = ActionStatus.Destroy;

    this.startPoint = null;

    this.emit.trigger(ActionEvents.Destroy, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });
  }

  /**
   * setContext
   * @param context
   */
  setContext(context: IPolygonSelection) {
    this.context = context;

    this.emit.trigger(this.EmitActions.CONTEXT);
  }

  /**
   * getStatus - 获取状态
   */
  getStatus(): number {
    return this.status;
  }
}

export default ModifyAction;
