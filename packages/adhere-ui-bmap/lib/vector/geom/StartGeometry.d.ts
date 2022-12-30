import { GeometryType, IGeometryStyle, IPixel, IStartGeometry, IStartGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * StartGeometry
 * @class StartGeometry
 * @classdesc StartGeometry - 五角星
 */
declare class StartGeometry extends Geometry implements IStartGeometry {
    coordinates: IStartGeometryData;
    constructor(coordinates: IStartGeometryData);
    setCoordinates(coordinates: IStartGeometryData): void;
    getCoordinates(): IStartGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: IStartGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    static drawStart({ ctx, style, coordinates, map, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: IStartGeometryData;
        map: any;
        isScale: boolean;
    }): void;
    /**
     * draw - 绘制一个五角星
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, pixel, style, isScale, }: {
        coordinates: IStartGeometryData;
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
    isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean;
}
export default StartGeometry;
