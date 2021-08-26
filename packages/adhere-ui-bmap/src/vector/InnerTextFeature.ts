import Feature from './Feature';
import {
  IInnerTextFeatureParams,
  IInnerTextFeature,
  ITextStyle,
  VectorActions,
  ICoordinate,
} from '../types';
import TextStyle from './style/TextStyle';

/**
 * InnerTextFeature
 * @class InnerTextFeature
 * @classdesc 包含文本的要素
 */
class InnerTextFeature extends Feature implements IInnerTextFeature {
  text: string;
  textStyle: ITextStyle;

  constructor(params: IInnerTextFeatureParams) {
    const { text, textStyle, ...superParams } = params;

    // @ts-ignore
    super(superParams);

    this.text = params.text;
    this.textStyle = params.textStyle;
  }

  getText(): string {
    return this.text;
  }

  getTextStyle(): ITextStyle {
    return this.textStyle;
  }

  setText(text: string): void {
    this.text = text;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  setTextStyle(style: ITextStyle): void {
    this.textStyle = style;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    ctx.beginPath();

    // draw文字
    ctx.save();

    const targetStyle = this.textStyle || { ...TextStyle };
    ctx.font = targetStyle.font;
    ctx.textAlign = targetStyle.textAlign;
    ctx.textBaseline = targetStyle.textBaseline;
    ctx.direction = targetStyle.direction;

    const coordinate: ICoordinate = this.geometry.getCenterCoordinate();

    const map = this.getMap();

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(coordinate.lng, coordinate.lat));

    ctx.fillText(this.text || '', pixel.x, pixel.y);

    ctx.restore();
  }
}

export default InnerTextFeature;
