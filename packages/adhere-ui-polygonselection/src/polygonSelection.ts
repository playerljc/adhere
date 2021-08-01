import Emitter from '@baifendian/adhere-util-emitter/lib/events';

import {
  ActionStatus,
  IAction,
  IActionData,
  IPolygonSelection,
  IStyle,
  PolygonSelectionActions,
  SelectType,
} from './types';

import PolygonDrawAction from './draw/polygonDrawAction';
import CircleDrawAction from './draw/circleDrawAction';
import RectangleDrawAction from './draw/rectangleDrawAction';
import TriangleDrawAction from './draw/triangleDrawAction';
import DiamondDrawAction from './draw/diamondDrawAction';
import StartDrawAction from './draw/startDrawAction';
import FreeDrawAction from './draw/freeDrawAction';

const selectorPrefix = 'adhere-ui-polygonselection';

/**
 * PolygonSelection
 * @class
 * @classdesc - PolygonSelection
 */
class PolygonSelection extends Emitter implements IPolygonSelection {
  // 父元素
  protected el: HTMLElement | null = null;

  // 当前的Action
  protected curAction: IAction | null = null;

  // 当前的canvas元素
  protected canvasEl: HTMLCanvasElement | null = null;

  // 当前的ctx对象
  protected ctx: CanvasRenderingContext2D | null = null;

  // canvas上的所有数据
  protected canvasData: IActionData[] = [];

  // ActionType
  // @ts-ignore
  protected typeActionMap: Map<string, IAction> = new Map([
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
   * @param el - 父元素
   * @param defaultData: IActionData[]
   */
  constructor(el: HTMLElement, defaultData?: IActionData[]) {
    super();

    this.el = el;

    defaultData && (this.canvasData = defaultData);

    this.onResize = this.onResize.bind(this);

    // 初始化canvas
    this.initCanvas();
  }

  /**
   * initCanvas - 初始化Canvas
   */
  private initCanvas(): void {
    // 创建一个canvas
    this.canvasEl = document.createElement('canvas');

    this.canvasEl.className = selectorPrefix;

    this.ctx = this.canvasEl.getContext('2d');

    this.el?.appendChild(this.canvasEl);

    // 触发canvasMount事件
    this.trigger(PolygonSelectionActions.CanvasMount);

    // 适配canvas
    this.adapterCanvas();

    // window.addEventListener('resize', this.onResize);
  }

  /**
   * adapterCanvas - 适配canvas
   */
  private adapterCanvas() {
    const { canvasEl } = this;

    if (canvasEl) {
      canvasEl.width = this.el?.offsetWidth || 0;
      canvasEl.height = this.el?.offsetHeight || 0;
      this.clearDraw();
      this.drawHistoryData();
    }
  }

  /**
   * onResize
   */
  private onResize() {
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
   * destroy - 销毁
   * @return void
   */
  destroy(): void {
    window.removeEventListener('resize', this.onResize);

    if (this.curAction) {
      this.curAction.destroy();
    }
  }
}

export default PolygonSelection;
