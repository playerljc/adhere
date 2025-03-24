import * as turf from '@turf/turf';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import PolygonGeometry from './PolygonGeometry';
/**
 * MultiPolygonGeometry
 * @class MultiPolygonGeometry
 * @classdesc MultiPolygonGeometry - 多个多边形
 */
class MultiPolygonGeometry extends Geometry {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
    setCoordinates(coordinates) {
        this.coordinates = coordinates;
        this.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    getCoordinates() {
        return [...this.coordinates];
    }
    getType() {
        return GeometryType.MultiPolygon;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const map = this.getMap();
        const geojson = coordinates.map((coordinate) => coordinate.map((p) => {
            const pixel = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.lng, p.lat));
            return [pixel.x, pixel.y];
        }));
        const polygon = turf.polygon(geojson);
        const center = turf.centerOfMass(polygon);
        return {
            x: center.geometry.coordinates[0],
            y: center.geometry.coordinates[1],
        };
    }
    draw(ctx, style) {
        const { coordinates } = this;
        const map = this.getMap();
        coordinates.forEach((coordinate) => {
            PolygonGeometry.drawPolygon({ ctx, style, coordinates: coordinate, map });
        });
    }
    /**
     * isPixelInGeometry
     * @param pixel
     * @return boolean
     */
    isPixelInGeometry(pixel) {
        return this.coordinates.some((coordinate) => {
            return PolygonGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                pixel,
            });
        });
    }
}
export default MultiPolygonGeometry;
