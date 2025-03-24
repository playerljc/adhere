import Emitter from '@baifendian/adhere-util-emitter';
import GeoJSONFormat from './format/GeoJSONFormat';
import { VectorActions } from './types';
/**
 * VectorSource
 * @class VectorSource
 * @classdesc VectorLayer的数据源
 */
class VectorSource extends Emitter.Events {
    context = null;
    features = [];
    constructor(features) {
        super();
        this.features = features;
        this.setFeaturesContext();
    }
    setFeaturesContext() {
        this.features.forEach((feature) => {
            feature.setContext(this);
        });
    }
    addFeature(feature) {
        if (this.hasFeatureById(feature.getId()))
            return;
        this.features.push(feature);
        this.setFeaturesContext();
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    addFeatures(features) {
        const filterFeatures = features.filter((f) => !this.hasFeatureById(f.getId()));
        this.features = [...this.features, ...filterFeatures];
        this.setFeaturesContext();
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    addFirstFeature(feature) {
        if (this.hasFeatureById(feature.getId()))
            return;
        this.features.unshift(feature);
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    insertFeature(feature, index) {
        if (this.hasFeatureById(feature.getId()))
            return;
        this.features.splice(index, 0, feature);
        this.setFeaturesContext();
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    removeFeature(feature) {
        this.removeFeatureById(feature.getId());
    }
    removeFeatureById(id) {
        if (!this.hasFeatureById(id))
            return;
        const index = this.features.findIndex((f) => f.getId() === id);
        this.features.splice(index, 1);
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    clear() {
        this.features = [];
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    getFeatureById(id) {
        // @ts-ignore
        return this.features.find((f) => f.getId() === id);
    }
    getFeatures() {
        return [...this.features];
    }
    hasFeature(feature) {
        return this.features.indexOf(feature) !== -1;
    }
    hasFeatureById(id) {
        return !!this.features.find((f) => f.getId() === id);
    }
    /**
     * readGeoJSON - 读取GeoJSON数据转换成features
     * @param geoJSON
     * @param onForeachGeom
     * @return void
     */
    readGeoJSON(geoJSON, onForeachGeom) {
        this.features = GeoJSONFormat.parse(geoJSON, onForeachGeom);
        this.features.forEach((feature) => {
            feature.setContext(this);
        });
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    /**
     * appendGeoJSON - 向画布追加GeoJSON的数据
     * @param geoJSON
     * @param onForeachGeom
     */
    appendGeoJSON(geoJSON, onForeachGeom) {
        const features = GeoJSONFormat.parse(geoJSON, onForeachGeom);
        features.forEach((feature) => {
            feature.setContext(this);
        });
        this.features = [...this.features, ...features];
        this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    /**
     * featuresToGeoJSON - features转换成GeoJSON
     * @return any
     */
    featuresToGeoJSON() {
        return GeoJSONFormat.stringify(this.features);
    }
    setContext(context) {
        this.context = context;
    }
    getContext() {
        return this.context;
    }
}
export default VectorSource;
