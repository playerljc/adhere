var BMap,BMapWindLayer,BMapAirPressureLayer,HeatMapLayer,Vector,Util,isLoad=!1;function importBMapJS(r){return new Promise(function(i){var e,n=document.write;document.write=function(e){var a=document.createElement("div");a.innerHTML=e;var r,t=a.firstElementChild;"script"===(null==t?void 0:t.tagName.toLowerCase())&&-1!==(null===(a=null==t?void 0:t.getAttribute("src"))||void 0===a?void 0:a.indexOf("http://api.map.baidu.com"))?(r=t.getAttribute("src"),new Promise(function(e){var a=document.createElement("script");a.onload=function(){e("undefined"!=typeof window&&window.BMap)},a.src=r,document.querySelector("head").appendChild(a)}).then(function(e){i(e)})):n(e)};var a=document.createElement("script");a.src="http://api.map.baidu.com/api?v=3.0&ak="+r,null!==(e=null===document||void 0===document?void 0:document.querySelector("head"))&&void 0!==e&&e.appendChild(a)})}export default function(e){return void 0===e&&(e="bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp"),new Promise(function(o){isLoad?o({BMap:BMap,BMapWindLayer:BMapWindLayer,BMapAirPressureLayer:BMapAirPressureLayer,HeatMapLayer:HeatMapLayer,Vector:Vector,Util:Util}):importBMapJS(e).then(function(){isLoad=!0,Promise.all([import("./bmap"),import("./airpressurelayer"),import("./heatmaplayer"),import("./windlayer"),import("./util"),import("./vector")]).then(function(e){var a=e[0],r=e[1],t=e[2],i=e[3],n=e[4],e=e[5];BMap=a.default,BMapWindLayer=i.default,BMapAirPressureLayer=r.default,HeatMapLayer=t.default,Vector=e,Util=n.default,o({BMap:BMap,BMapWindLayer:BMapWindLayer,BMapAirPressureLayer:BMapAirPressureLayer,HeatMapLayer:HeatMapLayer,Vector:Vector,Util:Util})})})})}
//# sourceMappingURL=index.js.map
