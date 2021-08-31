import { IVectorLayer, IFeatureParams, IVectorSource, IFeature, IGeometry, IStyle, IPixel } from './types';
/**
 * Feature
 * @class Feature
 * @classdesc 要素
 */
declare class Feature implements IFeature {
    name: string;
    id: string;
    style: IStyle;
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
    getStyle(): IStyle;
    getZIndex(): number;
    getProperties(): object;
    setGeometry(geom: IGeometry): void;
    setStyle(style: IStyle): void;
    setId(id: string): void;
    setName(name: string): void;
    setZIndex(zIndex: number): void;
    setProperties(properties: object): void;
    getContext(): IVectorSource;
    setContext(context: IVectorSource): void;
    getLayer(): IVectorLayer;
    getMap(): any;
    isPointInFeature(pixel: IPixel, style?: IStyle): boolean;
}
export default Feature;
