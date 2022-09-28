"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Feature_js_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("ol/Feature.js"))),Map_1=__importDefault(require("ol/Map")),Overlay_js_1=__importDefault(require("ol/Overlay.js")),View_1=__importDefault(require("ol/View")),control_js_1=require("ol/control.js"),MousePosition_js_1=__importDefault(require("ol/control/MousePosition.js")),ScaleLine_js_1=__importDefault(require("ol/control/ScaleLine.js")),Zoom_js_1=__importDefault(require("ol/control/Zoom.js")),coordinate_1=require("ol/coordinate"),extent_js_1=require("ol/extent.js"),geom_1=require("ol/geom"),Circle_1=__importDefault(require("ol/geom/Circle")),LinearRing_1=__importDefault(require("ol/geom/LinearRing")),Polygon_1=__importDefault(require("ol/geom/Polygon")),Draw_js_1=__importStar(require("ol/interaction/Draw.js")),Modify_1=__importDefault(require("ol/interaction/Modify")),layer_js_1=require("ol/layer.js"),proj_js_1=require("ol/proj.js"),source_js_1=require("ol/source.js"),style_js_1=require("ol/style.js"),Text_1=__importDefault(require("ol/style/Text")),uuid_1=require("uuid"),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),geolayer_1=__importDefault(require("./geolayer")),TitleLayer=__importStar(require("./titlelayer")),windlayer_1=__importDefault(require("./windlayer")),EARTH_RADIUS=adhere_util_resource_1.default.Dict.value.ResourceGisEarthRadius.value,DEFAULT_COLOE="#1788F3";function getMinZoom(e){e=e.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}function transformLonLat(e){return proj_js_1.transform(e,adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value)}exports.default={SHOWBASESTATION_MINZOOM:5,createMap:function(e){var t=e.config,r=e.fitZoom,o=e.zoom,o=void 0===o?getMinZoom(t.target)||3:o,n=e.minZoom,n=void 0===n?getMinZoom(t.target)||3:n,a=e.maxZoom,a=void 0===a?adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value:a,i=e.center,i=void 0===i?adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value:i,u=e.extent,l=void 0===u?adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquMapExtent.value:u,u=e.layers,e=void 0===u?[TitleLayer.getOSMTileLayer()]:u,s=new Map_1.default(__assign(__assign({},t),{controls:control_js_1.defaults({attributionOptions:{collapsible:!1}}).extend([new Zoom_js_1.default,new ScaleLine_js_1.default,new MousePosition_js_1.default({coordinateFormat:coordinate_1.createStringXY(5),projection:adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value})]),pixelRatio:1,view:new View_1.default({center:proj_js_1.fromLonLat(i),minZoom:n,maxZoom:a,zoom:o,extent:proj_js_1.transformExtent(extent_js_1.boundingExtent(l),adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value)}),layers:e}));return setTimeout(function(){var e;e=r||(e=[].concat(proj_js_1.fromLonLat(l[0])).concat(proj_js_1.fromLonLat(l[1])),e=s.getView().getResolutionForExtent(e),s.getView().getZoomForResolution(e)),s.getView().setZoom(e)},100),s},setOverlayState:function(e,t){e.setPosition(t)},addClickListener:function(){var e,i;return function(t,r,o,n,a){void 0===o&&(o=function(e){}),void 0===n&&(n=function(e){});e&&t.un("click",e),i&&t.un("pointermove",i),e=function(e){e.dragging||(e=e.pixel,t.forEachFeatureAtPixel(e,function(e,t){return(t===r?o:n)(e),!0}))},i=function(e){e.dragging||t.forEachFeatureAtPixel(e.pixel,function(e,t){return a(t===r?"pointer":""),!0})},t.on("click",e),t.on("pointermove",i)}}(),addHoverListener:function(){var e;return function(o,n,a,i){e&&o.un("pointermove",e),e=function(e){var r;e.dragging||(e=o.getEventPixel(e.originalEvent),r=!1,o.forEachFeatureAtPixel(e,function(e,t){return r=!0,(t===n?(o.getTarget().style.cursor="pointer",a):(o.getTarget().style.cursor="",i))(e),!0}),r||i())},o.on("pointermove",e)}}(),addGeoLayer:function(e,t,r,o){t=new geolayer_1.default(t,r=void 0===r?function(){}:r,o=void 0===o?0:o);return e.addLayer(t),t},addWindLayer:function(e,t,r,o){void 0===o&&(o=0);o=new windlayer_1.default(t,r);return e.addLayer(o),o},addVectorLayer:function(e,t){var r=new source_js_1.Vector,t=new layer_js_1.Vector({source:r,zIndex:t});return e.addLayer(t),{vectorLayer:t,vectorSource:r}},createHeatMapLayer:function(e){var t=new source_js_1.Vector;return{layer:new layer_js_1.Heatmap(__assign({source:t,gradient:["#00005c","#020288","#0202c0","#0ff","#0f0","#ff0","#f00"],weight:function(){return 1},shadow:500,blur:15,radius:20},e)),vectorSource:t}},drawCircle:function(e){var t=e.center,r=e.radius,o=e.color,o=void 0===o?"rgba(23,136,243,.2)":o,n=e.strokeColor,n=void 0===n?DEFAULT_COLOE:n,a=e.strokeWidth,a=void 0===a?2:a,i=e.zIndex,i=void 0===i?adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:i,u=e.id,u=void 0===u?uuid_1.v4():u,e=e.propertys,e=void 0===e?{}:e,i=new Feature_js_1.default(__assign({zIndex:i,geometry:new Circle_1.default(t,r)},e));return i.setId(u),i.setStyle(new style_js_1.Style({fill:new style_js_1.Fill({color:o}),stroke:new style_js_1.Stroke({width:a,color:n})})),i},drawPolygon:function(e){var t=e.points,r=e.color,r=void 0===r?"rgba(23,136,243,.2)":r,o=e.strokeColor,o=void 0===o?DEFAULT_COLOE:o,n=e.strokeWidth,n=void 0===n?2:n,a=e.zIndex,a=void 0===a?adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:a,i=e.id,i=void 0===i?uuid_1.v4():i,e=e.propertys,e=void 0===e?{}:e,a=new Feature_js_1.default(__assign({zIndex:a,geometry:new Polygon_1.default(t)},e));return a.setId(i),a.setStyle(new style_js_1.Style({fill:new style_js_1.Fill({color:r}),stroke:new style_js_1.Stroke({width:n,color:o})})),a},drawCirclePoint:function(e){var t=e.id,r=e.pos,o=e.fillOpt,o=void 0===o?{color:"rgba(23,136,243,.2)"}:o,n=e.strokeOpt,n=void 0===n?{width:2,color:DEFAULT_COLOE}:n,a=e.radius,a=void 0===a?10:a,i=e.textOpt,i=void 0===i?{}:i,u=e.zIndex,u=void 0===u?1:u,l=e.text,l=void 0===l?"":l,e=e.propertys,e=void 0===e?{}:e,r=new Feature_js_1.default(__assign({zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},e));return r.setId(t),r.setStyle(new style_js_1.Style({image:new style_js_1.Circle({fill:new style_js_1.Fill(o),stroke:new style_js_1.Stroke(n),radius:a}),text:new Text_1.default(__assign({text:l,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},i)),zIndex:u})),r},drawRegularShapePoint:function(e){var t=e.id,r=e.pos,o=e.fillOpt,o=void 0===o?{color:"rgba(23,136,243,.2)"}:o,n=e.strokeOpt,n=void 0===n?{width:2,color:DEFAULT_COLOE}:n,a=e.text,a=void 0===a?"":a,i=e.textOpt,i=void 0===i?{}:i,u=e.zIndex,u=void 0===u?1:u,l=e.propertys,l=void 0===l?{}:l,e=__rest(e,["id","pos","fillOpt","strokeOpt","text","textOpt","zIndex","propertys"]),r=new Feature_js_1.default(__assign({zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},l));return r.setId(t),r.setStyle(new style_js_1.Style({image:new style_js_1.RegularShape(__assign({fill:new style_js_1.Fill(o),stroke:new style_js_1.Stroke(n)},e)),text:new Text_1.default(__assign({text:a,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},i)),zIndex:u})),r},drawImagePoint:function(e){var t=e.id,r=e.pos,o=e.zIndex,o=void 0===o?1:o,n=e.src,a=e.color,i=e.opacity,u=e.scale,l=e.anchor,s=e.rotation,s=void 0===s?0:s,c=e.offset,c=void 0===c?[0,0]:c,_=e.offsetOrigin,d=e.size,f=e.text,f=void 0===f?"":f,g=e.textOpt,g=void 0===g?{}:g,e=e.propertys,e=void 0===e?{}:e,r=new Feature_js_1.default(__assign({zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,geometry:new geom_1.Point(r)},e));return r.setId(t),r.setStyle(new style_js_1.Style({image:new style_js_1.Icon({color:a,src:n,anchor:l,opacity:i,scale:u,rotation:s,offset:c,offsetOrigin:_,size:d}),fill:new style_js_1.Fill({color:"#fff"}),text:new Text_1.default(__assign({text:f,textAlign:"center",fill:new style_js_1.Fill({color:"#fff"})},g)),zIndex:o})),r},createRegularPolygonCurve:function(e,t,r,o,n){for(var a=360-o,i=Math.PI*(1/r-.5),u=(a&&(i+=a/180*Math.PI),[]),l=0;l<r;++l){var s=i+2*(l*((360-a)/360))*Math.PI/r,c=e[0]+t*Math.cos(s),s=e[1]+t*Math.sin(s);u.push([c,s])}0!=a&&u.push(e);var _=new LinearRing_1.default(u),n=(_.rotate(Math.PI-(n-o/2)/180*Math.PI,e),new Polygon_1.default([u])),o=_.A;return n.A=o,n},removeFeature:function(e,t){e.removeFeature(t)},removeAllFeature:function(e){e.clear()},removeAllOverlay:function(e){e.getOverlays().clear()},setMapCenterAnimate:function(e){var t=e.map,r=e.point,e=e.duration,e=void 0===e?600:e;t.getView().animate({center:r,duration:e})},drawLine:function(e){var t=e.points,r=e.width,o=e.color,n=e.lineCap,n=void 0===n?"square":n,e=e.lineJoin,e=void 0===e?"round":e,t=new Feature_js_1.default({geometry:new geom_1.LineString(t)});return t.setStyle(new style_js_1.Style({stroke:new style_js_1.Stroke({width:r,color:o,lineCap:n,lineJoin:e})})),t},createInteraction:function(e,t){var r=t.onDrawStart,t=new Draw_js_1.default(t);return t.on("drawstart",function(e){r&&r(e)}),e.addInteraction(t),t},polygonInteraction:function(e){var a=e.map,t=e.freehand,t=void 0===t||t,r=e.vectorSource,i=e.onDrawEnd,e=__rest(e,["map","freehand","vectorSource","onDrawEnd"]),r=this.createInteraction(a,__assign({source:r,type:"Polygon",freehand:t},e));return r.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=[],o=t.getCoordinates()[0].map(function(e){return r.push(transformLonLat(e)),e}),n=a.getView().getCenter();i&&i({e:e,geometry:t,coordinates:o,lonlats:r,centerp:n,transformCenterp:transformLonLat(n)})}),r},circleInteraction:function(e){var t=e.map,r=e.vectorSource,n=e.onDrawEnd,e=__rest(e,["map","vectorSource","onDrawEnd"]),t=this.createInteraction(t,__assign({source:r,type:"Circle",freehand:!0},e));return t.on("drawend",function(e){var t=e.feature.getGeometry(),r=t.getRadius(),o=t.getCenter();e.feature.setId(uuid_1.v4()),n&&n({e:e,geometry:t,radius:r,center:o,transformCenter:transformLonLat(o)})}),t},boxInteraction:function(e){var n=e.map,t=e.vectorSource,a=e.onDrawEnd,e=__rest(e,["map","vectorSource","onDrawEnd"]),t=this.createInteraction(n,__assign({source:t,type:"Circle",freehand:!0,geometryFunction:Draw_js_1.createBox()},e));return t.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=t.getCoordinates()[0].map(function(e){return e}),o=n.getView().getCenter();a&&a({e:e,geometry:t,coordinates:r,centerp:o})}),t},linStringInteraction:function(e){var i=e.map,t=e.freehand,t=void 0===t||t,r=e.vectorSource,u=e.onDrawEnd,e=__rest(e,["map","freehand","vectorSource","onDrawEnd"]),r=this.createInteraction(i,__assign({source:r,type:"LineString",freehand:t},e));return r.on("drawend",function(e){e.feature.setId(uuid_1.v4());var t=e.feature.getGeometry(),r=[],o=t.getCoordinates().map(function(e){return r.push(transformLonLat(e)),e}),n=i.getView().getCenter(),a=t.getLength().toFixed(3);u&&u({e:e,geometry:t,coordinates:o,lonlats:r,centerp:n,mileage:a,transformCenterp:transformLonLat(n)})}),r},createModifyInteraction:function(e){var t=e.map,r=e.vectorSource,o=e.onModifyEnd,e=new Modify_1.default({source:r});return e.on("modifyend",function(e){var t=e.features.getArray(),t=t[t.length-1].getGeometry();o({e:e,geometry:t})}),t.addInteraction(e),e},removeInteraction:function(e,t){e.removeInteraction(t)},removeInteractionAll:function(e){e.getInteractions().clear()},mapFit:function(e,t,r){void 0===t&&(t={}),0!==(e=void 0===e?[]:e).length&&r.getView().fit(e,__assign({padding:[40,40,40,40],constrainResolution:!1,nearest:!0,duration:200},t))},addArrowsSource:function(e){for(var t=e.points,r=e.color,o=e.icon,n=[],a=0;a<t.length-1;a++){var i=t[a],u=t[a+1],l=u[0]-i[0],i=u[1]-i[1],i=Math.atan2(i,l),l=new Feature_js_1.default({geometry:new geom_1.Point(u)});l.setStyle(new style_js_1.Style({image:new style_js_1.Icon({color:r,src:o,anchor:[.5,.5],rotateWithView:!0,rotation:-i})})),n.push(l)}return n},addArrowsOverlay:function(e,t,r,o){for(var n=0;n<o.length-1;n++){var a=o[n],i=o[n+1],u=i[0]-a[0],a=i[1]-a[1],a=Math.atan2(a,u)*(180/Math.PI),u=document.createElement("div");u.className="fa fa-caret-right overleayArrowPoint",u.style.transform="rotate("+-a+"deg)",u.style.color=r,t.appendChild(u),this.addOverlay(e,i,u)}},addOverlay:function(e,t,r){t=new Overlay_js_1.default(t);return e.addOverlay(t),t},getRad:function(e){return e*Math.PI/180},getExtentByCoordinates:function(e){if(0===e.length)return[];if(1===e.length)return[].concat(e[0],e[0]);for(var t=[],r=[],o=0;o<e.length;o++){var n=e[o];t.push(n[0]),r.push(n[1])}return t.sort(function(e,t){return e<t?-1:t<e?1:0}),r.sort(function(e,t){return e<t?-1:t<e?1:0}),[t[0],r[0],t[t.length-1],r[r.length-1]]},getExtentByVectorSource:function(e,t){e=this.getCectorSourceCoordinates(e,t=void 0===t?"Point":t);return this.getExtentByCoordinates(e)},getCectorSourceCoordinates:function(e,o){void 0===o&&(o="Point");var n=[];return e.getFeatures().filter(function(e){return e.getGeometry().getType()===o}).map(function(e){var t,r,e=e.getGeometry();"Circle"===o?(t=e.getExtent(),n.push([t[0],t[1]]),n.push([t[2],t[3]])):"Point"===o?(r=e.getCoordinates(),n.push(r)):(r=e.getCoordinates(),n=n.concat(r))}),n},getCenterByCoordinates:function(e,o){void 0===o&&(o="Point");var n=[];return e.getFeatures().filter(function(e){return e.getGeometry().getType()===o}).map(function(e){var t,r,e=e.getGeometry();"Circle"===o?(t=e.getExtent(),n.push([t[0],t[1]]),n.push([t[2],t[3]])):"Point"===o?(r=e.getCoordinates(),n.push(r)):(r=e.getCoordinates(),n=n.concat(r))}),this.getCenterByPoints(n)},getCenterByPoints:function(e){for(var t=[],r=[],o=0;o<e.length;o++){var n=proj_js_1.transform(e[o],adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value,adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value);t.push(n[0]),r.push(n[1])}return{centerLon:Math.min.apply(Math,t)+(Math.max.apply(Math,t)-Math.min.apply(Math,t))/2,centerLat:Math.min.apply(Math,r)+(Math.max.apply(Math,r)-Math.min.apply(Math,r))/2}},getPointsExtent:function(e){for(var t=[],r=[],o=0;o<e.length;o++){var n=proj_js_1.transform(e[o],adhere_util_resource_1.default.Dict.value.ResourceGisEpsg4326.value,adhere_util_resource_1.default.Dict.value.ResourceGisEpsg3857.value);t.push(n[0]),r.push(n[1])}return{leftTop:[Math.min.apply(Math,t),Math.min.apply(Math,r)],rightBottom:[Math.max.apply(Math,t),Math.max.apply(Math,r)]}},getFlatternDistance:function(e,t,r,o){var n=this.getRad((e+r)/2),e=this.getRad((e-r)/2),r=this.getRad((t-o)/2),t=EARTH_RADIUS,o=Math.sin(e),e=Math.sin(r),r=Math.sin(n),n=(o*=o)*(1-(e*=e))+(1-(r*=r))*e,e=(1-o)*(1-e)+r*e,a=Math.atan(Math.sqrt(n/e)),i=Math.sqrt(n*e)/a;return 2*a*t*(1+1/298.257*((3*i-1)/2/e*r*(1-o)-(3*i+1)/2/n*(1-r)*o))},wrapLon:function(e){return e-360*Math.floor((e+180)/360)},getMapExtent:function(e){var t,r,o;return!!e&&(e=e.getView().calculateExtent(e.getSize()),t=proj_js_1.toLonLat(extent_js_1.getBottomLeft(e)),r=(e=proj_js_1.toLonLat(extent_js_1.getTopRight(e)))[1],e=this.wrapLon(e[0]),[{lon:o=this.wrapLon(t[0]),lat:r},{lon:e,lat:r},{lon:e,lat:e=t[1]},{lon:o,lat:e},{lon:o,lat:r}])},getFeaturesInExtent:function(e,t){t=t.getGeometry().getExtent();return e.getLayers().getArray()[1].getSource().getFeaturesInExtent(t)},getLayersCount:function(e){return e.getLayers().getLength()},rgb:function(){return"("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},color16:function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());return"#"+e.toString(16)+t.toString(16)+r.toString(16)},getLineColor:function(e){return 0<=e&&e<=9?["red","green","blue","yellow","gray","#0000cc","#99ffff","#000000","#003333","#ff6600"][e]:this.color16()},downLoadMap:function(e){e.once("postcompose",function(e){var e=e.context.canvas.toDataURL(),t=document.createElement("a"),r=new MouseEvent("click");t.download="map",t.href=e,t.dispatchEvent(r)}),e.renderSync()}};
//# sourceMappingURL=util.js.map
