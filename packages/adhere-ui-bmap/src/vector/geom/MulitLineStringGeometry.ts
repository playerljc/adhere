import turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  ILineStringGeometryData,
  ILineStringGeometryStyle,
  IMulitLineStringGeometry,
  VectorActions,
} from '../../types';

import Geometry from './Geometry';
import LineStringGeometry from './LineStringGeometry';

/**
 * MulitLineStringGeometry
 * @class MulitLineStringGeometry
 * @classdesc MulitLineStringGeometry - 多条直线
 */
class MulitLineStringGeometry extends Geometry implements IMulitLineStringGeometry {
  coordinates: ILineStringGeometryData[];

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: ILineStringGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ILineStringGeometryData[]) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILineStringGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitLineString;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const polygon = turf.polygon([
      coordinates.map((coordinate: ILineStringGeometryData) => {
        return [
          [coordinate.point1.lng, coordinate.point1.lat],
          [coordinate.point2.lng, coordinate.point2.lat],
        ];
      }).flat(),
    ]);

    const center = turf.centerOfMass(polygon);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: ILineStringGeometryStyle): void {
    // 绘制多条直线
    const { coordinates } = this;

    coordinates.forEach((lineStringGeometryData: ILineStringGeometryData) => {
      LineStringGeometry.drawLineString({
        ctx,
        style,
        coordinates: lineStringGeometryData,
        map: this.getMap(),
      });
    });
  }
}

export default MulitLineStringGeometry;
