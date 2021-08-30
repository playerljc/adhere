// @ts-ignore
import * as turf from '@turf/turf';

import {
  GeometryType,
  ILineStringGeometryStyle,
  ILineStringGeometry,
  ILineStringGeometryData,
  VectorActions,
  IPixel,
  ICoordinate,
  ITextStyle,
  IGeometryStyle,
  ICircleGeometryData,
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

  // /**
  //  * createStartArrowPath
  //  * @param ctx
  //  * @param coordinates
  //  * @param style
  //  * @param map
  //  */
  // static createStartArrowPath({
  //   ctx,
  //   coordinates,
  //   style,
  //   map,
  // }: {
  //   ctx: CanvasRenderingContext2D;
  //   coordinates: ILineStringGeometryData;
  //   style: ILineStringGeometryStyle;
  //   map: any;
  // }): void {
  //   const {
  //     arrow: { type },
  //   } = style;
  //   const { point1 } = coordinates;
  //   // @ts-ignore
  //   const pixel1 = map.pointToPixel(new BMap.Point(point1.lng, point1.lat));
  //
  //   // 逆时针
  //   let arrowP1: IPixel;
  //   let arrowP2: IPixel;
  //   let arrowP3: IPixel;
  //
  //   const size = SIZE.get(style.arrow.size);
  //
  //   // 尖的箭头
  //   if (type === 'normal') {
  //     arrowP1 = {
  //       x: pixel1.x,
  //       y: pixel1.y - size,
  //     };
  //
  //     arrowP2 = {
  //       x: pixel1.x,
  //       y: pixel1.y + size,
  //     };
  //
  //     arrowP3 = {
  //       x: pixel1.x - size * 3,
  //       y: pixel1.y,
  //     };
  //   }
  //   // 方形的箭头
  //   else if (type === 'square') {
  //     arrowP1 = {
  //       x: pixel1.x,
  //       y: pixel1.y - size,
  //     };
  //
  //     arrowP2 = {
  //       x: pixel1.x,
  //       y: pixel1.y + size,
  //     };
  //
  //     arrowP3 = {
  //       x: pixel1.x - size,
  //       y: pixel1.y,
  //     };
  //   }
  //
  //   ctx.moveTo(arrowP1.x, arrowP1.y);
  //   ctx.lineTo(arrowP2.x, arrowP2.y);
  //   ctx.lineTo(arrowP3.x, arrowP3.y);
  // }
  //
  // /**
  //  * createEndArrowPath
  //  * @param ctx
  //  * @param coordinates
  //  * @param style
  //  * @param map
  //  */
  // static createEndArrowPath({
  //   ctx,
  //   coordinates,
  //   style,
  //   map,
  // }: {
  //   ctx: CanvasRenderingContext2D;
  //   coordinates: ILineStringGeometryData;
  //   style: ILineStringGeometryStyle;
  //   map: any;
  // }): void {
  //   const {
  //     arrow: { type },
  //   } = style;
  //   const { point2 } = coordinates;
  //   // @ts-ignore
  //   const pixel2 = map.pointToPixel(new BMap.Point(point2.lng, point2.lat));
  //
  //   // 逆时针
  //   let arrowP1: IPixel;
  //   let arrowP2: IPixel;
  //   let arrowP3: IPixel;
  //
  //   // 尖的箭头
  //   const size = SIZE.get(style.arrow.size);
  //
  //   if (type === 'normal') {
  //     arrowP1 = {
  //       x: pixel2.x,
  //       y: pixel2.y - size,
  //     };
  //
  //     arrowP2 = {
  //       x: pixel2.x,
  //       y: pixel2.y + size,
  //     };
  //
  //     arrowP3 = {
  //       x: pixel2.x + size * 3,
  //       y: pixel2.y,
  //     };
  //   }
  //   // 方形的箭头
  //   else if (type === 'square') {
  //     arrowP1 = {
  //       x: pixel2.x,
  //       y: pixel2.y - size,
  //     };
  //
  //     arrowP2 = {
  //       x: pixel2.x,
  //       y: pixel2.y + size,
  //     };
  //
  //     arrowP3 = {
  //       x: pixel2.x + size,
  //       y: pixel2.y,
  //     };
  //   }
  //
  //   ctx.moveTo(arrowP1.x, arrowP1.y);
  //   ctx.lineTo(arrowP2.x, arrowP2.y);
  //   ctx.lineTo(arrowP3.x, arrowP3.y);
  // }

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
    style: ILineStringGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }) {
    ctx.save();

    const targetStyle: ILineStringGeometryStyle = {
      ...GeometryStyle,
      arrow: {
        draw: false,
        direction: 'end',
        type: 'normal',
        size: 'normal',
      },
      ...(style || {}),
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
    if (style.arrow.draw) {
      if (style.arrow.direction === 'start') {
        LineStringGeometry.drawStartArrow({ ctx, style: targetStyle, coordinates, map });
      } else if (style.arrow.direction === 'end') {
        LineStringGeometry.drawEndArrow({ ctx, style: targetStyle, coordinates, map });
      } else if (style.arrow.direction === 'bothEnds') {
        LineStringGeometry.drawStartArrow({ ctx, style: targetStyle, coordinates, map });
        LineStringGeometry.drawEndArrow({ ctx, style: targetStyle, coordinates, map });
      }
    }
  }

  setCoordinates(coordinates: ILineStringGeometryData) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
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

    const midpoint = [(point1Pixel.x + point2Pixel.x) / 2, (point1Pixel.y + point2Pixel.y) / 2];

    return {
      x: midpoint[0],
      y: midpoint[1],
    };
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

  draw(ctx: CanvasRenderingContext2D, style: ILineStringGeometryStyle): void {
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

    // 斜率
    const slope = (point2Pixel.y - point1Pixel.y) / (point2Pixel.x - point1Pixel.x);

    // 斜率的弧度
    const slopeRadian = Math.atan(slope);

    // 斜率的角度
    const angle = (180 * slopeRadian) / Math.PI;

    // 旋转斜率的角度
    ctx.rotate((angle * Math.PI) / 180);

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
    style: ILineStringGeometryStyle;
    coordinates: ILineStringGeometryData;
    map: any;
  }): boolean {
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

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
  isPixelInGeometry(pixel: IPixel, style?: ILineStringGeometryStyle): boolean {
    return LineStringGeometry.isPixelInGeometry({
      pixel,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default LineStringGeometry;
