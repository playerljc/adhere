import Dict from '@baifendian/adhere-util-dict';

export default {
  initStatic() {
    Dict.handlers.ResourceGisEpsg4326 = () => 'EPSG:4326';

    Dict.handlers.ResourceGisEpsg3857 = () => 'EPSG:3857';

    Dict.handlers.ResourceGisEarthRadius = () => 6378137.0; // 单位M

    Dict.handlers.ResourceGisMapMaxZoom = () => 17;

    Dict.handlers.ResourceGisMapMinZoom = () => 11;

    // 常州市新北区地图的范围
    Dict.handlers.ResourceGisXinbeiquMapExtent = () => [
      [119.438, 32.13607],
      [120.33419, 31.74221],
    ];

    // 最大最小范围
    Dict.handlers.ResourceGisDefaultExtent = () => [
      [-180, -90],
      [180, 90],
    ];

    // 常州市新北区中心点
    Dict.handlers.ResourceGisXinbeiquCenterPoint = () => [119.879673, 31.933156];
  },
  initRemote() {},
};
