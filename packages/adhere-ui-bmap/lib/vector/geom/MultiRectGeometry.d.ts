import { GeometryType, IGeometryStyle, IMultiRectGeometry, IPixel, IRectGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * MultiRectGeometry
 * @class MultiRectGeometry
 * @classdesc MultiRectGeometry - 多个矩形
 */
declare class MultiRectGeometry extends Geometry implements IMultiRectGeometry {
    coordinates: IRectGeometryData[];
    constructor(coordinates: IRectGeometryData[]);
    setCoordinates(coordinates: IRectGeometryData[]): void;
    getCoordinates(): IRectGeometryData[];
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
    isPixelInGeometry(pixel: IPixel, style?: IGeometryStyle): boolean;
}
export default MultiRectGeometry;
