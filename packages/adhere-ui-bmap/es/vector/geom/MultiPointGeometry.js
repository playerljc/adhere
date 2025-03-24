import * as turf from '@turf/turf';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import PointGeometry from './PointGeometry';
/**
 * MultiPointGeometry
 * @class MultiPointGeometry
 * @classdesc MultiPointGeometry - 多个点
 */
class MultiPointGeometry extends Geometry {
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
        return [...this.coordinates];
    }
    getType() {
        return GeometryType.MultiPoint;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const map = this.getMap();
        const features = turf.featureCollection(coordinates.map((p) => {
            const pixel = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.lng, p.lat));
            return turf.point([pixel.x, pixel.y]);
        }));
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
            PointGeometry.drawPoint({ ctx, style, coordinates: coordinate, map });
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
            return PointGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                pixel,
                style,
            });
        });
    }
}
export default MultiPointGeometry;
