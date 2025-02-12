import { GeometryType, IGeometryStyle, ILeafGeometryData, IMultiLeafGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MultiLeafGeometry
 * @class MultiLeafGeometry
 * @classdesc MultiLeafGeometry - 多个n叶草
 */
declare class MultiLeafGeometry extends Geometry implements IMultiLeafGeometry {
    coordinates: ILeafGeometryData[];
    constructor(coordinates: ILeafGeometryData[]);
    setCoordinates(coordinates: ILeafGeometryData[]): void;
    getCoordinates(): ILeafGeometryData[];
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
export default MultiLeafGeometry;
