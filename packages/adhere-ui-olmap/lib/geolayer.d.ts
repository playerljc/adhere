import { Vector as VectorLayer } from 'ol/layer';
/**
 * GeoLayer
 * @class GeoLayer
 * @classdesc openlayers中的geojson的layer
 */
declare class GeoLayer extends VectorLayer {
    private vectorSource;
    /**
     * constructor
     * @param geoJsonObject - 数据
     * @param onStyle - onStyle
     * @param zIndex
     */
    constructor(geoJsonObject: any, onStyle: any, zIndex: any);
}
export default GeoLayer;
