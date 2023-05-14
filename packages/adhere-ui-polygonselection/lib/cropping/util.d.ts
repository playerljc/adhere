import { CircleData, IActionData, ICircleData, IDiamondData, IPoint, IPolygonData, IRectangleData, IStartData, ITriangleData, OutCircleData, Points, RectangleData } from '../types';
/**
 * drawCircle
 * @param {CanvasRenderingContext2D} ctx
 * @param {ICircleData} data
 */
export declare function drawCircle(ctx: CanvasRenderingContext2D, data: ICircleData): void;
/**
 * getCircleRectangle
 * @param {ICircleData} circleData
 * @return {RectangleData}
 */
export declare function getCircleRectangle(circleData: CircleData): RectangleData;
/**
 * drawRectangle
 * @param {CanvasRenderingContext2D} ctx
 * @param {IRectangleData} data
 */
export declare function drawRectangle(ctx: CanvasRenderingContext2D, data: IRectangleData): void;
/**
 * getSelfRectangle
 * @param {IRectangleData} rectangleData
 * @return {RectangleData}
 */
export declare function getSelfRectangle(rectangleData: RectangleData): RectangleData;
/**
 * drawDiamond
 * @param {CanvasRenderingContext2D} ctx
 * @param {IDiamondData} data
 */
export declare function drawDiamond(ctx: CanvasRenderingContext2D, data: IDiamondData): void;
/**
 * getDiamondRectangle
 * @param {IDiamondData} diamondData
 * @return {RectangleData}
 */
export declare function getDiamondRectangle(diamondData: RectangleData): RectangleData;
/**
 * drawStart
 * @param {CanvasRenderingContext2D} ctx
 * @param {IStartData} data
 */
export declare function drawStart(ctx: CanvasRenderingContext2D, data: IStartData): void;
/**
 * getStartRectangle
 * @param {IStartData} startData
 * @return {RectangleData}
 */
export declare function getStartRectangle(startData: OutCircleData): RectangleData;
/**
 * drawTriangle
 * @param {CanvasRenderingContext2D} ctx
 * @param {ITriangleData} data
 */
export declare function drawTriangle(ctx: CanvasRenderingContext2D, data: ITriangleData): void;
/**
 * getTriangleRectangle
 * @param {ITriangleData} triangleData
 * @return {RectangleData}
 */
export declare function getTriangleRectangle(triangleData: Points): RectangleData;
/**
 * drawPolygon
 * @param {CanvasRenderingContext2D} ctx
 * @param {IPolygonData} data
 */
export declare function drawPolygon(ctx: CanvasRenderingContext2D, data: IPolygonData): void;
/**
 * getPolygonRectangle
 * @param {IPolygonData} polygonData
 * @return {RectangleData}
 */
export declare function getPolygonRectangle(polygonData: IPoint[]): RectangleData;
/**
 * getClipDataUrl
 * @param {IActionData} data
 * @param {CanvasRenderingContext2D} clipCtx
 * @return {string}
 */
export declare function getClipDataUrl({ data, clipCtx, }: {
    data: IActionData;
    clipCtx: CanvasRenderingContext2D;
}): string;
/**
 * sort
 * @param {Array<{ [key: string]: any; sort?: number }>} arr
 * @returns {Array<any>}
 */
export declare function sort(arr: Array<{
    [key: string]: any;
    sort?: number;
}>): Array<any>;
