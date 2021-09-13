import * as turf from '@turf/turf';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import {
  ICoordinate,
  IPixel,
  ITrajectory,
  ITrajectoryPlayBackLayer,
  TrajectoryStatus,
} from '../../types';

/**
 * Trajectory
 * @class Trajectory
 * @classdesc 一个轨迹
 */
class Trajectory implements ITrajectory {
  // 主键
  protected id: string = '';
  // 上下文
  protected context: ITrajectoryPlayBackLayer | null = null;
  // 轨迹的数据
  protected coordinates: ICoordinate[] = [];
  // 完成轨迹播放的时长(单位秒)
  protected duration: number = 0;
  // 用户自定义绘制point
  protected renderPosition:
    | (({ ctx, coordinate }: { ctx: CanvasRenderingContext2D; coordinate: ICoordinate }) => void)
    | null
    | undefined;
  // 用户自定义绘制每一个步骤
  protected renderStep: ((ctx: CanvasRenderingContext2D, pixel: IPixel) => void) | null | undefined;
  // 用户自定义绘制轨迹的箭头
  protected renderCap: () => any | null | undefined;
  // 状态
  protected status: TrajectoryStatus = TrajectoryStatus.UnInit;
  // 总的回合数
  protected boutTotal: number = 0;
  // 已经进行的回合数
  protected bout: number = 1;
  // loop的句柄
  protected loopHeader: number = -1;
  // loop的数据
  protected loopPointEntitys: Array<{ point: ICoordinate; distance: number; isStep: boolean }> = [];
  // step的数组
  protected stepEntityIndexes: number[] = [];
  // 之前的loopPixel
  protected preLoopPixel: IPixel | null = null;
  // 箭头的mark
  protected arrowMarker: any | null = null;

  constructor({
    context,
    id,
    coordinates,
    renderPosition,
    renderStep,
    renderCap,
    duration,
  }: {
    context: ITrajectoryPlayBackLayer;
    id: string;
    coordinates: ICoordinate[];
    // 持续的事件(秒)
    duration: number;
    renderPosition: ({
      ctx,
      coordinate,
    }: {
      ctx: CanvasRenderingContext2D;
      coordinate: ICoordinate;
    }) => void | null | undefined;
    renderStep: (ctx: CanvasRenderingContext2D, pixel: IPixel) => void | null | undefined;
    renderCap: () => any | null | undefined;
  }) {
    this.context = context;
    this.id = id;
    this.coordinates = coordinates;
    this.duration = duration;
    this.renderPosition = renderPosition;
    this.renderStep = renderStep;
    this.renderCap = renderCap;
  }

  /**
   * drawDefaultPosition
   * @description - 默认的点位绘制
   * @protected
   * @param coordinate
   * @param index
   */
  protected drawDefaultPosition(coordinate: ICoordinate, index: number): void {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    // 需要转换
    const pixel = context.pointToPixel({ x: coordinate.lng, y: coordinate.lat });

    // 绘制圆圈
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.ellipse(pixel.x, pixel.y, 6, 6, (45 * Math.PI) / 180, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // 绘制文字
    ctx.beginPath();
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText(`${index + 1}`, pixel.x, pixel.y, 10);
  }

  /**
   * createDefaultCap
   * @description - 创建缺省的箭头
   * @protected
   // * @param toPixel
   */
  protected createDefaultCap(/*toPixel: IPixel*/): any {
    const { context } = this;
    if (!context) return;

    // const map = context.getMap();

    // const prePoint = context.pixelToPoint(preLoopPixel);
    // const point = context.pixelToPoint(toPixel);

    // const angle = MathUtil.radianToAngle(MathUtil.slope(preLoopPixel, toPixel));

    // const angle1 =
    //   (Math.atan2(preLoopPixel.y - toPixel.y, preLoopPixel.x - toPixel.x) * 180) / Math.PI;

    // const a1 = turf.point([prePoint.x, prePoint.y], { 'marker-color': '#F00' });
    // const a2 = turf.point([point.x, point.y], { 'marker-color': '#F00' });
    // console.log('angle', angle1, angle);
    // console.log('rhumbBearing', turf.rhumbBearing(a1, a2));
    // console.log('bearing', turf.bearing(a1, a2));

    // @ts-ignore
    const myIcon = new BMap.Icon(
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMxNDU2MzQ2NjYxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc4OC40OCA1MTJMMzEyLjMyIDc4Ni45MjM1MlYyMzcuMDk2OTZ6IiBwLWlkPSI0MTM3IiBmaWxsPSIjRkZBNTAwIj48L3BhdGg+PC9zdmc+',
      // @ts-ignore
      new BMap.Size(16, 16),
    );

    // @ts-ignore
    // const pt = new BMap.Point(point.x, point.y);

    // @ts-ignore
    return new BMap.Marker(null, {
      icon: myIcon,
      // rotation: angle,
    });
  }

  /**
   * updateCap
   * @param toPixel
   * @protected
   * @description - 更新arrow的位置和旋转角度
   */
  protected updateCap(toPixel: IPixel): void {
    const { preLoopPixel, context, arrowMarker } = this;
    if (!context || !preLoopPixel || !arrowMarker) return;

    const toPoint = context.pixelToPoint(toPixel);

    const dx = toPixel.x - preLoopPixel.x;
    const dy = toPixel.y - preLoopPixel.y;
    const rotation = Math.atan2(dy, dx);
    const degrees1 = rotation * (180 / Math.PI);

    const degrees = MathUtil.slopToAngle(preLoopPixel, toPixel, 'geographic');

    console.log(-degrees1, degrees);
    // const angle = MathUtil.radianToAngle(MathUtil.slope(preLoopPixel, toPixel));

    // @ts-ignore
    arrowMarker.setPosition(new BMap.Point(toPoint.x, toPoint.y));
    arrowMarker.setRotation(degrees);
    // const angle1 =
    //   (Math.atan2(preLoopPixel.y - toPixel.y, preLoopPixel.x - toPixel.x) * 180) / Math.PI;

    // const a1 = turf.point([prePoint.x, prePoint.y], { 'marker-color': '#F00' });
    // const a2 = turf.point([point.x, point.y], { 'marker-color': '#F00' });
    // console.log('angle', angle1, angle);
    // console.log('rhumbBearing', turf.rhumbBearing(a1, a2));
    // console.log('bearing', turf.bearing(a1, a2));
  }

  /**
   * drawPosition
   * @description - 绘制位置节点
   * @protected
   */
  protected drawPosition(): void {
    const { renderPosition, coordinates, context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    coordinates.forEach((coordinate, index) => {
      // 用户自定义绘制
      if (renderPosition) {
        renderPosition({ ctx, coordinate });
      }
      // 默认绘制
      else {
        this.drawDefaultPosition(coordinate, index);
      }
    });
  }

  /**
   * drawTrajectory
   * @description - 绘制历史轨迹
   * @protected
   */
  protected drawTrajectory(): void {
    this.drawPosition();

    this.prepareLoopData();
    for (let i = 1; i < this.boutTotal; i++) {
      this.loopBout(i);
    }
    this.drawLastFrame();
    this.finishDeal();
  }

  /**
   * drawLastFrame
   * @description - 绘制最后一帧
   * @protected
   */
  protected drawLastFrame() {
    const { loopPointEntitys, context, renderStep, renderCap } = this;
    if (!context) return;
    const ctx = context.getCtx();
    if (!ctx) return;

    const lastPoint = loopPointEntitys[loopPointEntitys.length - 1];
    const lastPixel = context.pointToPixel({ x: lastPoint.point.lng, y: lastPoint.point.lat });
    ctx.beginPath();

    if (renderStep) {
      renderStep(ctx, lastPixel);
    } else {
      this.setDrawLoopStyle();
      ctx.lineTo(lastPixel.x, lastPixel.y);
      ctx.stroke();
      this.preLoopPixel = null;
    }

    this.updateCap(lastPixel);
  }

  /**
   * setDrawLoopStyle
   * @description - 设置loop绘制的上下文样式
   * @protected
   */
  protected setDrawLoopStyle(): void {
    const { context } = this;
    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 3;
    // ctx.lineCap = 'round';
  }

  /**
   * finishDeal
   * @protected - End后的清理工作
   * @protected
   */
  protected finishDeal() {
    const { context } = this;
    if (!context) return;
    const map = context.getMap();
    if (!map) return;

    if (this.loopHeader !== -1) {
      window.cancelAnimationFrame(this.loopHeader);
    }
    this.loopHeader = -1;
    this.bout = 1;
    this.boutTotal = 0;
    this.loopPointEntitys = [];
    this.stepEntityIndexes = [];
    this.preLoopPixel = null;

    if (this.arrowMarker) {
      map.removeOverlay(this.arrowMarker);
    }

    this.arrowMarker = null;
  }

  /**
   * loopBout
   * @description - 绘制一个回合
   * @param bout
   * @protected
   */
  protected loopBout(bout: number) {
    const { context, loopPointEntitys, stepEntityIndexes, renderStep, renderCap } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    const map = context.getMap();

    // 先执行一次
    const curStartStepIndex = bout === 1 ? 0 : stepEntityIndexes[bout - 2];
    const curEndStepIndex = stepEntityIndexes[bout - 1];

    for (let i = curStartStepIndex; i < curEndStepIndex; i++) {
      const { point } = loopPointEntitys[i];
      const pixel = context.pointToPixel({ x: point.lng, y: point.lat });

      if (this.preLoopPixel) {
        this.updateCap(pixel);
      } else {
        // 创建
        if (renderCap) {
          this.arrowMarker = renderCap();
        } else {
          this.arrowMarker = this.createDefaultCap();
        }

        map.addOverlay(this.arrowMarker);
      }

      if (renderStep) {
        renderStep(ctx, pixel);
      } else {
        if (!this.preLoopPixel) {
          ctx.beginPath();
          this.setDrawLoopStyle();
          ctx.moveTo(pixel.x, pixel.y);
          this.preLoopPixel = pixel;
        } else {
          ctx.lineTo(pixel.x, pixel.y);
          ctx.stroke();
          ctx.beginPath();
          this.setDrawLoopStyle();
          ctx.moveTo(pixel.x, pixel.y);
          // 0 1 2 3 4 5
        }
      }
    }
  }

  /**
   * loop
   * @description - loop的迭代
   * @protected
   */
  protected loop() {
    // 2 5
    // 0 1   (2)     3 4    (5)
    if (this.status === TrajectoryStatus.Pause) return;

    this.loopHeader = window.requestAnimationFrame(() => {
      const { context } = this;
      if (!context) return;
      const ctx = context.getCtx();
      if (!ctx) return;

      this.loopBout(this.bout);

      // 回合++
      this.bout++;

      // 结束了
      if (this.bout >= this.boutTotal) {
        // 绘制最后一个点
        this.drawLastFrame();

        this.finishDeal();
        this.status = TrajectoryStatus.End;

        return;
      } else {
        this.loop();
      }
    });
  }

  /**
   * prepareLoopData
   * @description - 准备loop的数据
   * @protected
   */
  protected prepareLoopData(): void {
    // 计算沿线的点

    /**
     * 整体的思路
     * 1. 将所有原始点生成一个结构 {
     *   point: {x,y},
     *   distance: 沿线的距离(第一个点为0)单位为m
     *   isStep: boolean(是否为步进的点) false
     * }
     *
     * 2.总的距离 / (duration * 60) 获取步进
     * 计算每一次的步进 生成 {
     *   point: {x,y},
     *   distance: 沿线的距离(第一个点为0)单位为m
     *   isStep: boolean(是否为步进的点) true
     * }
     *
     * 3.将1,2按照distance从小到大整合到一起
     *
     * 4.开始播放
     */
    const { duration, coordinates } = this;

    // 1.origin
    const origin: Array<{ point: ICoordinate; distance: number; isStep: boolean }> = [];
    coordinates.reduce((total, coordinate, index) => {
      const distance =
        index === 0
          ? 0
          : turf.convertLength(
              turf.distance(
                turf.point([coordinates[index - 1].lng, coordinates[index - 1].lat]),
                turf.point([coordinate.lng, coordinate.lat]),
                {
                  units: 'kilometers',
                },
              ),
              'kilometers',
              'meters',
            );

      origin.push({
        point: coordinate,
        distance: total + distance,
        isStep: false,
      });

      return total + distance;
    }, 0);

    // 2.target
    const line = turf.lineString(coordinates.map((coordinate) => [coordinate.lng, coordinate.lat]));
    // 总长(m)
    const length = turf.convertLength(
      turf.length(line, { units: 'kilometers' }),
      'kilometers',
      'meters',
    );
    // 总的回合数
    this.boutTotal = duration * 60;
    // 步进(m)
    const step = length / this.boutTotal;
    // target
    const target: Array<{ point: ICoordinate; distance: number; isStep: boolean }> = [];
    for (let i = 0; i < this.boutTotal; i++) {
      // 每一步的距离
      const stepDistance = (i + 1) * step;
      const turfPoint = turf.along(line, turf.convertLength(stepDistance, 'meters', 'kilometers'), {
        units: 'kilometers',
      });
      target.push({
        point: { lng: turfPoint.geometry.coordinates[0], lat: turfPoint.geometry.coordinates[1] },
        distance: stepDistance,
        isStep: true,
      });
    }

    // 3.sortMerge(按距离从小到大进行排序)
    this.loopPointEntitys = [...origin, ...target];
    this.loopPointEntitys.sort((p1, p2) => {
      if (p1.distance > p2.distance) return 1;
      else if (p1.distance < p2.distance) return -1;
      else return 0;
    });

    this.stepEntityIndexes = [];
    this.loopPointEntitys.forEach((pointEntity, index) => {
      if (pointEntity.isStep) {
        this.stepEntityIndexes.push(index);
      }
    });
  }

  /**
   * init
   * @description - 初始化轨迹
   */
  init(): void {
    if (this.status !== TrajectoryStatus.UnInit) return;

    // 初始化就是先把轨迹点绘制上
    this.drawPosition();

    // 修改状态为初始化完成
    this.status = TrajectoryStatus.Init;
  }

  /**
   * start
   * @description - 开始
   */
  start(): void {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    if (
      ![TrajectoryStatus.Init, TrajectoryStatus.End, TrajectoryStatus.Pause].includes(this.status)
    ) {
      return;
    }

    if ([TrajectoryStatus.Pause, TrajectoryStatus.End].includes(this.status)) {
      if (TrajectoryStatus.Pause === this.status) {
        this.finishDeal();
      }

      context.clear();

      // 画历史
      context.drawHistory();
    }

    // 修改状态为运行状态
    this.status = TrajectoryStatus.Running;

    // 准备loop数据
    this.prepareLoopData();

    // execute
    this.loop();
  }

  /**
   * pause
   * @description - 暂停
   */
  pause(): void {
    this.status = TrajectoryStatus.Pause;
  }

  /**
   * resume
   * @description -恢复
   */
  resume(): void {
    this.status = TrajectoryStatus.Running;
  }

  /**
   * finish
   * @description - 结束
   */
  finish(): void {
    const { context } = this;

    if (!context) return;

    if ([TrajectoryStatus.End, TrajectoryStatus.Destroy].includes(this.status)) return;

    // 如果没画完画完
    this.finishDeal();
    this.status = TrajectoryStatus.End;
  }

  /**
   * description
   * @description - 销毁
   */
  destroy(): void {
    if (this.status === TrajectoryStatus.Destroy) return;

    const { context } = this;

    if (!context) return;

    this.finishDeal();

    context.clear();

    // 画历史
    context.drawHistory();

    this.status = TrajectoryStatus.Destroy;

    context.removeTrajectoryById(this.id);
  }

  getId(): string {
    return this.id;
  }

  getStatus(): TrajectoryStatus {
    return this.status;
  }

  /**
   * drawHistory
   * @description - 绘制clear之后的历史轨迹
   */
  drawHistory(): void {
    const { status } = this;

    if (TrajectoryStatus.Init === status) {
      this.drawPosition();
    } else if (TrajectoryStatus.End === status) {
      this.drawTrajectory();
    }
    if ([TrajectoryStatus.Pause, TrajectoryStatus.Running].includes(status)) {
      this.drawPosition();
      // 绘制历史
      for (let i = 1; i < this.bout; i++) {
        this.loopBout(i);
      }
    }
  }
}

export default Trajectory;
