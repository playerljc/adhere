import { GeometryType, IGeometryStyle, IPixel, IRectGeometry, IRectGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * RectGeometry
 * @class RectGeometry
 * @classdesc RectGeometry - 矩形
 */
declare class RectGeometry extends Geometry implements IRectGeometry {
    coordinates: IRectGeometryData;
    constructor(coordinates: IRectGeometryData);
    setCoordinates(coordinates: IRectGeometryData): void;
    getCoordinates(): IRectGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: IRectGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    /**
     * drawRect
     * @param ctx
     * @param style
     * @param coordinates
     * @param isScale
     * @param map
     */
    static drawRect({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: IRectGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    /**
     * draw - 绘制
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, style, pixel, isScale, }: {
        coordinates: IRectGeometryData;
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
export default RectGeometry;
