import type { AnimationConfig } from './types';
/**
 * 位置点接口
 */
interface Location {
    id: string;
    zIndex: number;
    [key: string]: any;
}
/**
 * 动画管理器类
 * @class AnimationManager
 * @classdesc 地图轨迹播放动画管理器
 */
declare class AnimationManager {
    private running;
    private vectorSource;
    private animationMap;
    private preAnimations;
    private pointsMapIndex;
    private preActiveId;
    private handler;
    private lines;
    private pref;
    private config;
    /**
     * 构造函数
     * @param vectorSource - 向量源
     * @param config - 动画配置
     */
    constructor(vectorSource: any, config: AnimationConfig);
    /**
     * 检查动画是否正在运行
     * @returns 是否正在运行
     */
    isRun(): boolean;
    /**
     * 获取轨迹点数组
     * @param locations - 位置数组
     * @returns 轨迹点数组
     */
    getPoints(locations: number[][]): number[][];
    /**
     * 运行动画
     * @param lineData - 线条数据
     * @param pointsMapIndex - 点映射索引
     * @returns 是否成功启动
     */
    run(lineData: any, pointsMapIndex: Record<string, Location>): boolean;
    /**
     * 循环任务
     * @param it - 迭代器
     * @returns Promise
     */
    private loopTask;
    /**
     * 运行任务
     * @param points - 点数组
     * @returns Promise
     */
    private runTask;
    /**
     * 停止任务
     * @returns 是否成功停止
     */
    stopTask(): boolean;
    /**
     * 停止动画
     */
    stop(): void;
}
export default AnimationManager;
