import { GeometryType, ITextGeometry, ITextStyle, ITextGeometryData, ICoordinate, IPixel } from '../types';
import Geometry from './Geometry';
/**
 * TextGeometry
 * @class TextGeometry
 * @classdesc TextGeometry - 文本
 */
declare class TextGeometry extends Geometry implements ITextGeometry {
    coordinates: ITextGeometryData;
    constructor(coordinates: ITextGeometryData);
    setCoordinates(coordinates: ITextGeometryData): void;
    getCoordinates(): ITextGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate(coordinates: ITextGeometryData): ICoordinate;
    getCenterCoordinate(): ICoordinate;
    draw(ctx: CanvasRenderingContext2D, style: ITextStyle): void;
    /**
     * isPixelInGeometry
     * @param pixel
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel): boolean;
}
export default TextGeometry;
