import * as turf from '@turf/turf';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import StartGeometry from './StartGeometry';
/**
 * MultiStartGeometry
 * @class MultiStartGeometry
 * @classdesc MultiStartGeometry - 多个五角星
 */
class MultiStartGeometry extends Geometry {
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
        return GeometryType.MultiStart;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const points = [];
        const map = this.getMap();
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
        const map = this.getMap();
        coordinates.forEach((coordinate) => {
            StartGeometry.drawStart({
                ctx,
                style,
                coordinates: coordinate,
                map,
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
            return StartGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                pixel,
                style,
                isScale: true,
            });
        });
    }
}
export default MultiStartGeometry;
