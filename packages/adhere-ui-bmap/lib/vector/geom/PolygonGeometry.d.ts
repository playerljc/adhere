import { GeometryType, ICoordinate, IGeometryStyle, IPixel, IPolygonGeometry } from '../types';
import Geometry from './Geometry';
/**
 * PolygonGeometry
 * @class PolygonGeometry
 * @classdesc PolygonGeometry - 多边形
 */
declare class PolygonGeometry extends Geometry implements IPolygonGeometry {
    coordinates: ICoordinate[];
    constructor(coordinates: ICoordinate[]);
    setCoordinates(coordinates: ICoordinate[]): void;
    getCoordinates(): ICoordinate[];
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate[];
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawPolygon({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ICoordinate[];
        map: any;
    }): void;
    /**
     * draw - 绘制一个多边形
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, pixel, }: {
        coordinates: ICoordinate[];
        pixel: IPixel;
        map: any;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel): boolean;
}
export default PolygonGeometry;
