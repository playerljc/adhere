import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  IGeometryStyle,
  IPixel,
  IRegularPolygonGeometry,
  IRegularPolygonGeometryData,
  VectorActions,
} from '../types';
import Geometry from './Geometry';

/**
 * RegularPolygonGeometry
 * @class RegularPolygonGeometry
 * @classdesc RegularPolygonGeometry - 正多边形
 */
class RegularPolygonGeometry extends Geometry implements IRegularPolygonGeometry {
  coordinates: IRegularPolygonGeometryData;

  constructor(coordinates: IRegularPolygonGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRegularPolygonGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRegularPolygonGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.RegularPolygon;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: IRegularPolygonGeometryData;
    map: any;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    const centerPixel = map.pointToPixel(
      // @ts-ignore
      new BMap.Point(coordinates.center.lng, coordinates.center.lat),
    );
    return { ...centerPixel };
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
    return RegularPolygonGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  static drawRegularPolygon({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: IRegularPolygonGeometryData;
    map: any;
    isScale: boolean;
  }) {
    ctx.save();

    const targetStyle = {
      ...GeometryStyle,
      ...(style || {}),
    };

    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { n, center, size } = coordinates;

    let curSize = size;

    if (isScale) {
      // 比例尺
      const scale = Util.getScale(map);
      curSize = scale * size;
    }

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    const degree = (2 * Math.PI) / n;

    for (let i = 0; i < n; i++) {
      const x = Math.cos(i * degree);
      const y = Math.sin(i * degree);
      ctx.lineTo(x * curSize + pixel.x, y * curSize + pixel.y);
    }

    ctx.closePath();

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * draw - 绘制一个多边形
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    RegularPolygonGeometry.drawRegularPolygon({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
      isScale: true,
    });
  }

  static isPixelInGeometry({
    coordinates,
    map,
    pixel,
    style,
    isScale,
  }: {
    coordinates: IRegularPolygonGeometryData;
    pixel: IPixel;
    style?: IGeometryStyle;
    map: any;
    isScale: boolean;
  }): boolean {
    // const { n, center, size } = coordinates;
    //
    // const scale = Util.getScale(map);
    // const points: IPixel[] = [];
    //
    // let curSize = size;
    // if (isScale) {
    //   curSize = scale * size;
    // }
    //
    // // @ts-ignore
    // const centerPixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
    //
    // const degree = (2 * Math.PI) / n;
    //
    // for (let i = 0; i < n; i++) {
    //   const x = Math.cos(i * degree);
    //   const y = Math.sin(i * degree);
    //   points.push({
    //     x: x * curSize + centerPixel.x,
    //     y: y * curSize + centerPixel.y,
    //   });
    // }
    //
    // const polygon = points.map((point) => [point.x, point.y]);
    // polygon.push(polygon[0]);
    //
    // const point = turf.point([pixel.x, pixel.y]);
    // const poly = turf.polygon([polygon]);
    //
    // return turf.booleanPointInPolygon(point, poly);
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    if (!ctx) return false;

    RegularPolygonGeometry.drawRegularPolygon({
      ctx,
      coordinates,
      // @ts-ignore
      style,
      map,
      isScale,
    });

    return ctx.isPointInPath(pixel.x, pixel.y);
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean {
    return RegularPolygonGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      isScale: true,
      pixel,
    });
  }
}

export default RegularPolygonGeometry;
