import MathUtil from '@baifendian/adhere-util';
import { Events } from '@baifendian/adhere-util-emitter';

import Cropping from './cropping';
import CircleDrawAction from './draw/CircleDrawAction';
import DiamondDrawAction from './draw/DiamondDrawAction';
import FreeDrawAction from './draw/FreeDrawAction';
import PolygonDrawAction from './draw/PolygonDrawAction';
import RectangleDrawAction from './draw/RectangleDrawAction';
import StartDrawAction from './draw/StartDrawAction';
import TriangleDrawAction from './draw/TriangleDrawAction';
import {
  ActionStatus,
  IAction,
  IActionData,
  IListeners,
  IPolygonSelection,
  IStyle,
  PolygonSelectionActions,
  SelectType,
} from './types';

const selectorPrefix = 'adhere-ui-polygon-selection';

/**
 * 多边形选择主组件
 * @class PolygonSelection
 * @classdesc 提供多边形选择功能的核心组件，支持多种几何图形的绘制、修改和移动
 * @extends {Events}
 * @implements {IPolygonSelection}
 */
class PolygonSelection extends Events implements IPolygonSelection {
  /** 裁剪组件 */
  static Cropping = Cropping;

  /** 父容器元素 */
  protected el: HTMLElement | null = null;

  /** 事件监听器映射 */
  protected listeners: IListeners | null | undefined = null;

  /** 当前活动的Action */
  protected curAction: IAction | null = null;

  /** 主Canvas元素 */
  protected canvasEl: HTMLCanvasElement | null = null;

  /** 主Canvas渲染上下文 */
  protected ctx: CanvasRenderingContext2D | null = null;

  /** 辅助Canvas元素 */
  protected assistCanvasEl: HTMLCanvasElement | null = null;

  /** 辅助Canvas渲染上下文 */
  protected assistCtx: CanvasRenderingContext2D | null = null;

  /** Canvas上的所有历史数据 */
  protected canvasData: IActionData[] = [];

  /** 选择类型到Action类的映射 */
  protected typeActionMap: Map<SelectType, any> = new Map<SelectType, any>([
    [SelectType.Polygon, PolygonDrawAction],
    [SelectType.Circle, CircleDrawAction],
    [SelectType.Rectangle, RectangleDrawAction],
    [SelectType.Triangle, TriangleDrawAction],
    [SelectType.Diamond, DiamondDrawAction],
    [SelectType.Start, StartDrawAction],
    [SelectType.Free, FreeDrawAction],
  ]);

  /**
   * 构造函数
   * @param el - 父容器元素
   * @param defaultData - 默认的Action数据数组
   * @param listeners - 事件监听器映射
   * @description 初始化多边形选择组件
   */
  constructor(el: HTMLElement, defaultData?: IActionData[], listeners?: IListeners) {
    super();

    this.el = el;
    this.listeners = listeners;
    defaultData && (this.canvasData = defaultData);

    this.onResize = this.onResize.bind(this);

    // 初始化事件监听器
    this.initListeners();

    // 初始化Canvas
    this.initCanvas();

    // 初始化事件处理
    this.initEvents();
  }

  /**
   * 初始化事件监听器
   * @description 注册用户提供的事件监听器
   */
  protected initListeners(): void {
    const { listeners } = this;

    if (!listeners) return;

    const keys = Object.keys(listeners);

    keys.forEach((key) => {
      this.on(key, listeners[key]);
    });
  }

  /**
   * 初始化事件处理
   * @description 绑定Canvas点击事件，处理几何图形的选择和空白区域点击
   */
  protected initEvents(): void {
    if (!this.el) return;

    // 点击了el元素
    this.el.addEventListener('mouseup', (e: MouseEvent) => {
      if (!e) return;

      // 查看point命中了HistoryData中的哪一项
      const historyData = this.getHistoryData();

      const point = MathUtil.clientToCtxPoint({
        event: e,
        rect: (this.el as HTMLDivElement).getBoundingClientRect(),
      });

      let findIndexes: number[] = [];

      for (let i = 0; i < historyData.length; i++) {
        const data = historyData[i];

        const action = this.typeActionMap.get(data.type as SelectType) as any;

        const isIn =
          'booleanPointInData' in action ? action?.booleanPointInData(point, data) : false;

        if (isIn) {
          findIndexes.push(i);
        }
      }

      if (findIndexes.length) {
        this.trigger(
          PolygonSelectionActions.CanvasClickGeometry,
          JSON.parse(JSON.stringify(historyData[findIndexes[findIndexes.length - 1]])),
        );
      } else {
        if (historyData.length) {
          this.trigger(PolygonSelectionActions.CanvasClickEmpty);
        }
      }
    });
  }

  /**
   * 初始化Canvas
   * @description 创建主Canvas和辅助Canvas，并添加到DOM中
   */
  protected initCanvas(): void {
    if (!this.el) return;

    // 创建一个canvas
    this.canvasEl = document.createElement('canvas');
    this.canvasEl.className = selectorPrefix;
    this.ctx = this.canvasEl.getContext('2d');

    // 创建一个assistCanvas
    this.assistCanvasEl = document.createElement('canvas');
    this.assistCanvasEl.className = `${selectorPrefix}-assist`;
    this.assistCtx = this.assistCanvasEl.getContext('2d');

    this.el.appendChild(this.canvasEl);
    this.el.appendChild(this.assistCanvasEl);

    // 触发canvasMount事件
    this.trigger(PolygonSelectionActions.CanvasMount);

    // 适配canvas
    this.adapterCanvas();
  }

  /**
   * 适配Canvas尺寸
   * @description 根据容器尺寸调整Canvas的宽高
   */
  protected adapterCanvas(): void {
    const { canvasEl, assistCanvasEl, el } = this;

    if (!el || !canvasEl || !assistCanvasEl) return;

    canvasEl.width = el.offsetWidth;
    canvasEl.height = el.offsetHeight;

    assistCanvasEl.width = el.offsetWidth;
    assistCanvasEl.height = el.offsetHeight;

    this.clearDraw();
    this.clearAssistDraw();
    this.drawHistoryData();
  }

  /**
   * 窗口大小变化处理
   * @description 当窗口大小变化时重新适配Canvas
   */
  protected onResize(): void {
    this.adapterCanvas();
  }

  /**
   * 获取主Canvas渲染上下文
   * @returns Canvas渲染上下文，如果不存在则返回null
   */
  getCtx(): CanvasRenderingContext2D | null {
    return this.ctx;
  }

  /**
   * 获取主Canvas元素
   * @returns Canvas元素，如果不存在则返回null
   */
  getCanvasEl(): HTMLCanvasElement | null {
    return this.canvasEl;
  }

  /**
   * 获取辅助Canvas元素
   * @returns 辅助Canvas元素，如果不存在则返回null
   */
  getAssistCanvasEl(): HTMLCanvasElement | null {
    return this.assistCanvasEl;
  }

  /**
   * 获取辅助Canvas渲染上下文
   * @returns 辅助Canvas渲染上下文，如果不存在则返回null
   */
  getAssistCtx(): CanvasRenderingContext2D | null {
    return this.assistCtx;
  }

  /**
   * 获取组件宽度
   * @returns 组件宽度值
   */
  getWidth(): number {
    return this.el?.offsetWidth ?? 0;
  }

  /**
   * 获取组件高度
   * @returns 组件高度值
   */
  getHeight(): number {
    return this.el?.offsetHeight ?? 0;
  }

  /**
   * 添加历史数据
   * @param data - 要添加的Action数据
   * @description 向历史数据中添加新的Action数据
   */
  addHistoryData(data: IActionData): void {
    this.canvasData.push(data);
  }

  /**
   * 根据ID移除历史数据
   * @param actionDataId - 要移除的数据ID
   * @returns 被移除的数据数组
   * @description 根据ID从历史数据中移除指定的Action数据
   */
  removeHistoryDataById(actionDataId: string): IActionData[] {
    const index = this.canvasData.findIndex((data) => data.id === actionDataId);
    if (index === -1) return [];

    return this.canvasData.splice(index, 1);
  }

  /**
   * 绘制历史数据
   * @description 将所有历史数据重新绘制到Canvas上
   */
  drawHistoryData(): void {
    this.canvasData.forEach((data: IActionData) => {
      const { ctx } = this;

      if (!ctx || !data) return;

      // 绘制指定类型的路径
      this.typeActionMap.get(data.type as SelectType)?.drawHistoryPath(ctx, data);
    });
  }

  /**
   * 根据ID获取历史数据
   * @param id - 数据ID
   * @returns 对应的Action数据，如果不存在则返回null或undefined
   * @description 根据ID从历史数据中获取指定的Action数据
   */
  getHistoryDataById(id: string): IActionData | null | undefined {
    return this.canvasData.find((data) => data.id === id);
  }

  /**
   * 获取所有历史数据
   * @returns 所有历史数据的数组副本
   * @description 获取所有历史Action数据
   */
  getHistoryData(): IActionData[] {
    return [...this.canvasData];
  }

  /**
   * 设置历史数据
   * @param data - 新的历史数据数组
   * @description 替换所有历史数据
   */
  setHistoryData(data: IActionData[]): void {
    this.canvasData = data;
  }

  /**
   * 切换Action
   * @param action - 新的Action对象
   * @description 切换到新的Action，销毁当前Action并设置新的Action
   */
  changeAction(action: IAction): void {
    // 如果当前和传入一致则跳过
    if (action === this.curAction) return;

    // 只有是未开始才能切换
    if (action.getStatus() !== ActionStatus.UnStart) return;

    if (this.curAction) {
      this.curAction.destroy();
    }

    action?.setContext(this);

    this.curAction = action;
  }

  /**
   * 获取当前Action
   * @returns 当前正在执行的Action，如果没有则返回null
   * @description 获取当前正在执行的Action
   */
  getCurAction(): IAction | null {
    return this.curAction;
  }

  /**
   * 开始多边形选择操作
   * @param style - 样式对象，可选
   * @description 开始当前Action的执行
   */
  start(style?: IStyle): void {
    if (!this.curAction) return;

    this.curAction.start(style);
  }

  /**
   * 结束当前的多边形选择操作
   * @description 结束当前Action的执行
   */
  end(): void {
    if (!this.curAction) return;

    this.curAction.end();
  }

  /**
   * 清除当前Canvas上的绘制内容
   * @description 清除主Canvas上的所有绘制内容
   */
  clearDraw(): void {
    const { ctx } = this;

    if (!ctx) return;

    ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
  }

  /**
   * 清除辅助Canvas上的绘制内容
   * @description 清除辅助Canvas上的所有绘制内容
   */
  clearAssistDraw(): void {
    const { assistCtx } = this;

    if (!assistCtx) return;

    assistCtx.clearRect(0, 0, this.getWidth(), this.getHeight());
  }

  /**
   * 清除所有历史数据
   * @description 清除所有历史Action数据
   */
  clearHistoryData(): void {
    this.canvasData = [];
  }

  /**
   * 清除所有Canvas内容
   * @description 清除所有Canvas上的内容和历史数据
   */
  clearCanvasAll(): void {
    this.clearDraw();
    this.clearAssistDraw();
    this.clearHistoryData();
  }

  /**
   * 设置Canvas层级为前置
   * @param canvasEl - Canvas元素
   * @description 将指定的Canvas设置为前置层级
   */
  setFrontCanvas(canvasEl: HTMLCanvasElement): void {
    canvasEl.style.zIndex = '9999';
  }

  /**
   * 设置Canvas层级为后置
   * @param canvasEl - Canvas元素
   * @description 将指定的Canvas设置为后置层级
   */
  setBackCanvas(canvasEl: HTMLCanvasElement): void {
    canvasEl.style.zIndex = '1';
  }

  /**
   * 销毁多边形选择组件
   * @description 销毁组件并清理所有资源
   */
  destroy(): void {
    typeof window !== 'undefined' && window.removeEventListener('resize', this.onResize);

    if (this.curAction) {
      this.curAction.destroy();
    }

    this.clearCanvasAll();

    if (this.el) {
      this.el.innerHTML = '';
    }
  }
}

export default PolygonSelection;
