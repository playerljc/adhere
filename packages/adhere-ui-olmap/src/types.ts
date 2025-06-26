import type { CSSProperties } from 'react';

/**
 * OLMapProps
 * @interface OLMapProps
 */
export interface OLMapProps {
  className?: string;
  style?: CSSProperties;
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
