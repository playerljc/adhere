import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IAction, IActionData, IPolygonSelection, IStyle, SelectType } from './types';
/**
 * PolygonSelection
 * @class
 * @classdesc - PolygonSelection
 */
declare class PolygonSelection extends Emitter implements IPolygonSelection {
    protected el: HTMLElement | null;
    protected curAction: IAction | null;
    protected canvasEl: HTMLCanvasElement | null;
    protected ctx: CanvasRenderingContext2D | null;
    protected assistCanvasEl: HTMLCanvasElement | null;
    protected assistCtx: CanvasRenderingContext2D | null;
    protected canvasData: IActionData[];
    protected typeActionMap: Map<SelectType, IAction>;
    /**
     * constructor
     * @param el - 父元素
     * @param defaultData: IActionData[]
     */
    constructor(el: HTMLElement, defaultData?: IActionData[]);
    /**
     * initEvents
     */
    protected initEvents(): void;
    /**
     * initCanvas - 初始化Canvas
     */
    protected initCanvas(): void;
    /**
     * adapterCanvas - 适配canvas
     */
    protected adapterCanvas(): void;
    /**
     * onResize
     */
    protected onResize(): void;
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
     * addHistoryData - 添加一个ActionData到canvasData中
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
}
export default PolygonSelection;
