import {
  GeometryType,
  ICircleGeometry,
  ICircleGeometryData,
  ICoordinate,
  IGeometryStyle,
  VectorActions,
} from '../../types';
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
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICircleGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Circle;
  }

  /**
   * getCenterCoordinate
   * @param coordinates
   */
  static getCenterCoordinate(coordinates: ICircleGeometryData): ICoordinate {
    return { ...coordinates.center };
  }

  getCenterCoordinate(): ICoordinate {
    return CircleGeometry.getCenterCoordinate(this.coordinates);
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    ctx.save();

    // 绘制圆形
    ctx.beginPath();

    const targetStyle = style || GeometryStyle;
    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const {
      coordinates: { center, radius },
    } = this;

    const map = this.getMap();

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    // 比例尺
    const scale = Util.getScale(map);

    // 实际的半径(图上距离)
    const realRadius = scale * radius;

    ctx.ellipse(pixel.x, pixel.y, realRadius, realRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}

export default CircleGeometry;
