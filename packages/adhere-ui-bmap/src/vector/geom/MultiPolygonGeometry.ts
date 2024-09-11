import * as turf from '@turf/turf';

import {
  GeometryType,
  ICoordinate,
  IGeometryStyle,
  IMultiPolygonGeometry,
  IPixel,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import PolygonGeometry from './PolygonGeometry';

/**
 * MultiPolygonGeometry
 * @class MultiPolygonGeometry
 * @classdesc MultiPolygonGeometry - 多个多边形
 */
class MultiPolygonGeometry extends Geometry implements IMultiPolygonGeometry {
  coordinates: Array<ICoordinate[]>;

  constructor(coordinates: Array<ICoordinate[]>) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: Array<ICoordinate[]>) {
    this.coordinates = coordinates;
    this.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): Array<ICoordinate[]> {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MultiPolygon;
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

    const geojson = coordinates.map((coordinate: ICoordinate[]) =>
      coordinate.map((p) => {
        const pixel = map.pointToPixel(
          // @ts-ignore
          new BMap.Point(p.lng, p.lat),
        );

        return [pixel.x, pixel.y];
      }),
    );

    const polygon = turf.polygon(geojson);

    const center = turf.centerOfMass(polygon);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinate: ICoordinate[]) => {
      PolygonGeometry.drawPolygon({ ctx, style, coordinates: coordinate, map });
    });
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel): boolean {
    return this.coordinates.some((coordinate: ICoordinate[]) => {
      return PolygonGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
      });
    });
  }
}

export default MultiPolygonGeometry;
