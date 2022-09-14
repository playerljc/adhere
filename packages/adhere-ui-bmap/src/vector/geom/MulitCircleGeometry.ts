// @ts-ignore
import * as turf from '@turf/turf';

import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  ICircleGeometryData,
  IGeometryStyle,
  IMulitCircleGeometry,
  IPixel,
  VectorActions,
} from '../types';
import CircleGeometry from './CircleGeometry';
import Geometry from './Geometry';

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
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICircleGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MulitCircle;
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

    const points = [];

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
    return this.coordinates.some((coordinate: ICircleGeometryData) => {
      return CircleGeometry.isPixelInGeometry({
        coordinates: coordinate,
        map: this.getMap(),
        style,
        pixel,
        isScale: true,
      });
    });
  }
}

export default MulitCircleGeometry;
