import { GeometryType, IMulitRegularPolygonGeometry, IRegularPolygonGeometryData, IGeometryStyle, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * MulitRegularPolygonGeometry
 * @class MulitRegularPolygonGeometry
 * @classdesc MulitRegularPolygonGeometry - 多个正多边形
 */
declare class MulitRegularPolygonGeometry extends Geometry implements IMulitRegularPolygonGeometry {
    coordinates: IRegularPolygonGeometryData[];
    constructor(coordinates: IRegularPolygonGeometryData[]);
    setCoordinates(coordinates: IRegularPolygonGeometryData[]): void;
    getCoordinates(): IRegularPolygonGeometryData[];
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
export default MulitRegularPolygonGeometry;
