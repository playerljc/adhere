import turf from '@turf/turf';

import {
  GeometryType,
  ILineStringGeometryStyle,
  ILineStringGeometry,
  ILineStringGeometryData,
  VectorActions,
  IPixel,
  ICoordinate,
} from '../../types';

import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';

const SIZE_TO_SCALE = new Map<string, number>([
  ['small', 0.5],
  ['normal', 1],
  ['large', 1.5],
]);

/**
 * LineStringGeometry
 * @class LineStringGeometry
 * @classdesc LineStringGeometry - 直线
 */
class LineStringGeometry extends Geometry implements ILineStringGeometry {
  coordinates: ILineStringGeometryData;

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: ILineStringGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  /**
   * createStartArrowPath
   * @param ctx
   * @param coordinates
   * @param style
   * @param map
   */
  static createStartArrowPath({
    ctx,
    coordinates,
    style,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ILineStringGeometryData;
    style: ILineStringGeometryStyle;
    map: any;
  }): void {
    const {
      arrow: { type },
    } = style;
    const { point1 } = coordinates;
    const pixel1 = map.pointToPixel(BMap.Point(point1.lng, point1.lat));

    // 逆时针
    let arrowP1: IPixel;
    let arrowP2: IPixel;
    let arrowP3: IPixel;

    // 尖的箭头
    if (type === 'normal') {
      arrowP1 = {
        x: pixel1.x,
        y: pixel1.y - 5,
      };

      arrowP2 = {
        x: pixel1.x,
        y: pixel1.y + 5,
      };

      arrowP3 = {
        x: pixel1.x - 5 * 2.5,
        y: pixel1.y,
      };
    }
    // 方形的箭头
    else if (type === 'square') {
      arrowP1 = {
        x: pixel1.x,
        y: pixel1.y - 5,
      };

      arrowP2 = {
        x: pixel1.x,
        y: pixel1.y + 5,
      };

      arrowP3 = {
        x: pixel1.x - 5,
        y: pixel1.y,
      };
    }

    ctx.moveTo(arrowP1.x, arrowP1.y);
    ctx.lineTo(arrowP2.x, arrowP2.y);
    ctx.lineTo(arrowP3.x, arrowP3.y);
  }

  /**
   * createEndArrowPath
   * @param ctx
   * @param coordinates
   * @param style
   * @param map
   */
  static createEndArrowPath({
    ctx,
    coordinates,
    style,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ILineStringGeometryData;
    style: ILineStringGeometryStyle;
    map: any;
  }): void {
    const {
      arrow: { type },
    } = style;
    const { point2 } = coordinates;
    const pixel2 = map.pointToPixel(BMap.Point(point2.lng, point2.lat));

    // 逆时针
    let arrowP1: IPixel;
    let arrowP2: IPixel;
    let arrowP3: IPixel;

    // 尖的箭头
    if (type === 'normal') {
      arrowP1 = {
        x: pixel2.x,
        y: pixel2.y - 5,
      };

      arrowP2 = {
        x: pixel2.x,
        y: pixel2.y + 5,
      };

      arrowP3 = {
        x: pixel2.x + 5 * 2.5,
        y: pixel2.y,
      };
    }
    // 方形的箭头
    else if (type === 'square') {
      arrowP1 = {
        x: pixel2.x,
        y: pixel2.y - 5,
      };

      arrowP2 = {
        x: pixel2.x,
        y: pixel2.y + 5,
      };

      arrowP3 = {
        x: pixel2.x + 5,
        y: pixel2.y,
      };
    }

    ctx.moveTo(arrowP1.x, arrowP1.y);
    ctx.lineTo(arrowP2.x, arrowP2.y);
    ctx.lineTo(arrowP3.x, arrowP3.y);
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

    // 旋转
    const dx = coordinates.point2.lng - coordinates.point1.lng;
    const dy = coordinates.point2.lat - coordinates.point1.lat;
    const rotation = Math.atan2(dy, dx);
    ctx.rotate(rotation);

    // 基于size缩放
    if (style.arrow.size) {
      const scale = SIZE_TO_SCALE.get(style.arrow.size);
      ctx.scale(scale, scale);
      ctx.translate(
        -(coordinates.point1.lng * (scale - 1)),
        -(coordinates.point1.lat * (scale - 1)),
      );
    }

    LineStringGeometry.createStartArrowPath({ ctx, coordinates, style, map });

    ctx.closePath();

    ctx.stroke();

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

    // 旋转
    const dx = coordinates.point1.lng - coordinates.point2.lng;
    const dy = coordinates.point1.lat - coordinates.point2.lat;
    const rotation = Math.atan2(dy, dx);
    ctx.rotate(rotation);

    // 基于size缩放
    if (style.arrow.size) {
      const scale = SIZE_TO_SCALE.get(style.arrow.size);
      ctx.scale(scale, scale);
      ctx.translate(
        -(coordinates.point1.lng * (scale - 1)),
        -(coordinates.point1.lat * (scale - 1)),
      );
    }

    LineStringGeometry.createEndArrowPath({ ctx, coordinates, style, map });

    ctx.closePath();

    ctx.stroke();

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

    // 绘制直线
    ctx.beginPath();

    const targetStyle: ILineStringGeometryStyle = style || {
      ...GeometryStyle,
      arrow: {
        draw: false,
        direction: 'end',
        type: 'normal',
        size: 'normal',
      },
    };
    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;

    const { point1, point2 } = coordinates;

    const pixel1 = map.pointToPixel(BMap.Point(point1.lng, point1.lat));
    const pixel2 = map.pointToPixel(BMap.Point(point2.lng, point2.lat));

    ctx.moveTo(pixel1.x, pixel1.y);
    ctx.lineTo(pixel2.x, pixel2.y);

    ctx.stroke();

    ctx.restore();

    // 在绘制箭头
    if (targetStyle.arrow.draw) {
      if (targetStyle.arrow.direction === 'start') {
        LineStringGeometry.drawStartArrow({ ctx, style, coordinates, map });
      } else if (targetStyle.arrow.direction === 'end') {
        LineStringGeometry.drawEndArrow({ ctx, style, coordinates, map });
      } else if (targetStyle.arrow.direction === 'bothEnds') {
        LineStringGeometry.drawStartArrow({ ctx, style, coordinates, map });
        LineStringGeometry.drawEndArrow({ ctx, style, coordinates, map });
      }
    }
  }

  setCoordinates(coordinates: ILineStringGeometryData) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
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
