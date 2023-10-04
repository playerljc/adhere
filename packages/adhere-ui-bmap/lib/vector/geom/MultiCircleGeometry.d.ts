import { GeometryType, ICircleGeometryData, IGeometryStyle, IMultiCircleGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MultiCircleGeometry
 * @class MultiCircleGeometry
 * @classdesc MultiCircleGeometry - 多个圆
 */
declare class MultiCircleGeometry extends Geometry implements IMultiCircleGeometry {
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
export default MultiCircleGeometry;
