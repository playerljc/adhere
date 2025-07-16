import { Events } from '@baifendian/adhere-util-emitter';
import { IPoint } from '../../interaction/types';
import { ITrajectory, ITrajectoryPlayBackLayer } from '../../types';
/**
 * TrajectoryPlayBackLayer
 * @class TrajectoryPlayBackLayer
 * @classdesc 轨迹的回放
 */
declare class TrajectoryPlayBackLayer extends BMap.CanvasLayer implements ITrajectoryPlayBackLayer {
    protected map: any;
    protected config: {
        paneName: 'floatPane' | 'floatShadow' | 'labelPane' | 'mapPane' | 'markerMouseTarget' | 'markerPane' | 'markerShadow' | 'vertexPane';
        zIndex: number;
    };
    protected emitter: Events;
    protected isLoad: boolean;
    protected source: ITrajectory[];
    protected el: HTMLElement | null;
    protected canvasEl: HTMLCanvasElement | null;
    protected ctx: CanvasRenderingContext2D | null;
    constructor(map: any, config: {
        paneName: 'floatPane' | 'floatShadow' | 'labelPane' | 'mapPane' | 'markerMouseTarget' | 'markerPane' | 'markerShadow' | 'vertexPane';
        zIndex: number;
    });
    /**
     * initCanvas - 初始化Canvas
     */
    protected initCanvas(): void;
    protected firstLoad(): void;
    update(): void;
    getMap(): any;
    getCtx(): CanvasRenderingContext2D | null;
    getCanvasEl(): HTMLCanvasElement | null;
    getEmitter(): Events;
    pixelToPoint(pixel: IPoint): IPoint;
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
     * addTrajectory
     * @description - 添加一个轨迹
     * @param trajectory
     * @return void
     */
    addTrajectory(trajectory: ITrajectory): void;
    /**
     * removeTrajectory
     * @description - 删除一个轨迹
     * @param trajectory
     */
    removeTrajectory(trajectory: ITrajectory): void;
    /**
     * removeTrajectoryById
     * @description - 通过id删除一个轨迹
     * @param id
     */
    removeTrajectoryById(id: string): void;
    /**
     * clean
     * @description - 清空所有轨迹
     */
    clean(): void;
    /**
     * getTrajectoryById
     * @description - 根据id获取轨迹
     * @param id
     */
    getTrajectoryById(id: string): ITrajectory | null | undefined;
    /**
     * getTrajectorys
     * @description - 获取所有的轨迹
     */
    getTrajectorys(): ITrajectory[];
    /**
     * hasTrajectoryById
     * @description - 通过id查看轨迹是否存在
     * @param id
     */
    hasTrajectoryById(id: string): boolean;
    /**
     * clear
     */
    clear(): void;
    /**
     * drawHistory
     */
    drawHistory(): void;
}
export default TrajectoryPlayBackLayer;
