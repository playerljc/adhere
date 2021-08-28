// @ts-ignore
import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IVectorSource, IFeature, VectorActions, IVectorLayer } from './types';

/**
 * VectorSource
 * @class VectorSource
 * @classdesc VectorLayer的数据源
 */
class VectorSource extends Emitter implements IVectorSource {
  context: IVectorLayer;
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
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  addFeatures(features: IFeature[]): void {
    const filterFeatures = features.filter((f) => !this.hasFeatureById(f.getId()));
    this.features = [...this.features, ...filterFeatures];
    this.setFeaturesContext();
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  addFirstFeature(feature: IFeature): void {
    if (this.hasFeatureById(feature.getId())) return;
    this.features.unshift(feature);
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  insertFeature(feature: IFeature, index: number): void {
    if (this.hasFeatureById(feature.getId())) return;
    this.features.splice(index, 0, feature);
    this.setFeaturesContext();
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  removeFeature(feature: IFeature): void {
    this.removeFeatureById(feature.getId());
  }

  removeFeatureById(id: string): void {
    if (!this.hasFeatureById(id)) return;
    const index = this.features.findIndex((f) => f.getId() === id);
    this.features.splice(index, 1);
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  clear(): void {
    this.features = [];
    this.getContext().getEmitter().trigger(VectorActions.UPDATE);
  }

  getFeatureById(id: string): IFeature {
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

  setContext(context: IVectorLayer): void {
    this.context = context;
  }

  getContext(): IVectorLayer {
    return this.context;
  }
}

export default VectorSource;
