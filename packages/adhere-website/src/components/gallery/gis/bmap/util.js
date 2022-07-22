// @ts-ignore
export default {
  // 经纬度(EPSG:4326)转换EPSG:3857
  // javascript 转换
  lonLat2Mercator(lonlat) {
    const mercator = {
      x: 0,
      y: 0,
    };
    const earthRad = 6378137.0;
    mercator.x = ((lonlat.lng * Math.PI) / 180) * earthRad;
    const a = (lonlat.lat * Math.PI) / 180;
    mercator.y = (earthRad / 2) * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
    return mercator;
  },
  BaiduPointConvert: function (map) {
    this.map = map;
    //瓦片xy计算出经纬度坐标
    //step1: this.tileToPixel(pixel);百度地图瓦片大小为 256*256，根据 瓦片xy * 256计算出瓦片的像素坐标；
    //step2 : this.pixelToWorld(this.tileToPixel(pixel)) ; 将像素坐标转为平面坐标。
    //step3: this.worldToLngLat(this.pixelToWorld(this.tileToPixel(pixel))); 调用API提供的方法将平面坐标转为经纬度坐标；
    //API说明请参考：http://developer.baidu.com/map/reference/index.php?title=Class:%E5%9C%B0%E5%9B%BE%E7%B1%BB%E5%9E%8B%E7%B1%BB/Projection
    this.tileToLngLat = function (pixel) {
      return this.worldToLngLat(this.pixelToWorld(this.tileToPixel(pixel)));
    };
    this.lngLatToTile = function (lngLat) {
      return this.pixelToTile(this.worldToPixel(this.lngLatToWorld(lngLat)));
    };
    this.pixelToLngLat = function (pixel) {
      return this.worldToLngLat(this.pixelToWorld(pixel));
    };
    this.lngLatToPixel = function (lngLat) {
      return this.worldToPixel(this.lngLatToWorld(lngLat));
    };
    this.tileToPixel = function (pixel) {
      return new BMap.Pixel(pixel.x * 256, pixel.y * 256);
    };
    this.pixelToWorld = function (pixel) {
      const zoom = this.map.getZoom();
      return new BMap.Pixel(pixel.x / Math.pow(2, zoom - 18), pixel.y / Math.pow(2, zoom - 18));
    };
    this.worldToLngLat = function (pixel) {
      const projection = this.map.getMapType().getProjection();
      return projection.pointToLngLat(pixel);
    };
    this.pixelToTile = function (pixel) {
      return new BMap.Pixel(pixel.x / 256, pixel.y / 256);
    };
    this.worldToPixel = function (pixel) {
      const zoom = this.map.getZoom();
      return new BMap.Pixel(pixel.x * Math.pow(2, zoom - 18), pixel.y * Math.pow(2, zoom - 18));
    };
    this.lngLatToWorld = function (lngLat) {
      const projection = this.map.getMapType().getProjection();
      return projection.lngLatToPoint(lngLat);
    };
  },
};
