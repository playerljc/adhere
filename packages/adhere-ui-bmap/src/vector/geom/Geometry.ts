import {
  IGeometry,
  IStyle,
  IPixel,
  GeometryType,
  IFeature,
  IVectorLayer,
  ITextStyle,
  IGeometryStyle,
} from '../types';

import TextStyle from '../style/TextStyle';
import GeometryStyle from '../style/GeometryStyle';

/**
 * Geometry
 * @class Geometry
 * @classdesc Geometry
 */
abstract class Geometry implements IGeometry {
  context: IFeature;

  abstract draw(ctx: CanvasRenderingContext2D, style: IStyle): void;
  abstract getType(): GeometryType;
  abstract getCenterCoordinate({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    isScale: boolean;
  }): IPixel;
  abstract isPixelInGeometry(pixel: IPixel): boolean;

  setContext(context: IFeature): void {
    this.context = context;
  }

  getContext(): IFeature {
    return this.context;
  }

  drawText({
    ctx,
    text,
    style,
    textStyle,
  }: {
    ctx: CanvasRenderingContext2D;
    text: string;
    style: IGeometryStyle;
    textStyle: ITextStyle;
  }): void {
    // draw文字
    ctx.beginPath();

    ctx.save();

    const targetTextStyle = { ...TextStyle, ...(textStyle || {}) };
    ctx.font = targetTextStyle.font;
    ctx.textAlign = targetTextStyle.textAlign;
    ctx.textBaseline = targetTextStyle.textBaseline;
    ctx.direction = targetTextStyle.direction;
    ctx.strokeStyle = targetTextStyle.strokeStyle;
    ctx.fillStyle = targetTextStyle.fillStyle;

    const targetStyle: IGeometryStyle = { ...GeometryStyle, ...(style || {}) };
    ctx.lineWidth = targetStyle.lineWidth;
    ctx.lineJoin = targetStyle.lineJoin;
    ctx.lineCap = targetStyle.lineCap;
    ctx.setLineDash(targetStyle.lineDash);
    ctx.lineDashOffset = targetStyle.lineDashOffset;
    ctx.strokeStyle = targetStyle.strokeStyle;

    const centerPixel: IPixel = this.getCenterCoordinate({ ctx, style, isScale: true });

    ctx.fillText(text || '', centerPixel.x, centerPixel.y);

    ctx.restore();
  }

  protected getMap(): any {
    return this.getLayer().getMap();
  }

  protected getLayer(): IVectorLayer {
    return this.getContext().getContext().getContext();
  }
}

export default Geometry;
