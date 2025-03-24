import { GeometryType } from '../types';
import MultiRectGeometry from './MultiRectGeometry';
import RadiusRectGeometry from './RadiusRectGeometry';
/**
 * MultiRadiusRectGeometry
 * @class MultiRadiusRectGeometry
 * @classdesc MultiRadiusRectGeometry - 多个圆角矩形
 */
class MultiRadiusRectGeometry extends MultiRectGeometry {
    coordinates;
    constructor(coordinates) {
        super(coordinates);
        this.coordinates = coordinates;
    }
    getType() {
        return GeometryType.MultiRadiusRect;
    }
    draw(ctx, style) {
        const { coordinates } = this;
        const map = this.getMap();
        coordinates.forEach((coordinates) => {
            RadiusRectGeometry.drawRadiusRect({ ctx, style, coordinates, map, isScale: true });
        });
    }
}
export default MultiRadiusRectGeometry;
