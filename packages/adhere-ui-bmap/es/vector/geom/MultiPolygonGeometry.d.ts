import { GeometryType, ICoordinate, IGeometryStyle, IMultiPolygonGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MultiPolygonGeometry
 * @class MultiPolygonGeometry
 * @classdesc MultiPolygonGeometry - 多个多边形
 */
declare class MultiPolygonGeometry extends Geometry implements IMultiPolygonGeometry {
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
export default MultiPolygonGeometry;
