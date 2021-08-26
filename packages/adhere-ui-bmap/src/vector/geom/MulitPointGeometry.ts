import turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  IMulitPointGeometry,
  IPointGeometryStyle,
  VectorActions,
} from '../../types';
import Geometry from './Geometry';
import PointGeometry from './PointGeometry';

/**
 * MulitPointGeometry
 * @class MulitPointGeometry
 * @classdesc MulitPointGeometry - 多个点
 */
class MulitPointGeometry extends Geometry implements IMulitPointGeometry {
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
    return GeometryType.MulitPoint;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

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

  draw(ctx: CanvasRenderingContext2D, style: IPointGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: ICoordinate) => {
      PointGeometry.drawPoint({ ctx, style, coordinates: coordinate, map });
    });
  }
}

export default MulitPointGeometry;
