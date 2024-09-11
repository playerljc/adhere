import _ConfigProvider from"antd/es/config-provider";import{createFactory}from"../util";import DatePicker from"./DatePicker";var reducer=[DatePicker],ConfigProviderHOC=createFactory(_ConfigProvider,{},function(e){return reducer.forEach(function(r){return r(e)}),e});ConfigProviderHOC.displayName="ConfigProvider";export default ConfigProviderHOC;
//# sourceMappingURL=ConfigProvider.js.map
