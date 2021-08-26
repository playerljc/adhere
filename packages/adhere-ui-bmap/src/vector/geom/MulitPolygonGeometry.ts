import turf from '@turf/turf';
import {
  GeometryType,
  IMulitPolygonGeometry,
  IGeometryStyle,
  ICoordinate,
  VectorActions,
} from '../../types';
import Geometry from './Geometry';
import PolygonGeometry from './PolygonGeometry';

/**
 * MulitPolygonGeometry
 * @class MulitPolygonGeometry
 * @classdesc MulitPolygonGeometry - 多个多边形
 */
class MulitPolygonGeometry extends Geometry implements IMulitPolygonGeometry {
  coordinates: Array<ICoordinate[]>;

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: Array<ICoordinate[]>) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: Array<ICoordinate[]>) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): Array<ICoordinate[]> {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitPolygon;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const polygon = turf.polygon([
      coordinates
        .map((coordinate: ICoordinate[]) => {
          return [coordinate.map((p) => [p.lng, p.lat]).flat()];
        })
        .flat(),
    ]);

    const center = turf.centerOfMass(polygon);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: ICoordinate[]) => {
      PolygonGeometry.drawPolygon({ ctx, style, coordinates: coordinate, map });
    });
  }
}

export default MulitPolygonGeometry;
