import React from 'react';
/**
 * IBMapProps
 * @interface IBMapProps
 */
export interface IBMapProps {
    className?: string;
    style?: React.CSSProperties;
    ak: string;
    config: IMapOptions;
    zoom?: number;
    center?: {
        lon: number;
        lat: number;
    };
    onBMapScriptReady: Function;
    externalImportBMapScript: boolean;
}
export interface IBMapState {
    isReady: boolean;
}
export interface IMapOptions {
    minZoom: number;
    maxZoom: number;
    mapType: any;
    enableHighResolution: boolean;
    enableAutoResize: boolean;
    enableMapClick: boolean;
}
export interface IPoint {
    lng: number;
    lat: number;
}
export interface BMapAirPressureLayerConfig {
    map: any;
    data: Array<IPoint[]>;
    paneName: 'floatPane' | 'floatShadow' | 'labelPane' | 'mapPane' | 'markerMouseTarget' | 'markerPane' | 'markerShadow' | 'vertexPane';
    zIndex: number;
    style: {
        strokeStyle: string;
        lineJoin: CanvasLineJoin;
        lineWidth: number;
    };
}
/**
 * GeometryType
 */
export declare enum GeometryType {
    Point = 0,
    MulitPoint = 1,
    Circle = 2,
    LineString = 3,
    MulitLineString = 4,
    Polygon = 5,
    MulitPolygon = 6,
    Rect = 7,
    MulitRect = 8,
    Text = 9
}
/**
 * IStyle
 */
export interface IStyle {
}
/**
 * IGeometryStyle
 */
export interface IGeometryStyle extends IStyle {
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
export interface ITextStyle extends IStyle {
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
    pointType: 'circle' | 'image';
}
/**
 * IGeometry
 */
export interface IGeometry {
    getType: () => GeometryType;
    draw: (ctx: CanvasRenderingContext2D, style: IStyle) => void;
    setContext: (context: IFeature) => void;
    getContext: () => IFeature;
    getCenterCoordinate: () => ICoordinate;
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
    getStyle: () => IStyle;
    setGeometry: (geom: IGeometry) => void;
    setName: (name: string) => void;
    setId: (id: string) => void;
    setStyle: (style: IStyle) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
    setContext: (context: IVectorSource) => void;
    getContext: () => IVectorSource;
    getMap: () => any;
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
    style: IStyle;
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
 * ITextParams
 */
export interface ITextParams extends IFeatureParams {
    style: ITextStyle;
    geometry: ITextGeometry;
}
/**
 * ITextFeature
 */
export interface ITextFeature extends IFeature {
    setStyle: (style: ITextStyle) => void;
    getStyle: () => ITextStyle;
    getGeometry: () => ITextGeometry;
    setGeometry: (geom: ITextGeometry) => void;
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
    getFeatureById: (id: string) => IFeature;
    getFeatures: () => IFeature[];
    hasFeature: (feature: IFeature) => boolean;
    hasFeatureById: (id: string) => boolean;
    removeFeature: (feature: IFeature) => void;
    removeFeatureById: (id: string) => void;
    setContext: (context: IVectorLayer) => void;
    getContext: () => IVectorLayer;
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
}
export interface IVectorLayerConfig {
    paneName: string;
    zIndex: number;
    source: IVectorSource;
}
/**
 * VectorActions
 */
export declare enum VectorActions {
    UPDATE = "UPDATE"
}
