import _Toast from"antd-mobile/es/components/toast";var GlobalIndicatorComponent={show:function(o,n){return void 0===o&&(o=document.body),_Toast.show({content:n=void 0===n?"":n,maskClickable:!1,icon:"loading",getContainer:null!=o?o:document.body,duration:0})},hide:function(o){o.close()},hideAll:function(){_Toast.clear()}};export default GlobalIndicatorComponent;
//# sourceMappingURL=GlobalIndicator.js.map
