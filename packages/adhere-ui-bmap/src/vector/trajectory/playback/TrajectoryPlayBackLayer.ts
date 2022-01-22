import Emitter from '@baifendian/adhere-util-emitter';

import { ITrajectory, ITrajectoryPlayBackLayer, TrajectoryStatus } from '../../types';
import { InteractionLayerActions, IPoint } from '../../interaction/types';
import Util from '../../../util';

const selectorPrefix = 'adhere-ui-trajectoryplaybacklayer';

/**
 * TrajectoryPlayBackLayer
 * @class TrajectoryPlayBackLayer
 * @classdesc 轨迹的回放
 */
class TrajectoryPlayBackLayer extends BMap.CanvasLayer implements ITrajectoryPlayBackLayer {
  protected map: any;
  protected config: {
    paneName:
      | 'floatPane'
      | 'floatShadow'
      | 'labelPane'
      | 'mapPane'
      | 'markerMouseTarget'
      | 'markerPane'
      | 'markerShadow'
      | 'vertexPane';
    zIndex: number;
  };
  protected emitter: Emitter = new Emitter.Events();
  protected isLoad: boolean = false;
  protected source: ITrajectory[] = [];

  // 父元素
  protected el: HTMLElement | null = null;
  // 当前的canvas元素
  protected canvasEl: HTMLCanvasElement | null = null;
  // 当前的ctx对象
  protected ctx: CanvasRenderingContext2D | null = null;

  // @ts-ignore
  constructor(
    map,
    config: {
      paneName:
        | 'floatPane'
        | 'floatShadow'
        | 'labelPane'
        | 'mapPane'
        | 'markerMouseTarget'
        | 'markerPane'
        | 'markerShadow'
        | 'vertexPane';
      zIndex: number;
    },
  ) {
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
  protected initCanvas(): void {
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

  protected firstLoad() {
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

  getCtx(): CanvasRenderingContext2D | null {
    return this.ctx;
  }

  getCanvasEl(): HTMLCanvasElement | null {
    return this.canvasEl;
  }

  getEmitter(): Emitter.Events {
    return this.emitter;
  }

  pixelToPoint(pixel: IPoint): IPoint {
    const point = this.map.pixelToPoint(pixel);

    return {
      x: point.lng,
      y: point.lat,
    };
  }

  pointToPixel(point: IPoint): IPoint {
    // @ts-ignore
    return this.map.pointToPixel(new BMap.Point(point.x, point.y));
  }

  /**
   * distanceToActual - 图上距离转换成实际距离
   * @param distance 图上距离
   * @return number 实际距离
   */
  distanceToActual(distance: number): number {
    const scale = Util.getScale(this.map);
    return distance / scale;
  }

  /**
   * actualToDistance - 实际距离转换成图上距离
   * @param actual
   */
  actualToDistance(actual: number): number {
    const scale = Util.getScale(this.map);
    return scale * actual;
  }

  /**
   * addTrajectory
   * @description - 添加一个轨迹
   * @param trajectory
   * @return void
   */
  addTrajectory(trajectory: ITrajectory): void {
    if (this.hasTrajectoryById(trajectory.getId())) return;

    this.source.push(trajectory);

    trajectory.init();
  }

  /**
   * removeTrajectory
   * @description - 删除一个轨迹
   * @param trajectory
   */
  removeTrajectory(trajectory: ITrajectory): void {
    this.removeTrajectoryById(trajectory.getId());
  }

  /**
   * removeTrajectoryById
   * @description - 通过id删除一个轨迹
   * @param id
   */
  removeTrajectoryById(id: string): void {
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
  clean(): void {
    this.source.forEach((t) => t.destroy());
    this.source = [];
  }

  /**
   * getTrajectoryById
   * @description - 根据id获取轨迹
   * @param id
   */
  getTrajectoryById(id: string): ITrajectory | null | undefined {
    return this.source.find((t) => t.getId() === id);
  }

  /**
   * getTrajectorys
   * @description - 获取所有的轨迹
   */
  getTrajectorys(): ITrajectory[] {
    return [...this.source];
  }

  /**
   * hasTrajectoryById
   * @description - 通过id查看轨迹是否存在
   * @param id
   */
  hasTrajectoryById(id: string): boolean {
    return !!this.getTrajectoryById(id);
  }

  /**
   * clear
   */
  clear(): void {
    const ctx = this.getCtx();
    const canvasEl = this.getCanvasEl();

    if (!ctx || !canvasEl) return;

    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }

  /**
   * drawHistory
   */
  drawHistory(): void {
    this.source
      .filter((s) => s.getStatus() !== TrajectoryStatus.Destroy)
      .forEach((s) => {
        s.drawHistory();
      });
  }
}

export default TrajectoryPlayBackLayer;
