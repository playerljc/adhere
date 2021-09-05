import Emitter from '@baifendian/adhere-util-emitter/lib/events';

import {
  ActionStatus,
  IAction,
  IActionData,
  IPolygonSelection,
  IStyle,
  PolygonSelectionActions,
  SelectType,
  IListeners,
  IPoint,
} from './types';

import PolygonDrawAction from './draw/PolygonDrawAction';
import CircleDrawAction from './draw/CircleDrawAction';
import RectangleDrawAction from './draw/RectangleDrawAction';
import TriangleDrawAction from './draw/TriangleDrawAction';
import DiamondDrawAction from './draw/DiamondDrawAction';
import StartDrawAction from './draw/StartDrawAction';
import FreeDrawAction from './draw/FreeDrawAction';
import MathUtil from '@baifendian/adhere-util/lib/math';
import Util from '../../util';

const selectorPrefix = 'adhere-ui-polygonselection';

/**
 * PolygonSelection
 * @class
 * @classdesc - PolygonSelection
 */
// @ts-ignore
class PolygonSelection extends BMap.CanvasLayer implements IPolygonSelection {
  // map
  protected map: any | null = null;

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

  protected emitter: Emitter = new Emitter();

  protected isLoad: boolean = false;

  // ActionType
  /**
   * constructor
   * @param map
   * @param defaultData: IActionData[] - 缺省的ActionData数据
   * @param listeners: IListeners - 缺省的事件注册对象
   */
  // @ts-ignore
  constructor(map: any, defaultData?: IActionData[], listeners?: IListeners) {
    // @ts-ignore
    this.update = this.update.bind(this);

    super({
      // @ts-ignore
      update: this.update,
      paneName: 'markerPane',
      zIndex: 19999,
    });

    this.map = map;

    this.listeners = listeners;

    defaultData && (this.canvasData = defaultData);

    // 初始化Listeners
    this.initListeners();
  }

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

  protected update() {
    if (!this.isLoad) {
      // 初始化Canvas
      this.initCanvas();

      // 初始化Events
      this.initEvents();

      this.clearDraw();
      this.clearAssistDraw();
      this.drawHistoryData();
      this.isLoad = true;
    } else {
      if (this.curAction) {
        this.curAction.destroy();
      }

      this.clearDraw();
      this.clearAssistDraw();
      this.drawHistoryData();
    }
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
      this.emitter.on(key, listeners[key]);
    });
  }

  /**
   * initEvents
   */
  protected initEvents(): void {
    // 点击了el元素
    // @ts-ignore
    this.el.addEventListener('mouseup', (e: MouseEvent) => {
      if (!e) return;

      // 查看point命中了HistoryData中的哪一项
      const historyData = this.getHistoryData();

      // if (!historyData || !historyData.length) {
      //   this.emitter.trigger(PolygonSelectionActions.CanvasClickEmpty);
      //   return;
      // }

      let pixel = MathUtil.clientToCtxPoint({
        event: e,
        rect: (this.el as HTMLDivElement).getBoundingClientRect(),
      });

      let finsEntitys: Array<{ index: number; data: IActionData }> = [];

      for (let i = 0; i < historyData.length; i++) {
        const data = historyData[i];

        const action = this.typeActionMap.get(data.type as SelectType) as any;

        let isIn = false;

        if ('booleanPointInData' in action) {
          isIn = action?.booleanPointInData(this, pixel, data);
          if (isIn) {
            finsEntitys.push({
              index: i,
              data,
            });
          }
        }
      }

      if (finsEntitys.length) {
        // 原始数据-需要转换成坐标数据
        this.emitter.trigger(
          PolygonSelectionActions.CanvasClickGeometry,
          JSON.parse(JSON.stringify(finsEntitys[finsEntitys.length - 1].data)),
        );
      } else {
        if (historyData.length) {
          this.emitter.trigger(PolygonSelectionActions.CanvasClickEmpty);
        }
      }
    });
  }

  /**
   * initCanvas - 初始化Canvas
   */
  protected initCanvas(): void {
    // @ts-ignore
    this.el = this.canvas.parentElement;

    // 创建一个canvas
    // @ts-ignore
    this.canvasEl = this.canvas;

    this.el.style.width = `${this.canvasEl.width}px`;
    this.el.style.height = `${this.canvasEl.height}px`;

    // @ts-ignore
    this.canvasEl.className = `${selectorPrefix}`;
    // @ts-ignore
    this.ctx = this.canvasEl.getContext('2d');

    // 创建一个assistCanvas
    this.assistCanvasEl = document.createElement('canvas');
    this.assistCanvasEl.className = `${selectorPrefix}-assist`;
    // @ts-ignore
    this.assistCanvasEl.style.zIndex = `${parseInt(this.canvasEl.style.zIndex) - 1}`;
    // @ts-ignore
    this.assistCanvasEl.width = this.canvasEl.width;
    // @ts-ignore
    this.assistCanvasEl.height = this.canvasEl.height;
    this.assistCtx = this.assistCanvasEl.getContext('2d');

    // @ts-ignore
    this.el.appendChild(this.assistCanvasEl);

    // 触发canvasMount事件
    this.emitter.trigger(PolygonSelectionActions.CanvasMount);
  }

  /**
   * pixelToPoint
   * @param pixel
   * @return IPoint
   */
  pixelToPoint(pixel: IPoint): IPoint {
    const point = this.map.pixelToPoint(pixel);

    return {
      x: point.lng,
      y: point.lat,
    };
  }

  /**
   * pointToPixel
   * @param point
   */
  pointToPixel(point: IPoint): IPoint {
    // @ts-ignore
    return this.map.pointToPixel(new BMap.Point(point.x, point.y));
  }

  /**
   * distanceToActual - 图上距离转换成实际距离
   * @param distance 图上距离
   * @return number 实际距离
   */
  distanceToActual(distance: number): number {
    const scale = Util.getScale(this.map);
    return distance / scale;
  }

  /**
   * actualToDistance - 实际距离转换成图上距离
   * @param actual
   */
  actualToDistance(actual: number): number {
    const scale = Util.getScale(this.map);
    return scale * actual;
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
    // @ts-ignore
    return this?.getCanvasEl()?.width;
  }

  /**
   * getHeight
   * @return number
   */
  getHeight(): number {
    // @ts-ignore
    return this?.getCanvasEl()?.height;
  }

  /**
   * addHistoryData
   * @description - 添加一个ActionData到canvasData中
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
      const action: IAction = this.typeActionMap.get(data.type);

      // @ts-ignore
      action?.drawHistoryPath(this, ctx, data.data);

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
    if (action && action.getStatus() !== ActionStatus.UnStart) return;

    if (this.curAction) {
      this.curAction.destroy();
    }

    // @ts-ignore
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
    canvasEl.style.zIndex = `${19999 + 1}`;
  }

  /**
   * setBackCanvas
   * @description 置底
   * @param canvasEl
   */
  setBackCanvas(canvasEl: HTMLCanvasElement): void {
    canvasEl.style.zIndex = `${19999 - 1}`;
  }

  /**
   * destroy - 销毁
   * @return void
   */
  destroy(): void {
    if (this.curAction) {
      this.curAction.destroy();
    }
  }
}

export default PolygonSelection;
