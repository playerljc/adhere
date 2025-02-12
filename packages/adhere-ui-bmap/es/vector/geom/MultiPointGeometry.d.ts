import { GeometryType, ICoordinate, IGeometryStyle, IMultiPointGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MultiPointGeometry
 * @class MultiPointGeometry
 * @classdesc MultiPointGeometry - 多个点
 */
declare class MultiPointGeometry extends Geometry implements IMultiPointGeometry {
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
export default MultiPointGeometry;
