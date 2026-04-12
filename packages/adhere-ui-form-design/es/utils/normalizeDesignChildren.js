export default function normalizeDesignChildren(r,n){n=null!=(n=null==n?void 0:n.returnUndefinedIfEmpty)&&n;if(!r||0===r.length)return n?void 0:[];for(var e=[],l=0,i=r;l<i.length;l++){var t=i[l];Array.isArray(t)?e.push.apply(e,t):t&&e.push(t)}return 0===e.length?n?void 0:[]:e}
//# sourceMappingURL=normalizeDesignChildren.js.map
