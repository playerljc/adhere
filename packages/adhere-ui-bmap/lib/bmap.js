var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-bmap",loadGridIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==",BMap=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.BMap=null,e.map=null,e.isLoad=!1,e.state={isReady:!1},e.ref=React.createRef(),e}return __extends(e,t),e.prototype.getMap=function(){return this.map},e.prototype.componentDidMount=function(){var t=this;this.props.externalImportBMapScript?(this.BMap=window.BMap,this.setState({isReady:!0},function(){t.initMap()})):this.importBMapJS().then(function(e){t.BMap=e,window.BMap=e,t.props.onBMapScriptReady&&t.props.onBMapScriptReady(),t.setState({isReady:!0},function(){t.initMap()})})},e.prototype.initMap=function(){var t=this,e=this.BMap,n=this.props,o=n.config,r=n.zoom,n=n.center;this.map=new e.Map(this.ref.current,o),this.initMapControl(),this.map.centerAndZoom(new e.Point(n.lon,n.lat),r),this.map.addEventListener("tilesloaded",function(){var e;t.isLoad||(t.isLoad=!0,(e=document.querySelector(".anchorBL"))&&e.parentElement.removeChild(e),setTimeout(function(){t.ref.current.style.background='url("'+loadGridIcon+'") repeat #fff;'},2e3))})},e.prototype.initMapControl=function(){var e=this.BMap;this.map.addControl(new e.NavigationControl)},e.prototype.importBMapJS=function(){var t=this;return new Promise(function(o){var r=document.write;document.write=function(e){var t=document.createElement("div");t.innerHTML=e;var n,t=t.firstElementChild;"script"===t.tagName.toLowerCase()&&-1!==t.getAttribute("src").indexOf("http://api.map.baidu.com")?(n=t.getAttribute("src"),new Promise(function(e){var t=document.createElement("script");t.onload=function(){e(window.BMap)},t.src=n,document.querySelector("head").appendChild(t)}).then(function(e){o(e)})):r(e)};var e=document.createElement("script");e.src="http://api.map.baidu.com/api?v=3.0&ak="+t.props.ak,document.querySelector("head").appendChild(e)})},e.prototype.renderLoading=function(){return React.createElement("div",null,"loading")},e.prototype.render=function(){var e=this,t=this.props,n=t.className,o=t.style,t=this.state.isReady;return React.createElement(ConditionalRender,{conditional:t,noMatch:function(){return e.renderLoading()}},function(){return React.createElement("div",{className:classNames(selectorPrefix,n.split(" ")),style:__assign({},o),ref:e.ref})})},e}(React.Component);BMap.defaultProps={className:"",style:{},ak:"bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp",config:{minZoom:2,maxZoom:20,enableHighResolution:!0,enableAutoResize:!0,enableMapClick:!0},zoom:5,center:{lon:116.404,lat:39.915},externalImportBMapScript:!1},BMap.propTypes={className:PropTypes.string,style:PropTypes.object,ak:PropTypes.string,zoom:PropTypes.number,center:PropTypes.object,config:PropTypes.shape({minZoom:PropTypes.number,maxZoom:PropTypes.number,mapType:PropTypes.object,enableHighResolution:PropTypes.boolean,enableAutoResize:PropTypes.boolean,enableMapClick:PropTypes.boolean}),onBMapScriptReady:PropTypes.func,externalImportBMapScript:PropTypes.bool};export default BMap;
//# sourceMappingURL=bmap.js.map
