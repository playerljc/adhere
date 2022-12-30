/**
 * OLMapProps
 * @interface OLMapProps
 */
export interface OLMapProps {
    type: 'administrative' | 'satellite';
    mapConfig: object;
    geoJSONStyle: object;
    geoJSONData: object;
    maxZoom: number | string;
    minZoom: number | string;
    center: number[];
    extent: number[][];
}
