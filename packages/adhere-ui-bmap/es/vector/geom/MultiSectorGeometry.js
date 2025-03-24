import * as turf from '@turf/turf';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import SectorGeometry from './SectorGeometry';
/**
 * MultiSectorGeometry
 * @class MultiSectorGeometry
 * @classdesc MultiSectorGeometry - 多个扇形
 */
class MultiSectorGeometry extends Geometry {
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
        return GeometryType.MultiSector;
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
            SectorGeometry.drawSector({
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
            return SectorGeometry.isPixelInGeometry({
                coordinates: coordinate,
                map: this.getMap(),
                pixel,
                style,
                isScale: true,
            });
        });
    }
}
export default MultiSectorGeometry;
