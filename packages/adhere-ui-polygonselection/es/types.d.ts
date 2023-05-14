import type { ModalProps } from 'antd/lib/modal/Modal';
import type { CSSProperties, ReactNode } from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '@baifendian/adhere-ui-flexlayout/es/types';
/**
 * Action的状态
 */
export declare enum ActionStatus {
    UnStart = 0,
    Running = 1,
    End = 2,
    Destroy = 3
}
/**
 * Action的事件
 */
export declare enum ActionEvents {
    DrawBeforeStart = "DrawBeforeStart",
    DrawStart = "DrawStart",
    Drawing = "Drawing",
    DrawEnd = "DrawEnd",
    MoveBeforeStart = "MoveBeforeStart",
    MoveStart = "MoveStart",
    Moving = "Moving",
    MoveEnd = "MoveEnd",
    ModifyBeforeStart = "ModifyBeforeStart",
    ModifyStart = "ModifyStart",
    Modifying = "Modifying",
    ModifyEnd = "ModifyEnd",
    Destroy = "Destroy"
}
/**
 * IAction - 一个Action对象
 */
export interface IAction {
    style: IStyle;
    anchorStyle: IStyle;
    moveGemStyle: IStyle;
    setStyle: (style?: Partial<IStyle>) => void;
    getStyle: () => IStyle;
    setAnchorStyle: (style?: Partial<IStyle>) => void;
    getAnchorStyle: () => IStyle;
    setMoveGemStyle: (style?: Partial<IStyle>) => void;
    getMoveGemStyle: () => IStyle;
    getStatus: () => number;
    start: (style?: IStyle) => void;
    end: (e?: MouseEvent) => void;
    destroy: () => void;
    setContext: (context: IPolygonSelection) => void;
    on(type: string | symbol, handler: Function, makStackSize?: number): any;
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
export type RectangleData = {
    leftTopPoint: IPoint;
    width: number;
    height: number;
};
export type CircleData = {
    center: IPoint;
    radius: number;
};
export type OutCircleData = {
    center: IPoint;
    outRadius: number;
    innerRadius: number;
};
export type Points = {
    points: IPoint[];
};
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
    data: CircleData;
}
/**
 * IRectangleData - Rectangle的数据
 */
export interface IRectangleData extends IActionData {
    type: SelectType.Rectangle;
    data: RectangleData;
}
/**
 * ITriangleData - Triangle的数据
 */
export interface ITriangleData extends IActionData {
    type: SelectType.Triangle;
    data: Points;
}
/**
 * IDiamondData - Diamond的数据
 */
export interface IDiamondData extends IActionData {
    type: SelectType.Diamond;
    data: RectangleData;
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
    data: OutCircleData;
}
/**
 * IModifyAction
 */
export interface IModifyAction extends IAction {
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
    moveStartPoint: IPoint | null;
    canMove: boolean;
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
export declare enum PolygonSelectionActions {
    CanvasMount = "CanvasMount",
    CanvasClickEmpty = "CanvasClickEmpty",
    CanvasClickGeometry = "CanvasClickGeometry"
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
    fillStyle: string;
    strokeStyle: string;
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
export declare enum SelectType {
    Polygon = "Polygon",
    Circle = "Circle",
    Rectangle = "Rectangle",
    Triangle = "Triangle",
    Diamond = "Diamond",
    Start = "Start",
    Free = "Free"
}
/**
 * ActionType
 */
export declare enum ActionType {
    Draw = "Draw",
    Modify = "Modify",
    Move = "Move"
}
export interface CroppingProps {
    className?: string;
    style?: CSSProperties;
    maskClassName?: string;
    maskStyle?: CSSProperties;
    mask?: ReactNode;
    modalProps?: ModalProps;
    coreProps?: CroppingCoreProps;
    value?: string;
    onChange?: (base64?: string) => void;
}
export interface CroppingHandle {
}
export type CroppingCoreWrapProps = Pick<TBLRCLayoutProps, Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>>;
export type CroppingCoreToolProps = Partial<TBLRProps>;
export type CroppingCoreAreaProps = Partial<CenterProps>;
export interface CroppingCoreProps {
    className?: string;
    style?: CSSProperties;
    wrapProps?: CroppingCoreWrapProps;
    toolProps?: CroppingCoreToolProps;
    areaProps?: CroppingCoreAreaProps;
    minHeight?: number;
    toolBarConfig?: {
        direction?: string | 'left' | 'right' | 'top' | 'bottom';
        open?: {
            render?: (handle?: Function) => ReactNode;
            sort?: number;
        };
        rectangle?: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
        circle?: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
        start: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
        triangle: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
        diamond: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
        polygon: {
            render?: (handle?: Function) => ReactNode;
            hide?: boolean;
            sort?: number;
        };
    };
}
export interface CroppingCoreHandle {
    save?: () => string;
}
export {};
