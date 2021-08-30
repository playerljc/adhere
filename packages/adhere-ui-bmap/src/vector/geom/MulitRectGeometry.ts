// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IMulitRectGeometry,
  IRectGeometryData,
  IGeometryStyle,
  VectorActions,
  IPixel,
} from '../types';
import Geometry from './Geometry';
import RectGeometry from './RectGeometry';

/**
 * MulitRectGeometry
 * @class MulitRectGeometry
 * @classdesc MulitRectGeometry - 多个矩形
 */
class MulitRectGeometry extends Geometry implements IMulitRectGeometry {
  coordinates: IRectGeometryData[];

  constructor(coordinates: IRectGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRectGeometryData[]) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRectGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitRect;
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

    const geojson = coordinates.map((p) => {
      const pixel = map.pointToPixel(
        // @ts-ignore
        new BMap.Point(p.leftTop.lng, p.leftTop.lat),
      );

      return turf.point([pixel.x, pixel.y]);
    });

    const features = turf.featureCollection(geojson);

    const center = turf.center(features);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinates: IRectGeometryData) => {
      RectGeometry.drawRect({ ctx, style, coordinates, map, isScale: true });
    });
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean {
    return this.coordinates.some((coordinate: IRectGeometryData) => {
      return RectGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        pixel,
        style,
        isScale: true,
      });
    });
  }
}

export default MulitRectGeometry;
