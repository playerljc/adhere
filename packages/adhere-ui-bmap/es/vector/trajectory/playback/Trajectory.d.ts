import { ICoordinate, IPixel, ITrajectory, ITrajectoryPlayBackLayer, TrajectoryStatus } from '../../types';
/**
 * Trajectory
 * @class Trajectory
 * @classdesc 一个轨迹
 */
declare class Trajectory implements ITrajectory {
    protected id: string;
    protected context: ITrajectoryPlayBackLayer | null;
    protected coordinates: ICoordinate[];
    protected duration: number;
    protected renderPosition: (({ ctx, coordinate }: {
        ctx: CanvasRenderingContext2D;
        coordinate: ICoordinate;
    }) => void) | null | undefined;
    protected renderStep: ((ctx: CanvasRenderingContext2D, pixel: IPixel) => void) | null | undefined;
    protected renderCap: () => any | null | undefined;
    protected status: TrajectoryStatus;
    protected boutTotal: number;
    protected bout: number;
    protected loopHeader: number;
    protected loopPointEntitys: Array<{
        point: ICoordinate;
        distance: number;
        isStep: boolean;
    }>;
    protected stepEntityIndexes: number[];
    protected preLoopPixel: IPixel | null;
    protected arrowMarker: any | null;
    constructor({ context, id, coordinates, renderPosition, renderStep, renderCap, duration, }: {
        context: ITrajectoryPlayBackLayer;
        id: string;
        coordinates: ICoordinate[];
        duration: number;
        renderPosition: ({ ctx, coordinate, }: {
            ctx: CanvasRenderingContext2D;
            coordinate: ICoordinate;
        }) => void | null | undefined;
        renderStep: (ctx: CanvasRenderingContext2D, pixel: IPixel) => void | null | undefined;
        renderCap: () => any | null | undefined;
    });
    /**
     * drawDefaultPosition
     * @description - 默认的点位绘制
     * @protected
     * @param coordinate
     * @param index
     */
    protected drawDefaultPosition(coordinate: ICoordinate, index: number): void;
    /**
     * createDefaultCap
     * @description - 创建缺省的箭头
     * @protected
     // * @param toPixel
     */
    protected createDefaultCap(): any;
    /**
     * updateCap
     * @param toPixel
     * @protected
     * @description - 更新arrow的位置和旋转角度
     */
    protected updateCap(toPixel: IPixel): void;
    /**
     * drawPosition
     * @description - 绘制位置节点
     * @protected
     */
    protected drawPosition(): void;
    /**
     * drawTrajectory
     * @description - 绘制历史轨迹
     * @protected
     */
    protected drawTrajectory(): void;
    /**
     * drawLastFrame
     * @description - 绘制最后一帧
     * @protected
     */
    protected drawLastFrame(): void;
    /**
     * setDrawLoopStyle
     * @description - 设置loop绘制的上下文样式
     * @protected
     */
    protected setDrawLoopStyle(): void;
    /**
     * finishDeal
     * @protected - End后的清理工作
     * @protected
     */
    protected finishDeal(): void;
    /**
     * loopBout
     * @description - 绘制一个回合
     * @param bout
     * @protected
     */
    protected loopBout(bout: number): void;
    /**
     * loop
     * @description - loop的迭代
     * @protected
     */
    protected loop(): void;
    /**
     * prepareLoopData
     * @description - 准备loop的数据
     * @protected
     */
    protected prepareLoopData(): void;
    /**
     * init
     * @description - 初始化轨迹
     */
    init(): void;
    /**
     * start
     * @description - 开始
     */
    start(): void;
    /**
     * pause
     * @description - 暂停
     */
    pause(): void;
    /**
     * resume
     * @description -恢复
     */
    resume(): void;
    /**
     * finish
     * @description - 结束
     */
    finish(): void;
    /**
     * description
     * @description - 销毁
     */
    destroy(): void;
    getId(): string;
    getStatus(): TrajectoryStatus;
    /**
     * drawHistory
     * @description - 绘制clear之后的历史轨迹
     */
    drawHistory(): void;
}
export default Trajectory;
