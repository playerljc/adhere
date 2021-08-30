// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IMulitStartGeometry,
  IStartGeometryData,
  IGeometryStyle,
  ICoordinate,
  IPixel,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import StartGeometry from './StartGeometry';

/**
 * MulitStartGeometry
 * @class MulitStartGeometry
 * @classdesc MulitStartGeometry - 多个五角星
 */
class MulitStartGeometry extends Geometry implements IMulitStartGeometry {
  coordinates: IStartGeometryData[];

  constructor(coordinates: IStartGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IStartGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IStartGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitStart;
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

    coordinates.forEach((coordinate: IStartGeometryData) => {
      StartGeometry.drawStart({
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

export default MulitStartGeometry;
