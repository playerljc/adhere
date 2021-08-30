// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  ICoordinate,
  IMulitCircleGeometry,
  VectorActions,
  ICircleGeometryData,
  IGeometryStyle,
  IPixel
} from '../types';

import Geometry from './Geometry';
import CircleGeometry from './CircleGeometry';
import GeometryStyle from '../style/GeometryStyle';

/**
 * MulitCircleGeometry
 * @class MulitCircleGeometry
 * @classdesc MulitCircleGeometry - 多个圆
 */
class MulitCircleGeometry extends Geometry implements IMulitCircleGeometry {
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
    return GeometryType.MulitCircle;
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

  /**
   * isPixelInGeometry
   * @param pixel
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel): boolean {
    return false;
  }
}

export default MulitCircleGeometry;
