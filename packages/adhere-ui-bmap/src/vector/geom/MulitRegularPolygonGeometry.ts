// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IMulitRegularPolygonGeometry,
  IRegularPolygonGeometryData,
  IGeometryStyle,
  ICoordinate,
  VectorActions,
  IPixel,
} from '../types';
import Geometry from './Geometry';
import RegularPolygonGeometry from './RegularPolygonGeometry';

/**
 * MulitRegularPolygonGeometry
 * @class MulitRegularPolygonGeometry
 * @classdesc MulitRegularPolygonGeometry - 多个正多边形
 */
class MulitRegularPolygonGeometry extends Geometry implements IMulitRegularPolygonGeometry {
  coordinates: IRegularPolygonGeometryData[];

  constructor(coordinates: IRegularPolygonGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRegularPolygonGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRegularPolygonGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitRegularPolygon;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const points = [];

    coordinates.forEach((p) => {
      points.push(turf.point([p.center.lng, p.center.lat]));
    });

    const features = turf.featureCollection(points);

    const center = turf.center(features);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: IRegularPolygonGeometryData) => {
      RegularPolygonGeometry.drawRegularPolygon({
        ctx,
        style,
        coordinates: coordinate,
        map,
        isScale: true,
      });
    });
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel): boolean {
    return false;
  }
}

export default MulitRegularPolygonGeometry;
