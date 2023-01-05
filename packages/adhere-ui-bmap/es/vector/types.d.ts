import { IPoint } from './interaction/types';
/**
 * GeometryType
 */
export declare enum GeometryType {
    Point = "Point",
    MulitPoint = "MulitPoint",
    Circle = "Circle",
    MulitCircle = "MulitCircle",
    LineString = "LineString",
    MulitLineString = "MulitLineString",
    Polygon = "Polygon",
    MulitPolygon = "MulitPolygon",
    Rect = "Rect",
    RadiusRect = "RadiusRect",
    MulitRadiusRect = "MulitRadiusRect",
    Leaf = "Leaf",
    MulitLeaf = "MulitLeaf",
    MulitRect = "MulitRect",
    Text = "Text",
    RegularPolygon = "RegularPolygon",
    MulitRegularPolygon = "MulitRegularPolygon",
    Start = "Start",
    MulitStart = "MulitStart",
    Sector = "Sector",
    MulitSector = "MulitSector"
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
    isPointInFeature: (pixel: IPixel, style: IGeometryStyle) => boolean;
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
    properties: object;
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
    readGeoJSON: (geoJSON: any, onForeachStyle: (geom: IGeometry) => IFeature) => void;
    featuresToGeoJSON: () => any;
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
    getEmitter: () => any;
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
    UPDATE = "UPDATE",
    APPEND = "APPEND"
}
/**
 * ImageCacheClass
 */
export interface ImageCacheClass {
    add(key: ImageCacheKey, image: HTMLImageElement): Map<string, HTMLImageElement>;
    get(key: ImageCacheKey): HTMLImageElement | null | undefined;
    delete(key: ImageCacheKey): boolean;
    clear(): void;
    values(): HTMLImageElement[];
    keys(): ImageCacheKey[];
}
/**
 * ImageCacheKey
 */
export interface ImageCacheKey {
    src: string;
    width: number;
    height: number;
}
/**
 * Point
 * MultiPoint
 * LineString
 * MultiLineString
 * Polygon
 * MultiPolygon
 * GeometryCollection
 * Feature
 * FeatureCollection
 */
/**
 * IGeoJSONPoint
 */
export interface IGeoJSONPoint {
    readonly type: 'Point';
    coordinates: number[];
}
/**
 * IGeoJSONMulitPoint
 */
export interface IGeoJSONMulitPoint {
    readonly type: 'MultiPoint';
    coordinates: Array<number[]>;
}
/**
 * IGeoJSONLineString
 */
export interface IGeoJSONLineString {
    readonly type: 'LineString';
    coordinates: Array<number[]>;
}
/**
 * IGeoJSONMultiLineString
 */
export interface IGeoJSONMultiLineString {
    readonly type: 'MultiLineString';
    coordinates: Array<Array<number[]>>;
}
/**
 * IGeoJSONPolygon
 */
export interface IGeoJSONPolygon {
    readonly type: 'Polygon';
    coordinates: Array<number[]>;
}
/**
 * IGeoJSONMultiPolygon
 */
export interface IGeoJSONMultiPolygon {
    readonly type: 'MultiPolygon';
    coordinates: Array<Array<number[]>>;
}
/**
 * IGeoJSONGeometryCollection
 */
export interface IGeoJSONGeometryCollection {
    readonly type: 'GeometryCollection';
    geometries: Array<Geometry>;
}
/**
 * IGeoJSONFeature
 */
export interface IGeoJSONFeature {
    readonly type: 'Feature';
    geometry: Geometry;
    properties: object;
    id: string;
    bbox?: number[];
}
/**
 * IGeoJSONFeatureCollection
 */
export interface IGeoJSONFeatureCollection {
    type: 'FeatureCollection';
    features: IGeoJSONFeature[];
    bbox?: number[];
}
export type Geometry = IGeoJSONPoint | IGeoJSONMulitPoint | IGeoJSONLineString | IGeoJSONMultiLineString | IGeoJSONPolygon | IGeoJSONMultiPolygon | IGeoJSONGeometryCollection;
export type GeoJSONNode = Geometry | IGeoJSONFeature | IGeoJSONFeatureCollection;
export declare enum GeoJSONType {
    Point = "Point",
    MultiPoint = "MultiPoint",
    LineString = "LineString",
    MultiLineString = "MultiLineString",
    Polygon = "Polygon",
    MultiPolygon = "MultiPolygon",
    GeometryCollection = "GeometryCollection",
    Feature = "Feature",
    FeatureCollection = "FeatureCollection"
}
/**
 * ITrajectoryPlayBackLayer
 * @description - 轨迹回放的Layer
 */
export interface ITrajectoryPlayBackLayer {
    getEmitter: () => any;
    update: () => void;
    getMap: () => any;
    getCanvasEl(): HTMLCanvasElement | null;
    getCtx(): CanvasRenderingContext2D | null;
    pixelToPoint: (pixel: IPoint) => IPoint;
    /**
     * distanceToActual - 图上距离转换成实际距离
     * @param distance
     */
    distanceToActual: (distance: number) => number;
    /**
     * pointToPixel
     * @param point
     */
    pointToPixel(point: IPoint): IPoint;
    /**
     * actualToDistance - 实际距离转换成图上距离
     * @param actual
     */
    actualToDistance(actual: number): number;
    addTrajectory(trajectory: ITrajectory): void;
    removeTrajectory(trajectory: ITrajectory): void;
    removeTrajectoryById(id: string): void;
    clean(): void;
    getTrajectoryById(id: string): ITrajectory | null | undefined;
    getTrajectorys(): ITrajectory[];
    hasTrajectoryById(id: string): boolean;
    clear(): void;
    drawHistory(): void;
}
/**
 * ITrajectory
 * @description - 一个轨迹
 */
export interface ITrajectory {
    init(): void;
    start(): void;
    pause(): void;
    resume(): void;
    finish(): void;
    getId(): string;
    destroy(): void;
    getStatus(): TrajectoryStatus;
    drawHistory(): void;
}
/**
 * TrajectoryStatus
 */
export declare enum TrajectoryStatus {
    UnInit = 0,
    Init = 1,
    Running = 2,
    Pause = 3,
    End = 4,
    Destroy = 5
}
