import {
  GeometryType,
  ICircleGeometry,
  ICircleGeometryData,
  IGeometryStyle,
  IPixel,
  VectorActions,
} from '../types';
import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import Geometry from './Geometry';

/**
 * CircleGeometry
 * @class CircleGeometry
 * @classdesc CircleGeometry - 圆形
 */
class CircleGeometry extends Geometry implements ICircleGeometry {
  coordinates: ICircleGeometryData;

  constructor(coordinates: ICircleGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICircleGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICircleGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Circle;
  }

  /**
   * getCenterCoordinate
   * @param ctx
   * @param coordinates
   * @param map
   * @param style
   * @param isScale
   */
  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ICircleGeometryData;
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
    return CircleGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  static drawCircle({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ICircleGeometryData;
    map: any;
    isScale: boolean;
  }): void {
    ctx.save();

    // 绘制圆形
    ctx.beginPath();

    const targetStyle = { ...GeometryStyle, ...(style || {}) };

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { center, radius } = coordinates;

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    // 比例尺
    const scale = Util.getScale(map);

    // 实际的半径(图上距离)
    let realRadius = radius;
    if (isScale) {
      realRadius = scale * radius;
    }

    ctx.ellipse(pixel.x, pixel.y, realRadius, realRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    CircleGeometry.drawCircle({
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
    style,
    pixel,
    isScale,
  }: {
    coordinates: ICircleGeometryData;
    pixel: IPixel;
    style: IGeometryStyle;
    map: any;
    isScale: boolean;
  }): boolean {
    // const { center, radius } = coordinates;
    //
    // // @ts-ignore
    // const centerPixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
    //
    // // 比例尺
    // const scale = Util.getScale(map);
    //
    // let realRadius = radius;
    //
    // if (isScale) {
    //   realRadius = scale * radius;
    // }
    //
    // return MathUtil.isPointInCircle(pixel, { center: centerPixel, radius: realRadius });

    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    if (!ctx) return false;

    CircleGeometry.drawCircle({
      ctx,
      coordinates,
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
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return CircleGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      pixel,
      isScale: true,
    });
  }
}

export default CircleGeometry;
