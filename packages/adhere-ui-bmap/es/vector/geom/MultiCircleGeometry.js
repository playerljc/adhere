import * as turf from '@turf/turf';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, VectorActions, } from '../types';
import CircleGeometry from './CircleGeometry';
import Geometry from './Geometry';
/**
 * MultiCircleGeometry
 * @class MultiCircleGeometry
 * @classdesc MultiCircleGeometry - 多个圆
 */
class MultiCircleGeometry extends Geometry {
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
        return GeometryType.MultiCircle;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const map = this.getMap();
        const points = [];
        coordinates.forEach((p) => {
            const pixel = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.center.lng, p.center.lat));
            // @ts-ignore
            points.push(turf.point([pixel.x, pixel.y]));
        });
        const features = turf.featureCollection(points);
        const center = turf.center(features);
        return {
            x: center.geometry.coordinates[0],
            y: center.geometry.coordinates[1],
        };
    }
    draw(ctx, style) {
        const { coordinates } = this;
        const targetStyle = {
            ...GeometryStyle,
            ...(style ?? {}),
        };
        coordinates.forEach((circleGeometryData) => {
            CircleGeometry.drawCircle({
                ctx,
                style: targetStyle,
                coordinates: circleGeometryData,
                map: this.getMap(),
                isScale: true,
            });
        });
    }
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel, style) {
        return this.coordinates.some((coordinate) => {
            return CircleGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                style,
                pixel,
                isScale: true,
            });
        });
    }
}
export default MultiCircleGeometry;
