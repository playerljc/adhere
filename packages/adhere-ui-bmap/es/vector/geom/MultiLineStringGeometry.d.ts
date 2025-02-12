import { GeometryType, IGeometryStyle, ILineStringGeometryData, IMultiLineStringGeometry, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MultiLineStringGeometry
 * @class MultiLineStringGeometry
 * @classdesc MultiLineStringGeometry - 多条直线
 */
declare class MultiLineStringGeometry extends Geometry implements IMultiLineStringGeometry {
    coordinates: ILineStringGeometryData[];
    constructor(coordinates: ILineStringGeometryData[]);
    setCoordinates(coordinates: ILineStringGeometryData[]): void;
    getCoordinates(): ILineStringGeometryData[];
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
export default MultiLineStringGeometry;
