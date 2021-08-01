import PolygonSelection from './index';
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
    BeforeStart = "BeforeStart",
    Start = "Start",
    End = "End",
    Destroy = "Destroy"
}
/**
 * IAction - 一个Action对象
 */
export interface IAction {
    getStatus: () => number;
    start: (style?: IStyle) => void;
    end: (e?: MouseEvent) => void;
    destroy: () => void;
    setContext: (context: PolygonSelection) => void;
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
 * IDiamondData - Diamond的数据
 */
export interface IDiamondData extends IActionData {
    type: SelectType.Diamond;
    data: {
        leftTopPoint: IPoint | null;
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
        center: IPoint;
        outRadius: number;
        innerRadius: number;
    };
}
/**
 * IModifyAction
 */
export interface IModifyAction extends IAction {
    start: () => void;
}
/**
 * PolygonSelectionActions - PolygonSelectionActions的事件类型
 */
export declare enum PolygonSelectionActions {
    CanvasMount = "CanvasMount"
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
    clearDraw: () => void;
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
    Modify = "Modify"
}
