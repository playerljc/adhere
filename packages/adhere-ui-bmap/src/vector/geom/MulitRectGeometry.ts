import turf from '@turf/turf';
import {
  GeometryType,
  IMulitRectGeometry,
  IRectGeometryData,
  IGeometryStyle,
  VectorActions,
  ICoordinate,
} from '../../types';
import Geometry from './Geometry';
import RectGeometry from './RectGeometry';

/**
 * MulitRectGeometry
 * @class MulitRectGeometry
 * @classdesc MulitRectGeometry - 多个矩形
 */
class MulitRectGeometry extends Geometry implements IMulitRectGeometry {
  coordinates: IRectGeometryData[];

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: IRectGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRectGeometryData[]) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRectGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitRect;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const polygon = turf.polygon([
      coordinates
        .map((coordinate: IRectGeometryData) => {
          return [[coordinate.leftTop.lng, coordinate.leftTop.lat]];
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

    coordinates.forEach((coordinates: IRectGeometryData) => {
      RectGeometry.drawRect({ ctx, style, coordinates, map });
    });
  }
}

export default MulitRectGeometry;
