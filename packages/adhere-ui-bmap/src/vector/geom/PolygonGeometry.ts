import turf from '@turf/turf';
import {
  GeometryType,
  IPolygonGeometry,
  IGeometryStyle,
  ICoordinate,
  VectorActions,
} from '../../types';
import Geometry from './Geometry';

/**
 * PolygonGeometry
 * @class PolygonGeometry
 * @classdesc PolygonGeometry - 多边形
 */
class PolygonGeometry extends Geometry implements IPolygonGeometry {
  coordinates: ICoordinate[];

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: ICoordinate[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate[]) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICoordinate[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.Polygon;
  }

  static getCenterCoordinate(coordinates: ICoordinate[]): ICoordinate {
    const polygon = turf.polygon([
      coordinates.map((coordinate: ICoordinate) => {
        return [coordinate.lng, coordinate.lat];
      }),
    ]);

    const center = turf.centerOfMass(polygon);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  getCenterCoordinate(): ICoordinate {
    return PolygonGeometry.getCenterCoordinate(this.coordinates);
  }

  static drawPolygon({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ICoordinate[];
    map: any;
  }) {
    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;

    coordinates.forEach((coordinate: ICoordinate, index: number) => {
      const pixel = map.pointToPixel(BMap.Point(coordinate.lng, coordinate.lat));

      if (index === 0) {
        ctx.moveTo(pixel.x, pixel.y);
      } else {
        ctx.lineTo(pixel.x, pixel.y);
      }
    });

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * draw - 绘制一个多边形
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    PolygonGeometry.drawPolygon({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default PolygonGeometry;
