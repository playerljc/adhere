import {
  ITextParams,
  ITextFeature,
  ITextGeometry,
  ITextStyle,
  VectorActions,
  IVectorSource,
  IVectorLayer,
} from '../types';

/**
 * TextFeature
 * @class TextFeature
 * @classdesc 只包含文本的要素
 */
class TextFeature implements ITextFeature {
  name: string;
  id: string;
  style: ITextStyle;
  geometry: ITextGeometry;
  context: IVectorSource;

  constructor(params: ITextParams) {
    this.name = params.name;
    this.id = params.id;
    this.style = params.style;
    this.geometry = params.geometry;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.geometry.draw(ctx, this.style);
  }

  getGeometry(): ITextGeometry {
    return this.geometry;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStyle(): ITextStyle {
    return this.style;
  }

  setGeometry(geom: ITextGeometry): void {
    this.geometry = geom;
    this.getLayer().getEmitter().trigger(VectorActions.UPDATE);
  }

  setStyle(style: ITextStyle): void {
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

  getMap(): any {
    return this.getLayer().getMap();
  }

  getLayer(): IVectorLayer {
    return this.getContext().getContext();
  }

  setContext(context: IVectorSource): void {
    this.context = context;
  }
}

export default TextFeature;
