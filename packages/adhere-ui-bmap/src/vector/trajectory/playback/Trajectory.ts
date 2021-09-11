import * as turf from '@turf/turf';
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
  protected id: string = '';
  protected context: ITrajectoryPlayBackLayer | null = null;
  protected coordinates: ICoordinate[] = [];
  protected duration: number = 0;
  protected renderPosition:
    | (({ ctx, coordinate }: { ctx: CanvasRenderingContext2D; coordinate: ICoordinate }) => void)
    | null
    | undefined;
  protected renderStep: ((ctx: CanvasRenderingContext2D, pixel: IPixel) => void) | null | undefined;
  protected renderCap: ((ctx: CanvasRenderingContext2D) => void) | null | undefined;
  protected status: TrajectoryStatus = TrajectoryStatus.UnInit;
  // 总的回合数
  protected boutTotal: number = 0;
  // 已经进行的回合数
  protected bout: number = 1;
  // loop的句柄
  protected loopHeader: number = -1;
  // loop的数据
  protected loopPointEntitys: Array<{ point: ICoordinate; distance: number; isStep: boolean }> = [];

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
    renderCap: (ctx: CanvasRenderingContext2D) => void | null | undefined;
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
   * @description - 默认绘制
   * @protected
   * @param coordinate
   * @param index
   */
  protected drawDefaultPosition(coordinate: ICoordinate, index: number): void {
    const { context } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    const pixel = context.pointToPixel({ x: coordinate.lng, y: coordinate.lat });

    // 绘制圆圈
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 1;
    // 需要转换
    ctx.ellipse(pixel.x, pixel.y, 10, 10, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    // 绘制文字
    ctx.beginPath();
    ctx.font = '8px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText(`${index + 1}`, pixel.x, pixel.y, 10);
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
   * setDrawLoopStyle
   * @protected
   */
  protected setDrawLoopStyle(): void {
    const { context } = this;
    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
  }

  protected finishDeal() {
    if (this.loopHeader !== -1) {
      window.cancelAnimationFrame(this.loopHeader);
    }
    this.loopHeader = -1;
    this.bout = 1;
    this.boutTotal = 0;
    this.loopPointEntitys = [];
  }

  protected loopBout(bout: number) {
    const { context, loopPointEntitys, renderStep, renderCap } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    // 先执行一次
    const stepEntityIndexes: number[] = [];
    loopPointEntitys.forEach((pointEntity, index) => {
      if (pointEntity.isStep) {
        stepEntityIndexes.push(index);
      }
    });

    const curStartStepIndex = bout === 1 ? 0 : stepEntityIndexes[bout - 2];
    const curEndStepIndex = stepEntityIndexes[bout - 1];

    for (let i = curStartStepIndex; i < curEndStepIndex; i++) {
      const { point } = loopPointEntitys[i];
      const pixel = context.pointToPixel({ x: point.lng, y: point.lat });

      ctx.beginPath();
      if (renderStep) {
        renderStep(ctx, pixel);
      } else {
        this.setDrawLoopStyle();
        ctx.lineTo(pixel.x, pixel.y);
      }
    }
  }

  /**
   * loop
   * @description - 迭代
   * @protected
   */
  protected loop() {
    // 2 5
    // 0 1   (2)     3 4    (5)
    if (this.status === TrajectoryStatus.Pause) return;

    this.loopHeader = window.requestAnimationFrame(() => {
      const { context, loopPointEntitys, renderStep } = this;
      if (!context) return;
      const ctx = context.getCtx();
      if (!ctx) return;

      this.loopBout(this.bout);

      // 回合++
      this.bout++;

      // 结束了
      if (this.bout >= this.boutTotal) {
        // 绘制最后一个点
        const lastPoint = loopPointEntitys[loopPointEntitys.length - 1];
        const lastPixel = context.pointToPixel({ x: lastPoint.point.lng, y: lastPoint.point.lat });
        ctx.beginPath();
        if (renderStep) {
          renderStep(ctx, lastPixel);
        } else {
          this.setDrawLoopStyle();
          ctx.lineTo(lastPixel.x, lastPixel.y);
        }

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

    if ([TrajectoryStatus.Pause, TrajectoryStatus.End]) {
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

  pause(): void {
    this.status = TrajectoryStatus.Pause;
  }

  resume(): void {
    this.status = TrajectoryStatus.Running;
  }

  finish(): void {
    const { context } = this;

    if (!context) return;

    if ([TrajectoryStatus.End, TrajectoryStatus.Destroy].includes(this.status)) return;

    // 如果没画完画完
    this.finishDeal();
    this.status = TrajectoryStatus.End;
  }

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

  drawHistory(): void {
    const { status } = this;

    if ([TrajectoryStatus.Init, TrajectoryStatus.End].includes(status)) {
      this.drawPosition();
    } else if ([TrajectoryStatus.Pause, TrajectoryStatus.Running].includes(status)) {
      this.drawPosition();
      // 绘制历史
      for (let i = 1; i < this.bout; i++) {
        this.loopBout(i);
      }
    }
  }
}

export default Trajectory;
