var ImageCache=new Map,ImageCacheIns={add:function(e,a){return ImageCache.set(JSON.stringify(e),a)},get:function(e){return ImageCache.get(JSON.stringify(e))},delete:function(e){return ImageCache.delete(JSON.stringify(e))},clear:function(){ImageCache.clear()},values:function(){return Array.from(ImageCache.values())},keys:function(){return Array.from(ImageCache.keys()).map(function(e){return JSON.parse(e)})}};export default ImageCacheIns;
//# sourceMappingURL=ImageCache.js.map
