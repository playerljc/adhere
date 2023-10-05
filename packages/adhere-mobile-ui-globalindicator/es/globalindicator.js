import _Toast from"antd-mobile/es/components/toast";export default{show:function(o,t){return void 0===o&&(o=document.body),_Toast.show({content:t=void 0===t?"":t,maskClickable:!1,icon:"loading",getContainer:null!=o?o:document.body,duration:0})},hide:function(o){o.close()},hideAll:function(){_Toast.clear()}};
//# sourceMappingURL=globalindicator.js.map
