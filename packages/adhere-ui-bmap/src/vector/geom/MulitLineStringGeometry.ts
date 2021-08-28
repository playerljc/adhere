// @ts-ignore
import turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  ILineStringGeometryData,
  ILineStringGeometryStyle,
  IMulitLineStringGeometry,
  VectorActions,
} from '../types';

import Geometry from './Geometry';
import LineStringGeometry from './LineStringGeometry';
import GeometryStyle from '../style/GeometryStyle';

/**
 * MulitLineStringGeometry
 * @class MulitLineStringGeometry
 * @classdesc MulitLineStringGeometry - 多条直线
 */
class MulitLineStringGeometry extends Geometry implements IMulitLineStringGeometry {
  coordinates: ILineStringGeometryData[];

  constructor(coordinates: ILineStringGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ILineStringGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILineStringGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitLineString;
  }

  getCenterCoordinate(): ICoordinate {
    const { coordinates } = this;

    const points = [];

    coordinates.forEach((p) => {
      points.push(turf.point([p.point1.lng, p.point1.lat]));
      points.push(turf.point([p.point2.lng, p.point2.lat]));
    });

    const features = turf.featureCollection(points);

    const center = turf.center(features);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: ILineStringGeometryStyle): void {
    // 绘制多条直线
    const { coordinates } = this;

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

    coordinates.forEach((lineStringGeometryData: ILineStringGeometryData) => {
      LineStringGeometry.drawLineString({
        ctx,
        style: targetStyle,
        coordinates: lineStringGeometryData,
        map: this.getMap(),
      });
    });
  }
}

export default MulitLineStringGeometry;
