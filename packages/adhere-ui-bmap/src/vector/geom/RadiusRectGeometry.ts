import Util from '../../util';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, IGeometryStyle, IPixel, IRadiusRectGeometryData } from '../types';
import RectGeometry from './RectGeometry';

/**
 * RadiusRectGeometry
 * @class RadiusRectGeometry
 * @classdesc 圆角矩形
 */
class RadiusRectGeometry extends RectGeometry {
  coordinates: IRadiusRectGeometryData;

  constructor(coordinates: IRadiusRectGeometryData) {
    super(coordinates);

    this.coordinates = coordinates;
  }

  getType(): GeometryType {
    return GeometryType.RadiusRect;
  }

  /**
   * drawRadiusRect
   * @param ctx
   * @param style
   * @param coordinates
   * @param isScale
   * @param map
   */
  static drawRadiusRect({
    ctx,
    style,
    coordinates,
    map,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: IRadiusRectGeometryData;
    map: any;
    isScale: boolean;
  }) {
    const targetStyle = {
      ...GeometryStyle,
      ...(style ?? {}),
    };

    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;
    ctx.fillStyle = targetStyle.fillStyle;

    const { leftTop, width, height, radius } = coordinates;

    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(leftTop.lng, leftTop.lat));

    // 比例尺
    const scale = Util.getScale(map);

    // 实际的宽度(图上距离)
    let realWidth = width;
    // 实际的高度(图上距离)
    let realHeight = height;
    // 实际的圆角半径
    let realRadius = radius;
    if (isScale) {
      realWidth = scale * width;
      realHeight = scale * height;
      realRadius = scale * radius;
    }

    let prePoint: IPixel;

    // 圆角1
    ctx.moveTo(pixel.x, pixel.y + realRadius);
    ctx.arcTo(pixel.x, pixel.y, pixel.x + realRadius, pixel.y, realRadius);

    // 直线1
    ctx.lineTo(pixel.x + realWidth - realRadius, pixel.y);
    prePoint = { x: pixel.x + realWidth - realRadius, y: pixel.y };

    // 圆角2
    ctx.arcTo(
      prePoint.x + realRadius,
      pixel.y,
      prePoint.x + realRadius,
      pixel.y + realRadius,
      realRadius,
    );
    prePoint = { x: prePoint.x + realRadius, y: pixel.y + realRadius };

    // 直线2
    ctx.lineTo(prePoint.x, prePoint.y + (realHeight - 2 * realRadius));
    prePoint = { x: prePoint.x, y: prePoint.y + (realHeight - 2 * realRadius) };

    // 圆角3
    ctx.arcTo(
      prePoint.x,
      prePoint.y + realRadius,
      prePoint.x - realRadius,
      prePoint.y + realRadius,
      realRadius,
    );
    prePoint = { x: prePoint.x - realRadius, y: prePoint.y + realRadius };

    // 直线3
    ctx.lineTo(prePoint.x - (realWidth - 2 * realRadius), prePoint.y);
    prePoint = { x: prePoint.x - (realWidth - 2 * realRadius), y: prePoint.y };

    // 圆角4
    ctx.arcTo(
      prePoint.x - realRadius,
      prePoint.y,
      prePoint.x - realRadius,
      prePoint.y - realRadius,
      realRadius,
    );
    prePoint = { x: prePoint.x - realRadius, y: prePoint.y - realRadius };

    // 直线4
    ctx.lineTo(prePoint.x, prePoint.y - (realHeight - realRadius * 2));

    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    RadiusRectGeometry.drawRadiusRect({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
      isScale: true,
    });
  }
}

export default RadiusRectGeometry;
