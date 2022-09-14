import TextStyle from '../style/TextStyle';
import {
  GeometryType,
  ICoordinate,
  IPixel,
  ITextGeometry,
  ITextGeometryData,
  ITextStyle,
  VectorActions,
} from '../types';
import Geometry from './Geometry';

/**
 * TextGeometry
 * @class TextGeometry
 * @classdesc TextGeometry - 文本
 */
class TextGeometry extends Geometry implements ITextGeometry {
  coordinates: ITextGeometryData;

  constructor(coordinates: ITextGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ITextGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
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

  // @ts-ignore
  getCenterCoordinate(): ICoordinate {
    return TextGeometry.getCenterCoordinate(this.coordinates);
  }

  // @ts-ignore
  draw(ctx: CanvasRenderingContext2D, style: ITextStyle): void {
    ctx.save();

    const targetStyle = { ...TextStyle, ...(style || {}) };

    ctx.beginPath();

    ctx.font = targetStyle.font;
    ctx.textAlign = targetStyle.textAlign;
    ctx.textBaseline = targetStyle.textBaseline;
    ctx.direction = targetStyle.direction;
    ctx.fillStyle = targetStyle.fillStyle;
    ctx.strokeStyle = targetStyle.strokeStyle;

    const map = this.getMap();

    const {
      coordinates: { text, point },
    } = this;

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(point.lng, point.lat));

    ctx.fillText(text, pixel.x, pixel.y);
    ctx.restore();
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel): boolean {
    return false;
  }
}

export default TextGeometry;
