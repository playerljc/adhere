import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
/**
 * CircleGeometry
 * @class CircleGeometry
 * @classdesc CircleGeometry - 圆形
 */
class CircleGeometry extends Geometry {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
    setCoordinates(coordinates) {
        this.coordinates = coordinates;
        this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
    }
    getCoordinates() {
        return { ...this.coordinates };
    }
    getType() {
        return GeometryType.Circle;
    }
    /**
     * getCenterCoordinate
     * @param ctx
     * @param coordinates
     * @param map
     * @param style
     * @param isScale
     */
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }) {
        const centerPixel = map.pointToPixel(
        // @ts-ignore
        new BMap.Point(coordinates.center.lng, coordinates.center.lat));
        return { ...centerPixel };
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        return CircleGeometry.getCenterCoordinate({
            coordinates: this.coordinates,
            ctx,
            map: this.getMap(),
            style,
            isScale,
        });
    }
    static drawCircle({ ctx, style, coordinates, map, isScale, }) {
        ctx.save();
        // 绘制圆形
        ctx.beginPath();
        const targetStyle = { ...GeometryStyle, ...(style ?? {}) };
        ctx.lineWidth = targetStyle.lineWidth;
        ctx.lineJoin = targetStyle.lineJoin;
        ctx.lineCap = targetStyle.lineCap;
        ctx.setLineDash(targetStyle.lineDash);
        ctx.lineDashOffset = targetStyle.lineDashOffset;
        ctx.strokeStyle = targetStyle.strokeStyle;
        ctx.fillStyle = targetStyle.fillStyle;
        const { center, radius } = coordinates;
        // @ts-ignore
        const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
        // 比例尺
        const scale = Util.getScale(map);
        // 实际的半径(图上距离)
        let realRadius = radius;
        if (isScale) {
            realRadius = scale * radius;
        }
        ctx.ellipse(pixel.x, pixel.y, realRadius, realRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    }
    draw(ctx, style) {
        CircleGeometry.drawCircle({
            ctx,
            style,
            coordinates: this.coordinates,
            map: this.getMap(),
            isScale: true,
        });
    }
    static isPixelInGeometry({ coordinates, map, style, pixel, isScale, }) {
        // const { center, radius } = coordinates;
        //
        // // @ts-ignore
        // const centerPixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
        //
        // // 比例尺
        // const scale = Util.getScale(map);
        //
        // let realRadius = radius;
        //
        // if (isScale) {
        //   realRadius = scale * radius;
        // }
        //
        // return MathUtil.isPointInCircle(pixel, { center: centerPixel, radius: realRadius });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return false;
        CircleGeometry.drawCircle({
            ctx,
            coordinates,
            style,
            map,
            isScale,
        });
        return ctx.isPointInPath(pixel.x, pixel.y);
    }
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel, style) {
        return CircleGeometry.isPixelInGeometry({
            coordinates: this.coordinates,
            map: this.getMap(),
            style,
            pixel,
            isScale: true,
        });
    }
}
export default CircleGeometry;
