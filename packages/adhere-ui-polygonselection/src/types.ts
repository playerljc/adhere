import type { ModalProps } from 'antd/lib/modal/interface';
import { PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';

import type {
  CenterProps,
  TBLRCLayoutProps,
  TBLRProps,
} from '@baifendian/adhere-ui-flexlayout/es/types';

import CroppingCore from './cropping/CroppingCore';

/**
 * Action的状态枚举
 * @description 定义Action的生命周期状态
 */
export enum ActionStatus {
  /** 未开始状态 */
  UnStart = 0,
  /** 进行中状态 */
  Running = 1,
  /** 结束状态 */
  End = 2,
  /** 销毁状态 */
  Destroy = 3,
}

/**
 * Action事件枚举
 * @description 定义Action相关的事件类型
 */
export enum ActionEvents {
  /** 绘制开始前事件 */
  DrawBeforeStart = 'DrawBeforeStart',
  /** 绘制开始事件 */
  DrawStart = 'DrawStart',
  /** 绘制中事件 */
  Drawing = 'Drawing',
  /** 绘制结束事件 */
  DrawEnd = 'DrawEnd',

  /** 移动开始前事件 */
  MoveBeforeStart = 'MoveBeforeStart',
  /** 移动开始事件 */
  MoveStart = 'MoveStart',
  /** 移动中事件 */
  Moving = 'Moving',
  /** 移动结束事件 */
  MoveEnd = 'MoveEnd',

  /** 修改开始前事件 */
  ModifyBeforeStart = 'ModifyBeforeStart',
  /** 修改开始事件 */
  ModifyStart = 'ModifyStart',
  /** 修改中事件 */
  Modifying = 'Modifying',
  /** 修改结束事件 */
  ModifyEnd = 'ModifyEnd',

  /** 销毁事件 */
  Destroy = 'Destroy',
}

/**
 * Action类型枚举
 * @description 定义Action的操作类型
 */
export enum ActionType {
  /** 绘制操作 */
  Draw = 'Draw',
  /** 修改操作 */
  Modify = 'Modify',
  /** 移动操作 */
  Move = 'Move',
}

/**
 * 选择类型枚举
 * @description 定义可选择的几何图形类型
 */
export enum SelectType {
  /** 多边形选择 */
  Polygon = 'Polygon',
  /** 圆形选择 */
  Circle = 'Circle',
  /** 矩形选择 */
  Rectangle = 'Rectangle',
  /** 三角形选择 */
  Triangle = 'Triangle',
  /** 菱形选择 */
  Diamond = 'Diamond',
  /** 星形选择 */
  Start = 'Start',
  /** 自由绘制选择 */
  Free = 'Free',
}

/**
 * 多边形选择操作枚举
 * @description 定义多边形选择组件的事件操作类型
 */
export enum PolygonSelectionActions {
  /** Canvas挂载事件 */
  CanvasMount = 'CanvasMount',
  /** Canvas点击空白区域事件 */
  CanvasClickEmpty = 'CanvasClickEmpty',
  /** Canvas点击几何图形事件 */
  CanvasClickGeometry = 'CanvasClickGeometry',
}

/**
 * 坐标点接口
 * @description 定义二维平面上的坐标点
 */
export interface IPoint {
  /** X坐标值 */
  x: number;
  /** Y坐标值 */
  y: number;
}

/**
 * 样式接口
 * @description 定义Canvas绘制样式属性
 */
export interface IStyle {
  /** 填充颜色 */
  fillStyle: string;
  /** 描边颜色 */
  strokeStyle: string;
  /** 描边宽度 */
  lineWidth: number;
  /** 线条端点样式 */
  lineCap: CanvasLineCap;
  /** 线条连接样式 */
  lineJoin: CanvasLineJoin;
  /** 虚线样式数组 */
  lineDash: number[];
  /** 虚线偏移量 */
  lineDashOffset: number;
  /** 全局透明度 */
  globalAlpha: number;
}

/**
 * 矩形数据接口
 * @description 定义矩形的基本数据
 */
export interface RectangleData {
  /** 左上角坐标点 */
  leftTopPoint: IPoint;
  /** 矩形宽度 */
  width: number;
  /** 矩形高度 */
  height: number;
}

/**
 * 圆形数据接口
 * @description 定义圆形的基本数据
 */
export interface CircleData {
  /** 圆心坐标点 */
  center: IPoint;
  /** 半径长度 */
  radius: number;
}

/**
 * 外圆数据接口
 * @description 定义星形等图形的外圆数据
 */
export interface OutCircleData {
  /** 圆心坐标点 */
  center: IPoint;
  /** 外半径长度 */
  outRadius: number;
  /** 内半径长度（通常为外半径的一半） */
  innerRadius: number;
}

/**
 * 点集合数据接口
 * @description 定义多个点的集合
 */
export interface Points {
  /** 点数组 */
  points: IPoint[];
}

/**
 * 事件监听器接口
 * @description 定义事件监听器的映射
 */
export interface IListeners {
  /** 事件名称到处理函数的映射 */
  [propName: string]: () => void;
}

/**
 * Action数据基础接口
 * @description 定义所有Action数据的基础结构
 */
export interface IActionData {
  /** 唯一标识符 */
  id?: string;
  /** 选择类型 */
  type?: SelectType;
  /** 具体数据内容 */
  data: any;
  /** 绘制样式 */
  style?: IStyle;
}

/**
 * 多边形数据接口
 * @description 定义多边形选择的数据结构
 */
export interface IPolygonData extends IActionData {
  /** 选择类型：多边形 */
  type: SelectType.Polygon;
  /** 多边形的顶点数组 */
  data: IPoint[];
}

/**
 * 圆形数据接口
 * @description 定义圆形选择的数据结构
 */
export interface ICircleData extends IActionData {
  /** 选择类型：圆形 */
  type: SelectType.Circle;
  /** 圆形数据 */
  data: CircleData;
}

/**
 * 矩形数据接口
 * @description 定义矩形选择的数据结构
 */
export interface IRectangleData extends IActionData {
  /** 选择类型：矩形 */
  type: SelectType.Rectangle;
  /** 矩形数据 */
  data: RectangleData;
}

/**
 * 三角形数据接口
 * @description 定义三角形选择的数据结构
 */
export interface ITriangleData extends IActionData {
  /** 选择类型：三角形 */
  type: SelectType.Triangle;
  /** 三角形顶点数据 */
  data: Points;
}

/**
 * 菱形数据接口
 * @description 定义菱形选择的数据结构
 */
export interface IDiamondData extends IActionData {
  /** 选择类型：菱形 */
  type: SelectType.Diamond;
  /** 菱形数据（使用矩形数据表示） */
  data: RectangleData;
}

/**
 * 自由绘制数据接口
 * @description 定义自由绘制选择的数据结构
 */
export interface IFreeData extends IActionData {
  /** 选择类型：自由绘制 */
  type: SelectType.Free;
  /** 自由绘制的点集合 */
  data: {
    /** 绘制的点数组 */
    points: IPoint[];
  };
}

/**
 * 星形数据接口
 * @description 定义星形选择的数据结构
 */
export interface IStartData extends IActionData {
  /** 选择类型：星形 */
  type?: SelectType.Start;
  /** 星形数据 */
  data: OutCircleData;
}

/**
 * 修改Action接口
 * @description 定义修改Action的基本属性和方法
 */
export interface IModifyAction extends IAction {
  /** 开始修改操作 */
  start: () => void;
}

/**
 * 绘制移动几何图形函数类型
 * @description 定义绘制移动几何图形的函数签名
 */
interface IDrawMoveGeometry {
  /**
   * 绘制移动当中的几何图形
   * @description 无参数版本，绘制当前状态的几何图形
   */
  (): void;
  /**
   * 绘制移动当中的几何图形
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @returns 移动后的Action数据，如果无法移动则返回null
   * @description 带参数版本，根据起始点和目标点绘制移动中的几何图形
   */
  (startPoint: IPoint, targetPoint: IPoint): IActionData | null;
}

/**
 * 移动Action接口
 * @description 定义移动Action的基本属性和方法
 */
export interface IMoveAction {
  /** 移动的起始点坐标 */
  moveStartPoint: IPoint | null;
  /** 是否可以移动的标志 */
  canMove: boolean;
  /** 是否已经移动的标志 */
  isMoved: boolean;
  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点坐标
   * @returns 是否可以移动到目标点
   */
  isCanMove: (targetPoint: IPoint) => boolean;
  /**
   * 绘制移动当中的几何图形
   * @description 绘制移动过程中的几何图形
   */
  drawMoveGeometry: IDrawMoveGeometry;
  /**
   * 初始化移动事件
   * @description 绑定移动相关的事件监听器
   */
  initMoveEvents: () => void;
  /**
   * 清除移动事件
   * @description 移除移动相关的事件监听器
   */
  clearMoveEvents: () => void;
  /**
   * 移动鼠标按下事件处理
   * @param e - 鼠标事件对象
   * @description 处理移动开始时的鼠标按下事件
   */
  onMoveMousedown: (e?: MouseEvent) => void;
  /**
   * 移动鼠标移动事件处理
   * @param e - 鼠标事件对象
   * @description 处理移动过程中的鼠标移动事件
   */
  onMoveMousemove: (e?: MouseEvent) => void;
  /**
   * 移动鼠标抬起事件处理
   * @param e - 鼠标事件对象
   * @description 处理移动结束时的鼠标抬起事件
   */
  onMoveMouseup: (e?: MouseEvent) => void;
}

/**
 * Action基础接口
 * @description 定义所有Action的基本属性和方法
 */
export interface IAction {
  /** 绘制样式 */
  style: IStyle;
  /** 修改时控制点的样式 */
  anchorStyle: IStyle;
  /** 移动元素的样式 */
  moveGemStyle: IStyle;

  /**
   * 设置样式
   * @param style - 样式对象，可选的部分样式属性
   * @description 更新Action的绘制样式
   */
  setStyle: (style?: Partial<IStyle>) => void;
  /**
   * 获取样式
   * @returns 当前样式对象的副本
   * @description 获取Action的当前绘制样式
   */
  getStyle: () => IStyle;
  /**
   * 设置锚点样式
   * @param style - 样式对象，可选的部分样式属性
   * @description 更新Action的锚点样式
   */
  setAnchorStyle: (style?: Partial<IStyle>) => void;
  /**
   * 获取锚点样式
   * @returns 当前锚点样式对象的副本
   * @description 获取Action的当前锚点样式
   */
  getAnchorStyle: () => IStyle;
  /**
   * 设置移动几何图形样式
   * @param style - 样式对象，可选的部分样式属性
   * @description 更新Action的移动几何图形样式
   */
  setMoveGemStyle: (style?: Partial<IStyle>) => void;
  /**
   * 获取移动几何图形样式
   * @returns 当前移动几何图形样式对象的副本
   * @description 获取Action的当前移动几何图形样式
   */
  getMoveGemStyle: () => IStyle;
  /**
   * 获取状态
   * @returns 当前状态值
   * @description 获取Action的当前状态
   */
  getStatus: () => number;
  /**
   * 开始Action
   * @param style - 样式对象，可选的初始样式
   * @description 开始执行Action
   */
  start: (style?: IStyle) => void;
  /**
   * 结束Action
   * @param e - 鼠标事件对象，可选
   * @description 结束执行Action
   */
  end: (e?: MouseEvent) => void;
  /**
   * 销毁Action
   * @description 销毁Action并清理资源
   */
  destroy: () => void;
  /**
   * 设置上下文对象
   * @param context - 多边形选择上下文对象
   * @description 设置Action的上下文环境
   */
  setContext: (context: IPolygonSelection) => void;

  /**
   * 注册事件监听
   * @param type - 事件类型
   * @param handler - 事件处理函数
   * @param maxStackSize - 最大堆栈大小，可选
   * @description 注册事件监听器
   */
  on(type: string | symbol, handler: Function, maxStackSize?: number): void;
}

/**
 * 多边形选择接口
 * @description 定义多边形选择组件的主要功能接口
 */
export interface IPolygonSelection {
  /**
   * 触发事件
   * @param type - 事件类型
   * @param params - 事件参数，可选
   * @description 触发指定类型的事件
   */
  trigger: (type: string, params?: any | null | undefined) => void;
  /**
   * 注册事件监听
   * @param type - 事件类型
   * @param handler - 事件处理函数
   * @param maxStackSize - 最大堆栈大小，可选
   * @description 注册事件监听器
   */
  on(type: string | symbol, handler: Function, maxStackSize?: number): void;
  /**
   * 获取宽度
   * @returns 组件宽度值
   * @description 获取多边形选择组件的宽度
   */
  getWidth: () => number;
  /**
   * 获取高度
   * @returns 组件高度值
   * @description 获取多边形选择组件的高度
   */
  getHeight: () => number;
  /**
   * 获取Canvas上下文
   * @returns Canvas渲染上下文，如果不存在则返回null
   * @description 获取主Canvas的渲染上下文
   */
  getCtx: () => CanvasRenderingContext2D | null;
  /**
   * 获取Canvas元素
   * @returns Canvas元素，如果不存在则返回null
   * @description 获取主Canvas元素
   */
  getCanvasEl: () => HTMLCanvasElement | null;
  /**
   * 获取辅助Canvas上下文
   * @returns 辅助Canvas渲染上下文，如果不存在则返回null
   * @description 获取辅助Canvas的渲染上下文
   */
  getAssistCtx: () => CanvasRenderingContext2D | null;
  /**
   * 获取辅助Canvas元素
   * @returns 辅助Canvas元素，如果不存在则返回null
   * @description 获取辅助Canvas元素
   */
  getAssistCanvasEl: () => HTMLCanvasElement | null;
  /**
   * 添加历史数据
   * @param data - 要添加的Action数据
   * @description 向历史数据中添加新的Action数据
   */
  addHistoryData: (data: IActionData) => void;
  /**
   * 根据ID移除历史数据
   * @param actionDataId - 要移除的数据ID
   * @returns 被移除的数据数组
   * @description 根据ID从历史数据中移除指定的Action数据
   */
  removeHistoryDataById: (actionDataId: string) => IActionData[];
  /**
   * 根据ID获取历史数据
   * @param id - 数据ID
   * @returns 对应的Action数据，如果不存在则返回null或undefined
   * @description 根据ID从历史数据中获取指定的Action数据
   */
  getHistoryDataById: (id: string) => IActionData | null | undefined;
  /**
   * 绘制历史数据
   * @description 将所有历史数据重新绘制到Canvas上
   */
  drawHistoryData: () => void;
  /**
   * 获取历史数据
   * @returns 所有历史数据的数组
   * @description 获取所有历史Action数据
   */
  getHistoryData: () => IActionData[];
  /**
   * 设置历史数据
   * @param data - 新的历史数据数组
   * @description 替换所有历史数据
   */
  setHistoryData: (data: IActionData[]) => void;
  /**
   * 切换Action
   * @param action - 新的Action对象
   * @description 切换到新的Action
   */
  changeAction: (action: IAction) => void;
  /**
   * 获取当前Action
   * @returns 当前正在执行的Action，如果没有则返回null
   * @description 获取当前正在执行的Action
   */
  getCurAction: () => IAction | null;
  /**
   * 设置Canvas层级为前置
   * @param canvasEl - Canvas元素
   * @description 将指定的Canvas设置为前置层级
   */
  setFrontCanvas: (canvasEl: HTMLCanvasElement) => void;
  /**
   * 设置Canvas层级为后置
   * @param canvasEl - Canvas元素
   * @description 将指定的Canvas设置为后置层级
   */
  setBackCanvas: (canvasEl: HTMLCanvasElement) => void;
  /**
   * 开始
   * @param style - 样式对象
   * @description 开始多边形选择操作
   */
  start: (style: IStyle) => void;
  /**
   * 结束
   * @description 结束当前的多边形选择操作
   */
  end: () => void;
  /**
   * 销毁
   * @description 销毁多边形选择组件并清理资源
   */
  destroy: () => void;
  /**
   * 清除绘制
   * @description 清除当前Canvas上的绘制内容
   */
  clearDraw: () => void;
  /**
   * 清除辅助绘制
   * @description 清除辅助Canvas上的绘制内容
   */
  clearAssistDraw: () => void;
  /**
   * 清除历史数据
   * @description 清除所有历史Action数据
   */
  clearHistoryData: () => void;
  /**
   * 清除所有Canvas内容
   * @description 清除所有Canvas上的内容
   */
  clearCanvasAll: () => void;
}

/**
 * 裁剪组件属性接口
 * @description 定义裁剪组件的属性
 */
export interface CroppingProps {
  /** 组件类名 */
  className?: string;
  /** 组件样式 */
  style?: CSSProperties;
  /** 遮罩层类名 */
  maskClassName?: string;
  /** 遮罩层样式 */
  maskStyle?: CSSProperties;
  /** 遮罩层内容 */
  mask?: ReactNode;
  /** 模态框属性 */
  modalProps?: ModalProps;
  /** 核心组件属性 */
  coreProps?: CroppingCoreProps;
  /** 裁剪结果值（base64格式） */
  value?: string;
  /** 值变化回调函数 */
  onChange?: (base64?: string) => void;
}

/**
 * 裁剪组件句柄接口
 * @description 定义裁剪组件对外暴露的方法
 */
export interface CroppingHandle {
  /** 保存裁剪结果的方法 */
  save?: () => string;
}

/**
 * 裁剪核心包装属性类型
 * @description 从TBLRCLayoutProps中排除lProps和cProps后的属性类型
 */
export type CroppingCoreWrapProps = Pick<
  TBLRCLayoutProps,
  Exclude<keyof TBLRCLayoutProps, 'lProps' | 'cProps'>
>;

/**
 * 裁剪核心工具栏属性类型
 * @description 工具栏相关的属性类型
 */
export type CroppingCoreToolProps = Partial<TBLRProps>;

/**
 * 裁剪核心区域属性类型
 * @description 区域相关的属性类型
 */
export type CroppingCoreAreaProps = Partial<CenterProps>;

/**
 * 工具栏配置项接口
 * @description 定义工具栏中每个工具的配置
 */
export interface ToolBarConfigItem {
  /** 渲染函数 */
  render?: (handle?: Function) => ReactNode;
  /** 是否隐藏该工具 */
  hide?: boolean;
  /** 排序值，数值越小排序越靠前 */
  sort?: number;
}

/**
 * 工具栏配置接口
 * @description 定义整个工具栏的配置
 */
export interface ToolBarConfig {
  /** 工具栏方向 */
  direction?: 'left' | 'right' | 'top' | 'bottom';
  /** 打开按钮配置 */
  open?: ToolBarConfigItem;
  /** 矩形工具配置 */
  rectangle?: ToolBarConfigItem;
  /** 圆形工具配置 */
  circle?: ToolBarConfigItem;
  /** 星形工具配置 */
  start?: ToolBarConfigItem;
  /** 三角形工具配置 */
  triangle?: ToolBarConfigItem;
  /** 菱形工具配置 */
  diamond?: ToolBarConfigItem;
  /** 多边形工具配置 */
  polygon?: ToolBarConfigItem;
}

/**
 * 裁剪核心组件属性接口
 * @description 定义裁剪核心组件的属性
 */
export interface CroppingCoreProps {
  /** 组件类名 */
  className?: string;
  /** 组件样式 */
  style?: CSSProperties;
  /** 包装属性 */
  wrapProps?: CroppingCoreWrapProps;
  /** 工具栏属性 */
  toolProps?: CroppingCoreToolProps;
  /** 区域属性 */
  areaProps?: CroppingCoreAreaProps;
  /** 最小高度 */
  minHeight?: number;
  /** 工具栏配置 */
  toolBarConfig?: ToolBarConfig;
}

/**
 * 裁剪核心组件句柄接口
 * @description 定义裁剪核心组件对外暴露的方法
 */
export interface CroppingCoreHandle {
  /**
   * 保存裁剪结果
   * @returns base64格式的图片数据URL
   * @description 将当前裁剪结果保存为base64格式的图片数据
   */
  save: () => string;
}

/**
 * 裁剪组件类型
 * @description 定义裁剪组件的完整类型，包括静态属性
 */
export type CroppingComponent = NamedExoticComponent<
  PropsWithoutRef<CroppingProps> & RefAttributes<CroppingHandle>
> & {
  /** 裁剪核心组件 */
  CroppingCore: typeof CroppingCore;
};

/**
 * 事件参数接口
 * @description 定义事件触发时的参数结构
 */
export interface IEventParams {
  /** 选择类型 */
  selectType: SelectType;
  /** 操作类型 */
  actionType: ActionType;
  /** 相关数据 */
  data?: IActionData;
}

/**
 * 绘制上下文接口
 * @description 定义绘制操作需要的上下文信息
 */
export interface IDrawContext {
  /** Canvas上下文 */
  context: IPolygonSelection | null;
  /** 起始点 */
  startPoint: IPoint | null;
  /** 样式对象 */
  style: IStyle;
}

/**
 * 修改上下文接口
 * @description 定义修改操作需要的上下文信息
 */
export interface IModifyContext {
  /** Canvas上下文 */
  context: IPolygonSelection | null;
  /** 起始点 */
  startPoint: IPoint | null;
  /** 起始索引 */
  startIndex: number;
  /** 数据对象 */
  data: IActionData | null;
}

/**
 * 移动上下文接口
 * @description 定义移动操作需要的上下文信息
 */
export interface IMoveContext {
  /** Canvas上下文 */
  context: IPolygonSelection | null;
  /** 移动起始点 */
  moveStartPoint: IPoint | null;
  /** 是否可以移动 */
  canMove: boolean;
  /** 是否已经移动 */
  isMoved: boolean;
}

/**
 * 锚点信息接口
 * @description 定义锚点的位置和索引信息
 */
export interface IAnchorInfo {
  /** 锚点坐标 */
  point: IPoint;
  /** 锚点索引 */
  index: number;
}

/**
 * 矩形边界框接口
 * @description 定义矩形的四个角点坐标
 */
export interface IRectangleBox {
  /** 左上角点 */
  leftTop: IPoint;
  /** 右上角点 */
  rightTop: IPoint;
  /** 右下角点 */
  rightBottom: IPoint;
  /** 左下角点 */
  leftBottom: IPoint;
}

/**
 * 修改处理器函数类型
 * @description 定义修改操作的处理器函数签名
 */
export type ModifyHandler = (targetPoint: IPoint) => boolean;

/**
 * 光标样式映射类型
 * @description 定义索引到光标样式的映射
 */
export type ICursorMapping = Map<number, string>;
