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
    /**
     * isPointInRect - 点是否在矩形中
     * @param point
     * @param rect 1 2 3 4 5 6 7 8 9 10
     */
    isPointInRect(point: IPoint, rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): boolean;
    /**
     * getCanvasTextInGemX
     * @description - 获取一个文本在Rect中的居中的X位置
     * @param ctx
     * @param text
     * @param rect
     */
    getCanvasTextInGemX(ctx: CanvasRenderingContext2D, text: string, rect: {
        leftTop: IPoint;
        rightBottom: IPoint;
    }): number;
    /**
     * midpoint - 计算两个点的中心点
     * @param fromPoint
     * @param toPoint
     * @return IPoint
     */
    midpoint(fromPoint: IPoint, toPoint: IPoint): IPoint;
    /**
     * slope - 计算两个点的斜率
     * @param fromPoint
     * @param toPoint
     * @param axis - 'cartesian' | 'geographic'
     * @return number | undefined
     */
    slope(fromPoint: IPoint, toPoint: IPoint, axis?: 'cartesian' | 'geographic'): number | undefined;
    /**
     * slopToRadian - 获取两点斜率的弧度
     * @param fromPoint
     * @param toPoint
     * @param axis cartesian(平面) | geographic(地理)
     */
    slopToRadian(fromPoint: IPoint, toPoint: IPoint, axis?: 'cartesian' | 'geographic'): number;
    /**
     * slopToAngle - 获取两点斜率的角度
     * @param fromPoint
     * @param toPoint
     * @param axis
     * @return number - 角度
     */
    slopToAngle(fromPoint: IPoint, toPoint: IPoint, axis?: 'cartesian' | 'geographic'): number;
    /**
     * radianToAngle - 弧度转换成角度
     * @param radian - 弧度
     * @return number - 角度
     */
    radianToAngle(radian: number): number;
    /**
     * angleToRadian - 角度转弧度
     * @param angle - 角度
     * @return number - 弧度
     */
    angleToRadian(angle: any): number;
    /**
     * distance - 距离
     * @param value - 数值(m)
     * @param unit - 单位
     * @return 转换后的数值
     */
    distance(value: number, unit: 'kilometer'): number;
};
export default _default;
