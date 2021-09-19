import MathUtil from '@baifendian/adhere-util/lib/math';

import { IPixel } from './vector/types';

export default {
  /**
   * flyToChina - 设置地图的zoom为全中国
   * @param map
   */
  flyToChina(map) {
    // @ts-ignore
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
  ): // @ts-ignore
  Promise<BMap.Polygon> {
    const cityOverlays = [];
    const cityPoints = [];

    return new Promise((resolve) => {
      // 勾勒的轮廓
      // @ts-ignore
      const bd = new BMap.Boundary();

      bd.get(cityName, (rs) => {
        for (let i = 0; i < rs.boundaries.length; i++) {
          const boundarieStr = rs.boundaries[i];

          const boundarie = boundarieStr.split(';');

          boundarie.forEach((pointStr) => {
            const point = pointStr.trim().split(',');
            cityPoints.push(
              // @ts-ignore
              new BMap.Point(parseFloat(point[0].trim()), parseFloat(point[1].trim())),
            );
          });

          // @ts-ignore
          const hole = new BMap.Polygon(boundarieStr, { ...style });

          // @ts-ignore
          cityOverlays.push(hole);

          map.addOverlay(hole);
        }

        resolve({
          cityOverlays,
          cityPoints,
        });
      });
    });
  },
  /**
   * fit - 根据数据fit适应的zoom上
   * @param map
   * @param points
   * @param config
   */
  // @ts-ignore
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
    // const zoom = map.getZoom();
    //
    // /**
    //  * 比例尺的单位是(m)
    //  */
    // const zoomScaleMap = new Map([
    //   [19, 20],
    //   [18, 50],
    //   [17, 10],
    //   [16, 200],
    //   [15, 500],
    //   [14, 1000],
    //   [13, 2000],
    //   [12, 5000],
    //   [11, 10000],
    //   [10, 20000],
    //   [9, 25000],
    //   [8, 50000],
    //   [7, 100000],
    //   [6, 200000],
    //   [5, 500000],
    //   [4, 1000000],
    //   [3, 2000000],
    //   [2, 5000000],
    //   [1, 10000000],
    // ]);
    //
    // // @ts-ignore
    // return 1 / zoomScaleMap.get(zoom);

    // 根据输入范围值(单位：米) 计算出需要画的区域像素：px
    const pointA = map.getCenter();
    // const pointAPixel = map.pointToOverlayPixel(pointA);
    const pointAPixel = map.pointToPixel(pointA);

    // @ts-ignore
    const pointB = new BMap.Point(pointA.lng, pointA.lat + 0.001);
    // const pointBPixel = map.pointToOverlayPixel(pointB);
    const pointBPixel = map.pointToPixel(pointB);

    // 像素距离
    const pixelDistanceBetween2Points = Math.abs(pointBPixel.y - pointAPixel.y);
    const realDistanceBetween2Points = map.getDistance(pointA, pointB);

    // console.log('pointAPixel', pointAPixel);
    // console.log('pointBPixel', pointBPixel);
    // console.log('realDistanceBetween2Points', realDistanceBetween2Points);

    // 比例尺
    return (
      (pixelDistanceBetween2Points <= 0 ? 1 : pixelDistanceBetween2Points) /
      realDistanceBetween2Points
    );

    // return this.getUnitPixelToM(map.getZoom());
  },
  /**
   * getUnitPixelToM - 1px等于多少米(m)
   * @param zoom
   * @return number
   */
  getUnitPixelToM(zoom): number {
    return Math.pow(2, 18 - zoom);
  },
  /**
   * getArrowPoints - 获取三角形三个顶点值
   * @param from
   * @param to
   * @param scale
   * @param width
   * @param theta
   * @return {{A: {x: number, y: number}, B: {x: number, y: number}, C: {x: number, y: number}}}
   */
  getArrowPoints({ from, to, scale = 1, width = 5, theta = 35 }) {
    const { x: fromX, y: fromY } = from;
    const { x: toX, y: toY } = to;
    let arrowX, arrowY; // 箭头线终点坐标
    // 计算各角度和对应的箭头终点坐标
    const angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI;
    const angle1 = ((angle + theta) * Math.PI) / 180;
    const angle2 = ((angle - theta) * Math.PI) / 180;

    const topX = width * Math.cos(angle1);
    const topY = width * Math.sin(angle1);

    const botX = width * Math.cos(angle2);
    const botY = width * Math.sin(angle2);

    arrowX = toX + topX;
    arrowY = toY + topY;

    const A = {
      x: arrowX * scale,
      y: arrowY * scale,
    };

    const B = {
      x: toX * scale,
      y: toY * scale,
    };

    arrowX = toX + botX;
    arrowY = toY + botY;

    const C = {
      x: arrowX * scale,
      y: arrowY * scale,
    };

    return {
      A,
      B,
      C,
    };
  },
  clientToCtxPointToEl({
    event,
    rect,
    offsetEl,
  }: {
    event: MouseEvent;
    rect: DOMRect;
    offsetEl: HTMLElement;
  }): IPixel {
    let { left, top } = window.getComputedStyle(offsetEl, null);
    const offsetLeft: number = parseInt(left.replace('px', ''));
    const offsetTop: number = parseInt(top.replace('px', ''));

    return this.clientToCtxPoint({
      event,
      rect,
      offsetLeft,
      offsetTop,
    });
  },
  clientToCtxPoint({
    event,
    rect,
    offsetLeft,
    offsetTop,
  }: {
    event: MouseEvent;
    rect: DOMRect;
    offsetLeft: number;
    offsetTop: number;
  }): IPixel {
    let pixel = MathUtil.clientToCtxPoint({
      event: event,
      rect: rect,
    });

    pixel.x -= offsetLeft;
    pixel.y -= offsetTop;

    return pixel;
  },
};
