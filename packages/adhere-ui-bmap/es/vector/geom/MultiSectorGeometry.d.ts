import { GeometryType, IGeometryStyle, IMultiSectorGeometry, IPixel, ISectorGeometryData } from '../types';
import Geometry from './Geometry';
/**
 * MultiSectorGeometry
 * @class MultiSectorGeometry
 * @classdesc MultiSectorGeometry - 多个扇形
 */
declare class MultiSectorGeometry extends Geometry implements IMultiSectorGeometry {
    coordinates: ISectorGeometryData[];
    constructor(coordinates: ISectorGeometryData[]);
    setCoordinates(coordinates: ISectorGeometryData[]): void;
    getCoordinates(): ISectorGeometryData[];
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
export default MultiSectorGeometry;
