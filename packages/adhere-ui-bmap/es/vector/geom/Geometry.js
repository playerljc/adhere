import GeometryStyle from '../style/GeometryStyle';
import TextStyle from '../style/TextStyle';
/**
 * Geometry
 * @class Geometry
 * @classdesc Geometry
 */
class Geometry {
    context = null;
    setContext(context) {
        this.context = context;
    }
    getContext() {
        return this.context;
    }
    drawText({ ctx, text, style, textStyle, }) {
        // draw文字
        ctx.beginPath();
        ctx.save();
        const targetTextStyle = { ...TextStyle, ...(textStyle ?? {}) };
        ctx.font = targetTextStyle.font;
        ctx.textAlign = targetTextStyle.textAlign;
        ctx.textBaseline = targetTextStyle.textBaseline;
        ctx.direction = targetTextStyle.direction;
        ctx.strokeStyle = targetTextStyle.strokeStyle;
        ctx.fillStyle = targetTextStyle.fillStyle;
        const targetStyle = { ...GeometryStyle, ...(style ?? {}) };
        ctx.lineWidth = targetStyle.lineWidth;
        ctx.lineJoin = targetStyle.lineJoin;
        ctx.lineCap = targetStyle.lineCap;
        ctx.setLineDash(targetStyle.lineDash);
        ctx.lineDashOffset = targetStyle.lineDashOffset;
        ctx.strokeStyle = targetStyle.strokeStyle;
        const centerPixel = this.getCenterCoordinate({ ctx, style, isScale: true });
        ctx.fillText(text || '', centerPixel.x, centerPixel.y);
        ctx.restore();
    }
    getMap() {
        return this?.getLayer()?.getMap();
    }
    getLayer() {
        const context = this.getContext();
        if (!context)
            return null;
        return context.getContext().getContext();
    }
}
export default Geometry;
