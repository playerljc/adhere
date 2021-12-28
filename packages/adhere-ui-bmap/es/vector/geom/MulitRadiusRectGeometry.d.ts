import { GeometryType, IGeometryStyle, IRadiusRectGeometryData } from '../types';
import MulitRectGeometry from './MulitRectGeometry';
/**
 * MulitRadiusRectGeometry
 * @class MulitRadiusRectGeometry
 * @classdesc MulitRadiusRectGeometry - 多个圆角矩形
 */
declare class MulitRadiusRectGeometry extends MulitRectGeometry {
    coordinates: IRadiusRectGeometryData[];
    constructor(coordinates: IRadiusRectGeometryData[]);
    getType(): GeometryType;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
}
export default MulitRadiusRectGeometry;
