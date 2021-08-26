// @ts-ignore
import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IGeometry, IStyle, GeometryType, IFeature, ICoordinate } from '../../types';

/**
 * Geometry
 * @class Geometry
 * @classdesc Geometry
 */
abstract class Geometry extends Emitter implements IGeometry {
  context: IFeature;

  abstract draw(ctx: CanvasRenderingContext2D, style: IStyle): void;
  abstract getType(): GeometryType;
  abstract getCenterCoordinate(): ICoordinate;

  setContext(context: IFeature): void {
    this.context = context;
  }

  getContext(): IFeature {
    return this.context;
  }

  protected getMap(): any {
    return this.getContext().getContext().getContext().getMap();
  }
}

export default Geometry;
