import Feature from 'ol/Feature.js';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay.js';
import Polygon from 'ol/geom/Polygon';
import Draw from 'ol/interaction/Draw.js';
import Modify from 'ol/interaction/Modify';
import { Heatmap as HeatMapLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Vector as VectorSource } from 'ol/source.js';
import GeoLayer from './GeoLayer';
import WindLayer from './WindLayer';
import type { AddArrowsSourceParams, BoxInteractionParams, CircleInteractionParams, CreateInteractionParams, CreateModifyInteractionParams, DrawCircleParams, DrawCirclePointParams, DrawImagePointParams, DrawLineParams, DrawPolygonParams, DrawRegularShapePointParams, LinStringInteractionParams, PolygonInteractionParams, SetMapCenterAnimateParams } from './types';
/**
 * 获取最小缩放级别
 * @param target 地图容器 HTMLElement
 */
declare function getMinZoom(target: HTMLElement): number;
/**
 * 坐标转换：3857 -> 4326
 * @param point 坐标点 [number, number]
 */
declare function transformLonLat(point: number[]): number[];
export interface CreateMapConfig {
    config: Record<string, any> & {
        target: HTMLElement;
    };
    fitZoom?: number;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    center?: number[];
    extent?: number[][];
    layers?: any[];
}
/**
 * 创建地图
 * @param Config 地图配置
 */
declare function createMap(Config: CreateMapConfig): Map;
declare const _default: {
    SHOW_BASE_STATION_MIN_ZOOM: number;
    getMinZoom: typeof getMinZoom;
    transformLonLat: typeof transformLonLat;
    createMap: typeof createMap;
    /**
     * 设置 Overlay 状态
     */
    setOverlayState: (overlay: Overlay, point: number[]) => void;
    /**
     * 添加点击监听器
     */
    addClickListener: (mapInstance: Map, listeningLayer: VectorLayer<any>, hitCallback: ((feature: Feature | any) => void) | undefined, unHitCallback: ((feature: Feature | any) => void) | undefined, setCursor: (cursor: string) => void) => void;
    /**
     * 添加悬停监听器
     */
    addHoverListener: (mapInstance: Map, listeningLayer: VectorLayer<any>, hitCallback: (feature: Feature | any) => void, unHitCallback: (feature: Feature | any) => void) => void;
    /**
     * 添加 GeoJSON 图层
     */
    addGeoLayer: (mapInstance: Map, geoJsonData: any, getStyleConfig?: any, zIndex?: number) => GeoLayer;
    /**
     * 添加风场图层
     */
    addWindLayer: (mapInstance: Map, data: any, config: any, zIndex?: number) => WindLayer;
    /**
     * 添加向量图层
     */
    addVectorLayer(map: Map, zIndex: number): {
        vectorLayer: VectorLayer<any>;
        vectorSource: VectorSource;
    };
    /**
     * 创建热力图层
     */
    createHeatMapLayer(layoutConfig: any): {
        layer: HeatMapLayer;
        vectorSource: VectorSource;
    };
    /**
     * 创建一个圆形 Feature
     */
    drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, properties, }: DrawCircleParams): Feature;
    /**
     * 创建一个多边形 Feature
     */
    drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, properties, }: DrawPolygonParams): Feature;
    /**
     * 创建一条线 Feature
     */
    drawLine({ points, width, color, lineCap, lineJoin, lineDash, }: DrawLineParams): Feature;
    /**
     * 创建一个圆的点 Feature
     */
    drawCirclePoint({ id, pos, fillOpt, strokeOpt, radius, textOpt, zIndex, text, properties, }: DrawCirclePointParams): Feature;
    /**
     * 创建一个多边形的点 Feature
     */
    drawRegularShapePoint({ id, pos, points, fillOpt, strokeOpt, text, textOpt, zIndex, properties, ...rest }: DrawRegularShapePointParams): Feature;
    /**
     * 创建一个图片的点 Feature
     */
    drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, properties, }: DrawImagePointParams): Feature;
    /**
     * 创建扇形多边形
     */
    createRegularPolygonCurve(origin: number[], radius: number, sides: number, r: number, angel: number): Polygon;
    /**
     * 移动地图到指定位置(动画)
     */
    setMapCenterAnimate({ map, point, duration }: SetMapCenterAnimateParams): void;
    /**
     * 创建交互
     */
    createInteraction({ map, config }: CreateInteractionParams): Draw;
    /**
     * 框多边形交互
     */
    polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...rest }: PolygonInteractionParams): Draw;
    /**
     * 框圆形交互
     */
    circleInteraction({ map, vectorSource, onDrawEnd, ...rest }: CircleInteractionParams): Draw;
    /**
     * 框线框交互
     */
    boxInteraction({ map, vectorSource, onDrawEnd, ...rest }: BoxInteractionParams): Draw;
    /**
     * 线路交互
     */
    linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...rest }: LinStringInteractionParams): Draw;
    /**
     * 创建修改交互
     */
    createModifyInteraction({ map, vectorSource, onModifyEnd, }: CreateModifyInteractionParams): Modify;
    /**
     * 删除一个 Feature
     */
    removeFeature(vectorSource: VectorSource, feature: Feature): void;
    /**
     * 删除所有 Feature
     */
    removeAllFeature(vectorSource: VectorSource): void;
    /**
     * 删除所有 Overlay
     */
    removeAllOverlay(map: Map): void;
    /**
     * 移除交互
     */
    removeInteraction(map: Map, interaction: any): void;
    /**
     * 移除所有交互
     */
    removeInteractionAll(map: Map): void;
    /**
     * 地图自适应
     */
    mapFit(extent: number[] | undefined, option: any | undefined, map: Map): void;
    /**
     * 为一系列点创建箭头 Feature 数组
     */
    addArrowsSource({ points, color, icon, anchor, offset }: AddArrowsSourceParams): Feature[];
    /**
     * 为一系列点创建箭头 Overlay
     */
    addArrowsOverlay(map: Map, parentDom: HTMLElement, color: string, points: number[][]): void;
    /**
     * 添加覆盖物
     */
    addOverlay: (map: Map, config: any, div: HTMLDivElement | null) => Overlay;
    /**
     * rgb颜色随机
     */
    rgb(): string;
    /**
     * 十六进制颜色随机
     */
    color16(): string;
    /**
     * 角度转弧度
     */
    getRad(d: number): number;
    /**
     * 经度归一化
     */
    wrapLon(value: number): number;
    /**
     * 获取地图的矩形范围
     */
    getMapExtent(map: Map): Array<{
        lon: number;
        lat: number;
    }> | false;
    /**
     * 获取范围内的 Feature
     */
    getFeaturesInExtent(map: Map, feature: Feature): any[];
    /**
     * 获取地图的图层数量
     */
    getLayersCount(map: Map): number;
    /**
     * 获取线条颜色
     */
    getLineColor(index: number): string;
    downLoadMap(map: Map): void;
    /**
     * 根据经纬度和半径获取投影平面半径
     */
    getRadius(center: number[], radius: number): number;
    /**
     * 获取坐标范围
     */
    getExtentByCoordinates(coordinates: number[][]): number[];
    /**
     * 获取向量源中的矩形数据
     */
    getExtentByVectorSource(vectorSource: VectorSource, type?: string): number[];
    /**
     * 获取向量层中的所有点
     */
    getVectorSourceCoordinates(vectorSource: VectorSource, type?: string): number[][];
    /**
     * 获取向量源中所有 Point 的中心点
     */
    getCenterByCoordinates(vectorSource: VectorSource, type?: string): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * 获取一系列点中的中心点
     */
    getCenterByPoints(points: number[][]): {
        centerLon: number;
        centerLat: number;
    };
    /**
     * 获取一系列点的矩形范围
     */
    getPointsExtent(points: number[][]): {
        leftTop: number[];
        rightBottom: number[];
    };
    /**
     * 计算连个经纬度之间的距离(m)
     */
    getFlattenDistance(lat1: number, lng1: number, lat2: number, lng2: number): number;
};
export default _default;
