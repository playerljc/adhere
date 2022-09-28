import { GeometryType, ICoordinate, IGeometryStyle, IMulitPolygonGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MulitPolygonGeometry
 * @class MulitPolygonGeometry
 * @classdesc MulitPolygonGeometry - 多个多边形
 */
declare class MulitPolygonGeometry extends Geometry implements IMulitPolygonGeometry {
    coordinates: Array<ICoordinate[]>;
    constructor(coordinates: Array<ICoordinate[]>);
    setCoordinates(coordinates: Array<ICoordinate[]>): void;
    getCoordinates(): Array<ICoordinate[]>;
    getType(): GeometryType;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    /**
     * isPixelInGeometry
     * @param pixel
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel): boolean;
}
export default MulitPolygonGeometry;
