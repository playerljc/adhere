import Geometry from './Geometry';
import { IRegularPolygonGeometryData, IRegularPolygonGeometry, GeometryType, IGeometryStyle, IPixel } from '../types';
/**
 * RegularPolygonGeometry
 * @class RegularPolygonGeometry
 * @classdesc RegularPolygonGeometry - 正多边形
 */
declare class RegularPolygonGeometry extends Geometry implements IRegularPolygonGeometry {
    coordinates: IRegularPolygonGeometryData;
    constructor(coordinates: IRegularPolygonGeometryData);
    setCoordinates(coordinates: IRegularPolygonGeometryData): void;
    getCoordinates(): IRegularPolygonGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: IRegularPolygonGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawRegularPolygon({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: IRegularPolygonGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    /**
     * draw - 绘制一个多边形
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, pixel, style, isScale, }: {
        coordinates: IRegularPolygonGeometryData;
        pixel: IPixel;
        style?: IGeometryStyle;
        map: any;
        isScale: boolean;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean;
}
export default RegularPolygonGeometry;
