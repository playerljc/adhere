import {
  GeometryType,
  ICoordinate,
  IPointGeometryStyle,
  IPointGeometry,
  VectorActions,
} from '../types';
import Geometry from './Geometry';
import GeometryStyle from '../style/GeometryStyle';
import RegularPolygonGeometry from './RegularPolygonGeometry';
import StartGeometry from './StartGeometry';
import SectorGeometry from './SectorGeometry';

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
    ['regularPolygon', PointGeometry.drawRegularPolygon],
    ['start', PointGeometry.drawStart],
    ['sector', PointGeometry.drawSector],
  ]);

  constructor(coordinates: ICoordinate) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate) {
    this.coordinates = coordinates;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
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
    ctx.fillStyle = style.fillStyle;

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(coordinates.lng, coordinates.lat));

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

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(coordinates.lng, coordinates.lat));

    ctx.drawImage(image, pixel.x, pixel.y, style.img.width, style.img.height);
  }

  /**
   * drawRegularPolygon
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawRegularPolygon({
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
    RegularPolygonGeometry.drawRegularPolygon({
      ctx,
      style,
      coordinates: { ...style.regularPolygon, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawStart
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawStart({
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
    StartGeometry.drawStart({
      ctx,
      style,
      coordinates: { ...style.start, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawSector
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawSector({
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
    SectorGeometry.drawSector({
      ctx,
      style,
      coordinates: { ...style.sector, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawPoint
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
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
    const targetStyle: IPointGeometryStyle = {
      ...GeometryStyle,
      radius: 5,
      pointType: 'circle',
      ...(style || {}),
    };

    PointGeometry.drawMapping.get(targetStyle.pointType)({
      ctx,
      style: targetStyle,
      coordinates,
      map,
    });
  }

  /**
   * draw
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IPointGeometryStyle): void {
    PointGeometry.drawPoint({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }
}

export default PointGeometry;
