import { GeometryType, IGeometryStyle, IMulitRectGeometry, IPixel, IRectGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * MulitRectGeometry
 * @class MulitRectGeometry
 * @classdesc MulitRectGeometry - 多个矩形
 */
declare class MulitRectGeometry extends Geometry implements IMulitRectGeometry {
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
export default MulitRectGeometry;
