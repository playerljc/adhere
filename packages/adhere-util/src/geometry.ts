/**
 * 集合图形绘制工具类
 * @description 提供常用的集合图形绘制和几何变换工具
 */
import { IPoint } from './types';

export default {
  /**
   * 绘制星形
   * @param ctx - Canvas 2D 上下文
   * @param config - 星形配置项
   * @param onDraw - 绘制回调
   * @returns void
   */
  drawStart(
    ctx: CanvasRenderingContext2D,
    config: { startCount: number; center: IPoint; outRadius: number; innerRadius: number },
    onDraw: (ctx: CanvasRenderingContext2D) => void,
  ): void {
    ctx.save();
    ctx.beginPath();

    const startCount = config.startCount;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    const { center, outRadius, innerRadius } = config;

    for (let i = 0; i < startCount; i++) {
      ctx.lineTo(
        Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      );

      ctx.lineTo(
        Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      );
    }

    onDraw(ctx);

    ctx.restore();
  },
  /**
   * 绘制扇形
   * @param ctx - Canvas 2D 上下文
   * @param config - 扇形配置项
   * @param onDraw - 绘制回调
   * @returns void
   */
  drawSector(
    ctx: CanvasRenderingContext2D,
    config: { center: IPoint; radius: number; angle1: number; angle2: number },
    onDraw: (ctx: CanvasRenderingContext2D) => void,
  ): void {
    ctx.save();
    ctx.beginPath();

    const { center, radius, angle1, angle2 } = config;

    ctx.moveTo(center.x, center.y);

    ctx.arc(center.x, center.y, radius, (angle1 * Math.PI) / 180, (angle2 * Math.PI) / 180, false);

    ctx.closePath();
    onDraw(ctx);
    ctx.restore();
  },
  /**
   * 绘制 n 叶草
   * @param ctx - Canvas 2D 上下文
   * @param config - n 叶草配置项
   * @param onDraw - 绘制回调
   * @returns void
   */
  drawLeaf(
    ctx: CanvasRenderingContext2D,
    config: { n: number; center: IPoint; size: number; length: number },
    onDraw: (ctx: CanvasRenderingContext2D) => void,
  ): void {
    ctx.save();
    ctx.beginPath();

    const { n, center, size, length } = config;
    ctx.moveTo(center.x, center.y + size);

    const degree = (2 * Math.PI) / n;

    for (let i = 1; i < n + 1; i++) {
      const cx1 = Math.sin((i - 1) * degree) * length + center.x;
      const cy1 = Math.cos((i - 1) * degree) * length + center.y;

      const cx2 = Math.sin(i * degree) * length + center.x;
      const cy2 = Math.cos(i * degree) * length + center.y;

      const x = Math.sin(i * degree) * size + center.x;
      const y = Math.cos(i * degree) * size + center.y;

      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);

      ctx.closePath();
      onDraw(ctx);
      ctx.restore();
    }
  },
  /**
   * 绘制正多边形
   * @param ctx - Canvas 2D 上下文
   * @param config - 正多边形配置项
   * @param onDraw - 绘制回调
   * @returns void
   */
  drawRegularPolygon(
    ctx: CanvasRenderingContext2D,
    config: { n: number; center: IPoint; size: number },
    onDraw: (ctx: CanvasRenderingContext2D) => void,
  ): void {
    ctx.save();
    ctx.beginPath();
    const { n, center, size } = config;
    const degree = (2 * Math.PI) / n;

    for (let i = 0; i < n; i++) {
      const x = Math.cos(i * degree);
      const y = Math.sin(i * degree);
      ctx.lineTo(x * size + center.x, y * size + center.y);
    }

    ctx.closePath();
    onDraw(ctx);
    ctx.restore();
  },
  /**
   * 绘制圆角矩形
   * @param ctx - Canvas 2D 上下文
   * @param config - 圆角矩形配置项
   * @param onDraw - 绘制回调
   * @returns void
   */
  drawRadiusRect(
    ctx: CanvasRenderingContext2D,
    config: {
      leftTop: IPoint;
      width: number;
      height: number;
      radius: number;
    },
    onDraw: (ctx: CanvasRenderingContext2D) => void,
  ): void {
    ctx.save();
    ctx.beginPath();
    const { leftTop, width, height, radius } = config;

    let prePoint: IPoint;

    // 圆角1
    ctx.moveTo(leftTop.x, leftTop.y + radius);
    ctx.arcTo(leftTop.x, leftTop.y, leftTop.x + radius, leftTop.y, radius);

    // 直线1
    ctx.lineTo(leftTop.x + width - radius, leftTop.y);
    prePoint = { x: leftTop.x + width - radius, y: leftTop.y };

    // 圆角2
    ctx.arcTo(prePoint.x + radius, leftTop.y, prePoint.x + radius, leftTop.y + radius, radius);
    prePoint = { x: prePoint.x + radius, y: leftTop.y + radius };

    // 直线2
    ctx.lineTo(prePoint.x, prePoint.y + (height - 2 * radius));
    prePoint = { x: prePoint.x, y: prePoint.y + (height - 2 * radius) };

    // 圆角3
    ctx.arcTo(prePoint.x, prePoint.y + radius, prePoint.x - radius, prePoint.y + radius, radius);
    prePoint = { x: prePoint.x - radius, y: prePoint.y + radius };

    // 直线3
    ctx.lineTo(prePoint.x - (width - 2 * radius), prePoint.y);
    prePoint = { x: prePoint.x - (width - 2 * radius), y: prePoint.y };

    // 圆角4
    ctx.arcTo(prePoint.x - radius, prePoint.y, prePoint.x - radius, prePoint.y - radius, radius);
    prePoint = { x: prePoint.x - radius, y: prePoint.y - radius };

    // 直线4
    ctx.lineTo(prePoint.x, prePoint.y - (height - radius * 2));

    onDraw(ctx);
    ctx.restore();
  },
  /**
   * 计算图片缩放后元素的新位置和宽高
   * @param params - 元素原始信息和图片尺寸信息
   * @returns 新位置和宽高数组
   */
  calculateNewElementsInfo({
    elementsInfo,
    widthOrigin,
    heightOrigin,
    widthNew,
    heightNew,
  }: {
    elementsInfo: {
      x: number;
      y: number;
      width: number;
      height: number;
    }[];
    widthOrigin: number;
    heightOrigin: number;
    widthNew: number;
    heightNew: number;
  }): {
    newX: number;
    newY: number;
    newWidth: number;
    newHeight: number;
  }[] {
    const scaleX = widthNew / widthOrigin;
    const scaleY = heightNew / heightOrigin;
    return elementsInfo.map((element) => {
      const { x, y, width, height } = element;
      const newX = x * scaleX;
      const newY = y * scaleY;
      const newWidth = width * scaleX;
      const newHeight = height * scaleY;
      return { newX, newY, newWidth, newHeight };
    });
  },
};
