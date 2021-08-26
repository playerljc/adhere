import {
  IVectorLayer,
  IFeatureParams,
  IVectorSource,
  IFeature,
  IGeometry,
  IStyle,
  VectorActions,
} from '../types';

/**
 * Feature
 * @class Feature
 * @classdesc 要素
 */
class Feature implements IFeature {
  // 要素的名称
  name: string;

  // 要素的id
  id: string;

  // 要素的样式
  style: IStyle;

  // 要素的几何形状
  geometry: IGeometry;

  context: IVectorSource;

  constructor(params: IFeatureParams) {
    this.name = params.name;
    this.id = params.id;
    this.style = params.style;
    this.geometry = params.geometry;
    this.setGeometryContext();
  }

  protected setGeometryContext() {
    this.geometry && this.geometry.setContext(this);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // 绘制geometry(几何形状)
    this.geometry.draw(ctx, this.style);
  }

  getGeometry(): IGeometry {
    return this.geometry;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStyle(): IStyle {
    return this.style;
  }

  setGeometry(geom: IGeometry): void {
    this.geometry = geom;
    this.setGeometryContext();
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  setStyle(style: IStyle): void {
    this.style = style;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  setId(id: string): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getContext(): IVectorSource {
    return this.context;
  }

  setContext(context: IVectorSource): void {
    this.context = context;
  }

  getLayer(): IVectorLayer {
    return this.getContext().getContext();
  }

  getMap(): any {
    return this.getLayer().getMap();
  }
}

export default Feature;
