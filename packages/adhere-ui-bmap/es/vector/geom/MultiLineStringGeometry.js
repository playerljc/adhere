import * as turf from '@turf/turf';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, VectorActions, } from '../types';
import Geometry from './Geometry';
import LineStringGeometry from './LineStringGeometry';
/**
 * MultiLineStringGeometry
 * @class MultiLineStringGeometry
 * @classdesc MultiLineStringGeometry - 多条直线
 */
class MultiLineStringGeometry extends Geometry {
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
        return GeometryType.MultiLineString;
    }
    getCenterCoordinate({ ctx, style, isScale, }) {
        const { coordinates } = this;
        const map = this.getMap();
        const points = [];
        coordinates.forEach((p) => {
            const pixel1 = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.point1.lng, p.point1.lat));
            const pixel2 = map.pointToPixel(
            // @ts-ignore
            new BMap.Point(p.point2.lng, p.point2.lat));
            // @ts-ignore
            points.push(turf.point([pixel1.x, pixel1.y]));
            // @ts-ignore
            points.push(turf.point([pixel2.x, pixel2.y]));
        });
        const features = turf.featureCollection(points);
        const center = turf.center(features);
        return {
            x: center.geometry.coordinates[0],
            y: center.geometry.coordinates[1],
        };
    }
    draw(ctx, style) {
        // 绘制多条直线
        const { coordinates } = this;
        const targetStyle = {
            ...GeometryStyle,
            ...(style ?? {}),
            arrow: {
                draw: false,
                direction: 'end',
                type: 'normal',
                size: 'normal',
            },
        };
        coordinates.forEach((lineStringGeometryData) => {
            LineStringGeometry.drawLineString({
                ctx,
                style: targetStyle,
                coordinates: lineStringGeometryData,
                map: this.getMap(),
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
            return LineStringGeometry.isPixelInGeometry({
                pixel,
                style,
                coordinates: coordinate,
                map: this.getMap(),
            });
        });
    }
}
export default MultiLineStringGeometry;
