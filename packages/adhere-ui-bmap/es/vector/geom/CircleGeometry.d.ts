import { GeometryType, ICircleGeometry, ICircleGeometryData, IGeometryStyle, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * CircleGeometry
 * @class CircleGeometry
 * @classdesc CircleGeometry - 圆形
 */
declare class CircleGeometry extends Geometry implements ICircleGeometry {
    coordinates: ICircleGeometryData;
    constructor(coordinates: ICircleGeometryData);
    setCoordinates(coordinates: ICircleGeometryData): void;
    getCoordinates(): ICircleGeometryData;
    getType(): GeometryType;
    /**
     * getCenterCoordinate
     * @param ctx
     * @param coordinates
     * @param map
     * @param style
     * @param isScale
     */
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICircleGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawCircle({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ICircleGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, style, pixel, isScale, }: {
        coordinates: ICircleGeometryData;
        pixel: IPixel;
        style: IGeometryStyle;
        map: any;
        isScale: boolean;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean;
}
export default CircleGeometry;
