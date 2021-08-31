import { GeometryType, ICoordinate, IMulitPointGeometry, IPixel, IGeometryStyle } from '../types';
import Geometry from './Geometry';
/**
 * MulitPointGeometry
 * @class MulitPointGeometry
 * @classdesc MulitPointGeometry - 多个点
 */
declare class MulitPointGeometry extends Geometry implements IMulitPointGeometry {
    coordinates: ICoordinate[];
    constructor(coordinates: ICoordinate[]);
    setCoordinates(coordinates: ICoordinate[]): void;
    getCoordinates(): ICoordinate[];
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
export default MulitPointGeometry;
