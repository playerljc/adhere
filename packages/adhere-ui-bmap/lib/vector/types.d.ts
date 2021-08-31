import Emitter from '@baifendian/adhere-util-emitter/lib/events';
/**
 * GeometryType
 */
export declare enum GeometryType {
    Point = 0,
    MulitPoint = 1,
    Circle = 2,
    MulitCircle = 3,
    LineString = 4,
    MulitLineString = 5,
    Polygon = 6,
    MulitPolygon = 7,
    Rect = 8,
    RadiusRect = 9,
    MulitRadiusRect = 10,
    Leaf = 11,
    MulitLeaf = 12,
    MulitRect = 13,
    Text = 14,
    RegularPolygon = 15,
    MulitRegularPolygon = 16,
    Start = 17,
    MulitStart = 18,
    Sector = 19,
    MulitSector = 20
}
/**
 * IGeometryStyle
 */
export interface IGeometryStyle {
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
    lineDash: number[];
    lineDashOffset: number;
    globalAlpha: number;
}
/**
 * ITextStyle
 */
export interface ITextStyle extends IGeometryStyle {
    font: string;
    textAlign: 'start' | 'end' | 'left' | 'right' | 'center';
    textBaseline: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
    direction: 'ltr' | 'rtl' | 'inherit';
}
/**
 * ILineStringGeometryStyle
 * @classdesc 线的几何图形样式
 */
export interface ILineStringGeometryStyle extends IGeometryStyle {
    arrow: {
        draw: boolean;
        direction: 'start' | 'end' | 'bothEnds';
        type: 'normal' | 'square';
        size: 'small' | 'normal' | 'large';
    };
}
/**
 * IPointGeometryStyle
 * @classdesc 点的几何图形样式
 */
export interface IPointGeometryStyle extends IGeometryStyle {
    radius?: number;
    img?: {
        src: string;
        width: number;
        height: number;
    };
    regularPolygon?: IRegularPolygonGeometryData;
    start?: IStartGeometryData;
    sector?: ISectorGeometryData;
    rect?: IRectGeometryData;
    radiusRect?: IRadiusRectGeometryData;
    leaf?: ILeafGeometryData;
    pointType: 'circle' | 'image' | 'regularPolygon' | 'start' | 'sector' | 'rect' | 'radiusRect' | 'leaf';
}
/**
 * IGeometry
 */
export interface IGeometry {
    getType: () => GeometryType;
    draw: (ctx: CanvasRenderingContext2D, style: IGeometryStyle) => void;
    drawText: ({ ctx, text, textStyle, style, }: {
        ctx: CanvasRenderingContext2D;
        text: string;
        style: IGeometryStyle;
        textStyle: ITextStyle;
    }) => void;
    setContext: (context: IFeature) => void;
    getContext: () => IFeature | null;
    getCenterCoordinate: ({ ctx, style, isScale, }: {
        ctx: CanvasRenderingContext2D;
        style: IGeometryStyle;
        isScale: boolean;
    }) => IPixel;
    isPixelInGeometry: (pixel: IPixel, style: IGeometryStyle) => boolean;
}
/**
 * ICoordinate
 */
export interface ICoordinate {
    lng: number;
    lat: number;
}
/**
 * IPixel
 */
export interface IPixel {
    x: number;
    y: number;
}
/**
 * ICircleGeometryData
 */
export interface ICircleGeometryData {
    center: ICoordinate;
    radius: number;
}
/**
 * ILineStringGeometryData
 */
export interface ILineStringGeometryData {
    point1: ICoordinate;
    point2: ICoordinate;
}
/**
 * IRectGeometryData
 */
export interface IRectGeometryData {
    leftTop: ICoordinate;
    width: number;
    height: number;
}
/**
 * IRadiusRectGeometryData
 */
export interface IRadiusRectGeometryData extends IRectGeometryData {
    radius: number;
}
/**
 * ITextGeometryData
 */
export interface ITextGeometryData {
    point: ICoordinate;
    text: string;
}
/**
 * IPointGeometry
 */
export interface IPointGeometry extends IGeometry {
    setCoordinates: (coordinates: ICoordinate) => void;
    getCoordinates: () => ICoordinate;
}
/**
 * IMulitLineStringGeometry
 */
export interface IMulitPointGeometry extends IGeometry {
    setCoordinates: (coordinates: ICoordinate[]) => void;
    getCoordinates: () => ICoordinate[];
}
/**
 * ICircleGeometry
 */
export interface ICircleGeometry extends IGeometry {
    setCoordinates: (coordinates: ICircleGeometryData) => void;
    getCoordinates: () => ICircleGeometryData;
}
/**
 * IMulitCircleGeometry
 */
export interface IMulitCircleGeometry extends IGeometry {
    setCoordinates: (coordinates: ICircleGeometryData[]) => void;
    getCoordinates: () => ICircleGeometryData[];
}
/**
 * ILineStringGeometry
 */
export interface ILineStringGeometry extends IGeometry {
    setCoordinates: (coordinates: ILineStringGeometryData) => void;
    getCoordinates: () => ILineStringGeometryData;
}
/**
 * IMulitLineStringGeometry
 */
export interface IMulitLineStringGeometry extends IGeometry {
    setCoordinates: (coordinates: ILineStringGeometryData[]) => void;
    getCoordinates: () => ILineStringGeometryData[];
}
/**
 * IPolygonGeometry
 */
export interface IPolygonGeometry extends IGeometry {
    setCoordinates: (coordinates: ICoordinate[]) => void;
    getCoordinates: () => ICoordinate[];
}
/**
 * IMulitPolygonGeometry
 */
export interface IMulitPolygonGeometry extends IGeometry {
    setCoordinates: (coordinates: Array<ICoordinate[]>) => void;
    getCoordinates: () => Array<ICoordinate[]>;
}
/**
 * IRectGeometry
 */
export interface IRectGeometry extends IGeometry {
    setCoordinates: (coordinates: IRectGeometryData) => void;
    getCoordinates: () => IRectGeometryData;
}
/**
 * IMulitRectGeometry
 */
export interface IMulitRectGeometry extends IGeometry {
    setCoordinates: (coordinates: IRectGeometryData[]) => void;
    getCoordinates: () => IRectGeometryData[];
}
/**
 * IRegularPolygonGeometry
 */
export interface IRegularPolygonGeometry extends IGeometry {
    setCoordinates: (coordinates: IRegularPolygonGeometryData) => void;
    getCoordinates: () => IRegularPolygonGeometryData;
}
/**
 * IRegularPolygonGeometryData
 */
export interface IRegularPolygonGeometryData {
    n: number;
    center?: ICoordinate;
    size: number;
}
/**
 * IMulitRegularPolygonGeometry
 */
export interface IMulitRegularPolygonGeometry extends IGeometry {
    setCoordinates: (coordinates: IRegularPolygonGeometryData[]) => void;
    getCoordinates: () => IRegularPolygonGeometryData[];
}
/**
 * ILeafGeometry
 */
export interface ILeafGeometry extends IGeometry {
    setCoordinates: (coordinates: ILeafGeometryData) => void;
    getCoordinates: () => ILeafGeometryData;
}
/**
 * ILeafGeometryData
 */
export interface ILeafGeometryData {
    n: number;
    center: ICoordinate;
    size: number;
    length: number;
}
/**
 * IMulitLeafGeometry
 */
export interface IMulitLeafGeometry extends IGeometry {
    setCoordinates: (coordinates: ILeafGeometryData[]) => void;
    getCoordinates: () => ILeafGeometryData[];
}
/**
 * IStartGeometryData
 */
export interface IStartGeometryData {
    center: ICoordinate;
    outRadius: number;
    innerRadius: number;
}
/**
 * IStartGeometry
 */
export interface IStartGeometry extends IGeometry {
    setCoordinates: (coordinates: IStartGeometryData) => void;
    getCoordinates: () => IStartGeometryData;
}
/**
 * IMulitStartGeometry
 */
export interface IMulitStartGeometry extends IGeometry {
    setCoordinates: (coordinates: IStartGeometryData[]) => void;
    getCoordinates: () => IStartGeometryData[];
}
/**
 * ISectorGeometryData
 */
export interface ISectorGeometryData {
    center: ICoordinate;
    radius: number;
    angle1: number;
    angle2: number;
}
/**
 * ISectorGeometry
 */
export interface ISectorGeometry extends IGeometry {
    setCoordinates: (coordinates: ISectorGeometryData) => void;
    getCoordinates: () => ISectorGeometryData;
}
/**
 * IMulitSectorGeometry
 */
export interface IMulitSectorGeometry extends IGeometry {
    setCoordinates: (coordinates: ISectorGeometryData[]) => void;
    getCoordinates: () => ISectorGeometryData[];
}
/**
 * ITextGeometry
 */
export interface ITextGeometry extends IGeometry {
    setCoordinates: (coordinates: ITextGeometryData) => void;
    getCoordinates: () => ITextGeometryData;
}
/**
 * IFeature - 一个要素
 */
export interface IFeature {
    getGeometry: () => IGeometry;
    getId: () => string;
    getName: () => string;
    getStyle: () => IGeometryStyle;
    getZIndex: () => number;
    getProperties: () => object;
    getContext: () => IVectorSource;
    getMap: () => any;
    getLayer: () => IVectorLayer | null;
    setGeometry: (geom: IGeometry) => void;
    setName: (name: string) => void;
    setId: (id: string) => void;
    setStyle: (style: IGeometryStyle) => void;
    setZIndex: (zIndex: number) => void;
    setProperties: (properties: object) => void;
    setContext: (context: IVectorSource) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
    isPointInFeature: (pixel: IPixel, style?: IGeometryStyle) => boolean;
}
/**
 * IInnerTextFeature
 */
export interface IInnerTextFeature extends IFeature {
    setText: (text: string) => void;
    getText: () => string;
    setTextStyle: (style: ITextStyle) => void;
    getTextStyle: () => ITextStyle;
}
/**
 * IFeatureParams
 */
export interface IFeatureParams {
    name: string;
    id: string;
    style: IGeometryStyle;
    geometry: IGeometry;
}
/**
 * IInnerTextFeatureParams
 */
export interface IInnerTextFeatureParams extends IFeatureParams {
    text: string;
    textStyle: ITextStyle;
}
/**
 * IVectorSource - 代表一个向量层的数据源
 * 一个向量层只有一个数据源
 */
export interface IVectorSource {
    addFeature: (feature: IFeature) => void;
    addFeatures: (features: IFeature[]) => void;
    addFirstFeature: (feature: IFeature) => void;
    insertFeature: (feature: IFeature, index: number) => void;
    clear: () => void;
    getFeatureById: (id: string) => IFeature | null;
    getFeatures: () => IFeature[];
    hasFeature: (feature: IFeature) => boolean;
    hasFeatureById: (id: string) => boolean;
    removeFeature: (feature: IFeature) => void;
    removeFeatureById: (id: string) => void;
    setContext: (context: IVectorLayer) => void;
    getContext: () => IVectorLayer | null;
}
/**
 * IVectorLayer - 代表一个向量层
 */
export interface IVectorLayer {
    getSource: () => IVectorSource;
    setSource: (source: IVectorSource) => void;
    getZIndex: () => number;
    update: () => void;
    getMap: () => any;
    getEmitter: () => Emitter;
    addEventListener: (type: VectorEventActions, handler: (e: any) => void) => void;
    removeEventListener: (type: VectorEventActions, handler: (e: any) => void) => void;
}
/**
 * VectorEventActions
 */
export declare enum VectorEventActions {
    FEATURE_CLICK = "feature:click",
    VECTOR_CLICK = "vector:click"
}
/**
 * IFeatureEvent
 */
export interface IFeatureClickEvent {
    features: IFeature[];
    pixel: IPixel;
}
export interface IVectorClickEvent {
}
/**
 * IVectorLayerConfig
 */
export interface IVectorLayerConfig {
    paneName: 'floatPane' | 'floatShadow' | 'labelPane' | 'mapPane' | 'markerMouseTarget' | 'markerPane' | 'markerShadow' | 'vertexPane';
    zIndex: number;
    source: IVectorSource;
}
/**
 * VectorActions
 */
export declare enum VectorActions {
    UPDATE = "UPDATE"
}
