import { IFeature, IFeatureParams, IGeometry, IGeometryStyle, IPixel, IVectorLayer, IVectorSource } from './types';
/**
 * Feature
 * @class Feature
 * @classdesc 要素
 */
declare class Feature implements IFeature {
    name: string;
    id: string;
    style: IGeometryStyle;
    zIndex: number;
    properties: object;
    geometry: IGeometry;
    context: IVectorSource;
    constructor(params: IFeatureParams);
    protected setGeometryContext(): void;
    draw(ctx: CanvasRenderingContext2D): void;
    getGeometry(): IGeometry;
    getId(): string;
    getName(): string;
    getStyle(): IGeometryStyle;
    getZIndex(): number;
    getProperties(): object;
    setGeometry(geom: IGeometry): void;
    setStyle(style: IGeometryStyle): void;
    setId(id: string): void;
    setName(name: string): void;
    setZIndex(zIndex: number): void;
    setProperties(properties: object): void;
    getContext(): IVectorSource;
    setContext(context: IVectorSource): void;
    getLayer(): IVectorLayer | null;
    getMap(): any;
    isPointInFeature(pixel: IPixel, style: IGeometryStyle): boolean;
}
export default Feature;
