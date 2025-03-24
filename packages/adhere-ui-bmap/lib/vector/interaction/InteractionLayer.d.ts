import { IAction, IActionData, IInteractionLayer, IListeners, IPoint, IStyle, SelectType } from './types';
/**
 * InteractionLayer
 * @class
 * @classdesc - InteractionLayer
 */
declare class InteractionLayer extends BMap.CanvasLayer implements IInteractionLayer {
    protected map: any | null;
    protected el: HTMLElement | null;
    protected listeners: IListeners | null | undefined;
    protected curAction: IAction | null;
    protected canvasEl: HTMLCanvasElement | null;
    protected ctx: CanvasRenderingContext2D | null;
    protected assistCanvasEl: HTMLCanvasElement | null;
    protected assistCtx: CanvasRenderingContext2D | null;
    protected canvasData: IActionData[];
    protected emitter: import("@baifendian/adhere-util-emitter/es/events").default;
    protected isLoad: boolean;
    protected canvasObserver: MutationObserver | null;
    /**
     * constructor
     * @param map
     * @param defaultData: IActionData[] - 缺省的ActionData数据
     * @param listeners: IListeners - 缺省的事件注册对象
     */
    constructor(map: any, defaultData?: IActionData[], listeners?: IListeners);
    protected typeActionMap: Map<SelectType, IAction>;
    protected update(): void;
    /**
     * initListeners
     * @description 注册用户的listeners
     */
    protected initListeners(): void;
    /**
     * initEvents
     */
    protected initEvents(): void;
    /**
     * initCanvas - 初始化Canvas
     */
    protected initCanvas(): void;
    enableMap(): void;
    protected disableMap(): void;
    /**
     * pixelToPoint
     * @param pixel
     * @return IPoint
     */
    pixelToPoint(pixel: IPoint): IPoint;
    /**
     * pointToPixel
     * @param point
     */
    pointToPixel(point: IPoint): IPoint;
    /**
     * distanceToActual - 图上距离转换成实际距离
     * @param distance 图上距离
     * @return number 实际距离
     */
    distanceToActual(distance: number): number;
    /**
     * actualToDistance - 实际距离转换成图上距离
     * @param actual
     */
    actualToDistance(actual: number): number;
    /**
     * getCtx
     * @return CanvasRenderingContext2D | null
     */
    getCtx(): CanvasRenderingContext2D | null;
    /**
     * getCanvasEl
     * @return HTMLCanvasElement | null
     */
    getCanvasEl(): HTMLCanvasElement | null;
    /**
     * getAssistCanvasEl
     */
    getAssistCanvasEl(): HTMLCanvasElement | null;
    getAssistCtx(): CanvasRenderingContext2D | null;
    /**
     * getWidth
     * @return number
     */
    getWidth(): number;
    /**
     * getHeight
     * @return number
     */
    getHeight(): number;
    /**
     * addHistoryData
     * @description - 添加一个ActionData到canvasData中
     * @param data
     * @return void
     */
    addHistoryData(data: IActionData): void;
    /**
     * removeHistoryDataById - 删除一个ActionData中的数据
     * @param actionDataId
     * @return IActionData[]
     */
    removeHistoryDataById(actionDataId: string): IActionData[];
    /**
     * drawHistoryData - 绘制历史数据
     * @return void
     */
    drawHistoryData(): void;
    /**
     * getHistoryDataById
     * @param id
     * @return IActionData | null | undefined
     */
    getHistoryDataById(id: string): IActionData | null | undefined;
    /**
     * getHistoryData
     * @return IActionData []
     */
    getHistoryData(): IActionData[];
    /**
     * setHistoryData
     * @param data
     */
    setHistoryData(data: IActionData[]): void;
    /**
     * changeAction - 切换一个Action
     * @param action - action对象
     * @return void
     */
    changeAction(action: IAction): void;
    /**
     * getCurAction
     * @return IAction | null
     */
    getCurAction(): IAction | null;
    /**
     * start - 开始
     * @param style
     * @return void
     */
    start(style?: IStyle): void;
    /**
     * end - 结束
     * @return void
     */
    end(): void;
    /**
     * clear
     */
    clearDraw(): void;
    /**
     * clearAssistDraw
     * @description 清除assist的canvas
     */
    clearAssistDraw(): void;
    /**
     * setFrontCanvas
     * @description 置顶
     * @param canvasEl
     */
    setFrontCanvas(canvasEl: HTMLCanvasElement): void;
    /**
     * setBackCanvas
     * @description 置底
     * @param canvasEl
     */
    setBackCanvas(canvasEl: HTMLCanvasElement): void;
    /**
     * destroy - 销毁
     * @return void
     */
    destroy(): void;
    /**
     * getMap
     * @return any
     */
    getMap(): any;
}
export default InteractionLayer;
