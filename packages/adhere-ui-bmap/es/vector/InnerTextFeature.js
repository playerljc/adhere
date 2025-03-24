import Feature from './Feature';
import TextStyle from './style/TextStyle';
import { VectorActions } from './types';
/**
 * InnerTextFeature
 * @class InnerTextFeature
 * @classdesc 包含文本的要素
 */
class InnerTextFeature extends Feature {
    text;
    textStyle;
    constructor(params) {
        const { text, textStyle, ...superParams } = params;
        // @ts-ignore
        super(superParams);
        this.text = params.text;
        this.textStyle = params.textStyle;
    }
    getText() {
        return this.text;
    }
    getTextStyle() {
        return this.textStyle;
    }
    setText(text) {
        this.text = text;
        this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    setTextStyle(style) {
        this.textStyle = style;
        this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    draw(ctx) {
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
