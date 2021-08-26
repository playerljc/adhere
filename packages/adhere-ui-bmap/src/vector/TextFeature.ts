import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import {
  ITextParams,
  ITextFeature,
  ITextGeometry,
  ITextStyle,
  VectorActions,
  IVectorSource,
} from '../types';

/**
 * TextFeature
 * @class TextFeature
 * @classdesc 只包含文本的要素
 */
class TextFeature extends Emitter implements ITextFeature {
  name: string;
  id: string;
  style: ITextStyle;
  geometry: ITextGeometry;
  context: IVectorSource;

  // @ts-ignore
  constructor() {
    super();
  }

  // @ts-ignore
  constructor(params: ITextParams) {
    super();

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
    this.trigger(VectorActions.UPDATE);
  }

  setStyle(style: ITextStyle): void {
    this.style = style;
    this.trigger(VectorActions.UPDATE);
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
}

export default TextFeature;
