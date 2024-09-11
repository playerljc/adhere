import * as turf from '@turf/turf';

import {
  GeometryType,
  IGeometryStyle,
  IMultiRegularPolygonGeometry,
  IPixel,
  IRegularPolygonGeometryData,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import RegularPolygonGeometry from './RegularPolygonGeometry';

/**
 * MultiRegularPolygonGeometry
 * @class MultiRegularPolygonGeometry
 * @classdesc MultiRegularPolygonGeometry - 多个正多边形
 */
class MultiRegularPolygonGeometry extends Geometry implements IMultiRegularPolygonGeometry {
  coordinates: IRegularPolygonGeometryData[];

  constructor(coordinates: IRegularPolygonGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRegularPolygonGeometryData[]) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRegularPolygonGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MultiRegularPolygon;
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

    coordinates.forEach((coordinate: IRegularPolygonGeometryData) => {
      RegularPolygonGeometry.drawRegularPolygon({
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
    return this.coordinates.some((coordinate: IRegularPolygonGeometryData) => {
      return RegularPolygonGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
        isScale: true,
      });
    });
  }
}

export default MultiRegularPolygonGeometry;
