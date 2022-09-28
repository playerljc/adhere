import { GeometryType, IGeometryStyle, ILeafGeometry, ILeafGeometryData, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * LeafGeometry
 * @class LeafGeometry
 * @classdesc LeafGeometry - N叶草
 */
declare class LeafGeometry extends Geometry implements ILeafGeometry {
    coordinates: ILeafGeometryData;
    constructor(coordinates: ILeafGeometryData);
    setCoordinates(coordinates: ILeafGeometryData): void;
    getCoordinates(): ILeafGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ILeafGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawLeaf({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ILeafGeometryData;
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
        coordinates: ILeafGeometryData;
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
export default LeafGeometry;
