import { GeometryType, IGeometryStyle, IRadiusRectGeometryData } from '../types';
import MultiRectGeometry from './MultiRectGeometry';
/**
 * MultiRadiusRectGeometry
 * @class MultiRadiusRectGeometry
 * @classdesc MultiRadiusRectGeometry - 多个圆角矩形
 */
declare class MultiRadiusRectGeometry extends MultiRectGeometry {
    coordinates: IRadiusRectGeometryData[];
    constructor(coordinates: IRadiusRectGeometryData[]);
    getType(): GeometryType;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
}
export default MultiRadiusRectGeometry;
