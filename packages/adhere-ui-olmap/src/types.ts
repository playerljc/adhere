/**
 * OLMapProps
 * @interface OLMapProps
 */
export interface OLMapProps {
  type?: 'administrative' | 'satellite';
  mapConfig?: object;
  maxZoom?: number | string;
  minZoom?: number | string;
  zoom?: number | string;
  fitZoom?: number | string;
  layers?: any[];
  center?: number[];
  geoJSONStyle?: object;
  geoJSONData?: object;
  extent?: number[][];
  onAllTileloadend: () => void;
}
