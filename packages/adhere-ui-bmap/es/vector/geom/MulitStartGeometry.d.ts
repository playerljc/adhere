import { GeometryType, IMulitStartGeometry, IStartGeometryData, IGeometryStyle, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MulitStartGeometry
 * @class MulitStartGeometry
 * @classdesc MulitStartGeometry - 多个五角星
 */
declare class MulitStartGeometry extends Geometry implements IMulitStartGeometry {
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
export default MulitStartGeometry;
