import { GeometryType, IGeometryStyle, IMultiRegularPolygonGeometry, IPixel, IRegularPolygonGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * MultiRegularPolygonGeometry
 * @class MultiRegularPolygonGeometry
 * @classdesc MultiRegularPolygonGeometry - 多个正多边形
 */
declare class MultiRegularPolygonGeometry extends Geometry implements IMultiRegularPolygonGeometry {
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
export default MultiRegularPolygonGeometry;
