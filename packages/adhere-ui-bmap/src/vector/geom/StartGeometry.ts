import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  IGeometryStyle,
  IPixel,
  IStartGeometry,
  IStartGeometryData,
  VectorActions,
} from '../types';
import Geometry from './Geometry';

/**
 * StartGeometry
 * @class StartGeometry
 * @classdesc StartGeometry - 五角星
 */
class StartGeometry extends Geometry implements IStartGeometry {
  coordinates: IStartGeometryData;

  constructor(coordinates: IStartGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IStartGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IStartGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Start;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: IStartGeometryData;
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
    return StartGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  static drawStart({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: IStartGeometryData;
    map: any;
    isScale: boolean;
  }) {
    ctx.save();

    const targetStyle = {
      ...GeometryStyle,
      ...(style ?? {}),
    };

    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { center, innerRadius, outRadius } = coordinates;

    let curInnerRadius = innerRadius;
    let curOutRadius = outRadius;

    if (isScale) {
      // 比例尺
      const scale = Util.getScale(map);
      curInnerRadius = scale * innerRadius;
      curOutRadius = scale * outRadius;
    }

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    for (let i = 0; i < startCount; i++) {
      ctx.lineTo(
        Math.cos(((min + i * spend) / 180) * Math.PI) * curOutRadius + pixel.x,
        -Math.sin(((min + i * spend) / 180) * Math.PI) * curOutRadius + pixel.y,
      );
      ctx.lineTo(
        Math.cos(((max + i * spend) / 180) * Math.PI) * curInnerRadius + pixel.x,
        -Math.sin(((max + i * spend) / 180) * Math.PI) * curInnerRadius + pixel.y,
      );
    }

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * draw - 绘制一个五角星
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    StartGeometry.drawStart({
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
    coordinates: IStartGeometryData;
    pixel: IPixel;
    style: IGeometryStyle;
    map: any;
    isScale: boolean;
  }): boolean {
    // const { center, innerRadius, outRadius } = coordinates;
    //
    // // 比例尺
    // const scale = Util.getScale(map);
    //
    // // @ts-ignore
    // const centerPixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
    //
    // let curInnerRadius = innerRadius;
    // let curOutRadius = outRadius;
    //
    // if (isScale) {
    //   curInnerRadius = scale * innerRadius;
    //   curOutRadius = scale * outRadius;
    // }
    //
    // const startCount = 5;
    // const spend = 360 / startCount;
    // const min = 90 - spend;
    // const max = spend - min;
    //
    // const points: IPixel[] = [];
    //
    // for (let i = 0; i < startCount; i++) {
    //   points.push({
    //     x: Math.cos(((min + i * spend) / 180) * Math.PI) * curOutRadius + centerPixel.x,
    //     y: -Math.sin(((min + i * spend) / 180) * Math.PI) * curOutRadius + centerPixel.y,
    //   });
    //   points.push({
    //     x: Math.cos(((max + i * spend) / 180) * Math.PI) * curInnerRadius + centerPixel.x,
    //     y: -Math.sin(((max + i * spend) / 180) * Math.PI) * curInnerRadius + centerPixel.y,
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

    StartGeometry.drawStart({
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
    return StartGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      isScale: true,
      // @ts-ignore
      style,
      pixel,
    });
  }
}

export default StartGeometry;
