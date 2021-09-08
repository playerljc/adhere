/**
 * Action的状态
 */
export enum ActionStatus {
  // 未开始
  UnStart,
  // 进行中
  Running,
  // 结束
  End,
  // 销毁
  Destroy,
}

/**
 * Action的事件
 */
export enum ActionEvents {
  BeforeStart = 'BeforeStart',
  Start = 'Start',
  End = 'End',
  Destroy = 'Destroy',
}

/**
 * IAction - 一个Action对象
 */
export interface IAction {
  // 获取状态
  getStatus: () => number;
  // 获取Select的类型
  getSelectType: () => SelectType;
  // 开始
  start: (style?: IStyle) => void;
  // 结束
  end: (e?: MouseEvent) => void;
  // 销毁
  destroy: () => void;
  // 设置上下文对象
  setContext: (context: IInteractionLayer) => void;
  // 设置光标形状
  setCursor: () => void;
}

/**
 * IListeners
 */
export interface IListeners {
  [propName: string]: () => void;
}
/**
 * IActionData - Action的数据
 */
export interface IActionData {
  id?: string;
  type?: SelectType;
  data: any;
  style?: IStyle;
}

/**
 * IPolygonData - Polygon的数据
 */
export interface IPolygonData extends IActionData {
  type: SelectType.Polygon;
  data: IPoint[];
}

/**
 * ICircleData - Circle的数据
 */
export interface ICircleData extends IActionData {
  type: SelectType.Circle;
  data: {
    center: IPoint;
    radius: number;
  };
}

/**
 * IRectangleData - Rectangle的数据
 */
export interface IRectangleData extends IActionData {
  type: SelectType.Rectangle;
  data: {
    leftTopPoint: IPoint;
    width: number;
    height: number;
  };
}

/**
 * ITriangleData - Triangle的数据
 */
export interface ITriangleData extends IActionData {
  type: SelectType.Triangle;
  data: {
    points: IPoint[];
  };
}

/**
 * IDiamondData - Diamond的数据
 */
export interface IDiamondData extends IActionData {
  type: SelectType.Diamond;
  // 矩形的数据
  data: {
    leftTopPoint: IPoint;
    width: number;
    height: number;
  };
}

/**
 * IFreeData - Free的数据
 */
export interface IFreeData extends IActionData {
  type: SelectType.Free;
  data: {
    points: IPoint[];
  };
}

/**
 * IStartData - Start的数据
 */
export interface IStartData extends IActionData {
  type?: SelectType.Start;
  data: {
    // 圆的中心点
    center: IPoint;
    // 外半径
    outRadius: number;
    // 内半径(外半径的一半)
    innerRadius: number;
  };
}

/**
 * IModifyAction
 */
export interface IModifyAction extends IAction {
  // 开始
  start: () => void;
}

interface IDrawMoveGeometry {
  /**
   * drawMoveGeometry
   * @description 绘制移动当中的几何图形
   */
  (): void;
  /**
   * drawMoveGeometry
   * @description 绘制移动当中的几何图形
   * @param startPoint
   * @param targetPoint
   */
  (startPoint: IPoint, targetPoint: IPoint): void;
}

/**
 * IModifyAction
 * @description - 移动的接口
 */
export interface IMoveAction {
  // 移动的以第一个点
  moveStartPoint: IPoint | null;
  // 是否可以移动
  canMove: boolean;
  // 是都已经移动
  isMoved: boolean;
  /**
   * isCanMove
   * @description 是否可以移动
   * @param targetPoint
   */
  isCanMove: (targetPoint: IPoint) => boolean;
  /**
   * drawMoveGeometry
   * @description 绘制移动当中的几何图形
   */
  drawMoveGeometry: IDrawMoveGeometry;
  /**
   * initMoveEvents
   */
  initMoveEvents: () => void;

  /**
   * clearMoveEvents
   */
  clearMoveEvents: () => void;
  onMoveMousedown: (e?: MouseEvent) => void;
  onMoveMousemove: (e?: MouseEvent) => void;
  onMoveMouseup: (e?: MouseEvent) => void;
  endMove: (e:MouseEvent) => void;
}

/**
 * InteractionLayerActions - InteractionLayerActions的事件类型
 */
export enum InteractionLayerActions {
  CanvasMount = 'CanvasMount',
  CanvasClickEmpty = 'CanvasClickEmpty',
  CanvasClickGeometry = 'CanvasClickGeometry',
}

/**
 * IInteractionLayer
 */
export interface IInteractionLayer {
  getWidth: () => number;
  getHeight: () => number;
  getCtx: () => CanvasRenderingContext2D | null;
  getCanvasEl: () => HTMLCanvasElement | null;
  getAssistCtx: () => CanvasRenderingContext2D | null;
  getAssistCanvasEl: () => HTMLCanvasElement | null;
  addHistoryData: (data: IActionData) => void;
  removeHistoryDataById: (actionDataId: string) => IActionData[];
  getHistoryDataById: (id: string) => IActionData | null | undefined;
  drawHistoryData: () => void;
  getHistoryData: () => IActionData[];
  setHistoryData: (data: IActionData[]) => void;
  changeAction: (action: IAction) => void;
  getCurAction: () => IAction | null;
  setFrontCanvas: (canvasEl: HTMLCanvasElement) => void;
  setBackCanvas: (canvasEl: HTMLCanvasElement) => void;
  start: (style: IStyle) => void;
  end: () => void;
  destroy: () => void;
  clearDraw: () => void;
  clearAssistDraw: () => void;
  pixelToPoint: (pixel: IPoint) => IPoint;
  /**
   * distanceToActual - 图上距离转换成实际距离
   * @param distance
   */
  distanceToActual: (distance: number) => number;
  /**
   * pointToPixel
   * @param point
   */
  pointToPixel(point: IPoint): IPoint;
  /**
   * actualToDistance - 实际距离转换成图上距离
   * @param actual
   */
  actualToDistance(actual: number): number;
  enableMap(): void;
}

/**
 * IPoint
 */
export interface IPoint {
  x: number;
  y: number;
}

/**
 * IStyle
 */
export interface IStyle {
  // 填充颜色
  fillStyle: string;
  // 描边颜色
  strokeStyle: string;
  // 描边大小
  lineWidth: number;
  lineCap: CanvasLineCap;
  lineJoin: CanvasLineJoin;
  lineDash: number[];
  lineDashOffset: number;
  globalAlpha: number;
}

/**
 * SelectType
 */
export enum SelectType {
  Polygon = 'Polygon',
  Circle = 'Circle',
  Rectangle = 'Rectangle',
  Triangle = 'Triangle',
  Diamond = 'Diamond',
  Start = 'Start',
  Free = 'Free',
  Distance = 'Distance',
}

/**
 * ActionType
 */
export enum ActionType {
  Draw = 'Draw',
  Modify = 'Modify',
  Move = 'Move',
}
