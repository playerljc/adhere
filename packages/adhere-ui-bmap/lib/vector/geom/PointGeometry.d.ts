import { GeometryType, ICoordinate, IPointGeometryStyle, IPointGeometry, IPixel, IGeometryStyle } from '../types';
import Geometry from './Geometry';
/**
 * PointGeometry
 * @class PointGeometry
 * @classdesc PointGeometry - 点
 */
declare class PointGeometry extends Geometry implements IPointGeometry {
    coordinates: ICoordinate;
    static drawMapping: Map<string, typeof PointGeometry.drawCirclePoint>;
    static isPixelInGeometryMapping: Map<string, Function>;
    static centerCoordinateMapping: Map<string, Function>;
    static pointTypeToCoordinatesMapping: Map<string, Function>;
    constructor(coordinates: ICoordinate);
    setCoordinates(coordinates: ICoordinate): void;
    getCoordinates(): ICoordinate;
    getType(): GeometryType;
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
    }): IPixel;
    getCenterCoordinate({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        isScale: boolean;
    }): IPixel;
    /**
     * drawCirclePoint - 绘制圆的点
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawCirclePoint({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawImagePoint - 绘制图片的点
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawImagePoint({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawRegularPolygon
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawRegularPolygon({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawStart
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawStart({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawSector
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawSector({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawRect
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawRect({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    static drawRadiusRect({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    static drawLeaf({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IPointGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * drawPoint
     * @param ctx
     * @param style
     * @param coordinates
     * @param map
     */
    static drawPoint({ ctx, style, coordinates, map, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        coordinates: ICoordinate;
        map: any;
    }): void;
    /**
     * draw
     * @param ctx
     * @param style
     */
    draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void;
    static isPixelInGeometry({ coordinates, map, pixel, style, }: {
        coordinates: ICoordinate;
        pixel: IPixel;
        map: any;
        style: IGeometryStyle;
    }): boolean;
    /**
     * isPixelInGeometry
     * @param pixel
     * @param style
     * @return boolean
     */
    isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean;
}
export default PointGeometry;
