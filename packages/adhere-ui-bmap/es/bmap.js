var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-bmap",loadGridIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==",BMap=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.BMap=null,e.map=null,e.isLoad=!1,e.state={isReady:!1},e.ref=React.createRef(),e}return __extends(e,t),e.prototype.getMap=function(){return this.map},e.prototype.componentDidMount=function(){var t=this;this.props.externalImportBMapScript?(this.BMap="undefined"!=typeof window&&window.BMap,this.setState({isReady:!0},function(){t.initMap()})):this.importBMapJS().then(function(e){t.BMap=e,"undefined"!=typeof window&&(window.BMap=e),t.props.onBMapScriptReady&&t.props.onBMapScriptReady(),t.setState({isReady:!0},function(){t.initMap()})})},e.prototype.initMap=function(){var o=this,e=this.BMap,t=this.props,n=t.config,i=t.zoom,r=t.onBMapInitReady,t=t.center;this.map=new e.Map(this.ref.current,__assign({enableMapClick:!1},n)),this.initMapControl(),this.map.centerAndZoom(new e.Point(null==t?void 0:t.lon,null==t?void 0:t.lat),i),this.map.addEventListener("tilesloaded",function(){var e,t;o.isLoad||(o.isLoad=!0,(t=document.querySelector(".anchorBL"))&&null!==(e=null==t?void 0:t.parentElement)&&void 0!==e&&e.removeChild(t),setTimeout(function(){var e;null!==(e=null===(e=null===(e=null==o?void 0:o.ref)||void 0===e?void 0:e.current)||void 0===e?void 0:e.style)&&void 0!==e&&(e.background='url("'+loadGridIcon+'") repeat #fff;')},2e3))}),r&&r()},e.prototype.initMapControl=function(){var e=this.BMap;this.map.addControl(new e.NavigationControl),this.map.enableScrollWheelZoom(!0)},e.prototype.importBMapJS=function(){var o=this;return new Promise(function(i){var e,r=document.write;document.write=function(e){var t=document.createElement("div");t.innerHTML=e;var o,n=t.firstElementChild;"script"===(null==n?void 0:n.tagName.toLowerCase())&&-1!==(null===(t=null==n?void 0:n.getAttribute("src"))||void 0===t?void 0:t.indexOf("http://api.map.baidu.com"))?(o=n.getAttribute("src"),new Promise(function(e){var t=document.createElement("script");t.onload=function(){e("undefined"!=typeof window&&window.BMap)},t.src=o,document.querySelector("head").appendChild(t)}).then(function(e){i(e)})):r(e)};var t=document.createElement("script");t.src="http://api.map.baidu.com/api?v=3.0&ak="+o.props.ak,null!==(e=null===document||void 0===document?void 0:document.querySelector("head"))&&void 0!==e&&e.appendChild(t)})},e.prototype.renderLoading=function(){return React.createElement("div",null,"loading")},e.prototype.render=function(){var e=this,t=this.props,o=t.className,n=t.style,t=this.state.isReady;return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return e.renderLoading()}},function(){return React.createElement("div",{className:classNames(selectorPrefix,null==o?void 0:o.split(/\s+/)),style:__assign({},n),ref:e.ref})})},e}(React.Component);BMap.defaultProps={className:"",style:{},ak:"bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp",config:{minZoom:2,maxZoom:20,enableHighResolution:!0,enableAutoResize:!0,enableMapClick:!1},zoom:5,center:{lon:116.404,lat:39.915},externalImportBMapScript:!1},BMap.propTypes={className:PropTypes.string,style:PropTypes.object,ak:PropTypes.string,zoom:PropTypes.number,center:PropTypes.object,config:PropTypes.shape({minZoom:PropTypes.number,maxZoom:PropTypes.number,mapType:PropTypes.object,enableHighResolution:PropTypes.bool,enableAutoResize:PropTypes.bool,enableMapClick:PropTypes.bool}),onBMapInitReady:PropTypes.func,onBMapScriptReady:PropTypes.func,externalImportBMapScript:PropTypes.bool};export default BMap;
//# sourceMappingURL=bmap.js.map
