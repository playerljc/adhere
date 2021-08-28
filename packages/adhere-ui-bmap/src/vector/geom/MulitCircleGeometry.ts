// @ts-ignore
import turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  IMulitCircelGeometry,
  VectorActions,
  ICircleGeometryData,
  IGeometryStyle,
} from '../types';

import Geometry from './Geometry';
import CircleGeometry from './CircleGeometry';
import GeometryStyle from '../style/GeometryStyle';

/**
 * MulitCircleGeometry
 * @class MulitCircleGeometry
 * @classdesc MulitCircleGeometry - 多个圆
 */
class MulitCircleGeometry extends Geometry implements IMulitCircelGeometry {
  coordinates: ICircleGeometryData[];

  constructor(coordinates: ICircleGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICircleGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICircleGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitCircel;
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

    const targetStyle = {
      ...GeometryStyle,
      ...(style || {}),
    };

    coordinates.forEach((circleGeometryData: ICircleGeometryData) => {
      CircleGeometry.drawCircle({
        ctx,
        style: targetStyle,
        coordinates: circleGeometryData,
        map: this.getMap(),
      });
    });
  }
}

export default MulitCircleGeometry;
