import { GeometryType, IGeometryStyle, ILeafGeometryData, IMulitLeafGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MulitLeafGeometry
 * @class MulitLeafGeometry
 * @classdesc MulitLeafGeometry - 多个n叶草
 */
declare class MulitLeafGeometry extends Geometry implements IMulitLeafGeometry {
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
export default MulitLeafGeometry;
