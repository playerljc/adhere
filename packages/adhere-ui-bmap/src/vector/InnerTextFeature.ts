import Feature from './Feature';
import {
  IInnerTextFeatureParams,
  IInnerTextFeature,
  ITextStyle,
  VectorActions,
} from './types';
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
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  setTextStyle(style: ITextStyle): void {
    this.textStyle = style;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    this.geometry.drawText({
      ctx,
      text: this.text,
      style: this.style,
      textStyle: this.textStyle || { ...TextStyle },
    });
  }
}

export default InnerTextFeature;
