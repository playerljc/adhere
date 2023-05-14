import {
  CircleData,
  IActionData,
  ICircleData,
  IDiamondData,
  IPoint,
  IPolygonData,
  IRectangleData,
  IStartData,
  ITriangleData,
  OutCircleData,
  Points,
  RectangleData,
  SelectType,
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
 * getCircleRectangle
 * @param {ICircleData} circleData
 * @return {RectangleData}
 */
export function getCircleRectangle(circleData: CircleData): RectangleData {
  return getSelfRectangle({
    leftTopPoint: {
      x: circleData.center.x - circleData.radius,
      y: circleData.center.y - circleData.radius,
    },
    width: circleData.radius * 2,
    height: circleData.radius * 2,
  });
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
 * getSelfRectangle
 * @param {IRectangleData} rectangleData
 * @return {RectangleData}
 */
export function getSelfRectangle(rectangleData: RectangleData): RectangleData {
  return { ...rectangleData };
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
 * getDiamondRectangle
 * @param {IDiamondData} diamondData
 * @return {RectangleData}
 */
export function getDiamondRectangle(diamondData: RectangleData): RectangleData {
  return {
    ...diamondData,
  };
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
 * getStartRectangle
 * @param {IStartData} startData
 * @return {RectangleData}
 */
export function getStartRectangle(startData: OutCircleData): RectangleData {
  return getCircleRectangle({
    center: startData.center,
    radius: startData.outRadius,
  });
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
 * getTriangleRectangle
 * @param {ITriangleData} triangleData
 * @return {RectangleData}
 */
export function getTriangleRectangle(triangleData: Points): RectangleData {
  return getSelfRectangle({
    leftTopPoint: {
      x: triangleData.points[0].x,
      y: triangleData.points[1].y,
    },
    width: triangleData.points[2].x - triangleData.points[0].x,
    height: triangleData.points[2].y - triangleData.points[1].y,
  });
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

/**
 * getPolygonRectangle
 * @param {IPolygonData} polygonData
 * @return {RectangleData}
 */
export function getPolygonRectangle(polygonData: IPoint[]): RectangleData {
  const arrX = polygonData.map(({ x }) => x);
  const arrY = polygonData.map(({ y }) => y);

  const getMinMaxX = () => ({
    minX: Math.min(...arrX),
    maxX: Math.max(...arrX),
  });

  const getMinMaxY = () => ({
    minY: Math.min(...arrY),
    maxY: Math.max(...arrY),
  });

  const { minX, maxX } = getMinMaxX();
  const { minY, maxY } = getMinMaxY();

  return {
    leftTopPoint: {
      x: minX,
      y: minY,
    },
    width: maxX - minX,
    height: maxY - minY,
  };
}

/**
 * getClipDataUrl
 * @param {IActionData} data
 * @param {CanvasRenderingContext2D} clipCtx
 * @return {string}
 */
export function getClipDataUrl({
  data,
  clipCtx,
}: {
  data: IActionData;
  clipCtx: CanvasRenderingContext2D;
}): string {
  const map = new Map<SelectType, (data: any) => RectangleData>([
    [SelectType.Circle, getCircleRectangle],
    [SelectType.Rectangle, getSelfRectangle],
    [SelectType.Diamond, getDiamondRectangle],
    [SelectType.Start, getStartRectangle],
    [SelectType.Triangle, getTriangleRectangle],
    [SelectType.Polygon, getPolygonRectangle],
  ]);

  // 根据类型获取矩形数据
  const rectangleData: RectangleData = map.get(data.data.type as SelectType)?.(
    data.data.data,
  ) as RectangleData;

  // clipImageData = getImageData
  const clipImageData = clipCtx.getImageData(
    rectangleData.leftTopPoint.x,
    rectangleData.leftTopPoint.y,
    rectangleData.width,
    rectangleData.height,
  );

  // put clipImageData to canvas
  const canvas = document.createElement('canvas');
  canvas.width = rectangleData.width;
  canvas.height = rectangleData.height;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.putImageData(clipImageData, 0, 0);

  // canvas to dataUrl
  return canvas.toDataURL('image/png', 1);
}
