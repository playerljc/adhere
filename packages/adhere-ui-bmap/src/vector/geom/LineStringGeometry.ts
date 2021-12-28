// @ts-ignore
import MathUtil from '@baifendian/adhere-util';

import {
  GeometryType,
  ILineStringGeometryStyle,
  ILineStringGeometry,
  ILineStringGeometryData,
  VectorActions,
  IPixel,
  ITextStyle,
  IGeometryStyle,
} from '../types';

import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';
import Util from '../../util';
import TextStyle from '../style/TextStyle';

const SIZE = new Map<string, number>([
  ['small', 3],
  ['normal', 10],
  ['large', 20],
]);

/**
 * LineStringGeometry
 * @class LineStringGeometry
 * @classdesc LineStringGeometry - 直线
 */
class LineStringGeometry extends Geometry implements ILineStringGeometry {
  coordinates: ILineStringGeometryData;

  constructor(coordinates: ILineStringGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  /**
   * drawStartArrow
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawStartArrow({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: ILineStringGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }): void {
    ctx.save();

    ctx.beginPath();

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    // @ts-ignore
    const pixel1 = map.pointToPixel(new BMap.Point(coordinates.point1.lng, coordinates.point1.lat));
    // @ts-ignore
    const pixel2 = map.pointToPixel(new BMap.Point(coordinates.point2.lng, coordinates.point2.lat));

    const { A, B, C } = Util.getArrowPoints({
      from: pixel2,
      to: pixel1,
      scale: 1,
      width: SIZE.get(style.arrow.size),
    });

    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);

    ctx.closePath();

    ctx.stroke();

    ctx.fill();

    ctx.restore();
  }

  /**
   * drawEndArrow
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawEndArrow({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: ILineStringGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }): void {
    ctx.save();

    ctx.beginPath();

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fillStyle = style.fillStyle;

    // @ts-ignore
    const pixel1 = map.pointToPixel(new BMap.Point(coordinates.point1.lng, coordinates.point1.lat));
    // @ts-ignore
    const pixel2 = map.pointToPixel(new BMap.Point(coordinates.point2.lng, coordinates.point2.lat));

    const { A, B, C } = Util.getArrowPoints({
      from: pixel1,
      to: pixel2,
      scale: 1,
      width: SIZE.get(style.arrow.size),
    });

    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);

    ctx.closePath();

    ctx.stroke();

    ctx.fill();

    ctx.restore();
  }

  /**
   * drawLineString
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawLineString({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }) {
    ctx.save();

    const targetStyle: ILineStringGeometryStyle = {
      ...GeometryStyle,
      ...(style || {}),
      arrow: {
        draw: false,
        direction: 'end',
        type: 'normal',
        size: 'normal',
      },
    };

    // 绘制直线
    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;

    const { point1, point2 } = coordinates;

    // @ts-ignore
    const pixel1 = map.pointToPixel(new BMap.Point(point1.lng, point1.lat));
    // @ts-ignore
    const pixel2 = map.pointToPixel(new BMap.Point(point2.lng, point2.lat));

    ctx.moveTo(pixel1.x, pixel1.y);
    ctx.lineTo(pixel2.x, pixel2.y);

    ctx.stroke();

    ctx.restore();

    // 在绘制箭头
    if ((style as ILineStringGeometryStyle).arrow.draw) {
      if ((style as ILineStringGeometryStyle).arrow.direction === 'start') {
        LineStringGeometry.drawStartArrow({ ctx, style: targetStyle, coordinates, map });
      } else if ((style as ILineStringGeometryStyle).arrow.direction === 'end') {
        LineStringGeometry.drawEndArrow({ ctx, style: targetStyle, coordinates, map });
      } else if ((style as ILineStringGeometryStyle).arrow.direction === 'bothEnds') {
        LineStringGeometry.drawStartArrow({ ctx, style: targetStyle, coordinates, map });
        LineStringGeometry.drawEndArrow({ ctx, style: targetStyle, coordinates, map });
      }
    }
  }

  setCoordinates(coordinates: ILineStringGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILineStringGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.LineString;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ILineStringGeometryData;
    map: any;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    const { point1, point2 } = coordinates;

    const point1Pixel = map.pointToPixel(
      // @ts-ignore
      new BMap.Point(point1.lng, point1.lat),
    );
    const point2Pixel = map.pointToPixel(
      // @ts-ignore
      new BMap.Point(point2.lng, point2.lat),
    );

    return MathUtil.midpoint(point1Pixel, point2Pixel);
  }

  getCenterCoordinate({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    return LineStringGeometry.getCenterCoordinate({
      ctx,
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    LineStringGeometry.drawLineString({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }

  drawText({
    ctx,
    text,
    style,
    textStyle,
  }: {
    ctx: CanvasRenderingContext2D;
    text: string;
    style: IGeometryStyle;
    textStyle: ITextStyle;
  }): void {
    ctx.save();
    ctx.beginPath();

    // 先旋转在进行绘制
    const map = this.getMap();

    // 中心点
    const centerPixel = this.getCenterCoordinate({ ctx, style, isScale: true });

    // 平移到中心点
    ctx.translate(centerPixel.x, centerPixel.y);

    const { point1, point2 } = this.coordinates;
    // @ts-ignore
    const point1Pixel = map.pointToPixel(new BMap.Point(point1.lng, point1.lat));
    // @ts-ignore
    const point2Pixel = map.pointToPixel(new BMap.Point(point2.lng, point2.lat));

    // 斜率的角度
    const radian = MathUtil.slopToRadian(point1Pixel, point2Pixel);

    // 旋转斜率的角度
    ctx.rotate(radian);

    const targetTextStyle = { ...TextStyle, ...(textStyle || {}) };
    ctx.font = targetTextStyle.font;
    ctx.textAlign = targetTextStyle.textAlign;
    ctx.textBaseline = targetTextStyle.textBaseline;
    ctx.direction = targetTextStyle.direction;
    ctx.strokeStyle = targetTextStyle.strokeStyle;
    ctx.fillStyle = targetTextStyle.fillStyle;

    const targetStyle: IGeometryStyle = { ...GeometryStyle, ...(style || {}) };
    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;

    ctx.fillText(text || '', 0, 0);

    ctx.restore();
  }

  static isPixelInGeometry({
    pixel,
    style,
    coordinates,
    map,
  }: {
    pixel: IPixel;
    style: IGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }): boolean {
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    if (!ctx) return false;

    ctx.beginPath();

    const { point1, point2 } = coordinates;
    // @ts-ignore
    const pixel1 = map.pointToPixel(new BMap.Point(point1.lng, point1.lat));
    // @ts-ignore
    const pixel2 = map.pointToPixel(new BMap.Point(point2.lng, point2.lat));

    ctx.moveTo(pixel1.x, pixel1.y);
    ctx.lineTo(pixel2.x, pixel2.y);

    return ctx.isPointInPath(pixel.x, pixel.y);
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return LineStringGeometry.isPixelInGeometry({
      pixel,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default LineStringGeometry;
