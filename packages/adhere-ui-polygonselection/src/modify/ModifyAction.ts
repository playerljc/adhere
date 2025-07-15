import MathUtil from '@baifendian/adhere-util';
import { Events } from '@baifendian/adhere-util-emitter';

import defaultAnchorStyle from '../defaultAnchorStyle';
import defaultMoveGemStyle from '../defaultMoveGemStyle';
import defaultStyle from '../defaultStyle';
import {
  ActionEvents,
  ActionStatus,
  ActionType,
  IActionData,
  IModifyAction,
  IMoveAction,
  IPoint,
  IPolygonSelection,
  IStyle,
  SelectType,
  IEventParams,
} from '../types';

/**
 * 修改Action抽象基类
 * @abstract
 * @class ModifyAction
 * @classdesc 所有修改Action的基类，提供基础的修改和移动功能
 * @implements {IModifyAction}
 * @implements {IMoveAction}
 * @extends {Events}
 * @remark 提供统一的修改和移动操作接口，子类需要实现具体的几何图形修改逻辑
 */
abstract class ModifyAction extends Events implements IModifyAction, IMoveAction {
  /** 上下文对象，提供Canvas操作和事件管理 */
  context: IPolygonSelection | null = null;

  /** 起始点坐标，用于记录修改操作的起始位置 */
  protected startPoint: IPoint | null = null;

  /** 起始点的索引，用于标识当前操作的锚点 */
  protected startIndex: number = -1;

  /** 当前操作的Action数据 */
  protected data: IActionData | null = null;

  /** 当前状态，用于跟踪Action的生命周期 */
  protected status: number = ActionStatus.UnStart;

  /** 内部事件类型常量 */
  protected readonly EmitActions = {
    CONTEXT: 'CONTEXT',
  } as const;

  /** 锚点的半径，用于绘制控制点 */
  protected anchorRadius: number = 5;

  /** 锚点线条宽度，用于绘制控制点边框 */
  protected anchorLineWidth: number = 2;

  /** 移动的起始点坐标 */
  moveStartPoint: IPoint | null = null;
  
  /** 是否可以移动的标志 */
  canMove: boolean = false;
  
  /** 是否已经移动的标志 */
  isMoved: boolean = false;

  /** 绘制样式对象 */
  style: IStyle = { ...defaultStyle };

  /** 修改时控制点的样式对象 */
  anchorStyle: IStyle = { ...defaultAnchorStyle };

  /** 移动几何图形的样式对象 */
  moveGemStyle: IStyle = { ...defaultMoveGemStyle };

  /**
   * 获取锚点样式
   * @returns 锚点样式对象的深拷贝
   * @description 返回当前锚点样式的副本，避免外部修改影响内部状态
   */
  getAnchorStyle(): IStyle {
    return { ...this.anchorStyle };
  }

  /**
   * 获取绘制样式
   * @returns 绘制样式对象的深拷贝
   * @description 返回当前绘制样式的副本，避免外部修改影响内部状态
   */
  getStyle(): IStyle {
    return { ...this.style };
  }

  /**
   * 获取移动几何图形样式
   * @returns 移动几何图形样式对象的深拷贝
   * @description 返回当前移动几何图形样式的副本，避免外部修改影响内部状态
   */
  getMoveGemStyle(): IStyle {
    return { ...this.moveGemStyle };
  }

  /**
   * 设置锚点样式
   * @param style - 部分样式属性，将与默认样式合并
   * @description 更新锚点样式，未提供的属性将使用默认值
   */
  setAnchorStyle(style: Partial<IStyle> | undefined): void {
    this.anchorStyle = { ...defaultAnchorStyle, ...(style ?? {}) };
  }

  /**
   * 设置绘制样式
   * @param style - 部分样式属性，将与默认样式合并
   * @description 更新绘制样式，未提供的属性将使用默认值
   */
  setStyle(style: Partial<IStyle> | undefined): void {
    this.style = { ...defaultStyle, ...(style ?? {}) };
  }

  /**
   * 设置移动几何图形样式
   * @param style - 部分样式属性，将与默认样式合并
   * @description 更新移动几何图形样式，未提供的属性将使用默认值
   */
  setMoveGemStyle(style: Partial<IStyle> | undefined): void {
    this.moveGemStyle = { ...defaultMoveGemStyle, ...(style ?? {}) };
  }

  /**
   * 绘制修改操作
   * @param targetPoint - 目标点坐标
   * @description 抽象方法，子类需要实现具体的修改绘制逻辑
   * @abstract
   */
  protected abstract drawModify(targetPoint: IPoint): void;

  /**
   * 绘制移动操作
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @description 抽象方法，子类需要实现具体的移动绘制逻辑
   * @abstract
   */
  protected abstract drawMove(startPoint: IPoint, targetPoint: IPoint): void;

  /**
   * 绘制锚点
   * @description 抽象方法，子类需要实现具体的锚点绘制逻辑
   * @abstract
   */
  protected abstract drawAnchors(): void;

  /**
   * 获取点是否在锚点内
   * @param targetPoint - 目标点坐标
   * @returns 锚点信息和索引，如果不在任何锚点内则返回null
   * @description 抽象方法，子类需要实现具体的锚点检测逻辑
   * @abstract
   */
  protected abstract getPointInAnchor(targetPoint: IPoint): { point: IPoint; index: number } | null;

  /**
   * 根据索引设置调整大小的光标
   * @param index - 锚点索引
   * @description 抽象方法，子类需要实现具体的光标设置逻辑
   * @abstract
   */
  protected abstract setResizeCursorByIndex(index: number): void;

  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点坐标
   * @returns 是否可以移动到目标点
   * @description 抽象方法，子类需要实现具体的移动判断逻辑
   * @abstract
   */
  abstract isCanMove(targetPoint: IPoint): boolean;

  /**
   * 绘制移动当中的几何图形
   * @description 抽象方法，子类需要实现具体的移动几何图形绘制逻辑
   * @abstract
   */
  abstract drawMoveGeometry(): void;

  /**
   * 绘制移动当中的几何图形
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @returns 移动后的数据，如果无法移动则返回null
   * @description 抽象方法，子类需要实现具体的移动几何图形绘制逻辑
   * @abstract
   */
  abstract drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;

  /**
   * 获取选择类型
   * @returns 选择类型枚举值
   * @description 抽象方法，子类需要返回对应的选择类型
   * @abstract
   */
  protected abstract getSelectType(): SelectType;

  /**
   * 构造函数
   * @param data - Action数据对象
   * @description 初始化修改Action，绑定事件处理方法
   * @protected
   */
  protected constructor(data: IActionData) {
    super();
    this.data = data;

    // 绑定事件处理方法
    this.onContext = this.onContext.bind(this);

    // 修改相关的事件处理
    this.onCanvasMousedown = this.onCanvasMousedown.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasMouseup = this.onCanvasMouseup.bind(this);

    // 是否可以修改的移动事件处理
    this.onCanvasIsModifyMousemove = this.onCanvasIsModifyMousemove.bind(this);

    // 移动相关的事件处理
    this.onMoveMousedown = this.onMoveMousedown.bind(this);
    this.onMoveMousemove = this.onMoveMousemove.bind(this);
    this.onMoveMouseup = this.onMoveMouseup.bind(this);

    // 注册上下文事件监听
    this.on(this.EmitActions.CONTEXT, this.onContext);
  }

  /**
   * 设置锚点圆形样式
   * @description 设置Canvas上下文为锚点圆形绘制样式
   * @protected
   */
  protected setAnchorCircleStyle(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    // 设置锚点圆形样式
    ctx.strokeStyle = this.anchorStyle.strokeStyle;
    ctx.fillStyle = this.anchorStyle.fillStyle;
    ctx.lineWidth = this.anchorStyle.lineWidth;
    ctx.globalAlpha = this.anchorStyle.globalAlpha;
  }

  /**
   * 设置锚点线条样式
   * @description 设置Canvas上下文为锚点线条绘制样式
   * @protected
   */
  protected setAnchorLineStyle(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    // 设置锚点线条样式
    ctx.strokeStyle = this.anchorStyle.strokeStyle;
    ctx.lineWidth = this.anchorStyle.lineWidth;
    ctx.setLineDash(this.anchorStyle.lineDash);
    ctx.lineDashOffset = this.anchorStyle.lineDashOffset;
  }

  /**
   * 上下文事件处理
   * @description 当上下文设置完成时绘制锚点
   * @protected
   */
  protected onContext(): void {
    this.drawAnchors();
  }

  /**
   * Canvas鼠标按下事件处理
   * @param e - 鼠标事件对象
   * @description 检测是否点击了锚点，如果是则开始修改操作
   * @protected
   */
  protected onCanvasMousedown(e: MouseEvent): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();
    if (!canvasEl) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    const point = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    if (!point) return;

    // 判断按下的点是否为锚点
    const findPoint = this.getPointInAnchor(point);
    if (!findPoint) return;

    // 设置起始点为锚点的中心点
    this.startPoint = findPoint.point;
    this.startIndex = findPoint.index;

    // 绑定移动和抬起事件
    canvasEl.addEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.addEventListener('mouseup', this.onCanvasMouseup);
  }

  /**
   * Canvas鼠标移动事件处理
   * @param e - 鼠标事件对象
   * @description 实时修改几何图形
   * @protected
   */
  protected onCanvasMousemove(e: MouseEvent): void {
    e.stopPropagation();

    if (!this.context || !this.startPoint) return;

    const canvasEl = this.context.getCanvasEl();
    if (!canvasEl) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    // 获取目标点坐标
    const targetPoint = e ? MathUtil.clientToCtxPoint({
      event: e as MouseEvent,
      rect: canvasEl.getBoundingClientRect(),
    }) : null;

    if (!targetPoint) return;

    // 执行修改操作
    this.drawModify(targetPoint);

    // 触发修改中事件
    this.trigger(ActionEvents.Modifying, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: this.data,
    } as IEventParams);
  }

  /**
   * Canvas鼠标抬起事件处理
   * @param e - 鼠标事件对象
   * @description 结束修改过程
   * @protected
   */
  protected onCanvasMouseup(e: MouseEvent): void {
    this.end(e);
    e.stopPropagation();
  }

  /**
   * Canvas是否可以修改的鼠标移动事件处理
   * @param e - 鼠标事件对象
   * @description 控制移动到锚点上的时候鼠标指针显示为可以修改的形状
   * @protected
   */
  protected onCanvasIsModifyMousemove(e: MouseEvent): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();
    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    // 如果已经进入了修改模式则不执行其他操作
    if (this.startPoint || this.moveStartPoint) return;

    const point = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    if (!point) return;

    // 判断当前点是否为锚点
    const findPoint = this.getPointInAnchor(point);

    if (findPoint) {
      this.setResizeCursorByIndex(findPoint.index);
    } else {
      canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
    }
  }

  /**
   * 初始化移动相关的事件
   * @description 注册移动相关的事件监听器
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
   * 清除移动相关的事件
   * @description 移除移动相关的事件监听器
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
   * 移动鼠标按下事件处理
   * @param e - 鼠标事件对象，可选
   * @description 开始移动过程
   */
  onMoveMousedown(e?: MouseEvent): void {
    if (!e) return;

    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    if (!this.canMove) return;

    // 将辅助Canvas置顶
    context.setFrontCanvas(assistCanvasEl);

    this.moveStartPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    if (!this.moveStartPoint) return;

    // 触发移动开始前事件
    this.trigger(ActionEvents.MoveBeforeStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Move,
      data: this.data,
    } as IEventParams);

    // 触发移动开始事件
    this.trigger(ActionEvents.MoveStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Move,
      data: this.data,
    } as IEventParams);
  }

  /**
   * 移动鼠标移动事件处理
   * @param e - 鼠标事件对象，可选
   * @description 处理移动过程中的实时更新
   */
  onMoveMousemove(e?: MouseEvent): void {
    if (!e) return;

    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    if (!this.moveStartPoint) return;

    const targetPoint = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    });

    if (!targetPoint) return;

    // 清除辅助Canvas
    context.clearAssistDraw();

    // 绘制移动中的几何图形
    this.drawMoveGeometry(this.moveStartPoint, targetPoint);

    // 触发移动中事件
    this.trigger(ActionEvents.Moving, {
      selectType: this.getSelectType(),
      actionType: ActionType.Move,
      data: this.data,
    } as IEventParams);
  }

  /**
   * 移动鼠标抬起事件处理
   * @param e - 鼠标事件对象，可选
   * @description 结束移动过程
   */
  onMoveMouseup(e?: MouseEvent): void {
    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    const assistCanvasEl = context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    if (!this.moveStartPoint) return;

    const targetPoint = e ? MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl.getBoundingClientRect(),
    }) : null;

    if (!targetPoint) return;

    // 清除辅助Canvas
    context.clearAssistDraw();

    // 执行移动操作
    this.drawMove(this.moveStartPoint, targetPoint);

    // 重置移动状态
    this.moveStartPoint = null;
    this.isMoved = true;

    // 触发移动结束事件
    this.trigger(ActionEvents.MoveEnd, {
      selectType: this.getSelectType(),
      actionType: ActionType.Move,
      data: this.data,
    } as IEventParams);
  }

  /**
   * 开始Action
   * @description 开始执行修改Action，绑定相关事件监听器
   */
  start(): void {
    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    if (!canvasEl) return;

    // 设置状态为运行中
    this.status = ActionStatus.Running;

    // 绑定修改相关事件
    canvasEl.addEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.addEventListener('mousemove', this.onCanvasIsModifyMousemove);

    // 初始化移动事件
    this.initMoveEvents();

    // 触发修改开始前事件
    this.trigger(ActionEvents.ModifyBeforeStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: this.data,
    } as IEventParams);

    // 触发修改开始事件
    this.trigger(ActionEvents.ModifyStart, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: this.data,
    } as IEventParams);
  }

  /**
   * 结束Action
   * @param e - 鼠标事件对象，可选
   * @description 结束执行修改Action，清理事件监听器
   */
  end(e?: MouseEvent): void {
    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    if (!canvasEl) return;

    // 移除修改相关事件监听器
    canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
    canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);

    // 清除移动事件
    this.clearMoveEvents();

    // 重置状态
    this.startPoint = null;
    this.startIndex = -1;

    // 设置状态为结束
    this.status = ActionStatus.End;

    // 触发修改结束事件
    this.trigger(ActionEvents.ModifyEnd, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: this.data,
    } as IEventParams);
  }

  /**
   * 销毁Action
   * @description 销毁Action并清理所有资源
   */
  destroy(): void {
    const { context } = this;
    if (!context) return;

    const canvasEl = context.getCanvasEl();
    if (!canvasEl) return;

    // 移除所有事件监听器
    canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
    canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
    canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
    canvasEl.removeEventListener('mousedown', this.onMoveMousedown);
    canvasEl.removeEventListener('mousemove', this.onMoveMousemove);
    canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);

    // 清除移动事件
    this.clearMoveEvents();

    // 重置所有状态
    this.context = null;
    this.startPoint = null;
    this.startIndex = -1;
    this.data = null;
    this.moveStartPoint = null;
    this.canMove = false;
    this.isMoved = false;

    // 设置状态为销毁
    this.status = ActionStatus.Destroy;

    // 触发销毁事件
    this.trigger(ActionEvents.Destroy, {
      selectType: this.getSelectType(),
      actionType: ActionType.Modify,
      data: this.data || undefined,
    } as IEventParams);
  }

  /**
   * 设置上下文对象
   * @param context - 多边形选择上下文对象
   * @description 设置Action的上下文环境并触发上下文事件
   */
  setContext(context: IPolygonSelection): void {
    this.context = context;
    this.trigger(this.EmitActions.CONTEXT);
  }

  /**
   * 获取当前状态
   * @returns 当前状态值
   * @description 获取Action的当前生命周期状态
   */
  getStatus(): number {
    return this.status;
  }
}

export default ModifyAction;
