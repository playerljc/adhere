// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IMulitSectorGeometry,
  ISectorGeometryData,
  IGeometryStyle,
  IPixel,
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
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ISectorGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitSector;
  }

  getCenterCoordinate({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    const { coordinates } = this;

    const points = [];

    const map = this.getMap();

    coordinates.forEach((p) => {
      const pixel = map.pointToPixel(
        // @ts-ignore
        new BMap.Point(p.center.lng, p.center.lat),
      );

      // @ts-ignore
      points.push(turf.point([pixel.x, pixel.y]));
    });

    const features = turf.featureCollection(points);

    const center = turf.center(features);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
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

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean {
    return this.coordinates.some((coordinate: ISectorGeometryData) => {
      return SectorGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
        isScale: true,
      });
    });
  }
}

export default MulitSectorGeometry;
