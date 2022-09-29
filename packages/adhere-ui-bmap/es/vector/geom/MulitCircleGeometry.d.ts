import { GeometryType, ICircleGeometryData, IGeometryStyle, IMulitCircleGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MulitCircleGeometry
 * @class MulitCircleGeometry
 * @classdesc MulitCircleGeometry - 多个圆
 */
declare class MulitCircleGeometry extends Geometry implements IMulitCircleGeometry {
    coordinates: ICircleGeometryData[];
    constructor(coordinates: ICircleGeometryData[]);
    setCoordinates(coordinates: ICircleGeometryData[]): void;
    getCoordinates(): ICircleGeometryData[];
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
export default MulitCircleGeometry;
