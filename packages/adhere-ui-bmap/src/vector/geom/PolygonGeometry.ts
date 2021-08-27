// @ts-ignore
import turf from '@turf/turf';
import {
  GeometryType,
  IPolygonGeometry,
  IGeometryStyle,
  ICoordinate,
  VectorActions,
} from '../../types';
import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';

/**
 * PolygonGeometry
 * @class PolygonGeometry
 * @classdesc PolygonGeometry - 多边形
 */
class PolygonGeometry extends Geometry implements IPolygonGeometry {
  coordinates: ICoordinate[];

  constructor(coordinates: ICoordinate[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
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

    const targetStyle = {
      ...GeometryStyle,
      ...(style || {}),
    };

    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    coordinates.forEach((coordinate: ICoordinate, index: number) => {
      // @ts-ignore
      const pixel = map.pointToPixel(new BMap.Point(coordinate.lng, coordinate.lat));

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
