var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var r={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};import Feature from"./Feature";import{VectorActions}from"./types";import TextStyle from"./style/TextStyle";var InnerTextFeature=function(o){function t(t){var e=this,r=(t.text,t.textStyle,__rest(t,["text","textStyle"]));return(e=o.call(this,r)||this).text=t.text,e.textStyle=t.textStyle,e}return __extends(t,o),t.prototype.getText=function(){return this.text},t.prototype.getTextStyle=function(){return this.textStyle},t.prototype.setText=function(t){this.text=t,null!==(t=null===(t=null==this?void 0:this.getLayer())||void 0===t?void 0:t.getEmitter())&&void 0!==t&&t.trigger(VectorActions.UPDATE)},t.prototype.setTextStyle=function(t){this.textStyle=t,null!==(t=null===(t=null==this?void 0:this.getLayer())||void 0===t?void 0:t.getEmitter())&&void 0!==t&&t.trigger(VectorActions.UPDATE)},t.prototype.draw=function(t){o.prototype.draw.call(this,t),this.geometry.drawText({ctx:t,text:this.text,style:this.style,textStyle:this.textStyle||__assign({},TextStyle)})},t}(Feature);export default InnerTextFeature;
//# sourceMappingURL=InnerTextFeature.js.map