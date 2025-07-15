import { CircleData, IPoint, OutCircleData, RectangleData } from './types';

/**
 * 工具类
 * @class Util
 * @classdesc 提供多边形选择相关的工具方法
 */
class Util {
  /**
   * 获取矩形的左上角坐标
   * @param startPoint - 起始点
   * @param targetPoint - 目标点
   * @returns 左上角坐标点，如果参数无效则返回null
   * @description 根据两个点计算矩形的左上角坐标
   */
  static getRectLeftTopPoint({
    startPoint,
    targetPoint,
  }: {
    startPoint: IPoint;
    targetPoint: IPoint;
  }): IPoint | null {
    if (!startPoint || !targetPoint) return null;

    return {
      x: Math.min(startPoint.x, targetPoint.x),
      y: Math.min(startPoint.y, targetPoint.y),
    };
  }

  /**
   * 计算两点之间的距离
   * @param p1 - 第一个点
   * @param p2 - 第二个点
   * @returns 两点之间的距离
   * @description 使用欧几里得距离公式计算两点间距离
   */
  static getDistance(p1: IPoint, p2: IPoint): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  /**
   * 计算两点之间的中点
   * @param p1 - 第一个点
   * @param p2 - 第二个点
   * @returns 中点坐标
   * @description 计算两个点的中点坐标
   */
  static getMidPoint(p1: IPoint, p2: IPoint): IPoint {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  }

  /**
   * 计算三角形三个顶点
   * @param startPoint - 起始点
   * @param targetPoint - 目标点
   * @returns 三角形三个顶点的数组
   * @description 根据起始点和目标点计算等边三角形的三个顶点
   */
  static triangle({
    startPoint,
    targetPoint,
  }: {
    startPoint: IPoint;
    targetPoint: IPoint;
  }): IPoint[] {
    if (!startPoint || !targetPoint) return [];

    // 计算两点之间的距离
    const distance = this.getDistance(startPoint, targetPoint);

    // 计算中点
    const center = this.getMidPoint(startPoint, targetPoint);

    // 计算高度（等边三角形的高）
    const height = (distance * Math.sqrt(3)) / 2;

    // 计算垂直于两点连线的方向向量
    const dx = targetPoint.x - startPoint.x;
    const dy = targetPoint.y - startPoint.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    if (length === 0) return [];

    // 单位向量
    const unitX = dx / length;
    const unitY = dy / length;

    // 垂直向量（逆时针旋转90度）
    const perpX = -unitY;
    const perpY = unitX;

    // 第三个顶点（在垂直方向上）
    const thirdPoint: IPoint = {
      x: center.x + perpX * height,
      y: center.y + perpY * height,
    };

    return [startPoint, targetPoint, thirdPoint];
  }

  /**
   * 计算星形的顶点
   * @param center - 星形中心点
   * @param outRadius - 外半径
   * @param innerRadius - 内半径
   * @param points - 星形顶点数量，默认为5
   * @returns 星形顶点数组
   * @description 根据中心点和半径计算星形的所有顶点
   */
  static calculateStarPoints(
    center: IPoint,
    outRadius: number,
    innerRadius: number,
    points: number = 5,
  ): IPoint[] {
    const vertices: IPoint[] = [];
    const angleStep = (2 * Math.PI) / points;
    const halfAngleStep = angleStep / 2;

    for (let i = 0; i < points; i++) {
      // 外顶点
      const outerAngle = i * angleStep - Math.PI / 2;
      vertices.push({
        x: center.x + Math.cos(outerAngle) * outRadius,
        y: center.y + Math.sin(outerAngle) * outRadius,
      });

      // 内顶点
      const innerAngle = outerAngle + halfAngleStep;
      vertices.push({
        x: center.x + Math.cos(innerAngle) * innerRadius,
        y: center.y + Math.sin(innerAngle) * innerRadius,
      });
    }

    return vertices;
  }

  /**
   * 计算菱形的顶点
   * @param leftTopPoint - 左上角点
   * @param width - 宽度
   * @param height - 高度
   * @returns 菱形顶点数组
   * @description 根据矩形的左上角点和尺寸计算菱形的四个顶点
   */
  static calculateDiamondPoints(leftTopPoint: IPoint, width: number, height: number): IPoint[] {
    const centerX = leftTopPoint.x + width / 2;
    const centerY = leftTopPoint.y + height / 2;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    return [
      { x: centerX, y: centerY - halfHeight }, // 上
      { x: centerX + halfWidth, y: centerY }, // 右
      { x: centerX, y: centerY + halfHeight }, // 下
      { x: centerX - halfWidth, y: centerY }, // 左
    ];
  }

  /**
   * 判断点是否在矩形内
   * @param point - 待判断的点
   * @param rect - 矩形数据
   * @returns 点是否在矩形内
   * @description 判断指定点是否在矩形区域内
   */
  static isPointInRectangle(point: IPoint, rect: RectangleData): boolean {
    return (
      point.x >= rect.leftTopPoint.x &&
      point.x <= rect.leftTopPoint.x + rect.width &&
      point.y >= rect.leftTopPoint.y &&
      point.y <= rect.leftTopPoint.y + rect.height
    );
  }

  /**
   * 判断点是否在圆形内
   * @param point - 待判断的点
   * @param circle - 圆形数据
   * @returns 点是否在圆形内
   * @description 判断指定点是否在圆形区域内
   */
  static isPointInCircle(point: IPoint, circle: CircleData): boolean {
    const distance = this.getDistance(point, circle.center);
    return distance <= circle.radius;
  }

  /**
   * 获取矩形的边界框
   * @param rect - 矩形数据
   * @returns 边界框对象
   * @description 获取矩形的边界框信息
   */
  static getRectangleBounds(rect: RectangleData): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  } {
    return {
      minX: rect.leftTopPoint.x,
      minY: rect.leftTopPoint.y,
      maxX: rect.leftTopPoint.x + rect.width,
      maxY: rect.leftTopPoint.y + rect.height,
    };
  }

  /**
   * 获取圆形的边界框
   * @param circle - 圆形数据
   * @returns 边界框对象
   * @description 获取圆形的边界框信息
   */
  static getCircleBounds(circle: CircleData): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  } {
    return {
      minX: circle.center.x - circle.radius,
      minY: circle.center.y - circle.radius,
      maxX: circle.center.x + circle.radius,
      maxY: circle.center.y + circle.radius,
    };
  }

  /**
   * 计算点到线段的距离
   * @param point - 点坐标
   * @param lineStart - 线段起点
   * @param lineEnd - 线段终点
   * @returns 点到线段的距离
   * @description 计算点到线段的最短距离
   */
  static pointToLineDistance(point: IPoint, lineStart: IPoint, lineEnd: IPoint): number {
    const A = point.x - lineStart.x;
    const B = point.y - lineStart.y;
    const C = lineEnd.x - lineStart.x;
    const D = lineEnd.y - lineStart.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;

    if (lenSq === 0) return this.getDistance(point, lineStart);

    let param = dot / lenSq;

    let xx, yy;
    if (param < 0) {
      xx = lineStart.x;
      yy = lineStart.y;
    } else if (param > 1) {
      xx = lineEnd.x;
      yy = lineEnd.y;
    } else {
      xx = lineStart.x + param * C;
      yy = lineStart.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * 判断点是否在多边形内（射线法）
   * @param point - 待判断的点
   * @param polygon - 多边形顶点数组
   * @returns 点是否在多边形内
   * @description 使用射线法判断点是否在多边形内
   */
  static isPointInPolygon(point: IPoint, polygon: IPoint[]): boolean {
    if (polygon.length < 3) return false;

    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x;
      const yi = polygon[i].y;
      const xj = polygon[j].x;
      const yj = polygon[j].y;

      if (
        yi > point.y !== yj > point.y &&
        point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi
      ) {
        inside = !inside;
      }
    }
    return inside;
  }

  /**
   * 计算多边形的面积
   * @param polygon - 多边形顶点数组
   * @returns 多边形面积
   * @description 使用鞋带公式计算多边形面积
   */
  static calculatePolygonArea(polygon: IPoint[]): number {
    if (polygon.length < 3) return 0;

    let area = 0;
    for (let i = 0; i < polygon.length; i++) {
      const j = (i + 1) % polygon.length;
      area += polygon[i].x * polygon[j].y;
      area -= polygon[j].x * polygon[i].y;
    }
    return Math.abs(area) / 2;
  }

  /**
   * 计算多边形的重心
   * @param polygon - 多边形顶点数组
   * @returns 重心坐标
   * @description 计算多边形的重心坐标
   */
  static calculatePolygonCentroid(polygon: IPoint[]): IPoint {
    if (polygon.length === 0) return { x: 0, y: 0 };
    if (polygon.length === 1) return polygon[0];
    if (polygon.length === 2) return this.getMidPoint(polygon[0], polygon[1]);

    let cx = 0;
    let cy = 0;
    let area = 0;

    for (let i = 0; i < polygon.length; i++) {
      const j = (i + 1) % polygon.length;
      const cross = polygon[i].x * polygon[j].y - polygon[j].x * polygon[i].y;
      cx += (polygon[i].x + polygon[j].x) * cross;
      cy += (polygon[i].y + polygon[j].y) * cross;
      area += cross;
    }

    area /= 2;
    const factor = 1 / (6 * area);

    return {
      x: cx * factor,
      y: cy * factor,
    };
  }
}

export default Util;
