import Geometry from './Geometry';
import {
  ISectorGeometryData,
  ISectorGeometry,
  ICoordinate,
  VectorActions,
  GeometryType,
  IGeometryStyle,
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

  static getCenterCoordinate(coordinates: ISectorGeometryData): ICoordinate {
    return {
      ...coordinates.center,
    };
  }

  getCenterCoordinate(): ICoordinate {
    return SectorGeometry.getCenterCoordinate(this.coordinates);
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
}

export default SectorGeometry;
