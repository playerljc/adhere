import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import Resource from '@baifendian/adhere-util-resource';

/**
 * GeoLayer
 * @class GeoLayer
 * @classdesc openlayers中的geojson的layer
 */
class GeoLayer extends VectorLayer {
  private vectorSource: VectorSource;

  /**
   * constructor
   * @param geoJsonObject - 数据
   * @param onStyle - onStyle
   * @param zIndex
   */
  constructor(geoJsonObject, onStyle, zIndex) {
    const geoSource = new VectorSource({
      features: new GeoJSON({
        dataProjection: Resource.Dict.value.ResourceGisEpsg4326.value,
        featureProjection: Resource.Dict.value.ResourceGisEpsg3857.value,
      }).readFeatures(geoJsonObject),
    });

    super({ source: geoSource, style: onStyle, zIndex });

    this.vectorSource = geoSource;
  }
}

export default GeoLayer;
