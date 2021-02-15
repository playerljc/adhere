import GeoLayer from './geolayer';
import * as TitleLayer from './titlelayer';
import OLMap from './olmap';
import HeatMap from './heatmap';
import AnimationManager from './animationmanager';
declare const _default: {
    AnimationManager: typeof AnimationManager;
    GeoLayer: typeof GeoLayer;
    TitleLayer: typeof TitleLayer;
    OLMap: typeof OLMap;
    HeatMap: typeof HeatMap;
    Util: {
        SHOWBASESTATION_MINZOOM: number;
        createMap(Config: any): any;
        setOverlayState: (overlay: any, point: any) => void;
        addClickListener: (mapInstance: any, listeningLayer: any, hitCallback: ((feature: any) => void) | undefined, unHitCallback: ((feature: any) => void) | undefined, setCursor: any) => void;
        addHoverListener: (mapInstance: any, listeningLayer: any, hitCallback: any, unHitCallback: any) => void;
        addGeoLayer: (mapInstance: any, geojsonData: any, getStyleConfig?: () => void, zIndex?: number) => GeoLayer;
        addVectorLayer(map: any, zIndex: any): {
            vectorLayer: any;
            vectorSource: any;
        };
        addHeatmapLayer(map: any, layoutConfig: any): any;
        drawCircle({ center, radius, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
            center: any;
            radius: any;
            color?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
            zIndex?: any;
            id?: string | undefined;
            propertys?: {} | undefined;
        }): any;
        drawPolygon({ points, color, strokeColor, strokeWidth, zIndex, id, propertys, }: {
            points: any;
            color?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
            zIndex?: any;
            id?: string | undefined;
            propertys?: {} | undefined;
        }): any;
        drawCirclePoint({ id, pos, fillOpt, strokeOpt, radius, textOpt, zIndex, text, propertys, }: {
            id: any;
            pos: any;
            fillOpt?: {
                color: string;
            } | undefined;
            strokeOpt?: {
                width: number;
                color: string;
            } | undefined;
            radius?: number | undefined;
            textOpt?: {} | undefined;
            zIndex?: number | undefined;
            text?: string | undefined;
            propertys?: {} | undefined;
        }): any;
        drawRegularShapePoint({ id, pos, fillOpt, strokeOpt, text, textOpt, zIndex, propertys, ...others }: {
            [x: string]: any;
            id: any;
            pos: any;
            fillOpt?: {
                color: string;
            } | undefined;
            strokeOpt?: {
                width: number;
                color: string;
            } | undefined;
            text?: string | undefined;
            textOpt?: {} | undefined;
            zIndex?: number | undefined;
            propertys?: {} | undefined;
        }): any;
        drawImagePoint({ id, pos, zIndex, src, color, opacity, scale, anchor, rotation, offset, offsetOrigin, size, text, textOpt, propertys, }: {
            id: any;
            pos: any;
            zIndex?: number | undefined;
            src: any;
            color: any;
            opacity: any;
            scale: any;
            anchor: any;
            rotation?: number | undefined;
            offset?: number[] | undefined;
            offsetOrigin: any;
            size: any;
            text?: string | undefined;
            textOpt?: {} | undefined;
            propertys?: {} | undefined;
        }): any;
        createRegularPolygonCurve(origin: any, radius: any, sides: any, r: any, angel: any): any;
        removeFeature(vectorSource: any, feature: any): void;
        removeAllFeature(vectorSource: any): void;
        removeAllOverlay(map: any): void;
        setMapCenterAnimate({ map, point, duration }: {
            map: any;
            point: any;
            duration?: number | undefined;
        }): void;
        drawLine({ points, width, color, lineCap, lineJoin }: {
            points: any;
            width: any;
            color: any;
            lineCap?: string | undefined;
            lineJoin?: string | undefined;
        }): any;
        createInteraction(map: any, config: any): any;
        polygonInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            freehand?: boolean | undefined;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        circleInteraction({ map, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        boxInteraction({ map, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        linStringInteraction({ map, freehand, vectorSource, onDrawEnd, ...other }: {
            [x: string]: any;
            map: any;
            freehand?: boolean | undefined;
            vectorSource: any;
            onDrawEnd: any;
        }): any;
        createModifyInteraction({ map, vectorSource, onModifyEnd }: {
            map: any;
            vectorSource: any;
            onModifyEnd: any;
        }): any;
        removeInteraction(map: any, interaction: any): void;
        removeInteractionAll(map: any): void;
        mapFit(extent: never[] | undefined, option: {} | undefined, map: any): void;
        addArrowsSource({ points, color, icon }: {
            points: any;
            color: any;
            icon: any;
        }): never[];
        addArrowsOverlay(map: any, parentDom: any, color: any, points: any): void;
        addOverlay: (map: any, config: any, div: HTMLDivElement | null) => any;
        getRad(d: any): number;
        getExtentByCoordinates(coordinates: any): never[];
        getExtentByVectorSource(vectorSource: any, type?: string): never[];
        getCectorSourceCoordinates(vectorSource: any, type?: string): never[];
        getCenterByCoordinates(vectorSource: any, type?: string): {
            centerLon: number;
            centerLat: number;
        };
        getCenterByPoints(points: any): {
            centerLon: number;
            centerLat: number;
        };
        getPointsExtent(points: any): {
            leftTop: number[];
            rightBottom: number[];
        };
        getFlatternDistance(lat1: any, lng1: any, lat2: any, lng2: any): number;
        wrapLon(value: any): number;
        getMapExtent(map: any): false | {
            lon: number;
            lat: any;
        }[];
        getFeaturesInExtent(map: any, feature: any): any;
        getLayersCount(map: any): any;
        rgb(): string;
        color16(): string;
        getLineColor(index: any): string;
        downLoadMap(map: any): void;
    };
};
export default _default;
