// @ts-ignore
import * as turf from '@turf/turf';
import {
  GeometryType,
  IRectGeometry,
  IRectGeometryData,
  IGeometryStyle,
  VectorActions,
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
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRectGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Rect;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: IRectGeometryData;
    map: any;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    const { leftTop, width, height } = coordinates;

    // @ts-ignore
    const leftTopPixel = map.pointToPixel(new BMap.Point(leftTop.lng, leftTop.lat));

    // 比例尺
    const scale = Util.getScale(map);
    let realWidth = width;
    let realHeight = height;
    if (isScale) {
      realWidth = scale * width;
      realHeight = scale * height;
    }

    const features = turf.featureCollection([
      turf.point([leftTopPixel.x, leftTopPixel.y]),
      turf.point([leftTopPixel.x + realWidth, leftTopPixel.y]),
      turf.point([leftTopPixel.x + realWidth, leftTopPixel.y + realHeight]),
      turf.point([leftTopPixel.x, leftTopPixel.y + realHeight]),
    ]);

    const center = turf.center(features);

    return {
      x: center.geometry.coordinates[0],
      y: center.geometry.coordinates[1],
    };
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
    return RectGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  /**
   * drawRect
   * @param ctx
   * @param style
   * @param coordinates
   * @param isScale
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

    if(!ctx) return false;

    RectGeometry.drawRect({
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
