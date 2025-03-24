import MathUtil from '@baifendian/adhere-util';
import Emitter from '@baifendian/adhere-util-emitter';
import Util from '../../util';
import CircleDrawAction from './draw/CircleDrawAction';
import DiamondDrawAction from './draw/DiamondDrawAction';
import DistanceDrawAction from './draw/DistanceDrawAction';
import FreeDrawAction from './draw/FreeDrawAction';
import PolygonDrawAction from './draw/PolygonDrawAction';
import RectangleDrawAction from './draw/RectangleDrawAction';
import StartDrawAction from './draw/StartDrawAction';
import TriangleDrawAction from './draw/TriangleDrawAction';
import { ActionStatus, InteractionLayerActions, SelectType, } from './types';
const selectorPrefix = 'adhere-ui-interactionlayer';
const zIndex = 19999;
/**
 * InteractionLayer
 * @class
 * @classdesc - InteractionLayer
 */
class InteractionLayer extends BMap.CanvasLayer {
    // map
    map = null;
    // 父元素
    el = null;
    // 注册的事件对象
    listeners = null;
    // 当前的Action
    curAction = null;
    // 当前的canvas元素
    canvasEl = null;
    // 当前的ctx对象
    ctx = null;
    // 辅助的canvas元素
    assistCanvasEl = null;
    // 辅助的ctx对象
    assistCtx = null;
    // canvas上的所有数据
    canvasData = [];
    emitter = new Emitter.Events();
    isLoad = false;
    // canvas的属性监控
    canvasObserver = null;
    /**
     * constructor
     * @param map
     * @param defaultData: IActionData[] - 缺省的ActionData数据
     * @param listeners: IListeners - 缺省的事件注册对象
     */
    // @ts-ignore
    constructor(map, defaultData, listeners) {
        // @ts-ignore
        this.update = this.update.bind(this);
        super({
            // @ts-ignore
            update: this.update,
            paneName: 'markerPane',
            zIndex,
        });
        this.map = map;
        this.listeners = listeners;
        defaultData && (this.canvasData = defaultData);
        // 初始化Listeners
        this.initListeners();
    }
    // @ts-ignore
    typeActionMap = new Map([
        [SelectType.Polygon, PolygonDrawAction],
        [SelectType.Distance, DistanceDrawAction],
        [SelectType.Circle, CircleDrawAction],
        [SelectType.Rectangle, RectangleDrawAction],
        [SelectType.Triangle, TriangleDrawAction],
        [SelectType.Diamond, DiamondDrawAction],
        [SelectType.Start, StartDrawAction],
        [SelectType.Free, FreeDrawAction],
    ]);
    update() {
        if (!this.isLoad) {
            // 初始化Canvas
            this.initCanvas();
            // 初始化Events
            this.initEvents();
            this.clearDraw();
            this.clearAssistDraw();
            this.drawHistoryData();
            this.isLoad = true;
        }
        else {
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
    initListeners() {
        const { listeners } = this;
        if (!listeners)
            return;
        const keys = Object.keys(listeners);
        keys.forEach((key) => {
            this.emitter.on(key, listeners[key]);
        });
    }
    /**
     * initEvents
     */
    initEvents() {
        /**
         * 点击了el元素
         */
        this.el.addEventListener('mouseup', (e) => {
            if (!e)
                return;
            if (e.detail >= 2)
                return;
            // 查看point命中了HistoryData中的哪一项
            const historyData = this.getHistoryData();
            let pixel = MathUtil.clientToCtxPoint({
                event: e,
                rect: this.getCanvasEl().getBoundingClientRect() /*(this.el as HTMLDivElement).getBoundingClientRect()*/,
            });
            let finsEntitys = [];
            for (let i = 0; i < historyData.length; i++) {
                const data = historyData[i];
                const action = this.typeActionMap.get(data.type);
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
                // console.log('点击了节点');
                // 原始数据-需要转换成坐标数据
                this.emitter.trigger(InteractionLayerActions.CanvasClickGeometry, JSON.parse(JSON.stringify(finsEntitys[finsEntitys.length - 1].data)));
            }
            else {
                if (historyData.length) {
                    // console.log('点击拉画布');
                    this.emitter.trigger(InteractionLayerActions.CanvasClickEmpty);
                }
            }
        });
    }
    /**
     * initCanvas - 初始化Canvas
     */
    initCanvas() {
        // @ts-ignore
        this.el = this.canvas.parentElement;
        // 创建一个canvas
        // @ts-ignore
        this.canvasEl = this.canvas;
        // @ts-ignore
        this.el.style.width = `${this.canvasEl.width}px`;
        // @ts-ignore
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
        // 创建一个观察器实例并传入回调函数
        this.canvasObserver = new MutationObserver((mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    this.assistCanvasEl.style.left = this.canvasEl.style.left;
                    this.assistCanvasEl.style.top = this.canvasEl.style.top;
                }
            }
        });
        // 以上述配置开始观察目标节点
        this.canvasObserver.observe(this.canvasEl, {
            attributes: true,
        });
        // @ts-ignore
        this.el.appendChild(this.assistCanvasEl);
        // 触发canvasMount事件
        this.emitter.trigger(InteractionLayerActions.CanvasMount);
    }
    enableMap() {
        this.map.enableDoubleClickZoom();
        // this.map.enableInertialDragging();
        // this.map.enableDragging();
        // this.map.enableScrollWheelZoom();
        // this.map.enableContinuousZoom();
    }
    disableMap() {
        this.map.disableDoubleClickZoom();
        // this.map.disableInertialDragging();
        // this.map.disableDragging();
        // this.map.disableScrollWheelZoom();
        // this.map.disableContinuousZoom();
    }
    /**
     * pixelToPoint
     * @param pixel
     * @return IPoint
     */
    pixelToPoint(pixel) {
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
    pointToPixel(point) {
        // @ts-ignore
        return this.map.pointToPixel(new BMap.Point(point.x, point.y));
    }
    /**
     * distanceToActual - 图上距离转换成实际距离
     * @param distance 图上距离
     * @return number 实际距离
     */
    distanceToActual(distance) {
        const scale = Util.getScale(this.map);
        return distance / scale;
    }
    /**
     * actualToDistance - 实际距离转换成图上距离
     * @param actual
     */
    actualToDistance(actual) {
        const scale = Util.getScale(this.map);
        return scale * actual;
    }
    /**
     * getCtx
     * @return CanvasRenderingContext2D | null
     */
    getCtx() {
        return this.ctx;
    }
    /**
     * getCanvasEl
     * @return HTMLCanvasElement | null
     */
    getCanvasEl() {
        return this.canvasEl;
    }
    /**
     * getAssistCanvasEl
     */
    getAssistCanvasEl() {
        return this.assistCanvasEl;
    }
    getAssistCtx() {
        return this.assistCtx;
    }
    /**
     * getWidth
     * @return number
     */
    getWidth() {
        // @ts-ignore
        return this?.getCanvasEl()?.width;
    }
    /**
     * getHeight
     * @return number
     */
    getHeight() {
        // @ts-ignore
        return this?.getCanvasEl()?.height;
    }
    /**
     * addHistoryData
     * @description - 添加一个ActionData到canvasData中
     * @param data
     * @return void
     */
    addHistoryData(data) {
        this.canvasData.push(data);
    }
    /**
     * removeHistoryDataById - 删除一个ActionData中的数据
     * @param actionDataId
     * @return IActionData[]
     */
    removeHistoryDataById(actionDataId) {
        const index = this.canvasData.findIndex((data) => data.id === actionDataId);
        if (index === -1)
            return [];
        return this.canvasData.splice(index, 1);
    }
    /**
     * drawHistoryData - 绘制历史数据
     * @return void
     */
    drawHistoryData() {
        this.canvasData.forEach((data) => {
            const { ctx } = this;
            if (!ctx || !data)
                return;
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
            const action = this.typeActionMap.get(data.type);
            // @ts-ignore
            action?.drawHistoryPath(this, ctx, data.data);
            // // 描边
            // ctx.stroke();
            // // 填充
            // ctx.fill();
        });
    }
    /**
     * getHistoryDataById
     * @param id
     * @return IActionData | null | undefined
     */
    getHistoryDataById(id) {
        return this.canvasData.find((data) => data.id === id);
    }
    /**
     * getHistoryData
     * @return IActionData []
     */
    getHistoryData() {
        return [...this.canvasData];
    }
    /**
     * setHistoryData
     * @param data
     */
    setHistoryData(data) {
        this.canvasData = data;
    }
    /**
     * changeAction - 切换一个Action
     * @param action - action对象
     * @return void
     */
    changeAction(action) {
        // 如果当前和传入一致则跳过
        if (action === this.curAction)
            return;
        // 只有是未开始才能切换
        if (action && action.getStatus() !== ActionStatus.UnStart)
            return;
        this.disableMap();
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
    getCurAction() {
        return this.curAction;
    }
    /**
     * start - 开始
     * @param style
     * @return void
     */
    start(style) {
        if (!this.curAction)
            return;
        this.curAction.start(style);
    }
    /**
     * end - 结束
     * @return void
     */
    end() {
        if (!this.curAction)
            return;
        this.curAction.end();
    }
    /**
     * clear
     */
    clearDraw() {
        const { ctx } = this;
        if (!ctx)
            return;
        ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    /**
     * clearAssistDraw
     * @description 清除assist的canvas
     */
    clearAssistDraw() {
        const { assistCtx } = this;
        if (!assistCtx)
            return;
        assistCtx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    /**
     * setFrontCanvas
     * @description 置顶
     * @param canvasEl
     */
    setFrontCanvas(canvasEl) {
        canvasEl.style.zIndex = `${zIndex + 1}`;
    }
    /**
     * setBackCanvas
     * @description 置底
     * @param canvasEl
     */
    setBackCanvas(canvasEl) {
        canvasEl.style.zIndex = `${zIndex - 1}`;
    }
    /**
     * destroy - 销毁
     * @return void
     */
    destroy() {
        if (this.curAction) {
            this.curAction.destroy();
        }
        // 之后，可停止观察
        if (this.canvasObserver) {
            this.canvasObserver.disconnect();
        }
    }
    /**
     * getMap
     * @return any
     */
    getMap() {
        return this.map;
    }
}
export default InteractionLayer;
