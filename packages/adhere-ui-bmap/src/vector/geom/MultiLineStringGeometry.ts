import * as turf from '@turf/turf';

import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  IGeometryStyle,
  ILineStringGeometryData,
  ILineStringGeometryStyle,
  IMultiLineStringGeometry,
  IPixel,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import LineStringGeometry from './LineStringGeometry';

/**
 * MultiLineStringGeometry
 * @class MultiLineStringGeometry
 * @classdesc MultiLineStringGeometry - 多条直线
 */
class MultiLineStringGeometry extends Geometry implements IMultiLineStringGeometry {
  coordinates: ILineStringGeometryData[];

  constructor(coordinates: ILineStringGeometryData[]) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ILineStringGeometryData[]) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILineStringGeometryData[] {
    return [...this.coordinates];
  }

  getType(): GeometryType {
    return GeometryType.MultiLineString;
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
      const pixel1 = map.pointToPixel(
        // @ts-ignore
        new BMap.Point(p.point1.lng, p.point1.lat),
      );

      const pixel2 = map.pointToPixel(
        // @ts-ignore
        new BMap.Point(p.point2.lng, p.point2.lat),
      );

      // @ts-ignore
      points.push(turf.point([pixel1.x, pixel1.y]));
      // @ts-ignore
      points.push(turf.point([pixel2.x, pixel2.y]));
    });

    const features = turf.featureCollection(points);

    const center = turf.center(features);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    };
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    // 绘制多条直线
    const { coordinates } = this;

    const targetStyle: ILineStringGeometryStyle = {
      ...GeometryStyle,
      ...(style ?? {}),
      arrow: {
        draw: false,
        direction: 'end',
        type: 'normal',
        size: 'normal',
      },
    };

    coordinates.forEach((lineStringGeometryData: ILineStringGeometryData) => {
      LineStringGeometry.drawLineString({
        ctx,
        style: targetStyle,
        coordinates: lineStringGeometryData,
        map: this.getMap(),
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
    return this.coordinates.some((coordinate: ILineStringGeometryData) => {
      return LineStringGeometry.isPixelInGeometry({
        pixel,
        style,
        coordinates: coordinate,
        map: this.getMap(),
      });
    });
  }
}

export default MultiLineStringGeometry;
