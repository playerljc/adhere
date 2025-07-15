import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';

import Dom from './dom';
import { ICircle, IPoint } from './types';

/**
 * 数学工具类
 * @description 提供数学计算相关的工具函数
 */
export default {
  /**--------------------------math-start----------------------**/
  /**
   * 百分数转换为小数
   * @description 将百分比字符串转换为小数
   * @param percent - 百分比字符串，如 "50%"
   * @returns 转换后的小数
   * @example
   * ```typescript
   * toPoint('50%') // 0.5
   * toPoint('25%') // 0.25
   * ```
   */
  toPoint(percent: string): number {
    if (!percent) return 0;
    
    const str = percent.replace('%', '');
    return parseInt(str, 10) / 100;
  },

  /**
   * 小数转换为百分数
   * @description 将小数转换为百分比字符串
   * @param point - 小数
   * @returns 百分比字符串
   * @example
   * ```typescript
   * toPercent(0.5) // "50.0%"
   * toPercent(0.25) // "25.0%"
   * ```
   */
  toPercent(point: number): string {
    if (typeof point !== 'number' || isNaN(point)) return '0%';
    
    let str = Number(point * 100).toFixed(1);
    str += '%';
    return str;
  },

  /**
   * 计算两条直线的交点
   * @description 计算两条直线的交点坐标
   * @param p1 - 第一条直线的第一个点
   * @param p2 - 第一条直线的第二个点
   * @param p3 - 第二条直线的第一个点
   * @param p4 - 第二条直线的第二个点
   * @returns 交点坐标
   * @example
   * ```typescript
   * straightLineIntersection(
   *   { x: 0, y: 0 }, { x: 2, y: 2 },
   *   { x: 0, y: 2 }, { x: 2, y: 0 }
   * ) // 返回 { x: 1, y: 1 }
   * ```
   */
  straightLineIntersection(p1: IPoint, p2: IPoint, p3: IPoint, p4: IPoint): IPoint {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const { x: x3, y: y3 } = p3;
    const { x: x4, y: y4 } = p4;

    const denominator = (x3 - x4) * (y1 - y2) - (x1 - x2) * (y3 - y4);
    
    if (Math.abs(denominator) < 1e-10) {
      // 平行线，返回中点
      return {
        x: (x1 + x3) / 2,
        y: (y1 + y3) / 2
      };
    }

    return {
      x: ((x3 - x4) * (x2 * y1 - x1 * y2) - (x1 - x2) * (x4 * y3 - x3 * y4)) / denominator,
      y: ((y3 - y4) * (y2 * x1 - y1 * x2) - (y1 - y2) * (y4 * x3 - y3 * x4)) / denominator,
    };
  },

  /**
   * 计算两点间距离指定距离的点坐标
   * @description 计算在两点连线上，距离第一个点指定距离的点的坐标
   * @param p1 - 第一个点
   * @param p2 - 第二个点
   * @param distance - 与第一个点的距离
   * @returns 计算出的点坐标
   * @example
   * ```typescript
   * getA3Point({
   *   p1: { x: 0, y: 0 },
   *   p2: { x: 4, y: 0 },
   *   distance: 2
   * }) // 返回 { x: 2, y: 0 }
   * ```
   */
  getA3Point({ p1, p2, distance }: { p1: IPoint; p2: IPoint; distance: number }): IPoint {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    const dLA1A2 = Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
    
    if (dLA1A2 === 0) {
      return p1; // 两点重合
    }
    
    const Ax3 = (distance / dLA1A2) * (Ax2 - Ax1) + Ax1; // A3的横坐标
    const Ay3 = (distance / dLA1A2) * (Ay2 - Ay1) + Ay1; // A3的纵坐标
    
    return { x: Ax3, y: Ay3 };
  },

  /**
   * 计算两点间的距离
   * @description 计算两个点之间的欧几里得距离
   * @param p1 - 第一个点
   * @param p2 - 第二个点
   * @returns 两点间的距离
   * @example
   * ```typescript
   * getDistanceByBetweenPoint(
   *   { x: 0, y: 0 },
   *   { x: 3, y: 4 }
   * ) // 返回 5
   * ```
   */
  getDistanceByBetweenPoint({ p1, p2 }: { p1: IPoint; p2: IPoint }): number {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2));
  },

  /**
   * 屏幕坐标转换为画布坐标
   * @description 将屏幕坐标转换为画布坐标系中的坐标
   * @param event - 鼠标或触摸事件
   * @param rect - 画布的边界矩形
   * @returns 画布坐标系中的坐标
   * @example
   * ```typescript
   * clientToCtxPoint(event, canvas.getBoundingClientRect())
   * ```
   */
  clientToCtxPoint({ event, rect }: { event: MouseEvent | TouchEvent; rect: DOMRect }): IPoint {
    let clientX: number;
    let clientY: number;

    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = event.changedTouches[0].clientX;
      clientY = event.changedTouches[0].clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  },

  /**
   * 判断点是否在圆内
   * @description 判断一个点是否在指定圆的内部或边界上
   * @param point - 要判断的点
   * @param circle - 圆的信息
   * @returns 如果点在圆内返回 true，否则返回 false
   * @example
   * ```typescript
   * isPointInCircle(
   *   { x: 1, y: 1 },
   *   { center: { x: 0, y: 0 }, radius: 2 }
   * ) // 返回 true
   * ```
   */
  isPointInCircle(point: IPoint, circle: ICircle): boolean {
    const _x = point.x - circle.center.x;
    const _y = point.y - circle.center.y;
    return !(_x * _x + _y * _y > circle.radius * circle.radius);
  },

  /**
   * 判断点是否在矩形内
   * @description 判断一个点是否在指定矩形的内部或边界上
   * @param point - 要判断的点
   * @param rect - 矩形信息
   * @returns 如果点在矩形内返回 true，否则返回 false
   * @example
   * ```typescript
   * isPointInRect(
   *   { x: 1, y: 1 },
   *   { x: 0, y: 0, width: 2, height: 2 }
   * ) // 返回 true
   * ```
   */
  isPointInRect(point: IPoint, rect: { x: number; y: number; width: number; height: number }): boolean {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width - 1 &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height - 1
    );
  },

  /**
   * 获取文本在矩形中的居中 X 位置
   * @description 计算文本在指定矩形中水平居中时的 X 坐标
   * @param ctx - Canvas 2D 上下文
   * @param text - 要居中的文本
   * @param rect - 矩形信息
   * @returns 文本居中的 X 坐标
   * @example
   * ```typescript
   * getCanvasTextInGemX(ctx, 'Hello', {
   *   leftTop: { x: 0, y: 0 },
   *   rightBottom: { x: 100, y: 50 }
   * })
   * ```
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
   * 计算两个点的中心点
   * @description 计算两个点的中点坐标
   * @param fromPoint - 第一个点
   * @param toPoint - 第二个点
   * @returns 中点坐标
   * @example
   * ```typescript
   * midpoint({ x: 0, y: 0 }, { x: 4, y: 4 }) // 返回 { x: 2, y: 2 }
   * ```
   */
  midpoint(fromPoint: IPoint, toPoint: IPoint): IPoint {
    return { x: (fromPoint.x + toPoint.x) / 2, y: (fromPoint.y + toPoint.y) / 2 };
  },

  /**
   * 计算两个点的斜率
   * @description 计算两点连线的斜率
   * @param fromPoint - 起始点
   * @param toPoint - 终点
   * @param axis - 坐标系类型，'cartesian' 为平面直角坐标系，'geographic' 为地理坐标系
   * @returns 斜率值，垂直时返回 undefined
   * @example
   * ```typescript
   * slope({ x: 0, y: 0 }, { x: 2, y: 2 }) // 返回 1
   * slope({ x: 0, y: 0 }, { x: 2, y: 2 }, 'geographic') // 返回 -1
   * ```
   */
  slope(
    fromPoint: IPoint,
    toPoint: IPoint,
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
   * 获取两点斜率的弧度
   * @description 计算两点连线与水平方向的夹角（弧度）
   * @param fromPoint - 起始点
   * @param toPoint - 终点
   * @param axis - 坐标系类型
   * @returns 弧度值
   * @example
   * ```typescript
   * slopToRadian({ x: 0, y: 0 }, { x: 1, y: 1 }) // 返回 -π/4
   * ```
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
   * 获取两点斜率的角度
   * @description 计算两点连线与水平方向的夹角（角度）
   * @param fromPoint - 起始点
   * @param toPoint - 终点
   * @param axis - 坐标系类型
   * @returns 角度值
   * @example
   * ```typescript
   * slopToAngle({ x: 0, y: 0 }, { x: 1, y: 1 }) // 返回 -45
   * ```
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
   * 弧度转换为角度
   * @description 将弧度值转换为角度值
   * @param radian - 弧度值
   * @returns 角度值
   * @example
   * ```typescript
   * radianToAngle(Math.PI) // 返回 180
   * ```
   */
  radianToAngle(radian: number): number {
    return (180 * radian) / Math.PI;
  },

  /**
   * 角度转换为弧度
   * @description 将角度值转换为弧度值
   * @param angle - 角度值
   * @returns 弧度值
   * @example
   * ```typescript
   * angleToRadian(180) // 返回 Math.PI
   * ```
   */
  angleToRadian(angle: number): number {
    return (angle * Math.PI) / 180;
  },

  /**
   * 距离单位转换
   * @description 将米转换为其他距离单位
   * @param value - 数值（米）
   * @param unit - 目标单位
   * @returns 转换后的数值
   * @example
   * ```typescript
   * distance(1000, 'kilometer') // 返回 1
   * ```
   */
  distance(value: number, unit: 'kilometer'): number {
    const map = new Map<string, number>([['kilometer', 1000]]);
    const conversionFactor = map.get(unit);
    
    if (!conversionFactor) {
      throw new Error(`Unsupported unit: ${unit}`);
    }

    return value / conversionFactor;
  },

  /**
   * 获取圆上任意一点的坐标
   * @description 根据圆心、半径和角度计算圆上点的坐标
   * @param center - 圆心坐标
   * @param radius - 半径
   * @param angle - 角度（弧度）
   * @returns 圆上点的坐标
   * @example
   * ```typescript
   * getCirclePoint({ x: 0, y: 0 }, 1, 0) // 返回 { x: 1, y: 0 }
   * ```
   */
  getCirclePoint(center: IPoint, radius: number, angle: number): IPoint {
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
  },

  /**
   * 获取椭圆上任意一点的坐标
   * @description 根据椭圆中心、长轴、短轴和角度计算椭圆上点的坐标
   * @param center - 椭圆中心坐标
   * @param radiusX - X 轴半径
   * @param radiusY - Y 轴半径
   * @param angle - 角度（弧度）
   * @returns 椭圆上点的坐标
   * @example
   * ```typescript
   * getOvalPoint({ x: 0, y: 0 }, 2, 1, 0) // 返回 { x: 2, y: 0 }
   * ```
   */
  getOvalPoint(center: IPoint, radiusX: number, radiusY: number, angle: number): IPoint {
    return {
      x: center.x + Math.cos(angle) * radiusX,
      y: center.y + Math.sin(angle) * radiusY,
    };
  },

  /**
   * 像素转换为 rem 数值
   * @description 将像素值转换为 rem 数值
   * @param px - 像素值
   * @param base - 基准像素值
   * @returns rem 数值
   * @example
   * ```typescript
   * pxToRemNumber(16, 16) // 返回 1
   * ```
   */
  pxToRemNumber(px: number, base: number): number {
    if (base <= 0) {
      throw new Error('Base value must be greater than 0');
    }
    return px / base;
  },

  /**
   * 像素转换为 rem 字符串
   * @description 将像素值转换为 rem 字符串
   * @param px - 像素值
   * @param base - 基准像素值
   * @param media - 媒体配置
   * @returns rem 字符串或像素字符串
   * @example
   * ```typescript
   * pxToRem(16, 16) // 返回 "1rem"
   * pxToRem(16, 16, { isUseMedia: false }) // 返回 "16px"
   * ```
   */
  pxToRem(px: number, base: number, media?: ConfigProviderProps['media']): string {
    if (!media || media.isUseMedia) {
      return `${this.pxToRemNumber(px, base)}rem`;
    }

    return `${px}px`;
  },
  /**--------------------------math-end------------------------**/
};
