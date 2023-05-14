import {
  ICircleData,
  IDiamondData,
  IPoint,
  IPolygonData,
  IRectangleData,
  IStartData,
  ITriangleData,
} from '../types';

/**
 * drawCircle
 * @param {CanvasRenderingContext2D} ctx
 * @param {ICircleData} data
 */
export function drawCircle(ctx: CanvasRenderingContext2D, data: ICircleData) {
  ctx?.beginPath();

  ctx?.ellipse(
    data.data.center?.x || 0,
    data.data.center?.y || 0,
    data.data.radius,
    data.data.radius,
    (45 * Math.PI) / 180,
    0,
    2 * Math.PI,
  );

  ctx?.closePath();
}

/**
 * drawRectangle
 * @param {CanvasRenderingContext2D} ctx
 * @param {IRectangleData} data
 */
export function drawRectangle(ctx: CanvasRenderingContext2D, data: IRectangleData) {
  ctx?.beginPath();

  ctx.rect(
    data.data.leftTopPoint?.x || 0,
    data.data.leftTopPoint?.y || 0,
    data.data.width,
    data.data.height,
  );

  ctx?.closePath();
}

/**
 * drawDiamond
 * @param {CanvasRenderingContext2D} ctx
 * @param {IDiamondData} data
 */
export function drawDiamond(ctx: CanvasRenderingContext2D, data: IDiamondData) {
  ctx?.beginPath();

  const widthHalf = data.data.width / 2;
  const heightHalf = data.data.height / 2;

  // 顺时针方向绘制
  ctx.moveTo(data.data.leftTopPoint.x, data.data.leftTopPoint.y + heightHalf);
  ctx.lineTo(data.data.leftTopPoint.x + widthHalf, data.data.leftTopPoint.y);
  ctx.lineTo(data.data.leftTopPoint.x + data.data.width, data.data.leftTopPoint.y + heightHalf);
  ctx.lineTo(data.data.leftTopPoint.x + widthHalf, data.data.leftTopPoint.y + data.data.height);

  ctx?.closePath();
}

/**
 * drawStart
 * @param {CanvasRenderingContext2D} ctx
 * @param {IStartData} data
 */
export function drawStart(ctx: CanvasRenderingContext2D, data: IStartData) {
  ctx?.beginPath();

  const startCount = 5;
  const spend = 360 / startCount;
  const min = 90 - spend;
  const max = spend - min;

  for (let i = 0; i < startCount; i++) {
    ctx.lineTo(
      Math.cos(((min + i * spend) / 180) * Math.PI) * data.data.outRadius + data.data.center.x,
      -Math.sin(((min + i * spend) / 180) * Math.PI) * data.data.outRadius + data.data.center.y,
    );
    ctx.lineTo(
      Math.cos(((max + i * spend) / 180) * Math.PI) * data.data.innerRadius + data.data.center.x,
      -Math.sin(((max + i * spend) / 180) * Math.PI) * data.data.innerRadius + data.data.center.y,
    );
  }

  ctx?.closePath();
}

/**
 * drawTriangle
 * @param {CanvasRenderingContext2D} ctx
 * @param {ITriangleData} data
 */
export function drawTriangle(ctx: CanvasRenderingContext2D, data: ITriangleData) {
  ctx?.beginPath();

  ctx.moveTo(data.data.points[0].x, data.data.points[0].y);
  ctx.lineTo(data.data.points[1].x, data.data.points[1].y);
  ctx.lineTo(data.data.points[2].x, data.data.points[2].y);

  ctx?.closePath();
}

/**
 * drawPolygon
 * @param {CanvasRenderingContext2D} ctx
 * @param {IPolygonData} data
 */
export function drawPolygon(ctx: CanvasRenderingContext2D, data: IPolygonData) {
  ctx.beginPath();

  (data?.data || []).forEach((point: IPoint, index: number) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });

  ctx?.closePath();
}
