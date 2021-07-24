import { IPoint, ICircle } from './types';
declare const _default: {
    /**--------------------------math-start----------------------**/
    /**
     * toPoint - 百分数转化为小数
     * @param percent
     */
    toPoint(percent: string): number;
    /**
     * point - 小数转化为百分数
     * @param point
     */
    toPercent(point: number): string;
    /**
     * straightLineIntersection - 计算两个直线的交点
     * @param p1
     * @param p2
     * @param p3
     * @param p4
     */
    straightLineIntersection(p1: IPoint, p2: IPoint, p3: IPoint, p4: IPoint): IPoint;
    /**
     * getA3Piint - 计算两点p1,p2 距离p1点distance距离的点p3的坐标
     * @param {Point} - p1
     * @param {Point} - p2
     * @param {Number} - distance 与p1的距离
     * @return {{x: *, y: *}}
     */
    getA3Point({ p1, p2, distance }: {
        p1: IPoint;
        p2: IPoint;
        distance: number;
    }): IPoint;
    /**
     * getDistanceByBetweenPoint - 获取p1,p2两点间的距离
     * @param {Point} - p1
     * @param {Point} - p2
     * @return {number}
     */
    getDistanceByBetweenPoint({ p1, p2 }: {
        p1: IPoint;
        p2: IPoint;
    }): number;
    /**
     * clientToCtxPoint - 屏幕坐标转换成画布坐标
     * @param {Event} - event
     * @param {Rect} - rect
     * @return {x:number,y:number}
     */
    clientToCtxPoint({ event, rect }: {
        event: MouseEvent;
        rect: DOMRect;
    }): IPoint;
    /**
     * isPointInCircle - 判断一个点是否在圆内
     * @param point
     * @param circle
     */
    isPointInCircle(point: IPoint, circle: ICircle): boolean;
};
export default _default;
