import TextStyle from '../style/TextStyle';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
/**
 * TextGeometry
 * @class TextGeometry
 * @classdesc TextGeometry - 文本
 */
class TextGeometry extends Geometry {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
    setCoordinates(coordinates) {
        this.coordinates = coordinates;
        this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    getCoordinates() {
        return { ...this.coordinates };
    }
    getType() {
        return GeometryType.Text;
    }
    static getCenterCoordinate(coordinates) {
        return { ...coordinates.point };
    }
    // @ts-ignore
    getCenterCoordinate() {
        return TextGeometry.getCenterCoordinate(this.coordinates);
    }
    // @ts-ignore
    draw(ctx, style) {
        ctx.save();
        const targetStyle = { ...TextStyle, ...(style ?? {}) };
        ctx.beginPath();
        ctx.font = targetStyle.font;
        ctx.textAlign = targetStyle.textAlign;
        ctx.textBaseline = targetStyle.textBaseline;
        ctx.direction = targetStyle.direction;
        ctx.fillStyle = targetStyle.fillStyle;
        ctx.strokeStyle = targetStyle.strokeStyle;
        const map = this.getMap();
        const { coordinates: { text, point }, } = this;
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
    isPixelInGeometry(pixel) {
        return false;
    }
}
export default TextGeometry;
