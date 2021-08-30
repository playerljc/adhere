// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IRectGeometry,
  IRectGeometryData,
  IGeometryStyle,
  VectorActions,
  ICoordinate,
  IPixel,
} from '../types';
import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';
import Util from '../../util';

/**
 * RectGeometry
 * @class RectGeometry
 * @classdesc RectGeometry - 矩形
 */
class RectGeometry extends Geometry implements IRectGeometry {
  coordinates: IRectGeometryData;

  constructor(coordinates: IRectGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRectGeometryData) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRectGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Rect;
  }

  static getCenterCoordinate(coordinates: IRectGeometryData): ICoordinate {
    const { leftTop, width, height } = coordinates;

    const features = turf.featureCollection([
      turf.point([leftTop.lng, leftTop.lat]),
      turf.point([leftTop.lng + width, leftTop.lat]),
      turf.point([leftTop.lng + width, leftTop.lat + height]),
      turf.point([leftTop.lng, leftTop.lat + height]),
    ]);

    const center = turf.center(features);

    return {
      lng: center.x,
      lat: center.y,
    };
  }

  getCenterCoordinate(): ICoordinate {
    return RectGeometry.getCenterCoordinate(this.coordinates);
  }

  /**
   * drawRect
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawRect({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: IRectGeometryData;
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

    const { leftTop, width, height } = coordinates;

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(leftTop.lng, leftTop.lat));

    // 比例尺
    const scale = Util.getScale(map);

    // 实际的宽度(图上距离)
    let realWidth = width;
    // 实际的高度(图上距离)
    let realHeight = height;

    if (isScale) {
      realWidth = scale * width;
      realHeight = scale * height;
    }

    ctx.rect(pixel.x, pixel.y, realWidth, realHeight);

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * draw - 绘制
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    RectGeometry.drawRect({
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
    coordinates: IRectGeometryData;
    pixel: IPixel;
    style?: IGeometryStyle;
    map: any;
    isScale: boolean;
  }): boolean {
    // const { leftTop, width, height } = coordinates;
    //
    // const scale = Util.getScale(map);
    //
    // // @ts-ignore
    // const leftTopPixel = map.pointToPixel(new BMap.Point(leftTop.lng, leftTop.lat));
    //
    // let realWidth = width;
    // let realHeight = height;
    //
    // if (isScale) {
    //   realWidth = scale * width;
    //   realHeight = scale * height;
    // }
    //
    // const point = turf.point([pixel.x, pixel.y]);
    //
    // const poly = turf.polygon([
    //   [
    //     [leftTopPixel.x, leftTopPixel.y],
    //     [leftTopPixel.x + realWidth, leftTopPixel.y],
    //     [leftTopPixel.x + realWidth, leftTopPixel.y + realHeight],
    //     [leftTopPixel.x, leftTopPixel.y + realHeight],
    //     [leftTopPixel.x, leftTopPixel.y],
    //   ],
    // ]);
    //
    // return turf.booleanPointInPolygon(point, poly);

    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    RectGeometry.drawRect({
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
  isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean {
    return RectGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      isScale: true,
      pixel,
    });
  }
}

export default RectGeometry;
