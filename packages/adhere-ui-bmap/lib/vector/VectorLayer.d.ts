import { Events } from '@baifendian/adhere-util-emitter';
import { IVectorLayer, IVectorLayerConfig, IVectorSource, VectorEventActions } from './types';
/**
 * VectorLayer
 * @class VectorLayer
 * @classdesc 向量层，使用canvas进行绘制
 */
declare class VectorLayer extends BMap.CanvasLayer implements IVectorLayer {
    map: any;
    config: IVectorLayerConfig;
    source: IVectorSource;
    isLoad: boolean;
    emitter: Events;
    constructor(map: any, config: IVectorLayerConfig);
    getSource(): IVectorSource;
    getZIndex(): number;
    setSource(source: IVectorSource): void;
    /**
     * drawSource
     */
    protected drawSource(): void;
    protected firstLoad(): void;
    update(): void;
    getMap(): any;
    getEmitter(): Events;
    addEventListener(type: VectorEventActions, handler: any): void;
    removeEventListener(type: VectorEventActions, handler: any): void;
    protected initCanvasEvents(): void;
    protected initEvents(): void;
    protected onUpdate(): void;
}
export default VectorLayer;
