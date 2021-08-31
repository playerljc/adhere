import { GeometryType, ILineStringGeometryData, IMulitLineStringGeometry, IPixel, IGeometryStyle } from '../types';
import Geometry from './Geometry';
/**
 * MulitLineStringGeometry
 * @class MulitLineStringGeometry
 * @classdesc MulitLineStringGeometry - 多条直线
 */
declare class MulitLineStringGeometry extends Geometry implements IMulitLineStringGeometry {
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
export default MulitLineStringGeometry;
