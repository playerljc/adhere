import PolygonSelection from './index';

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
  Start = 'start',
  End = 'end',
  Destroy = 'destroy',
}

/**
 * IAction - 一个Action对象
 */
export interface IAction {
  // 获取状态
  getStatus: () => number;
  // 开始
  start: (style?: IStyle) => void;
  // 结束
  end: (e?: MouseEvent) => void;
  // 销毁
  destroy: () => void;
  // 设置上下文对象
  setContext: (context: PolygonSelection) => void;
}

/**
 * IActionData - Action的数据
 */
export interface IActionData {
  id: string;
  type: SelectType;
  data: any;
  style: IStyle;
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
    center: IPoint | null;
    radius: number;
  };
}

/**
 * IRectangleData - Rectangle的数据
 */
export interface IRectangleData extends IActionData {
  type: SelectType.Rectangle;
  data: {
    leftTopPoint: IPoint | null;
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
 * IFreeData - Free的数据
 */
export interface IFreeData extends IActionData {
  type: SelectType.Free;
  data: {
    points: IPoint[];
  };
}

/**
 * IModifyAction
 */
export interface IModifyAction extends IAction {
  // 开始
  start: () => void;
}

/**
 * IMoveAction
 */
export interface IMoveAction {}

/**
 * PolygonSelectionActions - PolygonSelectionActions的事件类型
 */
export enum PolygonSelectionActions {
  CanvasMount = 'CanvasMount',
}

/**
 * IPolygonSelection
 */
export interface IPolygonSelection {
  trigger: (type: string, params?: any | null | undefined) => void;
  getWidth: () => number;
  getHeight: () => number;
  getCtx: () => CanvasRenderingContext2D | null;
  getCanvasEl: () => HTMLCanvasElement | null;
  addHistoryData: (data: IActionData) => void;
  removeHistoryDataById: (actionDataId: string) => IActionData[];
  getHistoryDataById: (id: string) => IActionData | null | undefined;
  drawHistoryData: () => void;
  getHistoryData: () => IActionData[];
  setHistoryData: (data: IActionData[]) => void;
  changeAction: (action: IAction) => void;
  start: (style: IStyle) => void;
  end: () => void;
  destroy: () => void;
  clear: () => void;
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
}

/**
 * SelectType
 */
export enum SelectType {
  Polygon = 'Polygon',
  Circle = 'Circle',
  Rectangle = 'Rectangle',
  Triangle = 'Triangle',
  Free = 'Free',
}

/**
 * ActionType
 */
export enum ActionType {
  Draw = 'Draw',
  Modify = 'Modify',
}
