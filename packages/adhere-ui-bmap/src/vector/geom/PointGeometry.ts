import {
  GeometryType,
  ICoordinate,
  IPointGeometryStyle,
  IPointGeometry,
  VectorActions,
} from '../../types';
import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';

/**
 * PointGeometry
 * @class PointGeometry
 * @classdesc PointGeometry - 点
 */
class PointGeometry extends Geometry implements IPointGeometry {
  coordinates: ICoordinate;

  static drawMapping = new Map([
    ['circle', PointGeometry.drawCirclePoint],
    ['image', PointGeometry.drawImagePoint],
  ]);

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: ICoordinate) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICoordinate {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Point;
  }

  static getCenterCoordinate(coordinates: ICoordinate) {
    return { ...coordinates };
  }

  getCenterCoordinate(): ICoordinate {
    return PointGeometry.getCenterCoordinate(this.coordinates);
  }

  /**
   * drawCirclePoint - 绘制圆的点
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawCirclePoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = style.lineWidth;
    ctx.lineJoin = style.lineJoin;
    ctx.lineCap = style.lineCap;
    ctx.setLineDash(style.lineDash);
    ctx.lineDashOffset = style.lineDashOffset;
    ctx.strokeStyle = style.strokeStyle;

    const pixel = map.pointToPixel(BMap.Point(coordinates.lng, coordinates.lat));

    ctx.ellipse(pixel.x, pixel.y, style.radius, style.radius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * drawImagePoint - 绘制图片的点
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawImagePoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    const image = new Image(style.img.width, style.img.height);

    image.src = style.img.src;

    const pixel = map.pointToPixel(BMap.Point(coordinates.lng, coordinates.lat));

    ctx.drawImage(image, pixel.x, pixel.y, style.img.width, style.img.height);
  }

  static drawPoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    const targetStyle: IPointGeometryStyle = style || {
      ...GeometryStyle,
      radius: 5,
      pointType: 'circle',
    };

    PointGeometry.drawMapping.get(style.pointType)({ ctx, style: targetStyle, coordinates, map });
  }

  /**
   * draw
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IPointGeometryStyle): void {
    PointGeometry.drawCirclePoint({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default PointGeometry;
