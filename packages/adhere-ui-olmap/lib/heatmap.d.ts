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
    addLayer(): void;
    getHeatmapLayer(): null;
}
export default HeatMap;
