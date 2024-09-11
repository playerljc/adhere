import * as turf from '@turf/turf';

import {
  GeometryType,
  ICoordinate,
  IGeometryStyle,
  IMultiPointGeometry,
  IPixel,
  IPointGeometryStyle,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import PointGeometry from './PointGeometry';

/**
 * MultiPointGeometry
 * @class MultiPointGeometry
 * @classdesc MultiPointGeometry - 多个点
 */
class MultiPointGeometry extends Geometry implements IMultiPointGeometry {
  coordinates: ICoordinate[];

  constructor(coordinates: ICoordinate[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate[]) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICoordinate[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MultiPoint;
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

    const map = this.getMap();

    const features = turf.featureCollection(
      coordinates.map((p) => {
        const pixel = map.pointToPixel(
          // @ts-ignore
          new BMap.Point(p.lng, p.lat),
        );

        return turf.point([pixel.x, pixel.y]);
      }),
    );

    const center = turf.center(features);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: ICoordinate) => {
      PointGeometry.drawPoint({ ctx, style, coordinates: coordinate, map });
    });
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return this.coordinates.some((coordinate: ICoordinate) => {
      return PointGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
      });
    });
  }
}

export default MultiPointGeometry;
