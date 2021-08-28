// @ts-ignore
import turf from '@turf/turf';
import {
  GeometryType,
  IMulitSectorGeometry,
  ISectorGeometryData,
  IGeometryStyle,
  ICoordinate,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import SectorGeometry from './SectorGeometry';

/**
 * MulitSectorGeometry
 * @class MulitSectorGeometry
 * @classdesc MulitSectorGeometry - 多个扇形
 */
class MulitSectorGeometry extends Geometry implements IMulitSectorGeometry {
  coordinates: ISectorGeometryData[];

  constructor(coordinates: ISectorGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ISectorGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ISectorGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitSector;
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

    coordinates.forEach((coordinate: ISectorGeometryData) => {
      SectorGeometry.drawSector({
        ctx,
        style,
        coordinates: coordinate,
        map,
        isScale: true,
      });
    });
  }
}

export default MulitSectorGeometry;
