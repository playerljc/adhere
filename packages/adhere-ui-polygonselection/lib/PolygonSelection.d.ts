import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IAction, IActionData, IPolygonSelection, IStyle } from './types';
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
    protected canvasData: IActionData[];
    protected typeActionMap: Map<string, IAction>;
    /**
     * constructor
     * @param el - 父元素
     * @param defaultData: IActionData[]
     */
    constructor(el: HTMLElement, defaultData?: IActionData[]);
    /**
     * initCanvas - 初始化Canvas
     */
    private initCanvas;
    /**
     * adapterCanvas - 适配canvas
     */
    private adapterCanvas;
    /**
     * onResize
     */
    private onResize;
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
     * destroy - 销毁
     * @return void
     */
    destroy(): void;
}
export default PolygonSelection;
