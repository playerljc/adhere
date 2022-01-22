/**
 * IOLMapProps
 * @interface IOLMapProps
 */
export interface IOLMapProps {
    type: 'administrative' | 'satellite';
    mapConfig: object;
    geoJSONStyle: object;
    geoJSONData: object;
    maxZoom: number | string;
    minZoom: number | string;
    center: Array<number>;
    extent: Array<Array<number>>;
}
