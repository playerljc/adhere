import * as turf from '@turf/turf';

import {
  GeometryType,
  IGeometryStyle,
  IMultiStartGeometry,
  IPixel,
  IStartGeometryData,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import StartGeometry from './StartGeometry';

/**
 * MultiStartGeometry
 * @class MultiStartGeometry
 * @classdesc MultiStartGeometry - 多个五角星
 */
class MultiStartGeometry extends Geometry implements IMultiStartGeometry {
  coordinates: IStartGeometryData[];

  constructor(coordinates: IStartGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IStartGeometryData[]) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IStartGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MultiStart;
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
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return this.coordinates.some((coordinate: IStartGeometryData) => {
      return StartGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
        isScale: true,
      });
    });
  }
}

export default MultiStartGeometry;
