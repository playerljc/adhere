import{createFactory}from"../util";import Context from"./Context";import InternalConfigProvider,{getToken}from"./InternalConfigProvider";var ConfigProvider=createFactory(InternalConfigProvider,{});ConfigProvider.displayName="ConfigProvider",ConfigProvider.Context=Context,ConfigProvider.getToken=getToken;export default ConfigProvider;
//# sourceMappingURL=ConfigProvider.js.map
