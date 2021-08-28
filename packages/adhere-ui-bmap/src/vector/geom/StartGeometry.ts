import Geometry from './Geometry';
import {
  IStartGeometryData,
  IStartGeometry,
  ICoordinate,
  VectorActions,
  GeometryType,
  IGeometryStyle,
} from '../types';
import GeometryStyle from '../style/GeometryStyle';
import Util from '../../util';

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
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IStartGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Start;
  }

  static getCenterCoordinate(coordinates: IStartGeometryData): ICoordinate {
    return {
      ...coordinates.center,
    };
  }

  getCenterCoordinate(): ICoordinate {
    return StartGeometry.getCenterCoordinate(this.coordinates);
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

    const spend = 360 / 5;
    const min = 90 - spend;
    const max = spend - min;

    for (let i = 0; i < 5; i++) {
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
}

export default StartGeometry;
