const ImageCache = new Map();
/**
 * ImageCacheIns
 */
const ImageCacheIns = {
    add(key, image) {
        return ImageCache.set(JSON.stringify(key), image);
    },
    get(key) {
        return ImageCache.get(JSON.stringify(key));
    },
    delete(key) {
        return ImageCache.delete(JSON.stringify(key));
    },
    clear() {
        ImageCache.clear();
    },
    values() {
        return Array.from(ImageCache.values());
    },
    keys() {
        return Array.from(ImageCache.keys()).map((key) => JSON.parse(key));
    },
};
export default ImageCacheIns;
