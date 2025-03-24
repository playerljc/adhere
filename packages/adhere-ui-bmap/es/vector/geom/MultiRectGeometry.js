import * as turf from '@turf/turf';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import RectGeometry from './RectGeometry';
/**
 * MultiRectGeometry
 * @class MultiRectGeometry
 * @classdesc MultiRectGeometry - 多个矩形
 */
class MultiRectGeometry extends Geometry {
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
        return GeometryType.MultiRect;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const map = this.getMap();
        const geojson = coordinates.map((p) => {
            const pixel = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.leftTop.lng, p.leftTop.lat));
            return turf.point([pixel.x, pixel.y]);
        });
        const features = turf.featureCollection(geojson);
        const center = turf.center(features);
        return {
            x: center.geometry.coordinates[0],
            y: center.geometry.coordinates[1],
        };
    }
    draw(ctx, style) {
        const { coordinates } = this;
        const map = this.getMap();
        coordinates.forEach((coordinates) => {
            RectGeometry.drawRect({ ctx, style, coordinates, map, isScale: true });
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
            return RectGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                pixel,
                style,
                isScale: true,
            });
        });
    }
}
export default MultiRectGeometry;
