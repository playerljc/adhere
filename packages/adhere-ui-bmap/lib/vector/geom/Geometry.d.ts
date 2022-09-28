import { GeometryType, IFeature, IGeometry, IGeometryStyle, IPixel, ITextStyle, IVectorLayer } from '../types';
/**
 * Geometry
 * @class Geometry
 * @classdesc Geometry
 */
declare abstract class Geometry implements IGeometry {
    context: IFeature | null;
    abstract draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    abstract getType(): GeometryType;
    abstract getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    abstract isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean;
    setContext(context: IFeature): void;
    getContext(): IFeature | null;
    drawText({ ctx, text, style, textStyle, }: {
        ctx: CanvasRenderingContext2D;
        text: string;
        style: IGeometryStyle;
        textStyle: ITextStyle;
    }): void;
    protected getMap(): any;
    protected getLayer(): IVectorLayer | null;
}
export default Geometry;
