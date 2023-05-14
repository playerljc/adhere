import type { ModalProps } from 'antd/lib/modal/Modal';
import type { CSSProperties } from 'react';

import type {
  CenterProps,
  TBLRCLayoutProps,
  TBLRProps
} from '@baifendian/adhere-ui-flexlayout/es/types';
import type Events from '@baifendian/adhere-util-emitter/es/events';

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
  // 绘制开始前
  DrawBeforeStart = 'DrawBeforeStart',
  // 绘制开始
  DrawStart = 'DrawStart',
  // 绘制中
  Drawing = 'Drawing',
  // 绘制结束
  DrawEnd = 'DrawEnd',

  // 移动开始前
  MoveBeforeStart = 'MoveBeforeStart',
  // 移动开始
  MoveStart = 'MoveStart',
  // 移动中
  Moving = 'Moving',
  // 移动结束
  MoveEnd = 'MoveEnd',

  // 修改开始前
  ModifyBeforeStart = 'ModifyBeforeStart',
  // 修改开始
  ModifyStart = 'ModifyStart',
  // 修改中
  Modifying = 'Modifying',
  // 修改结束
  ModifyEnd = 'ModifyEnd',

  // 销毁
  Destroy = 'Destroy',
}

/**
 * IAction - 一个Action对象
 */
export interface IAction extends Events {
  // 绘制样式
  style: IStyle;
  // 修改的时候控制点的样式
  anchorStyle: IStyle;
  // 移动的元素样式
  moveGemStyle: IStyle;
  
  setStyle: (style?: Partial<IStyle>) => void;
  getStyle: () => IStyle;
  setAnchorStyle: (style?: Partial<IStyle>) => void;
  getAnchorStyle: () => IStyle;
  setMoveGemStyle: (style?: Partial<IStyle>) => void;
  getMoveGemStyle: () => IStyle;
  // 获取状态
  getStatus: () => number;
  // 开始
  start: (style?: IStyle) => void;
  // 结束
  end: (e?: MouseEvent) => void;
  // 销毁
  destroy: () => void;
  // 设置上下文对象
  setContext: (context: IPolygonSelection) => void;
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
}

/**
 * PolygonSelectionActions - PolygonSelectionActions的事件类型
 */
export enum PolygonSelectionActions {
  CanvasMount = 'CanvasMount',
  CanvasClickEmpty = 'CanvasClickEmpty',
  CanvasClickGeometry = 'CanvasClickGeometry',
}

/**
 * IPolygonSelection
 */
export interface IPolygonSelection {
  trigger: (type: string, params?: any | null | undefined) => void;
  on(type: string | symbol, handler: Function, makStackSize?: number): void;
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
  clearHistoryData: () => void;
  clearCanvasAll: () => void;
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
}

/**
 * ActionType
 */
export enum ActionType {
  Draw = 'Draw',
  Modify = 'Modify',
  Move = 'Move',
}

export interface CroppingProps {
  className?: string;
  style?: CSSProperties;
  modalProps?: ModalProps;
  coreProps?: CroppingCoreProps;
  value?: string;
  onChange?: (base64?: string) => void;
}

export interface CroppingHandle {}

export type CroppingCoreWrapProps = Pick<
  TBLRCLayoutProps,
  Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>
>;
export type CroppingCoreToolProps = Partial<TBLRProps>;
export type CroppingCoreAreaProps = Partial<CenterProps>;

export interface CroppingCoreProps {
  className?: string;
  style?: CSSProperties;
  wrapProps?: CroppingCoreWrapProps;
  toolProps?: CroppingCoreToolProps;
  areaProps?: CroppingCoreAreaProps;
  minHeight?: number;
}

export interface CroppingCoreHandle {
  save?: () => string;
}
