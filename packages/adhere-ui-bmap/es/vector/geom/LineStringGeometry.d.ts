import { GeometryType, IGeometryStyle, ILineStringGeometry, ILineStringGeometryData, ILineStringGeometryStyle, IPixel, ITextStyle } from '../types';
import Geometry from './Geometry';
/**
 * LineStringGeometry
 * @class LineStringGeometry
 * @classdesc LineStringGeometry - 直线
 */
declare class LineStringGeometry extends Geometry implements ILineStringGeometry {
    coordinates: ILineStringGeometryData;
    constructor(coordinates: ILineStringGeometryData);
    /**
     * drawStartArrow
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawStartArrow({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: ILineStringGeometryStyle;
        coordinates: ILineStringGeometryData;
        map: any;
    }): void;
    /**
     * drawEndArrow
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawEndArrow({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: ILineStringGeometryStyle;
        coordinates: ILineStringGeometryData;
        map: any;
    }): void;
    /**
     * drawLineString
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawLineString({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ILineStringGeometryData;
        map: any;
    }): void;
    setCoordinates(coordinates: ILineStringGeometryData): void;
    getCoordinates(): ILineStringGeometryData;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ILineStringGeometryData;
        map: any;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }): IPixel;
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    drawText({ ctx, text, style, textStyle, }: {
        ctx: CanvasRenderingContext2D;
        text: string;
        style: IGeometryStyle;
        textStyle: ITextStyle;
    }): void;
    static isPixelInGeometry({ pixel, style, coordinates, map, }: {
        pixel: IPixel;
        style: IGeometryStyle;
        coordinates: ILineStringGeometryData;
        map: any;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean;
}
export default LineStringGeometry;
