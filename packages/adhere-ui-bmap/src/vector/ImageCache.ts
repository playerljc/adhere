import { ImageCacheClass, ImageCacheKey } from './types';

const ImageCache = new Map<string, HTMLImageElement>();

/**
 * ImageCacheIns
 */
const ImageCacheIns: ImageCacheClass = {
  add(key: ImageCacheKey, image: HTMLImageElement): Map<string, HTMLImageElement> {
    return ImageCache.set(JSON.stringify(key), image);
  },
  get(key: ImageCacheKey): HTMLImageElement | null | undefined {
    return ImageCache.get(JSON.stringify(key));
  },
  delete(key: ImageCacheKey): boolean {
    return ImageCache.delete(JSON.stringify(key));
  },
  clear(): void {
    ImageCache.clear();
  },
  values(): HTMLImageElement[] {
    return Array.from(ImageCache.values());
  },
  keys(): ImageCacheKey[] {
    return Array.from(ImageCache.keys()).map((key) => JSON.parse(key));
  },
};

export default ImageCacheIns;
