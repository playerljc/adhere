import MathUtil from '@baifendian/adhere-util';
import Emitter from '@baifendian/adhere-util-emitter';

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

const selectorPrefix = 'adhere-ui-polygonselection';

/**
 * PolygonSelection
 * @class
 * @classdesc - PolygonSelection
 */
class PolygonSelection extends Emitter.Events implements IPolygonSelection {
  // 父元素
  protected el: HTMLElement | null = null;

  // 注册的事件对象
  protected listeners: IListeners | null | undefined = null;

  // 当前的Action
  protected curAction: IAction | null = null;

  // 当前的canvas元素
  protected canvasEl: HTMLCanvasElement | null = null;

  // 当前的ctx对象
  protected ctx: CanvasRenderingContext2D | null = null;

  // 辅助的canvas元素
  protected assistCanvasEl: HTMLCanvasElement | null = null;

  // 辅助的ctx对象
  protected assistCtx: CanvasRenderingContext2D | null = null;

  // canvas上的所有数据
  protected canvasData: IActionData[] = [];

  // ActionType
  // @ts-ignore
  protected typeActionMap: Map<SelectType, IAction> = new Map([
    [SelectType.Polygon, PolygonDrawAction],
    [SelectType.Circle, CircleDrawAction],
    [SelectType.Rectangle, RectangleDrawAction],
    [SelectType.Triangle, TriangleDrawAction],
    [SelectType.Diamond, DiamondDrawAction],
    [SelectType.Start, StartDrawAction],
    [SelectType.Free, FreeDrawAction],
  ]);

  /**
   * constructor
   * @param el: HtmlElement - 父元素
   * @param defaultData: IActionData[] - 缺省的ActionData数据
   * @param listeners: IListeners - 缺省的事件注册对象
   */
  constructor(el: HTMLElement, defaultData?: IActionData[], listeners?: IListeners) {
    super();

    this.el = el;

    this.listeners = listeners;

    defaultData && (this.canvasData = defaultData);

    this.onResize = this.onResize.bind(this);

    // 初始化Listeners
    this.initListeners();

    // 初始化Canvas
    this.initCanvas();

    // 初始化Events
    this.initEvents();
  }

  /**
   * initListeners
   * @description 注册用户的listeners
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
   * initEvents
   */
  protected initEvents(): void {
    if (!this.el) return;

    // 点击了el元素
    this.el.addEventListener('mouseup', (e: MouseEvent) => {
      if (!e) return;

      // 查看point命中了HistoryData中的哪一项
      const historyData = this.getHistoryData();

      // if (!historyData || !historyData.length) {
      //   this.trigger(PolygonSelectionActions.CanvasClickEmpty);
      //   return;
      // }

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
   * initCanvas - 初始化Canvas
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

    // window.addEventListener('resize', this.onResize);
  }

  /**
   * adapterCanvas - 适配canvas
   */
  protected adapterCanvas() {
    const { canvasEl, assistCanvasEl, el } = this;

    if (!el || !canvasEl || !assistCanvasEl) return;

    canvasEl.width = el.offsetWidth || 0;
    canvasEl.height = el.offsetHeight || 0;

    assistCanvasEl.width = el.offsetWidth || 0;
    assistCanvasEl.height = el.offsetHeight || 0;

    this.clearDraw();
    this.clearAssistDraw();
    this.drawHistoryData();
  }

  /**
   * onResize
   */
  protected onResize() {
    this.adapterCanvas();
  }

  /**
   * getCtx
   * @return CanvasRenderingContext2D | null
   */
  getCtx(): CanvasRenderingContext2D | null {
    return this.ctx;
  }

  /**
   * getCanvasEl
   * @return HTMLCanvasElement | null
   */
  getCanvasEl(): HTMLCanvasElement | null {
    return this.canvasEl;
  }

  /**
   * getAssistCanvasEl
   */
  getAssistCanvasEl(): HTMLCanvasElement | null {
    return this.assistCanvasEl;
  }

  getAssistCtx(): CanvasRenderingContext2D | null {
    return this.assistCtx;
  }

  /**
   * getWidth
   * @return number
   */
  getWidth(): number {
    return this?.el?.offsetWidth || 0;
  }

  /**
   * getHeight
   * @return number
   */
  getHeight(): number {
    return this?.el?.offsetHeight || 0;
  }

  /**
   * addHistoryData - 添加一个ActionData到canvasData中
   * @param data
   * @return void
   */
  addHistoryData(data: IActionData): void {
    this.canvasData.push(data);
  }

  /**
   * removeHistoryDataById - 删除一个ActionData中的数据
   * @param actionDataId
   * @return IActionData[]
   */
  removeHistoryDataById(actionDataId: string): IActionData[] {
    const index = this.canvasData.findIndex((data) => data.id === actionDataId);
    if (index === -1) return [];

    return this.canvasData.splice(index, 1);
  }

  /**
   * drawHistoryData - 绘制历史数据
   * @return void
   */
  drawHistoryData(): void {
    this.canvasData.forEach((data: IActionData) => {
      const { ctx } = this;

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
      }

      // 绘制指定类型的路径
      // @ts-ignore
      this.typeActionMap.get(data.type)?.drawHistoryPath(ctx, data.data);

      // 描边
      ctx.stroke();
      // 填充
      ctx.fill();
    });
  }

  /**
   * getHistoryDataById
   * @param id
   * @return IActionData | null | undefined
   */
  getHistoryDataById(id: string): IActionData | null | undefined {
    return this.canvasData.find((data) => data.id === id);
  }

  /**
   * getHistoryData
   * @return IActionData []
   */
  getHistoryData(): IActionData[] {
    return [...this.canvasData];
  }

  /**
   * setHistoryData
   * @param data
   */
  setHistoryData(data: IActionData[]): void {
    this.canvasData = data;
  }

  /**
   * changeAction - 切换一个Action
   * @param action - action对象
   * @return void
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
   * getCurAction
   * @return IAction | null
   */
  getCurAction(): IAction | null {
    return this.curAction;
  }

  /**
   * start - 开始
   * @param style
   * @return void
   */
  start(style?: IStyle): void {
    if (!this.curAction) return;

    this.curAction.start(style);
  }

  /**
   * end - 结束
   * @return void
   */
  end(): void {
    if (!this.curAction) return;

    this.curAction.end();
  }

  /**
   * clear
   */
  clearDraw(): void {
    const { ctx } = this;

    if (!ctx) return;

    ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
  }

  /**
   * clearAssistDraw
   * @description 清除assist的canvas
   */
  clearAssistDraw(): void {
    const { assistCtx } = this;

    if (!assistCtx) return;

    assistCtx.clearRect(0, 0, this.getWidth(), this.getHeight());
  }

  /**
   * setFrontCanvas
   * @description 置顶
   * @param canvasEl
   */
  setFrontCanvas(canvasEl: HTMLCanvasElement): void {
    // console.log('置顶');
    canvasEl.style.zIndex = '9999';
  }

  /**
   * setBackCanvas
   * @description 置底
   * @param canvasEl
   */
  setBackCanvas(canvasEl: HTMLCanvasElement): void {
    // console.log('置底');
    canvasEl.style.zIndex = '1';
  }

  /**
   * destroy - 销毁
   * @return void
   */
  destroy(): void {
    typeof window !== 'undefined' && window.removeEventListener('resize', this.onResize);

    if (this.curAction) {
      this.curAction.destroy();
    }
  }
}

export default PolygonSelection;
