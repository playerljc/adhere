import defaultView from"./window";function styleRemove(t){this.style.removeProperty(t)}function styleConstant(t,e,l){this.style.setProperty(t,e,l)}function styleFunction(t,e,l){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,l)}export default function(t,e,l,n){var o;return 1<arguments.length?(null==l?styleRemove:"function"==typeof l?styleFunction:styleConstant).call(t,e,l,null==n?"":n):defaultView(o=t).getComputedStyle(o,null).getPropertyValue(e)}
//# sourceMappingURL=style.js.map