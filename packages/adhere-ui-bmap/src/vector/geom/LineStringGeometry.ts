// @ts-ignore
import turf from '@turf/turf';

import {
  GeometryType,
  ILineStringGeometryStyle,
  ILineStringGeometry,
  ILineStringGeometryData,
  VectorActions,
  IPixel,
  ICoordinate,
} from '../types';

import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';
import Util from '../../util';

const SIZE_TO_SCALE = new Map<string, number>([
  ['small', 0.5],
  ['normal', 1],
  ['large', 1.5],
]);

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

  static getCenterCoordinate(coordinates: ILineStringGeometryData): ICoordinate {
    const { point1, point2 } = coordinates;

    const midpoint = turf.midpoint(
      turf.point([point1.lng, point1.lat]),
      turf.point([point2.lng, point2.lat]),
    );

    return {
      lng: midpoint.x,
      lat: midpoint.y,
    };
  }

  getCenterCoordinate(): ICoordinate {
    return LineStringGeometry.getCenterCoordinate(this.coordinates);
  }

  draw(ctx: CanvasRenderingContext2D, style: ILineStringGeometryStyle): void {
    LineStringGeometry.drawLineString({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default LineStringGeometry;
