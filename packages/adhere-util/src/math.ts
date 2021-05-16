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
  /**--------------------------math-end------------------------**/
};
