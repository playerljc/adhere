import GeometryStyle from './style/GeometryStyle';
import {
  IFeature,
  IFeatureParams,
  IGeometry,
  IGeometryStyle,
  IPixel,
  IVectorLayer,
  IVectorSource,
  VectorActions,
} from './types';

/**
 * Feature
 * @class Feature
 * @classdesc 要素
 */
class Feature implements IFeature {
  // 要素的名称
  name: string = '';

  // 要素的id
  id: string = '';

  // 要素的样式
  style: IGeometryStyle = GeometryStyle;

  // 要素的层级
  zIndex: number = 1;

  // 要素的业务属性
  properties: object = {};

  // 要素的几何形状
  geometry: IGeometry;

  // 上下文
  // @ts-ignore
  context: IVectorSource;

  constructor(params: IFeatureParams) {
    this.name = params?.name;
    this.id = params?.id;
    this.properties = params?.properties;
    this.style = params?.style;
    this.geometry = params?.geometry;
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

  getStyle(): IGeometryStyle {
    return this.style;
  }

  getZIndex(): number {
    return this.zIndex;
  }

  getProperties(): object {
    return this.properties;
  }

  setGeometry(geom: IGeometry): void {
    this.geometry = geom;
    this.setGeometryContext();
    this.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  setStyle(style: IGeometryStyle): void {
    this.style = style;
    this.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  setId(id: string): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  setZIndex(zIndex: number) {
    this.zIndex = zIndex;
    this?.getLayer()?.getEmitter()?.trigger(VectorActions.UPDATE);
  }

  setProperties(properties: object): void {
    this.properties = properties;
  }

  getContext(): IVectorSource {
    return this.context;
  }

  setContext(context: IVectorSource): void {
    this.context = context;
  }

  getLayer(): IVectorLayer | null {
    // @ts-ignore
    return this?.getContext()?.getContext();
  }

  getMap(): any {
    return this?.getLayer()?.getMap();
  }

  isPointInFeature(pixel: IPixel, style: IGeometryStyle): boolean {
    return this.geometry.isPixelInGeometry(pixel, style);
  }
}

export default Feature;
