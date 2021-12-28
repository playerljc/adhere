import Emitter from '@baifendian/adhere-util-emitter';
import { IVectorSource, IFeature, IVectorLayer, GeoJSONNode } from './types';
import Geometry from './geom/Geometry';
/**
 * VectorSource
 * @class VectorSource
 * @classdesc VectorLayer的数据源
 */
declare class VectorSource extends Emitter.Events implements IVectorSource {
    context: IVectorLayer | null;
    features: IFeature[];
    constructor(features: IFeature[]);
    protected setFeaturesContext(): void;
    addFeature(feature: IFeature): void;
    addFeatures(features: IFeature[]): void;
    addFirstFeature(feature: IFeature): void;
    insertFeature(feature: IFeature, index: number): void;
    removeFeature(feature: IFeature): void;
    removeFeatureById(id: string): void;
    clear(): void;
    getFeatureById(id: string): IFeature | null;
    getFeatures(): IFeature[];
    hasFeature(feature: IFeature): boolean;
    hasFeatureById(id: string): boolean;
    /**
     * readGeoJSON - 读取GeoJSON数据转换成features
     * @param geoJSON
     * @param onForeachGeom
     * @return void
     */
    readGeoJSON(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): void;
    /**
     * appendGeoJSON - 向画布追加GeoJSON的数据
     * @param geoJSON
     * @param onForeachGeom
     */
    appendGeoJSON(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): void;
    /**
     * featuresToGeoJSON - features转换成GeoJSON
     * @return any
     */
    featuresToGeoJSON(): GeoJSONNode;
    setContext(context: IVectorLayer): void;
    getContext(): IVectorLayer | null;
}
export default VectorSource;
