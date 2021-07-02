import { Heatmap as HeatMapLayer } from 'ol/layer';
import OlMap from './olmap';
/**
 * HeatMap
 * @class HeatMap
 * @classdesc openlayers中的热力图
 */
declare class HeatMap extends OlMap {
    static defaultProps: any;
    static propTypes: any;
    private vectorSource;
    private layer;
    /**
     * addLayer - 添加一个热力图图层
     */
    addLayer(heatMapLayerConfig?: {}): void;
    getHeatMapLayer(): HeatMapLayer;
}
export default HeatMap;
