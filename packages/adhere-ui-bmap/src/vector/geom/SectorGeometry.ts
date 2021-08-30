import Geometry from './Geometry';
import {
  ISectorGeometryData,
  ISectorGeometry,
  VectorActions,
  GeometryType,
  IGeometryStyle,
  IPixel,
} from '../types';
import GeometryStyle from '../style/GeometryStyle';
import Util from '../../util';

/**
 * SectorGeometry
 * @class SectorGeometry
 * @classdesc SectorGeometry - 扇形
 */
class SectorGeometry extends Geometry implements ISectorGeometry {
  coordinates: ISectorGeometryData;

  constructor(coordinates: ISectorGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ISectorGeometryData) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ISectorGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Sector;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ISectorGeometryData;
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
    return SectorGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  static drawSector({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ISectorGeometryData;
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

    const { center, radius, angle1, angle2 } = coordinates;

    let curRadius = radius;

    if (isScale) {
      // 比例尺
      const scale = Util.getScale(map);
      curRadius = scale * radius;
    }

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    ctx.moveTo(pixel.x, pixel.y);

    ctx.arc(pixel.x, pixel.y, curRadius, (angle1 * Math.PI) / 180, (angle2 * Math.PI) / 180, false);

    ctx.closePath();

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
    SectorGeometry.drawSector({
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
    coordinates: ISectorGeometryData;
    pixel: IPixel;
    map: any;
    isScale: boolean;
    style?: IGeometryStyle;
  }): boolean {
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    SectorGeometry.drawSector({
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
    return SectorGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      pixel,
      isScale: true,
    });
  }
}

export default SectorGeometry;
