import Geometry from '../geom/Geometry';
import { GeoJSONNode, IFeature, IGeoJSONFeatureCollection } from '../types';
declare const _default: {
    /**
     * parse - GeoJSON转IFeature[]
     * @param geoJSON
     * @param onForeachGeom
     */
    parse(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): IFeature[];
    /**
     * stringify - features转GeoJSON
     * @param features
     * @return GeoJSONNode
     */
    stringify(features: IFeature[]): IGeoJSONFeatureCollection;
};
export default _default;
