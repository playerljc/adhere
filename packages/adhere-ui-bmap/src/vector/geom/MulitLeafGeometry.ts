import * as turf from '@turf/turf';

import {
  GeometryType,
  IGeometryStyle,
  ILeafGeometryData,
  IMulitLeafGeometry,
  IPixel,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import LeafGeometry from './LeafGeometry';

/**
 * MulitLeafGeometry
 * @class MulitLeafGeometry
 * @classdesc MulitLeafGeometry - 多个n叶草
 */
class MulitLeafGeometry extends Geometry implements IMulitLeafGeometry {
  coordinates: ILeafGeometryData[];

  constructor(coordinates: ILeafGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ILeafGeometryData[]) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILeafGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitLeaf;
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

    coordinates.forEach((coordinate: ILeafGeometryData) => {
      LeafGeometry.drawLeaf({
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
    return this.coordinates.some((coordinate: ILeafGeometryData) => {
      return LeafGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
        isScale: true,
      });
    });
  }
}

export default MulitLeafGeometry;
