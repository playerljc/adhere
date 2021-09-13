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
   * @param fromPoint
   * @param toPoint
   * @return IPoint
   */
  midpoint(fromPoint: IPoint, toPoint: IPoint): IPoint {
    return { x: (fromPoint.x + toPoint.x) / 2, y: (fromPoint.y + toPoint.y) / 2 };
  },
  /**
   * slope - 计算两个点的斜率
   * @param fromPoint
   * @param toPoint
   * @param axis - 'cartesian' | 'geographic'
   * @return number | undefined
   */
  slope(
    fromPoint: IPoint,
    toPoint: IPoint,
    // cartesian 平面直角坐标系
    // geographic 地理坐标系
    axis: 'cartesian' | 'geographic' = 'geographic',
  ): number | undefined {
    // 垂直
    if (fromPoint.x === toPoint.x) return undefined;

    // 平行
    if (fromPoint.y === toPoint.y) return 0;

    // 有角度
    const slope = (toPoint.y - fromPoint.y) / (toPoint.x - fromPoint.x);

    // 如果是地理坐标系则取负值
    return axis === 'geographic' ? -slope : slope;
  },
  /**
   * slopToRadian - 获取两点斜率的弧度
   * @param fromPoint
   * @param toPoint
   * @param axis cartesian(平面) | geographic(地理)
   */
  slopToRadian(
    fromPoint: IPoint,
    toPoint: IPoint,
    axis: 'cartesian' | 'geographic' = 'geographic',
  ): number {
    // 斜率
    const slope = this.slope(fromPoint, toPoint);

    // 垂直
    if (slope === 0) {
      return fromPoint.x < toPoint.x ? this.angleToRadian(0) : this.angleToRadian(180);
    }
    // 平行
    else if (slope === undefined) {
      return axis === 'cartesian'
        ? fromPoint.y <= toPoint.y
          ? this.angleToRadian(90)
          : this.angleToRadian(-90)
        : fromPoint.y <= toPoint.y
        ? this.angleToRadian(-90)
        : this.angleToRadian(90);
    }
    // 有角度
    else {
      const dy = toPoint.y - fromPoint.y;
      const dx = toPoint.x - fromPoint.x;
      const degrees = Math.atan2(dy, dx);
      return axis === 'cartesian' ? degrees : -degrees;
    }
  },
  /**
   * slopToAngle - 获取两点斜率的角度
   * @param fromPoint
   * @param toPoint
   * @param axis
   * @return number - 角度
   */
  slopToAngle(
    fromPoint: IPoint,
    toPoint: IPoint,
    axis: 'cartesian' | 'geographic' = 'geographic',
  ): number {
    // 获取斜率的弧度
    const slopRadian = this.slopToRadian(fromPoint, toPoint, axis);

    // 弧度转换成角度
    return this.radianToAngle(slopRadian);
  },
  /**
   * radianToAngle - 弧度转换成角度
   * @param radian - 弧度
   * @return number - 角度
   */
  radianToAngle(radian: number): number {
    return (180 * radian) / Math.PI;
  },
  /**
   * angleToRadian - 角度转弧度
   * @param angle - 角度
   * @return number - 弧度
   */
  angleToRadian(angle): number {
    return (angle * Math.PI) / 180;
  },
  /**
   * distance - 距离
   * @param value - 数值(m)
   * @param unit - 单位
   * @return 转换后的数值
   */
  distance(value: number, unit: 'kilometer'): number {
    const map = new Map<string, number>([['kilometer', 1000]]);

    // @ts-ignore
    return value / map.get(unit);
  },
  /**--------------------------math-end------------------------**/
};
