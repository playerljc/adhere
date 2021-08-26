import {IGeometry, IStyle, GeometryType, IFeature, ICoordinate, IVectorLayer} from '../../types';

/**
 * Geometry
 * @class Geometry
 * @classdesc Geometry
 */
abstract class Geometry implements IGeometry {
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
    return this.getLayer().getMap();
  }

  protected getLayer(): IVectorLayer {
    return this.getContext().getContext().getContext();
  }
}

export default Geometry;
