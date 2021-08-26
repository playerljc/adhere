export default {
  /**
   * flyToChina - 设置地图的zoom为全中国
   * @param map
   */
  flyToChina(map) {
    map.centerAndZoom(new BMap.Point(106.638754, 34.842904), 2);
  },
  /**
   * fillCityBoundary - 根据city名字填充城市轮廓
   * @param cityName
   * @param style
   * @param map
   * @return
   */
  fillCityBoundary(
    cityName,
    style: {
      fillColor: 'rgba(0,0,0,.1)';
      fillOpacity: 0.7;
      strokeWeight: 1;
      strokeOpacity: 0.2;
      strokeColor: '#ddd';
    },
    map,
  ): Promise<BMap.Polygon> {
    const cityOverlays = [];

    return new Promise((resolve) => {
      // 勾勒的轮廓
      const bd = new BMap.Boundary();

      bd.get(cityName, (rs) => {
        for (let i = 0; i < rs.boundaries.length; i++) {
          const boundarieStr = rs.boundaries[i];

          const boundarie = boundarieStr.split(';');

          boundarie.forEach((pointStr) => {
            const point = pointStr.trim().split(',');
            this.cityPoints.push(
              new BMap.Point(parseFloat(point[0].trim()), parseFloat(point[1].trim())),
            );
          });

          const hole = new BMap.Polygon(boundarieStr, { ...style });

          cityOverlays.push(hole);

          map.addOverlay(hole);
        }

        resolve(cityOverlays);
      });
    });
  },
  /**
   * fit - 根据数据fit适应的zoom上
   * @param map
   * @param points
   * @param config
   */
  fit(map, points: BMap.Point[], config): Promise<any> {
    return new Promise((resolve) => {
      const viewport = map.getViewport(points, config || {});

      map.centerAndZoom(viewport.center, viewport.zoom);

      setTimeout(() => {
        resolve();
      }, 200);
    });
  },
  /**
   * pixelToPoint - 像素坐标转换为经纬度坐标
   * @param map
   * @param pixel
   */
  pixelToPoint(map, pixel: { x: number; y: number }) {
    return map.pixelToPoint(pixel);
  },
  /**
   * pointToPixel - 经纬度坐标转换为像素坐标
   * @param map
   * @param point
   */
  pointToPixel(map, point: { lng: number; lat: number }) {
    return map.pointToPixel(point);
  },
  /**
   * getViewBound 获取当前视图的矩形范围坐标(坐上 | 右下)
   * @param map
   * @return {
   *   leftTopLon
   *   leftTopLat
   *   rightBottomLon
   *   rightBottomLat
   * }
   */
  getBound(
    map,
  ): { leftTopLon: number; leftTopLat: number; rightBottomLon: number; rightBottomLat: number } {
    const bounds = map.getBounds();
    //获取西南角的经纬度(左下端点)
    const sw = bounds.getSouthWest();
    //获取东北角的经纬度(右上端点)
    const ne = bounds.getNorthEast();

    return {
      leftTopLon: sw.lng,
      leftTopLat: ne.lat,
      rightBottomLon: ne.lng,
      rightBottomLat: sw.lat,
    };
  },
  /**
   * getScale - 根据zoom获取比例尺
   * @param map
   * @return number
   */
  getScale(map): number {
    const zoom = map.getZom();

    /**
     * 比例尺的单位是(m)
     */
    const zoomScaleMap = new Map([
      [19, 20],
      [18, 50],
      [17, 10],
      [16, 200],
      [15, 500],
      [14, 1000],
      [13, 2000],
      [12, 5000],
      [11, 10000],
      [10, 20000],
      [9, 25000],
      [8, 50000],
      [7, 100000],
      [6, 200000],
      [5, 500000],
      [4, 1000000],
      [3, 2000000],
      [2, 5000000],
      [1, 10000000],
    ]);

    return zoomScaleMap.get(zoom);
  },
  /**
   * getUnitPixelToM - 1px等于多少米(m)
   * @param zoom
   * @return number
   */
  getUnitPixelToM(zoom): number {
    return Math.pow(2, 18 - zoom);
  },
};
