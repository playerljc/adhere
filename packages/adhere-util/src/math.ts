export default {
  /**--------------------------math-start----------------------**/
  /**
   * toPoint - 百分数转化为小数
   * @param percent
   */
  toPoint(percent: string) {
    let str = percent.replace('%', '');

    // @ts-ignore
    return str / 100;
  },
  /**
   * point - 小数转化为百分数
   * @param point
   */
  toPercent(point) {
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
  straightLineIntersection(
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number },
    p4: { x: number; y: number },
  ): { x: number; y: number } {
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
  getA3Point({ p1, p2, distance }): { x: number; y: number } {
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
  getDistanceByBetweenPoint({ p1, p2 }): number {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
  },
  /**
   * clientToCtxPoint - 屏幕坐标转换成画布坐标
   * @param {Event} - event
   * @param {HTMLCanvasElement} - el
   * @return {x:number,y:number}
   */
  clientToCtxPoint({ event, el }): { x: number; y: number } {
    const { clientX, clientY } = event;
    const rect = el.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  },
  /**--------------------------math-end------------------------**/
};
