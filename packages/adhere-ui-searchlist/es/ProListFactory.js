var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import SearchTable from"@baifendian/adhere-ui-searchtable";var ProTableFactory=SearchTable.ProTableFactory;export default function(t,e){return n=ProTableFactory(t,e),__extends(r,n),r.prototype.getParams=function(){var e={};return function o(t){t.reduce(function(t,e){var r=e.$search,n=e.children,r=null!=r?r:{},e=r.dataIndex||e.dataIndex;return"rangePicker"===r.type?(r.startName&&(t[r.startName]=null),r.endName&&(t[r.endName]=null)):["datePicker","timePicker"].includes(r.type)?t[e]=null:t[e]=void 0,n&&Array.isArray(n)&&o(n),t},e)}(this.getColumns()),e},r.prototype.getColumns=function(){return[]},r;function r(){return null!==n&&n.apply(this,arguments)||this}var n}
//# sourceMappingURL=ProListFactory.js.map
