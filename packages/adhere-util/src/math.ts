import { IPoint, ICircle } from './types';

export default {
  /**--------------------------math-start----------------------**/
  /**
   * toPoint - 百分数转化为小数
   * @param percent
   */
  toPoint(percent: string): number {
    let str = percent.replace('%', '');

    // @ts-ignore
    return str / 100;
  },
  /**
   * point - 小数转化为百分数
   * @param point
   */
  toPercent(point: number): string {
    let str = Number(point * 100).toFixed(1);

    str += '%';

    return str;
  },
  /**
   * straightLineIntersection - 计算两个直线的交点
   * @param p1
   * @param p2
   * @param p3
   * @param p4
   */
  straightLineIntersection(p1: IPoint, p2: IPoint, p3: IPoint, p4: IPoint): IPoint {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const { x: x3, y: y3 } = p3;
    const { x: x4, y: y4 } = p4;

    return {
      x:
        ((x3 - x4) * (x2 * y1 - x1 * y2) - (x1 - x2) * (x4 * y3 - x3 * y4)) /
        ((x3 - x4) * (y1 - y2) - (x1 - x2) * (y3 - y4)),
      y:
        ((y3 - y4) * (y2 * x1 - y1 * x2) - (y1 - y2) * (y4 * x3 - y3 * x4)) /
        ((y3 - y4) * (x1 - x2) - (y1 - y2) * (x3 - x4)),
    };
  },
  /**
   * getA3Piint - 计算两点p1,p2 距离p1点distance距离的点p3的坐标
   * @param {Point} - p1
   * @param {Point} - p2
   * @param {Number} - distance 与p1的距离
   * @return {{x: *, y: *}}
   */
  getA3Point({ p1, p2, distance }: { p1: IPoint; p2: IPoint; distance: number }): IPoint {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    const dLA1A2 = Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
    const Ax3 = (distance / dLA1A2) * (Ax2 - Ax1) + Ax1; // A3的横坐标
    const Ay3 = (distance / dLA1A2) * (Ay2 - Ay1) + Ay1; // A3的横坐标
    return {
      x: Ax3,
      y: Ay3,
    };
  },
  /**
   * getDistanceByBetweenPoint - 获取p1,p2两点间的距离
   * @param {Point} - p1
   * @param {Point} - p2
   * @return {number}
   */
  getDistanceByBetweenPoint({ p1, p2 }: { p1: IPoint; p2: IPoint }): number {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
  },
  /**
   * clientToCtxPoint - 屏幕坐标转换成画布坐标
   * @param {Event} - event
   * @param {Rect} - rect
   * @return {x:number,y:number}
   */
  clientToCtxPoint({ event, rect }: { event: MouseEvent; rect: DOMRect }): IPoint {
    const { clientX, clientY } = event;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  },
  /**
   * isPointInCircle - 判断一个点是否在圆内
   * @param point
   * @param circle
   */
  isPointInCircle(point: IPoint, circle: ICircle): boolean {
    const _x = point.x - circle.center.x;
    const _y = point.y - circle.center.y;
    return !(_x * _x + _y * _y > circle.radius * circle.radius);
  },
  /**
   * isPointInRect - 点是否在矩形中
   * @param point
   * @param rect 1 2 3 4 5 6 7 8 9 10
   */
  isPointInRect(point: IPoint, rect: { x: number; y: number; width: number; height: number }) {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width - 1 &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height - 1
    );
  },
  /**
   * getCanvasTextInGemX
   * @description - 获取一个文本在Rect中的居中的X位置
   * @param ctx
   * @param text
   * @param rect
   */
  getCanvasTextInGemX(
    ctx: CanvasRenderingContext2D,
    text: string,
    rect: { leftTop: IPoint; rightBottom: IPoint },
  ): number {
    const left = rect.leftTop.x;
    const right = rect.rightBottom.x;
    const rectWidth = right - left;
    const { width: textWidth } = ctx.measureText(text);

    return (rectWidth - textWidth) / 2;
  },
  /**
   * midpoint - 计算两个点的中心点
   * @param point1
   * @param point2
   * @return IPoint
   */
  midpoint(point1: IPoint, point2: IPoint): IPoint {
    return { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 };
  },
  /**--------------------------math-end------------------------**/
};
