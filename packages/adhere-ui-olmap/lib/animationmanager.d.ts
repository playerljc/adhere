export default AnimationManager;
/**
 * AnimationManager
 * @class AnimationManager
 * @classdesc 地图轨迹播放动画
 */
declare class AnimationManager {
    constructor(vectorSource: any, config: any);
    runing: boolean;
    vectorSource: any;
    animationMap: any[];
    preAnimations: any[];
    config: any;
    isRun(): boolean;
    getPoints(locations: any): any[][];
    run(lineData: any, pointsMapIndex: any): false | undefined;
    pointsMapIndex: any;
    loopTask(it: any): Promise<any>;
    runTask(points: any): Promise<any>;
    preActiveId: string | undefined;
    pref: any;
    lines: any[] | undefined;
    handler: any;
    stopTask(): false | undefined;
    stop(): void;
}
