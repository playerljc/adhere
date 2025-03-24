import Emitter from '@baifendian/adhere-util-emitter';
import Util from '../../../util';
import { InteractionLayerActions } from '../../interaction/types';
import { TrajectoryStatus } from '../../types';
const selectorPrefix = 'adhere-ui-trajectoryplaybacklayer';
/**
 * TrajectoryPlayBackLayer
 * @class TrajectoryPlayBackLayer
 * @classdesc 轨迹的回放
 */
class TrajectoryPlayBackLayer extends BMap.CanvasLayer {
    map;
    config;
    emitter = new Emitter.Events();
    isLoad = false;
    source = [];
    // 父元素
    el = null;
    // 当前的canvas元素
    canvasEl = null;
    // 当前的ctx对象
    ctx = null;
    // @ts-ignore
    constructor(map, config) {
        // @ts-ignore
        this.update = this.update.bind(this);
        super({
            // @ts-ignore
            update: this.update,
            paneName: config.paneName,
            zIndex: config.zIndex,
        });
        this.map = map;
        this.config = { ...config };
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
        // 触发canvasMount事件
        this.emitter.trigger(InteractionLayerActions.CanvasMount);
    }
    firstLoad() {
        this.initCanvas();
    }
    update() {
        // @ts-ignore
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (!this.isLoad) {
            this.firstLoad();
        }
        this.isLoad = true;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.drawHistory();
    }
    getMap() {
        return this.map;
    }
    getCtx() {
        return this.ctx;
    }
    getCanvasEl() {
        return this.canvasEl;
    }
    getEmitter() {
        return this.emitter;
    }
    pixelToPoint(pixel) {
        const point = this.map.pixelToPoint(pixel);
        return {
            x: point.lng,
            y: point.lat,
        };
    }
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
     * addTrajectory
     * @description - 添加一个轨迹
     * @param trajectory
     * @return void
     */
    addTrajectory(trajectory) {
        if (this.hasTrajectoryById(trajectory.getId()))
            return;
        this.source.push(trajectory);
        trajectory.init();
    }
    /**
     * removeTrajectory
     * @description - 删除一个轨迹
     * @param trajectory
     */
    removeTrajectory(trajectory) {
        this.removeTrajectoryById(trajectory.getId());
    }
    /**
     * removeTrajectoryById
     * @description - 通过id删除一个轨迹
     * @param id
     */
    removeTrajectoryById(id) {
        const index = this.source.findIndex((t) => t.getId() === id);
        if (index !== -1) {
            this.source[index].destroy();
            this.source.splice(index, 1);
        }
    }
    /**
     * clean
     * @description - 清空所有轨迹
     */
    clean() {
        this.source.forEach((t) => t.destroy());
        this.source = [];
    }
    /**
     * getTrajectoryById
     * @description - 根据id获取轨迹
     * @param id
     */
    getTrajectoryById(id) {
        return this.source.find((t) => t.getId() === id);
    }
    /**
     * getTrajectorys
     * @description - 获取所有的轨迹
     */
    getTrajectorys() {
        return [...this.source];
    }
    /**
     * hasTrajectoryById
     * @description - 通过id查看轨迹是否存在
     * @param id
     */
    hasTrajectoryById(id) {
        return !!this.getTrajectoryById(id);
    }
    /**
     * clear
     */
    clear() {
        const ctx = this.getCtx();
        const canvasEl = this.getCanvasEl();
        if (!ctx || !canvasEl)
            return;
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
    /**
     * drawHistory
     */
    drawHistory() {
        this.source
            .filter((s) => s.getStatus() !== TrajectoryStatus.Destroy)
            .forEach((s) => {
            s.drawHistory();
        });
    }
}
export default TrajectoryPlayBackLayer;
