import _ConfigProvider from"antd/es/config-provider";import{createFactory}from"../util";import DatePicker from"./DatePicker";let reducer=[DatePicker],ConfigProviderHOC=createFactory(_ConfigProvider,{},e=>(reducer.forEach(r=>r(e)),e));ConfigProviderHOC.displayName="ConfigProvider";export default ConfigProviderHOC;
//# sourceMappingURL=ConfigProvider.js.map
