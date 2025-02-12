import { GeometryType, IGeometryStyle, IMultiStartGeometry, IPixel, IStartGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * MultiStartGeometry
 * @class MultiStartGeometry
 * @classdesc MultiStartGeometry - 多个五角星
 */
declare class MultiStartGeometry extends Geometry implements IMultiStartGeometry {
    coordinates: IStartGeometryData[];
    constructor(coordinates: IStartGeometryData[]);
    setCoordinates(coordinates: IStartGeometryData[]): void;
    getCoordinates(): IStartGeometryData[];
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
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean;
}
export default MultiStartGeometry;
