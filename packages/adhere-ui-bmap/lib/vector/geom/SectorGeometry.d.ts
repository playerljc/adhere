import { GeometryType, IGeometryStyle, IPixel, ISectorGeometry, ISectorGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * SectorGeometry
 * @class SectorGeometry
 * @classdesc SectorGeometry - 扇形
 */
declare class SectorGeometry extends Geometry implements ISectorGeometry {
    coordinates: ISectorGeometryData;
    constructor(coordinates: ISectorGeometryData);
    setCoordinates(coordinates: ISectorGeometryData): void;
    getCoordinates(): ISectorGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ISectorGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawSector({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ISectorGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    /**
     * draw - 绘制一个五角星
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, style, pixel, isScale, }: {
        coordinates: ISectorGeometryData;
        pixel: IPixel;
        map: any;
        isScale: boolean;
        style?: IGeometryStyle;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean;
}
export default SectorGeometry;
