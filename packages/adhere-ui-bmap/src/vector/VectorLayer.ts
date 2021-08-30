// @ts-ignore
import Emitter from '@baifendian/adhere-util-emitter/lib/events';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import {
  IPixel,
  IVectorLayer,
  IVectorLayerConfig,
  IVectorSource,
  VectorActions,
  VectorEventActions,
} from './types';

/**
 * VectorLayer
 * @class VectorLayer
 * @classdesc 向量层，使用canvas进行绘制
 */
// @ts-ignore
class VectorLayer extends BMap.CanvasLayer implements IVectorLayer {
  map: any;
  config: IVectorLayerConfig;
  source: IVectorSource;
  isLoad: boolean = false;
  emitter: Emitter = new Emitter();
  cacheCanvas: HTMLCanvasElement | null = null;

  // @ts-ignore
  constructor(map, config: IVectorLayerConfig) {
    // @ts-ignore
    this.update = this.update.bind(this);

    super({
      // @ts-ignore
      update: this.update,
      paneName: config.paneName,
      zIndex: config.zIndex,
    });

    this.map = map;
    this.config = { ...config };
    this.source = config.source;
    this.source && this.source.setContext(this);

    this.onUpdate = this.onUpdate.bind(this);

    this.initEvents();
  }

  getSource(): IVectorSource {
    return this.source;
  }

  getZIndex(): number {
    return this.config.zIndex;
  }

  setSource(source: IVectorSource): void {
    this.source = source;
    this.source && this.source.setContext(this);
    this.update();
  }

  /**
   * drawCache
   */
  protected drawCache(): void {
    if (!this.cacheCanvas) {
      this.cacheCanvas = document.createElement('canvas');
      // @ts-ignore
      this.cacheCanvas.width = this.canvas.width;
      // @ts-ignore
      this.cacheCanvas.height = this.canvas.height;
    }

    // 绘制source中的数据
    const { source } = this;

    const features = source.getFeatures();

    // 绘制的时候按照feature的zIndex从小到大进行排序
    features.sort((f1, f2) => {
      if (f1.getZIndex() > f2.getZIndex()) return 1;
      else if (f1.getZIndex() < f2.getZIndex()) return -1;
      else return 0;
    });

    const ctx = this.cacheCanvas.getContext('2d');

    ctx.clearRect(0, 0, this.cacheCanvas.width, this.cacheCanvas.height);

    (features || []).forEach((feature) => {
      feature.draw(ctx);
    });
  }

  update() {
    // @ts-ignore
    const ctx = this.canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    if (!this.isLoad) {
      this.initCanvasEvents();
    }

    this.isLoad = true;

    this.drawCache();

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.drawImage(this.cacheCanvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  getMap() {
    return this.map;
  }

  getEmitter(): Emitter {
    return this.emitter;
  }

  addEventListener(type: VectorEventActions, handler): void {
    this.emitter.on(type, handler);
  }

  removeEventListener(type: VectorEventActions, handler): void {
    this.emitter.remove(type, handler);
  }

  protected initCanvasEvents() {
    // @ts-ignore
    this.canvas.addEventListener('click', (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const pixel: IPixel = MathUtil.clientToCtxPoint({
        event: e,
        // @ts-ignore
        rect: this.canvas.getBoundingClientRect(),
      });

      const features = this.source.getFeatures();
      const hitFeatures = features.filter((f) => f.isPointInFeature(pixel, f.getStyle()));

      if (hitFeatures.length) {
        this.emitter.trigger(VectorEventActions.FEATURE_CLICK, {
          features: [...hitFeatures],
          pixel,
        });
      } else {
        this.emitter.trigger(VectorEventActions.VECTOR_CLICK);
      }
    });
  }

  protected initEvents() {
    this.emitter.on(VectorActions.UPDATE, this.onUpdate);
  }

  protected onUpdate() {
    this.update();
  }
}

export default VectorLayer;
