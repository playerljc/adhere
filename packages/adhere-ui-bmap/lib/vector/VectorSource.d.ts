import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IVectorSource, IFeature, IVectorLayer } from './types';
/**
 * VectorSource
 * @class VectorSource
 * @classdesc VectorLayer的数据源
 */
declare class VectorSource extends Emitter implements IVectorSource {
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
    setContext(context: IVectorLayer): void;
    getContext(): IVectorLayer | null;
}
export default VectorSource;
