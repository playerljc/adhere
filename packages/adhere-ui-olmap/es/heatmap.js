import OlMap from"./OLMap";import Util from"./Util";class HeatMap extends OlMap{static defaultProps;static propTypes;vectorSource;layer;addLayer(a={}){var{layer:a,vectorSource:e}=Util.createHeatMapLayer(a??{});this.layer=a,this.vectorSource=e,this.map.addLayer(this.layer)}getHeatMapLayer(){return this.layer}}export default HeatMap;
//# sourceMappingURL=HeatMap.js.map
