import * as turf from '@turf/turf';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
/**
 * PolygonGeometry
 * @class PolygonGeometry
 * @classdesc PolygonGeometry - 多边形
 */
class PolygonGeometry extends Geometry {
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
        return [...this.coordinates];
    }
    getType() {
        return GeometryType.Polygon;
    }
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }) {
        // const polygonCoordinates = [...coordinates];
        // polygonCoordinates.push(coordinates[0]);
        const polygon = turf.polygon([
            coordinates.map((coordinate) => {
                // @ts-ignore
                const pixel = map.pointToPixel(
                // @ts-ignore
                new BMap.Point(coordinate.lng, coordinate.lat));
                return [pixel.x, pixel.y];
            }),
        ]);
        const center = turf.centerOfMass(polygon);
        return {
            x: center.geometry.coordinates[0],
            y: center.geometry.coordinates[1],
        };
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        return PolygonGeometry.getCenterCoordinate({
            coordinates: this.coordinates,
            ctx,
            map: this.getMap(),
            style,
            isScale,
        });
    }
    static drawPolygon({ ctx, style, coordinates, map, }) {
        ctx.save();
        const targetStyle = {
            ...GeometryStyle,
            ...(style ?? {}),
        };
        ctx.beginPath();
        ctx.lineWidth = targetStyle.lineWidth;
        ctx.lineJoin = targetStyle.lineJoin;
        ctx.lineCap = targetStyle.lineCap;
        ctx.setLineDash(targetStyle.lineDash);
        ctx.lineDashOffset = targetStyle.lineDashOffset;
        ctx.strokeStyle = targetStyle.strokeStyle;
        ctx.fillStyle = targetStyle.fillStyle;
        coordinates.forEach((coordinate, index) => {
            // @ts-ignore
            const pixel = map.pointToPixel(new BMap.Point(coordinate.lng, coordinate.lat));
            if (index === 0) {
                ctx.moveTo(pixel.x, pixel.y);
            }
            else {
                ctx.lineTo(pixel.x, pixel.y);
            }
        });
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    }
    /**
     * draw - 绘制一个多边形
     * @param ctx
     * @param style
     */
    draw(ctx, style) {
        PolygonGeometry.drawPolygon({
            ctx,
            style,
            coordinates: this.coordinates,
            map: this.getMap(),
        });
    }
    static isPixelInGeometry({ coordinates, map, pixel, }) {
        const point = turf.point([pixel.x, pixel.y]);
        // const polyCoordinates = [...coordinates];
        // polyCoordinates.push(coordinates[0]);
        const poly = turf.polygon([
            coordinates.map((coordinate) => {
                // @ts-ignore
                const p = map.pointToPixel(new BMap.Point(coordinate.lng, coordinate.lat));
                return [p.x, p.y];
            }),
        ]);
        return turf.booleanPointInPolygon(point, poly);
    }
    /**
     * isPixelInGeometry
     * @param pixel
     * @return boolean
     */
    isPixelInGeometry(pixel) {
        return PolygonGeometry.isPixelInGeometry({
            coordinates: this.coordinates,
            pixel,
            map: this.getMap(),
        });
    }
}
export default PolygonGeometry;
