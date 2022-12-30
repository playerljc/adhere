import Emitter from '@baifendian/adhere-util-emitter';

import GeoJSONFormat from './format/GeoJSONFormat';
import Geometry from './geom/Geometry';
import { GeoJSONNode, IFeature, IVectorLayer, IVectorSource, VectorActions } from './types';

/**
 * VectorSource
 * @class VectorSource
 * @classdesc VectorLayer的数据源
 */
class VectorSource extends Emitter.Events implements IVectorSource {
  context: IVectorLayer | null = null;
  features: IFeature[] = [];

  constructor(features: IFeature[]) {
    super();
    this.features = features;
    this.setFeaturesContext();
  }

  protected setFeaturesContext(): void {
    this.features.forEach((feature) => {
      feature.setContext(this);
    });
  }

  addFeature(feature: IFeature): void {
    if (this.hasFeatureById(feature.getId())) return;
    this.features.push(feature);
    this.setFeaturesContext();
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  addFeatures(features: IFeature[]): void {
    const filterFeatures = features.filter((f) => !this.hasFeatureById(f.getId()));
    this.features = [...this.features, ...filterFeatures];
    this.setFeaturesContext();
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  addFirstFeature(feature: IFeature): void {
    if (this.hasFeatureById(feature.getId())) return;
    this.features.unshift(feature);
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  insertFeature(feature: IFeature, index: number): void {
    if (this.hasFeatureById(feature.getId())) return;
    this.features.splice(index, 0, feature);
    this.setFeaturesContext();
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  removeFeature(feature: IFeature): void {
    this.removeFeatureById(feature.getId());
  }

  removeFeatureById(id: string): void {
    if (!this.hasFeatureById(id)) return;
    const index = this.features.findIndex((f) => f.getId() === id);
    this.features.splice(index, 1);
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  clear(): void {
    this.features = [];
    this?.getContext()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getFeatureById(id: string): IFeature | null {
    // @ts-ignore
    return this.features.find((f) => f.getId() === id);
  }

  getFeatures(): IFeature[] {
    return [...this.features];
  }

  hasFeature(feature: IFeature): boolean {
    return this.features.indexOf(feature) !== -1;
  }

  hasFeatureById(id: string): boolean {
    return !!this.features.find((f) => f.getId() === id);
  }

  /**
   * readGeoJSON - 读取GeoJSON数据转换成features
   * @param geoJSON
   * @param onForeachGeom
   * @return void
   */
  readGeoJSON(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): void {
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
  appendGeoJSON(geoJSON: GeoJSONNode, onForeachGeom: (geom: Geometry) => IFeature): void {
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
  featuresToGeoJSON(): GeoJSONNode {
    return GeoJSONFormat.stringify(this.features);
  }

  setContext(context: IVectorLayer): void {
    this.context = context;
  }

  getContext(): IVectorLayer | null {
    return this.context;
  }
}

export default VectorSource;
