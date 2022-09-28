import { GeometryType, IGeometryStyle, IRadiusRectGeometryData } from '../types';
import RectGeometry from './RectGeometry';
/**
 * RadiusRectGeometry
 * @class RadiusRectGeometry
 * @classdesc 圆角矩形
 */
declare class RadiusRectGeometry extends RectGeometry {
    coordinates: IRadiusRectGeometryData;
    constructor(coordinates: IRadiusRectGeometryData);
    getType(): GeometryType;
    /**
     * drawRadiusRect
     * @param ctx
     * @param style
     * @param coordinates
     * @param isScale
     * @param map
     */
    static drawRadiusRect({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: IRadiusRectGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
}
export default RadiusRectGeometry;
