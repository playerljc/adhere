import { BMapAirPressureLayerConfig } from './types';
/**
 * BMapAirPressureLayer
 * @class BMapAirPressureLayer
 * @classdesc 气压层(绘制多边形)
 */
declare class BMapAirPressureLayer extends BMap.CanvasLayer {
    map: any;
    data: any;
    config: BMapAirPressureLayerConfig;
    private canvas;
    constructor(config: BMapAirPressureLayerConfig);
    /**
     * update
     */
    protected update(): void;
}
export default BMapAirPressureLayer;
