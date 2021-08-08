// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';
import Emitter from '@baifendian/adhere-util-emitter/lib/events';

import {
  ActionStatus,
  IModifyAction,
  IMoveAction,
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
abstract class ModifyAction extends Emitter implements IModifyAction, IMoveAction {
  // 上下文对象
  context: IPolygonSelection | null = null;

  // 起始点
  protected startPoint: IPoint | null = null;

  // 起始点的索引
  protected startIndex: number = -1;

  // 数据
  protected data: IActionData | null = null;

  // 当前状态
  protected status: number = ActionStatus.UnStart;

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

  // 移动的以第一个点
  moveStartPoint: IPoint | null = null;
  // 是否可以移动
  canMove: boolean = false;
  // 是都已经移动
  isMoved: boolean = false;

  /**
   * drawModify
   * @param targetPoint
   */
  protected abstract drawModify(targetPoint: IPoint): void;

  /**
   * drawMove
   * @param startPoint
   * @param targetPoint
   */
  protected abstract drawMove(startPoint: IPoint, targetPoint: IPoint): void;

  /**
   * drawAnchors
   */
  protected abstract drawAnchors(): void;

  /**
   * getPointInAnchor
   * @param targetPoint
   */
  protected abstract getPointInAnchor(targetPoint: IPoint): { point: IPoint; index: number } | null;

  // 通过targetPoint的index设置resize的cursor
  protected abstract setResizeCursorByIndex(index: number): void;

  /**
   * isCanMove
   * @description 是否可以移动
   * @param targetPoint
   */
  abstract isCanMove(targetPoint: IPoint): boolean;

  /**
   * drawMoveGeometry
   * @description 绘制移动当中的几何图形
   */
  abstract drawMoveGeometry(): void;

  /**
   * drawMoveGeometry
   * @description 绘制移动当中的几何图形
   */
  abstract drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): void;

  /**
   * getSelectType
   */
  protected abstract getSelectType(): SelectType;

  /**
   * constructor
   * @param data
   */
  protected constructor(data: IActionData) {
    super();
    this.data = data;

    this.onContext = this.onContext.bind(this);
    this.onCanvasMousedown = this.onCanvasMousedown.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasMouseup = this.onCanvasMouseup.bind(this);
    this.onCanvasIsModifyMousemove = this.onCanvasIsModifyMousemove.bind(this);

    // move的相关事件
    this.onMoveMousedown = this.onMoveMousedown.bind(this);
    this.onMoveMousemove = this.onMoveMousemove.bind(this);
    this.onMoveMouseup = this.onMoveMouseup.bind(this);

    this.on(this.EmitActions.CONTEXT, this.onContext);
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

    if (!findPoint) return;

    // this.startPoint需要赋值为anchor圆形的中心点
    this.startPoint = findPoint.point;
    this.startIndex = findPoint.index;

    canvasEl.addEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.addEventListener('mouseup', this.onCanvasMouseup);
  }

  /**
   * onCanvasMousemove
   * @param e
   */
  protected onCanvasMousemove(e) {
    console.log('onCanvasMousemove');
    e.stopPropagation();

    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    if (!this.startPoint) return;

    // target点
    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    this.drawModify(targetPoint);
  }

  /**
   * onCanvasMouseup
   * @param e
   */
  protected onCanvasMouseup(e) {
    this.end(e);
  }

  /**
   * onCanvasIsModifyMousemove
   * @description 这个事件主要是用来控制移动到anchor点上的时候鼠标指针显示为可以修改的形状
   * ew-resize
     ns-resize
     nesw-resize
     nwse-resize
   * @param e
   */
  protected onCanvasIsModifyMousemove(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    // 如果已经进入了修改模式则不执行其他操作
    if (this.startPoint || this.moveStartPoint) return;

    console.log('modify-mousemove');

    const point = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    // 判断按下的startPoint是否为anchor点
    // 用isPointInPath判断只能判断出point在路径中，但是不能获取anchor的中心点
    // 需要判断point在那个anchor里才可以，这样可以获取命中的圆形中心点
    const findPoint = this.getPointInAnchor(point);

    if (findPoint) {
      this.setResizeCursorByIndex(findPoint.index);
    } else {
      canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
    }
  }

  /**
   * initMoveEvents
   * @description 注册移动相关的事件
   */
  initMoveEvents(): void {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.addEventListener('mousedown', this.onMoveMousedown);
    canvasEl.addEventListener('mousemove', this.onMoveMousemove);
    assistCanvasEl.addEventListener('mousemove', this.onMoveMousemove);
    assistCanvasEl.addEventListener('mouseup', this.onMoveMouseup);
  }

  /**
   * clearMoveEvents
   * @description - 清除移动相关的事件
   */
  clearMoveEvents(): void {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.removeEventListener('mousedown', this.onMoveMousedown);
    canvasEl.removeEventListener('mousemove', this.onMoveMousemove);
    assistCanvasEl.removeEventListener('mousemove', this.onMoveMousemove);
    assistCanvasEl.removeEventListener('mouseup', this.onMoveMouseup);
  }

  /**
   * onMoveMouseup
   * @description
   * @param e
   */
  onMoveMousedown(e?: MouseEvent) {
    if (!e) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    if (!this.canMove) return;

    console.log('onMoveMousedown', this.canMove);

    // assistCanvas置顶
    context.setFrontCanvas(assistCanvasEl);

    this.moveStartPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    // TODO: 绘制一个移动的图形
    this.drawMoveGeometry();
  }

  /**
   * onMoveMousedown
   * @description
   * @param e
   */
  onMoveMousemove(e?: MouseEvent) {
    if (!e) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    // 开始移动了
    if (this.moveStartPoint) {
      // console.log('onMoveMousemove', this.moveStartPoint);
      this.isMoved = true;
      // TODO: 移动移动的图形
      context.clearAssistDraw();
      this.drawMoveGeometry(this.moveStartPoint, targetPoint);
      return;
    }

    // 查看是否可以移动从而改变光标的样式，查看targetPoint是否在Anchors的多边形区域中，不包括anchor的控制点
    this.canMove = this.isCanMove(targetPoint);

    const curCursor = assistCanvasEl.style.cursor;
    canvasEl.style.cursor = assistCanvasEl.style.cursor = this.canMove ? 'move' : curCursor;
  }

  /**
   * onMoveMousemove
   * @description
   * @param e
   */
  onMoveMouseup(e?: MouseEvent) {
    if (!e) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    if (!this.canMove || !this.isMoved || !this.moveStartPoint) {
      // assistCanvas置部
      context.setBackCanvas(assistCanvasEl);
      this.canMove = false;
      this.isMoved = false;
      this.moveStartPoint = null;
      return;
    }

    console.log('onMoveMouseup');

    // assistCanvas置部
    context.setBackCanvas(assistCanvasEl);

    // TODO: 移动真正的图形，擦除移动的图形
    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    context.clearAssistDraw();

    this.drawMove(this.moveStartPoint, targetPoint);

    this.canMove = false;
    this.isMoved = false;
    this.moveStartPoint = null;
  }

  /**
   * start
   */

  start(): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';

    // 触发开始之前事件
    this.trigger(ActionEvents.BeforeStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });

    // 注册事件按下事件
    canvasEl.addEventListener('mousedown', this.onCanvasMousedown);
    // 注册监控是否可以修改的移动事件
    canvasEl.addEventListener('mousemove', this.onCanvasIsModifyMousemove);

    this.initMoveEvents();

    // 修改状态
    this.status = ActionStatus.Running;

    // 触发开始事件
    this.trigger(ActionEvents.Start, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });
  }

  /**
   * end
   * @param e
   */
  end(e?: MouseEvent): void {
    if (!e) return;

    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';

    canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
    canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
    this.clearMoveEvents();

    const targetPoint: IPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    this.drawModify(targetPoint);

    this.status = ActionStatus.End;

    this.startPoint = null;

    this.trigger(ActionEvents.End, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: targetPoint,
    });

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
  }

  /**
   * destroy
   */
  destroy(): void {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';

    this.remove(this.EmitActions.CONTEXT, this.onContext);
    canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
    canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
    this.clearMoveEvents();

    context.clearDraw();

    context.drawHistoryData();

    this.status = ActionStatus.Destroy;

    this.startPoint = null;

    this.trigger(ActionEvents.Destroy, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
    });

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
  }

  /**
   * setContext
   * @param context
   */
  setContext(context: IPolygonSelection) {
    this.context = context;

    this.trigger(this.EmitActions.CONTEXT);
  }

  /**
   * getStatus - 获取状态
   */
  getStatus(): number {
    return this.status;
  }
}

export default ModifyAction;
