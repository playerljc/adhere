var Router=function(){function t(){this.controllers=new Map}return t.prototype.controller=function(e,o){return this.controllers.set(e,function(t,r){e!==t.getRequest().getPathname()?r&&r():o(t,r)}),this},t.prototype.routers=function(){return Array.from(this.controllers.values())},t}();export default Router;
//# sourceMappingURL=index.js.map
