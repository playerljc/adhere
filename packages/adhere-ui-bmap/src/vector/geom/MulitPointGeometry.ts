// @ts-ignore
import turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  IMulitPointGeometry,
  IPointGeometryStyle,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import PointGeometry from './PointGeometry';

/**
 * MulitPointGeometry
 * @class MulitPointGeometry
 * @classdesc MulitPointGeometry - 多个点
 */
class MulitPointGeometry extends Geometry implements IMulitPointGeometry {
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
    return GeometryType.MulitPoint;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const features = turf.featureCollection(coordinates.map((p) => turf.point([p.lng, p.lat])));

    const center = turf.center(features);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IPointGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: ICoordinate) => {
      PointGeometry.drawPoint({ ctx, style, coordinates: coordinate, map });
    });
  }
}

export default MulitPointGeometry;
