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
