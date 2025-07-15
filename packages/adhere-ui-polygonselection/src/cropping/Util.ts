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
 * 绘制圆形
 * @param ctx - Canvas上下文
 * @param data - 圆形数据
 * @description 在Canvas上绘制圆形路径
 */
export function drawCircle(ctx: CanvasRenderingContext2D, data: ICircleData): void {
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
 * 获取圆形的外接矩形
 * @param circleData - 圆形数据
 * @returns 外接矩形数据
 * @description 根据圆形数据计算其外接矩形
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
 * 绘制矩形
 * @param ctx - Canvas上下文
 * @param data - 矩形数据
 * @description 在Canvas上绘制矩形路径
 */
export function drawRectangle(ctx: CanvasRenderingContext2D, data: IRectangleData): void {
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
 * 获取矩形的外接矩形（即自身）
 * @param rectangleData - 矩形数据
 * @returns 矩形数据本身
 * @description 矩形的外接矩形就是其自身
 */
export function getSelfRectangle(rectangleData: RectangleData): RectangleData {
  return { ...rectangleData };
}

/**
 * 绘制菱形
 * @param ctx - Canvas上下文
 * @param data - 菱形数据
 * @description 在Canvas上绘制菱形路径
 */
export function drawDiamond(ctx: CanvasRenderingContext2D, data: IDiamondData): void {
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
 * 获取菱形的外接矩形
 * @param diamondData - 菱形数据
 * @returns 外接矩形数据
 * @description 根据菱形数据计算其外接矩形
 */
export function getDiamondRectangle(diamondData: RectangleData): RectangleData {
  return {
    ...diamondData,
  };
}

/**
 * 绘制星形
 * @param ctx - Canvas上下文
 * @param data - 星形数据
 * @description 在Canvas上绘制五角星路径
 */
export function drawStart(ctx: CanvasRenderingContext2D, data: IStartData): void {
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
 * 获取星形的外接矩形
 * @param startData - 星形数据
 * @returns 外接矩形数据
 * @description 根据星形数据计算其外接矩形（基于外圆）
 */
export function getStartRectangle(startData: OutCircleData): RectangleData {
  return getCircleRectangle({
    center: startData.center,
    radius: startData.outRadius,
  });
}

/**
 * 绘制三角形
 * @param ctx - Canvas上下文
 * @param data - 三角形数据
 * @description 在Canvas上绘制三角形路径
 */
export function drawTriangle(ctx: CanvasRenderingContext2D, data: ITriangleData): void {
  ctx?.beginPath();

  ctx.moveTo(data.data.points[0].x, data.data.points[0].y);
  ctx.lineTo(data.data.points[1].x, data.data.points[1].y);
  ctx.lineTo(data.data.points[2].x, data.data.points[2].y);

  ctx?.closePath();
}

/**
 * 获取三角形的外接矩形
 * @param triangleData - 三角形数据
 * @returns 外接矩形数据
 * @description 根据三角形数据计算其外接矩形
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
 * 绘制多边形
 * @param ctx - Canvas上下文
 * @param data - 多边形数据
 * @description 在Canvas上绘制多边形路径
 */
export function drawPolygon(ctx: CanvasRenderingContext2D, data: IPolygonData): void {
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
 * 获取多边形的外接矩形
 * @param polygonData - 多边形点数组
 * @returns 外接矩形数据
 * @description 根据多边形点数组计算其外接矩形
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
 * 获取裁剪数据的URL
 * @param data - Action数据
 * @param clipCtx - 裁剪Canvas上下文
 * @returns base64格式的图片数据URL
 * @description 根据几何图形数据裁剪图片并返回base64格式的数据URL
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

  // 获取裁剪区域的图像数据
  const clipImageData = clipCtx.getImageData(
    rectangleData.leftTopPoint.x,
    rectangleData.leftTopPoint.y,
    rectangleData.width,
    rectangleData.height,
  );

  // 创建新的Canvas来放置裁剪的图像数据
  const canvas = document.createElement('canvas');
  canvas.width = rectangleData.width;
  canvas.height = rectangleData.height;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.putImageData(clipImageData, 0, 0);

  // 转换为dataURL
  return canvas.toDataURL('image/png', 1);
}

/**
 * 排序工具函数
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 * @description 根据sort属性对数组进行排序，没有sort属性的元素保持原位置
 */
export function sort(arr: Array<{ [key: string]: any; sort?: number }>): Array<any> {
  const result = Array.from({ length: arr.length }).fill(null);

  const sortArr: Array<{ [key: string]: any; sort?: number }> = [];

  arr.forEach((t, index) => {
    if ('sort' in t) {
      sortArr.push(t);
    } else {
      result[index] = t;
    }
  });

  sortArr.forEach((t) => {
    result.splice(t.sort as number, 0, t);
  });

  return result.filter((t) => !!t);
}
