import turf from '@turf/turf';
import {
  GeometryType,
  IRectGeometry,
  IRectGeometryData,
  IGeometryStyle,
  VectorActions,
  ICoordinate,
} from '../../types';
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

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: IRectGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: IRectGeometryData) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): IRectGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Rect;
  }

  static getCenterCoordinate(coordinates: IRectGeometryData): ICoordinate {
    const polygon = turf.polygon([
      coordinates.map((coordinate: ICoordinate) => {
        return [coordinate.lng, coordinate.lat];
      }),
    ]);

    const center = turf.centerOfMass(polygon);

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
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: IRectGeometryData;
    map: any;
  }) {
    ctx.save();
    ctx.beginPath();

    const targetStyle = style || GeometryStyle;
    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { leftTop, width, height } = coordinates;

    const pixel = map.pointToPixel(BMap.Point(leftTop.lng, leftTop.lat));

    // 比例尺
    const scale = Util.getScale(map);

    // 实际的宽度(图上距离)
    const realWidth = scale * width;

    // 实际的高度(图上距离)
    const realHeight = scale * height;

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
    RectGeometry.drawRect({ ctx, style, coordinates: this.coordinates, map: this.getMap() });
  }
}

export default RectGeometry;
