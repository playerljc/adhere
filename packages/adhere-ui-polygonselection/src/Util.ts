import { IPoint } from './types';

export default {
  /**
   * getRectLeftTopPoint - 获取矩形左上角坐标
   * @param startPoint
   * @param targetPoint
   * @return IPoint
   */
  getRectLeftTopPoint({ startPoint, targetPoint }): IPoint | null {
    if (targetPoint.x <= startPoint.x && targetPoint.y <= startPoint.y) {
      // leftTop
      return targetPoint;
    } else if (targetPoint.x <= startPoint.x && targetPoint.y >= startPoint.y) {
      // leftBottom
      return {
        x: targetPoint.x,
        y: startPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y <= startPoint.y) {
      // rightTop
      return {
        x: startPoint.x,
        y: targetPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y >= startPoint.y) {
      // rightBottom
      return startPoint;
    }

    return null;
  },
  /**
   * triangle - 获取三角形三个点坐标
   * @param startPoint
   * @param targetPoint
   * @return IPoint[]
   */
  triangle({ startPoint, targetPoint }): IPoint[] {
    const s = this.getRectLeftTopPoint({ startPoint, targetPoint });

    if (!s) return [];

    const w = Math.abs(targetPoint.x - startPoint.x);
    const h = Math.abs(targetPoint.y - startPoint.y);

    const point1 = {
      x: s.x,
      y: s.y + h,
    };

    const point2 = {
      x: s.x + w / 2,
      y: s.y,
    };

    const point3 = {
      x: s.x + w,
      y: s.y + h,
    };

    return [point1, point2, point3];
  },
};
