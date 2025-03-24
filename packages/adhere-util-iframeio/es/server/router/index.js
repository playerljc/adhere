class Router{controllers=new Map;controller(t,o){return this.controllers.set(t,(r,e)=>{t===r.getRequest().getPathname()?o(r,e):e&&e()}),this}routers(){return Array.from(this.controllers.values())}}export default Router;
//# sourceMappingURL=index.js.map
