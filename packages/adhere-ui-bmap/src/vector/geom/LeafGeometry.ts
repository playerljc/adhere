import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  IGeometryStyle,
  ILeafGeometry,
  ILeafGeometryData,
  IPixel,
  VectorActions,
} from '../types';
import Geometry from './Geometry';

/**
 * LeafGeometry
 * @class LeafGeometry
 * @classdesc LeafGeometry - N叶草
 */
class LeafGeometry extends Geometry implements ILeafGeometry {
  coordinates: ILeafGeometryData;

  constructor(coordinates: ILeafGeometryData) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ILeafGeometryData) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ILeafGeometryData {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Leaf;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ILeafGeometryData;
    map: any;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    const centerPixel = map.pointToPixel(
      // @ts-ignore
      new BMap.Point(coordinates.center.lng, coordinates.center.lat),
    );
    return { ...centerPixel };
  }

  getCenterCoordinate({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel {
    return LeafGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale,
    });
  }

  static drawLeaf({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ILeafGeometryData;
    map: any;
    isScale: boolean;
  }) {
    ctx.save();

    const targetStyle = {
      ...GeometryStyle,
      ...(style ?? {}),
    };

    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { n, center, size, length } = coordinates;

    let curSize = size;
    let curLength = length;

    if (isScale) {
      // 比例尺
      const scale = Util.getScale(map);
      curSize = scale * size;
      curLength = scale * length;
    }

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));

    ctx.moveTo(pixel.x, pixel.y + curSize);

    const degree = (2 * Math.PI) / n;

    for (let i = 1; i < n + 1; i++) {
      const cx1 = Math.sin((i - 1) * degree) * curLength + pixel.x;
      const cy1 = Math.cos((i - 1) * degree) * curLength + pixel.y;

      const cx2 = Math.sin(i * degree) * curLength + pixel.x;
      const cy2 = Math.cos(i * degree) * curLength + pixel.y;

      const x = Math.sin(i * degree) * curSize + pixel.x;
      const y = Math.cos(i * degree) * curSize + pixel.y;

      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
    }

    ctx.closePath();

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  /**
   * draw - 绘制一个多边形
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    LeafGeometry.drawLeaf({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
      isScale: true,
    });
  }

  static isPixelInGeometry({
    coordinates,
    map,
    pixel,
    style,
    isScale,
  }: {
    coordinates: ILeafGeometryData;
    pixel: IPixel;
    style: IGeometryStyle;
    map: any;
    isScale: boolean;
  }): boolean {
    // const { n, center, size } = coordinates;
    //
    // const scale = Util.getScale(map);
    // const points: IPixel[] = [];
    //
    // let curSize = size;
    // if (isScale) {
    //   curSize = scale * size;
    // }
    //
    // // @ts-ignore
    // const centerPixel = map.pointToPixel(new BMap.Point(center.lng, center.lat));
    //
    // const degree = (2 * Math.PI) / n;
    //
    // for (let i = 0; i < n; i++) {
    //   const x = Math.cos(i * degree);
    //   const y = Math.sin(i * degree);
    //   points.push({
    //     x: x * curSize + centerPixel.x,
    //     y: y * curSize + centerPixel.y,
    //   });
    // }
    //
    // const polygon = points.map((point) => [point.x, point.y]);
    // polygon.push(polygon[0]);
    //
    // const point = turf.point([pixel.x, pixel.y]);
    // const poly = turf.polygon([polygon]);
    //
    // return turf.booleanPointInPolygon(point, poly);
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    if (!ctx) return false;

    LeafGeometry.drawLeaf({
      ctx,
      coordinates,
      style,
      map,
      isScale,
    });

    return ctx.isPointInPath(pixel.x, pixel.y);
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return LeafGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      map: this.getMap(),
      style,
      isScale: true,
      pixel,
    });
  }
}

export default LeafGeometry;
