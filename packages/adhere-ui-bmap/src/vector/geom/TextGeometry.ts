import {
  GeometryType,
  ITextGeometry,
  VectorActions,
  ITextStyle,
  ITextGeometryData,
  ICoordinate,
} from '../../types';
import Geometry from './Geometry';

/**
 * TextGeometry
 * @class TextGeometry
 * @classdesc TextGeometry - 文本
 */
class TextGeometry extends Geometry implements ITextGeometry {
  coordinates: ITextGeometryData;

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(coordinates: ITextGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ITextGeometryData) {
    this.coordinates = coordinates;
    this.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ITextGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Text;
  }

  static getCenterCoordinate(coordinates: ITextGeometryData): ICoordinate {
    return { ...coordinates.point };
  }

  getCenterCoordinate(): ICoordinate {
    return TextGeometry.getCenterCoordinate(this.coordinates);
  }

  draw(ctx: CanvasRenderingContext2D, style: ITextStyle): void {
    ctx.save();
    ctx.beginPath();

    ctx.font = style.font;
    ctx.textAlign = style.textAlign;
    ctx.textBaseline = style.textBaseline;
    ctx.direction = style.direction;

    const map = this.getMap();

    const {
      coordinates: { text, point },
    } = this;
    const pixel = map.pointToPixel(BMap.Point(point.lng, point.lat));

    ctx.fillText(text, pixel.x, pixel.y);
    ctx.restore();
  }
}

export default TextGeometry;
