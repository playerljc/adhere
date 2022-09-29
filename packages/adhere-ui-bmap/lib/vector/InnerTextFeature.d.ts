import Feature from './Feature';
import { IInnerTextFeature, IInnerTextFeatureParams, ITextStyle } from './types';
/**
 * InnerTextFeature
 * @class InnerTextFeature
 * @classdesc 包含文本的要素
 */
declare class InnerTextFeature extends Feature implements IInnerTextFeature {
    text: string;
    textStyle: ITextStyle;
    constructor(params: IInnerTextFeatureParams);
    getText(): string;
    getTextStyle(): ITextStyle;
    setText(text: string): void;
    setTextStyle(style: ITextStyle): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
export default InnerTextFeature;
